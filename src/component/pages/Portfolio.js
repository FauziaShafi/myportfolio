import React from 'react';
import '../../styles/link.css';
import '../../styles/portfolio.css';
const styles = {
  body : {
    minHeight: "100vh",
  padding : '2% 6% ',
  backgroundColor: '#f0dedd',
  
   },
}


export default function Home() {
  return (
    <div style={styles.body}>
      
      <h4 className='pad'>Portfolio</h4>
      <section className='divRow'>
      <a href= "https://radiant-garden-23992.herokuapp.com/" className='bk00 main link'>
           
           <section class="mini-project">
              <h5>HappyProgrammers</h5>
               <p>Full Stack</p>
               <a href="https://github.com/FauziaShafi/HappyThoughts" className=" icon">
            <i class="fa-brands fa-github"></i>
          </a>
           </section>
     
      </a>


      
        <a href= "https://lit-crag-12323.herokuapp.com/" className='bk0 main link'>
           
           <section class="mini-project">
              <h5>CareTrol</h5>
               <p>Full Stack</p>
               <a href="https://github.com/FauziaShafi/hospital-management-system" className=" icon">
            <i class="fa-brands fa-github"></i>
          </a>
           </section>
     
      </a>
     
       
        <a href=" https://fauziashafi.github.io/Weather-Dashboard/"  className='bk1 main link'>
           
           <section className="mini-project">
              <h5>Weather Dashboard</h5>
               <p>HTML/CSS/JS</p>
               <a href="https://github.com/FauziaShafi" className=" icon">
            <i class="fa-brands fa-github"></i>
          </a>
           </section>
     
      </a>
      
      
        <a href="https://github.com/FauziaShafi/Employee-Tracker"  className='bk2 main link'>
           
           <section className="mini-project">
              <h5>Employee-Tracker</h5> 
               <p>HTML/CSS/JS </p>
               <a href="https://github.com/FauziaShafi/Employee-Tracker" className=" icon">
            <i class="fa-brands fa-github"></i>
          </a>
               
              
           </section>
     
      </a>
        
      
        <a href="https://fauziashafi.github.io/PasswordGenerator/" className='bk3 main link'>
                <section className="mini-project">
                    <h5>Password Generator</h5> 
                    <p>HTML/CSS/JS</p>
                    <a href="https://github.com/FauziaShafi/PasswordGenerator" className=" icon">
            <i class="fa-brands fa-github"></i>
          </a>
                </section>
            </a>
      
        <a href="https://fauziashafi.github.io/landing-page/"  className='bk4 main link'>
                <section className="mini-project">
                    <h5>Landing Page</h5> 
                    <p>HTML/CSS</p>
                    <a href="https://fauziashafi.github.io/landing-page/" className=" icon">
            <i class="fa-brands fa-github"></i>
          </a>
                </section>
            </a>
   
      </section>

     
    </div>
  );
}
