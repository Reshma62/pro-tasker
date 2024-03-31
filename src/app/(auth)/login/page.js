const LoginPage = () => {
  return (
    <div
      className="m-0 p-0 font-sans flex justify-center items-center min-h-screen bg-gradient-to-br  from-white to-gray-300 bg-no-repeat  bg-cover"
      style={{
        backgroundImage:
          "url('https://media.geeksforgeeks.org/img-practice/prod/courses/543/Web/Content/GATE-DS-AI_1705410035.webp')",
      }}
    >
      <div className="w-3/4 max-w-400">
        <form className="bg-opacity-10 bg-white backdrop-blur-md rounded-lg p-20">
          <h2>Login</h2>
          <div className="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Email or Name"
              name="username"
              required
            />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
