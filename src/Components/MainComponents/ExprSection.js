import React from "react";

function Experience() {
  const customStyle = {
    margin: '25px auto',
  };
  return (
    <section style={customStyle} id="experience" className="fade-in">
      <div className="expContent">
        <h2>Experience &amp; Projects</h2>

        {/*  Skills */}
        <div className="skills">
          <div className="skill">
            <i className="fa-brands fa-react"></i>
            <div>React</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-node-js"></i>
            <div>Node.js</div>
          </div>
          <div className="skill">
            <i className="fa-solid fa-server"></i>
            <div>REST APIs</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-html5"></i>
            <div>HTML5</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-css3-alt"></i>
            <div>CSS3</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-python"></i>
            <div>Python</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-js"></i>
            <div>JavaScript</div>
          </div>
          <div className="skill">
            <i className="fa-solid fa-database"></i>
            <div>MySQL</div>
          </div>
          <div className="skill">
            <i className="fa-solid fa-database"></i>
            <div>PostgreSQL</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-git-alt"></i>
            <div>Git</div>
          </div>
          <div className="skill">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <div>Tailwind</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-npm"></i>
            <div>npm</div>
          </div>
          <div className="skill">
            <i className="fa-brands fa-bootstrap"></i>
            <div>Bootstrap</div>
          </div>
        </div>
        {/* Projects */}
        <div className="projects">
          <div className="project-card">
            <div className="project-title">Automatic Student Assessment DSS</div>
            <p className="project-description">
              Machine&#8209;learning powered decision support system that
              calculates learning coefficients and automates student
              assessment.
            </p>
            <div className="tech-list">
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-title">Personal Portfolio</div>
            <p className="project-description">
              Single&#8209;page portfolio showcasing projects, skills and
              blog using React, Tailwind and lightweight animations.
            </p>
            <div className="tech-list">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>Framer Motion</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-title">Todo List</div>
            <p className="project-description">
              CRUD&#8209;enabled todo list with filters, drag&#8209;and
              &#8209;drop re&#8209;ordering and local storage persistence.
            </p>
            <div className="tech-list">
              <span>React</span>
              <span>Context API</span>
              <span>CSS Modules</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-title">Feedback App</div>
            <p className="project-description">
              Feedback collection and sentiment dashboard for web apps with
              real&#8209;time charts.
            </p>
            <div className="tech-list">
              <span>React</span>
              <span>Chart.js</span>
              <span>Express</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
