import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {device} from '../utils/GlobalStyle'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { publicRequest } from '../utils/utils'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
     @media ${device.mobileL} {
        padding: 1.5rem;
    }
    @media ${device.mobile} {
        flex-direction: column;
    }
`

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getData = async() => {
            try {
                const res = await publicRequest.get(BASE_URL + '/product/category');
                console.log(res.data)
                setCategories(res.data);
            } catch (err) {
            }
        }
        getData()
    }, [])
    return (
        <Container>
            {categories.map((category) =>(
                <CategoryItem item={category} key={category.id}/>
            ))}
        </Container>
    )
}

export default Categories
