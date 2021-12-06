import React from "react";
import useWindowSize from "../../ImageSlider/useWindowSize";
import ImageSlider from "../../ImageSlider/ImageSlider";

import "./Home.css";
import AboutI from "../../images/about";

import EventI from "../../images/Events";
import AchvI from "../../images/Achv";
import Aboutmob from "../../images/aboutmob";
import Eventmob from "../../images/Eventsmob";
import Achvmob from "../../images/Achvmob";
const About = () => {
  const { width } = useWindowSize();
  console.log({ width });
  return (
    <div>
      {width > 1000 ? (
        <>
          <div
            className="background"
            style={{
              display: "flex",
            }}
          >
            <div className="ImageSlider">
              <ImageSlider />
            </div>

            <div style={{ display: "flex" }}>
              <a href="/About">
                <AboutI></AboutI>
              </a>
              <b className="Head1">ABOUT </b>
              
              <a href="/EventsPage">
                <EventI></EventI>
              </a>
              <b className="Head2">EVENTS </b>
              
              <a href="/Achievements">
                <AchvI></AchvI>
              </a>
              <b className="Head3">ACHV. </b>

              

            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="background"
            style={{
              display: "flex",
            }}
          >
            <div className="ImageSlidermob">
              <ImageSlider />
            </div>

            <div style={{ display: "flex" }}>
              <a href="/About">
                <Aboutmob></Aboutmob>
              </a>

              <a href="/Eventmob">
                <Eventmob></Eventmob>
              </a>

              <a href="/Achievements">
                <Achvmob></Achvmob>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;