import React from 'react'
import { Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
)

export default hot(module)(App)