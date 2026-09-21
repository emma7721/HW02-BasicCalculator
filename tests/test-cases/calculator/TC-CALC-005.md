# TC-CALC-005 — Chia cho 0 và tiếp tục thao tác

## ID

`TC-CALC-005`

## Objective

Xác nhận lỗi chia cho 0 được thông báo và form trở về trạng thái có thể tiếp tục sử dụng.

## Requirement ID

FR-CALC-005, FR-CALC-009

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| First number | Operation | Second number | Follow-up input |
| --- | --- | --- | --- |
| `10` | Divide | `0` | `10` Divide `2` |

## Steps

1. Nhập `10` vào First number và `0` vào Second number.
2. Chọn Divide rồi nhấn Calculate.
3. Chờ trạng thái tính toán kết thúc.
4. Kiểm tra thông báo lỗi, Answer và trạng thái Calculate/Clear.
5. Nếu form đã mở lại, đổi Second number thành `2` rồi nhấn Calculate lần nữa; nếu vẫn bị khóa, ghi nhận test fail và kết thúc case.

## Expected result

- Trang hiển thị `Divide by zero error!` và không hiển thị kết quả chia không hợp lệ.
- Trạng thái tính toán kết thúc; Calculate và Clear được bật, Answer hiển thị.
- Có thể tiếp tục tính `10 ÷ 2`; Answer hiển thị `5`.
