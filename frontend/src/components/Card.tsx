import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #dbdbdb99;
  border-radius: 4px;
`;

const Content = styled.div`
  padding: 16px 24px;
`;

const Title = styled(Content)`
  font-size: 1.2rem;
  color: #5f6caf;
  border-bottom: 1px solid #dbdbdb99;
`;

type Props = {
  children: React.ReactNode;
  title: string;
};

function Card({ children, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}

export default Card;
