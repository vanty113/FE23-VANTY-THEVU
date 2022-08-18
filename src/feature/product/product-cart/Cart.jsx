import { Modal } from "antd";
import { AppLayout } from "layout/AppLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutCart } from "stores/slices/cart.slice";
import styled from "styled-components";
import './cart.scss';
import { CartItem } from "./CartItem";

const Container = styled.div`
    padding: 20px 0;
    width: 90%;
    margin: auto;
    margin-top: 115px;
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
    border-radius: 5px 0 0 10px;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const ProductTitle = styled.div`
    width: 100%;
    background-color: #E8E8E8;
    line-height: 40px;
    font-size: 16px;
    color: #000000 !important;
    font-weight: 600;
    display: flex;
    align-content: center;
`;
const InfoProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Summary = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 100%;
    width: 40%;
    margin-top: 20px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    background-color: #E8E8E8;
`;

const SummaryItem = styled.div`
    color: #000000;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
    font-size: 16px;
`;

const SummaryItemPrice = styled.span`
    font-size: 19px;
    font-weight: 800;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #FF652E;
    color: white;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 2px;
`;

const EmptyBasket = styled.div`
border-bottom: solid 1px #D2D2D2;
width: 100%;
font-size: 14px;
text-align: left;
color: #E83D3D;
margin-top: 20px;
padding-bottom: 20px;
`;
const Cart = () => {
    const cartState = useSelector(state => state.cart.cartState);
    const userInfo = useSelector(state => state.users.userInfoState);
    const dispatch = useDispatch();

    const user = userInfo.data;
    const data = cartState.data;
    const productCart = data.filter(item => item.useremail === user.email);
    // console.log("productCart: ", productCart);

    const [showOrderModal, setShowOrderModal] = useState(false);
    const { register, handleSubmit } = useForm();

    const shipment = 10;
    const productsPrice = data.reduce((prev, current) => prev + (current.quantity * current.price), 0);
    const total = productsPrice + shipment;

    const onSubmit = (info) => {
        console.log("infoCustomer:", info);
        dispatch(logOutCart());
    }
    return (
        <AppLayout>
            <Container>
                <Title>SHOPPING BASKET</Title>
                <Top>
                    <Link to={'/'}><TopButton>CONTINUE SHOPPING</TopButton></Link>
                </Top>
                <Bottom>
                    <ProductTitle>
                        <div style={{ flex: "36%" }}>Product(s)</div>
                        <div style={{ flex: "16%" }}>Price/Unit</div>
                        <div style={{ flex: "16%" }}>Quantity</div>
                        <div style={{ flex: "16%" }}>Amount of money</div>
                        <div style={{ flex: "16%" }}>Operation</div>
                    </ProductTitle>
                    {productCart.length ?
                        <InfoProduct>
                            {productCart.map(item => (
                                <CartItem key={item.id} data={item} />
                            ))}
                        </InfoProduct>
                        : <EmptyBasket>There´s nothing in your basket right now.</EmptyBasket>
                    }
                    <Summary>
                        <SummaryItem>
                            <SummaryItemText>PRODUCT(S) PRICE</SummaryItemText>
                            <SummaryItemText>$ {productsPrice}</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>SHIPMENT</SummaryItemText>
                            {productsPrice ? <SummaryItemText>$ {shipment}</SummaryItemText> : <SummaryItemText>$ 0</SummaryItemText>}
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemPrice>TOTAL</SummaryItemPrice>
                            {productsPrice ? <SummaryItemPrice>$ {total}</SummaryItemPrice> : <SummaryItemPrice>$ 0</SummaryItemPrice>}
                        </SummaryItem>
                        <Button onClick={() => setShowOrderModal(true)}>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
                {data.length ? <Modal
                    title="To order, please add a delivery address."
                    visible={showOrderModal}
                    onOk={handleSubmit(onSubmit)}
                    onCancel={() => setShowOrderModal(false)}
                    okText={"Submit"}
                >
                    <form>
                        <input {...register("customer")} placeholder="Please enter your full name." />
                        <input {...register("phone")} type="number" placeholder="Please enter your phone." />
                        <div className="width-input"><input {...register("address")} type="text" placeholder="Please enter your address." /></div>
                        <textarea rows="4" cols="68" {...register("addressDetail")} placeholder="Please enter your address detail.">
                        </textarea>
                    </form>
                </Modal>
                    : <Modal
                        title="Please choose which product to buy."
                        visible={showOrderModal}
                        onOk={() => setShowOrderModal(false)}
                        onCancel={() => setShowOrderModal(false)}
                        okText={"OK"}
                    >
                        <SummaryItemText>
                            You haven't selected any products to buy yet.
                        </SummaryItemText>
                    </Modal>}
            </Container>
        </AppLayout>
    );
};

export default Cart;