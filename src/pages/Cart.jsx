import { Add, Close, Delete, DeleteForeverOutlined, DeleteOutlined, Edit, EmailOutlined, HighlightOffOutlined, LocationOnOutlined, Payment, PersonOutline, PhoneOutlined, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {device} from '../components/GlobalStyle'

const Container = styled.div`
    
`

const Section = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 5rem 5rem;
    min-height: 100vh;
    color: #212727;

    @media ${device.desktopS} {
        padding: 3rem 3rem;
    } 

    @media ${device.mobile} {
        padding: 1.5rem 2.5rem;
    }
`
const CartContainer = styled.div`
    width: 100%;
    display: flex;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

const ItemsContainer = styled.div`
    flex: 1.8;
    margin-right: 5rem;

    @media ${device.desktopS} {
        margin-right: 2.5rem;
    } 
    @media ${device.laptop} {
        flex: 1.4;
    }
    @media ${device.mobile} {
        margin-right: 0;
    }

`

const CheckoutContainer = styled.div`
    flex: 1;
    border-radius: 2rem;
`

const CartTitle = styled.h1`
    font-weight: 500;
    font-size: 2.5rem;
    color: #7c7c7c;
    margin-bottom: 2rem;
`

const CartItems = styled.div`
    @media ${device.mobile} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
    }

    @media ${device.mobileSS} {
        display: grid;
        grid-template-columns: 1fr;
    }
`

const CartItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
    margin-bottom: 3rem;
    background-color: transparent;
    border-radius: 2rem;
    box-shadow: 0px 2px 18px -9px rgba(0,0,0,0.25);

     @media ${device.desktopS} {
       padding: 1rem 1.5rem;
    }

    @media ${device.laptopS} {
        position: relative;
    }
    @media ${device.tablet} {
        margin-bottom: 2rem;
    }
    @media ${device.mobile} {
        flex-flow: row wrap;
        padding: 1rem 0;
        justify-content: space-evenly;
    }
`

const Image = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 1.5rem;

    @media ${device.laptop} {
        width: 10rem;
        height: 10rem;
    }
    @media ${device.mobile} {
         width: 10rem;
        height: 9rem;
        margin-bottom: 1rem;
    }
`

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 2rem;

    @media ${device.mobile} {
        margin-right: 0;
        margin-left: 0;
    }
`

const ItemTitle = styled.h2`
    font-weight: 600;
    font-size: 1.8rem;

    @media ${device.laptop} {
       font-size: 1.6rem;
    }
`

const Info = styled.div`
    font-size: 1.5rem;
    margin-top: .7rem;
    display: flex;
    align-items: center;
`
    
const InfoTitle = styled.span`
    font-weight: 600;
    color: #aaaaaa;
    margin-right: .5rem;
`

const Color = styled.span`
    outline: 2px solid #2488ca;
    outline-offset: 1px;
    height: 1.7rem;
    width: 1.7rem;
    border-radius: 50%;
    display: inline-block;
    margin-left: .5rem;
    background-color: ${props => props.color};
    margin-right: .7rem;
`

const InfoText = styled.span`
    font-weight: 600;
`

const Price = styled.span`
    font-size: 2rem;
    font-weight: 500;

    @media ${device.laptop} {
       font-weight: 400;
    }

    @media ${device.mobileL} {
        font-size: 1.8rem;
    }
    @media ${device.mobile} {
        font-size: 1.6rem;
    }

`
const Right = styled.div`
    flex: 0.8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;

    @media ${device.desktopS} {
        flex: 0.9;
        margin-right: 0;
    } 

     @media ${device.laptop} {
        display: grid;
        grid-template-columns: 1fr 5rem;
        justify-items: center;
        grid-row-gap: 1rem;
        margin-right: 0;
    } 

    @media ${device.laptopS} {
        grid-template-columns: 1fr;
    }
    @media ${device.mobile} {
        flex: 1 0 100%;
        margin-top: 1rem;
        grid-row-gap: 0;
    }

    @media ${device.mobileSS} {
        grid-template-columns: 1fr 1fr;
        margin-top: 0;
    }
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.8rem;  

    @media ${device.laptop} {
        order: 2;
    } 

     @media ${device.mobile} {
        font-size: 1.6rem;
    }
`

const Amount = styled.span`
    margin: 0 .5rem 0 .5rem;
    display: inline-block;
    padding: .3rem 1rem;

    @media ${device.laptopS} {
        margin: 0;
        padding: .3rem .5rem;
    }

    
`
const Btn = styled.button`
    border: none;
    padding: 1rem;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s ease;
    background-color: #fff;
    
     &:hover{
        background-color: #ea4c89;
        color: #fff;
        box-shadow: -2px 2px 16px -3px rgba(234, 76, 137, 1);
    }
    @media ${device.mobile} {
        padding: ${props => props.type='amount' ? '.5': ''}rem;
    }
`
const BtnDelete = styled.button`
    border: none;
    padding: .7rem;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s ease;
    color: #8d8d8d;
    box-shadow: -2px 2px 13px -7px rgba(0,0,0,0.35);

    &:hover{
        background-color: #ea4c89;
        color: #fff;
        box-shadow: -2px 2px 16px -3px rgba(234, 76, 137, 1);
    }

    @media ${device.laptop} {
        grid-row: 1 /3;
        grid-column: 2/3;
    }

    @media ${device.laptopS} {
        box-shadow: none;
        position: absolute;
        right: -1.5rem;
        top: -1rem;
        background-color: #e9e9e9;
        padding: .7rem;
        color: #a1a1a1;
    }
    @media ${device.mobileL} {
         box-shadow: -2px 0px 13px -7px rgba(0,0,0,0.25);
    } 
`

const EndLine = styled.span`
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ebebeb;
    margin: 2.5rem 0;

    @media ${device.laptopS} {
        margin: 1.5rem 0;
    }
`

    
const CheckoutCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    padding: 2rem 3rem;
    margin-bottom: 1.5rem;
    border-radius: 2rem;

    @media ${device.laptop} {
       padding: 2rem 2.5rem;
    } 
`

const CheckoutHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CheckoutTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    
`

const CheckoutInfo = styled.div`
    display: flex;
    margin-top: 1.5rem;
    align-items: center;
`

const CheckoutInfoText = styled.span`
    font-size: 1.7rem;
    margin-left: 1rem;
`



const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    font-size: ${props=>props.type === 'total' ? '2' : '1.7'}rem;
    font-weight: ${props=>props.type === 'total' ? '600' : '500'};

    @media ${device.laptop} {
        font-size: ${props=>props.type === 'total' ? '1.8' : '1.7'}rem;
    }

`
const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;

    & ${SummaryItem}:nth-child(3) {
        margin-bottom: 0;
    }
`

const SummaryItemText = styled.span`
`
const SummaryPrice = styled.span``

const OrderBtn = styled.button`
    /* margin-top: 2rem; */
    border: none;
    background-color: #fed96a;
    font-size: 2rem;
    padding: 1rem 0;
    color: #000000;
    width: 70%;
    border-radius: 1rem;
    align-self: center;
    cursor: pointer;
    font-weight: 600;
    @media ${device.desktopS} {
       font-size: 1.8rem;
    } 
    @media ${device.laptop} {
       font-size: 1.6rem;
       width: min(36rem, 100%);
    } 
    
`
const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Section>      
                <CartContainer>
               <ItemsContainer>
                   <CartTitle>Giỏ hàng</CartTitle>
                <CartItems>
                    <CartItem>
                        <Image src="https://product.hstatic.net/1000230642/product/dsc_0009_8d59ab2d1c20497cb3c51e0321f47a0b_1024x1024.jpg"/>
                        <ItemInfo>
                            <ItemTitle>Nike Air Pro Max</ItemTitle>
                            <Info>
                                <InfoTitle>Color:</InfoTitle>
                                <Color color="white"></Color>
                                <InfoText>(white)</InfoText>
                            </Info>
                            <Info>
                                <InfoTitle>Size:</InfoTitle>
                                <InfoText>42</InfoText>
                            </Info>
                        </ItemInfo> 
                        <Right>
                            <AmountContainer>
                                <Btn type='amount'>
                                    <Remove style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                                <Amount>1</Amount>
                                <Btn type='amount'>
                                    <Add style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                            </AmountContainer>
                            <Price>3.250.000₫</Price>
                            <BtnDelete>
                                <Close style={{fontSize:'2.2rem'}}/>
                            </BtnDelete>
                        </Right>
                    </CartItem>
                     <CartItem>
                        <Image src="https://healthvietnam.vn/photos/shares/bietduoc3/levo%20Danapha%20HVN.jpg"/>
                        <ItemInfo>
                            <ItemTitle>Thuốc an thần</ItemTitle>
                            <Info>
                                <InfoTitle>Color:</InfoTitle>
                                <Color color="white"></Color>
                                <InfoText>(white)</InfoText>
                                
                            </Info>
                            <Info>
                                <InfoTitle>Size:</InfoTitle>
                                <InfoText>50 viên</InfoText>
                            </Info>
                        </ItemInfo> 
                        <Right>
                            <AmountContainer>
                                <Btn type='amount'>
                                    <Remove style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                                <Amount>99</Amount>
                                <Btn type='amount'>
                                    <Add style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                            </AmountContainer>
                            <Price>0₫</Price>
                            <BtnDelete>
                                <Close style={{fontSize:'2.2rem' }}/>
                            </BtnDelete>
                        </Right>
                    </CartItem>

                     <CartItem>
                        <Image src="https://healthvietnam.vn/photos/shares/bietduoc3/levo%20Danapha%20HVN.jpg"/>
                        <ItemInfo>
                            <ItemTitle>Thuốc an thần</ItemTitle>
                            <Info>
                                <InfoTitle>Color:</InfoTitle>
                                <Color color="white"></Color>
                                <InfoText>(white)</InfoText>
                                
                            </Info>
                            <Info>
                                <InfoTitle>Size:</InfoTitle>
                                <InfoText>50 viên</InfoText>
                            </Info>
                        </ItemInfo> 
                        <Right>
                            <AmountContainer>
                                <Btn type='amount'>
                                    <Remove style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                                <Amount>99</Amount>
                                <Btn type='amount'>
                                    <Add style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                            </AmountContainer>
                            <Price>0₫</Price>
                            <BtnDelete>
                                <Close style={{fontSize:'2.2rem' }}/>
                            </BtnDelete>
                        </Right>
                    </CartItem>
                </CartItems>
                </ItemsContainer> 
                <CheckoutContainer>
                    <CheckoutCard>
                        <CheckoutHeader>
                            <CheckoutTitle>Account</CheckoutTitle>
                            <Btn><Edit style={{fontSize:'1.5rem' }}/></Btn>
                        </CheckoutHeader>
                        <CheckoutInfo>
                            <EmailOutlined style={{fontSize:'2rem', color:'#a693d2'}}/>
                            <CheckoutInfoText>
                                tuanxsokoh@gmail.com
                            </CheckoutInfoText>
                        </CheckoutInfo>
                    </CheckoutCard>

                    

                    <CheckoutCard>
                        <CheckoutHeader>
                            <CheckoutTitle>Shipping</CheckoutTitle>
                            <Btn><Edit style={{fontSize:'1.5rem' }}/></Btn>
                        </CheckoutHeader>
                        <CheckoutInfo>
                            <PersonOutline style={{fontSize:'2rem', color:'#a693d2'}}/>
                            <CheckoutInfoText>
                                Nguyễn Minh Tuân
                            </CheckoutInfoText>
                        </CheckoutInfo>
                        <CheckoutInfo>
                            <LocationOnOutlined style={{fontSize:'2rem', color:'#a693d2'}}/>
                            <CheckoutInfoText>
                                1337 Wall Street, New York City, Đông Triều, Quảng Ninh
                            </CheckoutInfoText>
                        </CheckoutInfo>
                        <CheckoutInfo>
                            <PhoneOutlined style={{fontSize:'2rem', color:'#a693d2'}}/>
                            <CheckoutInfoText>
                                09432464424
                            </CheckoutInfoText>
                        </CheckoutInfo>
                    </CheckoutCard>

                    
                    <CheckoutCard>
                        <CheckoutHeader>
                            <CheckoutTitle>Thanh toán</CheckoutTitle>
                            <Btn><Edit style={{fontSize:'1.5rem' }}/></Btn>
                        </CheckoutHeader>
                        <CheckoutInfo>
                            <Payment style={{fontSize:'2rem', color:'#a693d2'}}/>
                            <CheckoutInfoText>
                                Thanh toán với ví Momo
                            </CheckoutInfoText>
                        </CheckoutInfo>
                        <EndLine></EndLine>

                        <SummaryContainer>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryPrice>3.250.000₫</SummaryPrice>
                                </SummaryItem>

                                <SummaryItem>
                                    <SummaryItemText>Shipping</SummaryItemText>
                                    <SummaryPrice>Free</SummaryPrice>
                                </SummaryItem>
                                <SummaryItem type='total'>
                                    <SummaryItemText >Thanh toán</SummaryItemText>
                                    <SummaryPrice>3.250.000₫</SummaryPrice>
                                </SummaryItem>
                                <EndLine></EndLine>
                                <OrderBtn>
                                    PLACE YOUR ORDER
                                </OrderBtn>
                        </SummaryContainer>
                    </CheckoutCard>

                </CheckoutContainer>
                </CartContainer>
            </Section>
            <Annoucement/>
            <Footer/>
        </Container>
    )
}

export default Cart
