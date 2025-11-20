<template>
  <view class="sreach" > 
    <view class="current-address">广州</view>
    <view class="container">
      <img src="/src/static/images/sreach.jpg" class="sreach-icon">
      <view class="sreach-input">
        <input type="text" v-model="searchValue" placeholder="请输入搜索内容"></input>
      </view>
    </view>
    <view class="btn"> {{ searchValue.length > 0? "搜索" : "取消" }}</view>
  </view>


</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const searchValue = ref("");




const search = () => {};

const cancel = () => {};
</script>

<style lang="scss" scoped>

.sreach {
 display: grid;
  grid-template-columns: auto 1fr auto; /* 用 auto 适应内容宽度 */
  gap: 16rpx; /* 列之间的间距 */
  height: 60rpx;
  align-items: center;
  padding: 0 20rpx;
  transition: all 0.3s ease-in-out; /* 添加过渡效果 */
}

.current-address{
  display: inline-flex; /* 让文字和伪元素在同一行，且伪元素垂直居中 */
  align-items: center;  /* 伪元素垂直居中 */
  font-size: 28rpx;
  color: #333;
   /* 伪元素：倒三角 */
  &::after {
    content: "";
    display: inline-block; /* 关键：让伪元素成为行内元素，跟随文字 */
    margin-left: 8rpx;     /* 文字和三角的间距（可调整） */

    /* 倒三角样式 */
    border-width: 10rpx;
    transform: translateY(25%);
    border-style: solid;
    border-color: #8a8989 transparent transparent  transparent;
  }
}

/**
 * 搜索框样式
 */
.container {
  display: flex;
  align-items: center;
  border-radius: 16rpx;
  padding: 0 20rpx;
  height: 100%;

  .sreach-icon {
    width: 32rpx;
    height: 32rpx;
    margin-right: 10rpx;
  }

  .sreach-input {
    flex: 1;
    height: 100%;

    input {
      width: 100%;
      height: 100%;
      font-size: 24rpx;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
}

/**
 * 搜索按钮
 */
.btn {
  font-size: 28rpx;
  background-color: #007aff;
  color: #fff;
  padding: 10rpx 20rpx;
  border-radius: 16rpx;
}
</style>
