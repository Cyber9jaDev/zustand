import { ChangeEvent, useState } from "react";
import "./App.css";
import { usePostsStore, useUserStore } from "./store/user-store";

function UpdateUserForm() {
  const { username, email, setUsername, setEmail } = useUserStore();

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <input
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
    </div>
  );
}

function App() {
  const { email, username } = useUserStore();
  const { posts, addPost, removePost } = usePostsStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postIdCounter, setPostIdCounter] = useState(0);

  return (
    <>
      <p>{email}</p>
      <p>{username}</p>
      <UpdateUserForm />
      <div>
        <b>Create new post</b>
      </div>
      <input
        type="text"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <input
        type="text"
        value={content}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
      />
      <button
        onClick={() => {
          if(!content || !title) return;
          addPost({ id: postIdCounter, content, title });
          setPostIdCounter((prev) => prev + 1);
          setTitle("");
          setContent("");
        }}
      >
        {" "}
        Add Post
      </button>

      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <p>{post.title}</p>
            <p>{post.content}</p>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => removePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
