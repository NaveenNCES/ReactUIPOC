import NavBar from '../NavBar/NavBar';
import './HomePage-Style.css'
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function HomePage() {
  let data: any = sessionStorage.getItem("student");
  let student = JSON.parse(data);
  const studentMarks = [
    {
      subject: "Maths",
      mark: 70
    },
    {
      subject: "English",
      mark: 80
    },
    {
      subject: "Science",
      mark: 65
    },
    {
      subject: "Social",
      mark: 75
    }
  ]

  var studentMarkList = studentMarks.map(x =>
    <div className='mark-list'>
      <div>{x.subject}</div>
      <div className='progress-nav'>
        <Progress.Circle percent={x.mark} />
      </div>
    </div>)

  return (
    <>
      <NavBar studentName={`${student?.firstName}!`} />
      <div className='progress-circle'>
        <div className='item-align'>{studentMarkList}</div>
        <div className='display-flex'>
          <div className='display-details'>
            <div className='details-align'>
              <div><b className='align-text'>Name: </b></div>
              <div><b className='align-text'>Blood Group: </b></div>
              <div><b>Class: </b></div>
              <div><b>Roll Number: </b></div>
              <div><b>Date of birth: </b></div>
              <div><b>Address: </b></div>
            </div>
            <div className='api-details-align'>
              <div>{student?.firstName} {student?.lastName}</div>
              <div>{student?.bloodGroup}</div>
              <div>{student?.class}</div>
              <div>{student?.rollNumber}</div>
              <div>{student?.dateOfBirth}</div>
              <div>{student?.address}</div>
            </div>
          </div>
          <div className='guide-link-align'>
            <a className='link-style' href='https://drive.google.com/file/d/1YM-AbfIkjojZZZrB34wqPHXCu_AUXkEd/view'>English Guide</a>
            <a className='link-style' href='https://drive.google.com/file/d/1m0q-ZPykuVW4AMzKcfui6ooSp8T8nx9r/view'>Maths Guide</a>
            <a className='link-style' href='https://drive.google.com/file/d/1XOtYRVw8PUHnbzgXP9UgKmnCPAmLG0cJ/view'>Science Guide</a>
            <a className='link-style' href='https://drive.google.com/file/d/1tXpjp2Bnldqj9b32AAzR-wAYbPdQ0FoC/view'>Social Guide</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
