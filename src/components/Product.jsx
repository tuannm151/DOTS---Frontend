import { FavoriteBorder, ShoppingCart} from '@material-ui/icons'
import PrettyRating from "pretty-rating-react";
import React from 'react'
import styled from 'styled-components'
import {device} from './GlobalStyle'

import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

const starIcons =  {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
};

const starColors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
};



const Image = styled.img`
    width: 70%;
    height: 60%;
    object-fit: cover;

    @media ${device.mobileL} {
        width: 90%;
        height: 45%;
    }
    @media ${device.mobileS} {
        height: 60%;
    }
`

const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.7rem;
    margin-top: 1rem;
    

    @media ${device.mobileL} {
        padding: .5rem 1rem;
        justify-items: center;
    }
    @media ${device.mobileS} {
        grid-template-columns: 1fr;
        grid-template-columns: repeat(3);
        justify-items: start;
        grid-gap: .5rem;
        padding: .5rem .5rem;
    }
`

const Title = styled.h1`
    grid-column: 1/-1;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #144646;

    @media ${device.mobileL} {
        font-size: 1.6rem;
    }
    @media ${device.mobileS} {
        margin-bottom: 0;
        font-size: 1.5rem;
    }
    
`
const Price = styled.span`
    font-weight: 500;
    /* color: #7c88d0; */
    color: #144646;

    @media ${device.mobileL} {
        font-size: 1.5rem;
    }
    @media ${device.mobileS} {
        order: 2;
    }
`
const Stars = styled.span`
    justify-self: end;
    font-size: 1.7rem;

    @media ${device.mobileL} {
        margin-right: .5rem;
        font-size: 1.3rem;
    }
    @media ${device.mobileS} {
        justify-self: start;
    }
`


const Interaction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    height: 0;
    overflow: hidden;
    transform: translateY(-2rem);
    transition: all .2s ease-in-out;

    @media ${device.tablet} {
        height: auto;
        transform: translateY(0);
        overflow: visible;
    }

    @media ${device.mobileS} {
        margin-top: .5rem;
    }
`

const Button = styled.button`
    border: none;
    margin-bottom: 1rem;
    display: flex;
    width: 80%;
    align-items: center;
    justify-content:  center;
    background-color: ${props=> props.theme === 'primary' ? '#015353' : '#d6d6d6'};
    color: ${props=> props.theme === 'primary' ? '#fff' : '#474747'};
    padding: 10px 0;
    border-radius: 0.5rem;
    cursor: pointer;
    opacity: 0.8;
    
    &:hover {
        opacity: 1;
    }
    @media ${device.mobileL} {
        width: 90%;
    }

    @media ${device.mobileS} {
        margin-bottom: .5rem;
        width: 95%;
        font-size: 1.3rem;
    }
`

const Icon = styled.span`
    margin-right: 1rem;

    @media ${device.mobileS} {
        margin-right: 2px;    
    }
`
const Text = styled.span`
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    width: 90%;
    cursor: pointer;
    transition: all .3s ease-out;
    height: 100%;
    &:hover {
        box-shadow: 0px 6px 34px -8px rgba(0,0,0,0.35);
        border-radius: 1rem;
        position: absolute;
        z-index: 2;
        background-color: #fff;
        transform: translateY(-3rem);
        height: 40rem;
        scale: 1.1;
    }
    &:hover ${Interaction} {
        /* display: flex; */
        height: auto;
        transform: translateY(0);
    }

    @media ${device.desktopM} {
        width: 100%;
    }

    @media ${device.laptop} {
       padding: 2rem .7rem;
    }

    @media ${device.mobileL} {
        padding: 1rem .5rem;
        height: 35rem;
    }

`
const Wrapper = styled.div`
    position: relative;
    height: 35rem;
    display: flex;
    justify-content:  center;
    align-items: center;

    @media ${device.tablet} {
        height: auto;
    }
`

const Product = ({item}) => {
    return (
    <Wrapper>

        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.name}</Title>
                <Price>{item.price}</Price>
                <Stars>
                    <PrettyRating value={item.stars} icons={starIcons.star} colors={starColors.star}/>
                </Stars>
            </Info>
            <Interaction>
                <Button theme="primary">
                    <Icon>
                     <ShoppingCart/>
                    </Icon>
                    <Text>Thêm vào giỏ hàng</Text>
                </Button>
           
                <Button>
                    <Icon>
                     <FavoriteBorder/>
                    </Icon>
                    <Text>Yêu thích</Text>
                </Button>
            </Interaction>

        </Container>
    </Wrapper>
    )
}

export default Product
