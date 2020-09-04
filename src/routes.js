import React from "react"
import {Route, BrowserRouter, Switch} from "react-router-dom"

import Home from "./pages/Home"
import Project from "./pages/Project"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={Project} path="/project/:type/:id"/>
             </Switch>
         </BrowserRouter>
    )
}

export default Routes
