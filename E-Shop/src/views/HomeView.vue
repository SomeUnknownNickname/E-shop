<!-- <template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations">
        <h2>{{ destination.name }}</h2>
        <RouterLink :to="{ name: 'destination', params: { slug: destination.slug } }">
          <img :src="'/images/' + destination.image" :alt="destination.name" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
import SourceData from '../data.json'
export default {
  data() {
    return {
      destinations: SourceData.destinations,
    }
  },
}
</script> -->
<template>
  <div class="home">
    <h1>All products</h1>
    <!-- <div class="products">
      <div v-for="product in products">
        <h5>{{ product.name }}</h5>
        <RouterLink :to="{ name: 'product', params: { slug: product.slug } }">
          <img :src="'/images/' + product.image" :alt="product.name" />
        </RouterLink>
      </div>
    </div> -->
  </div>
</template>
<script>
import SourceData1 from '../products.json'
import SourceData from '../data.json'
export default {
  data() {
    return {
      products: SourceData1.products,
    }
  },
}
</script>
