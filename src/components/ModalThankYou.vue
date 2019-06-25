<template>
  <b-modal centered hide-header hide-footer id="modal-thank-you">
    <div class="text-center">
      <h1>Thanks for purchase!</h1>
      <button
        @click="$root.$emit('bv::hide::modal', 'modal-thank-you', '#modal-thank-you')"
        class="btn modal__btn orange"
      >
        continue shopping
      </button>
    </div>
  </b-modal>
</template>
