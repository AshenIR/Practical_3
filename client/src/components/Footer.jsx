import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  background-color: #2148C0;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src='https://as2.ftcdn.net/v2/jpg/03/93/91/25/1000_F_393912563_doSXIFG62VoKoVOwOkdsyqCA00LU4uWY.jpg'/>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Customer Service</Title>
        <List>
          <ListItem>Support Forums</ListItem>
          <ListItem>Support Forums</ListItem>
          <ListItem>Communication</ListItem>
          <ListItem>Communication</ListItem>
          <ListItem>FAQS</ListItem>
          <ListItem>FAQS</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>FAQS</ListItem>
          <ListItem>Rules & Condition</ListItem>
          <ListItem>Contact Us</ListItem>
        </List>
      </Center>
      <Right>
        <Title>About Us</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 10, Highlevel Road, Nugegoda, Colombo
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +94 112 244 578
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> info@cargo.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
