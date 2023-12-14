import { create } from 'zustand';

interface User {
    _id: string;
    username: string;
    email?: string;
    isAdmin?: boolean;
  }
  
  interface UserState {
    user: User | null;
    isVerified: boolean;
    isAuthenticated: boolean;
    error: string | null;
    loading: boolean;
    setUser: (user: User) => void;
    setIsVerified: (isVerified: boolean) => void; 
    setError: (error: string) => void;
    logout: () => void;
    initializeUser: () => void;
    persistUser: () => void;
  }
  

  const useUserStore = create<UserState>((set, get) => ({
    user: null,
    isVerified: false,
    isAuthenticated: false,
    error: null,
    loading: true,
    setUser: (user) => set((state) => ({
      user,
      isAuthenticated: !!user,
      isVerified: state.isVerified,
      error: state.error
    })),
    setIsVerified: (isVerified) => set({ isVerified }),
    setError: (error) => set({ error }),
    logout: () => set({ user: null, isAuthenticated: false, isVerified: false, error: null}),

    initializeUser: () => {
      set({ loading: true });
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
          try {
              const user = JSON.parse(savedUser);
              set({ user, isAuthenticated: !!user, isVerified: get().isVerified, loading: false });
            } catch (error) {
              console.error('Failed to parse user from localStorage:', error);
              localStorage.removeItem('user');
              set({ loading: false });
          }
      } else {
        set({ loading: false });
      }
  },
  persistUser: () => {
      const { user } = get();
      localStorage.setItem('user', JSON.stringify(user));
  },
  }))

  export default useUserStore
