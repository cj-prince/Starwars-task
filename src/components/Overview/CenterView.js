import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

import CenterTop from './CenterTop'
import {CustomTable,TableWrapper} from '../tables/CustomTable'
import { firmTableColumns } from '../tables/Columns'


const CenterView = () => {
      const history = useHistory()
      const [film, setFirm] = useState([])
      const [isLoading,setIsLoading] = useState(false)

      useEffect(() => {
        const fetchFilm = async ()  => {
          setIsLoading(true)
       try {
         const res = await axios.get("https://swapi.dev/api/films");

        setFirm(res?.data?.results) 
        setIsLoading(false)
       } catch (error) {
         setIsLoading(false)
         throw error
       }
        } 

        fetchFilm()
    },[])

    const goToSinglePage = (data) => {
     history.push({pathname:`/centerview/${data?.episode_id}`,state:data})
    }
  
    const tableData = film?.map((f) => ({
      col1:<div onClick={() => goToSinglePage(f)}><input type="checkbox" /></div>,
      col2: f?.title,
      col3: moment(f?.release_date).format("L"),
      col4: f?.director,
      col5: `${f?.producer.substr(0,10)}...`,
      col6: f?.episode_id,
      col7: f?.characters[0],
    })) 
   
 


  return (
    <CenterMain>
        <CenterTop />
        <h6>Films</h6>
        <CenterBox>
       {isLoading ? "Loading..." :     
          <TableWrapper>
            <CustomTable data={tableData} columns={firmTableColumns}/>
          </TableWrapper>
       }
        </CenterBox>
      </CenterMain>
  )
}


const CenterMain = styled.div`
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
const CenterBox = styled.div`
    width: 1088px;
    height: 589px;
    margin-left:48px ;
    background: #FFFFFF;
    border: 1px solid rgba(164, 167, 183, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
`
export default CenterView