<template>
	<view class="list-container">
		<scroll-view scroll-y='true' @scroll="loadMore" class="scroll-list">
			<view v-for="item in list" :key="item.key" class="item">
				{{ item }}
			</view>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
	const list = ref([]) as any[]
	for(let i = 0; i < 30; i++ ){
		list.value.push({
			id:i,
			name:`name${i}`
		})
	}
	const status = ref(0)
	const page = ref(2)
	const pageSize = ref(10)
	const total = ref(0)
	const clientHeight = ref(0)
	const getclientHeight  = () => {
		uni.createSelectorQuery()
		.select('.scroll-list')
		.boundingClientRect(data => {
			clientHeight.value = data.height
		})
		.exec()
	}
	onMounted(() => {
		getclientHeight()
	})
	const nearBottomThreshold = 200
	const nearTopThreshold = 100
	function loadMore(e:any) {
		const { scrollTop, scrollHeight  } = e.detail
		const distanceToBottom = scrollHeight - scrollTop - clientHeight.value
		const isNearBottom = distanceToBottom <= nearBottomThreshold
		/* 执行请求增量数据 */
		
		const isNearTop = scrollTop < nearTopThreshold && page.value > 1
		console.log(isNearTop)
	}
	/**
	 * @description: 滚动请求增量数据
	 * 
	**/
	const scrollLoad = () => {
		
	}
</script>

<style>
	.scroll-list{
		height: 100vh;
	}
	.item {
		height: 200rpx;
		width: 100%;
		margin: 10rpx 0;
		background-color: aquamarine;
	}
</style>