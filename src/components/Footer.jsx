import '../styles/footer.css';

const Footer = () => (
  <footer>
    <p className="footer">
      &copy;
      {new Date().getFullYear()}
      {' '}
      All rights reserved.
    </p>
  </footer>
);

export default Footer;
