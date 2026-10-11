export default function LesionTracker() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Nhật Ký & Theo Dõi Tổn Thương Da</h2>
      <p className="text-sm text-slate-500">
        Ghi nhận các đợt bùng phát mề đay, chọn vùng da trên Body Map và upload ảnh 3 mốc (Start, Peak, Normal).
      </p>
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-sm text-emerald-800">
        Thành viên 1 sẽ xây dựng Body Map UI và tích hợp API lesion01-06, loc01-05, lphoto01-04 (Slide 9) tại đây.
      </div>
    </div>
  );
}
