# TC-CALC-013 — Giới hạn độ dài toán hạng

## ID

`TC-CALC-013`

## Objective

Xác nhận mỗi trường toán hạng cho nhập tối đa 10 ký tự.

## Requirement ID

FR-CALC-001

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị.

## Test data

| Trường | Chuỗi nhập | Expected value |
| --- | --- | --- |
| First number | `1234567890` rồi nhập tiếp `1` | `1234567890` |
| Second number | `0987654321` rồi nhập tiếp `9` | `0987654321` |

## Steps

1. Nhập chuỗi 10 ký tự vào First number, sau đó thử thêm ký tự thứ 11.
2. Xóa nội dung trường này.
3. Nhập chuỗi 10 ký tự vào Second number, sau đó thử thêm ký tự thứ 11.

## Expected result

Cả hai trường nhận 10 ký tự đầu và không nhận ký tự thứ 11; nội dung mỗi trường vẫn dài tối đa 10 ký tự.
