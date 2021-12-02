import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Annoucement from '../components/Annoucement'
import {device} from '../utils/GlobalStyle'
import {useLocation} from 'react-router-dom'
import { publicRequest } from '../utils/utils'
const Container = styled.div``
const Title = styled.h1`
    margin: 2rem;
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;

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
    const location = useLocation();
    const category = location.pathname.split("/")[3]
    const [filters, setFilters] = useState({});
    const [sorts, setSorts] = useState({});
    const [brands ,setBrands] = useState([])
    useEffect(() => {
        const getData = async() => {
            try {
                
                const brandRes = await publicRequest.get('/product/brand');
                console.log(brandRes)
                setBrands(brandRes.data);
            } catch (err) {
            }
        }
        getData()
    }, [])

    const handlerFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    const handlerSort = (e) => {
        const value = e.target.value;
        setSorts({
            ...sorts,
            [e.target.name]: value,
        })
    }

    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Title>{category}</Title>
            <FilterContainer>
                    <FilterText>Product filter:</FilterText>
                    <Select name="brand" onChange={handlerFilters}>
                        <Option selected value="all">All brand</Option>
                        {brands.map(brand => (
                            <Option value={brand.name}>{brand.name}</Option>
                        ))}
                    </Select>
                    
                    <Select name="criteria" onChange={handlerSort}>
                        <Option disabled defaultValue selected>Sort products by criteria</Option>
                        <Option disabled>By rating</Option>
                        <Option value = "rasc">Rating: from lowest to highest</Option>
                        <Option value="rdesc">Rating: highest to lowest</Option>
                        <Option disabled>By price</Option>
                        <Option value = "pasc">Price: from lowest to highest</Option>
                        <Option value="pdesc">Price: from highest to lowest</Option>
                    </Select>

                     <Select name="date" onChange={handlerSort}>
                        <Option disabled defaultValue selected>Sort products by release date</Option>
                        <Option value = "ddesc">Newest</Option>
                        <Option value="dasc">Oldest</Option>
                    </Select>
                
               
            </FilterContainer>
            <Products category={category} filters={filters} sorts={sorts}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
