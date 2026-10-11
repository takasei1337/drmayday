package com.drmayday.backend.modules.patient;

import com.drmayday.backend.common.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/patient")
@Tag(name = "2. Patient Module", description = "Đầu việc 2: Xác thực, Khai báo bệnh án, Thang điểm UAS7, Theo dõi tổn thương da")
public class PatientSampleController {

    @GetMapping("/ping")
    @Operation(summary = "Kiểm tra module Patient hoạt động")
    public ApiResponse<Map<String, String>> ping() {
        return ApiResponse.success(Map.of(
                "module", "Patient Services",
                "assignedTo", "Đầu việc 2",
                "status", "Ready for development"
        ));
    }
}
