
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import "../esm-chunks/chunk-OEQOKJGE.js";

// src/run/constants.ts
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
var MODULE_DIR = fileURLToPath(new URL(".", import.meta.url));
var PLUGIN_DIR = resolve(`${MODULE_DIR}../../..`);
var RUN_CONFIG = "run-config.json";
export {
  MODULE_DIR,
  PLUGIN_DIR,
  RUN_CONFIG
};
