<template>
  <view class="index-page">
    <view class="sreach-component index-card" :class="{ 'sticky':isSticky }">
      <Sreach />
    </view>
    <view class="shop-tab ">
      <Tag />
    </view>
    <view class="bar index-card">
      <Bar />
    </view>
    <view class="advance-notice-card index-card">
      <userCard />
    </view>
    <view class="swiper index-card">
      <Swiper />
    </view>
    <view class="hot index-card">
      <Hot />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Bar from "./component/bar.vue";
import Sreach from "./component/sreach.vue";
import Tag from "./component/tag.vue";
import userCard from "./component/userCard.vue";
import Swiper from "./component/swiper.vue";
import Hot from "./component/hot.vue";

const isSticky = ref(false);
// setTimeout(() => {
//   isSticky.value = true;
// }, 1000);

</script>

<style scoped>
.index-page {
  background-color: #f5f5f5;
  padding-top: 20rpx;
  min-height: 100vh;
}
.sreach-component {
  transition: all 0.3s ease-in-out; /* 添加过渡效果 */
}
.sreach-component.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  margin: 14rpx 0;
  z-index: 999;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);;
}
.index-card {
  margin: 20rpx 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
}

.shop-tab{
  margin: 20rpx 20rpx;
}
</style>
