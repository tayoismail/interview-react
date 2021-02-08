import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className = 'navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to ='/' className ='navbar-brand'>Contonso College Registration</Link>
                <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>
                <div className = 'collapse navbar-collapse'>
                    <ul  className = 'navbar-nav ml-auto'>
                        <li className = 'navbar-item'>
                            <Link to = '/teacher' className = 'nav-link'>Teachers</Link>
                        </li>
                        <li className = 'navbar-item'>
                            <Link to = '/' className = 'nav-link'>Students</Link>
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