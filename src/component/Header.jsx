import { Badge, Menu, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { React, useState } from "react";
import styled from "styled-components";
import Logos from '../assets/runnerinn.svg';

const Container = styled.div`
    height: auto;
    width: 100%;
    background: #045792;
`;

const Wrapper = styled.div`
    color: white;
    padding: 10px 20px;
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
`;


const Logo = styled.img`
    width: 200px;
    height: 50px;
`;

const MenuItem = styled.div`
    font-size: 17px;
    color: white;
    cursor: pointer;
    margin-left: 25px;
`;


const NavBar = () => {
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
                    <Logo src={Logos} />
                </Left>
                <Center>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search 1000 products' />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            <Wrapper style={{ background: '#045792' }}>
                <Button
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
                <MenuItem>Home</MenuItem>
                <MenuItem>Men's shoes</MenuItem>
                <MenuItem>Women's shoes</MenuItem>
                <MenuItem>Men's clothing</MenuItem>
                <MenuItem>Women's clothing</MenuItem>
                <MenuItem>Hot deals!</MenuItem>
            </Wrapper>
        </Container>
    );
};

export default NavBar;