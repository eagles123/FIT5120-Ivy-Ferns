import React from "react";
import Carousel from "nuka-carousel";

export default function MyCarousel() {
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={5000}
      style={{ height: "50vh", width: "40vw", marginLeft: 15 }}
    >
      <img src={"/calr1.jpg"} />
      <img src={"/calr2.jpg"} />
      <img src={"/calr3.jpg"} />
      <img src={"/calr4.jpg"} />
      <img src={"/calr5.jpg"} />
    </Carousel>
  );
}
