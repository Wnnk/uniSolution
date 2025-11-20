<template>
  <view class="scroll-view">
    <view class="container">
      <view
        class="icon-item"
        v-for="item in menu"
        :key="item.value"
        @click="toView(item.value)"
      >
        <image :src="item.image" class="menu-image" mode="widthFix"></image>
        <text class="menu-label">{{ item.label }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const menu = ref([
  {
    label: "列表",
    image: "/static/images/list.png",
    value: "/pages/list/list",
  },
  {
    label: "工具使用",
    image: "/static/images/clip.png",
    value: "/pages/useUtils/useUtils",
  },
  {
    label: "基础表单",
    image: "/static/images/baseForm.png",
    value: "/pages/formMap/formMap",
  },
  {
    label: '问卷',
    image: '/static/images/question.png',
    value: '/pages/question/question'
  },
]);

const toView = (url: string) => {
  uni.navigateTo({
    url,
  });
};
</script>

<style lang="scss" scoped>
/* 滚动容器：固定2行高度，横向滚动，隐藏滚动条 */
.scroll-view {
  background-color: #fff;
  border-radius: 16rpx;
  overflow-x: auto; /* 允许横向滚动 */
  padding: 0 32rpx;
  /* 关键：固定2行高度（根据图标+文字总高度计算） */
  height: 280rpx; /* 图标50rpx + 文字24rpx + 间距等 ≈ 140rpx/行 × 2行 */

  /* 隐藏滚动条（全平台适配） */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
/* WebKit 内核（Chrome/微信小程序等） */
::-webkit-scrollbar {
display: none;
width: 0;
height: 0;
color: transparent;
}

/* 内容容器：实现2行布局，超出横向滚动 */
.container {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  flex-wrap: wrap; /* 纵向满2行后，自动横向换行 */
  height: 100%; /* 继承滚动容器高度（2行） */
  gap: 20rpx; /* 图标间距（行列统一） */
}

/* 图标项：固定宽高，不收缩 */
.icon-item {
  width: 160rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0; /* 禁止压缩，保证宽度固定 */
}

.menu-image {
  width: 50rpx;
  height: 50rpx;
  border-radius: 16rpx;
}

.menu-label {
  font-size: 24rpx;
  color: #333;
  margin-top: 12rpx;
  white-space: nowrap; /* 文字不换行 */
}
</style>
