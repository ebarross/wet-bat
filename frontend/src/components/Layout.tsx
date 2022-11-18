import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  background-color: #edf0f9;
  height: 100%;
`;

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      <nav></nav>
      <main>{children}</main>
    </Container>
  );
}

export default Layout;
