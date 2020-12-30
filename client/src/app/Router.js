import { Component } from "react";
import { BrowserRouter,Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" render={()=><h1>test</h1>} />
                <Route exact path="/home" component={MainPage} />
            </BrowserRouter>
        );
    }
}

export default Router;