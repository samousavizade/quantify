"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/run/handlers/request-context.cts
var request_context_exports = {};
__export(request_context_exports, {
  createRequestContext: () => createRequestContext,
  getLogger: () => getLogger,
  getRequestContext: () => getRequestContext,
  runWithRequestContext: () => runWithRequestContext
});
module.exports = __toCommonJS(request_context_exports);
var import_node_async_hooks = require("node:async_hooks");

// node_modules/@netlify/functions/dist/chunk-HYMERDCV.mjs
var import_process = require("process");
var systemLogTag = "__nfSystemLog";
var serializeError = (error) => {
  const cause = error?.cause instanceof Error ? serializeError(error.cause) : error.cause;
  return {
    error: error.message,
    error_cause: cause,
    error_stack: error.stack
  };
};
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
  LogLevel2[LogLevel2["Log"] = 2] = "Log";
  LogLevel2[LogLevel2["Error"] = 3] = "Error";
  return LogLevel2;
})(LogLevel || {});
var SystemLogger = class _SystemLogger {
  fields;
  logLevel;
  constructor(fields = {}, logLevel = 2) {
    this.fields = fields;
    this.logLevel = logLevel;
  }
  doLog(logger, message) {
    if (import_process.env.NETLIFY_DEV && !import_process.env.NETLIFY_ENABLE_SYSTEM_LOGGING) {
      return;
    }
    logger(systemLogTag, JSON.stringify({ msg: message, fields: this.fields }));
  }
  log(message) {
    if (this.logLevel > 2) {
      return;
    }
    this.doLog(console.log, message);
  }
  debug(message) {
    if (this.logLevel > 1) {
      return;
    }
    this.doLog(console.debug, message);
  }
  error(message) {
    if (this.logLevel > 3) {
      return;
    }
    this.doLog(console.error, message);
  }
  withLogLevel(level) {
    return new _SystemLogger(this.fields, level);
  }
  withFields(fields) {
    return new _SystemLogger(
      {
        ...this.fields,
        ...fields
      },
      this.logLevel
    );
  }
  withError(error) {
    const fields = error instanceof Error ? serializeError(error) : { error };
    return this.withFields(fields);
  }
};
var systemLogger = new SystemLogger();

// src/run/handlers/request-context.cts
function createRequestContext(request) {
  const backgroundWorkPromises = [];
  return {
    captureServerTiming: request?.headers.has("x-next-debug-logging") ?? false,
    trackBackgroundWork: (promise) => {
      backgroundWorkPromises.push(promise);
    },
    get backgroundWorkPromise() {
      return Promise.allSettled(backgroundWorkPromises);
    },
    logger: systemLogger.withLogLevel(
      request?.headers.has("x-nf-debug-logging") || request?.headers.has("x-next-debug-logging") ? LogLevel.Debug : LogLevel.Log
    )
  };
}
var REQUEST_CONTEXT_GLOBAL_KEY = Symbol.for("nf-request-context-async-local-storage");
var requestContextAsyncLocalStorage;
function getRequestContextAsyncLocalStorage() {
  if (requestContextAsyncLocalStorage) {
    return requestContextAsyncLocalStorage;
  }
  const extendedGlobalThis = globalThis;
  if (extendedGlobalThis[REQUEST_CONTEXT_GLOBAL_KEY]) {
    return extendedGlobalThis[REQUEST_CONTEXT_GLOBAL_KEY];
  }
  const storage = new import_node_async_hooks.AsyncLocalStorage();
  requestContextAsyncLocalStorage = storage;
  extendedGlobalThis[REQUEST_CONTEXT_GLOBAL_KEY] = storage;
  return storage;
}
var getRequestContext = () => getRequestContextAsyncLocalStorage().getStore();
function runWithRequestContext(requestContext, fn) {
  return getRequestContextAsyncLocalStorage().run(requestContext, fn);
}
function getLogger() {
  return getRequestContext()?.logger ?? systemLogger;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRequestContext,
  getLogger,
  getRequestContext,
  runWithRequestContext
});
