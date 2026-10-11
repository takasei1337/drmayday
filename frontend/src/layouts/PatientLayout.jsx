import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Activity, ClipboardList, Camera, User, LogOut, HeartPulse } from "lucide-react";
import toast from "react-hot-toast";

export default function PatientLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Đã đăng xuất tài khoản bệnh nhân");
    navigate("/login");
  };

  const navItems = [
    { name: "Tổng quan", path: "/patient", icon: HeartPulse },
    { name: "Chấm điểm UAS7", path: "/patient/uas7", icon: Activity },
    { name: "Phiếu sàng lọc", path: "/patient/screening", icon: ClipboardList },
    { name: "Theo dõi tổn thương", path: "/patient/lesions", icon: Camera },
    { name: "Hồ sơ y tế / BHYT", path: "/patient/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navigation Bar cho Bệnh nhân */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md">
              MD
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 leading-none block">DrMayDay</span>
              <span className="text-xs text-indigo-600 font-medium">Theo dõi Mề đay & Khám bệnh</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/patient"}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-indigo-50 text-indigo-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut size={14} />
            <span>Đăng xuất</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
