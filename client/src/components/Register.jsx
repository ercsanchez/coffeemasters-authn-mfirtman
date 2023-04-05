const Register = () => {
  return (
    <section className="page" id="register">
      <h2>Register</h2>
      <form id="formRegister">
        <fieldset>
          <label htmlFor="register_name">Your Name</label>
          <input id="register_name" required autocomplete="name" />
          <label htmlFor="register_email">Your Email</label>
          <input
            id="register_email"
            placeholder="Your email"
            required
            type="email"
            autocomplete="username"
          />
          <label htmlFor="register_password">Your Password</label>
          <input
            type="password"
            id="register_password"
            required
            autocomplete="new-password"
          />
        </fieldset>
        <button>Register Account</button>
      </form>
    </section>
  );
};

export default Register;
