# TC-CALC-002 — Phép trừ cho kết quả âm

## ID

`TC-CALC-002`

## Objective

Xác nhận Subtract lấy First number trừ Second number và giữ dấu âm của kết quả.

## Requirement ID

FR-CALC-001, FR-CALC-003

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| First number | Operation | Second number | Expected answer |
| --- | --- | --- | --- |
| `8` | Subtract | `12` | `-4` |

## Steps

1. Nhập `8` vào First number.
2. Nhập `12` vào Second number.
3. Chọn Subtract.
4. Nhấn Calculate.

## Expected result

Answer hiển thị `-4` và không có thông báo lỗi.
