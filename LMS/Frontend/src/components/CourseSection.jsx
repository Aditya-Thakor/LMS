
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";

function CourseSection() {
  return (
    <section id="courses" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">
          <h2 className="text-3xl font-bold">Popular Courses</h2>
          <p className="text-gray-500 mt-2">
            Learn from experienced instructors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CourseSection;
