import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="text-center mb-6">
          <div className="inline-flex w-12 h-12 rounded-xl bg-blue-600 text-white items-center justify-center font-bold text-xl mb-3 shadow-md">
            MD
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Hệ Thống DrMayDay</h2>
          <p className="text-sm text-slate-500 mt-1">Nền tảng Quản lý Khám bệnh & Theo dõi Mề đay</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
