import { Component } from "react";
import { BrowserRouter,Route } from 'react-router-dom';
class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" render={()=><h1>test</h1>} />
            </BrowserRouter>
        );
    }
}

export default Router;