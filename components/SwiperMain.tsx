import React from 'react';

import { Image } from '@mantine/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

const photos = [
  '/photos/dv2.jpg',
  '/photos/bm3.jpg',
  '/photos/mf1.jpg',
  '/photos/st3.jpg',
  '/photos/sm1.jpg'
]

const slides = photos.map((photo) => (
  <SwiperSlide>
    <Image src={photo}/>
  </SwiperSlide>
));

export default function SwiperMain() {
  return(
    <Swiper
      slidesPerView={2.5}
      spaceBetween={0}
      navigation={true}
      loop={true}
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwipe mt-10"
      >
      {slides}
    </Swiper>

  )
}