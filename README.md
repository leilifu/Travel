# mytravel
> A Vue.js project

Vuejs开发旅游页项目

## 项目相关 npm 依赖包
- fastClick: 用来处理移动端 `click` 事件 300毫秒延迟
- stylus: CSS 预处理框架
- stylus-loader
- vue-awesome-swiper: 轮播插件
- axios: 实现 `ajax`

## 设置样式变量
通过 variable.styl 设置样式变量，抽离出公用样式。以方便维护

# 首页
## HomeSwiper 组件
### 使用 vue-awesome-swiper 轮播插件
使用 2.6.7 版本
```
npm install vue-awesome-swiper@2.6.7 --save
```
具体参考 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

轮播图当中的 `CSS` 样式重点
该样式主要是防止网速过慢时页面布局的抖动，其含义是，`wrapper` 宽度 `100%`，高度由宽度的 `27%` 自动撑开。
```CSS
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 27%;  
}
```
或者写成
```CSS
.wrapper {
  width: 100%;
  height: 27vw;
}
```

## HomeIcons 组件
### iconsList 分页
同样使用 `swiper` 进行分页，并利用以下方式实现自动构建多页切换的功能
```JavaScript
computed: {
  //根据数据项目的不同，自动构建icons多页切换功能
  pages () {
    const pages = []
    this.iconsList.forEach((item, index) => {
      const page = Math.floor(index / 8)
      if (!pages[page]) {
        pages[page] = []
      }
      pages[page].push(item)
    })
    return pages
  }
}
```
### ellipsis()样式封装
将 `ellipsis` 封装在 `mixins.styl` 文件中
```JavaScript
ellipsis()
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
```

## Recommend / Weekend 组件
设置 `min-width` 是为了让 `ellipsis()` 生效
```css
.item-info {
  flex: 1;
  padding: .1rem;
  min-width: 0;
}
```

## index-ajax
使用 `axios` 进行 ajax 请求
```
npm install axios --save
```
### .gitignore 设置
添加 `staitc/mock`，防止被推送到仓库

### 设置 mock数据 开发环境转发代理
设置 `config` 文件夹下的 `index.js`

设置 `module.exports` 下 `dev` 的 `proxyTable` 代理

webpack-dev-server 工具会自动将 `/api` 替换成 `/static/mock`
```JavaScript
proxyTable: {
  '/api': {
    target: 'http://localhost:8080',
    pathRewrite: {
      '^/api': '/static/mock'
    }
  }
}
```
