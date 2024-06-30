"use client"
import { AppShell, Burger, Button, Group, Title, NavLink, Skeleton, Te, Titlext } from '@mantine/core';

export default function Home() {

  return (
    <AppShell>
      <AppShell.Header >
        <div className='flex flex-row'>

        <Title>
          zeek
        </Title>
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
      </AppShell.Header>
      {/* Main content */}
      <AppShell.Footer>
        <Title>
          Footer
        </Title>
      </AppShell.Footer>
    </AppShell>
  );
}