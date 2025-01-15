<template>
  <div class="product-view">
    <div class="product-title">
      <h1>{{ product.name }}</h1>
    </div>
    <div class="product-content">
      <div class="product-images">
        <img
          :src="'/images/' + product.images[currentImageIndex]"
          alt="Product Image"
        />
        <div class="image-controls" v-if="product.images.length > 0">
          <button @click="prevImage" class="btn"><</button>
          <button @click="nextImage" class="btn">></button>
        </div>
      </div>

      <div class="product-details">
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Price: ${{ product.price }}</p>
        <button class="btn" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import productData from '../products.json';

export default {
  name: 'ProductView',
  props: ['productSlug'],
  data() {
    return {
      product: {},
      currentImageIndex: 0,
    };
  },
  created() {
    this.product = productData.products.find((p) => p.slug === this.productSlug) || {};
  },
  methods: {
    addToCart(product) {
      console.log(`${product.name} added to cart`);
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.product.images.length - 1) {
        this.currentImageIndex++;
      }
    },
  },
};
</script>

<style scoped>
.product-view {
  color: white;
  padding: 20px;
}

.product-title {
  text-align: left;
  margin-bottom: 20px;
}

.product-title h1 {
  font-size: 2.5rem;
  margin: 0;
}

.product-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  align-items: flex-start;
  margin: 0 auto;
}

.product-images {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-images img {
  max-width: 100%;
  border-radius: 8px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
}

.product-images img.active {
  opacity: 1;
  border: 2px solid white;
}

.product-details {
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-description {
  margin-bottom: 20px;
  font-size: 1rem;
}

.product-price {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.button {
  font-size: 1rem;
  padding: 10px 20px;
}
</style>
