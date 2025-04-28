import { create } from "zustand";

export interface UserStore {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  username: "",
  email: "",
  setUsername: (username: string) => set(() => ({ username })),
  setEmail: (email: string) => set(() => ({ email })),
}));
