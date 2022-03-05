import React from 'react';
import avatar from './images/fs.webp';
import '../../styles/link.css';

const styles = {
  body: {
  minHeight: "100vh",
  padding : '2% 6% ',
  backgroundColor: '#f0dedd',
 
  },
  para: {
   
    minHeight: 50,
    lineHeight: 1.5,
    fontSize: '1.2rem',
    padding: 10
  },
  img : {
    minHeight: "150px",
    width : "150px",
    borderRadius: "40px",
    padding :"20px 10px"
  },

  footer : {
    display : "flex",
    justifyContent : "center",
    gridGap :"20px",
    alignItem :"end",
    marinTop:"60"

  },
 
};


export default function About() {
  return (
    <div style={styles.body}>
      <h4>About Page</h4>
      <img src={avatar} alt="avatar" style={styles.img}/>
      <p style={styles.para}>
     
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
     
     <div style={styles.footer} >
      
      <div><a href="www.google.com" className=" icon"><i class="fa-brands fa-github"></i></a></div>
      <div><a href="www.google.com"className="icon"><i class="fa-brands fa-linkedin"></i></a></div>
      <div><a href="www.google.com"className="icon"><i class="fa-brands fa-stack-overflow"></i></a></div>

     </div>
     
    </div>
  );
}
