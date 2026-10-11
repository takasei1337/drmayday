import axios from "axios";
import toast from "react-hot-toast";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Tự động đính kèm Bearer JWT Token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Xử lý ApiResponse chuẩn từ Backend
apiClient.interceptors.response.use(
  (response) => {
    const resData = response.data;

    // Nếu backend trả về định dạng chuẩn ApiResponse
    if (resData && typeof resData.code === "number") {
      // 1000 (OK) hoặc 1001 (Created)
      if (resData.code === 1000 || resData.code === 1001) {
        return resData;
      }

      // Các mã lỗi nghiệp vụ
      toast.error(resData.message || "Thao tác không thành công");
      return Promise.reject(new Error(resData.message || "Business Error"));
    }

    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = data?.message || "Đã xảy ra lỗi khi gọi máy chủ";

      switch (status) {
        case 401:
          toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
          break;
        case 403:
          toast.error(errorMessage || "Bạn không có quyền thực hiện chức năng này!");
          break;
        case 404:
          toast.error(errorMessage || "Không tìm thấy tài nguyên yêu cầu!");
          break;
        case 409:
          toast.error(errorMessage || "Dữ liệu bị trùng lặp!");
          break;
        default:
          toast.error(errorMessage);
          break;
      }
    } else if (error.request) {
      toast.error("Không thể kết nối đến máy chủ Backend (Network Error)!");
    } else {
      toast.error(error.message || "Đã xảy ra lỗi không xác định!");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
