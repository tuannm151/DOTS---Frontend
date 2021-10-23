import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import logo from '../img/logo.png'

const Container = styled.div`
  height: 6rem;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;

const InputWrapper = styled.div`
    margin-left: 2rem;
    border-radius: 5rem;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 7px 22px -7px rgba(0,0,0,0.15);
    overflow: hidden;
    font-size: 1.5rem;
    padding: .7rem 1.5rem;
`

const Icon = styled.div`
    cursor: pointer;
    opacity: 0.3;

    &:hover{
      opacity: 0.8;
    }
`
const Input = styled.input`
    border: none;
    transition: all .5s ease;
    font-size: 1.5rem;
    flex: 1;
    margin-left: 1rem;
    
    &:focus {
        outline: none;

        & + ${Icon} {
          opacity: 0.8;
        }
    }

`

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <InputWrapper>
                <Input placeholder="Search..."/>
                <Icon>
                    <Search style={{fontSize: "2rem"}}/>
                </Icon>
          </InputWrapper>
        </Left>
        <Center>  
          
          <Logo src={logo} />
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
