import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
}

/* eslint-disable */
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    color: red;
  }

  label {
    padding: 10px 0;

    font-size: 18px;
  }

  input {
    height: 40px;
    width: 300px;
    outline: none;

    border-radius: 5px;
    border: 1px solid var(--blackLighter);
    font-size: 16px;

    ${props =>
      props.isErrored &&
      css`
        border-color: red;
      `}

    ${props =>
      props.isFocused &&
      css`
        border: 2px solid var(--primary);
      `}
  }

  select {
    height: 40px;
    width: 300px;
    outline: none;

    border-radius: 5px;
    border: 1px solid var(--blackLighter);
    font-size: 16px;
  }
`;
