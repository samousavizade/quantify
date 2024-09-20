
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import "../esm-chunks/chunk-OEQOKJGE.js";

// src/run/revalidate.ts
import { isPromise } from "node:util/types";
function isRevalidateMethod(key, nextResponseField) {
  return key === "revalidate" && typeof nextResponseField === "function";
}
var nextResponseProxy = (res, requestContext) => {
  return new Proxy(res, {
    get(target, key) {
      const originalValue = Reflect.get(target, key);
      if (isRevalidateMethod(key, originalValue)) {
        return function newRevalidate(...args) {
          requestContext.didPagesRouterOnDemandRevalidate = true;
          const result = originalValue.apply(target, args);
          if (result && isPromise(result)) {
            requestContext.trackBackgroundWork(result);
          }
          return result;
        };
      }
      return originalValue;
    }
  });
};
export {
  nextResponseProxy
};
