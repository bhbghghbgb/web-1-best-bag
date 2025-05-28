<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// --- Mocking the 'debug' utility for demonstration ---
// In a real project, you would import 'debug' like: import debug from 'debug';
type Debugger = ((formatter: string, ...args: unknown[]) => void) & { enabled: boolean }

const mockDebug = (namespace: string): Debugger => {
  const logger = ((formatter: string, ...args: unknown[]) => {
    // Only log if 'enabled' is true (simulating debug.enabled)
    if (logger.enabled) {
      console.log(`[${namespace}]`, formatter, ...args)
    }
  }) as Debugger
  logger.enabled = true // By default, enable the mock debugger
  return logger
}

// --- 1. Define IDisposable interface (for older pattern compatibility) ---
interface IDisposable {
  dispose(): void
}

// --- 2. Create DebugJobContext class (Original pattern) ---
// This class manages the lifecycle of a logging job using the dispose() method.
class DebugJobContext implements IDisposable {
  private readonly namespace: string
  private readonly jobName: string
  public readonly debugger: Debugger // The actual debugger instance to be returned

  constructor(namespace: string, jobName: string) {
    this.namespace = namespace
    this.jobName = jobName
    this.debugger = mockDebug(namespace) // Initialize the debugger

    // Log job start
    this.debugger(`${jobName} started.`)
  }

  // Implements the dispose method to log job finish
  dispose(): void {
    this.debugger(`${this.jobName} finished.`)
  }
}

// --- 3. Create a unified factory function to mimic Python's 'with' statement ---
// This function accepts both synchronous and asynchronous callbacks.
// It will always return a Promise<T> for consistency, awaiting the result if it's a Promise.
async function withDebugJob<T>(
  namespace: string,
  jobName: string,
  callback: (logger: Debugger) => Promise<T> | T, // Callback can return a Promise or a direct value
): Promise<T> {
  const context = new DebugJobContext(namespace, jobName)
  try {
    const result = callback(context.debugger)
    // If the callback returns a Promise, await it. Otherwise, return the value directly.
    // The 'await' keyword will wrap non-Promise values in a resolved Promise.
    return await Promise.resolve(result)
  } finally {
    // Ensure dispose is called, even if an error occurs in the callback
    context.dispose()
  }
}

// --- 4. New Disposable APIs: DebugJobContextWithNewAPI class ---
// This class demonstrates using the new JavaScript Disposable APIs: Symbol.dispose and Symbol.asyncDispose.
// Requires TypeScript 5.2+ and target ES2023 or later.
class DebugJobContextWithNewAPI {
  private readonly namespace: string
  private readonly jobName: string
  public readonly debugger: Debugger

  constructor(namespace: string, jobName: string) {
    this.namespace = namespace
    this.jobName = jobName
    this.debugger = mockDebug(namespace)
    this.debugger(`${jobName} started (New Disposable API).`)
  }

  // Synchronous dispose method (for 'using' declaration)
  [Symbol.dispose](): void {
    this.debugger(`${this.jobName} finished (New Disposable API - sync cleanup).`)
  }

