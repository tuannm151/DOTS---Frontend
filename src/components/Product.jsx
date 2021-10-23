import { FavoriteBorder, ShoppingCart} from '@material-ui/icons'
import PrettyRating from "pretty-rating-react";
import React from 'react'
import styled from 'styled-components'

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
    height: 75%;
    object-fit: cover;
`

const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.7rem;
    margin-top: 1rem;
`

const Title = styled.h1`
    grid-column: 1/-1;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #144646;
`
const Price = styled.span`
    font-weight: 500;
    /* color: #7c88d0; */
    color: #144646;
    font-size: 1.8rem;
`
const Stars = styled.span`
    justify-self: end;
`


const Interaction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    display: none;
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
`

const Icon = styled.span`
    margin-right: 1rem;
`
const Text = styled.span`
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    padding: 1.5rem;
    width: 100%;
    cursor: pointer;
    transition: all .2s ease;
    height: 45rem;

    &:hover {
        box-shadow: 0px 6px 34px -8px rgba(0,0,0,0.35);
        border-radius: 5px;
        position: absolute;
        z-index: 2;
        background-color: #fff;
        transform: translateY(-3rem);
        scale: 1.1;
    }
    &:hover ${Interaction} {
        display: flex;
    }
`
const Wrapper = styled.div`
    position: relative;
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
