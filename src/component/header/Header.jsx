import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Badge } from 'antd';
import Logos from 'assets/runnerinn.svg';
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchProductAction } from "stores/slices/product.slice";
import { logoutAction } from "stores/slices/user.slice";
import styled from "styled-components";


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
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

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
                        <Search style={{ color: "gray", fontSize: 16 }} />
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
                            <Badge count={5}>
                                <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
            <Wrapper style={{ background: '#6596B6' }}>
                <Button
                    style={{ color: '#FFFFFF' }}
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    All Catergories
                </Button>
                {/* <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'bottom',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        with: '100%'
                    }}
                >
                    <MenuItem onClick={handleClose}>Adidas</MenuItem>
                    <MenuItem onClick={handleClose}>Nike</MenuItem>
                    <MenuItem onClick={handleClose}>Puma</MenuItem>
                </Menu> */}
                <Link style={{ textDecoration: "none" }} to="/"><MenuItem>Home</MenuItem></Link>
                <Link style={{ textDecoration: "none" }} to="/all-products"><MenuItem>All Product</MenuItem></Link>
                <Link style={{ textDecoration: "none" }} to="/womens-shoes"><MenuItem>Women's shoes</MenuItem></Link>
                <Link style={{ textDecoration: "none" }} to="/mens-shoes"><MenuItem>Men's shoes</MenuItem></Link>
                <Link style={{ textDecoration: "none" }} to="/mens-clothing"><MenuItem>Men's clothing</MenuItem></Link>
                <Link style={{ textDecoration: "none" }} to="/womens-clothing"><MenuItem>Women's clothing</MenuItem></Link>
            </Wrapper>
        </Container>
    );
};

export default Header;