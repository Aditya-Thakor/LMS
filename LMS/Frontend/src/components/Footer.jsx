import { Link } from "react-router-dom";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "Web Dev", href: "/courses/web-dev" },
      { label: "Data Science", href: "/courses/data-science" },
      { label: "Free Courses", href: "/courses/free" },
    ],
  },
  {
    title: "Teach",
    links: [
      { label: "Become Instructor", href: "/teach" },
      { label: "Instructor Login", href: "/instructor/login" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Admin", href: "/admin" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "fa-facebook",
  },
  {
    label: "X",
    href: "https://x.com",
    icon: "fa-x-twitter",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "fa-linkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "fa-instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1d1f] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-white">
      <div className="mx-auto max-w-[1620px] px-6 pb-8 pt-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-extrabold leading-none" aria-hidden="true">
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
              <span className="text-xl font-semibold tracking-tight">
                Learn<span className="text-[#a435f0]">Hub</span>
              </span>
            </Link>

            <p className="mt-6 max-w-[500px] text-lg leading-[26px]">
              A learning platform where students discover great courses and
              instructors share their expertise.
            </p>

            <ul className="mt-6 flex gap-5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-[50px] w-[50px] place-items-center rounded-full bg-[#2d2e32] text-[#d0d0da] transition-colors hover:bg-[#a435f0] hover:text-white"
                  >
                    <i className={`fa-brands ${social.icon} text-2xl`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xl font-semibold text-[#a6a6b8]">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-[18px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[17px] text-[#b4b4c2] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-[#2f3033] pt-9">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 grid h-[55px] w-[55px] place-items-center rounded-full bg-[#a435f0] text-white shadow-lg transition-colors hover:bg-[#8a22d4]"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </footer>
  );
}
