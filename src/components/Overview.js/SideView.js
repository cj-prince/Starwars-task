import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import StarImg from '../image 1.png'
import Group from '../Images/Group 31831.png'
import StarshipBox from '../Images/Rectanglesp.png'
import PeopleBox from '../Images/Rectanglespp.png'
import SpeciesBox from '../Images/RectangleSl.png'




const SideView = () => {
  const sidebarData = [
     {
      icon: StarshipBox,
      name: "Starships",
      path: "/starship"
    },
     {
      icon: PeopleBox,
      name: "People",
      path: "/people"
    },
     {
      icon: SpeciesBox,
      name: "Species",
      path: "/species"
    }
  ]
  return (
    <SideDiv>
        <SideImg src={StarImg} alt="" />  
        <NavLink to='/centerview'>
          <Overview><img src={Group} alt="" /> Overview</Overview>
        </NavLink>

        <SideList>
          {sidebarData?.map((data,i) => (
          <NavLink key={i} to={data?.path}>
          <SidebarItem>
              <img src={data?.icon} />
              <p>{data?.name}</p>
          </SidebarItem>
          </NavLink>
            ))}
        
        </SideList>
    </SideDiv>
  )
}

const SideDiv = styled.div `
    width: 272px;
    height: 1003px;
    background: #031434;
    font-family: 'Inter';
    font-style: normal;
`
const SideImg = styled("img")`
        margin-top: 32px;
        margin-left: 65px;
        width: 107px;
        height: 46px; 
`
const Overview = styled.p`
        display:flex ;
        justify-content:flex-start;
        align-items:center;
        margin-left:23px;
        padding:0 55px;
        height: 48px;
        background: #0A74DC;
        border-radius: 4px;
        width: 85px;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer;
        img{
          margin: 0 10px 0 -30px;
          width: 24px;
          height: 24px;
          
        }
`
const SideList = styled.div`
    height: 24px;
    font-weight: 600;
    font-size: 16px; 
    color: #FFFFFF;  
    margin-top: 33px;
    cursor: pointer;
        img{
        width: 17px;
        height: 16px;
        margin: 0 15px 0 50px
      }
    p{
        display:flex ;
        justify-content:flex-start;
    }
    a {
      text-decoration:none ;
      color:#FFFFFF ;
    }
`

const SidebarItem = styled.div`
display:flex ;
align-items: center ;


`

export default SideView