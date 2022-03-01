import React from 'react';
import { SwiperOptions } from 'swiper';

export default interface ICarousselProps {
  config?: SwiperOptions;
  children: React.ReactNode;
}
