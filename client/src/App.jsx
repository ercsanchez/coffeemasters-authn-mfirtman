import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>Navigation</h3>
        <a href="/">Home</a>
        <br />
        <a href="/about">About</a>
        <br />
        <a href="/api/users">Get All Users</a>
        <br />
        <a href="/api/test">Test API route</a>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
