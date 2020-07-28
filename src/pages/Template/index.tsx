import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Children } from './styles';

interface TemplateProps {
  buttonHeaderLink: string;
  buttonLinkText: string;
}

const Template: React.FC<TemplateProps> = ({
  children,
  buttonHeaderLink,
  buttonLinkText,
}) => (
  <Container>
    <Header buttonLinkTo={buttonHeaderLink} buttonLinkText={buttonLinkText} />
    <Children>{children}</Children>
    <Footer />
  </Container>
);
export default Template;
