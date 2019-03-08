# react-boilerplate

大数金科项目前端初始化模版

| 环境 | 地址 | 发布规则 |
| ------ | ------ | ------ |
| dev | http://react-boilerplate.dev.bdfint.cn/ | `dev` 分支自动发布 |
| test | http://react-boilerplate.test.bdfint.cn/ | `master` 分支自动发布 |
| production | https://react-boilerplate.zsteel.cc/ | **手动发布** |

## 说明

## 包含功能

- mobx
- react-router
- typescript
- http-proxy-middleware
- sass
- css-module
- jest

### 浏览器支持

IE 9+

### 运行

dev

```sh
yarn start
```

单元测试（Unit Test）

```sh
yarn test
```

集成测试（Integration Test）

这部分测试代码可以考虑适当交给测试人员编写，需要学习 
[expect-puppeteer](https://github.com/smooth-code/jest-puppeteer/blob/master/packages/expect-puppeteer/README.md#api)
或 
[puppeteer page](https://pptr.dev/#?product=Puppeteer&version=master&show=api-class-page)

```sh
yarn test:integration
```

### 开发设置

* `setupProxy.js` 修改后端代理
* 运行时修改后端 `apiServer` http://localhost:3000//settings?apiServer=https://api.bdfint.cn

### 已知问题

* 一些库和功能在使用 `TypeScript` 时出现类型冲突，如 `@withRouter`
* 
