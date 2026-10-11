export default function UserManagement() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Quản Trị Người Dùng & Phân Quyền (RBAC)</h2>
      <p className="text-sm text-slate-500">
        Quản lý tài khoản Bác sĩ, Nhân viên, Bệnh nhân và ma trận phân quyền vai trò.
      </p>
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-600">
        Thành viên 1 sẽ triển khai giao diện quản lý Users & RBAC theo Slide 3 (API admin01-06, role01-02, perm01-04).
      </div>
    </div>
  );
}
