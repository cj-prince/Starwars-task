import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import {CustomTable,TableWrapper} from '../tables/CustomTable'
import { starshipTableColumns } from '../tables/Columns'



const StarShip = () => {
  const [starShip, setStarShip] = useState([])
        const [isLoading,setIsLoading] = useState(false)

        useEffect(() => {
            const fetchStarShip = async ()  => {
            setIsLoading(true)
        try {
            const res = await axios.get("https://swapi.dev/api/starships");
            setStarShip(res?.data?.results) 
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            throw error
        }
            } 

        fetchStarShip()
    },[])

    const tableData = starShip?.map(({name,model,starship_class,passengers,length,films}) => {
        return {
            col1:<div><input type="checkbox" /></div>,
            col2: name,
            col3: model,
            col4: starship_class,
            col5: passengers,
            col6: length,
            col7: films[0],
        }
    })
  return (
    <StarDiv>
      <h6>Starship</h6>
      <StarBox>
          {isLoading ? "Loading..." :     
                    <TableWrapper>
                        <CustomTable data={tableData} columns={starshipTableColumns}/>
                    </TableWrapper>
                }
      </StarBox>
    </StarDiv>
   
  )
}


const StarDiv = styled.div`
     h6{
        width: 40px;
        height: 24px;
        margin-left:48px ;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #A4A7B7;
    }
`
const StarBox = styled.div`
    width: 1088px;
    height: 589px;
    margin-left:48px ;
    background: #FFFFFF;
    border: 1px solid rgba(164, 167, 183, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
    overflow: scroll;
`
export default StarShip