import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (max-height: 800px) {
    margin-top: 20px;
  }

  Form {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;

  Button {
    margin-top: 30px;
  }
`;
