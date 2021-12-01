import React from 'react'
import styled from 'styled-components'
import {device} from './GlobalStyle'

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .2s ease;

    @media ${device.mobileL} {
        height: 25vh;
        object-position: middle;
    }

    @media ${device.mobile} {
        height: 20vh;
    }
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all .3s;

`
const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 20px;
    padding: 1rem 1.5rem;
    background-color: #00000047;
    @media ${device.tablet} {
        font-size: 1.6rem;
    }
    @media ${device.mobileL} {
        font-size: 1.4rem;
    }
    @media ${device.mobile} {
        font-size: 2rem;
    }
`
const Button = styled.button`
    border: none;
    padding: 10px 15px;
    background-color: #fff;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
`
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 40vh;
    position: relative;
    cursor: pointer;

    @media ${device.tablet} {
        height: 55vw;
    }
     @media ${device.mobileL} {
        height: 30vh;
    }
     
    &:hover ${Info} {
        transform: scale(1.1);
    }
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>BUY NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
