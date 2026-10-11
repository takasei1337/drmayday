package com.drmayday.backend.modules.doctor;

import com.drmayday.backend.common.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/doctor")
@Tag(name = "3. Doctor Module", description = "Đầu việc 3: Hàng đợi ca khám, Tiếp nhận/Chốt bệnh án, Kê đơn thuốc, Cận lâm sàng")
public class DoctorSampleController {

    @GetMapping("/ping")
    @Operation(summary = "Kiểm tra module Doctor hoạt động")
    public ApiResponse<Map<String, String>> ping() {
        return ApiResponse.success(Map.of(
                "module", "Doctor Clinical Services",
                "assignedTo", "Đầu việc 3",
                "status", "Ready for development"
        ));
    }
}
