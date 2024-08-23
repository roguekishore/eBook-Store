import React from 'react';
import '../css/ScrollingText.css'; 

const ScrollingText = () => {
  return (
    <div className="scrollingtext scroll-right">
        <marquee behavior="right" scrollamount="10" direction="right">10% off</marquee>
    </div>
  );
};

export default ScrollingText;
