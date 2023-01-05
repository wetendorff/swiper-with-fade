import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSwiper } from 'swiper/react';

type SlideNextButtonProps = {
  disabled: boolean;
};

export default function SlideNextButton({ disabled }: SlideNextButtonProps) {
  const swiper = useSwiper();

  function handleClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
  }

  return (
    <button onClick={handleClick} className="swiper-button" disabled={disabled}>
      <img src="/arrow-right.svg" />
    </button>
  );
}
