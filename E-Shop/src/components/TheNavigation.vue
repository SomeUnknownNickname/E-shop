<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "TheNavigation",
  data() {
    return {
      HeaderLinks: [
        { text: "Home", url: "/" },
        { text: "Shop", url: "/shop" },
        { text: "About Us", url: "/about" },
        { text: "Contact", url: "/contact" },
        { text: "Privacy Policy", url: "/privacy" },
      ],
    };
  },
});
</script>

<template>
  <div id="nav">
    <div class="nav-left">
      <img src="/public/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="nav-links">
      <a
        v-for="link in HeaderLinks"
        :key="link.text"
        :href="link.url"
      >
        {{ link.text }}
      </a>
    </div>
    <div class="nav-right">
      <img src="/public/shopping_cart.png" alt="Shopping cart" class="shopping-cart" />
    </div>
  </div>
</template>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
}

.nav-left {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 1;
  transform: scale(1.1);
  transition: all 0.3s;
}

.nav-right {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
}

.shopping-cart {
  width: 30px;
  cursor: pointer;
  padding-right: 10px;
}
</style>
