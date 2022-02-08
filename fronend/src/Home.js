
import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Card from "./Card"
import dance from './images/dance.jpg';
import pool from './images/pool.jpg';
import traditionalfood from './images/traditionalfood.jpg';
//import dance from './images/dance.jpg';


function Home() {
    return (
        <div className="home">
       
            <Banner />
            <div className='home_section'>
            <Card
                img src={dance} 
                title="Cultural Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                 img src={pool}
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                 img src={traditionalfood}
                title="Authentic experiences"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home_section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="ETB130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Double delux room"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="ETB350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="ETB70/night"
            />
            </div>

        </div>
    )
}

export default React.memo(Home)
