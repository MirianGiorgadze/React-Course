import { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useContext(LanguageContext);
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Name: ${form.name}\nMessage: ${form.message}`);
    setForm({ name: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card-container">
      <h2>Contact Us</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Your Name"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        value={form.message}
        placeholder="Your Message"
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
