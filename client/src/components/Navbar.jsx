import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <header>
      <h1>
        <img src={logo} width="140" alt="Coffee Masters" />
      </h1>
      <nav>
        <a className="navlink material-symbols-outlined" id="linkHome" href="/">
          local_cafe
        </a>
        <a
          className="navlink material-symbols-outlined"
          id="linkOrder"
          href="/account"
        >
          account_box
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
