<template>
  <view class="questionnaire">
    <view class="questionnaire-form">
      <uni-forms
      ref="formRef"
        :modelValue="questionnaireForm"
        :rules="rules"
        validate-trigger="bind"
        label-position="top"
        label-width="100%"
      >
        <uni-forms-item label="1.你是否吸烟" name="isSmoking" required  class="form-item">
          <view class="form-card">
            <uni-data-checkbox
              v-model="questionnaireForm.isSmoking"
              :localdata="[
                { text: '是', value: 'Yes' },
                { text: '否', value: 'No' },
                { text: '偶尔', value: 'Occasionally' },
              ]"
            ></uni-data-checkbox>
          </view>
        </uni-forms-item>

        <uni-forms-item label="2.你是否饮酒" name="isDrinking" required>
          <view class="form-card">
            <uni-data-checkbox
              v-model="questionnaireForm.isDrinking"
              :localdata="[
                { text: '男', value: 'male' },
                { text: '女', value: 'female' },
              ]"
            ></uni-data-checkbox>
          </view>
        </uni-forms-item>

        <uni-forms-item
          label="3.你的饮食习惯符合以下哪项?"
          name="eatingHabits"
          required
        >
          <view class="form-card">
            <uni-data-checkbox
              v-model="questionnaireForm.eatingHabits"
              :localdata="[
                { text: '素食为主', value: 'vegetarian' },
                { text: '荤食为主', value: 'meatEater' },
                { text: '素食、荤食皆可', value: 'both' },
                { text: '多盐,多油,多糖,辛辣为主', value: 'highSalt' },
              ]"
            ></uni-data-checkbox>
          </view>
        </uni-forms-item>

        <uni-forms-item
          label="4.你是否有备孕计划或正处于备孕期?"
          name="isPregnant"
          required
        >
          <view class="form-card">
            <uni-data-checkbox
              v-model="questionnaireForm.isPregnant"
              :localdata="[
                { text: '是', value: 'Yes' },
                { text: '否', value: 'No' },
              ]"
            ></uni-data-checkbox>
          </view>
        </uni-forms-item>


        <uni-forms-item label="5.你是否有以下疾病?" name="disease" required>
          <view class="form-card">
            <uni-data-checkbox
              v-model="questionnaireForm.disease"
              multiple
              :localdata="[
                { text: '无', value: '无' },
                { text: '高血压', value: '高血压' },
                { text: '糖尿病', value: '糖尿病' },
                { text: '冠心病', value: '冠心病' },
                { text: '肾病', value: '肾病' },
                { text: '甲亢', value: '甲亢' },
                { text: '癌症', value: '癌症' },
                { text: '脂肪肝', value: '脂肪肝' },
              ]"
            ></uni-data-checkbox>
          </view>
        </uni-forms-item>
        <view class="submit">
          <button  @click="submitForm">提交</button>
        </view>
      </uni-forms>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const questionnaireForm = ref({
  isSmoking: "",
  isDrinking: "",
  eatingHabits: "",
  isPregnant: "",
  disease: [],
});

const rules = {
  isSmoking: {
    rules: [{ required: true, errorMessage: "请选择是否吸烟" }]
  },
  isDrinking: {
    rules: [{ required: true, errorMessage: "请选择是否饮酒" }]
  },
  eatingHabits: {
    rules: [{ required: true, errorMessage: "请选择饮食习惯" }]
  },
  isPregnant: {
    rules: [{ required: true, errorMessage: "请选择是否有备孕计划或正处于备孕期" }]
  },
  disease: {
    rules: [{ required: true, errorMessage: "请选择是否有以下疾病" }]
  },
};

const formRef: Ref<any | null> = ref(null);
const submitForm =  async () => {
  try {
    const isValid = await formRef.value.validate();
    if (isValid) {
      console.log(questionnaireForm.value);
    }else {
      console.log("表单验证失败");
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="css" scoped>
.questionnaire{
  min-width: 100%;
  min-height: 100%;
  background-color: #ccc;
}
.questionnaire-form {
  width: 90%;
  margin: 20rpx auto;
  padding: 20rpx 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 16rpx;
}

.form-card {
  margin: 20rpx 20rpx;
  width: 100%;
}
</style>
