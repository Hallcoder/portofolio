import React, { useEffect, useRef, useState } from "react";
import tiktok from "../images/apo.3.jpg";
import Man from "../images/tiktok.png";
import stock from "../images/stock.jpg";
function Testimonial() {
  const divRef = useRef();
  const [currentSlide, setSlide] = useState(1);
  const showSlides = (slide) => {
    let slides = Array.from(divRef.current.children);
    for (let i = 0; i < 3; i++) {
      slides[i].style.display = "none";
    }
    slides[slide - 1].style.display = "block";
  };
  useEffect(() => {
    console.log("useEffect called");
    showSlides(currentSlide);
    console.log(currentSlide)
  }, [currentSlide]);
  const plusSlides = (slide) => {
    let slides = divRef.current.children;
    if (slide === -1) {
      if (currentSlide - 1 === 0) {
        setSlide(3);
      } else {
        setSlide(currentSlide - 1);
      }
    } else {
      if (currentSlide + 1 > 3) {
        setSlide(1);
      } else {
        setSlide(currentSlide + 1);
      }
    }
    showSlides(currentSlide);
  };
  return (
    <div
      ref={divRef}
      className=" w-7/12 relative h-[27rem] border-4 m-auto  border-red-400"
    >
      <div className="slide ">
        <div id="page" className="absolute text-white text-xl bg-black bg-opacity-60">1/3</div>
        <div id="image" className="w-full h-full">
          <img className="w-full  object-cover h-[100%]" src={Man} alt="" />
        </div>
      </div>
      <div className="slide">
        <div id="page" className="absolute text-white text-xl bg-black bg-opacity-60">2/3</div>
        <div id="image" className="w-full">
          <img className="w-full  object-cover h-[32em]" src={tiktok} alt="" />
        </div>
        <div id="nextAndPrevious"></div>
      </div>
      <div className="slide">
        <div id="page" className="absolute text-white text-xl bg-black bg-opacity-60">3/3</div>
        <div id="image" className="w-full">
          <img className="w-full  object-cover h-[32em]" src={stock} alt="" />
        </div>
      </div>
      <a class="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a class="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
    </div>
  );
}

export default Testimonial;
