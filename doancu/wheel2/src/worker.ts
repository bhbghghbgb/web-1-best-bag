import { deobfuscateCode } from "./deobfus";

export interface DeobfuscateRequestData {
  code: string;
}
interface DeobfuscateRequestEvent extends MessageEvent {
  data: DeobfuscateRequestData;
}

function isDeobfuscateRequestEvent(
  event: MessageEvent
): event is DeobfuscateRequestEvent {
  return (
    event.data &&
    typeof event.data === "object" &&
    "code" in event.data &&
    typeof event.data.code === "string"
  );
}

self.addEventListener("message", async (event: MessageEvent) => {
  // tons of these events are sent idk why
  if (
    Object.prototype.hasOwnProperty.call(event.data, "vscodeScheduleAsyncWork")
  ) {
    return;
  }
  if (!isDeobfuscateRequestEvent(event)) {
    console.error(event);
    throw new Error("Unknown event type sent to deobfuscator worker");
  }
  console.info("[DeobfuscatorWorker] received request", event);
  const { code } = event.data;
  try {
    const deobfuscatedCode = await deobfuscateCode(code);
    self.postMessage({ success: true, deobfuscatedCode });
  } catch (error) {
    self.postMessage({ success: false, error });
  }
});

export interface DeobfuscateResponseData {
  success: boolean;
  deobfuscatedCode?: string;
  error?: Error;
}
export function isDeobfuscateResponseData(
  data: object
): data is DeobfuscateResponseData {
  return (
    typeof data === "object" &&
    "success" in data &&
    typeof data.success === "boolean" &&
    (data.success
      ? "deobfuscatedCode" in data && typeof data.deobfuscatedCode === "string"
      : "error" in data && data.error instanceof Error)
  );
}
