"use client"
import { Title, Button, Image } from '@mantine/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';


export default function Home() {

  return (
    <div>
      <Title size="5rem" className='my-20 mx-5' c='brown.9'>
        Taste your Fandom
      </Title>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwipe mt-10"
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