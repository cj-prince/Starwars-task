import React from 'react'
import styled from 'styled-components'
import species from '../species.png'



const SpeciesPage = () => {
  return (
    <OverviewDiv>
        <OverviewImg src={species} alt="" />
        <OverviewCont>
            <h1>Cover</h1>
            <p>Director: Kingsley Omin</p>
            <p>Producer: Kingsley Omin</p>
            <DateInfo>Release Date: January 24, 2022</DateInfo>
        </OverviewCont>
    </OverviewDiv>
  )
}

const OverviewDiv = styled.div`
    display:flex;
    margin: 44px 28px;
`
const OverviewImg = styled('img')`
    width: 318px;
    height: 450px;
`
const OverviewCont = styled.div`
    
    height: 24px;
    font-family: 'Inter';
    font-style: normal;

    h1{
        width: 169px;
        font-weight: 700;
        font-size: 48px;
        margin-bottom: 28px;
    }
    p{
        margin-left: -10px;
        font-weight: 500;
        font-size: 16px;
        margin-top:5px;
    }
`
const DateInfo = styled.h6`
    margin-left: 28px;
    font-weight: 500;
    font-size: 16px;
    margin-top:5px;
`

export default SpeciesPage