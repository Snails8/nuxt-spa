<template>
  <input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
  />
</template>

<script>
export default {
  props: {
    type: { type: String, required: true},
    name: { type: String, required: true},
    value: { type: String, required: true},
    placeholder: { type: String, required: false},
  },

  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value)
    }
  },
};
</script>

<!-- 呼び出し元 例 -->
<!--<template>-->

<!--  <MyInput-->
<!--      v-model="sampleForm.text"-->
<!--      placeholder="サンプル"-->
<!--      name="sample-input"-->
<!--      type="text"-->
<!--  ></MyInput>-->

<!--</template>-->