
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import "../esm-chunks/chunk-OEQOKJGE.js";

// src/shared/blobkey.ts
import { Buffer } from "node:buffer";
import { webcrypto as crypto } from "node:crypto";
var maxLength = 180;
async function encodeBlobKey(key) {
  const buffer = Buffer.from(key);
  const base64 = buffer.toString("base64url");
  if (base64.length <= maxLength) {
    return base64;
  }
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  const hash = Buffer.from(digest).toString("base64url");
  return `${base64.slice(0, maxLength - hash.length - 1)}-${hash}`;
}
export {
  encodeBlobKey
};
