<script lang="ts" setup>
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { mdiAccessPoint, mdiAccount, mdiLock, mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js' // Add icons for theme button
import { useDark, useToggle } from '@vueuse/core'
import type { editor } from 'monaco-editor'
import { computed, ref, shallowRef, watchEffect } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Watch for changes in the Pinia store and update Vuetify's theme dynamically
watchEffect(() => {
  theme.global.name.value = isDark.value ? 'dark' : 'light'
})

const MONACO_EDITOR_OPTIONS: editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}
const code = ref('// some code...')
const monacoeditor = shallowRef<editor.IStandaloneCodeEditor>()

// Computed property that maps your theme to Monaco's theme
const monacoTheme = computed(() => (isDark.value ? 'vs-dark' : 'vs'))

const handleMount = (editorInstance: editor.IStandaloneCodeEditor) => {
  monacoeditor.value = editorInstance
  editorInstance.updateOptions({ wordWrap: 'on' })
  formatCode()
}
// your action
function formatCode() {
  monacoeditor.value?.getAction('editor.action.formatDocument')?.run()
}

// Data for tabs (moved into script setup for consistency with Composition API)
const tab = ref(null)
</script>

<template>
  <v-container fluid>
    <v-row class="flex-nowrap">
      <v-col cols="auto">
        <v-btn
          icon
          variant="text"
          :aria-label="`Toggle to ${isDark ? 'light' : 'dark'} mode`"
          @click="toggleDark()"
        >
          <v-icon :icon="isDark ? mdiWeatherNight : mdiWhiteBalanceSunny"></v-icon>
        </v-btn>
        <v-tabs v-model="tab" direction="vertical">
          <v-tab value="one" :prepend-icon="mdiAccount">Item One</v-tab>
          <v-tab value="two" :prepend-icon="mdiLock">Item Two</v-tab>
          <v-tab value="three" :prepend-icon="mdiAccessPoint">Item Three</v-tab>
        </v-tabs>
      </v-col>
      <v-col>
        <VueMonacoEditor
          v-model:value="code"
          class="editor"
          :theme="monacoTheme"
          :options="MONACO_EDITOR_OPTIONS"
          @mount="handleMount"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.editor {
  min-width: 0;
}

/* https://github.com/atularen/ngx-monaco-editor/issues/71#issuecomment-1761733159 */
:deep(.monaco-editor) {
  position: absolute !important;
}
</style>
