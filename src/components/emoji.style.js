import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    transform translateY(100vh)
  }
`;

export const SpanEmoji = styled.span`
  font-size: 30px;
`;

export const Container = styled.div`
  position: absolute;
  top: calc((100 + 50) * -1px);
  left: 0;
  z-index: -3;
  margin-left: ${(props) => props.position}%;
  padding-top: ${(props) => props.position}%;
  animation: ${fall} 4s linear infinite;
`;
