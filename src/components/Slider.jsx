
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import {device} from './GlobalStyle'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
    @media ${device.desktopM} {
        height: 95vh;
    }

    @media ${device.laptop} {
        height: 80vh;
    }

    @media ${device.tablet} {
        height: 60vh;
    }

    @media ${device.mobile} { 
        height: 45vh;
    }
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && "10px"};
    right: ${props=> props.direction === 'right' && "10px"};
    margin:  auto;
    cursor: pointer;
    border: 2px solid #242424;
    opacity: 0.2;
    z-index:2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props=> props.slideIdx * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background: ${props => props.bg ? '#'+props.bg : 'linear-gradient(166deg, rgba(213,240,255,1) 21%, rgba(255,255,255,1) 44%, rgba(207,246,253,1) 88%)'};
`
const ImgContainer = styled.div`
    flex: 6;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media ${device.desktopM} {
        object-fit: cover;
        padding: 0 0rem;
    }

    @media ${device.tablet} {
        padding: 0 0rem;
    }
    
`
const Image = styled.img`
    border-radius: 0px;
    margin-top: 0px;
    height: clamp(35rem, 60vw, 75vh);
    

    @media ${device.desktopM} {
        object-fit: cover;
        margin-top: 0;
    }

    @media ${device.tablet} {
        height: clamp(20rem, 45vw, 75vh);
    }

    @media ${device.mobileS} {
        height: 20rem;
        width: 13rem;
    }

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    padding-left: 0;
    color: #3e4d55;
    margin-bottom: 50px;
    user-select: none;

    @media ${device.tablet} {
        padding: 3rem;
        padding-left: 0;   
        margin-bottom: 3rem;
    }
    @media ${device.mobileS} {
        margin-bottom: 2rem;
    }
`
const Title = styled.h1`
    font-size: 70px;

    @media ${device.laptop} {
        font-size: 5.8rem;
    }
    @media ${device.tablet} {
        font-size: 3.5rem;
    }

     @media ${device.mobile} {
        font-size: 2.5rem;
    }

    @media ${device.mobileS} {
        font-size: 2rem;
    }
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;

    @media ${device.tablet} {
        margin: 2rem 0;
        letter-spacing: 1px;
        font-size: 1.7rem;
    }
    @media ${device.mobile} {
        font-size: 1.5rem;
        letter-spacing: 1px;
    }
    @media ${device.mobileS} {
        font-size: 1rem;
        margin: 1rem 0;
    }

`
const Button = styled.button`
    border: 2px solid black;
    padding: 10px 15px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 3px;

    @media ${device.tablet} {
        padding: .7rem 1.2rem;
        font-size: 1.5rem;
    }

    @media ${device.mobileS} {
        padding: .7rem .5rem;
        font-size: 1.2rem;
    }
`
const Slider = () => {
    const [slideIdx, setSlideIdx] = useState(0);
    const handleClick = (direction) => {
        
        if(direction==='left') {
            console.log('clicked left');
            setSlideIdx(slideIdx > 0 ? slideIdx - 1 : sliderItems.length);
        } else {
            console.log('clicked right');
            setSlideIdx(slideIdx < sliderItems.length - 1 ? slideIdx + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined style={{fontSize: 30}}/>
            </Arrow>
            <Wrapper slideIdx={slideIdx}>
            {sliderItems.map(item => (

            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                {/* đang để ẩn thông tin, chỉ để dạng ảnh */}
                {/* <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>MUA NGAY</Button>
                </InfoContainer> */}
            </Slide>
        ))}
           
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined style={{fontSize: 30}}/>
            </Arrow>
        </Container>
    )
}

export default Slider
