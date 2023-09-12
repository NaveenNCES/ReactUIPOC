import React from 'react'
import './NavBarStyle.css'
import { Link, useNavigate } from 'react-router-dom';

function NavBar(props: any) {
    let isLoggedIn;
    const navigate = useNavigate();
    
    const navigateToLoginPage = () =>{
        navigate('/')
    }

    if (props.studentName) {
        isLoggedIn = <label className='nav-link-log' onClick={navigateToLoginPage}>Logout</label>;
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
