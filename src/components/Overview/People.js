import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import {useHistory} from 'react-router-dom'

import {CustomTable,TableWrapper} from '../tables/CustomTable'
import { peopleTableColumns } from '../tables/Columns'




const People = () => {
    const history = useHistory()

    const [people, setPeople] = useState([])
        const [isLoading,setIsLoading] = useState(false)

        useEffect(() => {
            const fetchPeople = async ()  => {
            setIsLoading(true)
        try {
            const res = await axios.get("https://swapi.dev/api/people");
            setPeople(res?.data?.results) 
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            throw error
        }
            } 

        fetchPeople()
    },[])

    const goToSinglePage = (data) => {
     history.push({pathname:`/people/${data?.name}`,state:data})
    }

    const tableData = people?.map((p) => ({
            col1:<div onClick={() => goToSinglePage(p)}><input type="checkbox" /></div>,
            col2: p?.name,
            col3: p?.birth_year,
            col4: p?.gender,
            col5: `${p?.hair_color.substr(0,5)}`,
            col6: p?.height,
            col7: moment(p?.created).format("L"),
    }))

  return (
      <PeopleDiv>
          <h6>People</h6>
          <PeopleBox>
                {isLoading ? "Loading..." :     
                    <TableWrapper>
                        <CustomTable data={tableData} columns={peopleTableColumns}/>
                    </TableWrapper>
                }
          </PeopleBox>
      </PeopleDiv>
  )
}

const PeopleDiv = styled.div`
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
const PeopleBox = styled.div`
    width: 1088px;
    height: 589px;
    margin-left:48px ;
    background: #FFFFFF;
    border: 1px solid rgba(164, 167, 183, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
    overflow: scroll;
`

export default People