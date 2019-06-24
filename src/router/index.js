import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Spike from './../page/spike'
import Detail from './../page/detail'

function AppRouter() {
    return (
        <Router>
                <Route path="/" component={Spike} exact/>
                <Route path="/detail" component={Detail} />
        </Router>
    );
}

export default AppRouter;