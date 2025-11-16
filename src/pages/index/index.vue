<template>
  <view class="index-page">
    <view class="sreach index-card">
      <Sreach />
    </view>
    <view class="shop-tab index-card"></view>
    <view class="bar index-card">
      <Bar />
    </view>
    <view class="advance-notice-card index-card"></view>
    <view class="swiper index-card"></view>
    <view class="hot index-card"></view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Bar from "./component/bar.vue";
import Sreach from "./component/sreach.vue";
</script>

<style scoped>
.index-page {
  background-color: #f5f5f5;
  padding-top: 20rpx;
  min-height: 100vh;
}
.index-card {
  margin: 20rpx 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
}
</style>
