"use client"
import { Grid, Image } from '@mantine/core';

import AccordionMain from '../../components/AccordionMain';

export default function Home() {
  const photos = [
    '/photos/dv1.jpg',
    '/photos/dv3.jpg',
    '/photos/dv2.jpg',
    '/photos/mf1.jpg',
    '/photos/mf3.jpg',
    '/photos/mf2.jpg',
    '/photos/st1.jpg',
    '/photos/st3.jpg',
    '/photos/st2.jpg',
    '/photos/bm3.jpg',
    '/photos/sm1.jpg',
    '/photos/cake-mf.jpg',
    '/photos/cake-ssey.jpg',
    '/photos/cake-chew.jpg',
    '/photos/cake-spd.jpg',
    '/photos/cake-r2.jpg',
    '/photos/cake-pucca.jpg',
    '/photos/cake-min.jpg',
    '/photos/cookie-tree1.jpg',
    '/photos/cookie-sw.jpg',
    '/photos/cookie-tree2.jpg'
  ];

  return (
    <div>
      <Grid>
        {photos.map((photo) => (
          <Grid.Col span={4}>
            <Image src={photo}/>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}