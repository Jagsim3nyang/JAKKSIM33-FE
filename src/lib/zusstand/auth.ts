import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStoreProps {
  user: null | string;
  setUser: (user: string) => void;
}

export const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
    }
  )
);
