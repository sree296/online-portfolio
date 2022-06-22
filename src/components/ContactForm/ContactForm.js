// Import packages
import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

// Import constants
import { EmailConstants } from './Contact.constants';

// Import styles
import './ContactForm.scss';

function ContactForm() {
    const form = useRef();

    /**
     * Represent Initial state
     */
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

    const formInputProps = {
        fullWidth : true,
        variant: "outlined",
        required: 'required',
    };

    return (
        <div className="contactFormWrapper">
            <form ref={form} onSubmit={sendEmail}>
                <h2>{EmailConstants.FORM_TITLE}</h2> 
                <div style={{margin:'1rem'}}>
                    <TextField 
                        name="user_name" 
                        id="user_name" 
                        label={EmailConstants.USER_NAME}
                        onChange={handleUserNameChange}
                        value={userName}
                        {...formInputProps}
                    />
                </div>
                <div style={{margin:'1rem'}}>
                    <TextField 
                        name="user_email" 
                        id="user_email" 
                        label={EmailConstants.USER_EMAIL}
                        onChange={handleEmailChange}
                        value={userEmail}
                        {...formInputProps}
                    />
                </div>
                <div style={{margin:'1rem'}}>
                    <TextField 
                        name="message" 
                        className='messageInput' 
                        id="message" 
                        label={EmailConstants.USER_MESSAGE} 
                        onChange={handleMessageChange}
                        value={userMessage}
                        {...formInputProps}
                    />
                </div>
                <div style={{margin:'1rem'}}>
                    <Button 
                        type="submit" 
                        fullWidth 
                        variant="contained">
                        {EmailConstants.SUBMIT_BTN}
                    </Button>
                </div>
            </form>
                <Snackbar 
                    open={open} 
                    autoHideDuration={10000} 
                    onClose={handleClose}>
                        <Alert 
                            onClose={handleClose} 
                            severity="success" 
                            sx={{ width: '100%' }}>
                            {EmailConstants.SUBMIT_SUCCESS_TEXT}
                        </Alert>
                </Snackbar>
        </div>
    )
}

export default ContactForm
