import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpPageStyle.css'
import { AppConstant } from '../constant/AppConstant';

function SignUpPage() {
    const navigate = useNavigate();
    const [student, setStudentData] = useState({
        firstName: '',
        lastName: '',
        rollNumber: '',
        dateOfBirth: '',
        class: '',
        bloodGroup: '',
        address: ''
    })

    const getStudentDetail = async (event: any) => {
        event.preventDefault();
        await axios.post(`${AppConstant.URL}${AppConstant.RegisterStudentDetails}`, student)
            .then((response: any) => console.log(response))
            .catch((error) => console.log(error))

        navigate('/');
    }

    return (
        <>
            <div className="background">
                <div className="shape-signup"></div>
                <div className="shape-signup"></div>
            </div>
            <form className='signup-form' onSubmit={(e) => getStudentDetail(e)}>
                <h3>SignUp Here</h3>

                <label className="username">Firstname</label>
                <input type="text" placeholder="Firstname"
                    onChange={(e: any) => setStudentData({
                        ...student, firstName: e.target.value
                    })} />

                <label className="password">Lastname</label>
                <input type="text" placeholder="Lastname"
                    onChange={(e: any) => setStudentData({
                        ...student, lastName: e.target.value
                    })} />

                <label className="username">Roll Number</label>
                <input type="text" placeholder="Roll Number"
                    onChange={(e: any) => setStudentData({
                        ...student, rollNumber: e.target.value
                    })} />

                <label className="username">Date of Birth</label>
                <input type="text" placeholder="DD/MM/YYYY"
                    onChange={(e: any) => setStudentData({
                        ...student, dateOfBirth: e.target.value
                    })} />

                <label className="username">Class</label>
                <input type="text" placeholder="Class name"
                    onChange={(e: any) => setStudentData({
                        ...student, class: e.target.value
                    })} />

                <label className="username">Blood Group</label>
                <input type="text" placeholder="Blood group"
                    onChange={(e: any) => setStudentData({
                        ...student, bloodGroup: e.target.value
                    })} />

                <label className="username">Address</label>
                <input type="text" placeholder="City name"
                    onChange={(e: any) => setStudentData({
                        ...student, address: e.target.value
                    })} />

                <button className='button' type='submit'>SignUp</button>
            </form>
        </>
    )
}

export default SignUpPage
