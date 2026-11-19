
const features = [
  {
    icon: "fa-solid fa-trophy",
    title: "Expert Instructors",
    text: "Learn from experienced industry professionals."
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Quality Courses",
    text: "Access high-quality learning materials."
  },
  {
    icon: "fa-solid fa-users",
    title: "Flexible Learning",
    text: "Learn anytime and anywhere."
  }
];

function WhyChooseUs() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose LearnHub?
      </h2>

      <div className="grid md:grid-cols-3 gap-7">

        {features.map((item) => (
          <div
            key={item.title}
            className="p-8 border border-gray-500 rounded-2xl text-center hover:shadow-xl transition"
          >

            {/* Font Awesome Icon */}
            <div className="bg-indigo-50 text-indigo-600 p-5 rounded-full w-fit mx-auto">
              <i className={`${item.icon} text-3xl`}></i>
            </div>

            <h3 className="font-bold text-xl mt-5">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-3">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default WhyChooseUs;
