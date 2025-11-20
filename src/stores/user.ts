import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", 
  () => {
    const user = ref({
      name:'测试姓名',
      id:'测试id',
      phone:'测试手机号',
      scheduledTime: '测试时间',
      scheduledLocation: '测试地点',
      avator: '/static/images/avator.png',
      company: '测试公司名字',
    })

    return {
      user,
    }
  },
  {
    persist: {
      storage: {
        getItem:uni.getStorageSync,
        setItem:uni.setStorageSync,
      }
    }
  }
);

