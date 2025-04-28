import { ChangeEvent } from "react";
import "./App.css";
import { useUserStore } from "./store/user-store";

function UpdateUserForm() {
  const { username, email, setUsername, setEmail } = useUserStore();
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
    </div>
  );
}

function App() {
  const { email, username } = useUserStore();
  return (
    <>
      <p>{email}</p>
      <p>{username}</p>
      <UpdateUserForm />
    </>
  );
}

export default App;
