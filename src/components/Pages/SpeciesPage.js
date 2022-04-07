import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import species from '../species.png'



const SpeciesPage = () => {
    const location = useLocation()
    const data = location.state;
    return (
        <OverviewDiv>
            <OverviewImg src={species} alt="" />
            <OverviewCont>
                <h1>{data?.name}</h1>
                <p>Designation: {data?.designation}</p>
                <p>Language: {data?.language}</p>
                <p>Eye Color: {data?.eye_colors}</p>
                <DateInfo>Average Lifespan: {data?.average_lifespan}</DateInfo>
            </OverviewCont>
        </OverviewDiv>
    )
}

const OverviewDiv = styled.div`
    display:flex;
    margin: 44px 28px;
    gap: 24px;
`
const OverviewImg = styled('img')`
    width: 318px;
    height: 450px;
`
const OverviewCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;

    h1{
        font-weight: 700;
        font-size: 48px;
        margin-bottom: 28px;
    }
    p{
        font-weight: 500;
        font-size: 16px;
        margin-top:5px;
    }
`
const DateInfo = styled.h6`
    font-weight: 500;
    font-size: 16px;
    margin-top:5px;
`

export default SpeciesPage