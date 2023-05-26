import avatar from '../images/avatar.png';
import '../styles/home.css';

const Home = () => (
  <div className="home">
    <img src={avatar} alt={avatar} />
    <div className="home-content">
      <h1 className="title">IT specialist, software engineer</h1>
      <span className="about-me"><p>As an experienced Information Technology Specialist/Consultant, I have been successfully providing IT services for over four years. My expertise lies in establishing and implementing security policies, upgrading existing systems, and integrating new technologies. In addition to my IT experience, I am also a skilled software engineer with a strong focus on delivering high-quality code and innovative solutions. I am dedicated to continuous learning and staying up-to-date with the latest industry trends and technologies. As a software engineer, I thrive in fast-paced, challenging environments and always strive to provide innovative solutions that exceed customer expectations. I possess excellent problem-solving abilities, strong time management skills, and the ability to work effectively both independently and as part of a team</p></span>
      <a className="view-resume-button" href="/resume">View Resume</a>
    </div>
  </div>
);

export default Home;
