import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Annoucement from '../components/Annoucement'
import {device} from '../components/GlobalStyle'

const Container = styled.div``
const Title = styled.h1`
    margin: 2rem;
    font-size: 4rem;
    font-weight: 400;
    text-align: center;

     @media ${device.tablet} {
        margin: 1rem;
        font-size: 3.5rem;
    }
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileL} {
        flex-flow: row wrap;
        flex: 1 0 50%;
        padding: 0 1rem;
    }
`
const FilterText = styled.span`
    font-size: 2.5rem;
    font-weight: 500;
    margin-right: 1.5rem;

    @media ${device.laptopS} {
        display: none;
    }
`
const Select = styled.select`
    background: transparent;
    padding: .8rem 1.5rem;
    border: 2px solid #d8d8d8;
    border-radius: 5px;
    margin: 1rem;

     @media ${device.tablet} {
        padding: .8rem .5rem .8rem 1rem;
    }

    @media ${device.mobileL} {
        flex: 1 0 40%;
    }
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Title>Shoes</Title>
            <FilterContainer>
                    <FilterText>Filter:</FilterText>
                    <Select>
                        <Option disabled selected>Brand</Option>
                        <Option>All</Option>
                        <Option>Ananas</Option>
                        <Option>Balenciaga</Option>
                        <Option>Bitis</Option>
                        <Option>Nike</Option>
                    </Select>
                
                    <Select>
                        <Option disabled selected>Shoes</Option>
                        <Option>All</Option>
                        <Option>Sport</Option>
                        <Option>Fashion</Option>
                        <Option>LifeStyle</Option>
                    </Select>
              
                    
                    <Select>
                        <Option disabled selected>Sort By</Option>
                        <Option>All</Option>
                        <Option>Freatured</Option>
                        <Option>Newest</Option>
                        <Option>Price: High-Low</Option>
                        <Option>Price: Low-High</Option>
                    </Select>
                    
                    {/* <Select>
                        <Option disabled selected>Theo đánh giá</Option>
                        <Option>Từ thấp đến cao</Option>
                        <Option>Từ cao đến thấp</Option>
                    </Select> */}
                
               
            </FilterContainer>
            <Products/>
            <Newsletter />
            <Annoucement/>
            <Footer />
        </Container>
    )
}

export default ProductList
{/* <FilterContainer>
                    <FilterText>Lọc sản phẩm:</FilterText>
                    <Select>
                        <Option disabled selected>Brand</Option>
                        <Option>All</Option>
                        <Option>Ananas</Option>
                        <Option>Balenciaga</Option>
                        <Option>Bitis</Option>
                        <Option>Nike</Option>
                    </Select>
                
                    <Select>
                        <Option disabled selected>Loại sản phẩm</Option>
                        <Option>All</Option>
                        <Option>Sport</Option>
                        <Option>Fashion</Option>
                        <Option>LifeStyle</Option>
                    </Select>
              
                    
                    <Select>
                        <Option disabled selected>Sort By</Option>
                        <Option>Freatured</Option>
                        <Option>Newest</Option>
                        <Option>Price: High-Low</Option>
                        <Option>Price: Low-High</Option>
                    </Select>
                    
                    <Select>
                        <Option disabled selected>Theo đánh giá</Option>
                        <Option>Từ thấp đến cao</Option>
                        <Option>Từ cao đến thấp</Option>
                    </Select>
                
               
            </FilterContainer> */}