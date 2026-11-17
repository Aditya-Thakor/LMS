import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();

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
            <i className="fa-solid fa-graduation-cap" />
            </span>
          </span>
          <span className="text-[22px] font-medium tracking-tight sm:text-[28px]">
            Learn<span className="font-semibold text-[#a435f0]">Hub</span>
          </span>
        </Link>
      
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
                to="/register"
                className="rounded-[5px] bg-[#a435f0] px-3 py-1.5 font-medium text-white hover:bg-[#8a22d4] sm:px-5 sm:py-[7px]"
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
