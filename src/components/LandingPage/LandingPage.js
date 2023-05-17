import React, { useState } from 'react';

// import classes from './LandingPage.module.css';

import TilesBg from '../UI/TilesBg';
import AboutMe from './AboutMe';
import DesktopIcons from './DesktopIcons';
import Dockbar from '../Dockbar/Dockbar';
import Resume from '../Dockbar/Resume';
import ContactMeForm from '../Dockbar/ContactMeForm/ContactMeForm';
import ProjectsDir from '../ProjectsDir/ProjectsDir';
import Credits from './Credits';

const LandingPage = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(true);
  const [resumeVisible, setResumeVisible] = useState(false);
  const [contactMeVisible, setContactMeVisible] = useState(false);
  const [projectsDirVisible, setProjectsDirVisible] = useState(false);
  const [creditsVisible, setCreditsVisible] = useState(false);
  const [aboutMeActive, setAboutMeActive] = useState(true);
  const [resumeActive, setResumeActive] = useState(false);
  const [contactMeActive, setContactMeActive] = useState(false);
  const [projectsDirActive, setProjectsDirActive] = useState(false);
  const [creditsActive, setCreditsActive] = useState(false);

  const closeAboutMeHandler = () => {
    setAboutMeVisible(false);
  };

  const closeResumeHandler = () => {
    setResumeVisible(false);
  };

  const closeContactMeHandler = () => {
    setContactMeVisible(false);
  };

  const closeProjectDirHandler = () => {
    setProjectsDirVisible(false);
  };

  const closeCreditHandler = () => {
    setCreditsVisible(false);
  };

  const activeAboutMeHandler = () => {
    setAboutMeActive(true);
    setResumeActive(false);
    setContactMeActive(false);
    setProjectsDirActive(false);
    setCreditsActive(false);
  };

  const activeResumeHandler = () => {
    setAboutMeActive(false);
    setResumeActive(true);
    setContactMeActive(false);
    setProjectsDirActive(false);
    setCreditsActive(false);
  };

  const activeContactMeHandler = () => {
    setAboutMeActive(false);
    setResumeActive(false);
    setContactMeActive(true);
    setProjectsDirActive(false);
    setCreditsActive(false);
  };

  const activeProjectHandler = () => {
    setAboutMeActive(false);
    setResumeActive(false);
    setContactMeActive(false);
    setProjectsDirActive(true);
    setCreditsActive(false);
  };

  const activeCreditsHandler = () => {
    setAboutMeActive(false);
    setResumeActive(false);
    setContactMeActive(false);
    setProjectsDirActive(false);
    setCreditsActive(true);
  };

  const active = {
    zIndex: '100',
  };

  return (
    <div>
      <DesktopIcons
        setProjectsDirVisible={setProjectsDirVisible}
        setProjectsDirActive={setProjectsDirActive}
        setCreditsVisible={setCreditsVisible}
        setCreditsActive={setCreditsActive}
        setResumeActive={setResumeActive}
        setContactMeActive={setContactMeActive}
        setAboutMeActive={setAboutMeActive}
      />

      <Dockbar
        setResumeVisible={setResumeVisible}
        setResumeActive={setResumeActive}
        setContactMeVisible={setContactMeVisible}
        setContactMeActive={setContactMeActive}
        setAboutMeVisible={setAboutMeVisible}
        setAboutMeActive={setAboutMeActive}
      />

      {projectsDirVisible && (
        <ProjectsDir
          style={projectsDirActive ? active : ''}
          onCloseWindow={closeProjectDirHandler}
          onWindowClick={activeProjectHandler}
        />
      )}

      {aboutMeVisible && (
        <AboutMe
          style={aboutMeActive ? active : ''}
          onCloseWindow={closeAboutMeHandler}
          onWindowClick={activeAboutMeHandler}
        />
      )}

      {resumeVisible && (
        <Resume
          style={resumeActive ? active : ''}
          onCloseWindow={closeResumeHandler}
          onWindowClick={activeResumeHandler}
        />
      )}

      {contactMeVisible && (
        <ContactMeForm
          style={contactMeActive ? active : ''}
          onCloseWindow={closeContactMeHandler}
          onWindowClick={activeContactMeHandler}
        />
      )}

      {creditsVisible && (
        <Credits
          style={creditsActive ? active : ''}
          onCloseWindow={closeCreditHandler}
          onWindowClick={activeCreditsHandler}
        />
      )}

      <TilesBg />
    </div>
  );
};

export default LandingPage;
