<template>
  <b-modal centered hide-header hide-footer id="modal-product">
    <div class="text-center">
      <img :src="data.photo" alt="image" class="modal__image">
      <h3>{{ data.name }}</h3>
      <p class="modal__description">{{ data.description }}</p>
      <div class="modal__footer">
        <p>{{ data.price | price }}</p>
        <button
          @click="onAddToCart"
          class="btn modal__btn orange"
        >
          add to cart
        </button>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  methods: {
    onAddToCart () {
      this.$store.dispatch('addToCart', {
        count: 1,
        price: Number(this.data.price)
      })
      this.$root.$emit('bv::hide::modal', 'modal-product', '#modal-product')
    }
  },
  computed: {
    data () {
      return this.$store.getters['getSelected'] || {}
    }
  }
}
</script>

