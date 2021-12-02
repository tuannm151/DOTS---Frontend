import { Badge, makeStyles } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../img/logo.png'
import {device} from '../utils/GlobalStyle'
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
const Container = styled.div`
  height: 6rem;
  display: flex;
  
  @media ${device.tablet} {
    height: auto;
    z-index: 3;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding: 1rem 1rem;
  }

   @media ${device.mobile} {
      flex-flow: row wrap;
  }
`;

const Language = styled.span`
  font-size: 1.5rem;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

const InputWrapper = styled.div`
    margin-left: 2rem;
    border-radius: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 7px 22px -7px rgba(0,0,0,0.15);
    overflow: hidden;
    padding: .7rem 1.5rem;
    width: clamp(20rem, 70%, 35rem);

    @media ${device.tablet} {
      margin-left: 0;
      padding: .4rem 1rem;
      box-shadow: 2px 7px 22px -7px rgba(0,0,0,0.30);
  }
   @media ${device.mobile} {
      margin-top: 1rem;
      padding: .6rem .8rem;
      width: 80%;
  }
  
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
    margin-left: 1rem;
    flex: 1;
   
    &:focus {
        outline: none;

        & + ${Icon} {
          opacity: 0.8;
        }
    }
     @media ${device.laptop} {
      width: 100%;
  }
    @media ${device.mobile} {
      font-size: 1.5rem;
    }

`

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  cursor: pointer;

  @media ${device.mobile} {
    height: 3.2rem;
    width: 3.2rem;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
      flex: 0.5;
  }

   @media ${device.mobile} {
    flex: 1;
  }

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

   @media ${device.mobile} {
      margin: 1rem 0;
      order: 2;
      flex: 1 0 100%;
      justify-content: center;
      
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.5rem;

  @media ${device.tablet} {
      justify-content: center;
  }

  @media ${device.mobile} {
    justify-content: space-evenly;
    gap: .5rem;
    flex: 1 0 85%;
    padding-left: 8rem;
  }
`;

const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 11
  }
}));


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const username = useSelector(state=>state.user.currentUser?.userName);
  const classes = useStyles();

   const history = useHistory();
     const routeChangeRegister = () =>{ 
     const path = `/register`;
        history.push(path);
    }
    const routeChangeLogin = () =>{ 
     const path = `/login`;
        history.push(path);
    }

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
          <Link to={`/`}>
          <Logo src={logo} />
          </Link>
        </Center>
        <Right>
          {username ? <MenuItem>{username}</MenuItem>: ""}

          {!username && <MenuItem onClick={routeChangeRegister}>REGISTER</MenuItem>}
          {!username && <MenuItem onClick={routeChangeLogin}>LOGIN</MenuItem>}
          
          <Link to="/cart">
          <MenuItem >
            <Badge badgeContent={quantity} color="primary" classes={{ badge: classes.badge }}>
              <ShoppingCartOutlined style={{fontSize: 20}}/>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
