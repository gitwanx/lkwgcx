# lkwg 站点 · A（lkwgcx）

纯静态站点（HTML + 原生 JS，无构建步骤、无框架），直接丢到任意静态托管就能跑。

与 [`lkwgfdcx`](https://github.com/gitwanx/lkwgfdcx) **同源**：两边的 `admin-data.json` 完全一致，
本仓是文件更全的那一份。

## 页面

| 文件 | 作用 |
|---|---|
| `index.html` | 首页 |
| `login.html` | 登录页 |
| `admin.html` | 管理后台 |

## 数据文件（运行时读写）

`admin-data.json` · `pet-data.json` · `feedback-list.json` ·
`login-log.json` · `operation-log.json` · `query-log.json`

## 与 lkwgfdcx 的差异

| 项 | lkwgcx（本仓） | lkwgfdcx |
|---|---|---|
| 文件数 | 12 | 7 |
| 反馈列表 `feedback-list.json` | ✅ | ✗ |
| 操作日志 `operation-log.json` | ✅ | ✗ |
| 查询日志 `query-log.json` | ✅ | ✗ |
| 密码哈希生成 `generate-hash.js` | ✅ | ✗ |

## 相关仓库

- [`lkwgfdcx`](https://github.com/gitwanx/lkwgfdcx) —— 同源的精简副本
- [`lkwg`](https://github.com/gitwanx/lkwg)（私有）—— 从这两个公开站撤下来的私人原件存档

> ⚠️ 本仓是**公开**的。里面 `admin-data.json` / `login-log.json` / `query-log.json`
> 属于运行时数据，若含真实账号或查询记录，建议按 `lkwg` 的做法撤到私有仓。
