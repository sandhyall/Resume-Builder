import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  HiOutlineTemplate,
  HiOutlineDocumentText,
  HiOutlineUserCircle,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineLogout,
  HiOutlineCog,
} from "react-icons/hi";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/adminlogin");
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
      isActive
        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
        : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
    }`;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen">
        <div className="p-8 flex items-center gap-3">
          <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-indigo-200 shadow-lg">
            <HiOutlineSparkles className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-none">
              ResumAI
            </h1>
            <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
              Builder Pro
            </span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Main Menu
          </p>

          <NavLink to="/admin/overview" className={navLinkClass}>
            <HiOutlineChartBar size={22} />
            <span>Dashboard</span>
          </NavLink>

          {/* <NavLink to="/admin/resumes" className={navLinkClass}>
            <HiOutlineDocumentText size={22} />
            <span>My Resumes</span>
          </NavLink> */}

          <NavLink to="/admin/templete" className={navLinkClass}>
            <HiOutlineTemplate size={22} />
            <span>Templates</span>
          </NavLink>

          <NavLink to="/admin/users" className={navLinkClass}>
            <HiOutlineUserCircle size={22} />
            <span>Users</span>
          </NavLink>

          <div className="pt-6 mt-6 border-t border-slate-100">
            <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              Preferences
            </p>
            <NavLink to="/admin/settings" className={navLinkClass}>
              <HiOutlineCog size={22} />
              <span>Settings</span>
            </NavLink>
          </div>
        </nav>

        <div className="p-4 bg-slate-50 m-4 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-indigo-100 border-2 border-white overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff"
                alt="avatar"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-slate-800 truncate">
                sandhya dahal
              </p>
              <p className="text-xs text-slate-500 truncate">Premium Plan</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full py-2 bg-white text-slate-600 border border-slate-200 rounded-lg text-sm font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all duration-200"
          >
            <HiOutlineLogout size={18} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Workspace</h2>
            <p className="text-sm text-slate-500">
              Manage your resume projects
            </p>
          </div>

          {/* <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
              + Create New Resume
            </button>
          </div> */}
        </header>
        <div className="p-10">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
