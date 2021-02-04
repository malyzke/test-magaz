<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: { cart_data: CART }}">
      <div class="v-catalog__link_to_cart"> Cart:{{ CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__list ">
      <v-catalog-item
        v-for="product in this.$store.state.products"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item"
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters ([
      'PRODUCTS',
      'CART'
    ])
  },
  methods : {
    ...mapActions ([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  &__link_to_cart{
    position: absolute;
    top: 30px;
    right: 10px;
    padding: 14px;
    border: 2px solid #aeaeae;
    box-shadow: 0 0 8px 0 #e0e0e0;

  }
}
</style>
