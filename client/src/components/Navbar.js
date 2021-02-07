import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className = 'navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to ='/' className ='navbar-brand'>Contonso College Registration</Link>
                <div className = 'collapse navbar-collapse'>
                    <ul  className = 'navbar-nav ml-auto'>
                        <li className = 'navbar-item'>
                            <Link to = '/' className = 'nav-link'>Teachers</Link>
                        </li>
                        <li className = 'navbar-item'>
                            <Link to = '/create' className = 'nav-link'>Register Teacher</Link>
                        </li>
                        <li className = 'navbar-item'>
                            <Link to = '/student' className = 'nav-link'>Register Student</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}