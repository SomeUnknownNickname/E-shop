<template>
  <div class="page-container">
    <main class="content">
      <slot></slot>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-links-container">
          <div class="links">
            <ul class="footer-links">
              <li v-for="link in footerLinks" :key="link.text">
                <a :href="link.url">{{ link.text }}</a>
              </li>
            </ul>
            <p class="footer-note">Created by Vladyslav Shaposhnikov. All rights defended.</p>
          </div>
          <div class="location">
            <h4>Our Location</h4>
            <p>123 Main Street<br>City Name, Country</p>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508171!2d-122.41941568468144!3d37.77492977975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858184b00d71fb%3A0xd6546b5e034a4fc5!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094115%2C%20USA!5e0!3m2!1sen!2s!4v1690486056878!5m2!1sen!2s"
                width="200"
                height="150"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        { text: "Home", url: "/" },
        { text: "Shop", url: "/shop" },
        { text: "About Us", url: "/about" },
        { text: "Contact", url: "/contact" },
        { text: "Privacy Policy", url: "/privacy" },
      ],
    };
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 0;

}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.footer-links-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.links {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin: 5px 0;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}

.footer-links a:hover {
  transform: scale(1.1);
  transition: all 0.3s;
}

.footer-note {
  margin-top: 20px;
  font-size: 0.9rem;
  text-align: left;
  color: #ccc;
}

.location {
  flex: 1;
  max-width: 300px;
}

.location h4 {
  margin: 0 0 10px;
}

.location {
  flex: 1;
  max-width: 300px;
  transform: translateX(-40%);
}

.location p {
  margin: 0 0 20px;
  line-height: 1.5;
}

.map iframe {
  border: 0;
  width: 100%;
  height: auto;
  max-height: 200px;
}
</style>
