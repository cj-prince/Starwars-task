import React from 'react';
import {Switch,Route} from 'react-router-dom'
import styled from 'styled-components'

import CenterView from '../components/Overview.js/CenterView';
import StarShip from '../components/Overview.js/StarShip';
import People from '../components/Overview.js/People';
import Species from '../components/Overview.js/Species';
import SideView from '../components/Overview.js/SideView';
import Header from '../components/Overview.js/Header';
import OverviewPage from '../components/Pages/OverviewPage';
import StarwarsPage from '../components/Pages/StarwarsPage';
import PeoplePage from '../components/Pages/PeoplePage';
import SpeciesPage from '../components/Pages/SpeciesPage';

export const Routes = () => {
  return (
    <>  
        <Frame>
            <SideView/>
            <Main>
                <Header/>
                <Switch>
                    <Route exact path="/centerview/:id"  component={OverviewPage}/>
                    <Route exact path="/centerview"  component={CenterView}/>
                    <Route exact path="/starship/:id"  component={StarwarsPage}/>
                    <Route exact path="/starship"  component={StarShip}/>
                    <Route exact path="/people/:id" component={PeoplePage}/>
                    <Route exact path="/people" component={People}/>
                    <Route exact path="/species/:id" component={SpeciesPage}/>
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
