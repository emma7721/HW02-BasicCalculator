# Basic Calculator Test Management

Mẫu này áp dụng quy trình trong deck: `Requirement -> Test Case -> Test Run -> Bug Issue -> Pull Request -> Retest`.

## Cấu trúc

```text
basic_calculator_test/
├── src/                         # Mã calculator mẫu
├── tests/
│   ├── test-cases/              # Test case manual chính thức
│   │   └── calculator/
│   ├── test-runs/               # Kết quả chạy theo sprint/regression
│   ├── test-summary/            # Traceability và hướng dẫn GitHub
│   └── automated/               # Automated tests chạy bằng Node.js
├── reports/                     # Artifact test report
└── .github/
    ├── ISSUE_TEMPLATE/          # Mẫu Bug Report, Test Run, Test Task
    └── workflows/               # GitHub Actions
```

## Chạy automated test

Yêu cầu Node.js 20 trở lên.

```bash
npm test
```

GitHub Actions chạy test khi có `push` hoặc `pull_request`, tạo `reports/test-results.tap` và lưu report làm artifact.

## Quy ước làm việc

- Không sửa file trong `tests/test-cases/` trực tiếp trên `main`.
- Mỗi test case có mã theo mẫu `TC-CALC-###` và liên kết ít nhất một Requirement ID.
- Khi fail hoặc blocked, ghi bug liên quan trong test run và tạo Bug Issue từ template.
- Chỉ đóng bug sau khi Pull Request đã merge và tester retest pass.

Xem [traceability matrix](tests/test-summary/traceability-matrix.md) để theo dõi coverage và bug liên quan.
