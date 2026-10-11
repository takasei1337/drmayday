export default function FormBuilder() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Bộ Tạo Mẫu Phiếu Khám Động (Dynamic Form Builder)</h2>
      <p className="text-sm text-slate-500">
        Mô hình 4 tầng linh hoạt: <strong>Template → Sections → Questions → Options</strong> cùng cơ chế rẽ nhánh hiển thị.
      </p>
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-sm text-blue-700">
        Thành viên 1 sẽ xây dựng giao diện kéo thả/cấu hình biểu mẫu theo Slide 11 (API tmpl01-05, sec01-03, ques01-03).
      </div>
    </div>
  );
}
