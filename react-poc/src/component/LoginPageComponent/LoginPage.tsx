import { useState } from 'react'
import './LoginPage-Style.css'
import axios from 'axios'
import { AppConstant } from '../constant/AppConstant'
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
    })

    const getStudentDetail = async (event: any) => {
        event.preventDefault();
        await axios.post(`${AppConstant.URL}${AppConstant.GetSelectedStudentDetails}`, student)
            .then((response: any) => uservalidation(response))
            .catch()
    }

    const uservalidation = async (response: any) => {
        if (response.data != null) {
            navigate('/home')
            console.log(response.data)
            sessionStorage.setItem("student", JSON.stringify(response.data))
        }
    }

    return (
        <>
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

                <label className="form-label">Date Of Birth</label>
                <input type="password" placeholder="DD/MM/YYYY" id="password"
                    onChange={(e: any) => setStudentData({
                        ...student, dateOfBirth: e.target.value
                    })} />

                <button className='button' type='submit'>Log In</button>
                <div>
                    <label>Resgister new student <span><Link to={'/signup'}>Click here.</Link></span></label>
                </div>
            </form>
        </>
    )
}

export default LoginPage
