import React, { Fragment, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './styles.css';

// import required modules
import { Navigation } from 'swiper';

export default function App() {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);

  function SlideNextButton({ disabled }) {
    const swiper = useSwiper();

    function handleClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
    }

    return (
      <button
        onClick={handleClick}
        className="swiper-button"
        disabled={disabled}
      >
        <img src="/arrow-right.svg" />
      </button>
    );
  }

  function SlidePrevButton({ disabled }) {
    const swiper = useSwiper();

    function handleClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slidePrev();
    }

    return (
      <button
        onClick={handleClick}
        className="swiper-button"
        disabled={disabled}
      >
        <img src="/arrow-left.svg" />
      </button>
    );
  }

  function updateButtonsDisable(swiper) {
    setNextDisabled(
      swiper.isEnd && !swiper.params.loop && !swiper.params.rewind
    );
    setPrevDisabled(
      swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind
    );
  }

  return (
    <div className="fade-out-container">
      <div className="left"></div>
      <div className="center">
        <Swiper
          slidesPerView={2.25}
          spaceBetween={20}
          className="mySwiper"
          onSlideChange={updateButtonsDisable}
          onInit={updateButtonsDisable}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>
            Slide 6<br />
            Slide 6
          </SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <div slot="container-start">
            <div className="swiper-header">
              <h2>My little pony</h2>
              <SlidePrevButton disabled={prevDisabled} />
              <SlideNextButton disabled={nextDisabled} />
            </div>
          </div>
        </Swiper>
      </div>

      <div className="right"></div>
    </div>
  );
}
