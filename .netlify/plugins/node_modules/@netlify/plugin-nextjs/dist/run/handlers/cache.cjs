"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/run/handlers/cache.cts
var cache_exports = {};
__export(cache_exports, {
  NetlifyCacheHandler: () => NetlifyCacheHandler,
  default: () => cache_default
});
module.exports = __toCommonJS(cache_exports);
var import_node_buffer = require("node:buffer");
var import_node_path = require("node:path");
var import_posix = require("node:path/posix");

// node_modules/@netlify/functions/dist/chunk-COIAWFHF.mjs
var import_process = require("process");
var purgeCache = async (options = {}) => {
  if (globalThis.fetch === void 0) {
    throw new Error(
      "`fetch` is not available. Please ensure you're using Node.js version 18.0.0 or above. Refer to https://ntl.fyi/functions-runtime for more information."
    );
  }
  const payload = {
    cache_tags: options.tags,
    deploy_alias: options.deployAlias
  };
  const token = import_process.env.NETLIFY_PURGE_API_TOKEN || options.token;
  if (import_process.env.NETLIFY_LOCAL && !token) {
    const scope = options.tags?.length ? ` for tags ${options.tags?.join(", ")}` : "";
    console.log(`Skipping purgeCache${scope} in local development.`);
    return;
  }
  if ("siteSlug" in options) {
    payload.site_slug = options.siteSlug;
  } else if ("domain" in options) {
    payload.domain = options.domain;
  } else {
    const siteID = options.siteID || import_process.env.SITE_ID;
    if (!siteID) {
      throw new Error(
        "The Netlify site ID was not found in the execution environment. Please supply it manually using the `siteID` property."
      );
    }
    payload.site_id = siteID;
  }
  if (!token) {
    throw new Error(
      "The cache purge API token was not found in the execution environment. Please supply it manually using the `token` property."
    );
  }
  const apiURL = options.apiURL || "https://api.netlify.com";
  const response = await fetch(`${apiURL}/api/v1/purge`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error(`Cache purge API call returned an unexpected status code: ${response.status}`);
  }
};

// node_modules/@netlify/functions/dist/chunk-XSZVKDJB.mjs
var import_stream = require("stream");
var import_util = require("util");
var pipeline = (0, import_util.promisify)(import_stream.pipeline);

