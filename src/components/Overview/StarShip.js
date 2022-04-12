import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import {CustomTable,TableWrapper} from '../tables/CustomTable'
import { starshipTableColumns } from '../tables/Columns'



const StarShip = () => {
    const history = useHistory()
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
    const goToSinglePage = (data,idx) => {
     history.push({pathname:`/starship/${idx+1}`,state:data})
    }

    const tableData = starShip?.map((s,i) => ({
            col1:<div onClick={() => goToSinglePage(s,i)}><input type="checkbox" /></div>,
            col2: s?.name,
            col3: s?.model,
            col4: s?.starship_class,
            col5: s?.passengers,
            col6: s?.length,
            col7: s?.films[0],
        
    }))

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