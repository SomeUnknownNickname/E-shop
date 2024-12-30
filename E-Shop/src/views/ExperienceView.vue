<script>
import SourceData from '@/data.json'
import SourceData1 from '../products.json'

export default {
  name: 'ExperienceView',
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return SourceData.destinations.find((item) => item.slug == this.slug)
    },
    experience() {
      return this.destination.experiences.find((item) => item.slug == this.experienceSlug)
    },
  },
}
</script>

<template>
  <div class="experience-details">
    <div>
      <h2>{{ experience.name }}</h2>
      <div>
        <img :src="'/images/' + experience.image" :alt="experience.name" />
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </div>
  <button class="btn" @click="$router.back()">GO Back</button>
</template>
