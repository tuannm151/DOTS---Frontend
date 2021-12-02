import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import {device} from '../utils/GlobalStyle'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { publicRequest } from '../utils/utils'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem,1fr));
    grid-row-gap: 1.5rem;
    grid-column-gap: 5rem;
    grid-auto-flow: row;
    padding: 5rem;

    @media ${device.desktopS} {
        grid-column-gap: 3rem;
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(auto-fit, minmax(25rem,1fr));
    }

    @media ${device.tablet} {
        padding: 2rem;
        grid-column-gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(24rem,1fr));
    }
    @media ${device.mobileL} {
        padding: 1rem;
        grid-column-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(19rem,1fr));
    }
    @media ${device.mobileS} {
        padding: 0;
        grid-column-gap: .5rem;
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.mobileSS} {
        grid-template-columns: 1fr;
    }
`

const Products = ({category,filters,sorts}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try{
                const res = await publicRequest.get(category ?`/product/list?category=${category}` : `/product/list`);
                setProducts(res.data);
            } catch(err) {
                console.error(err);
            }
        }
        getProducts()
    }, [category])



    useEffect(() => {
        category && setFilteredProducts(
        products.filter(item => Object.entries(filters).every(([key, value]) => 
                {
                    if(value === 'all') return true;
                    return item[key].includes(value)
                }
            ))
        )
    }, [category,filters, products])

    useEffect(() => {
        if(sorts == null) {
            return;
        }
        if(sorts.criteria === "pasc") {
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => a.unitPrice - b.unitPrice));
        } else if(sorts.criteria === "pdesc") {
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => b.unitPrice - a.unitPrice));
        } else if(sorts.criteria === "rasc") {
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => a.overallRating - b.overallRating));
        } else if(sorts.criteria === "rdesc") {
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => b.overallRating - a.overallRating));
        }
        if(sorts.date === 'ddesc') {
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => {
                const x = new Date(a.createdAt);
                const y = new Date(b.createdAt);
                return x > y ? x : y;
            }));
        }
    }, [sorts])

    return (
        <Container>
            {category ? filteredProducts.map((item) =>  <Product item={item} key={item.productId} />) 
            : products
            .slice(0,8).map((item) => <Product item={item} key={item.productId} />)}
        </Container>
    )
}

export default Products
