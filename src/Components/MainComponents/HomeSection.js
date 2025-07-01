import React from "react";
import profilePic1 from "../assets/pr.png";
import profilePic2 from "../assets/user_pic.png";
import resumePDF from "../assets/resume.pdf";

function Home() {
  function addClass() {
    const bet = document.querySelector(".container-fluid");
    bet.classList.add("O-O");
  }
  
  return (
    <section id="home" onLoad={addClass}>
      <div className="container-fluid">
        <div className="user-profile">
          <div className="profile">
            <div style={{ "--i": 0 }} className="greetings">
              hi! I&apos;m
            </div>
            <div style={{ "--i": 1 }} className="name">
              SURYA PRAKASH S
            </div>
            <div style={{ "--i": 1 }} className="professional">
              fullstack developer
            </div>
            <div style={{ "--i": 2 }} className="lil-summary">
              A full stack developer with skills in{" "}
              <i>HTML, REACT, CSS, JavaScript, Node.js, REST APIs and SQL</i>. I
              enjoy creating responsive websites and web applications, and I
              have a good understanding of both front-end and back-end
              development. I&apos;m always interested in learning new
              technologies and building projects that solve real problems.
            </div>
            <div className="btns" style={{ "--i": 3 }}>
              <div className="button-one btn">
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
              <div className="button-two btn">
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="user-pic">
          <div className="picture" style={{ "--i": 4 }}>
            <img src={profilePic2} alt="master" />
            <span className="mimic">hey! there</span>
          </div>
          <div className="sidePicture" style={{ "--i": 4 }}>
            <img style={{width:'230px'}} src={profilePic1} alt="masterNew" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
