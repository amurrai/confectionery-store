import React from 'react';
import { Title, Image, Accordion, Grid } from '@mantine/core';
import styles from './styles.module.css';

const categories = [
  {
    name: 'chocolates',
    photos: [
      '/photos/dv1.jpg',
      '/photos/dv3.jpg',
      '/photos/dv2.jpg',
      '/photos/mf1.jpg',
      '/photos/mf3.jpg',
      '/photos/mf2.jpg',
      '/photos/st1.jpg',
      '/photos/st3.jpg',
      '/photos/st2.jpg'
    ]
  },
  {
    name: 'cakes',
    photos: [
      '/photos/cake-mf.jpg',
      '/photos/cake-ssey.jpg',
      '/photos/cake-chew.jpg',
      '/photos/cake-spd.jpg',
      '/photos/cake-r2.jpg',
      '/photos/cake-pucca.jpg'
    ]
  },
  {
    name: 'cookies',
    photos: [
      '/photos/cookie-tree1.jpg',
      '/photos/cookie-sw.jpg',
      '/photos/cookie-tree2.jpg'
    ]
  }
];


const items = categories.map((item) => (
  <Accordion.Item value={item.name}>
    <Accordion.Control>
      <Title size="7rem" c='brown.9'>
        {item.name}
      </Title>
    </Accordion.Control>
    <Accordion.Panel>
      <Grid>
        {item.photos.map((photo) => (
          <Grid.Col span={4}>
            <Image src={photo}/>
          </Grid.Col>
        ))}
      </Grid>
    </Accordion.Panel>
  </Accordion.Item>
))

export default function AccordionMain() {
  return(
  <Accordion 
    chevron={''}
    classNames={styles}
    >
    {items}
  </Accordion>
  )
}