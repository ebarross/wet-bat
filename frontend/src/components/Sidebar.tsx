import styled from "styled-components";
import { IoHome } from "react-icons/io5";
import { MdAttachMoney, MdGroup, MdSupport } from "react-icons/md";
import { FaListAlt, FaPaperPlane } from "react-icons/fa";
import { BsFileEarmarkFill } from "react-icons/bs";
import { IoMdAnalytics, IoIosSettings } from "react-icons/io";

const Container = styled.div`
  position: fixed;
  width: 160px;
  height: 100%;
  background-color: #e6e6e6;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  width: 100%;
`;

const Link = styled.a<{ active?: boolean }>`
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  height: 72px;
  color: #5f6caf;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.active ? "#ccd0dc" : "transparent")};

  :hover {
    background-color: #ccd0dc;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 2px solid #cccccc88;
`;

const Rights = styled.div`
  margin-top: 60px;

  p {
    font-size: 0.6rem;
    font-weight: 500;
    text-align: center;
    color: #aaa;
    width: 60%;
    margin: 40px auto 0px;
  }
`;

function Sidebar() {
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <Link href="/">
              <IoHome /> Home
            </Link>
          </Item>
          <Item>
            <Link href="/quotes" active>
              <MdAttachMoney size={26} style={{ marginRight: "-8px" }} /> Quotes
            </Link>
          </Item>
          <Item>
            <Link href="/leads">
              <FaListAlt /> Leads
            </Link>
          </Item>
          <Item>
            <Link href="/tours">
              <FaPaperPlane /> Tours
            </Link>
          </Item>
          <Divider />
          <Item>
            <Link href="/invoices">
              <BsFileEarmarkFill /> Invoices
            </Link>
          </Item>
          <Item>
            <Link href="/analytics">
              <IoMdAnalytics /> Analytics
            </Link>
          </Item>
          <Item>
            <Link href="/team">
              <MdGroup size={22} /> Team
            </Link>
          </Item>
          <Item>
            <Link href="/admin">
              <IoIosSettings size={24} />
              Admin
            </Link>
          </Item>
          <Item>
            <Link href="/support">
              <MdSupport size={24} /> Support
            </Link>
          </Item>
        </List>
      </nav>
      <Rights>
        <Divider />
        <p>Allright received by wetbat 2020 *</p>
      </Rights>
    </Container>
  );
}

export default Sidebar;
