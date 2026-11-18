import { useAuth } from "../context/AuthContext";
function Hero() {
    const { query, setQuery, submitSearch} = useAuth();
  return (
    <section className="bg-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="text-indigo-600 font-semibold">
            Welcome to LearnHub
          </span>

          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Learn Skills.
            <span className="text-indigo-600"> Build Your Future.</span>
          </h1>

          <p className="text-gray-600 mt-6 leading-7">
            Discover expert-led courses and develop skills
            that help you achieve your career goals.
          </p>

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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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

        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
          alt="Students learning"
          className="rounded-3xl shadow-xl w-full h-80 object-cover"
        />

      </div>
    </section>
  );
}

export default Hero;
