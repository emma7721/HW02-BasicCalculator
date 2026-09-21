# TC-CALC-002: Không cho phép chia cho 0

## Requirement ID

FR-CALC-02

## Module / Test type / Technique

Calculator / Functional / Boundary Value Analysis

## Preconditions

- Calculator đã sẵn sàng để nhận hai toán hạng số.
- Người dùng chọn phép chia.

## Test data

| Dividend | Divisor |
| --- | --- |
| 10 | 0 |

## Test steps

1. Nhập `10` làm số bị chia.
2. Chọn phép chia.
3. Nhập `0` làm số chia.
4. Thực thi phép tính.

## Expected result

Hệ thống không thực hiện phép chia và hiển thị lỗi rõ ràng: `Cannot divide by zero`.

## Status / Related bugs

Not Run / None
