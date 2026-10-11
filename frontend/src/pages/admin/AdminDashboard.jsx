export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">Bảng Điều Khiển Quản Trị (Admin Dashboard)</h2>
        <p className="text-sm text-slate-500 mt-1">
          Theo dõi tổng quan số ca khám, cơ sở chi nhánh, bác sĩ hoạt động và tình hình phiếu khám.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase">Tổng Chi Nhánh</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">3</p>
          <p className="text-xs text-slate-500 mt-1">Cơ sở Hà Nội & TP.HCM</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase">Khoa / Phòng Khám</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">12</p>
          <p className="text-xs text-slate-500 mt-1">Khoa Da liễu & Miễn dịch</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase">Mẫu Phiếu Động</p>
          <p className="text-2xl font-bold text-indigo-600 mt-2">5</p>
          <p className="text-xs text-slate-500 mt-1">Dynamic Templates</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase">Bác Sĩ & Nhân Viên</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">24</p>
          <p className="text-xs text-slate-500 mt-1">Đang phân công công tác</p>
        </div>
      </div>
    </div>
  );
}
