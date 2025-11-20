<template>
  <view class="utils-box">
    <view class="utils-item" v-for="item in utilsList" :key="item.id" @click="item.useMethod()">
			<img :src="item.icon" class="utils-icon" />
      <view  class="utils-use">{{item.name}}</view>
		</view>
  </view>
</template>

<script setup lang="js">
import { saveImg } from "@/utils/saveImg";
import { scanQRcode } from '@/utils/scanQRCodes'
import { ref } from 'vue'

const utilsList =ref([
	{
		id: 1,
		name: '保存页面',
		icon: '/static/logo.png',
		useMethod:saveImg
	},
	{
		id: 2,
		name: '扫码',
		icon: '/static/images/QR.jpg',
		useMethod:scanQRcode
	}
])


</script>

<style>
.utils-box {
  display: grid;
  grid-template-columns: repeat(4,1fr);
	align-items: center;
  gap: 20rpx;
}
.utils-item {
	width: 160rpx;
	height: 160rpx;
	display: grid;
	grid-template-rows: 1fr 1fr;
	align-items: center;
	justify-content: center;
}
.utils-icon {
	width: 80rpx;
	height: 80rpx;
}

.utils-use {
	width: 80rpx;
	height: 80rpx;
	text-align: center;
}
</style>
