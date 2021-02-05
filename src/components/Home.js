import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                <Link to="/NavBar1">Nav1 </Link>
                </li>
                <li>
                <Link to="/NavBar2">Nav2 </Link>
                </li>
                <li>
                <Link to="/NavBar3">Nav3 </Link>
                </li>
                <li>
                <Link to="/NavBar4">Nav4 </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home
