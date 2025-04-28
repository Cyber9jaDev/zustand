import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserStore {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create(
  devtools<UserStore>((set) => ({
    username: "",
    email: "",
    setUsername: (username: string) => set(() => ({ username })),
    setEmail: (email: string) => set(() => ({ email })),
  }))
);
