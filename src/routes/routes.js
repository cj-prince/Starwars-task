import React from 'react';
import {Switch,Route} from 'react-router-dom'
import styled from 'styled-components'

import CenterView from '../components/Overview/CenterView';
import StarShip from '../components/Overview/StarShip';
import People from '../components/Overview/People';
import Species from '../components/Overview/Species';
import SideView from '../components/Overview/SideView';
import Header from '../components/Overview/Header';
import OverviewPage from '../components/Pages/OverviewPage';
import StarwarsPage from '../components/Pages/StarwarsPage';
import PeoplePage from '../components/Pages/PeoplePage';
import SpeciesPage from '../components/Pages/SpeciesPage';
import My404Component from '../components/Overview/My404Component';

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
                    <Route path='*' exact={true} component={My404Component} />
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
