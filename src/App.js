import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faGlobe, 
  faEnvelope, 
  faMobile 
} from '@fortawesome/free-solid-svg-icons';
import "./App.css";

function App() {
  return (
    <Router basename="/resume">
      <div className="resume-container">
        <header className="resume-header">
          <h1>GAGAN CHAUDHARY</h1>
          <div className="contact-links">
            <a href="https://github.com/Gagan-Chaudhary" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Gagan-Chaudhary
            </a>
            <span className="separator">|</span>
            <a href="https://www.linkedin.com/in/thegaganchaudhary" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> thegaganchaudhary
            </a>
            <span className="separator">|</span>
            <a href="https://leetcode.com/Gagan-Chaudhary" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCode} /> LeetCode
            </a>
            <span className="separator">|</span>
            <a href="https://gaganchaudhary.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGlobe} /> Portfolio
            </a>
            <span className="separator">|</span>
            <a href="mailto:gaganveermaan@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> gaganveermaan@gmail.com
            </a>
            <span className="separator">|</span>
            <a href="tel:+918503076991">
              <FontAwesomeIcon icon={faMobile} /> +918503076991
            </a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Summary</h2>
          <p className="summary-text">
            Dynamic Software Engineer with 2 years of experience in full-stack
            development, system design, and secure enterprise solutions. Delivered
            scalable authentication systems and optimized workflows at ICICI Bank.
            Proficient in Java, Spring Boot, React.js, and cloud technologies,
            with a passion for building high-performance applications using Agile
            and SOA methodologies.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            <li>
              <strong>Languages & Frameworks:</strong> JavaScript, C++, SQL, Java,
              Spring Boot
            </li>
            <li>
              <strong>Frontend:</strong> React.js, HTML5, CSS3, Bootstrap,
              Responsive Design
            </li>
            <li>
              <strong>Backend & Databases:</strong> Node.js, Express.js, RESTful
              APIs, MySQL, Oracle, MongoDB
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> AWS (EC2, S3), Docker, Git,
              Firebase, Oracle WebLogic Server, Oracle Service Bus
            </li>
            <li>
              <strong>Security:</strong> SAML, MFA, OAuth, Access Management
            </li>
            <li>
              <strong>Methodologies:</strong> Agile, SDLC, Service-Oriented
              Architecture (SOA), System Design
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>
          <div className="job-entry">
            <div className="job-header">
              <div className="job-title-company">
                <strong>Software Engineer</strong>
                <i>ICICI Bank</i>
              </div>
              <div className="job-location-date">
                <i>Hyderabad, India</i>
                <span>Nov 2022 - Present</span>
              </div>
            </div>
            <ul>
              <li>
                Architected SAML-based SSO and MFA systems with Java and Oracle
                Access Manager, reducing unauthorized access by 95%
              </li>
              <li>
                Engineered RESTful APIs for user management automation, slashing
                administrative overhead by 80% using Spring Boot
              </li>
              <li>
                Optimized Oracle WebLogic Server deployment pipeline with CI/CD,
                cutting release cycles by 40%
              </li>
              <li>
                Developed secure financial reporting tools with Oracle BI
                Publisher and SQL, processing 10K+ daily transactions
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-header">
              <div className="job-title-company">
                <strong>Associate Consultant</strong>
                <i>Abjayon</i>
              </div>
              <div className="job-location-date">
                <i>Ahmedabad, India</i>
                <span>Jun 2022 - Sep 2022</span>
              </div>
            </div>
            <ul>
              <li>
                Designed SOA-based integrations using Oracle Service Bus, enabling
                1M+ daily transactions with zero downtime
              </li>
              <li>
                Built reusable middleware components with Java, improving system
                interoperability by 30%
              </li>
              <li>
                Delivered technical training on SOA and system design principles
                to 20+ developers
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <div className="project-entry">
            <div className="project-header">
              <div className="project-title-tech">
                <strong>Distributed Rate Limiter</strong>
                <span className="separator">|</span>
                Java, Spring Boot, Redis
              </div>
              <a
                href="https://github.com/Gagan-Chaudhary/RateLimiter"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link
              </a>
            </div>
            <ul>
              <li>
                Developed a distributed rate-limiting system for APIs using Spring
                Boot and Redis, supporting 50K+ requests/sec
              </li>
              <li>
                Implemented circuit breaker pattern, reducing system failures by
                40% in high-traffic scenarios
              </li>
            </ul>
          </div>

          <div className="project-entry">
            <div className="project-header">
              <div className="project-title-tech">
                <strong>E-Commerce Dashboard</strong>
                <span className="separator">|</span>
                React.js, Node.js, AWS S3
              </div>
              <a
                href="https://github.com/Gagan-Chaudhary/EcommDashboard"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link
              </a>
            </div>
            <ul>
              <li>
                Built a responsive dashboard with React.js and RESTful APIs,
                integrating AWS S3 for scalable image storage
              </li>
              <li>
                Optimized frontend with Bootstrap and CSS3, achieving 20% faster
                load times
              </li>
            </ul>
          </div>

          <div className="project-entry">
            <div className="project-header">
              <div className="project-title-tech">
                <strong>Load-Balanced Chat System</strong>
                <span className="separator">|</span>
                C++, Node.js, Docker
              </div>
              <a
                href="https://github.com/Gagan-Chaudhary/ChatSystem"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link
              </a>
            </div>
            <ul>
              <li>
                Engineered a real-time chat app with C++ backend and Node.js
                WebSocket, load-balanced with Docker
              </li>
              <li>
                Secured with OAuth and deployed on AWS EC2, handling 10K+
                concurrent users
              </li>
            </ul>
          </div>

          <div className="project-entry">
            <div className="project-header">
              <div className="project-title-tech">
                <strong>Financial Transaction Processor</strong>
                <span className="separator">|</span>
                Java, Oracle, Spring Boot
              </div>
              <a
                href="https://github.com/Gagan-Chaudhary/TransactionProcessor"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link
              </a>
            </div>
            <ul>
              <li>
                Created a high-throughput transaction system with Spring Boot and
                Oracle, processing 1M+ records/day
              </li>
              <li>
                Integrated MFA and SAML for secure access, achieving 99.99% uptime
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="education-entry">
            <div className="education-header">
              <strong>B.Tech in Information Technology</strong>
              <span>2018-2022</span>
            </div>
            <div className="education-institution">
              Indian Institute of Information Technology, Vadodara
            </div>
            <ul>
              <li>
                CPI: 7.02/10 | Coursework: Data Structures, Algorithms, System
                Design, Database Management
              </li>
              <li>
                Achievements: Google Cloud Program Participant, Hacktoberfest 2020
                Contributor, Dean's List 2020
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
