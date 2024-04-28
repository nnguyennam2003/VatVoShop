import React from "react";
import { Carousel } from "antd";
import slide1 from '../../../../assets/images/slide1.png'
import slide2 from '../../../../assets/images/slide2.png'
import slide3 from '../../../../assets/images/slide3.png'

function Slide(props) {
  const contentStyle = {
    width: "100%",
    height: "auto",
    objetFit: "cover"
  };

  return (
    <Carousel autoplay autoplaySpeed={2000}>
      <div>
        <img src={slide3} alt="slide" style={contentStyle}/>
      </div>
      <div>
        <img src={slide2} alt="slide" style={contentStyle}/>
      </div>
      <div>
        <img src={slide1} alt="slide" style={contentStyle}/>
      </div>      
    </Carousel>
  );
}

export default Slide;
