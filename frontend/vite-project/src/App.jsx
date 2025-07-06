import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './form';
import Display from './display';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={linkStyle}>Form</Link>
          <Link to="/display" style={linkStyle}>Display</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#2c3e50'
};

export default App;
