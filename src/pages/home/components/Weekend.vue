<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
        title: '重庆必游TOP10',
        desc: '重庆，非去不可'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg',
        title: '重庆优质汤泉',
        desc: '细数重庆那些最赞的温泉'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg',
        title: '重庆大美古镇',
        desc: '行走重庆最美古镇，让你瞬间穿越千年'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/32/04c5f79b126671.jpg_r_640x214_ffafc4b7.jpg',
        title: '重庆周末去哪儿',
        desc: '虽路途稍远，但绝对值得一去'
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.5%  //由于图片宽高比 214 : 640
  .item-img
    width: 100%
  .item-info
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
</style>
