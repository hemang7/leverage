import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../index.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const thumbnailBaseUrl = "https://img.youtube.com/vi/";
const thumbnailSuffix = "/hqdefault.jpg";

const sliderVideoUrls = [
  {
    url: "xsbjEhM-y8s",
  },
  {
    url: "rze8QYwWGMs",
  },
  {
    url: "1myF4CtgoLw",
  },
  {
    url: "dug56u8NN7g",
  },
  {
    url: "4wxyy8Rcz4k",
  },
];

const Slider = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handleThumbnailClick = (index) => {
    setActiveVideoIndex(activeVideoIndex === index ? null : index);
  };

  return (
    <div className="parent" style={{ marginTop: "120px" }}>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        beforeChange={() => {
          
          if (activeVideoIndex !== null) {
            setActiveVideoIndex(null); 
          }
        }}
      >
        {sliderVideoUrls.map((item, index) => {
          const thumbnailUrl = `${thumbnailBaseUrl}${item.url}${thumbnailSuffix}`;
          return (
            <div className="carousel-item" key={index}>
              <div
                className={`thumbnail ${
                  activeVideoIndex === index ? "video" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                {activeVideoIndex === index ? (
                  <iframe
                    className="w-64 h-64 m mt-10 "
                    src={`https://www.youtube.com/embed/${item.url}`}
                    title={`Video ${index + 1}`}
                    allowFullScreen
                  />
                ) : (
                  <img
                    className="w-80 h-80"
                    src={thumbnailUrl}
                    alt={`Video ${index + 1}`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
