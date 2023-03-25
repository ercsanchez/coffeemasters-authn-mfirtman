const Home = ({ loggedInStatus }) => {
  return (
    <section className="page" id="home">
      <header>
        <h2>Welcome!</h2>
      </header>

      {/* Logged-out View */}
      {loggedInStatus ? (
        ''
      ) : (
        <section className="logged_out">
          <p>You are currently logged out.</p>
          <p>
            <a href="/login" className="navlink">
              Log in
            </a>
            .
          </p>
        </section>
      )}

      {/* Logged-in View */}
      {loggedInStatus ? (
        <section className="logged_in">
          <p>
            You are currently logged in as{''}
            <span className="account_name navlink"></span>.
          </p>
          <p>
            You can see details of your{''}
            <a href="/accounttton" className="navlink">
              Account
            </a>
          </p>
        </section>
      ) : (
        ''
      )}
    </section>
  );
};

export default Home;
