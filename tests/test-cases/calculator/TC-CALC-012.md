# TC-CALC-012 — Build selector giữ các control tính toán

## ID

`TC-CALC-012`

## Objective

Xác nhận có thể chọn từng build và vẫn dùng được các control cơ bản để nhập, chọn phép toán và tính.

## Requirement ID

TR-CALC-001

## Precondition

- Mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Build selector hiển thị.

## Test data

| Build | First number | Operation | Second number | Expected answer |
| --- | --- | --- | --- | --- |
| `Prototype`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` | `12` | Add | `8` | `20` |

## Steps

1. Chọn lần lượt `Prototype` và từng build `1`–`9` từ build selector.
2. Với mỗi build, xác nhận First number, Second number, Operation và Calculate hiển thị và thao tác được.
3. Nếu các control cần thiết thao tác được, nhập bộ dữ liệu ở bảng và nhấn Calculate. Nếu không, ghi nhận không thể chạy phép tính rồi sang build tiếp theo.
4. Ghi nhận các build có control biến mất, bị khóa ngoài mong đợi hoặc không thể khởi chạy phép tính.

## Expected result

Build selector có đủ mười lựa chọn nêu trên. Trên mỗi build, các control cần thiết vẫn hiển thị, bật và cho phép chạy phép tính. Answer là `20` khi các control hoạt động đúng.
