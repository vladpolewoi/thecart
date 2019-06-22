<template>
  <div id="app"></div>
</template>

<script>
export default {
  created() {
    fetch("http://localhost:8090/products")
      .then(response => response.json())
      .then(({ data }) => {
        console.log("data", data);
      });
  }
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
