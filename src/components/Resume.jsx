import '../styles/resume.css';

const Resume = () => (
  <div className="resume">
    <h1 className="resume-title">resume</h1>
    <div className="sections">
      <div className="experience">
        <h2>experience</h2>
        <ul className="experience-links">
          <li className="experience-link">
            2019 - 2023
            <h3>information technology specialist</h3>
            <p>arca tech services</p>
            <ul>
              <li>
                Established and implemented security policies by setting
                up firewalls and configuring anti-spam and antivirus solutions.
                Coordinated smooth upgrades to modernize security systems,
                increasing security and performance.
              </li>
              <li>
                Incorporated new technologies into existing systems to
                improve information management and security.
              </li>
              <li>
                Organized routine maintenance to keep computer systems performing
                effectively and secured against unauthorized access.
              </li>
              <li>
                Implemented a new security policy that reduced the number of
                security breaches by 30% within a short period of time.
              </li>
              <li>
                Upgraded company software and hardware resulting in a 15%
                increase in employee productivity.
              </li>
              <li>
                Successfully integrated new technologies into existing systems,
                reducing overall maintenance costs by 10%.
              </li>
            </ul>
          </li>
          <li className="experience-link">
            2021 - 2022
            <h3>technical assistant</h3>
            <p>spatial collective limited</p>
            <ul>
              <li>
                Coordinated with internal team and consultants to
                gather requirements and develop project scopes.
              </li>
              <li>
                Trained and motivated project staff to deliver needed
                output, meet customer expectations, and achieve scheduled targets.
              </li>
              <li>
                Coordinated with department heads to schedule day to day
                technical support for end-users across the project.
              </li>
              <li>Kept accurate records of procedures, actions taken, and results.</li>
              <li>
                Led instructional sessions to train personnel on software and
                electronics use and troubleshooting.
              </li>
              <li>
                Consistently met or exceeded project deadlines, resulting in a
                95% client satisfaction rating.
              </li>
              <li>
                Successfully trained and motivated a team of 10 project staff
                members, resulting in an 80% increase in productivity.
              </li>
              <li>
                Helped implement a new project management system which reduced
                overall project costs by 20%.
              </li>
            </ul>
          </li>
          <li className="experience-link">
            2018 - 2021
            <h3>GIS specialist</h3>
            <p>spatial collective limited</p>
            <ul>
              <li>
                Collected and compiled geographical information to include
                in the production of new maps and the update of existing ones.
              </li>
              <li>Interpreted aerial or Ortho photographs.</li>
              <li>Developed project documentation to complete consistent and precise work.</li>
              <li>
                Received recognition from management for providing the most
                accurate geographical information used in the production of new maps.
              </li>
            </ul>
          </li>
          <li className="experience-link">
            2017 - 2018
            <h3>information technology consultant</h3>
            <p>freelance</p>
            <ul>
              <li>
                Oriented staff to new equipment and systems, providing live demonstrations
                and answering questions.
              </li>
              <li>
                Scheduled and executed system-wide software installations and upgrades as
                well as diagnosing program malfunctions.
              </li>
              <li>
                Evaluated functionality and performance of software and hardware
                recommending improvements and solutions.
              </li>
              <li>Checked PCs and laptops to troubleshoot, trace and resolve customer issues.</li>
            </ul>
          </li>
          <li className="experience-link">
            2015 - 2016
            <h3>information technology technician</h3>
            <p>wired networks limited</p>
            <ul>
              <li>Set up computers, installed hardware, and configured settings for customers.</li>
              <li>Installed new office wiring, telephones, devices, and CCTV for employee use.</li>
              <li>
                Installed conduit, connection boxes, and devices to complete networks and
                tested pieces for functionality
              </li>
              <li>
                Successfully diagnosed and resolved a high volume of customer issues, resulting
                in a 90% customer satisfaction rating.
              </li>
              <li>
                Trained and orientated new staff members, resulting in a 75% reduction in
                training time required.
              </li>
            </ul>
          </li>
        </ul>

      </div>
      <div className="education">
        <h2>education</h2>
        <ul className="education-links">
          <li className="education-link">
            2023 - 2023
            <h3>full-stack software engineering</h3>
            <p>microverse</p>
          </li>
          <li className="education-link">
            2019 - 2021
            <h3>diploma in information and communication technology</h3>
            <p>nairobi technical training institute</p>
          </li>
        </ul>
        <div className="skills">
          <h2>Skills:</h2>
          <ul className="skills-list">
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">JavaScript</li>
            <li className="skill">React</li>
            <li className="skill">Redux</li>
            <li className="skill">Ruby</li>
            <li className="skill">Ruby on Rails</li>
            <li className="skill">SQL</li>
            <li className="skill">Git</li>
            <li className="skill">GitHub</li>
            <li className="skill">Bootstrap</li>
            <li className="skill">Postgresql</li>
            <li className="skill">Webpack</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
