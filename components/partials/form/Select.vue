<template>
  <fieldset>
    <select :name="name" @change="updateValue">
      <template v-for="(option, index) in options">
        <option :value="option.value" :key="index">
          {{ option.label }}
        </option>
      </template>
    </select>
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
  },

  // 何も選択していない場合、初期選択の値を送信
  mounted() {
    this.$emit("input", this.options[0].value);
  },
};
</script>


<!-- 呼び出し元の例 -->
<!--  変数optionsには[{label: "hoge", value: "1"}, {label: "fuga", value: "2"}]のようなオブジェクトの配列を設定-->

<!--  <MySelect-->
<!--      v-model="sampleForm.select"-->
<!--      name="sample-select"-->
<!--      :options="options"-->
<!--  ></MySelect>-->