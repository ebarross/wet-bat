import styled, { keyframes } from "styled-components";

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #5f6caf;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: ${ellipsis1} 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ${ellipsis2} 0.6s infinite;
    }
    &:nth-child(3) {
      left: 32px;
      animation: ${ellipsis2} 0.6s infinite;
    }
    &:nth-child(4) {
      left: 56px;
      animation: ${ellipsis3} 0.6s infinite;
    }
  }
`;

function Loading() {
  return (
    <Container>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}

export default Loading;
