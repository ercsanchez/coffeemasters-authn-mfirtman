import { useEffect, useState } from 'react';

const Register = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [registerParams, setRegisterParams] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  const postRegisterUser = async (userData) => {
    const result = await fetch('/api/auth/register', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return result;
  };

  const submitRegisterForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const userData = {
      name: formData.get('name') ?? '',
      email: formData.get('email') ?? '',
      password: formData.get('password') ?? '',
    };

    console.log('userData:', userData);
    console.log('formData:', formData);

    // setRegisterParams(userData);

    const result = await postRegisterUser(userData);
    console.log('response from postRegisterUser', result);
  };

  return (
    <section className="page" id="register">
      <h2>Register</h2>
      <form id="formRegister" onSubmit={submitRegisterForm}>
        <fieldset>
          <label htmlFor="register_name">Your Name</label>
          <input
            id="register_name"
            required
            autoComplete="name"
            // value={name}
            name="name"
          />
          <label htmlFor="register_email">Your Email</label>
          <input
            id="register_email"
            placeholder="Your email"
            required
            type="email"
            autoComplete="username"
            // value={email}
            name="email"
          />
          <label htmlFor="register_password">Your Password</label>
          <input
            type="password"
            id="register_password"
            required
            autoComplete="new-password"
            // value={password}
            name="password"
          />
        </fieldset>
        <button>Register Account</button>
      </form>
    </section>
  );
};

export default Register;
