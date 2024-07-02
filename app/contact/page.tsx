"use client"
import { Fieldset, TextInput, Textarea, Button, Container, Title, List } from '@mantine/core';
import React from 'react';

export default function ContactPage() {
  return (
    <Container className='w-1/2 mt-20 min-w-max'>
      <Title>Contact Us</Title>
      <Fieldset variant="unstyled">
        <TextInput label="Name" />
        <TextInput label="Email" />
        <Textarea label="Message" />
        <Button type="submit" className='my-5'>Submit</Button>
      </Fieldset>
      <Container>
        <Title order={2}>Follow us on social media</Title >
        <List>
          <List.Item>Instagram</List.Item>
          <List.Item>Facebook</List.Item>
          <List.Item>Twitter</List.Item>
        </List>
      </Container>
    </Container>
  );
};