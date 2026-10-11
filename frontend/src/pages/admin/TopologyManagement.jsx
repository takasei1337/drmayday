export default function TopologyManagement() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Quản Lý Hạ Tầng Cơ Sở (Topology)</h2>
      <p className="text-sm text-slate-500">
        Mô hình cây 3 tầng: <strong>Chi nhánh (Branches) → Khoa (Departments) → Phòng khám (Rooms)</strong>.
      </p>
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-600">
        Thành viên 1 sẽ triển khai giao diện CRUD cây tổ chức theo Slide 4 tại đây (kết nối API branch01-05, dept01-05, room01-05).
      </div>
    </div>
  );
}
