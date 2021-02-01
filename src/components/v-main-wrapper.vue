<template>
  <div class="v-main-wrapper">
    <v-catalog />
    <v-cart />
  </div>
</template>


<script>
import vCatalog from "./v-catalog";
import vCart from "./v-cart";

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart
  }
};
</script>
<style lang="">
</style>