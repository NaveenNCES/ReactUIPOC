import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpPageStyle.css'
import { AppConstant } from '../constant/AppConstant';
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

function SignUpPage() {
    const navigate = useNavigate();
    const [errorState, setErrorState] = useState({
        firstName: '',
        lastName: '',
        rollNumber: '',
        dateOfBirth: '',
        class: '',
        bloodGroup: '',
        address: ''
    });

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
        validation(student);
        if (errorState.firstName || errorState.lastName || errorState.rollNumber || errorState.address || errorState.bloodGroup || errorState.class || errorState.dateOfBirth) {
            setErrorState({ ...errorState });
            return;
        }
        await axios.post(`${AppConstant.URL}${AppConstant.RegisterStudentDetails}`, student)
            .then((response: any) => console.log(response))
            .catch((error) => console.log(error))

        navigate('/');
    }

    const validation = (student: any) => {
        if (!student.firstName) {
            errorState.firstName = "Please enter firstname";
        }
        if (!student.lastName) {
            errorState.lastName = "Please enter lastname";
        }

        if (!student.rollNumber) {
            errorState.rollNumber = "Please enter rollNumber";
        }

        if (!student.dateOfBirth) {
            errorState.dateOfBirth = "Please enter dateOfBirth";
        }

        if (!student.class) {
            errorState.class = "Please enter class";
        }

        if (!student.bloodGroup) {
            errorState.bloodGroup = "Please enter bloodGroup";
        }

        if (!student.address) {
            errorState.address = "Please enter address";
        }
    }

    return (
        <>
            <div className="background">
                <div className="shape-signup"></div>
                <div className="shape-signup"></div>
            </div>
            <form className='signup-form' name='myForm' onSubmit={(e) => getStudentDetail(e)}>
                <h3>SignUp Here</h3>

                <label className="username">Firstname</label>
                <input type="text" placeholder="Firstname"
                    onChange={(e: any) => setStudentData({
                        ...student, firstName: e.target.value
                    })} />
                <label className="error">{errorState.firstName}</label>

                <label className="password">Lastname</label>
                <input type="text" placeholder="Lastname"
                    onChange={(e: any) => setStudentData({
                        ...student, lastName: e.target.value
                    })} />
                <label className="error">{errorState.lastName}</label>

                <label className="username">Roll Number</label>
                <input type="text" placeholder="Roll Number"
                    onChange={(e: any) => setStudentData({
                        ...student, rollNumber: e.target.value
                    })} />
                <label className="error">{errorState.rollNumber}</label>

                <label className="username">Date of Birth</label>
                <input type="text" placeholder="DD/MM/YYYY"
                    onChange={(e: any) => setStudentData({
                        ...student, dateOfBirth: e.target.value
                    })} />
                <label className="error">{errorState.dateOfBirth}</label>

                <label className="username">Class</label>
                <input type="text" placeholder="Class name"
                    onChange={(e: any) => setStudentData({
                        ...student, class: e.target.value
                    })} />
                <label className="error">{errorState.class}</label>

                <label className="username">Blood Group</label>
                <input type="text" placeholder="Blood group"
                    onChange={(e: any) => setStudentData({
                        ...student, bloodGroup: e.target.value
                    })} />
                <label className="error">{errorState.bloodGroup}</label>

                <label className="username">Address</label>
                <input type="text" placeholder="City name"
                    onChange={(e: any) => setStudentData({
                        ...student, address: e.target.value
                    })} />
                <label className="error">{errorState.address}</label>

                <button className='button' type='submit'>SignUp</button>
            </form>
        </>
    )
}

export default SignUpPage
