import React from 'react';
import { useHistory } from 'react-router-dom';

import Template from '../Template';

import { Container } from './styles';

const NotFound: React.FC = () => {
  const navigation = useHistory();
  return (
    <Template button={{ text: 'Home', onClick: () => navigation.push('/') }}>
      <Container>
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
      </Container>
    </Template>
  );
};
export default NotFound;
