import './contect.css';
import React from 'react';

export default function Contect() {
  async function submit(e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
      const res = await fetch("http://localhost:3001/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (res.ok) {
        const data = await res.json();
        alert("Registration successful");
        console.log("Response data:", data);
      } else {
        console.error("Error:", res.statusText);
        alert("Registration failed");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <title>Contact Us - Ice Cream Delight</title>
      <div className="contact-section">
        <h2>Contact Us 🍦</h2>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required placeholder="Write your message here..."></textarea>
          </div>
          <div className="form-submit">
            <button type="submit" className="submit-btn">Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}
