# TC-CALC-009 — Bật và tắt Integers only

## ID

`TC-CALC-009`

## Objective

Xác nhận có thể chuyển giữa kết quả nguyên bị cắt phần thập phân và kết quả đầy đủ.

## Requirement ID

FR-CALC-005, FR-CALC-008

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Chọn `Prototype` cho lần chạy baseline hoặc build mục tiêu khi chạy regression.
- Form tính toán hiển thị.

## Test data

| First number | Operation | Second number | Answer đầy đủ | Answer khi bật Integer |
| --- | --- | --- | --- | --- |
| `7` | Divide | `2` | `3.5` | `3` |

## Steps

1. Trước khi tính, xác nhận Integers only đang bỏ chọn và bật. Nếu đang chọn sẵn hoặc bị khóa, ghi nhận lỗi nhưng tiếp tục.
2. Nhập `7` và `2`, chọn Divide rồi nhấn Calculate.
3. Xác nhận Answer là `3.5`.
4. Nếu Integers only bật được, chọn để Answer đổi thành `3`, sau đó bỏ chọn và xác nhận Answer trở lại `3.5`. Nếu không thao tác được, ghi nhận lỗi và kết thúc case.

## Expected result

Integers only ban đầu bỏ chọn và bật; Answer là `3.5`, đổi thành `3` khi bật chế độ nguyên, rồi trở lại `3.5` khi bỏ chọn. Phần thập phân bị cắt về 0.
