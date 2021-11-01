import {
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from '@material-ui/icons';
import React from 'react';
import {
  Left,
  Center,
  Right,
  Container,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
  IconWrapper,
} from './FooterElements.js';

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>JxD.</Logo>
          <Description>Some Description</Description>
          <SocialContainer>
            <SocialIcon color="e4405f">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accesories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <IconWrapper>
              <Room />{' '}
            </IconWrapper>
            622 Dixie Path, South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <Phone />
            </IconWrapper>
            +1 234 56 78
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <MailOutline />
            </IconWrapper>
            contact@joel.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </>
  );
};

export default Footer;
