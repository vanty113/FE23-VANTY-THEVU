import { LayoutRegister } from "layout/LayoutRegister";
import styled from "styled-components";
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductAction } from 'stores/slices/product.slice';

const Container = styled.div`
    width: 98%;
    margin: auto;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: calc(20% - 30px);
    border: 1px solid #ddd;
    margin: 5px;
    height: 100%;
`;

const ImgContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    position: relative;
    padding-bottom: 20px;
    padding-top: 20px;
`;

const InfoContainer = styled.div`
    color: #e0e3db;
`;

const Title = styled.h1`
    color: #000;
    font-size: 14px;
    font-weight: 500;
`;

const H2 = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

const P = styled.h1`
    font-size: 14px;
    font-weight: normal;
    color: #000;
`;

export default function MensClothing() {
    // const productState = useSelector((state) => state.product.productState);
    // const dispatch = useDispatch();

    // const page = productState.pagination.page;
    // const total = productState.pagination.total;
    // const loading = productState.loading;

    // useEffect(() => {
    //     dispatch(fetchProductAction());
    // }, []);

    // const onPaginationChange = (page, pageSize) => {
    //   dispatch(fetchProductAction(page));
    // };
    return (<LayoutRegister>
        <>
            <H2>Men´s clothing running and triathlon</H2>
            <P>Find a wide range of <b>Men´s clothing</b> products. Discover the best deals for your <b>running and triathlon</b> equipment at <b>runnerinn</b>. Fast shipping.</P>
            <Container>
                <Wrapper>
                        <ImgContainer>
                            <Image src={"https://www.tradeinn.com/h/13901/139018700/joma-running-night-half-zip-fleece.jpg"} />
                            <InfoContainer>
                                <Title>Fleeces</Title>
                            </InfoContainer>
                        </ImgContainer>
                </Wrapper>
                <Wrapper>
                        <ImgContainer>
                            <Image src={"https://www.tradeinn.com/h/13823/138230980/2xu-run-gloves.jpg"} />
                            <InfoContainer>
                                <Title>Gloves</Title>
                            </InfoContainer>
                        </ImgContainer>
                </Wrapper>
            </Container>
        </>
    </LayoutRegister>)
}