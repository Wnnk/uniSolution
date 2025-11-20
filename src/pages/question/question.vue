<template>
  <view class="question-page">
    page 1
  </view>
</template>

<script setup lang='ts'>
import { onHide, onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';

const hidePageCount = ref(0);
const hidePage = () => {
  console.log('hide page');
  hidePageCount.value++;

}

const showPage = () => {
  console.log('show page', hidePageCount.value);
  if (hidePageCount.value > 0) {
    uni.showModal({
      title: `考试期间不允许离开,剩余${5 -hidePageCount.value}次`,
      content: '请不要关闭页面，否则无法提交答案',
      showCancel: false,
    })
  }
}
onHide(() => {
  hidePage();
})

onShow(() => {
  showPage();
})
</script>

<style lang='scss' scoped>
</style>