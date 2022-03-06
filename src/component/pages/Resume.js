import React from 'react';

const styles = {
  body : {
    minHeight: "100vh",
  padding : '2% 6% ',
  backgroundColor: '#f0dedd',
  
   },
   pad : {
     padding: '20px'
   }
}


export default function Resume() {
  return (
    <div style={styles.body}>
      <h4 style={styles.pad}>Resume</h4>
      <div style={styles.pad}>
        Download My{" "}
        <a href= "www.google.com">
          Resume
        </a>
      </div>

      <div style={styles.pad}>
         <h4>Front-end Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>React</li>
        
      </ul>
    </div>

    <div style={styles.pad}>
         <h4>Back-end Proficiencies</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequalize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQl</li>
      </ul>
    </div>
     

    </div>
  );
}
