import { Button } from '@material-ui/core'
import React ,{useState} from 'react'
import "./Banner.css"
import Search from './Search'
import {useHistory} from "react-router-dom"

function Banner() {
    const history = useHistory();

    const [showSearch,setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick ={()=>{setShowSearch(!showSearch)}} className="button_searchButton" variant="outlined">{showSearch ? "HIDE" : "Book_now" }</Button>
            </div>
            <div className="banner_info">
                <h2>Get down and stretch your imagination</h2>
                <h5>plan a different kind of gateway to uncover the hidden gems near you.</h5>
               
            </div>
        </div>
    )
}

export default Banner
