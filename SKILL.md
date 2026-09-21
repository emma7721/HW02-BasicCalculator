---
name: basic-calculator-bug-sync
description: Update the Basic Calculator test-management files when the user reports a new bug, retest result, or bug fix. Use only for D:\CODE\QC\basic_calculator_test; do not use for unrelated projects.
---

# Basic Calculator Bug Sync

Maintain traceability from a calculator bug to its requirement, test case, test run, and retest evidence. Work only inside `D:\CODE\QC\basic_calculator_test` unless the user explicitly expands the scope.

## System under test

- Web application: [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).
- Use build `Prototype` as the baseline for expected behavior. Builds `1`–`9` are regression variants; run applicable test cases against them to identify deviations from the baseline.
- Store the web application's approved behavior in `requirements/basic-calculator-requirements.md`; link manual cases in `tests/test-cases/calculator/` to requirement IDs and use UI steps and expected results for the web page, not the sample module in `src/`.

## Inputs to extract

From the user's bug report, identify the affected calculator behavior, observed result, expected result, environment or build, and any supplied requirement ID, test case ID, GitHub Issue number, pull request, or execution date. Reuse the user's identifiers exactly.

If the affected test case or requirement cannot be identified from the report and repository files, ask one concise question before changing traceability records. Otherwise infer the closest matching existing test case and state that inference in the updated note.

## File updates for a new bug

1. Find the applicable file in `tests/test-cases/calculator/`. Add the bug identifier to its `Status / Related bugs` section. Keep the test steps and expected result unchanged unless the user reports a requirement change.
2. Add or update the relevant execution row in the latest applicable file under `tests/test-runs/`. Use `Fail` or `Blocked`; include the bug identifier and a factual note with the observed behavior.
3. Update `tests/test-summary/traceability-matrix.md` so the requirement, test case, result, bug, and status remain consistent. New bugs start with status `Open` unless the user provides a more specific status.
4. Maintain `tests/test-summary/bug-register.md`. Create it on the first local bug and record: bug identifier, title, found-by test case, related requirement, severity/priority when supplied, status, and link to the test run file.
5. When the bug can be reproduced by the code in `src/`, add or update an automated test in `tests/automated/calculator.test.js` that demonstrates the expected behavior. Run the automated tests after the edit and report the result.

Use a supplied GitHub issue number such as `#18` as the bug identifier. If no issue exists, assign the next unused local ID in the form `BUG-CALC-001`, `BUG-CALC-002`, and so on. Do not invent a GitHub issue number.

## Fix and retest updates

When the user reports a fix or retest:

- Update the matching test-run row with `Pass` or `Fail`, retest date, tester, build/commit, and a short result note.
- Update the traceability status to `Done` only after retest passes. Keep it `Ready for Retest` when a fix or pull request exists but no passing retest was reported.
- Update the bug register with the pull request and retest evidence when supplied.
- Update the automated test to assert the corrected expected behavior, then run it.

## Boundaries

- Preserve the Markdown structure and test case code convention `TC-CALC-###`.
- Keep rows for historical failed runs; append a retest row or a clear retest note instead of overwriting evidence.
- Do not create or modify GitHub Issues, labels, Projects, pull requests, branches, or remote files unless the user explicitly asks for that external action.
- Do not mark a bug fixed merely because the user says a developer changed code; require an explicit passing retest or test evidence.
