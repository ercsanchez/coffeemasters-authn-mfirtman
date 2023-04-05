const Login = () => {
  return (
    <section className="page" id="login">
      <h2>Log In</h2>
      <form id="formLogin">
        <fieldset>
          <label htmlFor="login_email">Your email</label>
          <input
            id="login_email"
            placeholder="email"
            required
            autocomplete="username"
          />
          <label htmlFor="login_password">Password</label>
          <input
            type="password"
            id="login_password"
            required
            autocomplete="current-password"
          />
        </fieldset>
        <button>Continue</button>
        <p>
          <a href="/register" className="navlink">
            Register a new account instead
          </a>
        </p>
      </form>
    </section>
  );
};

export default Login;
