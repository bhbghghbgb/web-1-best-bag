<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

// Detect system color scheme preference
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

// can use isPreferredDark directly for :theme, just learning to use ref here
const theme = ref('light') // default value

// Watch for changes in system preference
watchEffect(() => {
  theme.value = isPreferredDark.value ? 'dark' : 'light'
})
</script>

<template>
  <v-theme-provider :theme="theme">
    <v-btn>Button</v-btn>
  </v-theme-provider>
</template>
