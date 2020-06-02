<template>
  <div class="quantity">
    <button @click="model--">-</button>
    <p>{{ model }}</p>
    <button @click="model++">+</button>
  </div>
</template>

<script>
export default {
  name: 'quantityInput',
  props: {
    value: Number
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        if (val !== 0) this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.quantity {
  display: flex;
  max-width: 100px;

  button {
    background-color: #008CBA;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #0099B0;
    }
  }
  p {
    margin: auto;
  }
}
</style>