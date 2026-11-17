
export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      <div className="p-5">

        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">
            {course.level}
          </span>

          <span className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
            <i class="fa-solid fa-star"></i>
            {course.rating}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-14">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          By {course.instructor}
        </p>

        <div className="flex gap-4 text-xs text-gray-500 mb-5">
          <span className="flex items-center gap-1">
            <i class="fa-solid fa-clock"></i>{course.duration}
          </span>
          <span className="flex items-center gap-1">
         <i class="fa-solid fa-users"></i>{course.students}
          </span>
        </div>

        <div className="border-t pt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            ₹{course.price}
          </span>

          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
            View Course <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </div>
    </div>
  );
}
