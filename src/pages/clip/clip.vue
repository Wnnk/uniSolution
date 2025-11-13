<template>
	<view class="">
		<image src="/static/logo.png"></image>
		<button @click="save">保存页面</button>
	</view>
</template>

<script setup lang="ts">
	import { onMounted } from "vue";
	import { saveImg } from "@/utils/saveImg";

	const save = () => {
		console.log('按下按钮')
		saveImg("/static/logo.png")
	}
</script>

<style>
</style>