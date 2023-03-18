import React, { useState } from 'react';

import TilesBg from '../UI/TilesBg';
import AboutMe from './AboutMe';
import DesktopIcons from './DesktopIcons';
import Dockbar from '../Dockbar/Dockbar';
import Resume from '../Dockbar/Resume';
import ContactMeForm from '../Dockbar/ContactMeForm/ContactMeForm';
import ProjectsDir from '../ProjectsDir/ProjectsDir';

const LandingPage = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(true);
  const [resumeVisible, setResumeVisible] = useState(false);
  const [contactMeVisible, setContactMeVisible] = useState(false);
  const [projectsDirVisible, setProjectsDirVisible] = useState(false);

  const closeProjectDirHandler = () => {
    setProjectsDirVisible(false);
  };

  const closeAboutMeHandler = () => {
    setAboutMeVisible(false);
  };

  const closeResumeHandler = () => {
    setResumeVisible(false);
  };

  const closeContactMeHandler = () => {
    setContactMeVisible(false);
  };

  return (
    <div>
      <DesktopIcons setProjectsDirVisible={setProjectsDirVisible} />

      {projectsDirVisible && <ProjectsDir onCloseWindow={closeProjectDirHandler} />}

      {aboutMeVisible && <AboutMe onCloseWindow={closeAboutMeHandler} />}

      <Dockbar
        setResumeVisible={setResumeVisible}
        setContactMeVisible={setContactMeVisible}
        setAboutMeVisible={setAboutMeVisible}
      />

      {resumeVisible && <Resume onCloseWindow={closeResumeHandler} />}

      {contactMeVisible && (
        <ContactMeForm onCloseWindow={closeContactMeHandler} />
      )}

      <TilesBg />
    </div>
  );
};

export default LandingPage;
