import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="main">
                <p> Welcome Username ! </p>
                <p>A place where u can </p>
            </div>

            <div className="cards">
                <div className="card create">
                    Create a group session
                </div>
                <div className="card join">
                    Join a group session
                </div>
            </div>
        </div>
    )
}

export default Home