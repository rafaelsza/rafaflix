import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--grayMedium);
`;

export const Children = styled.div`
  flex: 1;
  min-height: calc(100vh - 94px - 84px - 94px);
  margin-top: 94px;
`;
