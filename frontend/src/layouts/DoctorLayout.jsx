import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Stethoscope, Clock, FilePlus2, Images, LogOut } from "lucide-react";
import toast from "react-hot-toast";

export default function DoctorLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Đã đăng xuất phiên làm việc của Bác sĩ");
    navigate("/login");
  };

  const navItems = [
    { name: "Hàng đợi khám (Queue)", path: "/doctor", icon: Clock },
    { name: "Kê đơn & Cận lâm sàng", path: "/doctor/prescriptions", icon: FilePlus2 },
    { name: "Đối chiếu Ảnh tổn thương", path: "/doctor/lesions", icon: Images },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar Bác sĩ */}
      <aside className="w-64 bg-teal-950 text-slate-100 flex flex-col justify-between shadow-xl">
        <div>
          <div className="p-6 border-b border-teal-900 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center font-bold text-white shadow-md">
              <Stethoscope size={22} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">DrMayDay</h1>
              <p className="text-xs text-teal-300 font-medium">Bác Sĩ Lâm Sàng</p>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/doctor"}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-teal-600 text-white shadow"
                        : "text-teal-200 hover:bg-teal-900 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-teal-900">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-teal-900/60 text-rose-300 hover:bg-rose-950/40 hover:text-rose-200 transition-colors"
          >
            <LogOut size={16} />
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm">
          <div className="text-sm font-medium text-slate-500">
            Phân hệ Khám lâm sàng Bác sĩ (Đầu việc 3)
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-700 font-medium">BS. Nguyễn Văn A</span>
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-800 text-xs">
              BS
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
