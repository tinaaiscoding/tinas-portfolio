import React, { useState } from 'react';

import classes from './LandingPage.module.css';

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

  return (
    <div id={classes.landingPage}>
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
        setCreditsActive={setCreditsActive}
        setProjectsDirActive={setProjectsDirActive}
      />

      {projectsDirVisible && (
        <ProjectsDir
          className={projectsDirActive ? classes.active : classes.inActive}
          onCloseWindow={closeProjectDirHandler}
          onWindowClick={activeProjectHandler}
        />
      )}

      {aboutMeVisible && (
        <AboutMe
          className={aboutMeActive ? classes.active : classes.inActive}
          onCloseWindow={closeAboutMeHandler}
          onWindowClick={activeAboutMeHandler}
        />
      )}

      {resumeVisible && (
        <Resume
          className={resumeActive ? classes.active : classes.inActive}

          onCloseWindow={closeResumeHandler}
          onWindowClick={activeResumeHandler}
        />
      )}

      {contactMeVisible && (
        <ContactMeForm
          className={contactMeActive ? classes.active : classes.inActive}
          onCloseWindow={closeContactMeHandler}
          onWindowClick={activeContactMeHandler}
        />
      )}

      {creditsVisible && (
        <Credits
          className={creditsActive ? classes.active : classes.inActive}
          onCloseWindow={closeCreditHandler}
          onWindowClick={activeCreditsHandler}
        />
      )}

      <TilesBg className='' />
    </div>
  );
};

export default LandingPage;
