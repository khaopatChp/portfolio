import React, { useRef, useState } from 'react';
import './Contacts.css';
import emailjs from 'emailjs-com';

function Contacts() {
  const formRef = useRef()
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_59mlsl3', 'template_d8zr3cb', formRef.current, 'hHvNQm0Krlld5se4M')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
      <div className="c" id='contacts'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
          <div className='c-left'>
            <h1 className='c-title'>Let's discuss your project</h1>
            <div className='c-info'>
              <div className='c-info-item'>
                <i alt='' className="fa-solid fa-phone c-icon"></i>
                +66 957108620
              </div>
              <div className='c-info-item'>
                <i className="fa-solid fa-envelope c-icon"></i>
                Chonticha.pongjit@gmail.com
              </div>
              <div className='c-info-item'>
                <i className="fa-solid fa-house-chimney c-icon"></i>
                Bang Mot, Thung Khru, Bangkok  
              </div>
            </div>
          </div>
          <div className='c-right'>
            <p className='c-desc'>
              <b>What's your story?</b> Get in touch. Always available for freelancing
              if the right project comes along me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder='Name' name="user_name" />
              <input type="text" placeholder='Subject' name="user_subject" />
              <input type="text" placeholder='Email' name="user_email" />
              <textarea row='5'  placeholder='Message' name="user_message"/>
              <button>Sent!</button>
              {done && "Thank you!"}
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contacts;