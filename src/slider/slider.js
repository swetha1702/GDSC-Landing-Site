import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.css";

const slider = () => {
    return <div>
        <Carousel infiniteLoop autoPlay>
            <div className="image">
                <img src="https://pbs.twimg.com/media/FDKWljkVQAMmiub?format=jpg&name=large" alt=""/>
            </div>
            <div className="image">
                <img src="https://i.ytimg.com/vi/XLPKfwRcCYY/maxresdefault.jpg" alt=""/>
            </div>
            <div className="image">
                <img src="https://i.ytimg.com/vi/Ob0VGQz5OfE/maxresdefault.jpg" alt=""/>
            </div>
          
        </Carousel>
    </div>;
    };
export default slider;