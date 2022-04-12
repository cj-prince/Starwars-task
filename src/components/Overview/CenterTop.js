import React from 'react'
import styled from 'styled-components'
import FilmBox from '../Images/RectangleMgpng.png'
import StarBox from '../Images/Rectanglemp.png'
import PeopleBox from '../Images/RectangleMpp.png'
import SpeciesBox from '../Images/RectangleMy.png'


const CenterTop = () => {
  return (
    <Main>
        <CenterSec>
            <Firms>
                <h5>Firms</h5>
                <img src={FilmBox} alt="" />
            </Firms>
            <FirmNub>200</FirmNub>
            <FirmDetail>20 More than than yesterday</FirmDetail>
        </CenterSec>
        <CenterSec>
            <Firms>
                <h5>Starship</h5>
                <img src={StarBox} alt="" />
            </Firms>
            <FirmNub>200</FirmNub>
            <FirmDetail>20 More than than yesterday</FirmDetail>
        </CenterSec>
        <CenterSec>
            <Firms>
                <h5>People</h5>
                <img src={PeopleBox} alt="" />
            </Firms>
            <FirmNub>200</FirmNub>
            <FirmDetail>20 More than than yesterday</FirmDetail>
        </CenterSec>
        <CenterSec>
            <Firms>
                <h5>Species</h5>
                <img src={SpeciesBox} alt="" />
            </Firms>
            <FirmNub>200</FirmNub>
            <FirmDetail>20 More than than yesterday</FirmDetail>
        </CenterSec>
    </Main>
  )
}

const Main = styled.main`
    display:flex;
`
const CenterSec = styled.section`
    width: 208px;
    height: 130px;
    margin:34px 44px ;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
`
const Firms = styled.div`
    display:flex ;
    justify-content: space-between ;
    h5{
        width: 42px;
        font-weight: 700;
        font-size: 16px;
        margin: 20px;
    }
    img{
        height: 26px;
        margin: 15px
    }
`
const FirmNub = styled.p`
    width: 33px;
    margin:24px 20px;
    font-weight: 700;
    font-size: 16px;
`
const FirmDetail = styled.p`
    width: 123px;
    font-weight: 400;
    font-size: 9px;
    color: #00992B;
    margin: -20px 14px;
`

export default CenterTop