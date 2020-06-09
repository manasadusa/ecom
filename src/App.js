import React, { Component } from 'react'
import Homepage from './components/Homepage'
import {Switch,Route} from 'react-router-dom'
import Shoppage from './components/Shopnow/Shoppage'
import Header from './components/header/Header'
import Register from './components/Register/Register'
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop'component={Shoppage}/>
                <Route path='/register' component={Register}/>
                </Switch>
                
                
            </div>
        )
    }
}
