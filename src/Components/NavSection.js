import React from "react";

function Navigation() {
  function toggleClass() {
    const menuBar = document.querySelector(".secondlink .sd-link");
    menuBar.classList.toggle("showMenu");
  }
  window.onscroll = function () {
    const navBar = document.querySelector("nav");
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      navBar.classList.add("active-nav");
    } else {
      navBar.classList.remove("active-nav");
    }
  };
  const links = document.querySelectorAll(".links a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => {
        l.classList.remove("active-link");
      });
      link.classList.add("active-link");
    });
  });
  return (
    <>
      <nav>
        <div className="navigation">
          <div className="headlink">
            <div className="hm-link">
              <a href="/index.html">
                <span style={{ "--i": 0 }}>P</span>
                <span>O</span>
                <span style={{ "--i": 1 }}>RTF</span>
                <span>O</span>
                <span style={{ "--i": 2 }}>LI</span>
                <span>O</span>
              </a>
            </div>
          </div>
          <div className="secondlink">
            <div className="barIcon">
              <div onClick={toggleClass} className="bar">
                <i className="fa-solid fa-bars-staggered"></i>
              </div>
            </div>
            <div className="sd-link">
              <div className="links">
                <a href="#home">home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
