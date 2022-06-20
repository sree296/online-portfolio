import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

// Import Constants
import {EmailConstants} from './Contact.constants';

function ContactForm() {
    const form = useRef();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const [open, setOpen] = React.useState(false);


    const handleUserNameChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    };

    const handleEmailChange = (e) => {
        e.preventDefault();
        setUserEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        e.preventDefault();
        setUserMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            EmailConstants.SERVICE_ID, 
            EmailConstants.TEMPLATE_ID, 
            form.current, 
            EmailConstants.PUBLIC_ID
        ).then((result) => {
              console.log(result.text);
              setOpen(true);
              setUserName('');
              setUserEmail('');
              setUserMessage('');
          }, (error) => {
              console.log(error.text);
          });
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="contactFormWrapper">
            <form ref={form} onSubmit={sendEmail}>
                <h2>Write me a Message</h2> 
                <div style={{margin:'1rem'}}>
                    <TextField 
                        name="user_name" 
                        fullWidth  
                        id="user_name" 
                        label="Your Name" 
                        variant="outlined" 
                        onChange={handleUserNameChange}
                        value={userName}
                        required
                    />
                </div>
                <div style={{margin:'1rem'}}>
                    <TextField 
                        name="user_email" 
                        fullWidth  
                        id="user_email" 
                        label="Your Email" 
                        variant="outlined" 
                        onChange={handleEmailChange}
                        value={userEmail}
                        required
                    />
                </div>
                <div style={{margin:'1rem'}}>
                    <TextField 
                        name="message" 
                        className='messageInput' 
                        fullWidth  
                        id="message" 
                        label="Your Message" 
                        variant="outlined" 
                        onChange={handleMessageChange}
                        value={userMessage}
                        required
                    />
                </div>
                <div style={{margin:'1rem'}}>
                    <Button type="submit" fullWidth variant="contained">Submit</Button>
                </div>
            </form>
                <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Thank You for your message.
                    </Alert>
                </Snackbar>
        </div>
    )
}

export default ContactForm
