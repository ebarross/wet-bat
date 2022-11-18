import styled from "styled-components";
import { HiSquares2X2 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdChatBubble } from "react-icons/md";
import avatar from "../assets/placeholder.jpg";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #5f6caf;
  padding: 0px 28px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: #fff;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;

  span:nth-child(1) {
    letter-spacing: 1px;
  }

  span:nth-child(2) {
    font-size: 0.6rem;
    line-height: 0.9;
  }
`;

const Search = styled.div`
  width: 500px;
  height: 36px;
  border-radius: 8px;
  background-color: #e6e6e6;

  label {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 8px;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    margin-left: 8px;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0px 40px;
`;

const Avatar = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

function Header() {
  return (
    <Container>
      <Content>
        <Column>
          <HiSquares2X2 color="#fff" size={40} />
          <Logo>
            <span>Wet Bat</span>
            <span>TRAVEL</span>
          </Logo>
        </Column>
        <Column>
          <Search>
            <label aria-label="Search">
              <FiSearch color="#777" size={24} />
              <input type="text" />
            </label>
          </Search>
          <Options>
            <a href="/notifications">
              <IoNotifications color="#fff" size={24} />
            </a>
            <a href="/messages">
              <MdChatBubble color="#fff" size={24} />
            </a>
            <a href="/settings">
              <IoIosSettings color="#fff" size={28} />
            </a>
          </Options>
          <Avatar>
            <img src={avatar} alt="User avatar" />
          </Avatar>
        </Column>
      </Content>
    </Container>
  );
}

export default Header;
