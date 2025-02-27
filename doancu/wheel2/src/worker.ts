/** @see {isDeobfuscateRequestData} ts-auto-guard:type-guard */
export interface DeobfuscateRequestData {
  code: {
    original: string;
    clairvoyance: string;
    snap: string;
    reinit: string;
    scripter: string;
    nameList: string[];
  };
}

export interface DeobfuscateRequestEvent extends MessageEvent {
  data: DeobfuscateRequestData;
}

self.addEventListener("message", async (event: MessageEvent) => {
  const { data: eventData } = event;
  // tons of these events are sent idk why
  if (
    Object.keys(eventData).some((key) => /vscode/i.test(key)) ||
    (eventData.source && /react-devtools/i.test(eventData.source))
  ) {
    return;
  }
  if (!isDeobfuscateRequestData(eventData)) {
    console.error(event);
    throw new Error("Unknown event type sent to deobfuscator worker");
  }
  console.debug("[DeobfuscatorWorker] received request", event);
  const { original, clairvoyance, snap, reinit, scripter, nameList } =
    event.data.code;
  console.debug("[DeobfuscatorWorker] lazy loading deobfus");
  try {
    const deobfuscated = await doDeobfuscate(original);
    const { patchedAsSource: patched, patchedAsUserscript: scripted } =
      await doPatch(
        deobfuscated,
        clairvoyance,
        snap,
        reinit,
        scripter,
        nameList
      );
    self.postMessage({
      code: { deobfuscated, patched, scripted },
    });
  } catch (error) {
    self.postMessage({ error });
  }
});

async function doDeobfuscate(original: string) {
  const { deobfuscateCode } = await import("./deobfus");
  return await deobfuscateCode(original);
}

async function doPatch(
  deobfuscated: string,
  clairvoyance: string,
  snap: string,
  reinit: string,
  scripter: string,
  nameList: string[]
) {
  const { translate } = await import("./patcher");
  return await translate(
    deobfuscated,
    clairvoyance,
    snap,
    reinit,
    scripter,
    nameList
  );
}

/** @see {isDeobfuscateResponseData} ts-auto-guard:type-guard */
export interface DeobfuscateResponseData {
  code?: {
    deobfuscated: string;
    patched: string;
    scripted: string;
  };
  error?: Error;
}

// yarn exec ts-auto-guard --project tsconfig.app.json --debug src/worker.ts

/*
 * Generated type guards for "worker.ts".
 * WARNING: Do not manually change this file.
 */
// import { DeobfuscateRequestData, DeobfuscateResponseData } from "./worker";

function evaluate(
  isCorrect: boolean,
  varName: string,
  expected: string,
  // actual: any
  actual: unknown
): boolean {
  if (!isCorrect) {
    console.error(
      `${varName} type mismatch, expected: ${expected}, found:`,
      actual
    );
  }
  return isCorrect;
}

export function isDeobfuscateRequestData(
  obj: unknown,
  argumentName: string = "deobfuscateRequestData"
): obj is DeobfuscateRequestData {
  const typedObj = obj as DeobfuscateRequestData;
  return (
    ((typedObj !== null && typeof typedObj === "object") ||
      typeof typedObj === "function") &&
    evaluate(
      ((typedObj["code"] !== null && typeof typedObj["code"] === "object") ||
        typeof typedObj["code"] === "function") &&
        evaluate(
          typeof typedObj["code"]["original"] === "string",
          `${argumentName}["code"]["original"]`,
          "string",
          typedObj["code"]["original"]
        ) &&
        evaluate(
          typeof typedObj["code"]["clairvoyance"] === "string",
          `${argumentName}["code"]["clairvoyance"]`,
          "string",
          typedObj["code"]["clairvoyance"]
        ) &&
        evaluate(
          typeof typedObj["code"]["snap"] === "string",
          `${argumentName}["code"]["snap"]`,
          "string",
          typedObj["code"]["snap"]
        ) &&
        evaluate(
          typeof typedObj["code"]["reinit"] === "string",
          `${argumentName}["code"]["reinit"]`,
          "string",
          typedObj["code"]["reinit"]
        ) &&
        evaluate(
          typeof typedObj["code"]["scripter"] === "string",
          `${argumentName}["code"]["scripter"]`,
          "string",
          typedObj["code"]["scripter"]
        ) &&
        evaluate(
          Array.isArray(typedObj["code"]["nameList"]) &&
            typedObj["code"]["nameList"].every(
              // (e: any) => typeof e === "string"
              (e: unknown) => typeof e === "string"
            ),
          `${argumentName}["code"]["nameList"]`,
          "string[]",
          typedObj["code"]["nameList"]
        ),
      `${argumentName}["code"]`,
      "{ original: string; clairvoyance: string; snap: string; reinit: string; scripter: string; nameList: string[]; }",
      typedObj["code"]
    )
  );
}

export function isDeobfuscateResponseData(
  obj: unknown,
  argumentName: string = "deobfuscateResponseData"
): obj is DeobfuscateResponseData {
  const typedObj = obj as DeobfuscateResponseData;
  return (
    ((typedObj !== null && typeof typedObj === "object") ||
      typeof typedObj === "function") &&
    evaluate(
      typeof typedObj["code"] === "undefined" ||
        (((typedObj["code"] !== null && typeof typedObj["code"] === "object") ||
          typeof typedObj["code"] === "function") &&
          evaluate(
            typeof typedObj["code"]["deobfuscated"] === "string",
            `${argumentName}["code"]["deobfuscated"]`,
            "string",
            typedObj["code"]["deobfuscated"]
          ) &&
          evaluate(
            typeof typedObj["code"]["patched"] === "string",
            `${argumentName}["code"]["patched"]`,
            "string",
            typedObj["code"]["patched"]
          ) &&
          evaluate(
            typeof typedObj["code"]["scripted"] === "string",
            `${argumentName}["code"]["scripted"]`,
            "string",
            typedObj["code"]["scripted"]
          )),
      `${argumentName}["code"]`,
      "{ deobfuscated: string; patched: string; scripted: string; } | undefined",
      typedObj["code"]
    ) &&
    evaluate(
      typeof typedObj["error"] === "undefined" ||
        typedObj["error"] instanceof Error,
      `${argumentName}["error"]`,
      "Error | undefined",
      typedObj["error"]
    )
  );
}
