import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

import {CustomTable,TableWrapper} from '../tables/CustomTable'
import { speciesTableColumns } from '../tables/Columns'



const Species = () => {
    const history = useHistory()
     const [species, setSpecies] = useState([])
      const [isLoading,setIsLoading] = useState(false)

      useEffect(() => {
        const fetchSpecies = async ()  => {
          setIsLoading(true)
       try {
         const res = await axios.get("https://swapi.dev/api/species");

        setSpecies(res?.data?.results) 
        setIsLoading(false)
       } catch (error) {
         setIsLoading(false)
         throw error
       }
        } 

        fetchSpecies()
    },[])

    const goToSinglePage = (data) => {
     history.push({pathname:`/species/${data?.episode_id}`,state:data})
    }

    const tableData = species?.map((s) => ({
            col1:<div onClick={() => goToSinglePage(s)}><input type="checkbox" /></div>,
            col2: s?.name,
            col3: s?.classification,
            col4: `${s?.eye_colors.substr(0,5)}`,
            col5: `${s?.hair_colors.substr(0,5)}`,
            col6: s?.average_height,
            col7: moment(s?.created).format("L"),
    }))
  return (
        <SpeciesDiv>
            <h6>Species</h6>
            <SpeciesBox>
                {isLoading ? "Loading..." :     
                    <TableWrapper>
                        <CustomTable data={tableData} columns={speciesTableColumns}/>
                    </TableWrapper>
                }
            </SpeciesBox>
        </SpeciesDiv>
    
  )
}


const SpeciesDiv = styled.div`
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
const SpeciesBox = styled.div`
    width: 1088px;
    height: 589px;
    margin-left:48px ;
    background: #FFFFFF;
    border: 1px solid rgba(164, 167, 183, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
    overflow: scroll;
`

export default Species