# Đặc tả yêu cầu — Basic Calculator

## 1. Thông tin chung

- **Ứng dụng:** [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html)
- **Baseline:** Build `Prototype`
- **Phạm vi regression:** Builds `1`–`9`; mỗi build được đánh giá theo hành vi mong đợi bên dưới.
- **Ngôn ngữ:** Giao diện tiếng Anh.

Các phép toán học yêu cầu toán hạng hữu hạn ở dạng số nguyên, số âm hoặc số thập phân. Riêng Concatenate xử lý nội dung hai trường như chuỗi. Kết quả được hiển thị trong trường Answer.

## 2. Yêu cầu chức năng

| ID | Yêu cầu |
| --- | --- |
| FR-CALC-001 | Người dùng có thể nhập hai toán hạng vào First number và Second number. Mỗi trường nhận tối đa 10 ký tự; ký tự thứ 11 không được thêm vào. |
| FR-CALC-002 | Với phép Add, hệ thống cộng hai toán hạng hiện tại và hiển thị tổng. |
| FR-CALC-003 | Với phép Subtract, hệ thống lấy toán hạng thứ nhất trừ toán hạng thứ hai và hiển thị hiệu, kể cả khi kết quả âm. |
| FR-CALC-004 | Với phép Multiply, hệ thống nhân hai toán hạng hiện tại và hiển thị tích. |
| FR-CALC-005 | Với phép Divide, hệ thống chia toán hạng thứ nhất cho toán hạng thứ hai và hiển thị thương. Nếu số chia bằng 0, hệ thống không thực hiện phép chia và hiển thị `Divide by zero error!`. |
| FR-CALC-006 | Các phép toán học yêu cầu cả hai toán hạng không rỗng và là số hữu hạn. Nếu không hợp lệ, hệ thống không tính toán và hiển thị `Number 1 is not a number` hoặc `Number 2 is not a number` tương ứng với trường sai. |
| FR-CALC-007 | Với Concatenate, hệ thống nối nguyên văn nội dung First number rồi Second number, không kiểm tra chúng là số. Integer only phải bị ẩn hoặc vô hiệu hóa và không áp dụng cho phép toán này. |
| FR-CALC-008 | Với kết quả số không rỗng, bật Integers only hiển thị phần nguyên bằng cách cắt phần thập phân về 0; bỏ chọn hiển thị lại kết quả đầy đủ. |
| FR-CALC-009 | Khi calculator ở trạng thái rảnh, Clear phải bật. Nhấn Clear xóa Answer và thông báo lỗi, đồng thời bỏ chọn Integers only. Sau lỗi chia cho 0, hệ thống phải xóa trạng thái đang tính, bật lại Calculate và Clear, và hiện lại Answer để có thể tiếp tục thao tác. |
| FR-CALC-010 | Mỗi lần chọn Calculate phải dùng giá trị đang có trong cả hai trường toán hạng; không được thay toán hạng bằng Answer của phép tính trước. |

## 3. Yêu cầu giao diện/regression

| ID | Yêu cầu |
| --- | --- |
| TR-CALC-001 | Build selector cung cấp `Prototype` và các build `1`–`9`. Sau khi chọn một build, các trường toán hạng, phép toán và Calculate cần hiển thị, thao tác được để chạy test. Build `9` cũng phải đáp ứng yêu cầu này. |

## 4. Quan sát sai lệch hiện tại

> Các ghi nhận dưới đây là sai lệch quan sát trên ứng dụng; không phải hành vi được chấp nhận. Test case liên quan giữ expected result theo yêu cầu chuẩn để có thể ghi nhận lỗi.

- Khi toán hạng của phép toán học để trống, trang hiện coi giá trị đó là `0` thay vì báo lỗi bắt buộc nhập (FR-CALC-006, TC-CALC-007).
- Sau phép chia `10 ÷ 0`, trang hiện báo `Divide by zero error!` nhưng vẫn ở trạng thái đang tính: Calculate và Clear bị khóa, Answer bị ẩn. Form không trở lại trạng thái thao tác được (FR-CALC-009, TC-CALC-005).
- Trên build `5`, Clear ban đầu bị khóa khi calculator đang rảnh; nút được bật lại sau một lần tính (FR-CALC-009, TC-CALC-010).

## 5. Liên kết test

Các test case manual và trạng thái thực thi được theo dõi trong [traceability matrix](../tests/test-summary/traceability-matrix.md). Mỗi test case trong `tests/test-cases/calculator/` ghi rõ mục tiêu, requirement ID, điều kiện tiên quyết, dữ liệu, bước chạy và kết quả mong đợi.
