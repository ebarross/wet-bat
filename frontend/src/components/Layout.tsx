import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Container = styled.div`
  background-color: #edf0f9;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  margin-left: 160px;
  padding: 32px;
`;

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Main>{children}</Main>
      </Content>
    </Container>
  );
}

export default Layout;
