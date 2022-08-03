import { Add, Remove } from "@material-ui/icons";
import { AppLayout } from "layout/AppLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductAction } from "stores/slices/product.slice";
import styled from "styled-components";
import { Image } from 'antd';


const Container = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  width: 400px;
  flex: 1;
`;

// const Image = styled.img`
//   width: 100%;
//   object-fit: cover;
// `;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 600;
`;


const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;

`;

const Filter = styled.div`
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin: 10px 0;
`;

const Amount = styled.span`
  width: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 0px 5px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #008080;
  background-color: #008080;
  cursor: pointer;
  font-weight: 500;
  width: 65%;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const ProductDetail = () => {
  const productState = useSelector(state => state.product.productState);
  const data = productState.data;
  // const [productDetail, setProductDetail] = useState({
  //   name: "",
  //   price: null,
  //   img: "",
  //   category: "",
  //   feature: "",
  //   size: null,
  // });
  // console.log("productDetail",productDetail);
  const dispatch = useDispatch();
  console.log("data:", data);
  // useEffect(() => {
  //   dispatch(fetchProductAction());
  // }, [dispatch])

  const { id } = useParams();
  // console.log("id:",id);
  const newData = data.find(item => item.id === id);
  console.log("newData", newData);

  // useEffect(() => {
  //   setProductDetail(newData);
  // },[newData])
  // console.log("newData:", newData);

  return (
    <AppLayout>
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image
              width={350}
              src="https://www.tradeinn.com/h/13815/138155547/reebok-classic-tape-jacket.jpg"
            />
            {/* <Image src="https://www.tradeinn.com/h/13815/138155547/reebok-classic-tape-jacket.jpg" /> */}
          </ImgContainer>
          <InfoContainer>
            <Title>Asics Hyper MD 7 Track Shoes</Title>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
            </AddContainer>
            <Price>$ 20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>28</FilterSizeOption>
                  <FilterSizeOption>29</FilterSizeOption>
                  <FilterSizeOption>30</FilterSizeOption>
                  <FilterSizeOption>31</FilterSizeOption>
                  <FilterSizeOption>32</FilterSizeOption>
                  <FilterSizeOption>33</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <Button>ADD TO CART</Button>
          </InfoContainer>
        </Wrapper>
      </Container>
    </AppLayout>
  );
};

export default ProductDetail;

