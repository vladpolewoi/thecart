<template>
  <div class="container">
    <div class="row justify-content-center">
      <Cart />
    </div>
    <div class="row products" v-if="products.length">
      <div 
        v-for="product in products"
        :key="product._id"
        class="col-3"
      >
        <Card v-bind="product" v-b-modal="'modal-product'"/>
      </div>
    </div>
    <div class="d-flex justify-content-center products" v-else>
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <ModalThankYou />
    <ModalProduct />
  </div>
</template>

<script>
import Card from './../components/Card'
import Cart from './../components/Cart'
import ModalThankYou from './../components/ModalThankYou'
import ModalProduct from './../components/ModalProduct'


import { mapActions, mapGetters } from 'vuex'

export default {
  components: { Card, Cart, ModalThankYou, ModalProduct },
  data () {
    return {
      selected : {}
    }
  },
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    })
  },
  created () {
    this.fetchProducts()
  }
}
</script>
