> English | [简体中文](./CONTRIBUTING.zh-CN.md)

# Contributing Guide

Thank you for your valuable time. Your contribution will make this project better! Before submitting your contribution, please make sure to take some time to read the Getting Started Guide below.


## Pull Request

1. Fork [this](https://github.com/tsinghua-lau/fusion-ui)
2. Enter the local project root directory and use ```pnpm i``` to install dependencies.
3. Enter the ```docs``` directory and use ```pnpm i``` to install dependencies.
4. Use ```pnpm run docs:dev``` to start the project and view the document.
5. Please ```git pull``` the latest code before submitting to avoid file conflicts.
6. Submit git commit, Please abide by it at the same time. [Commit Standard](#Commit)。
7. Submit Pull Request。

### Commit

The following is a list of commit types:

- feat: New features or functions
- fix: Defect repair
- docs: Document updates
- style: Code style or component style update
- refactor: Code refactoring without introducing new functions and defect fixes
- perf: performance optimization
- test: unit testing 
- chore: Submission of other unmodified src or test files

Take for example:
```
git commit -m 'fix: xxxxx'
git commit -m 'feat: add xxxxx'
git commit -m 'docs: update xxxxx'
```
If you haven't submitted pr on github, it doesn't matter. You can refer to it.[Here](https://blog.csdn.net/gentleman_hua/article/details/123816150?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169199126416800188573391%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=169199126416800188573391&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-123816150-null-null.268^v1^koosearch&utm_term=pr&spm=1018.2226.3001.4450)。

## Code of conduct

There is a copy of the project [Code of conduct](./CODE_OF_CONDUCT.md)，I hope that all contributors to the project can strictly abide by it.

## License

[MIT Negotiate](./LICENSE).
