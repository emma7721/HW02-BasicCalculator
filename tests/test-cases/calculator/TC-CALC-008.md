# TC-CALC-008 — Nối chuỗi và ẩn Integer only

## ID

`TC-CALC-008`

## Objective

Xác nhận Concatenate nối nội dung như chuỗi và Integer only không dùng được cho phép toán này.

## Requirement ID

FR-CALC-001, FR-CALC-007

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| First number | Operation | Second number | Expected answer |
| --- | --- | --- | --- |
| `abc` | Concatenate | `123` | `abc123` |

## Steps

1. Nhập `abc` vào First number và `123` vào Second number.
2. Chọn Concatenate.
3. Xác nhận Integers only bị ẩn hoặc vô hiệu hóa.
4. Nhấn Calculate.

## Expected result

Answer hiển thị `abc123`, không có lỗi kiểm tra số, và Integers only không thể thay đổi kết quả nối chuỗi.
