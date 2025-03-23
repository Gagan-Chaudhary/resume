import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

import { 
  faEnvelope, 
  faMobile, 
  faCode,
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>GAGAN CHAUDHARY</h1>
        <p>
          <a href="https://github.com/Gagan-Chaudhary">
            <FontAwesomeIcon icon={faGithub} /> Gagan-Chaudhary
          </a>{" "}
          |
          <a href="https://www.linkedin.com/in/thegaganchaudhary">
            <FontAwesomeIcon icon={faLinkedin} /> thegaganchaudhary
          </a>{" "}
          |
          <a href="https://leetcode.com/Gagan-Chaudhary">
            <FontAwesomeIcon icon={faCode} /> LeetCode
          </a>{" "}
          |
          <a href="https://gaganchaudhary.com">
            <FontAwesomeIcon icon={faGlobe} /> Portfolio
          </a>{" "}
          |
          <a href="mailto:gaganveermaan@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> gaganveermaan@gmail.com
          </a>{" "}
          |
          <a href="tel:+918503076991">
            <FontAwesomeIcon icon={faMobile} /> +918503076991
          </a>
        </p>
      </header>
      <section className="summary">
        <h2>Summary</h2>
        <p>
          Dynamic Software Engineer with 2 years of experience in full-stack
          development, system design, and secure enterprise solutions. Delivered
          scalable authentication systems and optimized workflows at ICICI Bank.
          Proficient in Java, Spring Boot, React.js, and cloud technologies,
          with a passion for building high-performance applications using Agile
          and SOA methodologies.
        </p>
      </section>
      <section className="skills">
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
      <section className="experience">
        <h2>Professional Experience</h2>
        <div className="job-entry">
          <div className="job-header">
            <span className="job-title">Software Engineer</span>
            <span className="company">ICICI Bank</span>
          </div>
          <div className="job-details">
            <span className="location">Hyderabad, India</span>
            <span className="date">Nov 2022 - Present</span>
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
            <span className="job-title">Associate Consultant</span>
            <span className="company">Abjayon</span>
          </div>
          <div className="job-details">
            <span className="location">Ahmedabad, India</span>
            <span className="date">Jun 2022 - Sep 2022</span>
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
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <div className="project-header">
            <span className="project-name">Distributed Rate Limiter</span>
            <span className="tech-stack">| Java, Spring Boot, Redis</span>
            <span className="github">
              <a href="https://github.com/Gagan-Chaudhary/RateLimiter">
                GitHub Link
              </a>
            </span>
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
        {/* Add other projects similarly */}
      </section>
      <section className="education">
        <h2>Education</h2>
        <div className="degree">
          <span className="degree-title">B.Tech in Information Technology</span>
          <span className="degree-date">2018-2022</span>
        </div>
        <div className="institution">
          Indian Institute of Information Technology, Vadodara
        </div>
        <ul>
          <li>
            CPI: 7.02/10 | Coursework: Data Structures, Algorithms, System
            Design, Database Management
          </li>
          <li>
            Achievements: Google Cloud Program Participant, Hacktoberfest 2020
            Contributor, Dean’s List 2020
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
