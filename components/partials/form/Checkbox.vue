<template>
  <fieldset>
    <template v-for="(option, index) in options">
      <label :key="index">
        <input
            type="checkbox"
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
    options: { type: Array, required: true },
    name:    { type: String, required: true },
  },

  data() {
    return {
      values: []
    };
  },

  methods: {
    updateValue: function(e) {
      // 複数選択可能なのでcheck 状態を監視し配列を送る
      if (e.target.checked) {
        this.values.push(e.target.value);
      } else {
        this.values = this.values.filter(v => v !== e.target.value);
      }
      this.$emit("input", this.values);
    }
  },
};
</script>

<!-- 呼び出し元の例 -->
<!--  変数optionsには[{label: "hoge", value: "1"}, {label: "fuga", value: "2"}]のようなオブジェクトの配列を設定-->

<!--  <MyCheckbox-->
<!--      v-model="sampleForm.checkbox"-->
<!--      name="sample-checkbox"-->
<!--      :options="options"-->
<!--  ></MyCheckbox>-->