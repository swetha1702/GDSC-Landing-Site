import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
 
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
        <img src="/logo1.png" alt="" width='50' height='30'/>
                    GDSC
        </FooterSubHeading>
        <FooterSubText>You can subscribe us to get updates.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksWrapper>
        <FooterLinkItems>
            <FooterLinkTitle>Quick Links</FooterLinkTitle>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/'>About</FooterLink>
            <FooterLink to='/'>Achievements</FooterLink>
            <FooterLink to='/'>Events</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      <FooterLinksContainer>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            
            <img src="/logo1.png" alt="" width='50' height='30'/>
                    GDSC
          </SocialLogo>
          <WebsiteRights>Google © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href=' https://www.facebook.com/dscsrec' target=' https://www.facebook.com/dscsrec' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/dscsrec/' target='https://www.instagram.com/dscsrec/' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/channel/UCH0PxiZA0FvQallTO4jiuYw'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com/dscsrec' target='https://twitter.com/dscsrec' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href=' https://www.linkedin.com/in/dscsrec/' target=' https://www.linkedin.com/in/dscsrec/' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;