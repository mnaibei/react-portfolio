import '../styles/contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
  <div className="contact">
    <div className="contact-content">
      <h2>Contact</h2>
      <p>Email: muchajulius@gmail.com</p>
      <p>Location: Nairobi, Kenya</p>
      <div className="social-icons">
        <a href="https://github.com/mnaibei" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/mucha-julius/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
