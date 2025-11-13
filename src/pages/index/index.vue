<template>
  <view class="index-page">
    <view class="container">
      <uni-card
        is-full
        v-for="item in menu"
        :key="item.value"
        @click="toView(item.value)"
      >
        <image :src="item.image" class="menu-image" mode="widthFix"></image>
        <text> {{ item.label }}</text>
      </uni-card>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const menu = ref([
  {
    label: "列表",
    image: "/static/images/list.png",
    value: "/pages/list/list",
  },
  {
    label: "网络图片下载本地",
    image: "/static/images/clip.png",
    value: "/pages/clip/clip",
  },
  {
    label: "基础表单",
    iamge: "",
    value: "/pages/formMap/formMap",
  },
]);

const toView = (url: string) => {
  uni.navigateTo({
    url,
  });
};
</script>

<style>
@import url("index.css");
</style>
