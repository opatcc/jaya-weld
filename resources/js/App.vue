<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item to="/home" @click="drawer = false" title="Home" />
        <v-list-item to="/about" @click="drawer = false" title="About" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="white" dark density="comfortable">
      <!-- Desktop (md and up): centered buttons -->
      <template v-if="mdAndUp">
        <v-img
          src="public/assets/images/jaya-weld-logo.png"
          width="60px"
          height="60px"
        ></v-img>
        <v-spacer />
        <div class="d-flex align-center justify-center" style="height: 100%;">
            <v-btn to="/home" variant="text" style="color: #68b900; height: 100%;">Home</v-btn>
            <v-btn to="/about" variant="text" style="color: #68b900; height: 100%;">About</v-btn>
            <v-btn to="/producs" variant="text" style="color: #68b900; height: 100%;">Products</v-btn>
            <v-btn to="/services" variant="text" style="color: #68b900; height: 100%;">Services</v-btn>
            <v-btn to="/media" variant="text" style="color: #68b900; height: 100%;">Media</v-btn>
            <v-btn to="/career" variant="text" style="color: #68b900; height: 100%;">Career</v-btn>
            <v-btn to="/news" variant="text" style="color: #68b900; height: 100%;">News</v-btn>
            <v-btn to="/contact" variant="text" style="color: #68b900; height: 100%;">Contact</v-btn>
        </div>
        <v-spacer />
        <v-btn to="/contact" variant="text" style="color: #68b900; height: 100%;" icon="mdi-cart"></v-btn>
        <v-btn
          to="/profile"
          prepend-icon="mdi-account"
          style="color: #68b900; height: 100%;"
        >
          <template v-slot:prepend>
            <v-icon color="#68b900"></v-icon>
          </template>

          UserName
        </v-btn>
      </template>

      <!-- Mobile: burger + centered title -->
      <template v-else>
        <v-app-bar-nav-icon @click="drawer = !drawer">
            <v-icon color="white">mdi-menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>Jaya Weld</v-toolbar-title>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>

  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#68b900">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div>
      © 2015 - 2025 Jayaweld Industrial Supply Sdn Bhd (1082022-W) [ Products Sitemap ] [ Privacy Policy ]   Visitors: 961222
    </div>

    <v-divider></v-divider>

    <div class="text-caption font-weight-bold opacity-100">
      <strong>Powered by</strong> by NEWPAGES
    </div>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

// useDisplay() returns refs; in the TEMPLATE they auto-unwrap
const { mdAndUp } = useDisplay()
const drawer = ref(false)

const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>
