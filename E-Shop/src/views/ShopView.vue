<template>
  <div class="shop-container">
    <div class="shop" v-for="(product, id) in products" :key="id">
      <RouterLink :to="{ name: 'product', params: { productSlug: product.slug } }">
        <img :src="'/images/' + product.images[0]" :alt="product.name" />
        <h4>{{ product.name }}</h4>
        <h6>{{ product.price }}</h6>
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script>
import SourceData from '../products.json'
export default {
  name: 'ShopView',
  data() {
    return {
      products: SourceData.products,
    }
  },
}
</script>

<style scoped>
.shop-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-bottom: 20px;
}

.shop {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
}
.shop:hover {
  background-color: #f4f4f4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.shop img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
