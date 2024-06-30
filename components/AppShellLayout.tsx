"use client"
import React from 'react';
import { AppShell, Title } from '@mantine/core';

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
      <AppShell.Header>
        <div className='flex flex-row justify-between mx-5'>
          <Title>
            zeek
          </Title>
        <div className='flex space-x-5'>
          <Title>
            about
          </Title>
          <Title>
            gallery
          </Title>
          <Title>
            contact
          </Title>
        </div>
        </div>
      </AppShell.Header>
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <AppShell.Footer>
        <div className='flex flex-row justify-between mx-5'>
          <Title>
            Footer
          </Title>
        </div>
      </AppShell.Footer>
    </AppShell>
  );
}