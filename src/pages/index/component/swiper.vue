<!--  -->

<template>
<view class="swiper">
  <uni-swiper-dot :info=info :current="current" :mode="mode" field="content">
    <swiper class="swiper-box" @change="changeCurrent">
      <swiper-item v-for="(item, index) in info" :key="item.id">
        <view class="swiper-item">
          <view class="item-title">{{ item.content }}</view>
          <img :src="item.url" alt="" class="item-img"/>
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</view>

</template>

<script setup lang='ts'>
import { ref } from 'vue';

const current = ref(0)
const mode = ref('default')
const info = ref([
  {
    id: 1,
    content:'slide1',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
  },
  {
    id: 2,
    content:'slide2',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
  },
  {
    id: 3,
    content:'slide3',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
  }
])
const changeCurrent = (e: any) => {
  current.value = e.detail.current
}
</script>

<style lang='scss' scoped>
.swiper {
  border-radius: 16rpx;
  height: 100rpx;
}
.swiper-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title {
  font-size: 28rpx;
  color: #333;
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
}
.itme-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>