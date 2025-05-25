/* eslint-disable vue/one-component-per-file */
import oiiaiM from '@/assets/oiiai.webm'
import oiiaiP from '@/assets/oiiai.webp'
import reactLogo from '@/assets/react.svg'
import tsLogo from '@/assets/ts.svg'
import viteLogo from '@/assets/vite.svg'
import { defineComponent, ref } from 'vue'

// Define the inline Oiiai component
const Oiiai = defineComponent({
  name: 'OldReactOiiai',
  setup() {
    const showVideo = ref(false)
    const toggleMedia = (e: MouseEvent) => {
      e.preventDefault()
      showVideo.value = !showVideo.value
    }

    return () => (
      <a style={{ cursor: 'pointer' }} onClick={toggleMedia}>
        <video
          src={oiiaiM}
          hidden={!showVideo.value}
          autoplay
          loop
          muted
          controls={false}
          class="logo oiiai"
        />
        <img src={oiiaiP} hidden={showVideo.value} alt="oiiai cat" class="logo oiiai" />
      </a>
    )
  },
})

export default defineComponent({
  name: 'OldReactWelcome',
  setup() {
    const count = ref(0)
    const incrementCount = () => {
      count.value++
    }

    return () => (
      <>
        <div class="flex justify-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} class="logo react" alt="React logo" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={tsLogo} class="logo ts" alt="Typescript logo" />
          </a>
          <Oiiai />
        </div>
        <h1>Vite + React + TS + Oiiai</h1>
        <div class="card">
          <button onClick={incrementCount}>count is {count.value}</button>
          <p>
            Edit <code>src/App.vue</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">Click on the Vite and React and Typescript logos to learn more</p>
      </>
    )
  },
})
