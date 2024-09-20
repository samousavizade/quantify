
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import {
  require_out
} from "../../esm-chunks/chunk-FHR56UHE.js";
import {
  __commonJS,
  __toESM
} from "../../esm-chunks/chunk-OEQOKJGE.js";

// node_modules/path-to-regexp/dist/index.js
var require_dist = __commonJS({
  "node_modules/path-to-regexp/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathToRegexp = exports.tokensToRegexp = exports.regexpToFunction = exports.match = exports.tokensToFunction = exports.compile = exports.parse = void 0;
    function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (
              // `0-9`
              code >= 48 && code <= 57 || // `A-Z`
              code >= 65 && code <= 90 || // `a-z`
              code >= 97 && code <= 122 || // `_`
              code === 95
            ) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at ".concat(i));
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at '.concat(j));
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at ".concat(j));
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at ".concat(i));
          if (!pattern)
            throw new TypeError("Missing pattern at ".concat(i));
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
      var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
      var result = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type)
          return tokens[i++].value;
      };
      var mustConsume = function(type) {
        var value2 = tryConsume(type);
        if (value2 !== void 0)
          return value2;
        var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports.parse = parse;
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    exports.compile = compile;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
      } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
      });
      return function(data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
        }
        return path;
      };
    }
    exports.tokensToFunction = tokensToFunction;
    function match(str, options) {
      var keys = [];
      var re = pathToRegexp2(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    exports.match = match;
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
      } : _a;
      return function(pathname) {
        var m = re.exec(pathname);
        if (!m)
          return false;
        var path = m[0], index = m.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i2) {
          if (m[i2] === void 0)
            return "continue";
          var key = keys[i2 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i2], key);
          }
        };
        for (var i = 1; i < m.length; i++) {
          _loop_1(i);
        }
        return { path, index, params };
      };
    }
    exports.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      if (!keys)
        return path;
      var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      var index = 0;
      var execResult = groupsRegex.exec(path.source);
      while (execResult) {
        keys.push({
          // Use parenthesized substring match if available, index otherwise
          name: execResult[1] || index++,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
      }
      return path;
    }
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path) {
        return pathToRegexp2(path, keys, options).source;
      });
      return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
      } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
      var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
      var delimiterRe = "[".concat(escapeString(delimiter), "]");
      var route = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
              } else {
                route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
              }
            } else {
              if (token.modifier === "+" || token.modifier === "*") {
                route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
              } else {
                route += "(".concat(token.pattern, ")").concat(token.modifier);
              }
            }
          } else {
            route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
          }
        }
      }
      if (end) {
        if (!strict)
          route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
          route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
      }
      return new RegExp(route, flags(options));
    }
    exports.tokensToRegexp = tokensToRegexp;
    function pathToRegexp2(path, keys, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
    }
    exports.pathToRegexp = pathToRegexp2;
  }
});

