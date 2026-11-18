import { categories } from "../data/categories";

function Categories() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Explore Categories
        </h2>

        <p className="text-gray-500 mt-3">
          Choose your learning path
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((item) => (
          <div
            key={item.name}
            className="p-6 border rounded-2xl hover:shadow-lg transition"
          >
            <div className="bg-indigo-50 text-indigo-600 p-4 rounded-xl w-fit">

              {/* Correct Font Awesome Icon */}
              <i className={`${item.icon} text-2xl`}></i>

            </div>

            <h3 className="font-bold mt-4">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {item.count}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;