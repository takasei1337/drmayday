import { Link } from "react-router-dom";
import { Activity, ClipboardList, Camera, ArrowRight } from "lucide-react";

export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-2xl font-bold">Xin chào Bệnh nhân!</h1>
        <p className="text-indigo-100 mt-2 max-w-2xl">
          Chào mừng bạn đến với hệ thống DrMayDay. Hãy ghi nhận điểm số UAS7 mỗi ngày và cập nhật ảnh tổn thương da để bác sĩ theo dõi tiến triển điều trị.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/patient/uas7"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <Activity size={24} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
            Chấm Điểm UAS7
          </h3>
          <p className="text-sm text-slate-500 mt-2">
            Đánh giá mức độ sẩn phù và ngứa ngáy trong 24 giờ qua (thang điểm 0–3).
          </p>
          <div className="mt-4 flex items-center text-sm font-semibold text-indigo-600">
            <span>Bắt đầu chấm</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>

        <Link
          to="/patient/screening"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <ClipboardList size={24} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
            Phiếu Khám Sàng Lọc
          </h3>
          <p className="text-sm text-slate-500 mt-2">
            Khai báo tiền sử bệnh lý và triệu chứng ban đầu theo biểu mẫu động.
          </p>
          <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
            <span>Khai báo ngay</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>

        <Link
          to="/patient/lesions"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Camera size={24} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors">
            Nhật Ký Tổn Thương
          </h3>
          <p className="text-sm text-slate-500 mt-2">
            Chụp và tải ảnh theo 3 mốc (Khởi phát, Đỉnh điểm, Hồi phục) kèm vị trí cơ thể.
          </p>
          <div className="mt-4 flex items-center text-sm font-semibold text-emerald-600">
            <span>Xem nhật ký</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
