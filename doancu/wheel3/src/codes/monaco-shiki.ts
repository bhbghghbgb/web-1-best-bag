import { shikiToMonaco } from '@shikijs/monaco'
import type * as monaco from 'monaco-editor' // Use type * as monaco to match your component
import { getSingletonHighlighter } from './shiki.bundle'

// New: A promise that resolves when the *entire* Monaco-Shiki setup is complete
let monacoShikiSetupPromise: Promise<void> | null = null

export async function setupMonacoEditorWithShiki(monacoInstance: typeof monaco): Promise<void> {
  if (monacoShikiSetupPromise) {
    // If a setup is already in progress or completed, just wait for it to finish.
    console.log('Monaco Shiki setup already in progress/done. Waiting for it to complete.')
    return monacoShikiSetupPromise
  }

  // Start the setup process and store the promise
  monacoShikiSetupPromise = (async () => {
    console.log('Starting Monaco editor setup with Shiki...')
    try {
      const highlighter = await getSingletonHighlighter()
      await highlighter.loadLanguage('javascript')
      await highlighter.loadTheme('slack-dark', 'slack-ochin')

      // Register languages with Monaco
      // Only register languages that Shiki supports and you intend to use
      monacoInstance.languages.register({ id: 'javascript' })
      // ... add other languages

      // Apply Shiki to Monaco
      shikiToMonaco(highlighter, monacoInstance)
      console.log('Monaco editor setup with Shiki complete.')
    } catch (error) {
      console.error('Error during Monaco Shiki setup:', error)
      // Reset the promise on error to allow retries if needed, or handle error
      monacoShikiSetupPromise = null
      throw error // Re-throw to propagate the error
    }
  })()

  return monacoShikiSetupPromise // Return the promise so callers can await its completion
}
