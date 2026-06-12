import { FaCloud, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter';
import "./App.css";
import profile from "./assets/Profile.png";
import { useState } from "react";
import award1 from "./assets/Award.png";
import reviewerCert from "./assets/Reviewer.png";
import cert3 from "./assets/Certificate3.png";
import cert4 from "./assets/Certificate4.png";

import {
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaReact
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";


const hour = new Date().getHours();

let greetings = [];

if (hour >= 5 && hour < 12) {
  greetings = [
    "Good Morning ☀️",
    "Ready To Build? 🚀",
    "Let's Create Something Amazing ✨"
  ];
}
else if (hour >= 12 && hour < 18) {
  greetings = [
    "Keep Building 🚀",
    "Turning Ideas Into Reality 💡",
    "Welcome To My Portfolio 👨‍💻"
  ];
}
else {
  greetings = [
    "Code. Create. Innovate. 🌙",
    "Late Night Builder 🚀",
    "Dream Big. Build Bigger ✨"
  ];
}
function App() {
const [showCertificates, setShowCertificates] = useState(false);
const [currentCert, setCurrentCert] = useState(0);

const certificates = [
  award1,
  reviewerCert,
  cert3,
  cert4
];
  return (
    <>
    
     {/* Navbar */}
<nav className="navbar">

  <h2 className="logo">
    &lt;
    <Typewriter
  words={greetings}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={80}
  deleteSpeed={40}
  delaySpeed={1500}
/>
    /&gt;
  </h2>

  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#achievements">Achievements</a></li>
    <li><a href="#contact">Contact</a></li>
    
    
  </ul>

</nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-left">
          <h1 className="hero-title">
  <Typewriter
    words={[
      "SHAI KUMAR R"
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={2000}
  />
</h1>

         <h3 className="hero-title">
  <Typewriter
    words={[
      "Software Engineer",
      "Researcher",
      "Mentor"
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={70}
    delaySpeed={1000}
  />
</h3>

          <p>
            Building scalable software solutions,
            publishing impactful research,
            and mentoring future innovators.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a
              href="/Shai_Kumar_R_Resume.pdf"
              className="btn"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/Shaikumar2005"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/shaikumarr"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://ieeexplore.ieee.org/author/855606853958716"
              target="_blank"
            >
              <SiIeee />
            </a>

             {/* Email */}
  <a
    href="mailto:kumarshai99@gmail.com"
    title="Email"
  >
    <FaEnvelope />
  </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={profile} alt="profile" />
        </div>
      </section>

      <section id="about" className="about-section">

  <div className="about-left">
    <span className="about-tag">ABOUT ME</span>

    <h2>
      Passionate Software Engineer,
      <span> Researcher </span>
      & Technology Enthusiast
    </h2>

    <p>
  I'm Shai Kumar R, a Software Engineer with a Bachelor's degree in
  Information Technology from R.M.K Engineering College. I am passionate
  about software development, research, cloud computing, and building
  innovative technology solutions that create real-world impact.
</p>

    <p>
      I have published 9+ research papers, mentored 20+ students,
      served as IEEE Chairperson, and developed innovative projects
      ranging from Human Tracking Robots to Skill Management Systems.
    </p>

    <div className="about-stats">

      <div className="stat-card">
        <h3>9+</h3>
        <span>Research Papers</span>
      </div>

      <div className="stat-card">
        <h3>20+</h3>
        <span>Students Mentored</span>
      </div>

      <div className="stat-card">
        <h3>12+</h3>
        <span>Competition Wins</span>
      </div>

    </div>
  </div>

 <div className="about-right">

  <div className="tech-card">

    <h3>Languages & Technologies</h3>

    <div className="tech-grid">

      <div className="tech-item">
        <FaJava />
        <span>Java</span>
      </div>

      <div className="tech-item">
        <SiSpringboot />
        <span>Spring Boot</span>
      </div>

      <div className="tech-item">
        <FaReact />
        <span>React</span>
      </div>

      <div className="tech-item">
        <SiTypescript />
        <span>TypeScript</span>
      </div>

      <div className="tech-item">
        <SiJavascript />
        <span>JavaScript</span>
      </div>

      <div className="tech-item">
        <SiMysql />
        <span>SQL</span>
      </div>

      <div className="tech-item">
        <FaAws />
        <span>AWS</span>
      </div>

      <div className="tech-item">
  <FaCloud />
  <span>OCI</span>
</div>

      <div className="tech-item">
        <FaHtml5 />
        <span>HTML</span>
      </div>

      <div className="tech-item">
        <FaCss3Alt />
        <span>CSS</span>
      </div>

    </div>

  </div>

</div>

</section>

  <section id="projects" className="projects-section">

  <h2 className="section-title">Featured Projects</h2>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">

      <div className="project-number">01</div>

      <h3>Human Tracking Bot</h3>

      <p>
        Intelligent autonomous robot developed using
        millimeter-wave radar and sensor fusion techniques
        for real-time human tracking and navigation.
      </p>

      <div className="project-tech">
        <span>IoT</span>
        <span>Sensor Fusion</span>
        <span>Embedded</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/Shaikumar2005/Autonomous-Navigation-Bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

       
      </div>

    </div>

    {/* Project 2 */}
    <div className="project-card">

      <div className="project-number">02</div>

      <h3>Skill Management System</h3>

      <p>
        Full-stack web application for skill assessment,
        progress tracking and student performance analysis.
      </p>

      <div className="project-tech">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>SQL</span>
        <span>REST API</span>
        <span>Postman</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/Shaikumar2005/Skill-Manager-Backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        
      </div>

    </div>

    {/* Project 3 */}
    <div className="project-card">

      <div className="project-number">03</div>

      <h3>Piezoelectric Energy System</h3>

      <p>
        Sustainable energy generation system that converts
        human footsteps into usable electrical power.
      </p>

      <div className="project-tech">
        <span>IoT</span>
        <span>Energy</span>
        <span>Hardware</span>
      </div>

      

       
      

    </div>

    {/* Project 4 */}
    <div className="project-card">

      <div className="project-number">04</div>

      <h3>Smart Waste Management System</h3>

      <p>
        Smart IoT-enabled waste monitoring system for
        efficient garbage collection and route optimization.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/Shaikumar2005/Waste-Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        
      </div>

    </div>

  </div>
  

</section>

<section id="experience" className="experience-section">

  <h2 className="section-title">Experience</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span className="timeline-date">
          January 2026 - February 2026
        </span>

        <h3>FSD Java Trainee</h3>

        <h4>Mphasis</h4>

        <p>
          Trained in enterprise software development,
          application enhancement, debugging, API integration,
          and modern web technologies while collaborating with
          development teams to deliver scalable solutions.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span className="timeline-date">
          March 2026 - April 2026
        </span>

        <h3>FSD Java Intern</h3>

        <h4>Mphasis</h4>

        <p>
         worked on real-world projects, contributing to backend development,
         API design, and application enhancement while gaining hands-on experience
         in software development best practices and industry standards.
        </p>
      </div>
    </div>

  </div>

</section>

      <section id="research" className="research-section">

  <h2 className="section-title">Research</h2>

  <div className="research-grid">

    <div className="research-card">
      <div className="research-number">01</div>
      <h3>Research Publications</h3>
      <p>
        Published <b>9+ research papers</b> in National and International conferences
        focusing on AI, IoT, and software systems.
      </p>

      <div className="research-tech">
        <span>AI</span>
        <span>IoT</span>
        <span>ML</span>
      </div>

      <div className="research-links">
  <a
    href="https://ieeexplore.ieee.org/author/855606853958716"
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    View Papers
  </a>
</div>
    </div>

    <div className="research-card">
      <div className="research-number">02</div>
      <h3>Mentorship</h3>
      <p>
        Mentored 20+ students in research writing, publication process,
        and technical project development.
      </p>

      <div className="research-tech">
        <span>Guidance</span>
        <span>Publishing</span>
        <span>Training</span>
      </div>

      <div className="research-links">
      </div>
    </div>

  </div>

</section>

<section id="achievements" className="research-section">

  <h2 className="section-title">Awards & Achievements</h2>

  <div className="research-grid">

    {/* Card 1 */}
    <div className="research-card">

      <div className="research-number">01</div>

      <h3>Best Student Award - Academic Excellence (2025-2026)</h3>

      <p>
        Received the Best Student Award for outstanding
        academic performance, leadership, research contributions,
        and overall excellence throughout the academic year.
      </p>

      <div className="research-links">
        <button
          className="view-btn"
          onClick={() => {
            setCurrentCert(0);
            setShowCertificates(true);
          }}
        >
          View Certificate
        </button>
      </div>

    </div>

    {/* Card 2 */}
    <div className="research-card">

      <div className="research-number">02</div>

      <h3>IEEE Reviewer & Technical Evaluator</h3>

      <p>
        Served as an IEEE Reviewer by evaluating research papers,
        providing technical feedback, and contributing to the
        peer-review process for maintaining publication quality
        and research excellence.
      </p>

      <div className="research-links">
        <button
          className="view-btn"
          onClick={() => {
            setCurrentCert(1);
            setShowCertificates(true);
          }}
        >
          View Certificate
        </button>
      </div>

    </div>

    
</div>

   

  {/* Certificate Gallery Modal */}

  {showCertificates && (
  <div
    className="modal-overlay"
    onClick={() => setShowCertificates(false)}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      <img
        src={certificates[currentCert]}
        alt="Certificate"
      />

      <button
        className="close-btn"
        onClick={() => setShowCertificates(false)}
      >
        ✕
      </button>

      <button
        className="prev-btn"
        onClick={() =>
          setCurrentCert(
            currentCert === 0
              ? certificates.length - 1
              : currentCert - 1
          )
        }
      >
        ❮
      </button>

      <button
        className="next-btn"
        onClick={() =>
          setCurrentCert(
            currentCert === certificates.length - 1
              ? 0
              : currentCert + 1
          )
        }
      >
        ❯
      </button>

      <div className="cert-counter">
        {currentCert + 1} / {certificates.length}
      </div>

    </div>
  </div>
)}

</section>


<section id="contact" className="contact-section">
  

  <h2 className="section-title">Let's Connect</h2>

  <form
    action="https://formsubmit.co/kumarshai99@gmail.com"
    method="POST"
    className="contact-form"
  >

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
    />

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      required
    />

    <textarea
      name="message"
      rows="6"
      placeholder="Write your message..."
      required
    ></textarea>

    <button type="submit">
      Send Message 🚀
    </button>


  </form>

</section>

      {/* Footer */}
      <footer>
        © 2026 Shai Kumar R | All Rights Reserved
      </footer>
    </>
  );
}

export default App;