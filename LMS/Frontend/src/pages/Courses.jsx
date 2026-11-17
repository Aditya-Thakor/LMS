
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Programming",
    "Design",
    "Marketing",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-12">

      
        <div className="mb-10">
          <p className="text-indigo-600 font-semibold mb-2">
            EXPLORE OUR COURSES
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Next Course
          </h1>

          <p className="text-gray-500 max-w-2xl">
            Learn new skills, improve your knowledge and achieve
            your career goals with our expert-led courses.
          </p>
        </div>

     
       <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            submitSearch();
          }}
          className="order-3 flex h-[47px] w-full overflow-hidden rounded-md border border-[#d1d2e0] bg-white focus-within:border-[#a435f0] focus-within:ring-[3px] focus-within:ring-[#a435f0]/20 md:order-none md:max-w-[710px] md:flex-1"
        >
          <span className="flex items-center pl-3.5 pr-2 text-[#3c3d4a]" aria-hidden="true">
           <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for anything..."
            aria-label="Search for anything"
            className="min-w-0 flex-1 bg-transparent text-lg tracking-tight outline-none placeholder:text-[#4b4c5a] [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="submit"
            className={`cursor-pointer bg-[#a435f0] px-[15px] text-lg font-medium text-white hover:bg-[#8a22d4] `}
          >
            Search
          </button>
        </form>

       
        <div className="flex flex-wrap gap-3 mb-8 mt-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                category === item
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-indigo-500 hover:text-indigo-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            All Courses
          </h2>

          <p className="text-gray-500 text-sm">
            Showing {filteredCourses.length} courses
          </p>
        </div>

       
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border">
            <h3 className="text-xl font-bold text-gray-800">
              No courses found
            </h3>
            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 text-indigo-600 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}

      </main>
    </>
  );
}
