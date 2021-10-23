import { Email, Facebook, GitHub, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #444444;
    padding: 2rem 0;
`
const Card = styled.div``

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 3rem 0;
`

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
`
const List = styled.div`
    font-size: 1.5rem;
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
const Logo = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-bottom: 1.5rem;
`

const Copyright = styled.p`
    font-size: 1.5rem;
`

const Footer = () => {
    return (
        <Wrapper>
        <Logo src={logo}/>
        <Container>
            <Card>
                <Title>Chăm sóc khách hàng</Title>
            <List>
                <ListItem>Trung tâm trợ giúp</ListItem>
                <ListItem>Hướng dẫn mua hàng</ListItem>
                <ListItem>Trả hàng, hoàn tiền</ListItem>
                <ListItem>Chính sách bảo hành</ListItem>
            </List>
            </Card>
            <Card>
                <Title>Về chúng tôi</Title>
            <List>
                <ListItem>Giới thiệu</ListItem>
                <ListItem>Tuyển dụng</ListItem>
                <ListItem>Điều khoản dịch vụ</ListItem>
                <ListItem>Liên hệ truyền thông</ListItem>
            </List>
            </Card>
            <Card>
                <Title>Về vận chuyển</Title>
            <List>
                <ListItem>Phương thức vận chuyển</ListItem>
                <ListItem>Chi phí vận chuyển</ListItem>
                <ListItem>Đăng kí dịch vụ</ListItem>
            </List>
            </Card>
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
        </Container>
        <Copyright>© 2021 All Rights Reserved</Copyright>
        </Wrapper>
    )
}

export default Footer
