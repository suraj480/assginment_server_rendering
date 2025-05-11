//SSG
export const dynamic = "error";
import { getCourses } from "../lib/getCourses";
import CourseCard from "../components/CourseCard";
export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <div>
      {" "}
      <h1>SSR:- server side rendering</h1>
      <h2>Courses</h2>{" "}
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
