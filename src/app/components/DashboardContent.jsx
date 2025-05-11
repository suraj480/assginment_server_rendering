export default function DashboardContent({ data }) {
  return (
    <div>
      {" "}
      <h1>SSG:- server side generation</h1> <h2>Welcome, {data.name}</h2>{" "}
      <h4>Your Enrolled Courses:</h4>{" "}
      <ul>
        {" "}
        {data.enrolledCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}{" "}
      </ul>
       
    </div>
  );
}
