 import React, { useState }  from 'react';
import "../../styles/form.css";
import { validateEmail } from '../../utils/helper';



export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 

  const handleInputChange = (e) => {

    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    
   if(name === 'name') {
     setName(value);
   } 
   if(email === 'email') {
    setEmail(value);
    validateEmail(value)
    
  } 
  if(message === 'message') {
    setMessage(value);
  }
    
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name}`);
    setName('');
    setName('');
  };




  
  return (
    <div className='bodyStyle '>
      <h4 className='hpad'>Contact</h4>
      <div className='customform'>
      <form>
        
        <div className="form-group pad">
        <label>Name:</label>
          <input
            value={name}
            name="name"
           onChange={handleInputChange}
            type="text"
            class="form-control"
          />
          
        </div>
        
         <div className="form-group pad">
         <label>Email adress: </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            class="form-control"
          />
         </div>

          <div className="form-group pad">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea  id="exampleFormControlTextarea1" value ={message} class="form-control"rows="3"></textarea>
          </div>
          
         <div  className="form-group pad">
         <button type="button"
          onClick={handleFormSubmit} 
          className='btnStyle'
          >Submit</button>
         </div>
        </form>

      </div>
      <div className='footer' >
      
      <div><a href="www.google.com" className=" icon"><i class="fa-brands fa-github"></i></a></div>
      <div><a href="www.google.com"className="icon"><i class="fa-brands fa-linkedin"></i></a></div>
      <div><a href="www.google.com"className="icon"><i class="fa-brands fa-stack-overflow"></i></a></div>

     </div>
    

    </div>
  );
}
