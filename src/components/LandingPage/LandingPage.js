import React, { useState } from 'react';

import TilesBg from '../UI/TilesBg';
import AboutMe from './AboutMe';
import DesktopIcons from './DesktopIcons';
import Dockbar from '../Dockbar/Dockbar';
import Resume from '../Dockbar/Resume';
import ContactMeForm from '../ContactMe/ContactMeForm';

import '../UI/Window.scss';

const LandingPage = () => {
  const [resumeClicked, setResumeClicked] = useState(false);
  const [contactMeClicked, setContactMeClicked] = useState(false);

  return (
    <div>
      <DesktopIcons />
      <AboutMe />
      <Dockbar
        setResumeClicked={setResumeClicked}
        setContactMeClicked={setContactMeClicked}
      />

<ContactMeForm></ContactMeForm>

      <TilesBg />

      {resumeClicked && <Resume className="maximize" />}
      {contactMeClicked && <ContactMeForm className="maximize" />}
    </div>
  );
};

export default LandingPage;
