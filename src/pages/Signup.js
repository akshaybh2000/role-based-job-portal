import { useState } from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signup", data);
      alert(res.data);
      window.location.href = "/";
    } catch {
      alert("Error signing up");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <select onChange={(e) => setData({ ...data, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
