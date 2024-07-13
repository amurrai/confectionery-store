"use client"
import { Container, Title, Text, Paper, Center } from '@mantine/core';
import React from 'react';

export default function AboutPage() {
  return (
    <Center>
      <Paper shadow="sm" p="xl" className='w-1/2 mt-20 max-w-max'>
        <Title size="5rem"  c='brown.9'>zeek the geek</Title>
          <Text className='mt-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est, voluptates dolor illum mollitia obcaecati tempora veritatis unde porro libero corrupti repudiandae perferendis id, voluptatibus vitae quia error esse recusandae?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, magni perspiciatis, omnis maxime voluptatibus sint fugit amet ad eaque dicta officiis ullam porro perferendis veniam nemo quam temporibus itaque nam?
          </Text>
      </Paper>
    </Center>
  );
};