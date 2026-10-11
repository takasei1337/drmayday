import { useState } from "react";
import toast from "react-hot-toast";

export default function Uas7Tracker() {
  const [iss7, setIss7] = useState(1);
  const [hss7, setHss7] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Number(iss7) + Number(hss7);
    toast.success(`Đã lưu điểm UAS7 hôm nay: ${total}/6 điểm! (Mock test)`);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Chấm Điểm Thang Đo UAS7 Hôm Nay</h2>
        <p className="text-sm text-slate-500 mt-1">
          Urticaria Activity Score 7 - Đánh giá mức độ sẩn phù và ngứa trong 24 giờ.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Điểm sẩn iss7 */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            1. Mức độ sẩn phù (Hives / ISS7: 0 - 3)
          </label>
          <div className="grid grid-cols-4 gap-3">
            {[
              { val: 0, label: "0: Không có nốt sẩn" },
              { val: 1, label: "1: Nhẹ (< 20 nốt/24h)" },
              { val: 2, label: "2: Vừa (20-50 nốt/24h)" },
              { val: 3, label: "3: Nặng (> 50 nốt/24h)" },
            ].map((opt) => (
              <button
                type="button"
                key={opt.val}
                onClick={() => setIss7(opt.val)}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  iss7 === opt.val
                    ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 font-semibold shadow-sm"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Điểm ngứa hss7 */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            2. Mức độ ngứa ngáy (Itch / HSS7: 0 - 3)
          </label>
          <div className="grid grid-cols-4 gap-3">
            {[
              { val: 0, label: "0: Không ngứa" },
              { val: 1, label: "1: Nhẹ (Không khó chịu)" },
              { val: 2, label: "2: Vừa (Khó chịu nhưng chưa ảnh hưởng sinh hoạt)" },
              { val: 3, label: "3: Nặng (Rất khó chịu, mất ngủ)" },
            ].map((opt) => (
              <button
                type="button"
                key={opt.val}
                onClick={() => setHss7(opt.val)}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  hss7 === opt.val
                    ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 font-semibold shadow-sm"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tổng điểm */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Tổng điểm UAS hôm nay:</span>
          <span className="text-2xl font-bold text-indigo-600">{Number(iss7) + Number(hss7)} / 6</span>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow-md"
        >
          Xác Nhận Lưu Điểm UAS7
        </button>
      </form>
    </div>
  );
}
