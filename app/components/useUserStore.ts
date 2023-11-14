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
    setUser: (user: User) => void;
    setIsVerified: (isVerified: boolean) => void; 
    setError: (error: string) => void;
    logout: () => void;
  }
  

  const useUserStore = create<UserState>((set) => ({
    user: null,
    isVerified: false,
    isAuthenticated: false,
    error: null,
    setUser: (user) => set((state) => ({
      user,
      isAuthenticated: !!user,
      isVerified: state.isVerified,
      error: state.error
    })),
    setIsVerified: (isVerified) => set({ isVerified }),
    setError: (error) => set({ error }),
    logout: () => set({ user: null, isAuthenticated: false, isVerified: false, error: null}),
  }))

  export default useUserStore
