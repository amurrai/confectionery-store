"use client"
import { Container, Title, Text, Paper, Button } from '@mantine/core';

import AccordionMain from '../components/AccordionMain';
import SwiperMain from '../components/SwiperMain';

export default function Home() {

  return (
    <div>
      <Title size="5rem" className='my-20 mx-5' c='brown.9'>
        Taste your Fandom
      </Title>
      <SwiperMain />
      <Container>
        <Paper shadow="sm" p="xl" withBorder className='flex flex-col mt-24 items-center'>
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
      </Container>
      <div className='mt-20 mx-10'>
        <AccordionMain />
      </div>
    </div>
  );
}