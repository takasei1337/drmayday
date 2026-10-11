export default function DoctorLesionReview() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Đối Chiếu Lâm Sàng Ảnh Tổn Thương Da</h2>
      <p className="text-sm text-slate-500">
        Xem ảnh tiến triển theo 3 mốc (Start → Peak → Normal) cùng kết quả phân tích nốt sẩn & AUAS từ AI Server.
      </p>
      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200 text-sm text-teal-800">
        Thành viên 1 sẽ kết nối API lphoto02, ansimg03 theo Slide 8, 9 do Thành viên 3 và 4 phụ trách ở Backend.
      </div>
    </div>
  );
}
