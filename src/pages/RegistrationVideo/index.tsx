import React from 'react';

import Template from '../Template';

import { Container } from './styles';

const RegistrationVideo: React.FC = () => (
  <Template
    buttonHeaderLink="/video/category/create"
    buttonLinkText="Criar categoria"
  >
    <Container />
  </Template>
);
export default RegistrationVideo;
