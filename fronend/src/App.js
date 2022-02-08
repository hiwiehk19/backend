import React,{Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Fallback from './Fallback';
import Login from "./Login"
import "./AdminRegister.css"
import Rsgister from "./Rsgister"


import { useStateValue } from './StateProvider'

const Header = React.lazy(()=>import('./Header'));
const Home = React.lazy(()=>import('./Home')); 
const SearchPage = React.lazy(()=>import('./SearchPage'));
const Profile = React.lazy(()=>import('./Profile'));
const Bookings = React.lazy(()=>import('./Bookings'));
const Edituser = React.lazy(()=>import('./Edituser'));
const Order = React.lazy(()=>import('./Order'));


function App() {
  const [{isAuth}, dispatch] = useStateValue();




  return (
    <div className="app">

   
      <Router>
  
      
            
        <Switch>
              <Suspense fallback={<Fallback />} >

              <Route path="/search/:startdate/:enddate/:persons">   
              <div><Header /><SearchPage />     </div> </Route>
              <Route path="/edituser">     
              {isAuth ? ( <div><Header /><Edituser /></div>) : ( <Redirect to="login" />) }</Route> 
              <Route path="/login">       <Login /></Route>
              <Route path="/user_register"><Rsgister /></Route>
              <Route path="/profile">{isAuth ? ( <div><Header /><Profile />     </div>) : ( <Redirect to="login" />) }</Route>
              <Route path="/bookings">{isAuth ? ( <div><Header /><Bookings /></div>) : ( <Redirect to="login" />) }</Route>
              <Route path="/checkout" ><Header />       <Order />      </Route>
              <Route path="/" exact><Header />       <Home />     </Route>
        
     
       </Suspense>

        </Switch>
    </Router>
    

    </div>
  );
}

export default App;
