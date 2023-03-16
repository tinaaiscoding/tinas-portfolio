import React from 'react';

import classes from './ContactMeForm.module.css';
import Window from '../UI/Window';
import Button from '../UI/Button';

const ContactMeForm = (props) => {
  return (
    <Window className={classes.contactMeForm} onCloseWindow={props.onCloseWindow}>
      <h3>GET IN TOUCH!</h3>
      <form
        action="https://public.herotofu.com/v1/eee93370-c394-11ed-929d-2b889cea2a35"
        method="post"
        accept-charset="UTF-8"
      >
        <div className={classes.grid}>
          <div
            className={`${classes.inlineInput} ${classes.name} ${classes.inputDiv}`}
          >
            <label for="name">NAME</label>
            <input name="Name" id="name" type="text" required />
          </div>

          <div
            className={`${classes.inlineInput} ${classes.email} ${classes.inputDiv}`}
          >
            <label for="email">EMAIL</label>
            <input name="Email" id="email" type="email" required />
          </div>

          <div className={`${classes.message} ${classes.inputDiv}`}>
            <label className={classes.messageLabel} for="message">
              MESSAGE
            </label>
            <textarea name="Message" id="message" type="text" required />
          </div>
        </div>
        
        <div className={classes.btnDiv}>
          <Button type="submit" buttonName="SEND" />
        </div>
      </form>
    </Window>
  );
};

export default ContactMeForm;
