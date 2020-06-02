<template>
  <div class="create-product">
    <input type="text" placeholder="Введите название продукта" v-model="name">
    <input type="number" placeholder="Введите цену продукта" v-model="price">
    <button class="button" @click="addToCart">Добавить в козину</button>
  </div>
</template>

<script>
  export default {
    name: 'createProduct',
    data() {
      return {
        name: '',
        price: ''
      }
    },
    methods: {
      addToCart() {
        if (!this.name || !this.price) return
        this.$emit('addToCart', {
          name: this.name,
          price: this.price,
          quantity: 1,
          currency: 'RUB'
        })
        this.name = ''
        this.price = ''
      }
    }
  }
</script>

<style scoped lang="scss">
.create-product {
  display: flex;
  max-width: 600px;
  margin: auto;
  height: 32px;
  justify-content: center;

  input {
    border: none;
    font-size: 14px;
    margin-right: 12px;
    border-bottom: 1px solid black;
    outline: none;
    height: auto;
    width: 33%;
  }
  .button {
    background-color: #008CBA;
    border: none;
    color: white;
    width: 33%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #0099B0;
    }
  }
}
</style>