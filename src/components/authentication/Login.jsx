const Login = () => {
  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-center">
      <div className="max-w-xs mx-auto">
        <h1 className="text-3xl">Login</h1>
        <form action="">
          <div className="mt-5 mb-3">
            <label
              className="w-full inline-block text-2xl mb-2"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              className="focus:outline-none border h-10 w-full px-5 border-slate-500 rounded-2xl"
              type="text"
              id="userName"
              placeholder="user name"
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
              className="focus:outline-none border h-10 w-full px-5 border-slate-500 rounded-2xl"
              type="text"
              id="password"
              placeholder="password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
