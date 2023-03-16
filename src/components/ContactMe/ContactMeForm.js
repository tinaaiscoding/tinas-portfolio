import React from 'react';

import Window from '../UI/Window';

const ContactMeForm = () => {
  return (
    <Window>
      <form
        action="https://public.herotofu.com/v1/eee93370-c394-11ed-929d-2b889cea2a35"
        method="post"
        accept-charset="UTF-8"
      >
        <div>
          <label for="name">Your Name</label>
          <input name="Name" id="name" type="text" required />
        </div>
        <div>
          <label for="email">Your Email</label>
          <input name="Email" id="email" type="email" required />
        </div>
        <div>
          <label for="message">Message</label>
          <input name="Message" id="message" type="text" required />
        </div>
        <div>
          <input type="submit" value="Send" />
          </div>
   
      </form>
    </Window>
  );
};

export default ContactMeForm;
