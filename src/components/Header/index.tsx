import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Logo } from './styles';

import logo from '../../assets/logo.png';
import Button from '../Button';

interface HeaderProps {
  button: {
    text: string;
    onClick(): void;
  };
}

const Header: React.FC<HeaderProps> = ({ button }) => (
  <Container>
    <Link to="/">
      <Logo src={logo} alt="RafaFlix" />
    </Link>
    <Button onClick={button.onClick}>{button.text}</Button>
  </Container>
);
export default Header;
