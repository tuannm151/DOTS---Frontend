import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CategoryItem from './CategoryItem'
import {device} from './GlobalStyle'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

     @media ${device.mobileL} {
        padding: 1.5rem;
    }
    @media ${device.mobile} {
        flex-direction: column;
    }
`

const Categories = () => {
    return (
        <Container>
            {categories.map((category) =>(
                <CategoryItem item={category} key={category.id}/>
            ))}
        </Container>
    )
}

export default Categories
