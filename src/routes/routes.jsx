import React from 'react';
import {Switch,Route} from 'react-router-dom'
import styled from 'styled-components'

import CenterView from '../components/Overview.js/CenterView';
import StarShip from '../components/Overview.js/StarShip';
import People from '../components/Overview.js/People';
import Species from '../components/Overview.js/Species';
import SideView from '../components/Overview.js/SideView';
import Header from '../components/Overview.js/Header';


export const Routes = () => {
  return (
    <>  
        <Frame>
            <SideView/>
            <Main>
                <Header/>
                <Switch>
                    {/* <Route><CenterView /></Route> */}
                    <Route exact path="/centerview"  component={CenterView}/>
                    <Route exact path="/starship"  component={StarShip}/>
                    <Route exact path="/people" component={People}/>
                    <Route exact path="/species" component={Species}/>
                </Switch>
            </Main>
        </Frame>        
    </>
    )
}

const Frame = styled.div`
 display: flex ;
 justify-content: space-between ;
`

const Main = styled.div`
    
`
