import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { Image } from 'lucide-react';

const BusSlider = ({ thumbs, largeImages }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  // Initialize Fancybox for the gallery links
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
    });
  }, []);

  // Update nav state when refs are ready
  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  // Optional: track current slide for active thumbnail styling
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const sliderSettingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
        arrows: false,

  };

  return (
    <div className="service-wrap card border-0 mb-4">
      <div className="card-body">
        <div className="slider-wrap vertical-slider vertical-slider-two d-flex align-items-center">
          {/* Thumbnail Slider */}
          <div className="slider-nav nav-center" id="small-img" style={{ width: "100px" }}>
            <Slider {...sliderSettingsNav} ref={thumbSliderRef}>
              {thumbs.map((src, i) => (
                <div
                  key={i}
                  style={{
                    padding: "2px",
                    border: i === currentSlide ? "2px solid #007bff" : "2px solid transparent",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  <img src={src} className="img-fluid" alt={`Thumb ${i}`} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Main Slider */}
          <div className="slider-for nav-center" id="large-img" style={{ flex: 1, marginLeft: "15px" }}>
            <Slider {...sliderSettingsFor} ref={mainSliderRef}>
              {largeImages.map((src, i) => (
                <div className="service-img" key={i}>
                  <img src={src} className="img-fluid" alt={`Large ${i}`} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Fancybox "See All" */}
          <a
            href={largeImages[0]}
            data-fancybox="gallery"
            className="btn btn-primary btn-xs view-btn"
            style={{ marginLeft: "15px", padding: "5px 15px", alignSelf: "flex-start" }}
          >
  <Image className="w-3 h-3 mr-1" /> See All
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusSlider;
