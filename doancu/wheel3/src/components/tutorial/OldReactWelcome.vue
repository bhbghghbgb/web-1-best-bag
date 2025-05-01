<script setup lang="ts">
import OldReactWelcome from './OldReactWelcome'
</script>

<template>
  <div class="oldreact-root">
    <div class="oldreact-app-root">
      <OldReactWelcome />
    </div>
  </div>
</template>

<!-- scoped style don't work when using jsx -->
<style>
.oldreact-root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.oldreact-root a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
.oldreact-root a:hover {
  color: #535bf2;
}

.oldreact-root body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

.oldreact-root h1 {
  font-size: 3.4em;
  line-height: 1.1;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

.oldreact-root button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
.oldreact-root button:hover {
  border-color: #646cff;
}
.oldreact-root button:focus,
.oldreact-root button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  .oldreact-root {
    color: #213547;
    background-color: #ffffff;
  }
  .oldreact-root a:hover {
    color: #747bff;
  }
  .oldreact-root button {
    background-color: #f9f9f9;
  }
}

.oldreact-root .oldreact-app-root {
  /* max-width: 1280px; */
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.oldreact-root .logo {
  height: 9.6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.oldreact-root .logo.oiiai {
  width: 9.6em;
}
.oldreact-root .logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.oldreact-root .logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}
.oldreact-root .logo.ts:hover {
  filter: drop-shadow(0 0 2em #d5f6ffaa);
}
.oldreact-root .logo.oiiai:hover {
  filter: drop-shadow(0 0 2em #524939aa);
}

@keyframes oldreact-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .oldreact-root a:nth-of-type(2) .logo {
    animation: oldreact-logo-spin infinite 20s linear;
  }
}

.oldreact-root .card {
  padding: 2em;
}

.oldreact-root .read-the-docs {
  color: #888;
}

.oldreact-root p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
</style>
