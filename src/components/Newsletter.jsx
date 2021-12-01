import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {device} from './GlobalStyle'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 5rem 0;
    
    @media ${device.mobileL} {
        padding: 2.5rem 0;
    }
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

    @media ${device.desktopS} {
        width: 80%;
        height: 400px;
    }
    @media ${device.tablet} {
        width: 85%;
        height: 300px;
    }
    @media ${device.mobileL} {
        width: 90%;
        height: 250px;
    }

    @media ${device.mobile} {
        width: 85%;
        height: 300px;
    }
    
`
const Image = styled.img`
   width: max(270px, 40%);
   object-fit: cover;

    @media ${device.desktopS} {
        width: max(180px, 30%);
    }

    @media ${device.mobileL} {
        display: none;
    }
`
const Form = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 7rem 0 6rem;

    @media ${device.desktopS} {
        padding: 0 4rem 0 6rem;
        align-items: center;
        text-align: center;
    }
    @media ${device.laptop} {
        align-items: start;
        text-align: start;
    }
    @media ${device.tablet} {
        padding: 0 3rem 0 3rem;
        align-items: center;
        text-align: center;
    }
    @media ${device.mobileL} {
        padding: 0 2rem 0 2rem;
    }
    
`
const Heading = styled.h1`
    font-size: 5rem;

     @media ${device.tablet} {
        font-size: 4rem;
    }
    @media ${device.mobileL} {
        font-size: 3rem;
    }

    @media ${device.mobileS} {
        font-size: 2.7rem;
    }
`
const Desc = styled.p`
    font-size: 1.8rem;
    margin-top: 6rem;

    @media ${device.tablet} {
        margin-top: 3rem;
        font-size: 1.7rem;
    }
`
const InputWrapper = styled.div`
    margin-top: 6rem;
    border-right: none;
    border-radius: 5rem;
    width: clamp(30rem, 90%, 50rem);
    display: flex;
    box-shadow: 2px 7px 22px -7px rgba(0,0,0,0.15);
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    @media ${device.desktopS} {
        margin: 5rem 0 0 0;
    }
    @media ${device.tablet} {
        width: 90%;
    }
    

`
const Input = styled.input`
    border: none;
    transition: all .5s ease;
    font-size: 1.7rem;
    padding: 1.5rem 3rem;
    flex: 1;
    &:focus {
        outline: none;
    }
    @media ${device.desktopS} {
        padding: 1rem 2rem;
    }
    @media ${device.tablet} {
        width: 90%;
        padding: 1rem 2rem;
        font-size: 1.5rem;
    }
    @media ${device.mobileS} {
        font-size: 1.3rem;
    }
    
`
const Icon = styled.div`
    border-radius: 0% 49% 47% 52% / 0% 49% 51% 60%   ;
    background-color: teal;
    height: 4.5rem;
    width: 4.5rem;
    color: #fff;
    cursor: pointer;
    z-index: 3;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 1;
    }
    @media ${device.tablet} {
        height: 4rem;
        width: 4rem;
    }
    @media ${device.mobileS} {
        height: 3rem;
        width: 3rem;
    }
`
const Newsletter = () => {
    return (
        <Wrapper>
        <Container>
            <Image src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"/>
            <Form>
                <Heading>STAY TUNED</Heading>
                <Desc>Sign in and be the first in the know about new arrivals, promotions, instore evens and more!</Desc>  
                <InputWrapper>
                <Input placeholder="Type your email..."/>
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
