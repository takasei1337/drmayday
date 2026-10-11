export default function PatientProfile() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Hồ Sơ Y Tế & Thông Tin BHYT</h2>
      <p className="text-sm text-slate-500">
        Xem và cập nhật thông tin cá nhân, nhân khẩu học, số thẻ BHYT và địa chỉ cư trú.
      </p>
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-600">
        Thành viên 1 sẽ kết nối API GET /api/v1/profile và PUT /api/v1/profile (Slide 2 - Đầu việc 2) tại đây.
      </div>
    </div>
  );
}
