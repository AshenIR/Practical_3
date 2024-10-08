import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Grid from '@mui/material/Grid';

const Container = styled.div`
width: 100vw;
background: 
  url("https://i.ibb.co/zb91222/Frame-5.png")
    center;
background-size: cover;
z-index: -1;`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  // background-color: white;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 700px !important;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 0 2% 2% 0;
  
`;

const Image = styled.img`
  // margin-right: 12px;
  border-radius: 0 2% 2% 0;
  height: 700px !important;
  object-fit: cover;
  // padding: 80px 0;
  ${mobile({ height: "40vh" })}
  background-color:#2d53bf;
`;

const InfoContainer = styled.div`
  border-radius: 2% 0 0 2%;
  background-color: white;
  height: 700px;
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #2148C0;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 20px;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #002796;
  }
`;

const Text = styled.div`
margin:25px 0 45px 0`;


const InfoDiv = styled.div`
display:flex;
`;

const AboutUs = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState(
    {
      title: "Plaid Sleeve Kangaroo Pocket Drawstring Frock",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, augue hendrerit finibus mattis, turpis felis vestibulum risus, nec commodo lacus erat at ligula. Morbi dignissim volutpat mi, in consequat sem lacinia eu. Nunc facilisis velit id bibendum dignissim. Phasellus sem lacus, scelerisque ut vestibulum eu, facilisis et ex. Praesent justo nunc, fringilla ut faucibus non, feugiat efficitur eros. Phasellus auctor, augue tristique vestibulum facilisis, turpis dolor sodales augue, vitae ultrices odio dui non mauris. Vestibulum ac metus lectus.",
      price: '250',
      img: "https://i.ibb.co/f8Q55dg/8-2-model-png-picture.png",
      color: ['red', 'black', 'blue', 'green', 'yellow'],
      size: ['XS', 'S', 'M', 'L', 'XL']
    });
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");


  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    // dispatch(
    //   addProduct({ ...product, quantity, color, size })
    // );
  };
  return (
    <Container>
      <Navbar />
      {/* <Announcement /> */}
      <Wrapper>
        <InfoContainer>
          <Title>ABOUT US</Title>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <InfoDiv>
              <img src='https://i.ibb.co/KjRGYY9/Group-1.png' />
              <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
              </div>
              </InfoDiv>
            </Grid>
            <Grid item xs={12} sm={6}>
            <InfoDiv>
              <img src='https://i.ibb.co/VQtkTRt/Group-2.png' />
              <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
              </div>
              </InfoDiv>
            </Grid>
            <Grid item xs={12} sm={12}>
              <img src='https://i.ibb.co/FzC4R8F/Group-40-1.png' />
              
            </Grid>
          </Grid>
        </InfoContainer>
        <ImgContainer>
          <Image src='https://i.ibb.co/XCM3Jyx/pngwing-com.png' />
        </ImgContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AboutUs;
