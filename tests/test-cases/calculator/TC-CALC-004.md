# TC-CALC-004 — Chia cho kết quả thập phân

## ID

`TC-CALC-004`

## Objective

Xác nhận Divide tính đúng thương không nguyên.

## Requirement ID

FR-CALC-001, FR-CALC-005

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| First number | Operation | Second number | Expected answer |
| --- | --- | --- | --- |
| `7` | Divide | `2` | `3.5` |

## Steps

1. Nhập `7` vào First number.
2. Nhập `2` vào Second number.
3. Chọn Divide.
4. Nhấn Calculate.

## Expected result

Answer hiển thị `3.5` và không có thông báo lỗi.
