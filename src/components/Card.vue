<template>
  <div class="card" @click="onClick">
    <img :src="photo" class="card-img-top card__image" alt="img">
    <div class="card-body">
      <p class="card-title">{{ name }}</p>
      <p class="card__price text-right">{{ price | price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: String,
    photo: String,
    _id: String,
    description: String
  },
  methods: {
    onClick () {
      this.$store.dispatch('changeSelected', this._id)
    }
  }
}
</script>

