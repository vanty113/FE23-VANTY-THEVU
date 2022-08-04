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
  cursor: pointer;
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
  const [productDetail, setProductDetail] = useState({
    name: "",
    price: null,
    img: "",
    category: "",
    feature: "",
    size: null,
  });
  const [sizeOption, setSizeOption] = useState(28);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch])

  useEffect(() => {
    const dataDetail = data.find((item)=> item.id == id);
    setProductDetail(dataDetail)
  }, [data])

   const handleSizeChange = (e) => {
    setSizeOption(e.target.value)
   }

   const handleAddAmount = () => {
    if(amount < 100) {
      setAmount(amount + 1);
    }
   }
   const handleRemoveAmount = () => {
    if(amount > 1) {
      setAmount(amount - 1);
    }
   }
  return (
    <AppLayout>
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image
              width={350}
              src={productDetail?.img}
            />
          </ImgContainer>
          <InfoContainer>
            <Title>{productDetail?.name}</Title>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={handleRemoveAmount} />
                <Amount>{amount}</Amount>
                <Add onClick={handleAddAmount} />
              </AmountContainer>
            </AddContainer>
            <Price>{productDetail?.price}$</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={handleSizeChange} value={sizeOption}>
                  <FilterSizeOption value={28}>28</FilterSizeOption>
                  <FilterSizeOption  value={29}>29</FilterSizeOption>
                  <FilterSizeOption value={30}>30</FilterSizeOption>
                  <FilterSizeOption value={31}>31</FilterSizeOption>
                  <FilterSizeOption value={32} >32</FilterSizeOption>
                  <FilterSizeOption value={33}>33</FilterSizeOption>
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

