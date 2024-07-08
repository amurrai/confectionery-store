"use client"
import React from 'react';
import { AppShell, Title, Box, UnstyledButton } from '@mantine/core';

export default function Layout({ 
    children,
  }: {
    children: any;
  }) {
    
  return (
    <AppShell 
      withBorder={false}
      header={{ height: 60 }}
      footer={{ height: 60 }}
    >
      <AppShell.Header className='w-2/3'>
        <div className='flex flex-row justify-between mx-5 my-2 '>
          <UnstyledButton component="a" href="/">
            <Title>
              zeek
            </Title>
          </UnstyledButton>
        <div className='flex space-x-10'>
          <UnstyledButton component="a" href="/about">
            <Title>
              about
            </Title>
          </UnstyledButton>
          <UnstyledButton component="a" href="/gallery">
            <Title>
              gallery
            </Title>
          </UnstyledButton>
          <UnstyledButton component="a" href="/contact">
            <Title>
              contact
            </Title>
          </UnstyledButton >
        </div>
        </div>
      </AppShell.Header>
      <Box bg={'orange'} className='absolute top-0 right-0 h-2/3 w-1/3 -z-50' />
      
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <AppShell.Footer bg={'orange'} className='flex flex-row items-center px-3'>
        <Title>
          Z
        </Title>
      </AppShell.Footer>
    </AppShell>
  );
}