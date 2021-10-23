import { Add, Close, Delete, DeleteForeverOutlined, DeleteOutlined, Edit, EmailOutlined, HighlightOffOutlined, LocationOnOutlined, Payment, PersonOutline, PhoneOutlined, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
    
`

const Section = styled.div`
    background-color: #f5f9fa;
    width: 100%;
    padding: 5rem 5rem;
    min-height: 100vh;
    color: #212727;
`
const CartContainer = styled.div`
    width: 100%;
    display: flex;
`

const ItemsContainer = styled.div`
    flex: 2;
    margin-right: 5rem;
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
`

const CartItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
    margin-bottom: 3rem;
    background-color: #fff;
    border-radius: 2rem;
`

const Image = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 1.5rem;
`

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 2rem;
`

const ItemTitle = styled.h2`
    font-weight: 600;
    font-size: 1.8rem;
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
`
const Right = styled.div`
    flex: 0.8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`

const Amount = styled.span`
    margin: 0 .5rem 0 .5rem;
    display: inline-block;
    padding: .3rem 1rem;
    border: 1px solid #aaaaaa;
    border-radius: 4px;
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
    opacity: 0.6;
    &:hover{
        background-color: #dfdfdf;
    }
`

const EndLine = styled.span`
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ebebeb;
    margin: 2.5rem 0;
`

    
const CheckoutCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem 3rem;
    margin-bottom: 1.5rem;
    border-radius: 2rem;
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
    font-size: ${props=>props.type === 'total' ? '2.2' : '1.7'}rem;
    font-weight: ${props=>props.type === 'total' ? '600' : '500'};
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
    background-color: #4b9778;
    font-size: 2rem;
    padding: 1rem 0;
    color: #fff;
    width: 70%;
    border-radius: 1rem;
    align-self: center;
    cursor: pointer;
`

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
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
                                <Btn>
                                    <Remove style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                                <Amount>1</Amount>
                                <Btn>
                                    <Add style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                            </AmountContainer>
                            <Price>3.250.000₫</Price>
                            <Btn>
                                <DeleteForeverOutlined style={{fontSize:'2.5rem' }}/>
                            </Btn>
                        </Right>
                    </CartItem>
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
                                <Btn>
                                    <Remove style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                                <Amount>1</Amount>
                                <Btn>
                                    <Add style={{cursor: 'pointer', fontSize:'2rem'}}/>
                                </Btn>
                            </AmountContainer>
                            <Price>3.250.000₫</Price>
                            <Btn>
                                <DeleteForeverOutlined style={{fontSize:'2.5rem' }}/>
                            </Btn>
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
                            <EmailOutlined style={{fontSize:'2rem', color:'#3f6967'}}/>
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
                            <PersonOutline style={{fontSize:'2rem', color:'#3f6967'}}/>
                            <CheckoutInfoText>
                                Nguyễn Minh Tuân
                            </CheckoutInfoText>
                        </CheckoutInfo>
                        <CheckoutInfo>
                            <LocationOnOutlined style={{fontSize:'2rem', color:'#3f6967'}}/>
                            <CheckoutInfoText>
                                555 Nguyễn Văn Phùng, Xuân sơn, Đông Triều, Quảng Ninh
                            </CheckoutInfoText>
                        </CheckoutInfo>
                        <CheckoutInfo>
                            <PhoneOutlined style={{fontSize:'2rem', color:'#3f6967'}}/>
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
                            <Payment style={{fontSize:'2rem', color:'#3f6967'}}/>
                            <CheckoutInfoText>
                                Thanh toán với ví Momo
                            </CheckoutInfoText>
                        </CheckoutInfo>
                        <EndLine></EndLine>

                        <SummaryContainer>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryPrice>6.500.000₫</SummaryPrice>
                                </SummaryItem>

                                <SummaryItem>
                                    <SummaryItemText>Shipping</SummaryItemText>
                                    <SummaryPrice>Free</SummaryPrice>
                                </SummaryItem>
                                <SummaryItem type='total'>
                                    <SummaryItemText >Thanh toán</SummaryItemText>
                                    <SummaryPrice>6.500.000₫</SummaryPrice>
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
            <Footer/>
        </Container>
    )
}

export default Cart
