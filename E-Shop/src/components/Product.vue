<template>
  <div class="product-container">
    <div class="product" v-for="(product, id) in products" :key="id">
      <RouterLink :to="{ name: 'product', params: { slug: product.slug } }">
        <img :src="'/images/' + product.image" :alt="product.name" />
        <h4>{{ product.name }}</h4>
        <h6 >{{ product.price }}</h6>
      </RouterLink>
    </div>

  </div>
</template>

<script>
import SourceData1 from '../products.json'
export default {
  Product: {
    name: 'Product',
    props: {
      slug: { type: String, required: true },
    },
    computed: {
      product() {
        return SourceData1.products.find((item) => item.slug == this.slug)
      },
    },
  },
  data() {
    return {
      products: SourceData1.products,
    }
  },
}
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.product {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
}
.product:hover {
  background-color: #f4f4f4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.product img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
