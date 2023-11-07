import { create } from 'zustand';

interface User {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
  }
  
  interface UserState {
    user: User | null;
    isVerified: boolean;
    error: string | null;
    setUser: (user: User) => void;
    setIsVerified: (isVerified: boolean) => void; 
    setError: (error: string) => void;
  }
  

  const useUserStore = create<UserState>((set) => ({
    user: null,
    isVerified: false,
    error: null,
    setUser: (user) => set({ user }),
    setIsVerified: (isVerified) => set({ isVerified }),
    setError: (error) => set({ error }),
  }))

  export default useUserStore
