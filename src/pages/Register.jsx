import { Mail, Person, RemoveRedEye } from "@material-ui/icons"
import styled from "styled-components"
import {ReactComponent as Logo} from "../img/logo.svg"
import {ReactComponent as Facebook} from "../img/icons8-facebook-50.svg"
import {ReactComponent as Google} from "../img/icons8-google-50.svg"
import {device} from '../components/GlobalStyle'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(166deg, rgba(213,240,255,1) 21%, rgba(255,255,255,1) 44%, rgba(207,246,253,1) 88%);
    padding: 6rem;
    display: flex;
    justify-content: center;

     @media ${device.mobileL} {
        padding: 1.5rem 0;
    }
`

const Wrapper = styled.div`
    display: flex;
    max-width: 930px;
    max-height: 600px;
    height: 100%;
    width: 70%;
    background-color: #fff;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0px 18px 54px 0px rgba(0,0,0,0.24);
    align-self: center;

    @media ${device.desktopM} {
        width: 80%;   
    }
    @media ${device.desktopS} {
        width: 85%;    
    }

    @media ${device.laptop} {
        width: 90%;
        height: 80%; 
    }

    @media ${device.mobileL} {
        width: 100%;
    }

    @media ${device.mobileSS} {
        height: 85%;
    }
`

const Image = styled.img`
    object-fit: cover;
    width: 35%;

    @media ${device.laptop} {
        width: 30%;    
    }

    @media ${device.tablet} {
        display: none;   
    }
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 85%;
    align-self: center;
    background-color: #fdfdfd;

    @media ${device.mobileL} {
        height: 90%;   
    }
`
const LogoWrapper = styled.div`
    @media ${device.mobileSS} {
        display: none;  
    }
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin-top: 1.5rem;
    color: #214646;

    @media ${device.mobileS} {
        margin-top: .5rem;   
    }
    @media ${device.mobileSS} {
        font-size: 2.5rem;
        margin-top: 0;
    }

`

const Desc = styled.p`
    margin-bottom: auto;
    font-size: 1.7rem;
    font-weight: 600;
    color: #b1b1b1;
    margin-top: 1rem;
`

const Link = styled.span`
    color: #d89d7b;
    cursor: pointer;
`

const Form = styled.form`
    flex: 1;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 60%;
    align-items: center;

    @media ${device.laptop} {
        width: 70%;    
    }

    @media ${device.mobileL} {
        width: 90%;    
    }
`

const InputField = styled.div`
    border: 2px solid #d4d4d4;
    border-radius: 1rem;
    overflow: hidden;
    padding: 1.2rem 1rem 1.2rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-self: stretch;

    @media ${device.desktopM} {
        margin-bottom: .5rem;
    }

    @media ${device.laptop} {
        margin-bottom: 1rem;
    }

    @media ${device.mobileS} {
       margin-bottom: 0; 
       padding: 1rem 1rem 1rem 1.5rem;
    }
`


const Input = styled.input`
    border: none;
    margin-left: .5rem;
    font-size: 1.7rem;
    
    &:focus {
        outline: none;
    }
`
const Icon = styled.span`
    display: inline-block;
    color: #929292;

` 

const ButtonSignUp = styled.button`
    padding: .7rem 0;
    background-color: #214646;
    color: #fff;
    font-size: 2rem;
    text-transform: uppercase;
    border-radius: 5px;
    width: 70%;
    margin-top: 2rem;
    cursor: pointer;
    border: none;

     @media ${device.mobileS} {
        margin-top: 1rem;   
    }
`

const Line = styled.span`
    display: block;
    align-self: center;
    font-size: 1.5rem;
    color: #8b8b8b;
    width: 80%;
    text-align: center;
    border-bottom: 1px solid #b1b1b1;
    line-height: 0.1rem;
    margin: 2rem 0 2rem 0;

    @media ${device.mobileS} {
        margin: 1rem 0 1rem 0;
    }
`


const LineText = styled.span`
    background-color: #fff;
    padding: 0 1rem;
`

const ExternalSignUp = styled.div`
    display: flex;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: #fff;
    /* border: 1px solid #c7c7c7; */
    border: none;
    padding: .5rem .5rem;
    border-radius: 1rem;
    box-shadow: -2px 6px 11px -7px rgba(0,0,0,0.35);
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Image src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></Image>
                <InfoContainer>
                   <LogoWrapper> <Logo style={{height: '4rem', width: '4rem', borderRadius: '50%',}}/></LogoWrapper>
                    <Title>Create an account</Title>
                    <Desc>Already have an account? <Link>Sign in</Link></Desc>
                    <Form>
                        <InputField>
                            <Input id="fullName" name="fullName" placeholder="Full name"/>
                            <Icon>
                                <Person/>
                            </Icon>
                        </InputField>
                        
                        <InputField>
                            <Input placeholder="Email" type="email"/>
                            <Icon><Mail/></Icon>
                        </InputField>
                        <InputField>
                            <Input placeholder="Password" />
                            <Icon><RemoveRedEye/></Icon>
                        </InputField>
                        <InputField>
                            <Input placeholder="Confirm password"/>
                            <Icon><RemoveRedEye/></Icon>
                        </InputField>
                        <ButtonSignUp>Sign up</ButtonSignUp>
                        <Line><LineText>Or sign up with</LineText></Line>
                        <ExternalSignUp>
                            <Button>
                                <Google style={{height: '3rem', width: '3rem', }}/> 
                            </Button>
                            <Button style={{marginLeft: '1.5rem'}}><Facebook style={{height: '3rem', width: '3rem',}}/>
                           </Button>
                        </ExternalSignUp>
                    </Form>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Register
