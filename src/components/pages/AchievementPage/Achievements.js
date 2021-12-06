
import React from 'react';
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import { AboutObjOne,AboutObjTwo,AboutObjThree,AboutObjFour,AboutObjFive} from './data';
import { InfoSection } from 'C:/Users/HP/gdsc-landing-site/src/components/InfoSection/InfoSection.js';
function Achievements() {
  return (
    <>
       
      <InfoSection {...AboutObjOne} />
      <InfoSection {...AboutObjTwo} />
      <InfoSection {...AboutObjThree} />
      <InfoSection {...AboutObjFour} />
      <InfoSection {...AboutObjFive} />
      <YoutubeEmbed embedId="2PnmLF9YQRI" />
    </>
  );
}
export default Achievements;
