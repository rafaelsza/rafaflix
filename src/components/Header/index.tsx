import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Logo } from './styles';

import logo from '../../assets/logo.png';
import Button from '../Button';

interface HeaderProps {
  buttonLinkTo: string;
  buttonLinkText: string;
}

const Header: React.FC<HeaderProps> = ({ buttonLinkTo, buttonLinkText }) => (
  <Container>
    <Link to="/">
      <Logo src={logo} alt="RafaFlix" />
    </Link>
    <Button to={buttonLinkTo}>{buttonLinkText}</Button>
  </Container>
);
export default Header;
