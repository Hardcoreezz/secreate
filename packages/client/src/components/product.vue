<template>
  <div class="product">
    <div class="product-cell">
      <p>Название</p>
      <span>{{ product.name }}</span>
    </div>
    <div class="product-cell">
      <p>Количество</p>
      <quantityInput v-model="product.quantity" />
    </div>
    <div class="product-cell">
      <p>Выберите валюту</p>
      <currencySelect v-model="product.currency" :options="currencyOptions" />
    </div>
    <div class="product-cell">
      <p>Цена</p>
      <span>{{ product.price }} {{ currencySymbols[product.currency] }}</span>
    </div>
    <span class="delete" @click="deleteProduct">&#215;</span>
  </div>
</template>

<script>
import quantityInput from './quantityInput'
import currencySelect from './currencySelect'

export default {
  name: 'product',
  props: {
    product: Object,
    keyProduct: Number,
    currencySymbols: Object
  },

  data() {
    return {
      currencyOptions: [
        'RUB',
        'USD',
        'EUR'
      ]
    }
  },
  components: {
    currencySelect,
    quantityInput
  },
  methods: {
    deleteProduct() {
      this.$emit('deleteProduct', this.keyProduct)
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  display: flex;
  justify-content: center;
  padding: 12px;
  margin: 12px 0;
  border-radius: 4px;
  border: 1px solid gray;
  .product-cell {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    justify-content: center;
    width: 25%;
    p {
      font-size: 14px;
      margin-bottom: 8px;
    }
    span {
      font-weight: bold;
    }
  }
  .delete {
    margin: auto;
    cursor: pointer;
    color: red;
  }
}
</style>