// src/run/handlers/cache.cts
var import_constants = require("next/dist/lib/constants.js");
var import_cache_types = require("../../shared/cache-types.cjs");
var import_regional_blob_store = require("../regional-blob-store.cjs");
var import_request_context = require("./request-context.cjs");
var import_tracer = require("./tracer.cjs");
var NetlifyCacheHandler = class {
  options;
  revalidatedTags;
  blobStore;
  tracer = (0, import_tracer.getTracer)();
  tagManifestsFetchedFromBlobStoreInCurrentRequest;
  constructor(options) {
    this.options = options;
    this.revalidatedTags = options.revalidatedTags;
    this.blobStore = (0, import_regional_blob_store.getRegionalBlobStore)({ consistency: "strong" });
    this.tagManifestsFetchedFromBlobStoreInCurrentRequest = {};
  }
  async encodeBlobKey(key) {
    const { encodeBlobKey } = await import("../../shared/blobkey.js");
    return await encodeBlobKey(key);
  }
  captureResponseCacheLastModified(cacheValue, key, getCacheKeySpan) {
    if (cacheValue.value?.kind === "FETCH") {
      return;
    }
    const requestContext = (0, import_request_context.getRequestContext)();
    if (!requestContext) {
      getCacheKeySpan.recordException(
        new Error("CacheHandler was called without a request context")
      );
      getCacheKeySpan.setAttributes({
        severity: "alert",
        warning: true
      });
      return;
    }
    if (requestContext.responseCacheKey && requestContext.responseCacheKey !== key) {
      requestContext.responseCacheGetLastModified = void 0;
      getCacheKeySpan.recordException(
        new Error(
          `Multiple response cache keys used in single request: ["${requestContext.responseCacheKey}, "${key}"]`
        )
      );
      getCacheKeySpan.setAttributes({
        severity: "alert",
        warning: true
      });
      return;
    }
    requestContext.responseCacheKey = key;
    if (cacheValue.lastModified) {
      requestContext.responseCacheGetLastModified = cacheValue.lastModified;
    }
  }
  captureRouteRevalidateAndRemoveFromObject(cacheValue) {
    const { revalidate, ...restOfRouteValue } = cacheValue;
    const requestContext = (0, import_request_context.getRequestContext)();
    if (requestContext) {
      requestContext.routeHandlerRevalidate = revalidate;
    }
    return restOfRouteValue;
  }
  captureCacheTags(cacheValue, key) {
    if (!cacheValue) {
      return;
    }
    const requestContext = (0, import_request_context.getRequestContext)();
    if (!requestContext) {
      return;
    }
    if (requestContext.responseCacheTags) {
      return;
    }
    if (cacheValue.kind === "PAGE" || cacheValue.kind === "PAGES" || cacheValue.kind === "APP_PAGE" || cacheValue.kind === "ROUTE" || cacheValue.kind === "APP_ROUTE") {
      if (cacheValue.headers?.[import_constants.NEXT_CACHE_TAGS_HEADER]) {
        const cacheTags = cacheValue.headers[import_constants.NEXT_CACHE_TAGS_HEADER].split(",");
        requestContext.responseCacheTags = cacheTags;
      } else if ((cacheValue.kind === "PAGE" || cacheValue.kind === "PAGES") && typeof cacheValue.pageData === "object") {
        const cacheTags = [`_N_T_${key === "/index" ? "/" : key}`];
        requestContext.responseCacheTags = cacheTags;
      }
    }
  }
  async injectEntryToPrerenderManifest(key, revalidate) {
    if (this.options.serverDistDir && (typeof revalidate === "number" || revalidate === false)) {
      try {
        const { loadManifest } = await import("next/dist/server/load-manifest.js");
        const prerenderManifest = loadManifest(
          (0, import_node_path.join)(this.options.serverDistDir, "..", "prerender-manifest.json")
        );
        try {
          const { normalizePagePath } = await import("next/dist/shared/lib/page-path/normalize-page-path.js");
          prerenderManifest.routes[key] = {
            experimentalPPR: void 0,
            dataRoute: (0, import_posix.join)("/_next/data", `${normalizePagePath(key)}.json`),
            srcRoute: null,
            // FIXME: provide actual source route, however, when dynamically appending it doesn't really matter
            initialRevalidateSeconds: revalidate,
            // Pages routes do not have a prefetch data route.
            prefetchDataRoute: void 0
          };
        } catch {
          const { SharedRevalidateTimings } = await import("next/dist/server/lib/incremental-cache/shared-revalidate-timings.js");
          const sharedRevalidateTimings = new SharedRevalidateTimings(prerenderManifest);
          sharedRevalidateTimings.set(key, revalidate);
        }
      } catch {
      }
    }
  }
  async get(...args) {
    return this.tracer.withActiveSpan("get cache key", async (span) => {
      const [key, ctx = {}] = args;
      (0, import_request_context.getLogger)().debug(`[NetlifyCacheHandler.get]: ${key}`);
      const blobKey = await this.encodeBlobKey(key);
      span.setAttributes({ key, blobKey });
      const blob = await this.tracer.withActiveSpan("blobStore.get", async (blobGetSpan) => {
        blobGetSpan.setAttributes({ key, blobKey });
        return await this.blobStore.get(blobKey, {
          type: "json"
        });
      });
      if (!blob) {
        span.addEvent("Cache miss", { key, blobKey });
        return null;
      }
      const staleByTags = await this.checkCacheEntryStaleByTags(blob, ctx.tags, ctx.softTags);
      if (staleByTags) {
        span.addEvent("Stale", { staleByTags });
        return null;
      }
      this.captureResponseCacheLastModified(blob, key, span);
      this.captureCacheTags(blob.value, key);
      switch (blob.value?.kind) {
        case "FETCH":
          span.addEvent("FETCH", { lastModified: blob.lastModified, revalidate: ctx.revalidate });
          return {
            lastModified: blob.lastModified,
            value: blob.value
          };
        case "ROUTE":
        case "APP_ROUTE": {
          span.addEvent(blob.value?.kind, {
            lastModified: blob.lastModified,
            status: blob.value.status
          });
          const valueWithoutRevalidate = this.captureRouteRevalidateAndRemoveFromObject(blob.value);
          return {
            lastModified: blob.lastModified,
            value: {
              ...valueWithoutRevalidate,
              body: import_node_buffer.Buffer.from(valueWithoutRevalidate.body, "base64")
            }
          };
        }
        case "PAGE":
        case "PAGES": {
          span.addEvent(blob.value?.kind, { lastModified: blob.lastModified });
          const { revalidate, ...restOfPageValue } = blob.value;
          await this.injectEntryToPrerenderManifest(key, revalidate);
          return {
            lastModified: blob.lastModified,
            value: restOfPageValue
          };
        }
        case "APP_PAGE": {
          span.addEvent(blob.value?.kind, { lastModified: blob.lastModified });
          const { revalidate, rscData, ...restOfPageValue } = blob.value;
          await this.injectEntryToPrerenderManifest(key, revalidate);
          return {
            lastModified: blob.lastModified,
            value: {
              ...restOfPageValue,
              rscData: rscData ? import_node_buffer.Buffer.from(rscData, "base64") : void 0
            }
          };
        }
        default:
          span.recordException(new Error(`Unknown cache entry kind: ${blob.value?.kind}`));
      }
      return null;
    });
  }
  transformToStorableObject(data, context) {
    if (!data) {
      return null;
    }
    if ((0, import_cache_types.isCachedRouteValue)(data)) {
      return {
        ...data,
        revalidate: context.revalidate,
        body: data.body.toString("base64")
      };
    }
    if ((0, import_cache_types.isCachedPageValue)(data)) {
      return {
        ...data,
        revalidate: context.revalidate
      };
    }
    if (data?.kind === "APP_PAGE") {
      return {
        ...data,
        revalidate: context.revalidate,
        rscData: data.rscData?.toString("base64")
      };
    }
    return data;
  }
  async set(...args) {
    return this.tracer.withActiveSpan("set cache key", async (span) => {
      const [key, data, context] = args;
      const blobKey = await this.encodeBlobKey(key);
      const lastModified = Date.now();
      span.setAttributes({ key, lastModified, blobKey });
      (0, import_request_context.getLogger)().debug(`[NetlifyCacheHandler.set]: ${key}`);
      const value = this.transformToStorableObject(data, context);
      this.captureCacheTags(value, key);
      await this.blobStore.setJSON(blobKey, {
        lastModified,
        value
      });
      if (data?.kind === "PAGE" || data?.kind === "PAGES") {
        const requestContext = (0, import_request_context.getRequestContext)();
        if (requestContext?.didPagesRouterOnDemandRevalidate) {
          const tag = `_N_T_${key === "/index" ? "/" : key}`;
          (0, import_request_context.getLogger)().debug(`Purging CDN cache for: [${tag}]`);
          requestContext.trackBackgroundWork(
            purgeCache({ tags: [tag] }).catch((error) => {
              (0, import_request_context.getLogger)().withError(error).error(`[NetlifyCacheHandler]: Purging the cache for tag ${tag} failed`);
            })
          );
        }
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async revalidateTag(tagOrTags, ...args) {
    const revalidateTagPromise = this.doRevalidateTag(tagOrTags, ...args);
    const requestContext = (0, import_request_context.getRequestContext)();
    if (requestContext) {
      requestContext.trackBackgroundWork(revalidateTagPromise);
    }
    return revalidateTagPromise;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async doRevalidateTag(tagOrTags, ...args) {
    (0, import_request_context.getLogger)().withFields({ tagOrTags, args }).debug("NetlifyCacheHandler.revalidateTag");
    const tags = Array.isArray(tagOrTags) ? tagOrTags : [tagOrTags];
    const data = {
      revalidatedAt: Date.now()
    };
    await Promise.all(
      tags.map(async (tag) => {
        try {
          await this.blobStore.setJSON(await this.encodeBlobKey(tag), data);
        } catch (error) {
          (0, import_request_context.getLogger)().withError(error).log(`Failed to update tag manifest for ${tag}`);
        }
      })
    );
    await purgeCache({ tags }).catch((error) => {
      (0, import_request_context.getLogger)().withError(error).error(`[NetlifyCacheHandler]: Purging the cache for tags ${tags.join(", ")} failed`);
    });
  }
  resetRequestCache() {
    this.tagManifestsFetchedFromBlobStoreInCurrentRequest = {};
  }
  /**
   * Checks if a cache entry is stale through on demand revalidated tags
   */
  async checkCacheEntryStaleByTags(cacheEntry, tags = [], softTags = []) {
    let cacheTags = [];
    if (cacheEntry.value?.kind === "FETCH") {
      cacheTags = [...tags, ...softTags];
    } else if (cacheEntry.value?.kind === "PAGE" || cacheEntry.value?.kind === "PAGES" || cacheEntry.value?.kind === "APP_PAGE" || cacheEntry.value?.kind === "ROUTE" || cacheEntry.value?.kind === "APP_ROUTE") {
      cacheTags = cacheEntry.value.headers?.[import_constants.NEXT_CACHE_TAGS_HEADER]?.split(",") || [];
    } else {
      return false;
    }
    if (this.revalidatedTags && this.revalidatedTags.length !== 0) {
      for (const tag of this.revalidatedTags) {
        if (cacheTags.includes(tag)) {
          return true;
        }
      }
    }
    return new Promise((resolve, reject) => {
      const tagManifestPromises = [];
      for (const tag of cacheTags) {
        let tagManifestPromise = this.tagManifestsFetchedFromBlobStoreInCurrentRequest[tag];
        if (!tagManifestPromise) {
          tagManifestPromise = this.encodeBlobKey(tag).then((blobKey) => {
            return this.tracer.withActiveSpan(`get tag manifest`, async (span) => {
              span.setAttributes({ tag, blobKey });
              return this.blobStore.get(blobKey, { type: "json" });
            });
          });
          this.tagManifestsFetchedFromBlobStoreInCurrentRequest[tag] = tagManifestPromise;
        }
        tagManifestPromises.push(
          tagManifestPromise.then((tagManifest) => {
            const isStale = tagManifest?.revalidatedAt >= (cacheEntry.lastModified || Date.now());
            if (isStale) {
              resolve(true);
              return true;
            }
            return false;
          })
        );
      }
      Promise.all(tagManifestPromises).then((tagManifestAreStale) => {
        resolve(tagManifestAreStale.some((tagIsStale) => tagIsStale));
      }).catch(reject);
    });
  }
};
var cache_default = NetlifyCacheHandler;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NetlifyCacheHandler
});
