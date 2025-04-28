import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserSlice {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export interface UserTwoSlice {
  username: string;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  username: "John Doe",
  email: "",
  setUsername: (username: string) => set(() => ({ username })),
  setEmail: (email: string) => set(() => ({ email })),
});

export const createUserTwoSlice: StateCreator<UserTwoSlice> = (set) => ({
  username: "John Doe 2",
});

export const useAppStore = create(
  devtools<UserSlice & UserTwoSlice>((...a) => ({
    ...createUserSlice(...a),
    ...createUserTwoSlice(...a),
  }))
);
