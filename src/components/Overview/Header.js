import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation} from 'react-router-dom'

import NoticeIcon from '../Shape.png'
import AccountIcon from '../account.png'
import BackImage from '../Images/chevron_right.png'


const Header = () => {
    const history = useHistory();
    const location = useLocation()

    const excludePath = (path) => {
        switch (true) {
            case path === "/people":
                return false;
                 case path === "/starship":
                return false;  
                  case path === "/centerview":
                return false;
                  case path ===  "/species":
                return false;         
            default:
                return true;
        }
    }
  return (
    <HeaderDiv>
        {excludePath(location?.pathname) &&
            <Button>
                <img src={BackImage} alt="" />
                <button onClick={history.goBack}>Back</button>
            </Button> 
        }   
        
        <HeaderImg src={NoticeIcon} alt="" />
        <HeaderDivider></HeaderDivider>
        <AccountImg src={AccountIcon} alt="" />
        <AccountName>John Doe</AccountName>
        <Option>...</Option>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items:center;
    width: 1173px;
    height: 64px;
    gap:32px ;
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);

`
const Button = styled.div`
    display:flex;
    margin-right: 780px;
    cursor: pointer;
    img{
        margin-top: 3px;
        height: 13px ;
    }
    button{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        border: none;
        background: transparent;
        color: #A4A7B7;
        cursor: pointer;
    } 
`
const HeaderImg = styled('img')`
    width: 16px;
    height: 19.5px;
    color: #333758;
`
const HeaderDivider = styled.p`
    width: 1px;
    height: 25px;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
`
const AccountImg = styled('img')`
    width: 30px;
    height: 30px;
`
const AccountName = styled.p`
    width: 61px;
    height: 18px;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.117188px;
    color: #303B54;
`
const Option = styled.p`
    width: 17px;
    margin-right: 32px;
    color: #C4C4C4;
`
export default Header