import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faGlobe,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <Router basename="/resume">
      <div className="resume-container">
        <header className="resume-header">
          <h1>GAGAN CHAUDHARY</h1>
          <div className="contact-links">
            <a
              href="https://github.com/Gagan-Chaudhary"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Gagan-Chaudhary
            </a>
            <span className="separator">|</span>
            <a
              href="https://www.linkedin.com/in/thegaganchaudhary"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> thegaganchaudhary
            </a>
            <span className="separator">|</span>
            <a
              href="https://leetcode.com/Gagan-Chaudhary"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCode} /> LeetCode
            </a>
            <span className="separator">|</span>
            <a
              href="https://gaganchaudhary.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGlobe} /> Portfolio
            </a>
            <span className="separator">|</span>
            <a href="mailto:gaganveermaan@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> gaganveermaan@gmail.com
            </a>
            <span className="separator">|</span>
            <a href="tel:+918503076991">
              <FontAwesomeIcon icon={faMobile} /> +91 85030-76991
            </a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Summary</h2>
          <p className="summary-text">
            Software Engineer with 2.5+ years of experience building high-scale
            distributed systems and AI-integrated solutions. Expertise in system
            design, cloud-native architectures, and full-stack development.
            Achieved 99.99% uptime for mission-critical systems (10K+ users) and
            optimized platforms processing 1M+ daily transactions. Proficient in
            Java/Python with 300+ LeetCode solutions.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            <li>
              <strong>Languages:</strong> Java, Python, C++, JavaScript, SQL
            </li>
            <li>
              <strong>AI/ML:</strong> Generative AI, OpenAI GPT, PyTorch, NLP,
              LangChain, Hugging Face, Prompt Engineering
            </li>
            <li>
              <strong>Frontend:</strong> React.js, HTML5, CSS3, Material UI
            </li>
            <li>
              <strong>Backend:</strong> Spring Boot, Node.js, REST/GraphQL,
              Microservices
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> AWS (EC2, S3, SageMaker), Docker,
              Kubernetes, Jenkins
            </li>
            <li>
              <strong>Databases:</strong> Oracle, MySQL, Redis, MongoDB
            </li>
            <li>
              <strong>System Design:</strong> Distributed Caching, Load
              Balancing, Rate Limiting, Circuit Breakers
            </li>
            <li>
              <strong>Tools:</strong> Git, Hystrix, Prometheus, JIRA, WebSocket,
              JUnit
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>
          <div className="job-entry">
            <div className="job-header">
              <div className="job-left">
                <strong>Software Engineer</strong>
                <span className="company">ICICI Bank</span>
              </div>
              <div className="job-right">
                <span className="location">Hyderabad, India</span>
                <span className="date">Nov 2022 -- Present</span>
              </div>
            </div>
            <ul>
              <li>
                Architected SAML-based SSO system scaling to 10K+ daily
                authentications (99.99% uptime)
              </li>
              <li>
                Reduced DDoS attacks by 85% via Redis-based rate limiting for
                REST APIs
              </li>
              <li>
                Accelerated release cycles by 65% by containerizing Oracle
                WebLogic deployments
              </li>
              <li>
                Engineered real-time financial reporting system processing 50K+
                transactions/day
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-header">
              <div className="job-left">
                <strong>Associate Consultant</strong>
                <span className="company">Abjayon</span>
              </div>
              <div className="job-right">
                <span className="location">Ahmedabad, India</span>
                <span className="date">Jun 2022 -- Sep 2022</span>
              </div>
            </div>
            <ul>
              <li>
                Designed SOA integration layer handling 1M+ daily transactions
                using Oracle Service Bus
              </li>
              <li>
                Mitigated system failures by 40% during peak traffic with
                Hystrix circuit breakers
              </li>
              <li>Mentored 20+ engineers through system design workshops</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Technical Projects</h2>
          <div className="project-entry">
            <div className="project-header">
              <div className="project-title">
                <strong>Generative AI Chatbot</strong>
                <span className="tech-stack">
                  Spring Boot, OpenAI, LangChain
                </span>
              </div>
              <a
                href="https://github.com/Gagan-Chaudhary/ai-chatbot"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <ul>
              <li>
                Built conversational AI using GPT-3.5 Turbo resolving 5K+ daily
                queries (800ms avg response)
              </li>
              <li>
                Fine-tuned prompts for intent recognition, improving accuracy by
                25%
              </li>
              <li>Slashed OpenAI API costs by 40% via Redis-based caching</li>
            </ul>
          </div>

          {/* Add other projects following same structure */}
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="education-entry">
            <div className="education-header">
              <strong>B.Tech in Information Technology</strong>
              <span>2018 -- 2022</span>
            </div>
            <div className="education-institution">
              Indian Institute of Information Technology, Vadodara
            </div>
            <ul>
              <li>CGPA: 7.02/10</li>
              <li>
                Certifications: AWS Certified Developer Associate (2023),
                DeepLearning.AI NLP Specialization
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
