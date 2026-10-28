import { useAuth } from "../context/AuthContext";
import {Link} from "react-router-dom";
export default function Navbar() {
  const { query, setQuery, submitSearch, user, logout } = useAuth();

  return (
    <header className="border-t border-gray-200 bg-white font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1c1d1f]">
      <div className="mx-auto flex max-w-[1620px] flex-wrap items-center gap-x-5 gap-y-4 px-4 py-3.5 md:flex-nowrap md:gap-x-12 md:px-6 md:py-5">
        <Link
          to="/"
          aria-label="LearnHub home"
          className={`flex shrink-0 items-center gap-3.5 no-underline `}
        >
          <span className="grid h-[46px] w-[46px] place-items-center rounded-[10px] bg-[#a435f0] text-white">
            <span className="text-3xl font-extrabold leading-none" aria-hidden="true">
            <i className="fa-solid fa-graduation-cap"></i>
            </span>
          </span>
          <span className="text-[22px] font-medium tracking-tight sm:text-[28px]">
            Learn<span className="font-semibold text-[#a435f0]">Hub</span>
          </span>
        </Link>

   
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

      
        <nav
          aria-label="Primary"
          className="ml-auto flex items-center gap-3.5 text-base tracking-tight sm:gap-6 sm:text-lg"
        >
          <Link to="/courses" className={`hover:text-[#a435f0] `}>
            Courses
          </Link>
          {user ? (
            <button
              type="button"
              onClick={logout}
              className={`cursor-pointer hover:text-[#a435f0] `}
            >
              Log out
            </button>
          ) : (
            <>
              <Link to="/login" className={`hover:text-[#a435f0] `}>
                Log in
              </Link>
              <Link
                to="/signup"
                className={`rounded-[5px] bg-[#a435f0] px-3 py-1.5 font-medium text-white hover:bg-[#8a22d4] sm:px-5 sm:py-[7px] `}
              >
                Sign up free
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
