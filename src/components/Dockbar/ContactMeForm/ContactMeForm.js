import React, { useState, useEffect } from 'react';

import classes from './ContactMeForm.module.css';
import Window from '../../UI/Window';
import Button from '../../UI/Button';
import MsgSent from './MsgSent';

const ContactMeForm = (props) => {
  const [msgSent, setMsgSent] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const msgSentHandler = () => {
    setMsgSent(true);
  };

  const nameChangeHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const emailChangeHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };

  const msgChangeHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        msg: event.target.value,
      };
    });
  };

  useEffect(() => {
    if (
      formInput.name.length > 0 &&
      formInput.email.length > 0 &&
      formInput.msg.length > 0
    ) {
      setDisabledBtn(false);
    }
  }, [formInput]);

  return (
    <Window
      id={`${classes.contactMeForm}`}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
    >
      {msgSent && (
        <div className={classes.msgSentBox}>
          <div className={classes.backdrop}></div>

          <MsgSent />
        </div>
      )}

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
            <input
              name="Name"
              id="name"
              type="text"
              onChange={nameChangeHandler}
              required
            />
          </div>

          <div
            className={`${classes.inlineInput} ${classes.email} ${classes.inputDiv}`}
          >
            <label for="email">EMAIL</label>
            <input
              name="Email"
              id="email"
              type="email"
              onChange={emailChangeHandler}
              required
            />
          </div>

          <div className={`${classes.message} ${classes.inputDiv}`}>
            <label className={classes.messageLabel} for="message">
              MESSAGE
            </label>
            <textarea
              name="Message"
              id="message"
              type="text"
              onChange={msgChangeHandler}
              required
            />
          </div>
        </div>

        <div className={classes.btnDiv}>
          <Button
            type="submit"
            buttonName="SEND"
            onBtnClick={msgSentHandler}
            disabled={disabledBtn}
          />
        </div>
      </form>
    </Window>
  );
};

export default ContactMeForm;
