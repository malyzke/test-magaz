<template>
  <div class="v-cart-item">
    <img class="v-cart-item__img" :src="require('../assets/images/' + cart_item_data.image)" alt="">
      <div class="v-cart-item__info">
        <p>{{ cart_item_data.name}}</p>
        <p>{{cart_item_data.price }}$</p>
        <p>{{cart_item_data.article}}</p>
      </div>
      <div class="v-cart-item__quantity">
        <p>Qty:</p>
        <span>
          <span class="v-cart-item__btn"
          @click="decrementItem">-</span>
          {{cart_item_data.quantity}}
          <span class="v-cart-item__btn"
           @click="incrementItem">+</span>
        </span>
      </div>

      <button class="v-cart-item__delete_btn"
       @click="deleteFromCart">
       Delete
       </button>
  </div>
</template>


<script>
export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    },

    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
}
</script>

<style lang="scss">
  .v-cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    &__img{
      max-width: 80px;

    }
    &__btn {
      cursor: pointer;
    }
    &__delete_btn{
      padding: 6px 18px;
      color: #ffffff;
      background-color: rgb(211, 31, 18);
      border: none;
      border-radius: 10%;
      font-size: 15px;
      list-style: none;
    }

}

</style>