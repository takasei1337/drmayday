# DrMayDay - Hệ Thống Quản Lý Khám Bệnh & Theo Dõi Mề Đay

Hệ thống chuyên sâu hỗ trợ bệnh nhân ghi nhận tiến triển tổn thương da liễu mạn tính, chấm điểm thang điểm mề đay UAS7 hằng ngày, và cung cấp giải pháp cho bác sĩ cùng ban quản trị quản lý ca khám bệnh với bộ tạo biểu mẫu khám động (Dynamic Form Builder).

---

## 🛠 Kiến trúc Công nghệ (Tech Stack)

* **Backend**: Java 21 / 17, Spring Boot, Spring WebMVC, Spring Validation, Lombok, Swagger OpenAPI.
* **Frontend**: React 19, Vite, Tailwind CSS v4, React Router DOM, Axios, Lucide React, Recharts, React Hot Toast.
* **Database (Cấu hình sau)**: PostgreSQL (29 bảng thực thể theo tài liệu thiết kế).
* **Kiến trúc API**: RESTful API chuẩn hóa với mã trạng thái `ApiResponse` thống nhất.

---

## 👥 Phân Chia Trách Nhiệm Thành Viên (4 Đầu Việc)

| Phân hệ | Thành viên phụ trách | Phạm vi chi tiết |
| :--- | :--- | :--- |
| **Đầu việc 1** | **Web UI Full + Backend Admin & Form Builder** | • Toàn bộ Web UI (Admin, Bác sĩ, Bệnh nhân)<br>• Backend Slide 3 (Admin Users, RBAC)<br>• Backend Slide 4 (Hạ tầng Topology: Chi nhánh - Khoa - Phòng)<br>• Backend Slide 11 (Dynamic Form Builder: Template - Section - Question - Option) |
| **Đầu việc 2** | **Backend Phân hệ Bệnh nhân** | • Backend Slide 2 (Xác thực, Đăng ký, Đăng nhập, Profile bệnh nhân)<br>• Backend Slide 5 (Phiếu khám sàng lọc & lưu câu trả lời)<br>• Backend Slide 6 (Thang điểm mề đay UAS7 hằng ngày)<br>• Backend Slide 9 (Ghi nhận đợt bùng phát & tổn thương da phía bệnh nhân) |
| **Đầu việc 3** | **Backend Phân hệ Bác sĩ** | • Backend Slide 5 (Tìm kiếm bệnh nhân, Hàng đợi ca khám, Nhận ca, Chốt bệnh án, Lịch sử khám)<br>• Backend Slide 7 (Kê đơn thuốc Header-Items, Chỉ định cận lâm sàng & Kết quả lab)<br>• Backend Slide 8 & 9 (Truy xuất ảnh tổn thương 3 mốc để đối chiếu lâm sàng) |
| **Đầu việc 4** | **Dịch vụ Dùng chung, Hạ tầng & Tích hợp** | • Backend Slide 8 (Quản lý kho tệp Media Attachment, MinIO/S3)<br>• Backend Slide 10 (Hạ tầng Push Notification qua Firebase FCM)<br>• Backend Slide 1 & 9 (Client tích hợp AI Inference AUAS & Hives Count)<br>• Backend Slide 1 & 2 (Bảo mật JWT, Token Blacklist, Dynamic RBAC, Chuẩn hóa ApiResponse) |

---

## 🌿 Quy Ước Phân Nhánh Git (Git Branching Strategy)

* `main`: Nhánh chạy chính thức (Production).
* `develop`: Nhánh gộp tính năng dùng chung của toàn đội.
* Khi bắt đầu code, mỗi thành viên checkout từ nhánh `develop` sang nhánh riêng của mình:
  * Thành viên 1: `feature/dev1-web-ui-admin`
  * Thành viên 2: `feature/dev2-patient-backend`
  * Thành viên 3: `feature/dev3-doctor-backend`
  * Thành viên 4: `feature/dev4-shared-infra-security`
* **Quy tắc Commit**:
  * `feat: <nội dung>` (Thêm chức năng mới)
  * `fix: <nội dung>` (Sửa lỗi)
  * `refactor: <nội dung>` (Tối ưu lại code)
  * `docs: <nội dung>` (Cập nhật tài liệu)

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Phía Backend (Spring Boot)
1. Di chuyển vào thư mục backend:
   ```bash
   cd backend
   ```
2. Build và chạy ứng dụng:
   ```bash
   # Trên Windows PowerShell / CMD:
   .\mvnw.cmd spring-boot:run

   # Hoặc trên Linux / MacOS:
   ./mvnw spring-boot:run
   ```
3. Backend sẽ chạy tại cổng mặc định: `http://localhost:8080`.
4. Xem tài liệu Swagger UI tại: `http://localhost:8080/swagger-ui.html`.

### 2. Phía Frontend (React + Vite + TailwindCSS)
1. Di chuyển vào thư mục frontend:
   ```bash
   cd frontend
   ```
2. Cài đặt các thư viện:
   ```bash
   npm install
   ```
3. Tạo file `.env` từ `.env.example`:
   ```bash
   # Nội dung .env:
   VITE_API_BASE_URL=http://localhost:8080/api/v1
   ```
4. Khởi chạy server phát triển:
   ```bash
   npm run dev
   ```
5. Frontend sẽ chạy tại: `http://localhost:5173`.

---

## 📋 Quy Chuẩn Định Dạng Phản Hồi API (ApiResponse Standard)

Tất cả các Controller trong dự án **bắt buộc** trả về đối tượng `ApiResponse<T>` theo chuẩn:

```json
{
  "code": 1000,
  "message": "OK",
  "data": { ... }
}
```

### Bảng Mã Lỗi Phổ Biến (Error Codes)
* `1000`: Thành công (OK)
* `1001`: Khởi tạo thành công (Created successfully)
* `2001`: Thiếu tham số bắt buộc (Missing required parameter)
* `2002`: Tham số sai định dạng (Invalid format)
* `3006`: Số điện thoại đã tồn tại (User phone already exists)
* `3007`: Không tìm thấy người dùng (User not found)
* `3008` / `3009`: Sai mật khẩu (Invalid password)
* `3102`: Không đủ quyền Admin (Admin access required)
* `3105`: Bác sĩ không phụ trách bệnh án này (Doctor not assigned)
* `4001`: Không tìm thấy bệnh án (Medical record not found)
* `4003`: Bệnh án đã chốt xong, không thể sửa (Medical record completed)
* `4102`: Mã template biểu mẫu đã tồn tại (Template code already exists)
* `5002`: Bệnh nhân đã chấm điểm UAS7 trong ngày hôm nay (Already scored today)
* `5003` / `5004`: Điểm UAS7 (iss7/hss7) phải từ 0 đến 3
* `6001`: Thiếu tệp ảnh đính kèm (Media file missing)
* `6003`: Dung lượng ảnh vượt quá giới hạn 5MB (Media file exceeds 5MB)
* `8001`: Đơn thuốc không được để trống danh mục (Prescription items empty)
* `8002`: Thuốc chưa có tên (Drug name is required)
* `9101`: Thiếu FCM token của thiết bị (FCM token is required)
