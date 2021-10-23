import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import PrettyRating from "pretty-rating-react";

import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { Add, Remove } from "@material-ui/icons"

const starIcons =  {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
};

const starColors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
};

const Container =  styled.div`

`
const Wrapper = styled.div`
    display: flex;
    padding: 5rem;
    color: #2f504d;
`

const ImgContainer = styled.div`
    flex: 1;
    margin-left: 3rem;
`

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border-radius: 3px;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 2rem 6rem;
`

const Category = styled.span`
    font-size: 1.5rem;
    color: #cacaca;
    font-weight: 900;
    letter-spacing: 1px;
`

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    
`
const Reviews = styled.div`
    display: flex;
    font-size: 1.7rem;
    margin-top: 1.2rem;
`
const ReviewsText = styled.span`
    margin-left: 1.5rem;
`

const Price = styled.span`
    font-size: 3rem;
    margin-top: 3rem;
    display: block;
    font-weight: 400;
`

const Desc = styled.p`
    margin-top: 2rem;
    font-size: 2rem;
`
const Form = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3rem;
`
const FormColor = styled.div`
    display: flex;
    align-items: center;
`

const FormTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin-right: 1.5rem;
`

const FormRadioGroup = styled.div`
    display: flex;
    height: 3rem;
`

const FormRadio = styled.div`
    position: relative;
    margin-right: 4rem;
`


const Radio = styled.span`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid #afafaf;
    position: absolute;
`

const InputRadio = styled.input`
    position: absolute;
    width: 3rem;
    height: 3rem;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    &:checked ~ ${Radio} {
        outline: 3px solid #2488ca;
        outline-offset: 2px; 
        border: none;
    }
`
const FormSize = styled.div`
    display: flex;
    align-items: center;
    margin-left: 4rem;
`

const SizeSelect = styled.select`
    padding: .5rem;
    background: transparent;
    border: 2px solid #b1b1b1;
    border-radius: 3px;
    font-size: 1.7rem;
`

const SizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5rem;
    font-size: 2rem;
    height: 5rem;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: .7rem 0;
    width: 15rem;
    border: 2px solid #2f504d;
    justify-content: space-evenly;
    border-radius: 3px;
`

const Amount = styled.span`
    border-left: 2px solid #2f504d;
    border-right: 2px solid #2f504d;
    padding: .5rem 2rem;
    display: inline-block;
`

const Button = styled.button`
    margin-left: 5rem;
    background: #2f504d;
    border: none;
    color: #fff;
    padding: .5rem 2rem;
    font-size: 2rem;
    font-weight: 600;
    height: 100%;
    width: 15rem;
    cursor: pointer;
    border-radius: 3px;
`

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/91b5317e-f381-40c5-8506-1330b776e53e/sb-zoom-blazer-mid-skate-shoe-bdtQ2K.png"/>
                </ImgContainer>
                
                <InfoContainer>
                     <Category>Giày thể thao</Category>
                     <Title>Nike Air Pro Max</Title> 
                     <Reviews>
                        <PrettyRating value={4} icons={starIcons.star} colors={starColors.star} /> 
                        <ReviewsText>4.4 (4 reviews)</ReviewsText>    
                    </Reviews>  
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa magni. Inventore ratione similique eaque aut, veniam in rerum! Fugit fugiat nesciunt et optio eius deleniti harum natus eum impedit.</Desc>
                    <Price>3.250.000₫</Price>

                   <Form>
                        <FormColor>
                    <FormTitle>Color</FormTitle>
                    <FormRadioGroup>
                        <FormRadio>
                            <InputRadio type="radio" name="color"></InputRadio>
                            <Radio color='white'></Radio>
                        </FormRadio>
                        <FormRadio>
                            <InputRadio type="radio" name="color"></InputRadio>
                            <Radio color='black'></Radio>
                        </FormRadio>
                        <FormRadio>
                            <InputRadio type="radio" name="color"></InputRadio>
                            <Radio color='darkblue'></Radio>
                        </FormRadio>
                        <FormRadio>
                            <InputRadio type="radio" name="color"></InputRadio>
                            <Radio color='gray'></Radio>
                        </FormRadio>
                        <FormRadio>
                            <InputRadio type="radio" name="color"></InputRadio>
                            <Radio color='gold'></Radio>
                        </FormRadio>
                    </FormRadioGroup>
                </FormColor>
                    <FormSize>
                        <FormTitle>Size</FormTitle>
                        <SizeSelect>
                            <SizeOption>39</SizeOption>
                            <SizeOption>40</SizeOption>
                            <SizeOption>41</SizeOption>
                            <SizeOption>42</SizeOption>
                            <SizeOption>43</SizeOption>
                            <SizeOption>44</SizeOption>
                            <SizeOption>45</SizeOption>
                        </SizeSelect>
                    </FormSize>
                   </Form>  
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{flex: 1, cursor: 'pointer'}}/>
                        <Amount>1</Amount>
                        <Add style={{flex: 1, cursor: 'pointer'}}/>
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
