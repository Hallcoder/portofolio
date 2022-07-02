import React from "react";
import tiktok from "../images/apo.3.jpg";
import Man from "../images/tiktok.png";
import stock from "../images/stock.jpg";
function Testimonial() {
  return (
    <div className="relative w-9/12 h-1/6">
      <div className="slide">
        <div id="page">1/3</div>
        <div id="image" className="w-6/12 ">
          <img className="w-full h-full" src={Man} alt="" />
        </div>
        <div id="nextAndPrevious"></div>
      </div>
      <div className="slide">
        <div id="page">2/3</div>
        <div id="image" className="w-full">
          <img className="w-full h-full" src={tiktok} alt="" />
        </div>
        <div id="nextAndPrevious"></div>
      </div>
      <div className="slide">
        <div id="page">3/3</div>
        <div id="image" className="w-6/12 ">
          <img className="w-full h-full" src={stock} alt="" />
        </div>
            <a class="prev" onclick="plusSlides(-1)">
              &#10094;
            </a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </div>
  );
}

export default Testimonial;
