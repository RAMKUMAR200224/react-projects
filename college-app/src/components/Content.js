import React, { useState } from "react";
import "../styles/content.css";

function Content() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Data Saved Successfully!");
        // Optional: Reset form after success
        setFormData({
          firstName: "", lastName: "", address: "", 
          email: "", phone: "", course: ""
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName}
          onChange={handleChange} 
          required 
        />
        <input 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName}
          onChange={handleChange} 
          required 
        />
        <input 
          name="address" 
          placeholder="Address" 
          value={formData.address}
          onChange={handleChange} 
          required 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange} 
          required 
        />
        <input 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={handleChange} 
          required 
        />

        <h3>Select Course:</h3>

        <div className="radio-group">
          {["BCA", "BBA", "B.Tech", "MBA", "MCA", "BA", "B.Com", "M.Tech"].map((course, index) => (
            <div className="course-option" key={index}>
              <input
                type="radio"
                id={`course-${index}`}
                name="course"
                value={course}
                checked={formData.course === course}
                onChange={handleChange}
                required
              />
              <label htmlFor={`course-${index}`}>{course}</label>
            </div>
          ))}
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Content;