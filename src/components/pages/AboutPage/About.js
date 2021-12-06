import React from 'react';
import { AboutObjOne, AboutObjTwo} from './data';
import Profile from 'C:/Users/HP/gdsc-landing-site/src/components/Profile/Profile.js';
import { InfoSection } from 'C:/Users/HP/gdsc-landing-site/src/components/InfoSection/InfoSection.js';
// import {Profile} from '../../components';
function About() {
  return (
    <>
      <InfoSection {...AboutObjOne} />
      <InfoSection {...AboutObjTwo} />
       <Profile /> 
      
    </>
  );
}
export default About;