<template>
  <view class="user-card">
    <view class="info">
      <view class="user">
        <img src="/static/images/avator.png" class="avator" /> 
        <view class="name">{{ user.name }}</view>
      </view>
      <view v-if="user.company"> {{ user.company }}</view>
      <view v-if="user.scheduledLocation"> {{user.scheduledLocation }} </view>
      <view v-if="user.scheduledTime"> {{ user.scheduledTime }} </view>
    </view>
    <view class="advance-notice">
      <view class="notice-btn">预约通知</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { computed } from "vue";
const userStore = useUserStore();

const user = computed(() => userStore.user);
</script>

<style lang="scss" scoped>
.user-card {
  background-color: #388ee9;
  height: 200rpx;
  border-radius: 16rpx;
  color: #fff;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 24rpx;
  height: 100%;
  flex-wrap: wrap;
  .user{
    display: flex;
    gap:20rpx;
    .avator{
      width: 48rpx;
      height: 48rpx;
      border-radius: 50%;
    }
  }
 
}
.advance-notice {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  .notice-btn{
    background-color: #fff;
    color: #388ee9;
    border-radius: 12rpx;
    margin: 10rpx;
    padding: 10rpx;
    font-size: 24rpx;
    font-weight: 500;
  }
}
</style>
