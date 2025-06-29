import React from "react";

function Footer() {
    const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="endStory">
          <p>@ copyrights {year} </p>
        </div>
      </footer>
      <section id="bgImg"></section>
    </>
  );
}

export default Footer;
