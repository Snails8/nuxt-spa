<template>
  <textarea
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :rows="rows"
      :cols="cols"
      @input="updateValue"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: false },
    rows: { type: Number, required: false },
    cols: { type: Number, required: false }
  },

  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  },
};
</script>

<!-- 呼び出し元の例 -->
<!--<template>-->
<!--  -->
<!--  <MyTextarea-->
<!--      v-model="sampleForm.textarea"-->
<!--      placeholder="サンプル"-->
<!--      name="sample-textarea"-->
<!--      :rows="10"-->
<!--      :cols="50"-->
<!--  ></MyTextarea>-->
<!--  -->
<!--</template>-->