# TC-CALC-006 — Từ chối toán hạng không phải số

## ID

`TC-CALC-006`

## Objective

Xác nhận từng trường toán hạng chữ bị từ chối trong phép toán học và nhận thông báo tương ứng.

## Requirement ID

FR-CALC-001, FR-CALC-006

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| Lần chạy | First number | Operation | Second number | Expected error |
| --- | --- | --- | --- | --- |
| 1 | `abc` | Multiply | `3` | `Number 1 is not a number` |
| 2 | `2` | Multiply | `xyz` | `Number 2 is not a number` |

## Steps

1. Chạy lần 1 với dữ liệu ở bảng và nhấn Calculate.
2. Xác nhận lỗi tương ứng với First number.
3. Thay dữ liệu bằng bộ lần 2 và nhấn Calculate.
4. Xác nhận lỗi tương ứng với Second number.

## Expected result

Mỗi lần chạy bị từ chối, Answer không nhận kết quả phép tính, và trang hiển thị đúng thông báo cho trường không phải số.
