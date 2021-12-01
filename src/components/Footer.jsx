import { Email, Facebook, GitHub, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo2.png'
import {device} from './GlobalStyle'
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: #444444;
    padding: 2rem 0;

    @media ${device.tablet} {
        flex-flow: row wrap;
    }
`
const CardWrapper = styled.div`
    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.mobileL} {
        width:90%;
    }
    @media ${device.mobile} {
        width:100%;
    }
`
const Card = styled.div`
    @media ${device.tablet} {
    }
`
const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    padding: 3rem 3rem 0rem 3rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
        grid-row-gap: 2rem;
        width: auto;
        flex: 0.7;
        padding: 0;
    }

    @media ${device.mobileL} {
        flex: 1;
        padding: 1.5rem 1.5rem 0rem 5rem;
    }

     @media ${device.mobile} {
        flex: 1;
        grid-template-columns: 1fr;
        padding: 1.5rem 1.5rem 0rem 2.5rem;
    }
    
`
const Title = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
`
const List = styled.div`
    font-size: 1.5rem;
    @media ${device.tablet} {
    }
`
const ListItem = styled.a`
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:visited, &:active {
        color: inherit;
    }

    &:focus, &:hover {
        color: #af5454;
    }
    
`
const Icon = styled.span`
    color: white;
    background-color: #${props => props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 1rem;
`
const LogoWrapper = styled.div`
     @media ${device.tablet} {
       flex: 0.3;
        align-self: stretch;
        display: flex;
        justify-content: center;
    }
    @media ${device.mobileL} {
        display: none;
    }
`
const Logo = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-bottom: 1.5rem;
`
const Copyright = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-top: 2rem;
    @media ${device.tablet} {
        flex: 1 0 100%;
    }
`
const Footer = () => {
    return (
        <Wrapper>
        <LogoWrapper>
            <Logo src={logo}/>
        </LogoWrapper>
        
        <Container>
            <CardWrapper>
            <Card>
                <Title>GET HELP</Title>
            <List>
                <ListItem>Order Status</ListItem>
                <ListItem>Delivery</ListItem>
                <ListItem>Returns</ListItem>
                <ListItem>Payment Options</ListItem>
            </List>
            </Card>
            </CardWrapper>

            <CardWrapper>
            <Card>
                <Title>ABOUT US</Title>
            <List>
                <ListItem>News</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Investors</ListItem>
                <ListItem>Sustainability</ListItem>
            </List>
            </Card>
            </CardWrapper>
            <CardWrapper>
            <Card>
                <Title>MORE</Title>
            <List>
                <ListItem href = "https://www.google.com/maps" target="_blank">
                    FIND A STORE</ListItem>
                <ListItem>BECOME A MEMBER</ListItem>
                <ListItem>SEND US FEEDBACK</ListItem>
            </List>
            </Card>
            </CardWrapper>

            <CardWrapper>
            <Card>
                <Title>FOLLOWS US</Title>
            <List>
                <ListItem href="https://github.com/zenkjiexs" target="_blank">
                    <Icon color="515151"><GitHub/></Icon>
                        Github
                </ListItem>
                <ListItem>
                    <Icon color="515151"><Email/></Icon>
                        Gmail
                </ListItem >
                <ListItem href="https://www.facebook.com" target="_blank">
                   <Icon color="515151">
                   <Facebook /></Icon>
                        Facebook
                </ListItem>
                <ListItem href="https://twitter.com" target="_blank">
                    <Icon color="515151">
                    <Twitter /></Icon>
                        Twitter
                </ListItem >
    
                
            </List>
            </Card>
            </CardWrapper>
        </Container>
        <Copyright>©2021 All Rights Reserved</Copyright>
        </Wrapper>
    )
}

export default Footer
