import React from 'react';
import './ContactStyle.css';

const Contact = () => {
  return (
    <section id='contact' className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Let's Talk!</h1>
        <p className="contact-description">
          Punya ide kolaborasi, proyek bareng, atau sekadar ingin say hi? 
          Silakan hubungi aku lewat form di bawah. Aku akan segera membalas secepatnya ✨
        </p>
        
        <form className="contact-form">
          <input type="text" placeholder="Nama kamu" required />
          <input type="email" placeholder="Email kamu" required />
          <textarea rows="5" placeholder="Pesan kamu..." required></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
