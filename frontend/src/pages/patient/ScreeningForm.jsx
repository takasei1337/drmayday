export default function ScreeningForm() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Phiếu Khám Sàng Lọc Y Tế</h2>
      <p className="text-sm text-slate-500">
        Trình dựng biểu mẫu động (Dynamic Form Renderer) dựa trên cây cấu trúc JSON (Template → Sections → Questions).
      </p>
      <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200 text-sm text-indigo-800">
        Thành viên 1 sẽ xây dựng component render câu hỏi động và tích hợp API medrec01, medrec02, medrec08, medrec10 (Đầu việc 2) tại đây.
      </div>
    </div>
  );
}
