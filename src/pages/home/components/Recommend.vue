<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg',
        title: '武隆天坑地缝国家地质公园',
        desc: '将壮观诠释到完美，将梦想展示给世界'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/7b/7bf5984d7e6a3c2da3.img.jpg_200x200_5fb349d9.jpg',
        title: '重庆欢乐谷',
        desc: '游乐天地欢乐谷'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/6b/6b76d111854eb88ba3.img.jpg_200x200_ccfe9d56.jpg',
        title: '重庆汉海海洋公园',
        desc: '感受神奇水世界'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/63/63fe678289357513a3.img.jpg_200x200_362e3073.jpg',
        title: '乐和乐都主题公园',
        desc: '不一样的游乐体验'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/08/8638c7dbd656cafac8d65eac.jpg_200x200_4824cf98.jpg',
        title: '黑山谷',
        desc: '美丽的黑山谷风景区'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201401/09/4dfba4792c7572b427ba445e900c3552.jpg_200x200_88ffeccf.jpg',
        title: '金刀峡',
        desc: '风景这边独好'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0   //设置 min-width 是为了让 ellipsis() 生效
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .2rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
