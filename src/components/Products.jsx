import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(28rem,1fr));
    grid-row-gap: 1.5rem;
    grid-column-gap: 5rem;
    grid-auto-flow: row;
    padding: 5rem;
    position: relative;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
