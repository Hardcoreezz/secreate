<template>
  <div class="currency-select">
    <select v-model="model">
      <option
        v-for="(value, key) of options"
        :key="key"
        :value="value"
      >{{ value }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'currencySelect',
    props: {
      options: Array,
      value: String
    },
    computed: {
      model: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.currency-select {
  select {
    width: 100%;
  }
}
</style>