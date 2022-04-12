import { Link } from "react-router-dom";
import styled from "styled-components";
import React from 'react'

const My404Component = () => {
  return (
        <ErrorPage>
            <h2>Route not found</h2>
            <Link to='/centerview'>Back home</Link>
        </ErrorPage>
    
  )
}

const ErrorPage = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    place-items:center ;
    margin-top: 20px;
`

export default My404Component