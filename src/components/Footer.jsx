import { Email, Facebook, GitHub, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import {device} from '../utils/GlobalStyle'
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
    font-size: 1.5rem;
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
    width: 2rem;
    height: 2rem;
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
    width: 7rem;
    height: 7rem;
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
                <Title>Chăm sóc khách hàng</Title>
            <List>
                <ListItem>Trung tâm trợ giúp</ListItem>
                <ListItem>Hướng dẫn mua hàng</ListItem>
                <ListItem>Trả hàng, hoàn tiền</ListItem>
                <ListItem>Chính sách bảo hành</ListItem>
            </List>
            </Card>
            </CardWrapper>

            <CardWrapper>
            <Card>
                <Title>Về chúng tôi</Title>
            <List>
                <ListItem>Điều khoản dịch vụ</ListItem>
                <ListItem>Liên hệ truyền thông</ListItem>
                <ListItem>Giới thiệu</ListItem>
                <ListItem>Tuyển dụng</ListItem>
            </List>
            </Card>
            </CardWrapper>
            <CardWrapper>
            <Card>
                <Title>Về vận chuyển</Title>
            <List>
                <ListItem>Phương thức vận chuyển</ListItem>
                <ListItem>Chi phí vận chuyển</ListItem>
                <ListItem>Đăng kí dịch vụ</ListItem>
            </List>
            </Card>
            </CardWrapper>

            <CardWrapper>
            <Card>
                <Title>Theo dõi chúng tôi trên</Title>
            <List>
                <ListItem href="https://github.com/zenkjiexs" target="_blank">
                    <Icon color="333"><GitHub/></Icon>
                        
                        Github
                </ListItem>
                <ListItem>
                        <Icon color="bd2c00"><Email/></Icon>
                        tuanxsokoh@gmail.com
                </ListItem>
                <ListItem>
                   <Icon color="4267B2">
                   <Facebook /></Icon>
                        
                        Facebook
                  
                </ListItem>
                <ListItem>
                    <Icon color="1DA1F2">
                    <Twitter /></Icon>
                        
                        Twitter
                
                </ListItem >
    
                
            </List>
            </Card>
            </CardWrapper>
        </Container>
        <Copyright>© 2021 All Rights Reserved</Copyright>
        </Wrapper>
    )
}

export default Footer
