# TC-CALC-010 — Clear kết quả, lỗi và Integer

## ID

`TC-CALC-010`

## Objective

Xác nhận Clear khả dụng khi calculator đang rảnh và xóa Answer, thông báo lỗi, cùng trạng thái Integers only.

## Requirement ID

FR-CALC-008, FR-CALC-009

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| Giai đoạn | First number | Operation | Second number | Trạng thái Integer |
| --- | --- | --- | --- | --- |
| Tạo kết quả | `7` | Divide | `2` | Bật sau khi tính |
| Tạo lỗi | `abc` | Multiply | `3` | Đang bật trước khi lỗi |

## Steps

1. Ngay sau khi mở trang và chọn build mục tiêu, xác nhận Clear đang bật khi calculator rảnh. Nếu nút bị khóa, ghi nhận lỗi rồi tiếp tục các bước.
2. Tính `7 ÷ 2`, sau đó bật Integers only.
3. Thay First number thành `abc`, chọn Multiply và nhấn Calculate để hiển thị lỗi kiểm tra số.
4. Nhấn Clear.

## Expected result

Clear đang bật khi calculator rảnh. Khi nhấn Clear, Answer và thông báo lỗi được xóa, Integers only ở trạng thái bỏ chọn, và form sẵn sàng cho lần nhập tiếp theo.
