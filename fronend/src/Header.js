import React from 'react'
import "./Header.css"
import "./Banner.js"
import { HiUser , HiOutlineShoppingBag} from 'react-icons/hi';

import { FaHome } from 'react-icons/fa';

import {AiOutlineLogout} from "react-icons/ai"


import {Link, useHistory} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'
import { Button } from '@material-ui/core'
import {useState} from 'react'
import "./Banner.css"
import Search from './Search'
import img from './new-logo.png';



function Header() {
    const history = useHistory();

    const [showSearch,setShowSearch] = useState(false)
    
    const [{user}, dispatch] = useStateValue();
    
    var logout = ()=>{
        localStorage.clear();
        dispatch({
            type:actionTypes.LOGOUT,
        })
    }

    return (
        <div className="header">
            <Link to="/">
            <div>
             <img src={img} height={80} width={150} />
        </div>
            </Link>
           
            <div className="header_right">
            <div className="item under" onClick={()=>{history.push("/")}}>
                  <FaHome style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} />
                  <span className="icon_desc">Home</span>
              </div>
              <div className="item " onClick={()=>{history.push("/profile")}}>
                  <HiUser style={{fontSize:"16px",color:"grey",marginBottom:"5px"}}/>
                  <span className="icon_desc" >Profile</span>
              </div>
             {/*  <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick ={()=>{setShowSearch(!showSearch)}}  >{showSearch ? "HIDE" : "Reserve Now" }</Button>
            </div> */}
              <div className="item" onClick={()=>{history.push("/bookings")}}>
                  <HiOutlineShoppingBag style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} />
                
                  <span className="icon_desc">Bookings</span>
              </div>
            
             
              
              <div className="item" >
                  <AiOutlineLogout style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} />
                
                 {user ? <span onClick={logout} className="icon_desc">Logout</span> : <Link to="login">Login</Link>}
              </div>
            
            </div>
        </div>
       
    )
}

export default React.memo(Header)
