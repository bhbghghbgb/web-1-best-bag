<script setup lang="ts">
import OldReactWelcome from './components/tutorial/OldReactWelcome.vue'
import VueWelcome from './components/tutorial/VueWelcome.vue'
import MyApp from './components/MyApp.vue'
</script>

<template>
  <v-app>
    <!-- <v-app-bar title="My Vue App"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Components"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <v-container class="pa-0 d-flex flex-column" fluid>
        <MyApp />
        <VueWelcome class="py-6" />
        <OldReactWelcome />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
/* You can keep your custom styles if needed, but Vuetify classes handle most spacing */
</style>
