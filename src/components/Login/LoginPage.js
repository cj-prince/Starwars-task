import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import StarwarsImg from '../image 1.png'
import Validation from './Validation'


const LoginPage = ({logIn}) => {
    const [values,setValues] = useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState()
    const [correctInfo, setCorrectInfo] = useState(false)

    const handleChange = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setCorrectInfo(true)
        logIn(true)
    }
    useEffect(()=>{
        if (correctInfo){
            logIn(true)
        }
    },[])
    return (
        
        <MainDiv>
            <StarDiv>
                <img src={StarwarsImg} alt="" />
            </StarDiv>
            <Login>
                <LoginText>
                    <h2>Login</h2>
                    <p>Kindly enter your details to log in</p>
                </LoginText>
                <LoginInput onSubmit={handleSubmit}>
                    <EmailStyle>
                        <label>Email Address</label>
                        <input type="email" name='email' placeholder='test@gmail.com' required onChange={handleChange} value= {values.email}  />
                    </EmailStyle>
                    <EmailStyle>
                        <label>Password</label>
                        <input type="password" name='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder='**********' required onChange={handleChange} value= {values.password} />
                    </EmailStyle>
                    <button onSubmit={handleSubmit}>Log in</button>
                    <p>Forget your password?</p>
                </LoginInput>
                <LoginPolicy>
                    <p>Privacy Policy <span>and</span> Terms of service</p> 
                </LoginPolicy>
            </Login>
        </MainDiv>
    )
}

const MainDiv = styled.section `
    display: flex ;
    width: 100%;
    height: 100%;
`
const StarDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #031434 ;
    width: 480px;
    height: 800px;
    @media (max-width: 768px) {
        width: 400px;
        height: 700px;
    }

    img{
        width: 385px;
        height: 167px;
    }

`
const EmailStyle = styled.div`
    label{
        position:absolute;
        margin-top:-11px;
        margin-left:14px;
        background-color:white;
    }

    input{
        border:none;
        background: #FFFFFF;
        border: 1px solid #0A74DC;
        border-radius: 4px;
        height: 48px ;
        width:335px ;
    }
`
const Login = styled.div`
    width: 467px;
    height: 564px;
    margin: auto;
    background: #FFFFFF;
    border: 1px solid rgba(164, 167, 183, 0.3);
    box-sizing: border-box;
    border-radius: 8px;
`
const LoginInput = styled.form`
    display:flex ;
    flex-direction: column;
    justify-content:center ;
    align-items:center ;
    gap:32px ;
    font-family: 'Inter';
    font-style: normal;

    button {
        width: 335px;
        height: 48px;
        background: #0A74DC;
        border-radius: 6px; 
        cursor: pointer;
        color: #ffff;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 2px;
    }
    p{
        color:  #0A74DC ;
        width: 152px;
        height: 16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        cursor: pointer;
    }
`
const LoginText = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left:66px ;
    margin-bottom: 60px ;
    font-family: 'Inter';
    font-style: normal;

    h2{
        margin-bottom: -10px;
        height: 32px;
        font-weight: 600;
        font-size: 24px;
    }
    p{
        height: 24px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`
const LoginPolicy = styled.div`
    height: 20px;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    text-decoration: underline;
    color: #303B54;
    margin-top: 56px;
    cursor: pointer;
    span{
        text-decoration: none;
        color: grey;
    }
`

export default LoginPage