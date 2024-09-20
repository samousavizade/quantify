
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import {
  SpanStatusCode,
  context,
  init_esm
} from "./chunk-GNGHTHMQ.js";

// node_modules/@opentelemetry/api/build/esm/experimental/trace/SugaredTracer.js
init_esm();
var defaultOnException = function(e, span) {
  span.recordException(e);
  span.setStatus({
    code: SpanStatusCode.ERROR
  });
};
function wrapTracer(tracer) {
  return new SugaredTracer(tracer);
}
var SugaredTracer = (
  /** @class */
  function() {
    function SugaredTracer2(tracer) {
      this._tracer = tracer;
      this.startSpan = tracer.startSpan.bind(this._tracer);
      this.startActiveSpan = tracer.startActiveSpan.bind(this._tracer);
    }
    SugaredTracer2.prototype.withActiveSpan = function(name, arg2, arg3, arg4) {
      var _a = massageParams(arg2, arg3, arg4), opts = _a.opts, ctx = _a.ctx, fn = _a.fn;
      return this._tracer.startActiveSpan(name, opts, ctx, function(span) {
        return handleFn(span, opts, fn);
      });
    };
    SugaredTracer2.prototype.withSpan = function(name, arg2, arg3, arg4) {
      var _a = massageParams(arg2, arg3, arg4), opts = _a.opts, ctx = _a.ctx, fn = _a.fn;
      var span = this._tracer.startSpan(name, opts, ctx);
      return handleFn(span, opts, fn);
    };
    return SugaredTracer2;
  }()
);
function massageParams(arg, arg2, arg3) {
  var opts;
  var ctx;
  var fn;
  if (!arg2 && !arg3) {
    fn = arg;
  } else if (!arg3) {
    opts = arg;
    fn = arg2;
  } else {
    opts = arg;
    ctx = arg2;
    fn = arg3;
  }
  opts = opts !== null && opts !== void 0 ? opts : {};
  ctx = ctx !== null && ctx !== void 0 ? ctx : context.active();
  return { opts, ctx, fn };
}
function handleFn(span, opts, fn) {
  var _a;
  var onException = (_a = opts.onException) !== null && _a !== void 0 ? _a : defaultOnException;
  var errorHandler = function(e) {
    onException(e, span);
    span.end();
    throw e;
  };
  try {
    var ret = fn(span);
    if (typeof (ret === null || ret === void 0 ? void 0 : ret.then) === "function") {
      return ret.then(function(val) {
        span.end();
        return val;
      }, errorHandler);
    }
    span.end();
    return ret;
  } catch (e) {
    throw errorHandler(e);
  }
}

export {
  wrapTracer
};
