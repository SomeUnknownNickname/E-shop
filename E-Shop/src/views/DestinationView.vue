<template>
  <button class="btn" @click="$router.back()">GO Back</button>
  <h1>{{ destination.name }}</h1>
  <div class="destination-details">
    <p>{{ destination.description }}</p>
    <img :src="'/images/' + destination.image" />
  </div>
  <div>
    <h2>Top Excperients in {{ destination.name }}</h2>
  </div>
  <div class="experiences">
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{ name: 'experience', params: { experienceSlug: experience.slug } }"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
    <RouterView />
  </div>
</template>
<script>
import SourceData from '../data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import SourceData1 from '../products.json'

export default {
  components: {
    ExperienceCard,
  },
  props: {
    slug: { type: String, required: true },
  },
  computed: {
    destination() {
      return SourceData.destinations.find((item) => item.slug == this.slug)
    },
  },
}
</script>
