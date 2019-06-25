<template>
  <div class="cart d-flex justify-content-around">
    <img src="./../assets/icons/cart.svg" alt="cart" class="cart__image">
    <div>
      <p class="cart__text">{{ itemsCount }}</p>
      <p class="cart__text">{{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      itemsCount: 'getCartItemsCount',
      totalPrice: 'getCartTotalPrice'
    })
  }
}
</script>
