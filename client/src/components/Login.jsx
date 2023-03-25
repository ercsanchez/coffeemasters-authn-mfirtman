const Login = () => {
  return (
    <section className="page" id="login">
      <h2>Log In</h2>
      <form id="formLogin">
        <fieldset>
          <input placeholder="email" id="login_email" required />
          <label htmlFor="login_password">Password</label>
          <input type="password" id="login_password" />
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
