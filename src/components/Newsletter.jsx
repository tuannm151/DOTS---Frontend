import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4fbff;
    padding: 5rem 0;
`

const Container = styled.div`
    width: 60%;
    display: flex;
    height: 500px;
    background-color: #fff;
    border-radius: 3rem;
    overflow: hidden;
    color: #020f4a;
    box-shadow: 2px 15px 22px -7px rgba(0,0,0,0.15);
`
const Image = styled.img`
   width: max(270px, 40%);
   object-fit: cover;
`

const Form = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 7rem 0 6rem;
`

const Heading = styled.h1`
    font-size: 5rem;
`

const Desc = styled.p`
    font-size: 2rem;
    margin-top: 6rem;
`
const InputWrapper = styled.div`
    margin: 6rem auto 0 auto;
    border-right: none;
    border-radius: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 7px 22px -7px rgba(0,0,0,0.15);
    overflow: hidden;
`
const Input = styled.input`
    border: none;
    transition: all .5s ease;
    font-size: 1.7rem;
    padding: 1.5rem 3rem;
    flex: 1;
    ::placeholder {

    }
    &:focus {
        outline: none;
    }
`
const Icon = styled.div`
    border-radius: 0% 49% 47% 52% / 0% 49% 51% 60%   ;
    background-color: teal;
    padding: 1.5rem 1.7rem;
    color: #fff;
    cursor: pointer;
    z-index: 3;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`

const Newsletter = () => {
    return (
        <Wrapper>
        <Container>
            <Image src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"/>
            <Form>
                <Heading>STAY TUNED</Heading>
                <Desc>Nhận email về các thông báo ưu đãi mới nhất đến từ chúng tôi!</Desc>  
                <InputWrapper>
                <Input placeholder="Your email. Eg: example@gmail.com"/>
                <Icon>
                    <Send/>
                </Icon>
                </InputWrapper>
            </Form>         
        </Container>
        </Wrapper>
    )
}

export default Newsletter
