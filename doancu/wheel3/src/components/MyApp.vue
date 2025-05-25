<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import { computed, ref, shallowRef, watchEffect } from 'vue'

import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import type { editor } from 'monaco-editor'

import { mdiAccessPoint, mdiAccount, mdiLock } from '@mdi/js'

type MonacoEditor = editor.IStandaloneCodeEditor

type ColorScheme = 'light' | 'dark'

// Detect system color scheme preference
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

// can use isPreferredDark directly for :theme, just learning to use ref here
const theme = ref<ColorScheme>('light') // default value

// Watch for changes in system preference
watchEffect(() => {
  theme.value = isPreferredDark.value ? 'dark' : 'light'
})

const MONACO_EDITOR_OPTIONS: editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}
const MONACO_COLOR_SCHEME_MAP = {
  dark: 'vs-dark',
  light: 'vs',
}

const code = ref('// some code...')
const editor = shallowRef<MonacoEditor>()

// Computed property that maps your theme to Monaco's theme
const monacoTheme = computed(() => MONACO_COLOR_SCHEME_MAP[theme.value] || 'vs-dark')

const handleMount = (editorInstance: MonacoEditor) => {
  editor.value = editorInstance
  editorInstance.updateOptions({ wordWrap: 'on' })
  formatCode()
}
// your action
function formatCode() {
  editor.value?.getAction('editor.action.formatDocument')?.run()
}
</script>

<template>
  <v-theme-provider :theme="theme">
    <v-container>
      <v-row class="flex-nowrap">
        <v-col cols="auto">
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
  </v-theme-provider>
</template>

<script lang="ts">
export default {
  data: () => ({
    tab: null,
  }),
}
</script>

<style scoped>
.editor {
  min-width: 0;
}

/* https://github.com/atularen/ngx-monaco-editor/issues/71#issuecomment-1761733159 */
:deep(.monaco-editor) {
  position: absolute !important;
}
</style>
