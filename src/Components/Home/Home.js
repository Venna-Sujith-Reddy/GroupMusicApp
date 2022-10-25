import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="main">
                <h1> Welcome Username ! </h1>
                <p>A place where u can create or join group music sessions for free</p>
            </div>


            <div className="cards">
                <Link to="/create-session"><div className="card create">
                    Create a group session
                </div></Link>
                <Link to="/join-session"><div className="card join">
                    Join a group session
                </div></Link>
            </div>
        </div>
    )
}

export default Home