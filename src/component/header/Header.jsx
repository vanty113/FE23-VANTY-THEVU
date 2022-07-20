import { Badge, Menu, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { React, useState } from "react";
import styled from "styled-components";
import Logos from 'assets/runnerinn.svg';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "stores/slices/user.slice";


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
`;


const Logo = styled.img`
    width: 200px;
    height: 50px;
`;

const MenuItem = styled.div`
    font-size: 17px;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 25px;
`;


const Header = () => {
    const userInfo = useSelector(state => state.users.userInfoState);
    const dispatch = useDispatch();
    const user = userInfo.data;

    const [showLogout, setShowLogout] = useState(false);
    const onShowLogout = () => {
        setShowLogout(!showLogout)
    }
    const handleLogout = () => {
        dispatch(logoutAction());
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/"><Logo src={Logos} /></Link>
                </Left>
                <Center>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search 1000 products' />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Center>
                <Right>
                    {user ? <MenuItem onClick={onShowLogout}>{user.email} {showLogout && <Button style={{ color: '#FFFFFF', border: '2px solid #1890ff', background: '#1890ff' }} onClick={handleLogout}>LOG OUT</Button>}</MenuItem>
                        : <>
                            <Link style={{ textDecoration: "none" }} to='/register'><MenuItem>REGISTER</MenuItem></Link>
                            <Link style={{ textDecoration: "none" }} to='/login'><MenuItem>SIGN IN</MenuItem></Link>
                        </>}

                    <Link style={{ textDecoration: "none" }} to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={2} color="primary">
                                <ShoppingCartOutlined style={{ fontSize: "35px" }} />
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
                    All CATERGORIES
                </Button>
                <Menu
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
                </Menu>
                <Link style={{ textDecoration: "none" }} to="/"><MenuItem>Home</MenuItem></Link>
                <MenuItem>Men's shoes</MenuItem>
                <MenuItem>Women's shoes</MenuItem>
                <Link style={{ textDecoration: "none" }} to="/mens-clothing"><MenuItem>Men's clothing</MenuItem></Link>
                <MenuItem>Women's clothing</MenuItem>
                <MenuItem>Hot deals!</MenuItem>
            </Wrapper>
        </Container>
    );
};

export default Header;