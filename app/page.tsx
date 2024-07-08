"use client"
import { Title, Button, Image } from '@mantine/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';


export default function Home() {

  return (
    <div>
      <Title size="6rem">
        Taste your Fandom
      </Title>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwipe"
      >
        <SwiperSlide>
          <Image src={"/photos/dv2.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/photos/bm3.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/photos/mf1.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/photos/st3.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/photos/sm1.jpg"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}