import { useState } from 'react'
import './LoginPage-Style.css'
import axios from 'axios'
import { AppConstant } from '../constant/AppConstant'
import { useNavigate } from 'react-router-dom';

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
        await axios.post("http://localhost:22275/api/getSelectedStudentDetail", student)
            .then((response: any) =>uservalidation(response))
            .catch()        
    }

    const uservalidation = async (response: any) => {
        if(response.data != null){
            navigate('/home')
            console.log(response.data)
            sessionStorage.setItem("student", JSON.stringify(response.data))
        }   
    }

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={(e) =>getStudentDetail(e)}>
                <h3>Login Here</h3>

                <label className="username">Username</label>
                <input type="text" placeholder="RollNumber" id="username"
                    onChange={(e: any) => setStudentData({
                        ...student, rollNumber: e.target.value
                    })} />

                <label className="password">Date Of Birth</label>
                <input type="password" placeholder="DD/MM/YYYY" id="password"
                    onChange={(e: any) => setStudentData({
                        ...student, dateOfBirth: e.target.value
                    })} />

                <button className='button' type='submit'>Log In</button>
            </form>
        </>
    )
}

export default LoginPage
