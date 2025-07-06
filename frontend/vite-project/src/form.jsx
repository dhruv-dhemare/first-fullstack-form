import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    roll_no: '',
    dept: '',
    phone_no: '',
    email: ''
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/form', formData);
      setStatus("Form submitted successfully!");
      console.log(res.data);
    } catch (err) {
      setStatus("Failed to submit form.");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        /><br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          required
          value={formData.age}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="roll_no"
          placeholder="Roll Number"
          required
          value={formData.roll_no}
          onChange={handleChange}
        /><br /><br />

        <select
          name="dept"
          required
          value={formData.dept}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="It">IT</option>
          <option value="Cs">CS</option>
          <option value="Entc">ENTC</option>
        </select><br /><br />

        <input
          type="text"
          name="phone_no"
          placeholder="Phone Number"
          required
          value={formData.phone_no}
          onChange={handleChange}
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Form;
