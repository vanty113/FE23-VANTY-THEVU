import { LoadingOutlined } from "@ant-design/icons";
import { Pagination } from 'antd';
import { MENSCLOTHING_FEATURE_DATA } from "constant/ProductFeatureData";
import { LayoutRegister } from "layout/LayoutRegister";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from "react-router-dom";
import { fetchProductAction, PRODUCT_LIMIT } from 'stores/slices/product.slice';
import styled from "styled-components";
import BoxProduct from "../product-list/BoxProduct";


const Container1 = styled.div`
    width: 98%;
    margin: auto;
    display: flex;
    justify-content: center;
`;
const Container2 = styled.div`
    width: 98%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    const productState = useSelector((state) => state.product.productState);
    const mensClothing = productState.data.filter(item => item.category === "mensclothing");
    const [productData, setProductData] = useState(mensClothing);
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    let feature = searchParams.get('feature');
    // console.log("feature: ", feature);
    const page = productState.pagination.page ?? 1;
    const total = productState.pagination.total ?? 20;
    const loading = productState.loading;
    console.log(page);
    console.log(total);
    useEffect(() => {
        dispatch(fetchProductAction(2));
    }, [dispatch]);

    useEffect(() => {
        switch (feature) {
            case "fleeces":
                const fleecesMensClothing = productState.data.filter(item => item.feature === feature);
                setProductData(fleecesMensClothing);
                break;

            case "gloves":
                const glovesMensClothing = productState.data.filter(item => item.feature === "gloves");
                setProductData(glovesMensClothing);
                break;
            default:
                const mensClothing = productState.data.filter(item => item.category === "mensclothing");
                setProductData(mensClothing)
                break;
        }
    }, [feature])

    const onPaginationChange = (page) => {
        dispatch(fetchProductAction(page));
    };
    return (<LayoutRegister>
        <>
            <H2>Men´s clothing running and triathlon</H2>
            <P>Find a wide range of <b>Men´s clothing</b> products. Discover the best deals for your <b>running and triathlon</b> equipment at <b>runnerinn</b>. Fast shipping.</P>
            <Container1>
                {MENSCLOTHING_FEATURE_DATA.map((item, index) => {
                    return (<Wrapper key={index}>
                        <Link style={{ textDecoration: 'none' }} to={item.path}>
                            <ImgContainer>
                                <Image src={item.img} />
                                <InfoContainer>
                                    <Title>{item.title}</Title>
                                </InfoContainer>
                            </ImgContainer>
                        </Link>
                    </Wrapper>)
                })}
            </Container1>
            {loading && (
                <div>
                    <LoadingOutlined />
                </div>
            )}
            <Container2>
                {productState.data.map((item) => {
                    return (<BoxProduct key={item.id} data={item} />)
                    // <Link key={item.id} style={{ textDecoration: 'none' }} to={"/"}>

                    {/* </Link>) */ }
                })}
            </Container2>

        </>
        <Pagination
            onChange={onPaginationChange}
            pageSize={20}
            current={page}
            total={total}
        />
    </LayoutRegister>)
}