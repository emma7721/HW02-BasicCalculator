# TC-CALC-003: Từ chối toán hạng không phải số

## Requirement ID

FR-CALC-03

## Module / Test type / Technique

Calculator / Validation / Equivalence Partitioning

## Preconditions

- Calculator đã sẵn sàng để nhận hai toán hạng.
- Người dùng chọn phép nhân.

## Test data

| Operand 1 | Operand 2 |
| --- | --- |
| `abc` | 3 |

## Test steps

1. Nhập `abc` làm toán hạng thứ nhất.
2. Chọn phép nhân.
3. Nhập `3` làm toán hạng thứ hai.
4. Thực thi phép tính.

## Expected result

Hệ thống từ chối dữ liệu không hợp lệ và thông báo toán hạng phải là số hữu hạn.

## Status / Related bugs

Not Run / None
