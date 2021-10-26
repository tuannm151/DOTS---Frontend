import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import {device} from './GlobalStyle'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem,1fr));
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
        grid-template-columns: repeat(auto-fit, minmax(23rem,1fr));
    }
    @media ${device.mobileL} {
        padding: 1rem;
        grid-column-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(19rem,1fr));
    }
    @media ${device.mobileS} {
        padding: 0;
        grid-column-gap: .5rem;
        grid-template-columns: repeat(auto-fit, minmax(16rem,1fr));
    }
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
