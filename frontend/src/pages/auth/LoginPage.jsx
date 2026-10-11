import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phone || !password) {
      toast.error("Vui lòng nhập đầy đủ Số điện thoại và Mật khẩu!");
      return;
    }

    // Giả lập lưu token để test luồng
    localStorage.setItem("token", "mock-jwt-token-sample");
    localStorage.setItem("user", JSON.stringify({ phone, role }));
    toast.success("Đăng nhập thành công!");

    if (role === "admin") navigate("/admin");
    else if (role === "doctor") navigate("/doctor");
    else navigate("/patient");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
          Vai trò đăng nhập (Demo chuyển nhanh)
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="patient">Bệnh nhân (Patient)</option>
          <option value="doctor">Bác sĩ (Doctor)</option>
          <option value="admin">Quản trị viên (Admin)</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
          Số Điện Thoại
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Nhập số điện thoại (VD: 0912345678)"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
          Mật Khẩu
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-md mt-2"
      >
        Đăng Nhập
      </button>

      <div className="text-center text-xs text-slate-500 pt-2">
        Chưa có tài khoản?{" "}
        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
          Đăng ký bệnh nhân mới
        </Link>
      </div>
    </form>
  );
}
