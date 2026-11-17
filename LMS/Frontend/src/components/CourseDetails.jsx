
import { useParams, Link } from "react-router-dom";
import {courses} from "@/data/courses";

function CourseDetails() {

  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold">Course Not Found</h2>
        <Link to="/courses" className="text-indigo-600 mt-5 inline-block">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

    
      <section className="bg-[#17172E] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-indigo-300 font-semibold">
              {course.category}
            </span>

            <h1 className="text-4xl font-bold mt-4 leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-300 mt-5 leading-7">
              {course.description}
            </p>

            <p className="mt-6">
              Instructor: <strong>{course.instructor}</strong>
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-300">
              <span><i className="fas fa-star text-yellow-400"/> {course.rating}</span>
              <span><i className="fas fa-users"/> {course.students} Students</span>
              <span><i className="fas fa-clock"/> {course.duration}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl text-gray-900">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold text-indigo-600">
                  ₹{course.price}
                </h2>

                <span className="text-gray-400 line-through">
                  ₹{course.oldPrice}
                </span>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-indigo-700">
                Enroll Now
              </button>

              <p className="text-gray-500 text-center text-sm mt-4">
                Full lifetime access to course materials
              </p>
            </div>
          </div>

        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        <div className="md:col-span-2">

          <div className="bg-white rounded-xl p-7 border">
            <h2 className="text-2xl font-bold">
              What You Will Learn
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 mt-7">
              {course.whatYouWillLearn.map((item) => (
                <p key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-green-500 shrink-0" size={20}/>
                  {item}
                </p>
              ))}
            </div>
          </div>

          
          <div className="bg-white rounded-xl p-7 border mt-8">
            <h2 className="text-2xl font-bold">
              Course Curriculum
            </h2>

            <p className="text-gray-500 mt-2">
              {course.curriculum.length} Sections
            </p>

            <div className="mt-6 space-y-4">
              {course.curriculum.map((section, index) => (
                <details key={section.title} className="border rounded-lg p-5">
                  <summary className="font-semibold cursor-pointer">
                    {index + 1}. {section.title}
                  </summary>

                  <div className="mt-4 space-y-3">
                    {section.lessons.map((lesson) => (
                      <p key={lesson} className="text-gray-500 text-sm">
                        <BookOpen size={16} className="inline mr-2"/>
                        {lesson}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>

        <aside className="bg-white rounded-xl border p-6 h-fit">
          <h3 className="font-bold text-xl">Course Information</h3>

          <div className="space-y-5 mt-6 text-gray-600">
            <p>Level: <strong>{course.level}</strong></p>
            <p>Duration: <strong>{course.duration}</strong></p>
            <p>Students: <strong>{course.students}</strong></p>
            <p>Instructor: <strong>{course.instructor}</strong></p>
            <p>Rating: <strong>{course.rating}/5</strong></p>
          </div>

          <Link
            to="/courses"
            className="block text-center text-indigo-600 mt-8 font-semibold"
          >
            ← Browse More Courses
          </Link>
        </aside>

      </section>

    </div>
  );
}

export default CourseDetails;
