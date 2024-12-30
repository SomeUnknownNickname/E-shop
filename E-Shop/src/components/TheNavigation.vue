<script>
import SourceData from '../data.json'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNavigation',
  computed: {
    objects() {
      return SourceData.destinations
    },
  },
})
</script>
<template>

  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink
      v-for="object in objects"
      :key="object.id"
      :to="{ name: 'destination', params: { slug: object.slug } }"
    >
      {{ object.name }}
    </RouterLink>
  </div>
</template>

<!-- <script>
import SourceData from '../products.json'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNavigation',
  computed: {
    objects() {
      return SourceData.products
    },
  },
})
</script>
<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink
      v-for="object in objects"
      :key="object.id"
      :to="{ name: 'destination', params: { slug: object.slug } }"
    >
      {{ object.name }}
    </RouterLink>
  </div>
</template> -->
