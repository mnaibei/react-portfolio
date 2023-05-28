import React from 'react';
import {
  FaSwift, FaReact, FaGithub, FaDesktop,
} from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

import weather from '../images/weatherapp.png';
import landmarks from '../images/landmarks.png';
import todo from '../images/todolist.png';
import crypto from '../images/cryptotracker.png';
import mdawida from '../images/mdawidahomestay.onrender.com_home.png';
import '../styles/projects.css';

const Projects = () => (
  <div className="projects">
    <h1>Projects</h1>
    <ul className="project-links">
      <li>
        <div className="project-item">
          <img src={weather} alt={weather} className="project-image" />
          <div className="project-details">
            <h2>Weather App</h2>
            <p>
              The Weather App is a comprehensive tool built using Swift and OpenWeather API
              for checking real-time weather conditions of any location. With a user-friendly
              interface, it provides accurate and up-to-date weather data including temperature,
              humidity, wind speed, and more. The app ensures weather updates for the current
              time and up to seven days in advance.
            </p>
            <p className="built">
              Built with:
              <FaSwift />
              {' '}
              SwiftUI
            </p>
            <div className="project-links-container">
              <a href="https://github.com/mnaibei/WeatherApp" className="project-link">
                <FaGithub />
                {' '}
                View Code
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="project-item">
          <img src={landmarks} alt={landmarks} className="project-image" />
          <div className="project-details">
            <h2>Landmarks App</h2>
            <p>
              The Landmarks App showcases various landmarks in Kenya. It features a Featured page,
              a list of landmarks, and a Details page providing additional information about each
              landmark. The app also includes a Favorites function that allows users to mark their
              preferred landmarks and apply filters accordingly.
            </p>
            <p className="built">
              Built with:
              <FaSwift />
              {' '}
              SwiftUI
            </p>
            <div className="project-links-container">
              <a href="https://github.com/mnaibei/Landmarks" className="project-link">
                <FaGithub />
                {' '}
                View Code
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="project-item">
          <img src={crypto} alt={crypto} className="project-image" />
          <div className="project-details">
            <h2>Cryptocurrency Mobile Web App</h2>
            <p>
              The Cryptocurrency Tracker mobile web app is a powerful tool built with
              React and Redux, leveraging async thunk middleware to retrieve real-time
              data from a cryptocurrency API. With this app, users can stay informed
              about the latest trends in the cryptocurrency market. The app provides
              up-to-date metrics for various cryptocurrencies, including their current
              values and percentage changes over the past 1 hour, 24 hours, and 7 days.
              By utilizing Redux for state management, the app ensures seamless data
              synchronization and allows users to track multiple cryptocurrencies
              simultaneously. The user-friendly interface provides an intuitive experience,
              making it easy to navigate through different coins and access detailed information.
            </p>
            <p className="built">
              Built with:
              <FaReact />
              {' '}
              ReactJS,
              <SiRedux />
              {' '}
              Redux
            </p>
            <div className="project-links-container">
              <a href="https://github.com/mnaibei/react-capstone" className="project-link">
                <FaGithub />
                {' '}
                View Code
              </a>
              <a href="https://cryptotracker-1qgb.onrender.com" className="project-link">
                <FaDesktop />
                {' '}
                Demo
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="project-item">
          <img src={todo} alt={todo} className="project-image" />
          <div className="project-details">
            <h2>Todo List Web App</h2>
            <p>
              The Todo List Web App is a sleek and efficient task management tool built with React.
              It enables users to seamlessly add, edit, and remove tasks, providing a streamlined
              interface for organizing daily to-do lists. The app leverages local storage to ensure
              data persistence, preserving tasks even when the page is refreshed or the browser is
              closed. With its user-friendly design and essential features, the Todo List Web App
              empowers users to stay organized, prioritize tasks, and enhance productivity.
            </p>
            <p className="built">
              Built with:
              <FaReact />
              {' '}
              ReactJS
            </p>
            <div className="project-links-container">
              <a href="https://github.com/mnaibei/todo-list-react" className="project-link">
                <FaGithub />
                {' '}
                View Code
              </a>
              <a href="https://todo-list-app-457c.onrender.com" className="project-link">
                <FaDesktop />
                {' '}
                Demo
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="project-item">
          <img src={mdawida} alt={mdawida} className="project-image" />
          <div className="project-details">
            <h2>Mdawida Homestay Web App</h2>
            <p>
              The Mdawida Homestay web app, built using ReactJS, offers a seamless and immersive
              experience for individuals seeking a comfortable and authentic homestay experience.
              With its user-friendly interface and intuitive navigation, users can easily explore
              various accommodation options, view detailed property information, check availability,
              and make reservations with convenience. Whether its a cozy room, a charming cottage,
              or a spacious villa, Mdawida Homestay provides a range of accommodations to suit
              different preferences and budgets. With its responsive design and smooth
              functionality,
              this web app ensures a delightful and hassle-free booking experience for travelers,
              enabling them to create unforgettable memories during their stay at Mdawida Homestay.
            </p>
            <p className="built">
              Built with:
              <FaReact />
              {' '}
              ReactJS
            </p>
            <div className="project-links-container">
              <a href="https://github.com/mnaibei/mdawidahomestay" className="project-link">
                <FaGithub />
                {' '}
                View Code
              </a>
              <a href="https://mdawidahomestay.onrender.com/home" className="project-link">
                <FaDesktop />
                {' '}
                Demo
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default Projects;
