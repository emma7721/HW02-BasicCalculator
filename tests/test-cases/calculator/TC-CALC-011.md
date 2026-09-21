# TC-CALC-011 — Dùng toán hạng hiện tại ở phép tính kế tiếp

## ID

`TC-CALC-011`

## Objective

Xác nhận phép tính liên tiếp dùng hai giá trị nhập hiện tại, không dùng Answer trước đó làm toán hạng thứ nhất.

## Requirement ID

FR-CALC-001, FR-CALC-003, FR-CALC-010

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| Lần chạy | First number | Operation | Second number | Expected answer |
| --- | --- | --- | --- | --- |
| 1 | `12` | Add | `8` | `20` |
| 2 | `9` | Subtract | `4` | `5` |

## Steps

1. Tính lần 1 và xác nhận Answer là `20`.
2. Không nhấn Clear; nhập `9` vào First number và `4` vào Second number.
3. Chọn Subtract rồi nhấn Calculate.

## Expected result

Answer lần 2 là `5`, được tính từ `9 - 4`, không phải giá trị nào kết hợp Answer `20`.
