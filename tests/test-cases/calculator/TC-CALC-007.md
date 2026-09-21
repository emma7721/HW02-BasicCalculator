# TC-CALC-007 — Từ chối toán hạng để trống

## ID

`TC-CALC-007`

## Objective

Xác nhận phép toán học yêu cầu cả hai trường toán hạng phải được nhập.

## Requirement ID

FR-CALC-001, FR-CALC-006

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị và đang thao tác được.

## Test data

| Lần chạy | First number | Operation | Second number | Expected error |
| --- | --- | --- | --- | --- |
| 1 | *(để trống)* | Add | `5` | `Number 1 is not a number` |
| 2 | `5` | Add | *(để trống)* | `Number 2 is not a number` |
| 3 | *(để trống)* | Add | *(để trống)* | Lỗi toán hạng thứ nhất; không trả về `0` |

## Steps

1. Chạy lần lượt từng bộ dữ liệu trong bảng; để trống trường được đánh dấu.
2. Với mỗi bộ, chọn Add rồi nhấn Calculate.
3. Ghi nhận Answer và nội dung lỗi.

## Expected result

Mỗi phép tính bị từ chối. Trường trống được báo không hợp lệ theo đúng vị trí; khi cả hai trường trống, ít nhất trường thứ nhất được báo trước. Không trường hợp nào được xem ô trống là `0` để tính.
