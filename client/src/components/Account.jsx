const Account = () => {
  return (
    <section className="page" id="account">
      <h2>My Account</h2>
      <dl>
        <dt>Name</dt>
        <dd className="account_name"></dd>
        <dt>Email</dt>
        <dd className="account_username"></dd>
      </dl>
      {/* logout event handler */}
      <button onClick={() => {}}>Log out</button>
    </section>
  );
};

export default Account;
