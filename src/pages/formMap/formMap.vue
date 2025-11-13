<template>
  <view class="form-map">
    <view class="info-form" v-if="currentPage === 1">
      <uni-forms
        ref="formRef"
        :modelValue="baseFormData"
        :rules="rules"
        validate-trigger="bind"
      >
        <uni-section :title="'基础信息'" type="line"></uni-section>
        <uni-forms-item label="姓名" required name="userName">
          <uni-easyinput v-model="baseFormData.userName" />
        </uni-forms-item>
        <uni-forms-item label="性别" name="gender" required>
          <view class="form-item">
            <uni-data-checkbox
              v-model="baseFormData.gender"
              :localdata="[
                { text: '男', value: 'male' },
                { text: '女', value: 'female' },
              ]"
            ></uni-data-checkbox>
          </view>
        </uni-forms-item>
        <uni-forms-item label="证件类型" name="idCardType" required>
          <view class="form-item">
            <uni-data-select
              :localdata="idCards"
              v-model="baseFormData.idCardType"
            ></uni-data-select>
          </view>
        </uni-forms-item>
        <uni-forms-item label="证件号" name="idNumber" required>
          <view class="form-item">
            <uni-easyinput
              type="number"
              v-model="baseFormData.idNumber"
            ></uni-easyinput>
          </view>
        </uni-forms-item>
        <uni-forms-item label="出生日期" name="birthday">
          <view class="form-item">
            <uni-datetime-picker
              type="date"
              :clear-icon="false"
              v-model="baseFormData.birthday"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item label="手机" required name="userPhone">
          <view class="form-item">
            <uni-easyinput v-model="baseFormData.userPhone" />
          </view>
        </uni-forms-item>
      </uni-forms>
      <view class="btn-box">
        <button @click="submit">好的，开始填写</button>
      </view>
    </view>

    <view v-if="currentPage === 2" class="questionnaire">
      <questionnaire />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import questionnaire from "./questionnaire.vue";
const currentPage = ref(2);
const rules = {
  userName: {
    rules: [{ required: true, errorMessage: "请输入姓名" }],
  },
  gender: {
    rules: [{ required: true, errorMessage: "请选择性别" }],
  },
  idCardType: {
    rules: [{ required: true, errorMessage: "请选择证件类型" }],
  },
  idNumber: {
    rules: [{ required: true, errorMessage: "请输入证件号" }],
  },
  userPhone: {
    rules: [
      { required: true, errorMessage: "请输入手机号" },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: "请输入正确的手机号" },
    ],
  },
};
const formRef: Ref<any | null> = ref(null);
const baseFormData = ref({
  userName: "",
  gender: "",
  idCardType: "",
  idNumber: "",
  birthday: "",
  userPhone: "",
});

const idCards = [
  { text: "身份证", value: "idCard" },
  { text: "护照", value: "passport" },
  { text: "其他", value: "other" },
];

const submit = async () => {
  // 主动调用表单验证
  if (formRef.value) {
    const isValid = await formRef.value.validate();
    if (isValid) {
      // 验证通过，执行提交逻辑
      // console.log("提交成功", baseFormData);
      currentPage.value = 2;
    } else {
      // 验证失败，表单会自动显示错误提示
      console.log("验证失败");
    }
  }
};
</script>

<style scoped lang="css">
.form-map {
  min-height: 100vh;
  min-width: 100vw;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-form {
  width: 80%;
  border-radius: 16rpx;
  margin: 20rpx;
  padding: 20rpx;
  border: 1px solid #fff;
  background-color: #fff;
  z-index: 10;
}
.questionnaire {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ccc;
  width: 100%;
  height: 100%;
}
</style>
