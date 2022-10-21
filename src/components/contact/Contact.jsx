import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import{BsWhatsapp}  from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xfqw6x9', 'template_wzre12o', form.current, 'gSkxRZmFXKkZVTbas')
    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
<h5>Get In Touch</h5>
<h2>Contact Me</h2>

<div className="contact__container container">
  <div className="contact__options">
    <article className='contact__option'>
      <MdOutlineEmail  className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>Onuigboprecious47@gmail.com</h5>
      <a href='mailto: onuigboprecious47@gmail.com' target='_blank' >Send a Message</a>
    </article>
    <article className='contact__option'>
      <BsMessenger  className='contact__option-icon' />
      <h4>Messenger</h4>
      <h5>Onuigbo Precious</h5>
      <a href='https://m.me/official.onuigboprecious' target='_blank'>Send a Message</a>
    </article>
    <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon' />
      <h4>Whatsapp</h4>
      <h5>+234 810-260-8970</h5>
      <a href='https://wa.me/+2348102608970' target='_blank' >Send a Message</a>
    </article>
  </div>
{/* END OF CONTACTS  */}
<form ref={form} onSubmit={sendEmail}>
<input type='text' name='name' placeholder='Your Full Name' required />
<input type='text' name='email' placeholder='Your Email' required />
<textarea name='message' rows='7' placeholder=' Type In Your Message' required />
<button type='submit' className='btn btn-primary'> Send Message </button>
</form>
</div>

    </section>
  )
}

export default Contact