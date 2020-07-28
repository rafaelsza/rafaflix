import React from 'react';

import Template from '../Template';

import { Container } from './styles';

const NotFound: React.FC = () => (
  <Template buttonHeaderLink="/" buttonLinkText="Home">
    <Container>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
    </Container>
  </Template>
);
export default NotFound;
