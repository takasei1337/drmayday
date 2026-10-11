import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Network, FileSpreadsheet, LogOut, ShieldAlert } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Đã đăng xuất tài khoản quản trị");
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard Thống kê", path: "/admin", icon: LayoutDashboard },
    { name: "Người dùng & Phân quyền", path: "/admin/users", icon: Users },
    { name: "Hạ tầng Cơ sở (Topology)", path: "/admin/topology", icon: Network },
    { name: "Dynamic Form Builder", path: "/admin/form-builder", icon: FileSpreadsheet },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col justify-between shadow-xl">
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
              MD
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">DrMayDay</h1>
              <p className="text-xs text-blue-400 font-medium">Cổng Quản Trị Hệ Thống</p>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
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

        {/* Footer info & Logout */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center space-x-3 px-3 py-2 mb-2 text-xs text-slate-400">
            <ShieldAlert size={16} className="text-emerald-400" />
            <span>Vai trò: Administrator</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-800 text-rose-300 hover:bg-rose-950/40 hover:text-rose-200 transition-colors"
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
            Phân hệ Quản trị & Cấu hình Động (Đầu việc 1)
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-600">Admin User</span>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-700 text-xs">
              AD
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
