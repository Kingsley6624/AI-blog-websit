import React from 'react'
import Subscribe from '../components/footer/Subscribe'
import FooterLinks from '../components/footer/FooterLinks';
import SocialLinks from '../components/footer/SocialLinks';

const Footer = () => {
  return (
    <section>
      <Subscribe />
      <FooterLinks />
      <SocialLinks />
    </section>
  );
}

export default Footer;