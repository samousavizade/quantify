
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import "../esm-chunks/chunk-OEQOKJGE.js";

// src/run/config.ts
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { PLUGIN_DIR, RUN_CONFIG } from "./constants.js";
var getRunConfig = async () => {
  return JSON.parse(await readFile(resolve(PLUGIN_DIR, RUN_CONFIG), "utf-8"));
};
var setRunConfig = (config) => {
  const cacheHandler = join(PLUGIN_DIR, ".netlify/dist/run/handlers/cache.cjs");
  if (!existsSync(cacheHandler)) {
    throw new Error(`Cache handler not found at ${cacheHandler}`);
  }
  config.experimental = {
    ...config.experimental,
    // @ts-expect-error incrementalCacheHandlerPath was removed from config type
    // but we still need to set it for older Next.js versions
    incrementalCacheHandlerPath: cacheHandler
  };
  config.cacheHandler = cacheHandler;
  config.cacheMaxMemorySize = 0;
  process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(config);
};
export {
  getRunConfig,
  setRunConfig
};
