import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/form');
        setFormData(res.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <h2>📄 Registered Students</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {formData.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>Roll No</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Phone No</th>
              <th style={thStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((entry, index) => (
              <tr key={entry._id} style={index % 2 === 0 ? trStyleEven : trStyleOdd}>
                <td style={tdStyle}>{entry.name}</td>
                <td style={tdStyle}>{entry.age}</td>
                <td style={tdStyle}>{entry.roll_no}</td>
                <td style={tdStyle}>{entry.dept}</td>
                <td style={tdStyle}>{entry.phone_no}</td>
                <td style={tdStyle}>{entry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  backgroundColor: '#1e293b',      // dark navy header
  color: '#ffffff',                // white text
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left'
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  color: '#1e293b',               // dark text
  fontSize: '15px'
};

const trStyleEven = {
  backgroundColor: '#f1f5f9'      // light gray-blue
};

const trStyleOdd = {
  backgroundColor: '#e2e8f0'      // slightly darker shade
};

export default Display;
