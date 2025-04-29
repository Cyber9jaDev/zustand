import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserStore {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostsStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  removePost: (id: number) => void;
}

export const useUserStore = create(
  devtools<UserStore>(
    (set) => ({
      username: "John Doe",
      email: "",
      setUsername: (username: string) => set(() => ({ username })),
      setEmail: (email: string) => set(() => ({ email })),
    }),
    { name: "user" }
    // { name: "user", store: "user" }
  )
);

export const usePostsStore = create(
  devtools<PostsStore>(
    (set) => ({
      posts: [],
      setPosts: (posts: Post[]) => set(() => ({ posts })),
      addPost: (post: Post) =>
        set((state) => ({
          posts: [...state.posts, post],
        })),
      removePost: (postId: number) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== postId),
        })),
    }),
    { name: "posts" }
    // { name: "posts", store: "posts" }
  )
);
