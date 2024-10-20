import React, { useState } from 'react';
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add form submission logic here (e.g., sending to backend)
  };
  return (
    
    <div className="form-container">
      <h2>Reach Us Anytime</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name..."
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number..."
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Us..."
          />
        </div>
        <div className="form-group full-width">
          <label>Write Your Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What's on your mind"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Now</button>
      </form>
    </div>
  )
}

export default Contact