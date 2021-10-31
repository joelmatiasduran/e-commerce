import React from 'react';
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from './NewsletterElements';
import { Send } from '@material-ui/icons';

const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newsletter</Title>
        <Description>
          Get timely updates from your favorite products
        </Description>
        <InputContainer>
          <Input placeholder="Your E-mail" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Newsletter;
