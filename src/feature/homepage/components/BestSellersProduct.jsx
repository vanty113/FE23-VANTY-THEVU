import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 98%;
    margin: auto;
    height: 400px;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "-17px"};
    right: ${(props) => props.direction === "right" && "-17px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    width: 203.5%;
    display: flex;
    position: relative;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    position: relative;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    position: relative;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
`;

const InfoContainer = styled.div`
    color: #e0e3db;
    top: 90%;
    left: 45%;
    position: absolute;
    transform: translate(-42%, -52%);
`;

const Title = styled.h1`
    color: #000;
    font-size: 14px;
    font-weight: 500;
`;

const Desc = styled.p`
    font-size: 16px;
    color: #ff652e;
    font-weight: bold;
`;

const P = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 40px;
`;

const BestSellersProduct = ({ bestSellerProduct }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 1);
        }
    };

    return (<>
        <P>BEST SELLERS</P>
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined style={{ fontSize: "50px" }} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {bestSellerProduct.map((item) => (
                    <Slide key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                            <InfoContainer>
                                <Title>{item.name}</Title>
                                <Desc>{item.price}$</Desc>
                            </InfoContainer>
                        </ImgContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined style={{ fontSize: "50px" }} />
            </Arrow>
        </Container>
    </>
    );
};

export default BestSellersProduct;

