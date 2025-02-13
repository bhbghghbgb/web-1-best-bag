import { useCallback, useEffect, useRef } from "react";
import Worker from "web-worker";
import {
  DeobfuscateRequestData,
  DeobfuscateResponseData,
  isDeobfuscateResponseData,
} from "./worker";

const useDeobfuscatorWorker = (
  onResponse: (response: DeobfuscateResponseData) => void
) => {
  const workerRef = useRef<Worker | null>(null);
  // Saving the callback as a ref. With this, I don't need to put onResponse in the
  // effect dep array, and just passing in an anonymous function without memoising
  // will not remove and readd the worker event listeners unneccessarily
  // Because the uses of this hook makes for an unlikeliness to change
  // event handler, this is less problem than having the component use useCallback
  const onResponseRef = useRef(onResponse);
  onResponseRef.current = onResponse;
  const onMessage = useCallback((event: MessageEvent) => {
    const data = event.data as DeobfuscateResponseData;
    console.debug("useDeobfuscatorWorker onMessage", event, data);
    if (!isDeobfuscateResponseData(data)) {
      console.error(event);
      throw new Error("Unknown event type received from deobfuscator worker");
    }
    console.debug(
      "useDeobfuscatorWorker onMessage successful, sending response",
      event,
      data,
      onResponseRef.current
    );
    onResponseRef.current?.(data);
  }, []);
  useEffect(() => {
    const url = new URL("./worker.ts", import.meta.url);
    const worker = new Worker(url, { type: "module" });
    workerRef.current = worker;
    console.debug("useDeobfuscatorWorker useEffect addEventListener", worker);
    worker.addEventListener("message", onMessage);
    return () => {
      console.debug(
        "useDeobfuscatorWorker useEffect removeEventListener",
        worker
      );
      worker.removeEventListener("message", onMessage);
      worker.terminate();
      workerRef.current = null;
    };
  }, [onMessage]);

  const requestDeobfuscate = (request: DeobfuscateRequestData) => {
    console.debug("useDeobfuscatorWorker requestDeobfuscate", request);
    workerRef.current?.postMessage(request);
  };

  return requestDeobfuscate;
};

export default useDeobfuscatorWorker;
