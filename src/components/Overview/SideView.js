import React from 'react'
import styled from 'styled-components'
import { NavLink} from 'react-router-dom'


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
       
          <Overview >
             <NavLink to='/centerview' > 
              <img src={Group} alt="group" /> 
              <p>Overview</p> 
              </NavLink>
          </Overview> 
        
        
        <SideList>
          {sidebarData?.map((data,i) => (
          <NavLink  key={i} to={data?.path} >
              <img src={data?.icon} alt="icon" />
              <p>{data?.name}</p>
          </NavLink>
            ))}
        
        </SideList>
    </SideDiv>
  )
}

const SideDiv = styled.nav `
    width: 272px;
    height: 1003px;
    background: #031434;
    font-family: 'Inter';
    font-style: normal;
    a{
      text-decoration:none;
      display:flex ;
    }
    a.active{
      background-color: #0A74DC !important;
      /* padding-left:45px; */
      margin: auto;
      border-radius: 4px;
    }
`
const SideImg = styled("img")`
        margin-top: 32px;
        margin-left: 65px;
        width: 107px;
        height: 46px; 
`
const Overview = styled.nav`
        cursor: pointer;
        margin:15px 35px ;
        p{
            font-weight: 600;
            font-size: 16px;
            color: #FFFFFF;
        }
        img{
          width: 24px;
          height: 24px;
          margin: 13px 15px 0 16px
        }
`
const SideList = styled.nav`
    font-weight: 600;
    font-size: 16px; 
    color: #FFFFFF;  
    margin: 33px 40px 0;
    cursor: pointer;
      img{
        height: 16px;
        margin: 17px 15px 0 16px
      }
    p{
        
    }
    a {
      text-decoration:none ;
      color:#FFFFFF ;
    }
  
`

export default SideView