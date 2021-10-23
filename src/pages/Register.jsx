import { Mail, Person, RemoveRedEye } from "@material-ui/icons"
import styled from "styled-components"
import {ReactComponent as Logo} from "../img/logo.svg"
import {ReactComponent as Facebook} from "../img/icons8-facebook-50.svg"
import {ReactComponent as Google} from "../img/icons8-google-50.svg"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(166deg, rgba(213,240,255,1) 21%, rgba(255,255,255,1) 44%, rgba(207,246,253,1) 88%);
    padding: 6rem;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 70%;
    background-color: #fff;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0px 18px 54px 0px rgba(0,0,0,0.24);
`

const Image = styled.img`
    flex: 0.7;
    object-fit: cover;
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
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin-top: 1.5rem;
    color: #214646;
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
`

const InputField = styled.div`
    border: 2px solid #c0c0c0;
    border-radius: 5px;
    overflow: hidden;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-self: stretch;
`

const Input = styled.input`
    border: none;
    margin-left: .5rem;
    font-size: 1.5rem;
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
                    <Logo style={{height: '4rem', width: '4rem', borderRadius: '50%',}}/>
                    <Title>Create an account</Title>
                    <Desc>Already have an account? <Link>Sign in</Link></Desc>
                    <Form>
                        <InputField>
                            <Input placeholder="Full name"/>
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
