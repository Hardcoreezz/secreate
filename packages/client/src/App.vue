<template>
  <div id="app">
    <createProduct @addToCart="addToCart"/>
    <div class="products">
      <product
        v-for="(product, key) of products"
        :product="product"
        :keyProduct="key"
        :key="key"
        :currencySymbols="currencySymbols"
        @deleteProduct="deleteProduct"
      />
      <div v-if="!products.length" class="empty">Ваша козина пуста</div>
      <button @click="calculatePrice" class="count-price" v-else>Рассчитать</button>
    </div>
    <div v-if="Object.keys(calculatedPrice).length" class="calculated-price">
      <p>Рассчитанная стоймость:</p>
      <div v-for="(price, key) in calculatedPrice" :key="key" class="price">
        {{ key }} {{ price.toFixed(2) }} {{ currencySymbols[key] }}
      </div>
    </div>
  </div>
</template>

<script>
import createProduct from './components/createProduct'
import product from './components/product'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    createProduct,
    product
  },
  data() {
    return {
      products: [],
      calculatedPrice: {},
      currencySymbols: {
        RUB: '₽',
        USD: '$',
        EUR: '€'
      }
    }
  },
  methods: {
    addToCart(product) {
      this.products.push(product)
    },
    deleteProduct(key) {
      this.products.splice(key, 1)
      this.calculatedPrice = {}
    },
    calculatePrice() {
      let data = []
      for (let product of this.products) {
        data.push({
          currency: product.currency,
          price: product.price,
          quantity: product.quantity
        })
      }
      axios.post('http://localhost:3000/calculate-cart-price', data).then(response => {
        this.calculatedPrice = response.data
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  .products {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;

    .empty {
      margin: 12px auto;
      font-size: 18px;
    }

    .count-price {
      background-color: #008CBA;
      border: none;
      color: white;
      padding: 12px;
      width: 200px;
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
  }

  .calculated-price {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    justify-content: center;
    margin: 12px auto;
    border-radius: 4px;
    border: 1px solid gray;

    p {
      padding: 12px 0 0 12px;
    }

    .price {
      padding: 12px;
      font-weight: bold;
    }
  }
}
p {
  margin: unset;
}
</style>
