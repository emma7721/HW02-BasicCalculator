# TC-CALC-001 — Cộng hai số hợp lệ

## ID

`TC-CALC-001`

## Objective

Xác nhận phép Add tính tổng của hai toán hạng hiện tại.

## Requirement ID

FR-CALC-001, FR-CALC-002

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| First number | Operation | Second number | Expected answer |
| --- | --- | --- | --- |
| `12` | Add | `8` | `20` |

## Steps

1. Nhập `12` vào First number.
2. Nhập `8` vào Second number.
3. Chọn Add.
4. Nhấn Calculate.

## Expected result

Answer hiển thị `20` và không có thông báo lỗi.
