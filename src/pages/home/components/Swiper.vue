<template>
  <!-- wrapper是为了防止布局抖动 -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
       <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',  //分页圆点 .swiper-pagination
        loop: true,   //开启循环轮播
        autoplay: 2500,
        speed: 1000,
      },
      swiperList: [{
        id: '0001',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg"
      }, {
        id: '0002',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1808/8a/1957a0fb58ad0402.jpg_750x200_e72b8c0f.jpg"
      }, {
        id: '0003',
        imgUrl: "https://img1.qunarzz.com/piao/fusion/1808/57/9260f604f7215b02.jpg_750x200_377ef3f0.jpg"
      }, {
        id: '0004',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg"
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    // overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 27%  // 200 比 750 的宽高比
    background: #eee
    .swiper-img
      width: 100%
</style>
