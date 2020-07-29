import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Children } from './styles';

interface TemplateProps {
  button: {
    text: string;
    onClick(): void;
  };
}

const Template: React.FC<TemplateProps> = ({ children, button }) => (
  <Container>
    <Header button={button} />
    <Children>{children}</Children>
    <Footer />
  </Container>
);
export default Template;
