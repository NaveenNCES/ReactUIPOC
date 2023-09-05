import React from 'react'
import './NavBarStyle.css'
import { Link } from 'react-router-dom';

function NavBar(props: any) {
    let isLoggedIn;
    if (props.studentName) {
        isLoggedIn = <Link to={'/'} className='nav-link-log'>Logout</Link>;
    }
    else {
        isLoggedIn = 'Login'
    }

    return (
        <div className='nav-body'>
            <div className='nav-child-div'>Home
                <span className='nav-right-link'>Welcome {props.studentName} <span>{isLoggedIn}</span></span>
            </div>
        </div>
    )
}

export default NavBar
