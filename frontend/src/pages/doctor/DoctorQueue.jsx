export default function DoctorQueue() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Hàng Đợi Ca Khám (Waiting Queue)</h2>
      <p className="text-sm text-slate-500">
        Theo dõi các ca khám theo 3 trạng thái: <strong>Chờ khám (Pending) → Đang khám (In Progress) → Đã hoàn tất (Completed)</strong>.
      </p>
      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200 text-sm text-teal-800">
        Thành viên 1 sẽ kết nối API medrec04, medrec07 (Bác sĩ nhận ca), medrec11 (Chốt bệnh án) do Thành viên 3 phụ trách ở Backend.
      </div>
    </div>
  );
}
