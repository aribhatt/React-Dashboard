import React, { Component } from 'react';
import { BrowserRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Downloads from './pages/Downloads';
import User from './pages/User';
import Audience from './pages/Audience';
import Reports from './pages/Reports';
import Revenue from './pages/Revenue';
import Ratings from './pages/Ratings';

class DashboardContent extends Component{
   render(){
     return(
       <div className='dashboard-content-container'>
         <Switch>
            <Route exact path='/' component={User}/>
            <Route path='/users' component={User}/>
            <Route path='/downloads' component={Downloads}/>
            <Route path='/ratings' component={Ratings}/>
            <Route path='/insight' component={Audience}/>
            <Route path='/crash' component={Reports}/>
            <Route path='/revenue' component={Revenue}/>
         </Switch>
       </div>
     );
   }
 }
 export default DashboardContent;
