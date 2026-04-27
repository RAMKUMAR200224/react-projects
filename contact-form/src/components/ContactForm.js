import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.queryType) newErrors.queryType = "Select query type";
    if (!form.message) newErrors.message = "Message is required";
    if (!form.consent) newErrors.consent = "You must agree before submitting";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Show toast
      setShowToast(true);

      // Hide after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
    }
  };

  return (
    <div className="form-container">

      
      {showToast && (
        <div className="toast">
          <strong>Message Sent!</strong>
          <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="row">
          <div>
            <label>First Name *</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div>
            <label>Last Name *</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
        </div>

        <label>Email *</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Query Type *</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="queryType"
              value="general"
              checked={form.queryType === "general"}
              onChange={handleChange}
            />
            General Enquiry
          </label>

          <label>
            <input
              type="radio"
              name="queryType"
              value="support"
              checked={form.queryType === "support"}
              onChange={handleChange}
            />
            Support Request
          </label>
        </div>
        {errors.queryType && <p className="error">{errors.queryType}</p>}

        <label>Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <div className="checkbox">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />
          <label>I hereby consent to being contacted *</label>
        </div>
        {errors.consent && <p className="error">{errors.consent}</p>}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}