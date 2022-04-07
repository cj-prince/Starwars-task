import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

import Cover from '../cover.png'


function OverviewPage() {
    const location = useLocation()
    const data = location.state;

    
    return (
        <OverviewDiv>
            <OverviewImg src={Cover} alt="" />
            <OverviewCont>
                <h1>{data?.title}</h1>
                <p>Director: <span>{data?.director}</span></p>
                <p>Producer: <span>{data?.producer}</span></p>
                <DateInfo>Release Date: <span>{moment(data?.release_date).format("ll")}</span></DateInfo>
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
    
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    display: flex;
    flex-direction: column;
    align-items: baseline;

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
export default OverviewPage