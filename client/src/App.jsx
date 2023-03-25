import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import About from './components/About';

function App() {
  const [loggedInStatus, setLoginStatus] = useState(false);
  console.log(loggedInStatus);

  return (
    <div className="App">
      <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home loggedInStatus={loggedInStatus} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/account"
              element={!loggedInStatus ? <Account /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
        <br />
        <a href="/">Home</a>
        <br />
        <a href="/about">About</a>
        <br />
        <a href="/api/users">Get All Users</a>
        <br />
        <a href="/api/test">Test API route</a>
      </main>
    </div>
  );
}

export default App;
