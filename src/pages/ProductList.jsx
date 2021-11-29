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
    font-size: 2rem;
    font-weight: 400;
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
                    <FilterText>Lọc sản phẩm:</FilterText>
                    <Select>
                        <Option disabled selected>Thương hiệu</Option>
                        <Option>Tất cả</Option>
                        <Option>Nike</Option>
                        <Option>Adidas</Option>
                        <Option>Balenciaga</Option>
                        <Option>Bitis</Option>
                    </Select>
                
                    <Select>
                        <Option disabled selected>Loại sản phẩm</Option>
                        <Option>Tất cả</Option>
                        <Option>Giày thể thao</Option>
                        <Option>Sandal</Option>
                        <Option>Dép</Option>
                    </Select>
              
                    
                    <Select>
                        <Option disabled selected>Theo giá</Option>
                        <Option>Từ thấp đến cao</Option>
                        <Option>Từ cao đến thấp</Option>
                    </Select>
                    
                    <Select>
                        <Option disabled selected>Theo đánh giá</Option>
                        <Option>Từ thấp đến cao</Option>
                        <Option>Từ cao đến thấp</Option>
                    </Select>
                
               
            </FilterContainer>
            <Products/>
            <Newsletter />
            <Annoucement/>
            <Footer />
        </Container>
    )
}

export default ProductList
