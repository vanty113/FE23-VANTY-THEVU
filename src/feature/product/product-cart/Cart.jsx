import { Add, Remove } from "@material-ui/icons";
import { AppLayout } from "layout/AppLayout";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 600;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
            props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

// const ProductColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: ${(props) => props.color};
// `;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;


const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
    return (
        <AppLayout>
            <Container>
                <Wrapper>
                    <Title>SHOPPING BASKET</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src="https://www.tradeinn.com/h/13789/137892104/adidas-terrex-speed-flow-trail-running-shoes.jpg" />
                                    <Details>
                                        <ProductName>
                                            <b>Product:</b> Adidas Terrex Speed Trail Running Shoes
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> 88
                                        </ProductId>
                                        <ProductSize>
                                            <b>Size:</b> 36
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>1</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>44$</ProductPrice>
                                </PriceDetail>
                            </Product>
                            <Hr />
                            <Product>
                                <ProductDetail>
                                    <Image src="https://www.tradeinn.com/h/13842/138423817/adidas-60s-2.0-trainers.jpg" />
                                    <Details>
                                        <ProductName>
                                            <b>Product:</b> Adidas 60S 2.0 Trainers
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> 82
                                        </ProductId>
                                        <ProductSize>
                                            <b>Size:</b> 29
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>1</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>66$</ProductPrice>
                                </PriceDetail>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryItem>
                                <SummaryItemText>PRODUCT(S) PRICE</SummaryItemText>
                                <SummaryItemPrice>$ 80</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>TOTAL</SummaryItemText>
                                <SummaryItemPrice>$ 80</SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHECKOUT NOW</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        </AppLayout>
    );
};

export default Cart;
