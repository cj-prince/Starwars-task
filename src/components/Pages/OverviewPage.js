import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Cover from '../cover.png'


function OverviewPage() {
    const [film, setFirm] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchFilm = async ()  => {
    try {
        const res = await axios.get("https://swapi.dev/api/films");
        setFirm(res?.data?.results) 
    } catch (error) {
        throw error
    }
        } 
        fetchFilm()
    },[id])
    
    return (
        <OverviewDiv>
            <OverviewImg src={Cover} alt="" />
            <OverviewCont>
                <h1>Cover</h1>
                <p>Director: <span>{film.director}</span></p>
                <p>Producer: <span>{film.producer}</span></p>
                <DateInfo>Release Date: <span>{moment(film.release_date).format("ll")}</span></DateInfo>
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
export default OverviewPage