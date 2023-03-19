import React, { useState } from 'react';

import classes from './LandingPage.module.css';

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
  const [aboutMeActive, setAboutMeActive] = useState(false);
  const [resumeActive, setResumeActive] = useState(false);
  const [contactMeActive, setContactMeActive] = useState(false);
  const [projectsDirActive, setProjectsDirActive] = useState(false);

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

  const activeAboutMeHandler = () => {
    setAboutMeActive(true);
    setResumeActive(false);
    setContactMeActive(false);
    setProjectsDirActive(false);
    console.log('about me');
    console.log(aboutMeActive);
  };

  const activeResumeHandler = () => {
    setAboutMeActive(false);
    setResumeActive(true);
    setContactMeActive(false);
    setProjectsDirActive(false);
    console.log('resume');
    console.log(resumeActive);
  };

  const activeContactMeHandler = () => {
    setAboutMeActive(false);
    setResumeActive(false);
    setContactMeActive(true);
    setProjectsDirActive(false);
    console.log('contact');
  };

  const activeProjectHandler = () => {
    setAboutMeActive(false);
    setResumeActive(false);
    setContactMeActive(false);
    setProjectsDirActive(true);
    console.log('project');
  };

  const active = {
    zIndex: '10000',
  };

  return (
    <div>
      <DesktopIcons setProjectsDirVisible={setProjectsDirVisible} />

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

      <Dockbar
        setResumeVisible={setResumeVisible}
        setContactMeVisible={setContactMeVisible}
        setAboutMeVisible={setAboutMeVisible}
      />

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

      <TilesBg />
    </div>
  );
};

export default LandingPage;
