"use client"

import React, { useState } from 'react';
import { TextInput, Textarea, Button, Container, Title } from '@mantine/core';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <TextInput id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <TextInput label="Email:" id="email" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <Textarea id="message" value={message} onChange={handleMessageChange} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div>
        <Title order={2}>Follow us on social media:</Title >
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default ContactPage;