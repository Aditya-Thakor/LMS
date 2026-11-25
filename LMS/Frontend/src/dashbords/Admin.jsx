
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


const initialCourses = [
  {
    id: 1,
    title: "Complete React JS Masterclass",
    instructor: "Jane Smith",
    category: "Web Development",
    price: 499,
    status: "Approved",
  },
  {
    id: 2,
    title: "Node JS Backend Development",
    instructor: "Bob Johnson",
    category: "Programming",
    price: 599,
    status: "Pending",
  },
  {
    id: 3,
    title: "MongoDB Complete Guide",
    instructor: "Jane Smith",
    category: "Database",
    price: 399,
    status: "Pending",
  },
];

const initialUsers = [
  { id: 1, name: "Trupti", email: "admin@lms.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@lms.com", role: "Instructor" },
  { id: 3, name: "Bob Johnson", email: "bob@lms.com", role: "Instructor" },
  { id: 4, name: "Rahul Patel", email: "rahul@gmail.com", role: "Student" },
  { id: 5, name: "Priya Shah", email: "priya@gmail.com", role: "Student" },
];

const initialCategories = [
  "Web Development",
  "Programming",
  "Database",
  "Design",
];

const initialCoupons = [
  { id: 1, code: "WELCOME20", discount: 20 },
  { id: 2, code: "LEARN10", discount: 10 },
];

const registrations = [
  { name: "Trupti", email: "admin@lms.com", role: "Admin", initial: "T" },
  { name: "Jane Smith", email: "jane@lms.com", role: "Instructor", initial: "J" },
  { name: "Bob Johnson", email: "bob@lms.com", role: "Instructor", initial: "B" },
];


const menuItems = [
  { name: "Dashboard", icon: "fa-solid fa-grip" },
  { name: "Courses", icon: "fa-solid fa-book-open" },
  { name: "Users", icon: "fa-solid fa-users" },
  { name: "Categories", icon: "fa-solid fa-tags" },
  { name: "Coupons", icon: "fa-solid fa-ticket" },
];


function AdminNavbar() {
  return (
    <header className="min-h-[72px] bg-white border-b flex flex-wrap items-center px-5 md:px-8 py-3 gap-4 justify-between">

      <Link to="/" className="flex items-center gap-2 shrink-0">
        <div className="bg-purple-600 text-white p-2.5 rounded-xl">
          <i className="fa-solid fa-graduation-cap text-xl" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Learn<span className="text-purple-600">Hub</span>
        </h1>
      </Link>

      

      <div className="flex items-center gap-3 md:gap-6">
        <Link to="/courses" className="hidden sm:block text-gray-800">
          Courses
        </Link>

        <span className="hidden md:block text-gray-800">
          Admin Panel
        </span>

        <div className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
            T
          </span>
          <span className="hidden sm:block">Trupti</span>
          <i className="fa-solid fa-chevron-down text-gray-500 text-xs" />
        </div>
      </div>
    </header>
  );
}

function AdminSidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {sidebarOpen && (
        <button
          aria-label="Close sidebar overlay"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 z-40 w-[280px] md:w-[297px] h-screen md:min-h-[calc(100vh-72px)] md:h-auto shrink-0 bg-[#1c1d1f] text-white p-7 flex flex-col transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mb-12">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2.5 rounded-xl">
              <i className="fa-solid fa-shield-halved text-xl" />
            </div>
            <h2 className="text-2xl font-bold">Admin</h2>
          </div>

          <button
            className="md:hidden text-xl"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <p className="text-gray-500 text-xs font-bold tracking-widest mb-3 ml-2">
          MANAGEMENT
        </p>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition text-left ${
                activeTab === item.name
                  ? "bg-[#3b244b] text-white"
                  : "text-gray-300 hover:bg-[#292a2d]"
              }`}
            >
              <i className={`${item.icon} w-5 text-center`} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <p className="text-gray-500 text-xs font-bold tracking-widest mt-10 mb-3 ml-2">
          ACCOUNT
        </p>

        <Link
          to="/"
          className="flex items-center gap-4 px-5 py-4 text-gray-300 hover:text-white"
        >
          <i className="fa-solid fa-house w-5 text-center" />
          View Site
        </Link>

        <Link
          to="/login"
          className="flex items-center gap-4 px-5 py-4 text-red-500 hover:text-red-400"
        >
          <i className="fa-solid fa-right-from-bracket w-5 text-center" />
          Logout
        </Link>
      </aside>
    </>
  );
}

function StatCard({ item }) {
  const colors = {
    blue: "bg-blue-100 text-blue-500",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-500",
    yellow: "bg-amber-100 text-amber-500",
    red: "bg-red-100 text-red-500",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-5 min-h-[110px] hover:shadow-md transition">
      <div className={`${colors[item.color]} p-4 rounded-2xl`}>
        <i className={`${item.icon} text-xl`} />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-gray-900">
          {item.value}
        </h3>
        <p className="text-gray-500">{item.title}</p>
      </div>
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-7">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
      <i className="fa-solid fa-folder-open text-3xl mb-3" />
      <p>{message}</p>
    </div>
  );
}

function PrimaryButton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold transition"
    >
      {children}
    </button>
  );
}


export default function Admin() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const [courses, setCourses] = useState(initialCourses);
  const [users, setUsers] = useState(initialUsers);
  const [categories, setCategories] = useState(initialCategories);
  const [coupons, setCoupons] = useState(initialCoupons);

  const [courseFormOpen, setCourseFormOpen] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [courseForm, setCourseForm] = useState({
    title: "",
    instructor: "",
    category: "Web Development",
    price: "",
  });

  const [newCategory, setNewCategory] = useState("");
  const [newCoupon, setNewCoupon] = useState("");
  const [newDiscount, setNewDiscount] = useState("10");

  const [message, setMessage] = useState("");

  const notify = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2500);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    setAppliedSearch(search.trim().toLowerCase());
  };

  const matchesSearch = (value) =>
    String(value).toLowerCase().includes(appliedSearch);

  const filteredCourses = useMemo(
    () =>
      courses.filter((course) =>
        [course.title, course.instructor, course.category, course.status]
          .some((value) => String(value).toLowerCase().includes(appliedSearch))
      ),
    [courses, appliedSearch]
  );

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        [user.name, user.email, user.role].some(matchesSearch)
      ),
    [users, appliedSearch]
  );

  const filteredCategories = categories.filter(matchesSearch);

  const filteredCoupons = coupons.filter((coupon) =>
    matchesSearch(coupon.code)
  );

  const stats = [
    {
      title: "Students",
      value: users.filter((u) => u.role === "Student").length,
      icon: "fa-solid fa-user-graduate",
      color: "blue",
    },
    {
      title: "Instructors",
      value: users.filter((u) => u.role === "Instructor").length,
      icon: "fa-solid fa-chalkboard-teacher",
      color: "purple",
    },
    {
      title: "Courses",
      value: courses.length,
      icon: "fa-solid fa-book-open",
      color: "green",
    },
    {
      title: "Enrollments",
      value: "14",
      icon: "fa-solid fa-user-check",
      color: "orange",
    },
    {
      title: "Revenue",
      value: "₹19,488",
      icon: "fa-solid fa-indian-rupee-sign",
      color: "yellow",
    },
    {
      title: "Reviews",
      value: "14",
      icon: "fa-solid fa-star",
      color: "red",
    },
    {
      title: "Lessons",
      value: "145",
      icon: "fa-solid fa-circle-play",
      color: "blue",
    },
    {
      title: "Pending",
      value: courses.filter((c) => c.status === "Pending").length,
      icon: "fa-solid fa-hourglass",
      color: "orange",
    },
  ];

 
  const openAddCourse = () => {
    setEditingCourseId(null);
    setCourseForm({
      title: "",
      instructor: "",
      category: categories[0] || "",
      price: "",
    });
    setCourseFormOpen(true);
  };

  const openEditCourse = (course) => {
    setEditingCourseId(course.id);
    setCourseForm({
      title: course.title,
      instructor: course.instructor,
      category: course.category,
      price: String(course.price),
    });
    setCourseFormOpen(true);
  };

  const saveCourse = (e) => {
    e.preventDefault();

    if (
      !courseForm.title.trim() ||
      !courseForm.instructor.trim() ||
      !courseForm.price ||
      Number(courseForm.price) < 0
    ) {
      notify("Please enter valid course details.");
      return;
    }

    if (editingCourseId) {
      setCourses((previous) =>
        previous.map((course) =>
          course.id === editingCourseId
            ? {
                ...course,
                ...courseForm,
                price: Number(courseForm.price),
              }
            : course
        )
      );
      notify("Course updated successfully!");
    } else {
      setCourses((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...courseForm,
          price: Number(courseForm.price),
          status: "Pending",
        },
      ]);
      notify("Course added successfully!");
    }

    setCourseFormOpen(false);
  };

  const updateCourseStatus = (id, status) => {
    setCourses((previous) =>
      previous.map((course) =>
        course.id === id ? { ...course, status } : course
      )
    );
    notify(`Course ${status.toLowerCase()} successfully!`);
  };

  const deleteCourse = (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    setCourses((previous) => previous.filter((course) => course.id !== id));
    notify("Course deleted successfully!");
  };

  const deleteUser = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    setUsers((previous) => previous.filter((user) => user.id !== id));
    notify("User deleted successfully!");
  };

  
  const addCategory = (e) => {
    e.preventDefault();
    const value = newCategory.trim();

    if (!value) return;

    if (categories.some((item) => item.toLowerCase() === value.toLowerCase())) {
      notify("Category already exists.");
      return;
    }

    setCategories((previous) => [...previous, value]);
    setNewCategory("");
    notify("Category added successfully!");
  };

  const deleteCategory = (category) => {
    if (
      courses.some((course) => course.category === category) &&
      !window.confirm("This category is used by courses. Delete it anyway?")
    ) {
      return;
    }

    if (!window.confirm("Delete this category?")) return;

    setCategories((previous) => previous.filter((item) => item !== category));
    notify("Category deleted successfully!");
  };


  const addCoupon = (e) => {
    e.preventDefault();
    const code = newCoupon.trim().toUpperCase();
    const discount = Number(newDiscount);

    if (!code || !Number.isFinite(discount) || discount < 1 || discount > 100) {
      notify("Enter a coupon and discount between 1 and 100.");
      return;
    }

    if (coupons.some((coupon) => coupon.code === code)) {
      notify("Coupon already exists.");
      return;
    }

    setCoupons((previous) => [
      ...previous,
      { id: Date.now(), code, discount },
    ]);

    setNewCoupon("");
    setNewDiscount("10");
    notify("Coupon created successfully!");
  };

  const deleteCoupon = (id) => {
    if (!window.confirm("Delete this coupon?")) return;

    setCoupons((previous) => previous.filter((coupon) => coupon.id !== id));
    notify("Coupon deleted successfully!");
  };

  const pendingCourses = courses.filter((course) => course.status === "Pending");

  return (
    <div className="min-h-screen bg-white">
      <AdminNavbar
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch} />

      <div className="flex min-h-[calc(100vh-72px)]">
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setAppliedSearch("");
            setSearch("");
          }}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 min-w-0 bg-white p-5 md:p-7">
          
          <button
            className="md:hidden mb-5 bg-[#1c1d1f] text-white px-4 py-2 rounded-lg"
            onClick={() => setSidebarOpen(true)}>
            <i className="fa-solid fa-bars mr-2" />
            Menu
          </button>

        
          {message && (
            <div className="bg-green-100 border border-green-300 text-green-800 rounded-lg p-3 mb-5">
              <i className="fa-solid fa-circle-check mr-2" />
              {message}
            </div>
          )}

        
          {activeTab === "Dashboard" && showWelcome && (
            <div className="bg-[#d1e7dd] border border-[#a3cfbb] text-[#0f5132] rounded-md p-5 flex items-center justify-between mb-5">
              <p>Welcome back, Trupti!</p>
              <button
                onClick={() => setShowWelcome(false)}
                aria-label="Close welcome message"
              >
                <i className="fa-solid fa-xmark text-xl" />
              </button>
            </div>
          )}

         
          {activeTab === "Dashboard" && (
            <>
              <SectionHeading
                title="Platform Dashboard"
                subtitle="Overview of LearnHub activity"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
                {stats.map((item) => (
                  <StatCard key={item.title} item={item} />
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
                <section>
                  <div className="flex justify-between items-center gap-2 mb-5">
                    <h2 className="text-xl md:text-2xl font-bold">
                      Courses Pending Review
                    </h2>

                    <button
                      onClick={() => setActiveTab("Courses")}
                      className="text-purple-600 hover:underline whitespace-nowrap"
                    >
                      View All →
                    </button>
                  </div>

                  {pendingCourses.length === 0 ? (
                    <div className="bg-[#d1e7dd] border border-[#a3cfbb] text-[#0f5132] rounded-md p-5 flex items-center gap-3">
                      <i className="fa-solid fa-circle-check text-lg" />
                      No courses pending review. All caught up!
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {pendingCourses.map((course) => (
                        <div
                          key={course.id}
                          className="border rounded-xl p-4"
                        >
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-gray-500 text-sm mt-1">
                            {course.instructor}
                          </p>
                          <div className="flex gap-2 mt-3">
                            <button
                              onClick={() =>
                                updateCourseStatus(course.id, "Approved")
                              }
                              className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-sm"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() =>
                                updateCourseStatus(course.id, "Rejected")
                              }
                              className="bg-red-100 text-red-700 px-3 py-1.5 rounded-lg text-sm"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                <section>
                  <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl md:text-2xl font-bold">
                      Recent Registrations
                    </h2>
                    <button
                      onClick={() => setActiveTab("Users")}
                      className="text-purple-600 hover:underline"
                    >
                      View All →
                    </button>
                  </div>

                  <div className="space-y-2">
                    {registrations.map((user) => (
                      <div
                        key={user.email}
                        className="border rounded-xl p-3 flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 shrink-0 bg-purple-600 text-white rounded-full flex items-center justify-center">
                            {user.initial}
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-gray-500 text-sm truncate">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs">
                          {user.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </>
          )}

          
          {activeTab === "Courses" && (
            <>
              <div className="flex flex-wrap justify-between items-center gap-3 mb-7">
                <SectionHeading
                  title="Course Management"
                  subtitle="Manage, review and organize all courses"
                />
                <PrimaryButton onClick={openAddCourse}>
                  <i className="fa-solid fa-plus mr-2" />
                  Add Course
                </PrimaryButton>
              </div>

              {courseFormOpen && (
                <form
                  onSubmit={saveCourse}
                  className="bg-white border rounded-xl p-5 mb-6 shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-4">
                    {editingCourseId ? "Edit Course" : "Add New Course"}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      value={courseForm.title}
                      onChange={(e) =>
                        setCourseForm({ ...courseForm, title: e.target.value })
                      }
                      placeholder="Course title"
                      className="border rounded-lg p-3"
                    />

                    <input
                      required
                      value={courseForm.instructor}
                      onChange={(e) =>
                        setCourseForm({
                          ...courseForm,
                          instructor: e.target.value,
                        })
                      }
                      placeholder="Instructor name"
                      className="border rounded-lg p-3"
                    />

                    <select
                      value={courseForm.category}
                      onChange={(e) =>
                        setCourseForm({
                          ...courseForm,
                          category: e.target.value,
                        })
                      }
                      className="border rounded-lg p-3"
                    >
                      {categories.map((category) => (
                        <option key={category}>{category}</option>
                      ))}
                    </select>

                    <input
                      required
                      type="number"
                      min="0"
                      value={courseForm.price}
                      onChange={(e) =>
                        setCourseForm({ ...courseForm, price: e.target.value })
                      }
                      placeholder="Course price"
                      className="border rounded-lg p-3"
                    />
                  </div>

                  <div className="flex gap-3 mt-5">
                    <PrimaryButton type="submit">
                      Save Course
                    </PrimaryButton>
                    <button
                      type="button"
                      onClick={() => setCourseFormOpen(false)}
                      className="border px-5 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="bg-white border rounded-xl overflow-x-auto">
                <table className="w-full min-w-[750px] text-left">
                  <thead className="bg-gray-50 text-gray-600 text-sm">
                    <tr>
                      <th className="p-4">Course</th>
                      <th className="p-4">Instructor</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredCourses.map((course) => (
                      <tr key={course.id} className="border-t">
                        <td className="p-4 font-semibold">{course.title}</td>
                        <td className="p-4">{course.instructor}</td>
                        <td className="p-4">{course.category}</td>
                        <td className="p-4">₹{course.price}</td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              course.status === "Approved"
                                ? "bg-green-100 text-green-700"
                                : course.status === "Rejected"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {course.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => openEditCourse(course)}
                              className="text-blue-600 hover:text-blue-800"
                              title="Edit"
                            >
                              <i className="fa-solid fa-pen" />
                            </button>

                            {course.status === "Pending" && (
                              <>
                                <button
                                  onClick={() =>
                                    updateCourseStatus(course.id, "Approved")
                                  }
                                  className="text-green-600"
                                  title="Approve"
                                >
                                  <i className="fa-solid fa-check" />
                                </button>
                                <button
                                  onClick={() =>
                                    updateCourseStatus(course.id, "Rejected")
                                  }
                                  className="text-orange-600"
                                  title="Reject"
                                >
                                  <i className="fa-solid fa-ban" />
                                </button>
                              </>
                            )}

                            <button
                              onClick={() => deleteCourse(course.id)}
                              className="text-red-600"
                              title="Delete"
                            >
                              <i className="fa-solid fa-trash" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredCourses.length === 0 && (
                  <EmptyState message="No courses found." />
                )}
              </div>
            </>
          )}


          {activeTab === "Users" && (
            <>
              <SectionHeading
                title="User Management"
                subtitle="View and manage students, instructors and admins"
              />

              <div className="bg-white border rounded-xl overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead className="bg-gray-50 text-gray-600 text-sm">
                    <tr>
                      <th className="p-4">Name</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Role</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-t">
                        <td className="p-4 font-semibold">{user.name}</td>
                        <td className="p-4">{user.email}</td>
                        <td className="p-4">
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-xs">
                            {user.role}
                          </span>
                        </td>
                        <td className="p-4">
                          {user.role !== "Admin" ? (
                            <button
                              onClick={() => deleteUser(user.id)}
                              className="text-red-600 hover:text-red-800"
                              title="Delete user"
                            >
                              <i className="fa-solid fa-trash" />
                            </button>
                          ) : (
                            <span className="text-gray-400 text-sm">
                              Protected
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredUsers.length === 0 && (
                  <EmptyState message="No users found." />
                )}
              </div>
            </>
          )}

   
          {activeTab === "Categories" && (
            <>
              <SectionHeading
                title="Category Management"
                subtitle="Create and manage course categories"
              />

              <form
                onSubmit={addCategory}
                className="bg-white border rounded-xl p-5 mb-6 flex flex-col sm:flex-row gap-3"
              >
                <input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter new category"
                  className="flex-1 border rounded-lg p-3"
                />
                <PrimaryButton type="submit">
                  <i className="fa-solid fa-plus mr-2" />
                  Add Category
                </PrimaryButton>
              </form>

              <div className="bg-white border rounded-xl p-5">
                <h2 className="font-bold text-lg mb-4">
                  All Categories ({categories.length})
                </h2>

                {filteredCategories.map((category) => (
                  <div
                    key={category}
                    className="flex justify-between items-center border-b last:border-0 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                        <i className="fa-solid fa-folder" />
                      </div>
                      <span className="font-medium">{category}</span>
                    </div>

                    <button
                      onClick={() => deleteCategory(category)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete category"
                    >
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                ))}

                {filteredCategories.length === 0 && (
                  <EmptyState message="No categories found." />
                )}
              </div>
            </>
          )}

      
          {activeTab === "Coupons" && (
            <>
              <SectionHeading
                title="Coupon Management"
                subtitle="Create and manage discount coupons"
              />

              <form
                onSubmit={addCoupon}
                className="bg-white border rounded-xl p-5 mb-6"
              >
                <h2 className="font-bold text-lg mb-4">Create New Coupon</h2>

                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    value={newCoupon}
                    onChange={(e) => setNewCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="border rounded-lg p-3"
                  />

                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={newDiscount}
                    onChange={(e) => setNewDiscount(e.target.value)}
                    placeholder="Discount percentage"
                    className="border rounded-lg p-3"
                  />

                  <PrimaryButton type="submit">
                    <i className="fa-solid fa-plus mr-2" />
                    Create Coupon
                  </PrimaryButton>
                </div>
              </form>

              <div className="bg-white border rounded-xl p-5">
                <h2 className="font-bold text-lg mb-4">
                  Active Coupons ({coupons.length})
                </h2>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredCoupons.map((coupon) => (
                    <div
                      key={coupon.id}
                      className="border border-dashed border-purple-300 rounded-xl p-5"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-xl text-purple-600">
                            {coupon.code}
                          </h3>
                          <p className="text-gray-500 text-sm mt-2">
                            {coupon.discount}% discount
                          </p>
                        </div>

                        <button
                          onClick={() => deleteCoupon(coupon.id)}
                          className="text-red-500"
                          title="Delete coupon"
                        >
                          <i className="fa-solid fa-trash" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredCoupons.length === 0 && (
                  <EmptyState message="No coupons found." />
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