  // Asynchronous dispose method (for 'await using' declaration)
  async [Symbol.asyncDispose](): Promise<void> {
    this.debugger(`${this.jobName} finished (New Disposable API - async cleanup).`)
    // Simulate an asynchronous cleanup operation
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
}

// --- 5. Manual Helper for New Disposable APIs (for demonstration without 'using' keyword) ---
// In a real environment with TypeScript 5.2+ and ES2023, you would use the 'using' or 'await using'
// declarations directly, which would automatically call Symbol.dispose or Symbol.asyncDispose.
// This function manually simulates that behavior for demonstration purposes.
async function withDebugJobNewAPI<T>(
  namespace: string,
  jobName: string,
  callback: (logger: Debugger) => Promise<T> | T,
  forceAsyncCleanup: boolean = false, // To demonstrate asyncDispose explicitly
): Promise<T> {
  const context = new DebugJobContextWithNewAPI(namespace, jobName)
  try {
    const result = callback(context.debugger)
    return await Promise.resolve(result)
  } finally {
    // Manually call the appropriate dispose method.
    // In a real scenario with 'using' keyword, this boilerplate is handled automatically.
    if (forceAsyncCleanup && typeof context[Symbol.asyncDispose] === 'function') {
      await context[Symbol.asyncDispose]()
    } else if (typeof context[Symbol.dispose] === 'function') {
      context[Symbol.dispose]()
    }
  }
}

// --- Vue 3 Component Logic ---
const logMessages = ref<string[]>([])
const jobResult = ref<string | null>(null)

// Store the original console.log
let originalConsoleLog: typeof console.log

onMounted(() => {
  // Capture console.log output for display
  originalConsoleLog = console.log
  console.log = (...args: unknown[]) => {
    // Changed from any[] to unknown[]
    originalConsoleLog(...args)
    logMessages.value.push(
      args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '),
    )
  }
})

onUnmounted(() => {
  // Restore original console.log on component unmount
  if (originalConsoleLog) {
    console.log = originalConsoleLog
  }
})

const runUnifiedAsyncJob = async () => {
  logMessages.value = [] // Clear previous logs
  jobResult.value = null

  try {
    const result = await withDebugJob(
      'vue-app:unified-async',
      'ProcessDataAsync',
      async (dataLogger) => {
        dataLogger('Starting async processing step 1...')
        await new Promise((resolve) => setTimeout(resolve, 500))
        dataLogger('Async processing step 1 complete.')
        const finalResult = 'Async Processed Data 123 (Vue)'
        dataLogger(`Final result: ${finalResult}`)
        return finalResult
      },
    )
    jobResult.value = result
  } catch (error: unknown) {
    // Catch unknown type for error
    logMessages.value.push(`Error during async job: ${(error as Error).message}`)
  }
}

const runUnifiedSyncJob = async () => {
  logMessages.value = [] // Clear previous logs
  jobResult.value = null

  try {
    const result = await withDebugJob('vue-app:unified-sync', 'CalculateSumSync', (calcLogger) => {
      calcLogger('Starting synchronous calculation...')
      const sum = 10 + 20 + 30
      calcLogger(`Calculation complete. Sum: ${sum}`)
      return `Calculated Sum: ${sum} (Vue)` // Return a usable variable
    })
    jobResult.value = result
  } catch (error: unknown) {
    // Catch unknown type for error
    logMessages.value.push(`Error during sync job: ${(error as Error).message}`)
  }
}

const runNewAPIHelperSyncJob = async () => {
  logMessages.value = []
  jobResult.value = null

  try {
    const result = await withDebugJobNewAPI(
      'vue-app:new-api-helper-sync',
      'ReportStatus',
      (logger) => {
        logger('Reporting status synchronously (Vue)...')
        const status = 'OK'
        logger(`Status: ${status}`)
        return `Reported Status: ${status} (Vue)`
      },
    )
    jobResult.value = result
  } catch (error: unknown) {
    // Catch unknown type for error
    logMessages.value.push(`Error during new API sync job: ${(error as Error).message}`)
  }
}

const runNewAPIHelperAsyncJob = async () => {
  logMessages.value = []
  jobResult.value = null

  try {
    const result = await withDebugJobNewAPI(
      'vue-app:new-api-helper-async',
      'UploadFile',
      async (logger) => {
        logger('Starting file upload asynchronously (Vue)...')
        await new Promise((resolve) => setTimeout(resolve, 700))
        logger('File upload complete.')
        const fileName = 'document.pdf'
        return `Uploaded File: ${fileName} (Vue)`
      },
      true,
    ) // Pass true to force async cleanup
    jobResult.value = result
  } catch (error: unknown) {
    // Catch unknown type for error
    logMessages.value.push(`Error during new API async job: ${(error as Error).message}`)
  }
}

// --- Directly using 'using' keyword for synchronous disposable ---
const runNewAPISyncJob = () => {
  logMessages.value = []
  jobResult.value = null

  try {
    // 'using' declaration: When loggerContext goes out of scope, Symbol.dispose() is called.
    using loggerContext = new DebugJobContextWithNewAPI('vue-app:new-api-sync', 'ReportStatus')
    const logger = loggerContext.debugger

    logger('Reporting status synchronously (Vue, using keyword)...')
    const status = 'OK'
    logger(`Status: ${status}`)
    const result = `Reported Status: ${status} (Vue)`
    jobResult.value = result
  } catch (error: unknown) {
    logMessages.value.push(`Error during new API sync job: ${(error as Error).message}`)
  }
}

// --- Directly using 'await using' keyword for asynchronous disposable ---
const runNewAPIAsyncJob = async () => {
  logMessages.value = []
  jobResult.value = null

  try {
    // 'await using' declaration: When loggerContext goes out of scope, Symbol.asyncDispose() is awaited.
    await using loggerContext = new DebugJobContextWithNewAPI('vue-app:new-api-async', 'UploadFile')
    const logger = loggerContext.debugger

    logger('Starting file upload asynchronously (Vue, await using keyword)...')
    await new Promise((resolve) => setTimeout(resolve, 700))
    logger('File upload complete.')
    const fileName = 'document.pdf'
    const result = `Uploaded File: ${fileName} (Vue)`
    jobResult.value = result
  } catch (error: unknown) {
    logMessages.value.push(`Error during new API async job: ${(error as Error).message}`)
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8 flex flex-col items-center font-inter">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
        Vue 3 Disposable Logger Demo
      </h1>

      <p class="text-gray-700 mb-6 text-center">
        This Vue 3 component demonstrates TypeScript disposable patterns, including unified
        async/sync callbacks and the new JavaScript Disposable APIs.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          @click="runUnifiedAsyncJob"
        >
          Run Unified Async Job (Vue)
        </button>
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          @click="runUnifiedSyncJob"
        >
          Run Unified Sync Job (Vue)
        </button>
        <button
          class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          @click="runNewAPIHelperSyncJob"
        >
          Run New API Helper Sync Job (Vue)
        </button>
        <button
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          @click="runNewAPIHelperAsyncJob"
        >
          Run New API Helper Async Job (Vue)
        </button>
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          @click="runNewAPISyncJob"
        >
          Run New API Sync Job (Vue)
        </button>
        <button
          class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          @click="runNewAPIAsyncJob"
        >
          Run New API Async Job (Vue)
        </button>
      </div>

      <div
        v-if="jobResult"
        class="mt-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-md"
      >
        <h2 class="text-lg font-semibold mb-2">Job Result:</h2>
        <p class="break-words">{{ jobResult }}</p>
      </div>

      <div class="mt-8">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Console Output (Simulated):</h2>
        <div class="bg-gray-800 text-gray-100 p-4 rounded-md h-64 overflow-y-auto text-sm">
          <p v-if="logMessages.length === 0" class="text-gray-400">
            No logs yet. Run a job to see output.
          </p>
          <p
            v-for="(msg, index) in logMessages"
            :key="index"
            class="font-mono border-b border-gray-700 last:border-b-0 py-1"
          >
            {{ msg }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
