"use client";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message });
        // Reset form on success
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: data.error });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch">
      <div className="get-in-touch">
        <form onSubmit={handleSubmit} className="get-in-touch-form">
          <label htmlFor="name_input" className="name_input">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name_input"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />

          <label htmlFor="email_input" className="email_input">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email_input"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />

          <label htmlFor="message_input" className="message_input">
            Message:
          </label>
          <textarea
            name="message"
            id="message_input"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          ></textarea>

          <button type="submit" className="form-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
