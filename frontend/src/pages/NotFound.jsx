import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold text-slate-800">404</h1>
      <p className="text-slate-600 mt-2 text-lg">Trang bạn tìm kiếm không tồn tại.</p>
      <Link
        to="/login"
        className="mt-6 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
      >
        Về trang Đăng nhập
      </Link>
    </div>
  );
}
