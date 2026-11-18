
const stats = [
  { number: "10K+", label: "Students" },
  { number: "500+", label: "Courses" },
  { number: "50+", label: "Instructors" },
  { number: "95%", label: "Satisfaction" }
];

function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.label} className="text-center p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-indigo-600">
              {item.number}
            </h2>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
