import React from "react";
import avatar from "./images/fs.webp";
import "../../styles/link.css";

const styles = {
  body: {
    minHeight: "100vh",
    padding: "2% 6% ",
    backgroundColor: "#f0dedd",
  },
  para: {
    minHeight: 50,
    lineHeight: 1.5,
    fontSize: "1.2rem",
    padding: 10,
  },
  img: {
    minHeight: "150px",
    width: "150px",
    borderRadius: "40px",
    padding: "20px 10px",
  },

  footer: {
    display: "flex",
    justifyContent: "center",
    gridGap: "20px",
    alignItem: "end",
    marinTop: "60",
  },
};

export default function About() {
  return (
    <div style={styles.body}>
      <h4>About Page</h4>
      <img src={avatar} alt="avatar" style={styles.img} />
      <p style={styles.para}>
        As a driven and tech-savvy web developer, I have always had a strong
        gravitational pull toward technology.I recently earned a certificate in
        full stack development from UCSD, where I developed skills in
        JavaScript, CSS, React.js, responsive web design, Bootstrap, MondoDB,
        Express and more.
      </p>
      <p style={styles.para}>
        I am able to collaborate and work with a team while solving problems in
        high-stress environments. An articulate individual who enjoys connecting
        with people and is passionate about building applications that assist
        people to make their lives easier.{" "}
      </p>
      <p style={styles.para}>
        {" "}
        I'm excited to leverage my skills as part of a fast-paced,
        quality-driven team. Let's connect!
      </p>

      <div style={styles.footer}>
        <div>
          <a href="https://github.com/FauziaShafi" className=" icon">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/fauzia-shafi/" className="icon">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/fauzia-shafi-820419228/"
            className="icon"
          >
            <i class="fa-brands fa-stack-overflow"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
