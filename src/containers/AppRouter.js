import React from 'react'
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import {Route,Switch,useLocation} from 'react-router-dom';
import { Navbar } from "../components/Navbar";

const AppRouter = () => {
const location = useLocation()
console.log(location);
    return (
        <div>
            {location.pathname!=='/login' && <Navbar/>}
            <Switch>
<Route component={Login} path='/login' />
<Route component={Home} path='/home' />
</Switch>
</div>
    )
}
export default AppRouter;

