<script setup lang="ts">
import OldReactWelcome from './components/tutorial/OldReactWelcome.vue'
import VueWelcome from './components/tutorial/VueWelcome.vue'
import MyApp from './components/MyApp.vue'
</script>

<template>
  <MyApp />
  <div class="welcome">
    <VueWelcome />
    <!-- Test JSX in Vue -->
    <OldReactWelcome />
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  gap: 4em;
}
</style>
