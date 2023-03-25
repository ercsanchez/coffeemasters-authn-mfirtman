const Register = () => {
  return (
    <section className="page" id="register">
      <h2>Register</h2>
      <form id="formRegister">
        <fieldset>
          <input placeholder="You Name" id="register_name" required />
          <input
            placeholder="Your email"
            id="register_email"
            required
            type="email"
          />
          <label>Your Password</label>
          <input type="password" id="register_password" required />
        </fieldset>
        <button>Register Account</button>
      </form>
    </section>
  );
};

export default Register;
