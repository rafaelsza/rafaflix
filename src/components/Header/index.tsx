import React from 'react';

import { Container, Logo } from './styles';

import logo from '../../assets/logo.png';
import Button from '../Button';

const Header: React.FC = () => (
  <Container>
    <Logo src={logo} alt="RafaFlix" />
    <Button>Criar Novo</Button>
  </Container>
);
export default Header;