// src/build/functions/edge.ts
var import_fast_glob = __toESM(require_out(), 1);
var import_path_to_regexp = __toESM(require_dist(), 1);
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";
import { sep as posixSep } from "node:path/posix";
import { EDGE_HANDLER_NAME } from "../plugin-context.js";
var toPosixPath = (path) => path.split(sep).join(posixSep);
var writeEdgeManifest = async (ctx, manifest) => {
  await mkdir(ctx.edgeFunctionsDir, { recursive: true });
  await writeFile(join(ctx.edgeFunctionsDir, "manifest.json"), JSON.stringify(manifest, null, 2));
};
var copyRuntime = async (ctx, handlerDirectory) => {
  const files = await (0, import_fast_glob.glob)("edge-runtime/**/*", {
    cwd: ctx.pluginDir,
    ignore: ["**/*.test.ts"],
    dot: true
  });
  await Promise.all(
    files.map(
      (path) => cp(join(ctx.pluginDir, path), join(handlerDirectory, path), { recursive: true })
    )
  );
};
var augmentMatchers = (matchers, ctx) => {
  if (!ctx.buildConfig.i18n) {
    return matchers;
  }
  return matchers.flatMap((matcher) => {
    if (matcher.originalSource && matcher.locale !== false) {
      return [
        matcher,
        {
          ...matcher,
          regexp: (0, import_path_to_regexp.pathToRegexp)(matcher.originalSource).source
        }
      ];
    }
    return matcher;
  });
};
var writeHandlerFile = async (ctx, { matchers, name }) => {
  const nextConfig = ctx.buildConfig;
  const handlerName = getHandlerName({ name });
  const handlerDirectory = join(ctx.edgeFunctionsDir, handlerName);
  const handlerRuntimeDirectory = join(handlerDirectory, "edge-runtime");
  await copyRuntime(ctx, handlerDirectory);
  await writeFile(join(handlerRuntimeDirectory, "matchers.json"), JSON.stringify(matchers));
  const minimalNextConfig = {
    basePath: nextConfig.basePath,
    i18n: nextConfig.i18n,
    trailingSlash: nextConfig.trailingSlash,
    skipMiddlewareUrlNormalize: nextConfig.skipMiddlewareUrlNormalize
  };
  await writeFile(
    join(handlerRuntimeDirectory, "next.config.json"),
    JSON.stringify(minimalNextConfig)
  );
  await writeFile(
    join(handlerDirectory, `${handlerName}.js`),
    `
    import {handleMiddleware} from './edge-runtime/middleware.ts';
    import handler from './server/${name}.js';
    export default (req, context) => handleMiddleware(req, context, handler);
    `
  );
};
var copyHandlerDependencies = async (ctx, { name, files, wasm }) => {
  const srcDir = join(ctx.standaloneDir, ctx.nextDistDir);
  const destDir = join(ctx.edgeFunctionsDir, getHandlerName({ name }));
  const edgeRuntimeDir = join(ctx.pluginDir, "edge-runtime");
  const shimPath = join(edgeRuntimeDir, "shim/index.js");
  const shim = await readFile(shimPath, "utf8");
  const parts = [shim];
  const outputFile = join(destDir, `server/${name}.js`);
  if (wasm?.length) {
    const base64ModulePath = join(
      destDir,
      "edge-runtime/vendor/deno.land/std@0.175.0/encoding/base64.ts"
    );
    const base64ModulePathRelativeToOutputFile = toPosixPath(
      relative(dirname(outputFile), base64ModulePath)
    );
    parts.push(`import { decode as _base64Decode } from "${base64ModulePathRelativeToOutputFile}";`);
    for (const wasmChunk of wasm ?? []) {
      const data = await readFile(join(srcDir, wasmChunk.filePath));
      parts.push(
        `const ${wasmChunk.name} = _base64Decode(${JSON.stringify(
          data.toString("base64")
        )}).buffer`
      );
    }
  }
  for (const file of files) {
    const entrypoint = await readFile(join(srcDir, file), "utf8");
    parts.push(`;// Concatenated file: ${file} 
`, entrypoint);
  }
  const exports = `const middlewareEntryKey = Object.keys(_ENTRIES).find(entryKey => entryKey.startsWith("middleware_${name}")); export default _ENTRIES[middlewareEntryKey].default;`;
  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, [...parts, exports].join("\n"));
};
var createEdgeHandler = async (ctx, definition) => {
  await copyHandlerDependencies(ctx, definition);
  await writeHandlerFile(ctx, definition);
};
var getHandlerName = ({ name }) => `${EDGE_HANDLER_NAME}-${name.replace(/\W/g, "-")}`;
var buildHandlerDefinition = (ctx, { name, matchers, page }) => {
  const fun = getHandlerName({ name });
  const funName = name.endsWith("middleware") ? "Next.js Middleware Handler" : `Next.js Edge Handler: ${page}`;
  const cache = name.endsWith("middleware") ? void 0 : "manual";
  const generator = `${ctx.pluginName}@${ctx.pluginVersion}`;
  return augmentMatchers(matchers, ctx).map((matcher) => ({
    function: fun,
    name: funName,
    pattern: matcher.regexp,
    cache,
    generator
  }));
};
var clearStaleEdgeHandlers = async (ctx) => {
  await rm(ctx.edgeFunctionsDir, { recursive: true, force: true });
};
var createEdgeHandlers = async (ctx) => {
  const nextManifest = await ctx.getMiddlewareManifest();
  const nextDefinitions = [
    ...Object.values(nextManifest.middleware)
    // ...Object.values(nextManifest.functions)
  ];
  await Promise.all(nextDefinitions.map((def) => createEdgeHandler(ctx, def)));
  const netlifyDefinitions = nextDefinitions.flatMap((def) => buildHandlerDefinition(ctx, def));
  const netlifyManifest = {
    version: 1,
    functions: netlifyDefinitions
  };
  await writeEdgeManifest(ctx, netlifyManifest);
};
export {
  clearStaleEdgeHandlers,
  createEdgeHandlers
};
