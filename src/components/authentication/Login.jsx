import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [data, setData] = useState();
  const navigate = useNavigate();

  if (data?.email && data?.username) {
    localStorage.setItem("authToken", data?.token);
    navigate("/");
  }

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-center">
      <div className="max-w-xs mx-auto">
        <h1 className="text-3xl">Login</h1>
        <form onClick={handleLogin}>
          <div className="mt-5 mb-3">
            <label
              className="w-full inline-block text-2xl mb-2"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="focus:outline-none border h-10 w-full px-5 border-slate-500 rounded-2xl"
              type="text"
              id="userName"
              name="userName"
              placeholder="user name"
              required
            />
          </div>
          <div className="mt-5 mb-3">
            <label
              className="w-full inline-block text-2xl mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="focus:outline-none border h-10 w-full px-5 border-slate-500 rounded-2xl"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
            />
          </div>
          <button type="submit" className="mt-3 px-5 py-2 border rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
