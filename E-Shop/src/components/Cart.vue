<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <div v-if="cart.length > 0">
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - €{{ item.price }}
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <p>Total: €{{ totalPrice }}</p>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.$emit("remove-from-cart", index);
    },
  },
};
</script>

<style scoped>
.cart {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

button {
  margin-left: 10px;
}
</style>
