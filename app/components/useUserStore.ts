import { create } from 'zustand';

interface User {
    _id: string;
    username: string;
    email?: string;
    isAdmin?: boolean;
    avatar?: string;
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
    setAvatar: (avatarUrl: string) => void;
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
              const avatar = localStorage.getItem('avatar');
              if (avatar) {
                user.avatar = avatar; // Set the avatar in the user object
            }
              console.log('Retrieved user from localStorage:', user);
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
  setAvatar: (avatarUrl) => set((state) => {
    if(state.user) {
      return { user: {...state.user, avatar: avatarUrl }};
    }
    return state;
  }),

  }))

  export default useUserStore
