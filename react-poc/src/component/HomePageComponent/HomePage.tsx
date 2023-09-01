import './HomePage-Style.css'

function HomePage() {
    let data: any = sessionStorage.getItem("student");
    let student = JSON.parse(data);
  return (
    <div className="body">
      <h1>Hello {student.firstName}</h1>
    </div>
  )
}

export default HomePage
