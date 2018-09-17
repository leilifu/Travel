# mytravel
> A Vue.js project

Vuejs开发旅游页项目

## 项目相关 npm 依赖包
- fastClick
- stylus
- stylus-loader
- vue-awesome-swiper

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
