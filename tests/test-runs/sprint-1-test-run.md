# Test Run: Sprint 1 - Basic Calculator

**Execution date:** 2026-09-21  
**Tester:** An  
**Build/commit:** `sample-local-build`

> Đây là dữ liệu mẫu để minh họa cách ghi nhận một test run. Cập nhật kết quả và bug issue theo lần chạy thực tế.

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| TC-CALC-001 | Calculator | An | Pass | None | 12 + 8 = 20 |
| TC-CALC-002 | Calculator | Bình | Fail | #18 (sample) | Phiên bản lỗi hiển thị `Infinity` khi chia cho 0 |
| TC-CALC-003 | Calculator | Chi | Pass | None | Dữ liệu chữ bị từ chối |

## Quy tắc xử lý

- `Fail`: tạo Bug Issue và ghi số issue vào cột **Related Bug**.
- `Blocked`: ghi issue liên quan hoặc nêu rõ lý do không thể chạy.
- `Pass`: không tạo bug; cập nhật result trong GitHub Project nếu dự án dùng board.
