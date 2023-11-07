import { create } from 'zustand';

interface User {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
  }
  
  interface UserState {
    user: User | null;
    error: string | null;
    setUser: (user: User) => void;
    setError: (error: string) => void;
  }
  

  const useUserStore = create<UserState>((set) => ({
    user: null,
    error: null,
    setUser: (user) => set({ user }),
    setError: (error) => set({ error }),
  }))

  export default useUserStore
