"use client"
import { Container, Title, Text, Image, Paper, Button } from '@mantine/core';

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
        <div>
          <Paper shadow="sm" p="xl" className='flex flex-col mt-24 items-center w-screen'>
            <Title order={1}>
              Unleash Your Imagination in Every Bite! 
            </Title>
            <Text size="lg" className='mt-3'>
              Customize your dream confections and make every occasion extraordinary <br />
              Contact us today and get a quote for your next event
            </Text>
            <Button size="md" className='mt-5 w-1/4 self-center' component="a" href="/contact">
              Contact Us
            </Button>
          </Paper>
        </div>
      <div className='mt-20 mx-10'>
        <Title size="7rem" c='brown.9'>
          chocolates
        </Title >
        <Title size="7rem" c='brown.9'>
          cakes
        </Title>
        <Title size="7rem" c='brown.9'>
          cookies
        </Title>
      </div>
    </div>
  );
}