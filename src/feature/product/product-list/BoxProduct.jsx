import {
  FavoriteBorderOutlined,
  PermDeviceInformation,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  border: 1px solid #ddd;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Title = styled.p`
  position: absolute;
  top: 290px;
  color: #000;
  font-size: 14px;
  font-weight: 500;
`
const Price = styled.p`
  position: absolute;
  top: 309px;
  font-size: 16px;
  color: #ff652e;
  font-weight: bold;
`

const BoxProduct = ({ data }) => {
  return (
    <Container>
      <Image src={data.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Title> {data.name}</Title>
      <Price>{data.price}$</Price>
    </Container>
  );
};

export default BoxProduct;
