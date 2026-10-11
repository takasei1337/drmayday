export default function DoctorPrescription() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Kê Đơn Thuốc & Chỉ Định Cận Lâm Sàng</h2>
      <p className="text-sm text-slate-500">
        Mô hình Header-Items: Đơn thuốc (prescriptions + prescription_items) và Phiếu xét nghiệm (lab_requests + items).
      </p>
      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200 text-sm text-teal-800">
        Thành viên 1 sẽ kết nối API rx01, lab01, lab02 theo Slide 7 do Thành viên 3 phụ trách ở Backend.
      </div>
    </div>
  );
}
