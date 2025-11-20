<template>
  <view class="tab-row">
    <view class="tab-scroll">
      <view class="tab-item" v-for="item in tabList" :key="item.value" @click="toPage(item.url)">
        {{ item.label }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const tabList = [
  {
    label: "女性",
    value: "female",
    url:'',
  },
  {
    label: "入职",
    value: "onboarding",
    url:'',
  },
  {
    label: "中老年",
    value: "middle-aged",
    url:'',
  },
  {
    label: "胃镜",
    value: "gastroscopy",
    url:'',
  },
  {
    label: "HPV",
    value: "hpv",
    url:'',
  },
  {
    label: "男性",
    value: "male",
    url:'',
  },
  {
    label: "爸妈",
    value: "parent",
    url:'',
  },
];

const toPage = (url: string) => {
  uni.navigateTo({ url });
}
</script>

<style lang="scss" scoped>
.tab-row {

}
.tab-scroll {
  overflow-x: auto;
  display: flex;
  gap: 20rpx;
  flex-wrap: nowrap;
}
::-webkit-scrollbar {
display: none;
width: 0;
height: 0;
color: transparent;
}
.tab-item {
  /* 固定宽度大小 */
  min-width: 120rpx;
  /* 文字居中 */
  text-align: center;
  /* 字体大小 */
  font-size: 32rpx;
  border-radius: 32rpx;
  padding: 10rpx 0;
  background-color: #fff;
  white-space: nowrap;
}
</style>
