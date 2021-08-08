<template>
  <fieldset>
    <template v-for="(option, index) in options">
      <label :key="index">
        <input
            type="radio"
            :name="name"
            :value="option.value"
            @change="updateValue"
        />{{ option.label }}
      </label>
    </template>
  </fieldset>
</template>

<script>
export default {
  props: {
    value:   { type: String, required: true },
    options: { type: Array, required: true },
    name:    { type: String, required: true },
  },

  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<!-- 呼び出し元の例 -->
<!--  変数optionsには[{label: "hoge", value: "1"}, {label: "fuga", value: "2"}]のようなオブジェクトの配列を設定-->
<!--  <MyRadio-->
<!--      v-model="sampleForm.radio"-->
<!--      name="sample-radio"-->
<!--      :options="options"-->
<!--  ></MyRadio>-->