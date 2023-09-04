import avatar from '../images/avatar.png';
import '../styles/home.css';

const Home = () => (
  <div className="home">
    <img src={avatar} alt={avatar} />
    <div className="home-content">
      <h1 className="title">IT specialist, software engineer</h1>
      <span className="about-me">
        <p>
          Hello, I am Mucha Naibei, an IT Specialist/Consultant with over six years of experience.
          I am passionate about enhancing IT security, implementing cutting-edge technologies,
          and delivering top-notch solutions.
          Beyond IT, I am a skilled software engineer dedicated to continuous
          learning and staying updated with industry trends.
          I thrive in fast-paced environments, solving challenges, and exceeding customer
          expectations.
          I bring problem-solving prowess, effective time management, and teamwork to every project.
        </p>
      </span>
      <a className="view-resume-button" href="/resume">View Resume</a>
    </div>
  </div>
);

export default Home;
