import React from 'react';
const styles = {
  body : {
    width : "100%",
    margin : "20px auto"
    // padding : "20px",
   },
  main : {
   padding : 20 ,
   background: 'pink', 
   height : '200px',
   width : '500px',
   margin : 10
  
  },
  link : {
    fontSize: '1.4rem',
    color : "black",
    fontWeight : 600,
    textDecoration: 'none'
  },
  divRow : {
    display : 'flex',
    justifyContent: "center",
    flexWrap : "wrap"
  }


};


export default function Home() {
  return (
    <div style={styles.body}>
      
      <h3>Portfolio</h3>
      <section style={styles.divRow}>
        <div style={styles.main}>
        <a href="https://lit-crag-12323.herokuapp.com/" style={styles.link}>
           
           <section class="mini-project">
              <h5>CareTrol</h5>
               <p>Full Stack</p>
           </section>
     
      </a>
        </div>
        <div style={styles.main}>
        <a href=" https://fauziashafi.github.io/Weather-Dashboard/" target="_blank" style={styles.link}>
           
           <section class="mini-project">
              <h5>Weather Dashboard</h5>
               <p>HTML/CSS/JS</p>
           </section>
     
      </a>
        </div>
        <div style={styles.main}>
        <a href=" https://fauziashafi.github.io/Weather-Dashboard/" target="_blank" style={styles.link}>
           
           <section class="mini-project">
              <h5>Weather Dashboard</h5>
               <p>HTML/CSS/JS</p>
           </section>
     
      </a>
        </div>
        <div style={styles.main}>
        <a href="https://fauziashafi.github.io/PasswordGenerator/" style={styles.link}>
                <section class="mini-project">
                    <h5>Password Generator</h5> 
                    <p>HTML/CSS/JS</p>
                </section>
            </a>
        </div>
        <div style={styles.main}>
        <a href="https://fauziashafi.github.io/landing-page/" style={styles.link}>
                <section class="mini-project">
                    <h5>Landing Page</h5> 
                    <p>HTML/CSS</p>
                </section>
            </a>
        </div>
      </section>

     
    </div>
  );
}
