import React from "react";
import "../styles/nav.css";

const styles = {
 
  bodyStyle : {
    background: '#e8eaf6', 

  },
 
  link : {
    fontSize: '1.3rem',
    color : "white",
    fontWeight : 300,
    fontFamily: "'Roboto', sans-serif",
    
  },
 
};


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div >
      <main className=".nav-img">
    
        <nav >
          <ul className="nav nav-img" >
          <h2 className="link">Fauzia Shafi</h2>
            <li className="nav-item">
              <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"} style={styles.link}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                } style={styles.link}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => window.location = 'mailto:fauziashafi12@gmail.com'}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                } style={styles.link}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                } style={styles.link}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </main>
    

    </div>
  );
}

export default NavTabs;
