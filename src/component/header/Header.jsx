import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from 'antd';
import Logos from 'assets/runnerinn.svg';
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutCart } from "stores/slices/cart.slice";
import { searchProductAction } from "stores/slices/product.slice";
import { logoutAction } from "stores/slices/user.slice";
import styled from "styled-components";
import MenuBar from "./menu-bar/MenuBar";


const Container = styled.div`
    height: auto;
    width: 100%;
    background: #6596B6;
`;

const Wrapper = styled.div`
    color: #FFFFFF;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    width: 90%;
`;
const Left = styled.div`
    flex: 1;
    text-align: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 10px;
    border-radius: 10px;
    width: 90%;
    background: white;
    
`;

const Input = styled.input`
    border: none;
    width: 90%;
    outline: none;
    color: #000;
`;


const Logo = styled.img`
    width: 200px;
    height: 50px;
`;
const ButtonLogout = styled.div`
    display: none;
    border: 1px solid #FFFFFF;
    border-radius: 5px 0 5px;
`;
const MenuItem = styled.div`
    font-size: 17px;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 25px;
    &:hover ${ButtonLogout} {
        display: block;
    }
`;

const Header = () => {
    const userInfo = useSelector(state => state.users.userInfoState);
    const cartState = useSelector(state => state.cart.cartState);
    const dispatch = useDispatch();
    const user = userInfo.data;
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const onSubmit = (newFilters) => {
        if (newFilters.searchTerm === "") {
            navigate('/');
        } else {
            navigate(`/products-search/${newFilters.searchTerm}`);
            dispatch(searchProductAction(newFilters.searchTerm));
        }
    };

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 1000)
    }

    const handleLogout = () => {
        dispatch(logoutAction());
        dispatch(logOutCart())
        navigate('/login', {replace: true});
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/"><Logo src={Logos} /></Link>
                </Left>
                <Center>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input value={searchTerm} onChange={handleSearchTermChange} placeholder='Search 1000 products' />
                        <SearchOutlined style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Center>
                <Right>
                    {user ?
                        <MenuItem>
                            {user.email}
                            <ButtonLogout onClick={handleLogout}>LOG OUT</ButtonLogout>
                        </MenuItem>
                        : <>
                            <Link style={{ textDecoration: "none" }} to='/register'><MenuItem>REGISTER</MenuItem></Link>
                            <Link style={{ textDecoration: "none" }} to='/login'><MenuItem>SIGN IN</MenuItem></Link>
                        </>}
                    <Link style={{ textDecoration: "none" }} to='/cart'>
                        <MenuItem>
                            <Badge count={cartState.data.length}>
                                <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
            <MenuBar />
        </Container>
    );
};

export default Header;