import { useState } from 'react';
import './LoginPage-Style.css';
import axios from 'axios';
import { AppConstant } from '../constant/AppConstant';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [student, setStudentData] = useState({
        firstName: '',
        lastName: '',
        rollNumber: '',
        dateOfBirth: '',
        class: '',
        bloodGroup: '',
        address: ''
    });

    const [errorState, setErrorState] = useState({
        rollNumber: '',
        dateOfBirth: ''
    });

    const getStudentDetail = async (event: any) => {
        event.preventDefault();
        validation(student);
        if (errorState.rollNumber || errorState.dateOfBirth) {
            setErrorState({ ...errorState });
            return;
        }
        await axios.post(`${AppConstant.URL}${AppConstant.GetSelectedStudentDetails}`, student)
            .then((response: any) => uservalidation(response))
            .catch()
    }

    const uservalidation = async (response: any) => {
        if (response.data != null) {
            navigate('/home')
            //console.log(response.data)
            sessionStorage.setItem("student", JSON.stringify(response.data))
        }
    }

    const validation = (student: any) => {
        /* Validation goes here */
        if (!student.rollNumber) {
            errorState.rollNumber = "Please enter rollNumber";
        }

        if (!student.dateOfBirth) {
            errorState.dateOfBirth = "Please enter dateOfBirth";
        }
    }

    const navigateToSignUpPage = () => {
        navigate('/signup')
    }

    return (
        <div>
            <div className="background">
                <div className="shape-login"></div>
                <div className="shape-login"></div>
            </div>
            <form className='login-form' onSubmit={(e) => getStudentDetail(e)}>
                <h3>Login Here</h3>

                <label className="form-label">Username</label>
                <input type="text" placeholder="RollNumber" id="username"
                    onChange={(e: any) => setStudentData({
                        ...student, rollNumber: e.target.value
                    })} />
                <label className='error'>{errorState.rollNumber}</label>

                <label className="form-label">Date Of Birth</label>
                <input type="password" placeholder="DD/MM/YYYY" id="password"
                    onChange={(e: any) => setStudentData({
                        ...student, dateOfBirth: e.target.value
                    })} />
                <label className='error'>{errorState.dateOfBirth}</label>

                <button data-testid='userLogin' className='button' type='submit'>Log In</button>
                <div>
                    <label>Resgister new student <span><label onClick={navigateToSignUpPage}>Click here.</label></span></label>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
