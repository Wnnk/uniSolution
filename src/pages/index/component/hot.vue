<!--  -->

<template>
  <view class="hot">
    <view class="scroll-view">
      <view class="container-card" v-for="hot in hotList" :key="hot.id">
        <view class="hot-title">
          <view class="title">{{ hot.title }}</view>
          <img src="/src/static/images/hot_icon.png" class="hot-icon" />
        </view>
        <view class="hot-list">
          <view
            class="list-item"
            v-for="(item, index) in hot.list"
            :key="item.title"
          >
            <img
              src="/src//static/images/hot_first.png"
              v-if="index === 0"
              mode="aspectFit"
              class="hot-number"
            />
            <img
              src="/src/static/images/hot-second.png"
              v-else-if="index === 1"
              mode="aspectFit"
              class="hot-number"
            />
            <img
              src="/src/static/images/hot_third.png"
              v-else-if="index === 2"
              mode="aspectFit"
              class="hot-number"
            />
            <view class="production">
              <img :src="item.url" class="production-img" />
              <view class="production-title">{{ item.title }}</view>
              <view class="production-decp">{{ item.decp }}</view>
              <view class="production-hotness">热度：{{ item.hotness }}</view>
              <view class="production-detail">查看</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hotList = ref([
  {
    id: 1,
    title: "父母体检热门榜",
    list: [
      {
        title: "【双11，买1送1】新孝心父母单人体检，甲状腺肾肝胃幽门风湿脑血流",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        hotness: 6308,
        decp: "肝功能，肿瘤检查，胸部CT，影像检查，甲状腺彩超，心电图",
      },
      {
        title: "【双11，买1送1】新孝心甄选体检套餐头胸CT甲状腺心脏超碳14",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        hotness: 5994,
        decp: "肝功能，肿瘤检查，胸部CT，HPV,脑部CT，影像检查，甲状腺彩超，心电图",
      },
      {
        title: "关爱父母 中老年体检套餐 胸部CT/血流变 肿瘤标志物/胃幽门",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        hotness: 1883,
        decp: "胸部CT，肿瘤标志物，幽门螺旋杆菌，甲状腺彩超，心电图",
      },
    ],
  },
  {
    id: 2,
    title: '女性健康热门榜',
    list: [
      {
        title: "【双1】女性高端体检套餐 hpv筛查/妇科tct/12项肿瘤标志物/头颅CT/胸部CT",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        decp: "HPV检查，妇科TCT，肿瘤标志物，头颅CT，胸部CT",
        hotness: 5483,
      },
      {
        title: "【双11】新精选女士体检套餐 妇科HPV TCT/胸部CT/甲状腺彩超",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        decp: "胸部CT, HPV检查，甲状腺彩超，妇科TCT",
        hotness: 4972,
      },
      {
        title: "丽人无忧女性专项体检 妇科TCT/胸部CT/妇科检查/肿瘤标志物",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        decp: "妇科TCT，胸部CT，妇科检查，肿瘤标志物",
        hotness: 1596,
      }
    ]
  },
]);
</script>

<style lang="scss" scoped>

.scroll-view {
  height: 100%;
  overflow-x: auto;
  display: flex;
  gap: 20rpx;
}
/* WebKit 内核（Chrome/微信小程序等） */
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}
.container-card {
  display: flex;
  flex: 0 0 auto;
  width: 650rpx;
  flex-direction: column;
  height: 700rpx;
  .hot-title {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 28rpx;
    background-color: palevioletred;
    display: flex;
    justify-content: space-between;
    border-radius: 16rpx 16rpx 0 0;
    .title {
      color: #481a1a;
    }
    .hot-icon {
      width: 80rpx;
      height: 80rpx;
    }
  }
}

.hot-list {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  .list-item {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-gap: 10rpx;
    margin: 20rpx;
    justify-content: center;
    align-items: center;
    .hot-number {
      width: 80rpx;
      height: 80rpx;
    }
    .production {
      display: grid;
      height: 160rpx;
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
        "img  title title title"
        "img  decp  decp  decp"
        "img  hotness hotness  detail";
      gap: 20rpx;
      .production-img {
        grid-area: img;
        width: 100%; /* 图片占满第一列宽度 */
        height: 100%; /* 图片占满3行总高度 */
        object-fit: cover; /* 图片自适应填充，避免变形 */
      }
      .production-title {
        grid-area: title;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 24rpx;
        color: #481a1a;
      }
      .production-decp {
        grid-area: decp;
        font-size: 20rpx;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .production-hotness {
        grid-area: hotness;
        font-size: 20rpx;
        color: rgba(229, 105, 28, 0.978);
      }
      .production-detail {
        grid-area: detail;
        background-color: rgba(229, 105, 28, 0.978);
        color: #fff;
        border-radius: 16rpx;
        text-align: center;
      }
    }
  }
}
</style>
