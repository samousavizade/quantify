
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import {
  __commonJS,
  __toESM
} from "../../esm-chunks/chunk-OEQOKJGE.js";

// node_modules/node-inspect-extracted/dist/inspect.js
var require_inspect = __commonJS({
  "node_modules/node-inspect-extracted/dist/inspect.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.util = e() : t.util = e();
    }(exports, function() {
      return (() => {
        "use strict";
        var t = { 794: (t2, e2) => {
          function r2(t3, e3) {
            for (var r3 = 0; r3 < e3.length; r3++) {
              var n2 = e3[r3];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
            }
          }
          var n = function() {
            function t3() {
              !function(t4, e4) {
                if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
              }(this, t3);
            }
            var e3, n2;
            return e3 = t3, n2 = [{ key: "hexSlice", value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e4 = arguments.length > 1 ? arguments[1] : void 0;
              return Array.prototype.map.call(this.slice(t4, e4), function(t5) {
                return ("00" + t5.toString(16)).slice(-2);
              }).join("");
            } }], n2 && r2(e3.prototype, n2), Object.defineProperty(e3, "prototype", { writable: false }), t3;
          }();
          e2.l = n;
        }, 618: (t2, e2, r2) => {
          function n(t3) {
            return function(t4) {
              if (Array.isArray(t4)) return c(t4);
            }(t3) || function(t4) {
              if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"]) return Array.from(t4);
            }(t3) || a(t3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function o(t3) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          function i(t3, e3) {
            var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
            if (!r3) {
              if (Array.isArray(t3) || (r3 = a(t3)) || e3 && t3 && "number" == typeof t3.length) {
                r3 && (t3 = r3);
                var n2 = 0, o2 = function() {
                };
                return { s: o2, n: function() {
                  return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
                }, e: function(t4) {
                  throw t4;
                }, f: o2 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i2, c2 = true, l2 = false;
            return { s: function() {
              r3 = r3.call(t3);
            }, n: function() {
              var t4 = r3.next();
              return c2 = t4.done, t4;
            }, e: function(t4) {
              l2 = true, i2 = t4;
            }, f: function() {
              try {
                c2 || null == r3.return || r3.return();
              } finally {
                if (l2) throw i2;
              }
            } };
          }
          function a(t3, e3) {
            if (t3) {
              if ("string" == typeof t3) return c(t3, e3);
              var r3 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === r3 && t3.constructor && (r3 = t3.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t3) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? c(t3, e3) : void 0;
            }
          }
          function c(t3, e3) {
            (null == e3 || e3 > t3.length) && (e3 = t3.length);
            for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++) n2[r3] = t3[r3];
            return n2;
          }
          function l(t3, e3) {
            var r3 = Object.keys(t3);
            if (Object.getOwnPropertySymbols) {
              var n2 = Object.getOwnPropertySymbols(t3);
              e3 && (n2 = n2.filter(function(e4) {
                return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
              })), r3.push.apply(r3, n2);
            }
            return r3;
          }
          function u(t3) {
            for (var e3 = 1; e3 < arguments.length; e3++) {
              var r3 = null != arguments[e3] ? arguments[e3] : {};
              e3 % 2 ? l(Object(r3), true).forEach(function(e4) {
                f(t3, e4, r3[e4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : l(Object(r3)).forEach(function(e4) {
                Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
              });
            }
            return t3;
          }
          function f(t3, e3, r3) {
            return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
          }
          var p, s, y = r2(459), g = y.internalBinding, d = y.Array, b = y.ArrayIsArray, h = y.ArrayPrototypeFilter, v = y.ArrayPrototypeForEach, m = y.ArrayPrototypePop, S = y.ArrayPrototypePush, P = y.ArrayPrototypePushApply, O = y.ArrayPrototypeSort, x = y.ArrayPrototypeUnshift, w = y.BigIntPrototypeValueOf, A = y.BooleanPrototypeValueOf, j = y.DatePrototypeGetTime, E = y.DatePrototypeToISOString, L = y.DatePrototypeToString, F = y.ErrorPrototypeToString, I = y.FunctionPrototypeCall, T = y.FunctionPrototypeToString, k = y.JSONStringify, R = y.MapPrototypeGetSize, _ = y.MapPrototypeEntries, z = y.MathFloor, M = y.MathMax, N = y.MathMin, B = y.MathRound, D = y.MathSqrt, C = y.MathTrunc, G = y.Number, W = y.NumberIsFinite, H = y.NumberIsNaN, V = y.NumberParseFloat, U = y.NumberParseInt, $ = y.NumberPrototypeValueOf, Z = y.Object, Y = y.ObjectAssign, K = y.ObjectCreate, q = y.ObjectDefineProperty, J = y.ObjectGetOwnPropertyDescriptor, Q = y.ObjectGetOwnPropertyNames, X = y.ObjectGetOwnPropertySymbols, tt = y.ObjectGetPrototypeOf, et = y.ObjectIs, rt = y.ObjectKeys, nt = y.ObjectPrototypeHasOwnProperty, ot = y.ObjectPrototypePropertyIsEnumerable, it = y.ObjectSeal, at = y.ObjectSetPrototypeOf, ct = y.ReflectOwnKeys, lt = y.RegExp, ut = y.RegExpPrototypeTest, ft = y.RegExpPrototypeToString, pt = y.SafeStringIterator, st = y.SafeMap, yt = y.SafeSet, gt = y.SetPrototypeGetSize, dt = y.SetPrototypeValues, bt = y.String, ht = y.StringPrototypeCharCodeAt, vt = y.StringPrototypeCodePointAt, mt = y.StringPrototypeIncludes, St = y.StringPrototypeNormalize, Pt = y.StringPrototypePadEnd, Ot = y.StringPrototypePadStart, xt = y.StringPrototypeRepeat, wt = y.StringPrototypeReplace, At = y.StringPrototypeSlice, jt = y.StringPrototypeSplit, Et = y.StringPrototypeToLowerCase, Lt = y.StringPrototypeTrim, Ft = y.StringPrototypeValueOf, It = y.SymbolPrototypeToString, Tt = y.SymbolPrototypeValueOf, kt = y.SymbolIterator, Rt = y.SymbolToStringTag, _t = y.TypedArrayPrototypeGetLength, zt = y.TypedArrayPrototypeGetSymbolToStringTag, Mt = y.Uint8Array, Nt = y.globalThis, Bt = y.uncurryThis, Dt = r2(493), Ct = Dt.getOwnNonIndexProperties, Gt = Dt.getPromiseDetails, Wt = Dt.getProxyDetails, Ht = Dt.kPending, Vt = Dt.kRejected, Ut = Dt.previewEntries, $t = Dt.getConstructorName, Zt = Dt.getExternalValue, Yt = Dt.propertyFilter, Kt = Yt.ALL_PROPERTIES, qt = Yt.ONLY_ENUMERABLE, Jt = Dt.Proxy, Qt = r2(719), Xt = Qt.customInspectSymbol, te = Qt.isError, ee = Qt.join, re = Qt.removeColors, ne = r2(962), oe = ne.codes.ERR_INVALID_ARG_TYPE, ie = ne.isStackOverflowError, ae = r2(715), ce = ae.isAsyncFunction, le = ae.isGeneratorFunction, ue = ae.isAnyArrayBuffer, fe = ae.isArrayBuffer, pe = ae.isArgumentsObject, se = ae.isBoxedPrimitive, ye = ae.isDataView, ge = ae.isExternal, de = ae.isMap, be = ae.isMapIterator, he = ae.isModuleNamespaceObject, ve = ae.isNativeError, me = ae.isPromise, Se = ae.isSet, Pe = ae.isSetIterator, Oe = ae.isWeakMap, xe = ae.isWeakSet, we = ae.isRegExp, Ae = ae.isDate, je = ae.isTypedArray, Ee = ae.isStringObject, Le = ae.isNumberObject, Fe = ae.isBooleanObject, Ie = ae.isBigIntObject, Te = r2(915), ke = r2(875).NativeModule, Re = r2(753), _e2 = Re.validateObject, ze = Re.validateString, Me = new yt(h(Q(Nt), function(t3) {
            return ut(/^[A-Z][a-zA-Z0-9]+$/, t3);
          })), Ne = function(t3) {
            return void 0 === t3 && void 0 !== t3;
          }, Be = it({ showHidden: false, depth: 2, colors: false, customInspect: true, showProxy: false, maxArrayLength: 100, maxStringLength: 1e4, breakLength: 80, compact: 3, sorted: false, getters: false, numericSeparator: false }), De = /[\x00-\x1f\x27\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/, Ce = /[\x00-\x1f\x27\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/g, Ge = /[\x00-\x1f\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/, We = /[\x00-\x1f\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/g, He = /^[a-zA-Z_][a-zA-Z_0-9]*$/, Ve = /^(0|[1-9][0-9]*)$/, Ue = /^ {4}at (?:[^/\\(]+ \(|)node:(.+):\d+:\d+\)?$/, $e = /[/\\]node_modules[/\\](.+?)(?=[/\\])/g, Ze = /^(\s+[^(]*?)\s*{/, Ye = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g, Ke = ["\\x00", "\\x01", "\\x02", "\\x03", "\\x04", "\\x05", "\\x06", "\\x07", "\\b", "\\t", "\\n", "\\x0B", "\\f", "\\r", "\\x0E", "\\x0F", "\\x10", "\\x11", "\\x12", "\\x13", "\\x14", "\\x15", "\\x16", "\\x17", "\\x18", "\\x19", "\\x1A", "\\x1B", "\\x1C", "\\x1D", "\\x1E", "\\x1F", "", "", "", "", "", "", "", "\\'", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\x7F", "\\x80", "\\x81", "\\x82", "\\x83", "\\x84", "\\x85", "\\x86", "\\x87", "\\x88", "\\x89", "\\x8A", "\\x8B", "\\x8C", "\\x8D", "\\x8E", "\\x8F", "\\x90", "\\x91", "\\x92", "\\x93", "\\x94", "\\x95", "\\x96", "\\x97", "\\x98", "\\x99", "\\x9A", "\\x9B", "\\x9C", "\\x9D", "\\x9E", "\\x9F"], qe = new lt("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", "g");
          function Je(t3, e3) {
            var r3 = { budget: {}, indentationLvl: 0, seen: [], currentDepth: 0, stylize: ir, showHidden: Be.showHidden, depth: Be.depth, colors: Be.colors, customInspect: Be.customInspect, showProxy: Be.showProxy, maxArrayLength: Be.maxArrayLength, maxStringLength: Be.maxStringLength, breakLength: Be.breakLength, compact: Be.compact, sorted: Be.sorted, getters: Be.getters, numericSeparator: Be.numericSeparator };
            if (arguments.length > 1) {
              if (arguments.length > 2 && (void 0 !== arguments[2] && (r3.depth = arguments[2]), arguments.length > 3 && void 0 !== arguments[3] && (r3.colors = arguments[3])), "boolean" == typeof e3) r3.showHidden = e3;
              else if (e3) for (var n2 = rt(e3), o2 = 0; o2 < n2.length; ++o2) {
                var i2 = n2[o2];
                nt(Be, i2) || "stylize" === i2 ? r3[i2] = e3[i2] : void 0 === r3.userOptions && (r3.userOptions = e3);
              }
            }
            return r3.colors && (r3.stylize = or), null === r3.maxArrayLength && (r3.maxArrayLength = 1 / 0), null === r3.maxStringLength && (r3.maxStringLength = 1 / 0), yr(r3, t3, 0);
          }
          Je.custom = Xt, q(Je, "defaultOptions", { get: function() {
            return Be;
          }, set: function(t3) {
            return _e2(t3, "options"), Y(Be, t3);
          } });
          var Qe = 39, Xe = 49;
          function tr(t3, e3) {
            q(Je.colors, e3, { get: function() {
              return this[t3];
            }, set: function(e4) {
              this[t3] = e4;
            }, configurable: true, enumerable: false });
          }
          function er(t3, e3) {
            return -1 === e3 ? '"'.concat(t3, '"') : -2 === e3 ? "`".concat(t3, "`") : "'".concat(t3, "'");
          }
          function rr(t3) {
            var e3 = ht(t3);
            return Ke.length > e3 ? Ke[e3] : "\\u".concat(e3.toString(16));
          }
          function nr(t3) {
            var e3 = De, r3 = Ce, n2 = 39;
            if (mt(t3, "'") && (mt(t3, '"') ? mt(t3, "`") || mt(t3, "${") || (n2 = -2) : n2 = -1, 39 !== n2 && (e3 = Ge, r3 = We)), t3.length < 5e3 && !ut(e3, t3)) return er(t3, n2);
            if (t3.length > 100) return er(t3 = wt(t3, r3, rr), n2);
            for (var o2 = "", i2 = 0, a2 = 0; a2 < t3.length; a2++) {
              var c2 = ht(t3, a2);
              if (c2 === n2 || 92 === c2 || c2 < 32 || c2 > 126 && c2 < 160) o2 += i2 === a2 ? Ke[c2] : "".concat(At(t3, i2, a2)).concat(Ke[c2]), i2 = a2 + 1;
              else if (c2 >= 55296 && c2 <= 57343) {
                if (c2 <= 56319 && a2 + 1 < t3.length) {
                  var l2 = ht(t3, a2 + 1);
                  if (l2 >= 56320 && l2 <= 57343) {
                    a2++;
                    continue;
                  }
                }
                o2 += "".concat(At(t3, i2, a2), "\\u".concat(c2.toString(16))), i2 = a2 + 1;
              }
            }
            return i2 !== t3.length && (o2 += At(t3, i2)), er(o2, n2);
          }
          function or(t3, e3) {
            var r3 = Je.styles[e3];
            if (void 0 !== r3) {
              var n2 = Je.colors[r3];
              if (void 0 !== n2) return "\x1B[".concat(n2[0], "m").concat(t3, "\x1B[").concat(n2[1], "m");
            }
            return t3;
          }
          function ir(t3) {
            return t3;
          }
          function ar() {
            return [];
          }
          function cr(t3, e3) {
            try {
              return t3 instanceof e3;
            } catch (t4) {
              return false;
            }
          }
          function lr(t3, e3, r3, n2) {
            for (var o2, i2 = t3; t3 || Ne(t3); ) {
              var a2 = J(t3, "constructor");
              if (void 0 !== a2 && "function" == typeof a2.value && "" !== a2.value.name && cr(i2, a2.value)) return void 0 === n2 || o2 === t3 && Me.has(a2.value.name) || ur(e3, i2, o2 || i2, r3, n2), a2.value.name;
              t3 = tt(t3), void 0 === o2 && (o2 = t3);
            }
            if (null === o2) return null;
            var c2 = $t(i2);
            if (r3 > e3.depth && null !== e3.depth) return "".concat(c2, " <Complex prototype>");
            var l2 = lr(o2, e3, r3 + 1, n2);
            return null === l2 ? "".concat(c2, " <").concat(Je(o2, u(u({}, e3), {}, { customInspect: false, depth: -1 })), ">") : "".concat(c2, " <").concat(l2, ">");
          }
          function ur(t3, e3, r3, n2, o2) {
            var a2, c2, l2 = 0;
            do {
              if (0 !== l2 || e3 === r3) {
                if (null === (r3 = tt(r3))) return;
                var u2 = J(r3, "constructor");
                if (void 0 !== u2 && "function" == typeof u2.value && Me.has(u2.value.name)) return;
              }
              0 === l2 ? c2 = new yt() : v(a2, function(t4) {
                return c2.add(t4);
              }), a2 = ct(r3), S(t3.seen, e3);
              var f2, p2 = i(a2);
              try {
                for (p2.s(); !(f2 = p2.n()).done; ) {
                  var s2 = f2.value;
                  if (!("constructor" === s2 || nt(e3, s2) || 0 !== l2 && c2.has(s2))) {
                    var y2 = J(r3, s2);
                    if ("function" != typeof y2.value) {
                      var g2 = _r(t3, r3, n2, s2, 0, y2, e3);
                      t3.colors ? S(o2, "\x1B[2m".concat(g2, "\x1B[22m")) : S(o2, g2);
                    }
                  }
                }
              } catch (t4) {
                p2.e(t4);
              } finally {
                p2.f();
              }
              m(t3.seen);
            } while (3 != ++l2);
          }
          function fr(t3, e3, r3) {
            var n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
            return null === t3 ? "" !== e3 && r3 !== e3 ? "[".concat(r3).concat(n2, ": null prototype] [").concat(e3, "] ") : "[".concat(r3).concat(n2, ": null prototype] ") : "" !== e3 && t3 !== e3 ? "".concat(t3).concat(n2, " [").concat(e3, "] ") : "".concat(t3).concat(n2, " ");
          }
          function pr(t3, e3) {
            var r3, n2 = X(t3);
            if (e3) r3 = Q(t3), 0 !== n2.length && P(r3, n2);
            else {
              try {
                r3 = rt(t3);
              } catch (e4) {
                Te(ve(e4) && "ReferenceError" === e4.name && he(t3)), r3 = Q(t3);
              }
              0 !== n2.length && P(r3, h(n2, function(e4) {
                return ot(t3, e4);
              }));
            }
            return r3;
          }
          function sr(t3, e3, r3) {
            var n2 = "";
            return null === e3 && (n2 = $t(t3)) === r3 && (n2 = "Object"), fr(e3, r3, n2);
          }
          function yr(t3, e3, r3, a2) {
            if ("object" !== o(e3) && "function" != typeof e3 && !Ne(e3)) return mr(t3.stylize, e3, t3);
            if (null === e3) return t3.stylize("null", "null");
            var c2 = e3, l2 = Wt(e3, !!t3.showProxy);
            if (void 0 !== l2) {
              if (t3.showProxy) return function(t4, e4, r4) {
                if (r4 > t4.depth && null !== t4.depth) return t4.stylize("Proxy [Array]", "special");
                r4 += 1, t4.indentationLvl += 2;
                var n2 = [yr(t4, e4[0], r4), yr(t4, e4[1], r4)];
                return t4.indentationLvl -= 2, Mr(t4, n2, "", ["Proxy [", "]"], 2, r4);
              }(t3, l2, r3);
              e3 = l2;
            }
            if (t3.customInspect) {
              var f2 = e3[Xt];
              if ("function" == typeof f2 && f2 !== Je && (!e3.constructor || e3.constructor.prototype !== e3)) {
                var p2 = null === t3.depth ? null : t3.depth - r3, s2 = I(f2, c2, p2, function(t4, e4) {
                  var r4 = u({ stylize: t4.stylize, showHidden: t4.showHidden, depth: t4.depth, colors: t4.colors, customInspect: t4.customInspect, showProxy: t4.showProxy, maxArrayLength: t4.maxArrayLength, maxStringLength: t4.maxStringLength, breakLength: t4.breakLength, compact: t4.compact, sorted: t4.sorted, getters: t4.getters, numericSeparator: t4.numericSeparator }, t4.userOptions);
                  if (e4) {
                    at(r4, null);
                    var n2, a3 = i(rt(r4));
                    try {
                      for (a3.s(); !(n2 = a3.n()).done; ) {
                        var c3 = n2.value;
                        "object" !== o(r4[c3]) && "function" != typeof r4[c3] || null === r4[c3] || delete r4[c3];
                      }
                    } catch (t5) {
                      a3.e(t5);
                    } finally {
                      a3.f();
                    }
                    r4.stylize = at(function(e5, r5) {
                      var n3;
                      try {
                        n3 = "".concat(t4.stylize(e5, r5));
                      } catch (t5) {
                      }
                      return "string" != typeof n3 ? e5 : n3;
                    }, null);
                  }
                  return r4;
                }(t3, void 0 !== l2 || !(c2 instanceof Z)), Je);
                if (s2 !== c2) return "string" != typeof s2 ? yr(t3, s2, r3) : s2.replace(/\n/g, "\n".concat(" ".repeat(t3.indentationLvl)));
              }
            }
            if (t3.seen.includes(e3)) {
              var g2 = 1;
              return void 0 === t3.circular ? (t3.circular = new st(), t3.circular.set(e3, g2)) : void 0 === (g2 = t3.circular.get(e3)) && (g2 = t3.circular.size + 1, t3.circular.set(e3, g2)), t3.stylize("[Circular *".concat(g2, "]"), "special");
            }
            return function(t4, e4, r4, o2) {
              var a3, c3;
              t4.showHidden && (r4 <= t4.depth || null === t4.depth) && (c3 = []);
              var l3 = lr(e4, t4, r4, c3);
              void 0 !== c3 && 0 === c3.length && (c3 = void 0);
              var u2 = e4[Rt];
              ("string" != typeof u2 || "" !== u2 && (t4.showHidden ? nt : ot)(e4, Rt)) && (u2 = "");
              var f3, p3, s3 = "", g3 = ar, d2 = true, h2 = 0, v2 = t4.showHidden ? Kt : qt, m2 = 0;
              if (e4[kt] || null === l3) if (d2 = false, b(e4)) {
                var S2 = "Array" !== l3 || "" !== u2 ? fr(l3, u2, "Array", "(".concat(e4.length, ")")) : "";
                if (a3 = Ct(e4, v2), f3 = ["".concat(S2, "["), "]"], 0 === e4.length && 0 === a3.length && void 0 === c3) return "".concat(f3[0], "]");
                m2 = 2, g3 = xr;
              } else if (Se(e4)) {
                var P2 = gt(e4), O2 = fr(l3, u2, "Set", "(".concat(P2, ")"));
                if (a3 = pr(e4, t4.showHidden), g3 = null !== l3 ? Ar.bind(null, e4) : Ar.bind(null, dt(e4)), 0 === P2 && 0 === a3.length && void 0 === c3) return "".concat(O2, "{}");
                f3 = ["".concat(O2, "{"), "}"];
              } else if (de(e4)) {
                var F2 = R(e4), I2 = fr(l3, u2, "Map", "(".concat(F2, ")"));
                if (a3 = pr(e4, t4.showHidden), g3 = null !== l3 ? jr.bind(null, e4) : jr.bind(null, _(e4)), 0 === F2 && 0 === a3.length && void 0 === c3) return "".concat(I2, "{}");
                f3 = ["".concat(I2, "{"), "}"];
              } else if (je(e4)) {
                a3 = Ct(e4, v2);
                var k2 = e4, z2 = "";
                null === l3 && (z2 = zt(e4), k2 = new y[z2](e4));
                var M2 = _t(e4), B2 = fr(l3, u2, z2, "(".concat(M2, ")"));
                if (f3 = ["".concat(B2, "["), "]"], 0 === e4.length && 0 === a3.length && !t4.showHidden) return "".concat(f3[0], "]");
                g3 = wr.bind(null, k2, M2), m2 = 2;
              } else be(e4) ? (a3 = pr(e4, t4.showHidden), f3 = gr("Map", u2), g3 = kr.bind(null, f3)) : Pe(e4) ? (a3 = pr(e4, t4.showHidden), f3 = gr("Set", u2), g3 = kr.bind(null, f3)) : d2 = true;
              if (d2) if (a3 = pr(e4, t4.showHidden), f3 = ["{", "}"], "Object" === l3) {
                if (pe(e4) ? f3[0] = "[Arguments] {" : "" !== u2 && (f3[0] = "".concat(fr(l3, u2, "Object"), "{")), 0 === a3.length && void 0 === c3) return "".concat(f3[0], "}");
              } else if ("function" == typeof e4) {
                if (s3 = function(t5, e5, r5) {
                  var n2 = T(t5);
                  if (n2.startsWith("class") && n2.endsWith("}")) {
                    var o3 = n2.slice(5, -1), i2 = o3.indexOf("{");
                    if (-1 !== i2 && (!o3.slice(0, i2).includes("(") || Ze.test(o3.replace(Ye)))) return function(t6, e6, r6) {
                      var n3 = nt(t6, "name") && t6.name || "(anonymous)", o4 = "class ".concat(n3);
                      if ("Function" !== e6 && null !== e6 && (o4 += " [".concat(e6, "]")), "" !== r6 && e6 !== r6 && (o4 += " [".concat(r6, "]")), null !== e6) {
                        var i3 = tt(t6).name;
                        i3 && (o4 += " extends ".concat(i3));
                      } else o4 += " extends [null prototype]";
                      return "[".concat(o4, "]");
                    }(t5, e5, r5);
                  }
                  var a4 = "Function";
                  le(t5) && (a4 = "Generator".concat(a4)), ce(t5) && (a4 = "Async".concat(a4));
                  var c4 = "[".concat(a4);
                  return null === e5 && (c4 += " (null prototype)"), "" === t5.name ? c4 += " (anonymous)" : c4 += ": ".concat(t5.name), c4 += "]", e5 !== a4 && null !== e5 && (c4 += " ".concat(e5)), "" !== r5 && e5 !== r5 && (c4 += " [".concat(r5, "]")), c4;
                }(e4, l3, u2), 0 === a3.length && void 0 === c3) return t4.stylize(s3, "special");
              } else if (we(e4)) {
                s3 = ft(null !== l3 ? e4 : new lt(e4));
                var D2 = fr(l3, u2, "RegExp");
                if ("RegExp " !== D2 && (s3 = "".concat(D2).concat(s3)), 0 === a3.length && void 0 === c3 || r4 > t4.depth && null !== t4.depth) return t4.stylize(s3, "regexp");
              } else if (Ae(e4)) {
                s3 = H(j(e4)) ? L(e4) : E(e4);
                var C2 = fr(l3, u2, "Date");
                if ("Date " !== C2 && (s3 = "".concat(C2).concat(s3)), 0 === a3.length && void 0 === c3) return t4.stylize(s3, "date");
              } else if (te(e4)) {
                if (s3 = function(t5, e5, r5, n2, o3) {
                  var a4 = null != t5.name ? bt(t5.name) : "Error", c4 = dr(t5);
                  (function(t6, e6, r6, n3) {
                    if (!t6.showHidden && 0 !== e6.length) for (var o4 = 0, i2 = ["name", "message", "stack"]; o4 < i2.length; o4++) {
                      var a5 = i2[o4], c5 = e6.indexOf(a5);
                      -1 !== c5 && n3.includes(r6[a5]) && e6.splice(c5, 1);
                    }
                  })(n2, o3, t5, c4), !("cause" in t5) || 0 !== o3.length && o3.includes("cause") || o3.push("cause"), c4 = function(t6, e6, r6, n3) {
                    var o4 = r6.length;
                    if (null === e6 || r6.endsWith("Error") && t6.startsWith(r6) && (t6.length === o4 || ":" === t6[o4] || "\n" === t6[o4])) {
                      var i2 = "Error";
                      if (null === e6) {
                        var a5 = t6.match(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/) || t6.match(/^([a-z_A-Z0-9-]*Error)$/);
                        o4 = (i2 = a5 && a5[1] || "").length, i2 = i2 || "Error";
                      }
                      var c5 = fr(e6, n3, i2).slice(0, -1);
                      r6 !== c5 && (t6 = c5.includes(r6) ? 0 === o4 ? "".concat(c5, ": ").concat(t6) : "".concat(c5).concat(t6.slice(o4)) : "".concat(c5, " [").concat(r6, "]").concat(t6.slice(o4)));
                    }
                    return t6;
                  }(c4, e5, a4, r5);
                  var l4 = t5.message && c4.indexOf(t5.message) || -1;
                  -1 !== l4 && (l4 += t5.message.length);
                  var u3 = c4.indexOf("\n    at", l4);
                  if (-1 === u3) c4 = "[".concat(c4, "]");
                  else {
                    var f4 = c4.slice(0, u3), p4 = function(t6, e6, r6) {
                      var n3 = r6.split("\n");
                      if (e6.cause && te(e6.cause)) {
                        var o4 = dr(e6.cause), i2 = o4.indexOf("\n    at");
                        if (-1 !== i2) {
                          var a5 = function(t7, e7) {
                            for (var r7 = 0; r7 < t7.length - 3; r7++) {
                              var n4 = e7.indexOf(t7[r7]);
                              if (-1 !== n4) {
                                var o5 = e7.length - n4;
                                if (o5 > 3) {
                                  for (var i3 = 1, a6 = N(t7.length - r7, o5); a6 > i3 && t7[r7 + i3] === e7[n4 + i3]; ) i3++;
                                  if (i3 > 3) return { len: i3, offset: r7 };
                                }
                              }
                            }
                            return { len: 0, offset: 0 };
                          }(n3, o4.slice(i2 + 1).split("\n")), c5 = a5.len, l5 = a5.offset;
                          if (c5 > 0) {
                            var u4 = c5 - 2, f5 = "    ... ".concat(u4, " lines matching cause stack trace ...");
                            n3.splice(l5 + 1, u4, t6.stylize(f5, "undefined"));
                          }
                        }
                      }
                      return n3;
                    }(n2, t5, c4.slice(u3 + 1));
                    if (n2.colors) {
                      var s4, y2 = i(p4);
                      try {
                        for (y2.s(); !(s4 = y2.n()).done; ) {
                          var g4 = s4.value, d3 = g4.match(Ue);
                          if (null !== d3 && ke.exists(d3[1])) f4 += "\n".concat(n2.stylize(g4, "undefined"));
                          else {
                            var b2 = void 0;
                            f4 += "\n";
                            for (var h3 = 0; null !== (b2 = $e.exec(g4)); ) f4 += g4.slice(h3, b2.index + 14), f4 += n2.stylize(b2[1], "module"), h3 = b2.index + b2[0].length;
                            f4 += 0 === h3 ? g4 : g4.slice(h3);
                          }
                        }
                      } catch (t6) {
                        y2.e(t6);
                      } finally {
                        y2.f();
                      }
                    } else f4 += "\n".concat(p4.join("\n"));
                    c4 = f4;
                  }
                  if (0 !== n2.indentationLvl) {
                    var v3 = " ".repeat(n2.indentationLvl);
                    c4 = c4.replace(/\n/g, "\n".concat(v3));
                  }
                  return c4;
                }(e4, l3, u2, t4, a3), 0 === a3.length && void 0 === c3) return s3;
              } else if (ue(e4)) {
                var G2 = fr(l3, u2, fe(e4) ? "ArrayBuffer" : "SharedArrayBuffer");
                if (void 0 === o2) g3 = Or;
                else if (0 === a3.length && void 0 === c3) return G2 + "{ byteLength: ".concat(hr(t4.stylize, e4.byteLength, false), " }");
                f3[0] = "".concat(G2, "{"), x(a3, "byteLength");
              } else if (ye(e4)) f3[0] = "".concat(fr(l3, u2, "DataView"), "{"), x(a3, "byteLength", "byteOffset", "buffer");
              else if (me(e4)) f3[0] = "".concat(fr(l3, u2, "Promise"), "{"), g3 = Rr;
              else if (xe(e4)) f3[0] = "".concat(fr(l3, u2, "WeakSet"), "{"), g3 = t4.showHidden ? Ir : Fr;
              else if (Oe(e4)) f3[0] = "".concat(fr(l3, u2, "WeakMap"), "{"), g3 = t4.showHidden ? Tr : Fr;
              else if (he(e4)) f3[0] = "".concat(fr(l3, u2, "Module"), "{"), g3 = Sr.bind(null, a3);
              else if (se(e4)) {
                if (s3 = function(t5, e5, r5, n2, o3) {
                  var i2, a4;
                  Le(t5) ? (i2 = $, a4 = "Number") : Ee(t5) ? (i2 = Ft, a4 = "String", r5.splice(0, t5.length)) : Fe(t5) ? (i2 = A, a4 = "Boolean") : Ie(t5) ? (i2 = w, a4 = "BigInt") : (i2 = Tt, a4 = "Symbol");
                  var c4 = "[".concat(a4);
                  return a4 !== n2 && (c4 += null === n2 ? " (null prototype)" : " (".concat(n2, ")")), c4 += ": ".concat(mr(ir, i2(t5), e5), "]"), "" !== o3 && o3 !== n2 && (c4 += " [".concat(o3, "]")), 0 !== r5.length || e5.stylize === ir ? c4 : e5.stylize(c4, Et(a4));
                }(e4, t4, a3, l3, u2), 0 === a3.length && void 0 === c3) return s3;
              } else {
                if (0 === a3.length && void 0 === c3) {
                  if (ge(e4)) {
                    var W2 = Zt(e4).toString(16);
                    return t4.stylize("[External: ".concat(W2, "]"), "special");
                  }
                  return "".concat(sr(e4, l3, u2), "{}");
                }
                f3[0] = "".concat(sr(e4, l3, u2), "{");
              }
              if (r4 > t4.depth && null !== t4.depth) {
                var V2 = sr(e4, l3, u2).slice(0, -1);
                return null !== l3 && (V2 = "[".concat(V2, "]")), t4.stylize(V2, "special");
              }
              r4 += 1, t4.seen.push(e4), t4.currentDepth = r4;
              var U2 = t4.indentationLvl;
              try {
                for (p3 = g3(t4, e4, r4), h2 = 0; h2 < a3.length; h2++) p3.push(_r(t4, e4, r4, a3[h2], m2));
                var Z2;
                void 0 !== c3 && (Z2 = p3).push.apply(Z2, n(c3));
              } catch (r5) {
                return function(t5, e5, r6, n2) {
                  if (ie(e5)) return t5.seen.pop(), t5.indentationLvl = n2, t5.stylize("[".concat(r6, ": Inspection interrupted ") + "prematurely. Maximum call stack size exceeded.]", "special");
                  Te.fail(e5.stack);
                }(t4, r5, sr(e4, l3, u2).slice(0, -1), U2);
              }
              if (void 0 !== t4.circular) {
                var Y2 = t4.circular.get(e4);
                if (void 0 !== Y2) {
                  var K2 = t4.stylize("<ref *".concat(Y2, ">"), "special");
                  true !== t4.compact ? s3 = "" === s3 ? K2 : "".concat(K2, " ").concat(s3) : f3[0] = "".concat(K2, " ").concat(f3[0]);
                }
              }
              if (t4.seen.pop(), t4.sorted) {
                var q2 = true === t4.sorted ? void 0 : t4.sorted;
                if (0 === m2) p3 = p3.sort(q2);
                else if (a3.length > 1) {
                  var J2, Q2 = p3.slice(p3.length - a3.length).sort(q2);
                  (J2 = p3).splice.apply(J2, [p3.length - a3.length, a3.length].concat(n(Q2)));
                }
              }
              var X2 = Mr(t4, p3, s3, f3, m2, r4, e4), et2 = (t4.budget[t4.indentationLvl] || 0) + X2.length;
              return t4.budget[t4.indentationLvl] = et2, et2 > Math.pow(2, 27) && (t4.depth = -1), X2;
            }(t3, e3, r3, a2);
          }
          function gr(t3, e3) {
            return e3 !== "".concat(t3, " Iterator") && ("" !== e3 && (e3 += "] ["), e3 += "".concat(t3, " Iterator")), ["[".concat(e3, "] {"), "}"];
          }
          function dr(t3) {
            return t3.stack ? bt(t3.stack) : F(t3);
          }
          function br(t3) {
            for (var e3 = "", r3 = t3.length, n2 = t3.startsWith("-") ? 1 : 0; r3 >= n2 + 4; r3 -= 3) e3 = "_".concat(t3.slice(r3 - 3, r3)).concat(e3);
            return r3 === t3.length ? t3 : "".concat(t3.slice(0, r3)).concat(e3);
          }
          function hr(t3, e3, r3) {
            if (!r3) return et(e3, -0) ? t3("-0", "number") : t3("".concat(e3), "number");
            var n2 = C(e3), o2 = bt(n2);
            return n2 === e3 ? !W(e3) || o2.includes("e") ? t3(o2, "number") : t3("".concat(br(o2)), "number") : H(e3) ? t3(o2, "number") : t3("".concat(br(o2), ".").concat(function(t4) {
              for (var e4 = "", r4 = 0; r4 < t4.length - 3; r4 += 3) e4 += "".concat(t4.slice(r4, r4 + 3), "_");
              return 0 === r4 ? t4 : "".concat(e4).concat(t4.slice(r4));
            }(bt(e3).slice(o2.length + 1))), "number");
          }
          function vr(t3, e3, r3) {
            var n2 = bt(e3);
            return t3("".concat(r3 ? br(n2) : n2, "n"), "bigint");
          }
          function mr(t3, e3, r3) {
            if ("string" == typeof e3) {
              var n2 = "";
              if (e3.length > r3.maxStringLength) {
                var o2 = e3.length - r3.maxStringLength;
                e3 = e3.slice(0, r3.maxStringLength), n2 = "... ".concat(o2, " more character").concat(o2 > 1 ? "s" : "");
              }
              return true !== r3.compact && e3.length > 16 && e3.length > r3.breakLength - r3.indentationLvl - 4 ? e3.split(/\n/).map(function(e4, r4, n3) {
                return t3(nr(e4 + (r4 === n3.length - 1 ? "" : "\n")), "string");
              }).join(" +\n".concat(" ".repeat(r3.indentationLvl + 2))) + n2 : t3(nr(e3), "string") + n2;
            }
            return "number" == typeof e3 ? hr(t3, e3, r3.numericSeparator) : "bigint" == typeof e3 ? vr(t3, e3, r3.numericSeparator) : "boolean" == typeof e3 ? t3("".concat(e3), "boolean") : void 0 === e3 ? t3("undefined", "undefined") : t3(It(e3), "symbol");
          }
          function Sr(t3, e3, r3, n2) {
            for (var o2 = new d(t3.length), i2 = 0; i2 < t3.length; i2++) try {
              o2[i2] = _r(e3, r3, n2, t3[i2], 0);
            } catch (r4) {
              Te(ve(r4) && "ReferenceError" === r4.name);
              var a2 = f({}, t3[i2], "");
              o2[i2] = _r(e3, a2, n2, t3[i2], 0);
              var c2 = o2[i2].lastIndexOf(" ");
              o2[i2] = o2[i2].slice(0, c2 + 1) + e3.stylize("<uninitialized>", "special");
            }
            return t3.length = 0, o2;
          }
          function Pr(t3, e3, r3, n2, o2, i2) {
            for (var a2 = rt(e3), c2 = i2; i2 < a2.length && o2.length < n2; i2++) {
              var l2 = a2[i2], u2 = +l2;
              if (u2 > Math.pow(2, 32) - 2) break;
              if ("".concat(c2) !== l2) {
                if (!Ve.test(l2)) break;
                var f2 = u2 - c2, p2 = f2 > 1 ? "s" : "", s2 = "<".concat(f2, " empty item").concat(p2, ">");
                if (o2.push(t3.stylize(s2, "undefined")), c2 = u2, o2.length === n2) break;
              }
              o2.push(_r(t3, e3, r3, l2, 1)), c2++;
            }
            var y2 = e3.length - c2;
            if (o2.length !== n2) {
              if (y2 > 0) {
                var g2 = y2 > 1 ? "s" : "", d2 = "<".concat(y2, " empty item").concat(g2, ">");
                o2.push(t3.stylize(d2, "undefined"));
              }
            } else y2 > 0 && o2.push("... ".concat(y2, " more item").concat(y2 > 1 ? "s" : ""));
            return o2;
          }
          function Or(t3, e3) {
            var n2;
            try {
              n2 = new Mt(e3);
            } catch (e4) {
              return [t3.stylize("(detached)", "special")];
            }
            void 0 === p && (p = Bt(r2(794).l.prototype.hexSlice));
            var o2 = Lt(wt(p(n2, 0, N(t3.maxArrayLength, n2.length)), /(.{2})/g, "$1 ")), i2 = n2.length - t3.maxArrayLength;
            return i2 > 0 && (o2 += " ... ".concat(i2, " more byte").concat(i2 > 1 ? "s" : "")), ["".concat(t3.stylize("[Uint8Contents]", "special"), ": <").concat(o2, ">")];
          }
          function xr(t3, e3, r3) {
            for (var n2 = e3.length, o2 = N(M(0, t3.maxArrayLength), n2), i2 = n2 - o2, a2 = [], c2 = 0; c2 < o2; c2++) {
              if (!nt(e3, c2)) return Pr(t3, e3, r3, o2, a2, c2);
              a2.push(_r(t3, e3, r3, c2, 1));
            }
            return i2 > 0 && a2.push("... ".concat(i2, " more item").concat(i2 > 1 ? "s" : "")), a2;
          }
          function wr(t3, e3, r3, n2, o2) {
            for (var i2 = N(M(0, r3.maxArrayLength), e3), a2 = t3.length - i2, c2 = new d(i2), l2 = t3.length > 0 && "number" == typeof t3[0] ? hr : vr, u2 = 0; u2 < i2; ++u2) c2[u2] = l2(r3.stylize, t3[u2], r3.numericSeparator);
            if (a2 > 0 && (c2[i2] = "... ".concat(a2, " more item").concat(a2 > 1 ? "s" : "")), r3.showHidden) {
              r3.indentationLvl += 2;
              for (var f2 = 0, p2 = ["BYTES_PER_ELEMENT", "length", "byteLength", "byteOffset", "buffer"]; f2 < p2.length; f2++) {
                var s2 = p2[f2], y2 = yr(r3, t3[s2], o2, true);
                S(c2, "[".concat(s2, "]: ").concat(y2));
              }
              r3.indentationLvl -= 2;
            }
            return c2;
          }
          function Ar(t3, e3, r3, n2) {
            var o2 = [];
            e3.indentationLvl += 2;
            var a2, c2 = i(t3);
            try {
              for (c2.s(); !(a2 = c2.n()).done; ) {
                var l2 = a2.value;
                S(o2, yr(e3, l2, n2));
              }
            } catch (t4) {
              c2.e(t4);
            } finally {
              c2.f();
            }
            return e3.indentationLvl -= 2, o2;
          }
          function jr(t3, e3, r3, n2) {
            var o2 = [];
            e3.indentationLvl += 2;
            var a2, c2 = i(t3);
            try {
              for (c2.s(); !(a2 = c2.n()).done; ) {
                var l2 = a2.value, u2 = l2[0], f2 = l2[1];
                o2.push("".concat(yr(e3, u2, n2), " => ").concat(yr(e3, f2, n2)));
              }
            } catch (t4) {
              c2.e(t4);
            } finally {
              c2.f();
            }
            return e3.indentationLvl -= 2, o2;
          }
          function Er(t3, e3, r3, n2) {
            var o2 = M(t3.maxArrayLength, 0), i2 = N(o2, r3.length), a2 = new d(i2);
            t3.indentationLvl += 2;
            for (var c2 = 0; c2 < i2; c2++) a2[c2] = yr(t3, r3[c2], e3);
            t3.indentationLvl -= 2, 0 !== n2 || t3.sorted || O(a2);
            var l2 = r3.length - i2;
            return l2 > 0 && S(a2, "... ".concat(l2, " more item").concat(l2 > 1 ? "s" : "")), a2;
          }
          function Lr(t3, e3, r3, n2) {
            var o2 = M(t3.maxArrayLength, 0), i2 = r3.length / 2, a2 = i2 - o2, c2 = N(o2, i2), l2 = new d(c2), u2 = 0;
            if (t3.indentationLvl += 2, 0 === n2) {
              for (; u2 < c2; u2++) {
                var f2 = 2 * u2;
                l2[u2] = "".concat(yr(t3, r3[f2], e3), " => ").concat(yr(t3, r3[f2 + 1], e3));
              }
              t3.sorted || (l2 = l2.sort());
            } else for (; u2 < c2; u2++) {
              var p2 = 2 * u2, s2 = [yr(t3, r3[p2], e3), yr(t3, r3[p2 + 1], e3)];
              l2[u2] = Mr(t3, s2, "", ["[", "]"], 2, e3);
            }
            return t3.indentationLvl -= 2, a2 > 0 && l2.push("... ".concat(a2, " more item").concat(a2 > 1 ? "s" : "")), l2;
          }
          function Fr(t3) {
            return [t3.stylize("<items unknown>", "special")];
          }
          function Ir(t3, e3, r3) {
            return Er(t3, r3, Ut(e3), 0);
          }
          function Tr(t3, e3, r3) {
            return Lr(t3, r3, Ut(e3), 0);
          }
          function kr(t3, e3, r3, n2) {
            var o2 = Ut(r3, true), i2 = o2[0];
            return o2[1] ? (t3[0] = t3[0].replace(/ Iterator] {$/, " Entries] {"), Lr(e3, n2, i2, 2)) : Er(e3, n2, i2, 1);
          }
          function Rr(t3, e3, r3) {
            var n2, o2 = Gt(e3), i2 = o2[0], a2 = o2[1];
            if (i2 === Ht) n2 = [t3.stylize("<pending>", "special")];
            else {
              t3.indentationLvl += 2;
              var c2 = yr(t3, a2, r3);
              t3.indentationLvl -= 2, n2 = [i2 === Vt ? "".concat(t3.stylize("<rejected>", "special"), " ").concat(c2) : c2];
            }
            return n2;
          }
          function _r(t3, e3, r3, n2, i2, a2) {
            var c2, l2, u2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e3, f2 = " ";
            if (void 0 !== (a2 = a2 || J(e3, n2) || { value: e3[n2], enumerable: true }).value) {
              var p2 = true !== t3.compact || 0 !== i2 ? 2 : 3;
              t3.indentationLvl += p2, l2 = yr(t3, a2.value, r3), 3 === p2 && t3.breakLength < s(l2, t3.colors) && (f2 = "\n".concat(" ".repeat(t3.indentationLvl))), t3.indentationLvl -= p2;
            } else if (void 0 !== a2.get) {
              var y2 = void 0 !== a2.set ? "Getter/Setter" : "Getter", g2 = t3.stylize, d2 = "special";
              if (t3.getters && (true === t3.getters || "get" === t3.getters && void 0 === a2.set || "set" === t3.getters && void 0 !== a2.set)) try {
                var b2 = I(a2.get, u2);
                if (t3.indentationLvl += 2, null === b2) l2 = "".concat(g2("[".concat(y2, ":"), d2), " ").concat(g2("null", "null")).concat(g2("]", d2));
                else if ("object" === o(b2)) l2 = "".concat(g2("[".concat(y2, "]"), d2), " ").concat(yr(t3, b2, r3));
                else {
                  var h2 = mr(g2, b2, t3);
                  l2 = "".concat(g2("[".concat(y2, ":"), d2), " ").concat(h2).concat(g2("]", d2));
                }
                t3.indentationLvl -= 2;
              } catch (t4) {
                var v2 = "<Inspection threw (".concat(t4.message, ")>");
                l2 = "".concat(g2("[".concat(y2, ":"), d2), " ").concat(v2).concat(g2("]", d2));
              }
              else l2 = t3.stylize("[".concat(y2, "]"), d2);
            } else l2 = void 0 !== a2.set ? t3.stylize("[Setter]", "special") : t3.stylize("undefined", "undefined");
            if (1 === i2) return l2;
            if ("symbol" === o(n2)) {
              var m2 = wt(It(n2), Ce, rr);
              c2 = "[".concat(t3.stylize(m2, "symbol"), "]");
            } else if ("__proto__" === n2) c2 = "['__proto__']";
            else if (false === a2.enumerable) {
              var S2 = wt(n2, Ce, rr);
              c2 = "[".concat(S2, "]");
            } else c2 = ut(He, n2) ? t3.stylize(n2, "name") : t3.stylize(nr(n2), "string");
            return "".concat(c2, ":").concat(f2).concat(l2);
          }
          function zr(t3, e3, r3, n2) {
            var o2 = e3.length + r3;
            if (o2 + e3.length > t3.breakLength) return false;
            for (var i2 = 0; i2 < e3.length; i2++) if (t3.colors ? o2 += re(e3[i2]).length : o2 += e3[i2].length, o2 > t3.breakLength) return false;
            return "" === n2 || !mt(n2, "\n");
          }
          function Mr(t3, e3, r3, n2, o2, i2, a2) {
            if (true !== t3.compact) {
              if ("number" == typeof t3.compact && t3.compact >= 1) {
                var c2 = e3.length;
                if (2 === o2 && c2 > 6 && (e3 = function(t4, e4, r4) {
                  var n3 = 0, o3 = 0, i3 = 0, a3 = e4.length;
                  t4.maxArrayLength < e4.length && a3--;
                  for (var c3 = new d(a3); i3 < a3; i3++) {
                    var l3 = s(e4[i3], t4.colors);
                    c3[i3] = l3, n3 += l3 + 2, o3 < l3 && (o3 = l3);
                  }
                  var u3 = o3 + 2;
                  if (3 * u3 + t4.indentationLvl < t4.breakLength && (n3 / u3 > 5 || o3 <= 6)) {
                    var f3 = D(u3 - n3 / e4.length), p3 = M(u3 - 3 - f3, 1), y2 = N(B(D(2.5 * p3 * a3) / p3), z((t4.breakLength - t4.indentationLvl) / u3), 4 * t4.compact, 15);
                    if (y2 <= 1) return e4;
                    for (var g2 = [], b2 = [], h2 = 0; h2 < y2; h2++) {
                      for (var v2 = 0, m2 = h2; m2 < e4.length; m2 += y2) c3[m2] > v2 && (v2 = c3[m2]);
                      v2 += 2, b2[h2] = v2;
                    }
                    var P2 = Ot;
                    if (void 0 !== r4) {
                      for (var O2 = 0; O2 < e4.length; O2++) if ("number" != typeof r4[O2] && "bigint" != typeof r4[O2]) {
                        P2 = Pt;
                        break;
                      }
                    }
                    for (var x2 = 0; x2 < a3; x2 += y2) {
                      for (var w2 = N(x2 + y2, a3), A2 = "", j2 = x2; j2 < w2 - 1; j2++) {
                        var E2 = b2[j2 - x2] + e4[j2].length - c3[j2];
                        A2 += P2("".concat(e4[j2], ", "), E2, " ");
                      }
                      if (P2 === Ot) {
                        var L2 = b2[j2 - x2] + e4[j2].length - c3[j2] - 2;
                        A2 += Ot(e4[j2], L2, " ");
                      } else A2 += e4[j2];
                      S(g2, A2);
                    }
                    t4.maxArrayLength < e4.length && S(g2, e4[a3]), e4 = g2;
                  }
                  return e4;
                }(t3, e3, a2)), t3.currentDepth - i2 < t3.compact && c2 === e3.length && zr(t3, e3, e3.length + t3.indentationLvl + n2[0].length + r3.length + 10, r3)) {
                  var l2 = ee(e3, ", ");
                  if (!l2.includes("\n")) return "".concat(r3 ? "".concat(r3, " ") : "").concat(n2[0], " ").concat(l2) + " ".concat(n2[1]);
                }
              }
              var u2 = "\n".concat(xt(" ", t3.indentationLvl));
              return "".concat(r3 ? "".concat(r3, " ") : "").concat(n2[0]).concat(u2, "  ") + "".concat(ee(e3, ",".concat(u2, "  "))).concat(u2).concat(n2[1]);
            }
            if (zr(t3, e3, 0, r3)) return "".concat(n2[0]).concat(r3 ? " ".concat(r3) : "", " ").concat(ee(e3, ", "), " ") + n2[1];
            var f2 = xt(" ", t3.indentationLvl), p2 = "" === r3 && 1 === n2[0].length ? " " : "".concat(r3 ? " ".concat(r3) : "", "\n").concat(f2, "  ");
            return "".concat(n2[0]).concat(p2).concat(ee(e3, ",\n".concat(f2, "  ")), " ").concat(n2[1]);
          }
          function Nr(t3) {
            var e3 = Wt(t3, false);
            if (void 0 !== e3 && (t3 = e3), "function" != typeof t3.toString) return true;
            if (nt(t3, "toString")) return false;
            var r3 = t3;
            do {
              r3 = tt(r3);
            } while (!nt(r3, "toString"));
            var n2 = J(r3, "constructor");
            return void 0 !== n2 && "function" == typeof n2.value && Me.has(n2.value.name);
          }
          Je.colors = Y(K(null), { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], blink: [5, 25], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29], doubleunderline: [21, 24], black: [30, Qe], red: [31, Qe], green: [32, Qe], yellow: [33, Qe], blue: [34, Qe], magenta: [35, Qe], cyan: [36, Qe], white: [37, Qe], bgBlack: [40, Xe], bgRed: [41, Xe], bgGreen: [42, Xe], bgYellow: [43, Xe], bgBlue: [44, Xe], bgMagenta: [45, Xe], bgCyan: [46, Xe], bgWhite: [47, Xe], framed: [51, 54], overlined: [53, 55], gray: [90, Qe], redBright: [91, Qe], greenBright: [92, Qe], yellowBright: [93, Qe], blueBright: [94, Qe], magentaBright: [95, Qe], cyanBright: [96, Qe], whiteBright: [97, Qe], bgGray: [100, Xe], bgRedBright: [101, Xe], bgGreenBright: [102, Xe], bgYellowBright: [103, Xe], bgBlueBright: [104, Xe], bgMagentaBright: [105, Xe], bgCyanBright: [106, Xe], bgWhiteBright: [107, Xe] }), tr("gray", "grey"), tr("gray", "blackBright"), tr("bgGray", "bgGrey"), tr("bgGray", "bgBlackBright"), tr("dim", "faint"), tr("strikethrough", "crossedout"), tr("strikethrough", "strikeThrough"), tr("strikethrough", "crossedOut"), tr("hidden", "conceal"), tr("inverse", "swapColors"), tr("inverse", "swapcolors"), tr("doubleunderline", "doubleUnderline"), Je.styles = Y(K(null), { special: "cyan", number: "yellow", bigint: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", symbol: "green", date: "magenta", regexp: "red", module: "underline" });
          var Br, Dr = function(t3) {
            return jt(t3.message, "\n", 1)[0];
          };
          function Cr(t3) {
            try {
              return k(t3);
            } catch (t4) {
              if (!Br) try {
                var e3 = {};
                e3.a = e3, k(e3);
              } catch (t5) {
                Br = Dr(t5);
              }
              if ("TypeError" === t4.name && Dr(t4) === Br) return "[Circular]";
              throw t4;
            }
          }
          function Gr(t3, e3) {
            return hr(ir, t3, null != e3 && null != e3.numericSeparator ? e3.numericSeparator : Be.numericSeparator);
          }
          function Wr(t3, e3) {
            return vr(ir, t3, null != e3 && null != e3.numericSeparator ? e3.numericSeparator : Be.numericSeparator);
          }
          function Hr(t3, e3) {
            var r3 = e3[0], n2 = 0, i2 = "", a2 = "";
            if ("string" == typeof r3) {
              if (1 === e3.length) return r3;
              for (var c2, l2 = 0, f2 = 0; f2 < r3.length - 1; f2++) if (37 === ht(r3, f2)) {
                var p2 = ht(r3, ++f2);
                if (n2 + 1 !== e3.length) {
                  switch (p2) {
                    case 115:
                      var s2 = e3[++n2];
                      c2 = "number" == typeof s2 ? Gr(s2, t3) : "bigint" == typeof s2 ? Wr(s2, t3) : "object" === o(s2) && null !== s2 && Nr(s2) ? Je(s2, u(u({}, t3), {}, { compact: 3, colors: false, depth: 0 })) : bt(s2);
                      break;
                    case 106:
                      c2 = Cr(e3[++n2]);
                      break;
                    case 100:
                      var y2 = e3[++n2];
                      c2 = "bigint" == typeof y2 ? Wr(y2, t3) : "symbol" === o(y2) ? "NaN" : Gr(G(y2), t3);
                      break;
                    case 79:
                      c2 = Je(e3[++n2], t3);
                      break;
                    case 111:
                      c2 = Je(e3[++n2], u(u({}, t3), {}, { showHidden: true, showProxy: true, depth: 4 }));
                      break;
                    case 105:
                      var g2 = e3[++n2];
                      c2 = "bigint" == typeof g2 ? Wr(g2, t3) : "symbol" === o(g2) ? "NaN" : Gr(U(g2), t3);
                      break;
                    case 102:
                      var d2 = e3[++n2];
                      c2 = "symbol" === o(d2) ? "NaN" : Gr(V(d2), t3);
                      break;
                    case 99:
                      n2 += 1, c2 = "";
                      break;
                    case 37:
                      i2 += At(r3, l2, f2), l2 = f2 + 1;
                      continue;
                    default:
                      continue;
                  }
                  l2 !== f2 - 1 && (i2 += At(r3, l2, f2 - 1)), i2 += c2, l2 = f2 + 1;
                } else 37 === p2 && (i2 += At(r3, l2, f2), l2 = f2 + 1);
              }
              0 !== l2 && (n2++, a2 = " ", l2 < r3.length && (i2 += At(r3, l2)));
            }
            for (; n2 < e3.length; ) {
              var b2 = e3[n2];
              i2 += a2, i2 += "string" != typeof b2 ? Je(b2, t3) : b2, a2 = " ", n2++;
            }
            return i2;
          }
          if (g("config").hasIntl) {
            var Vr = g("icu");
            s = function(t3) {
              var e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r3 = 0;
              e3 && (t3 = Zr(t3));
              for (var n2 = 0; n2 < t3.length; n2++) {
                var o2 = t3.charCodeAt(n2);
                if (o2 >= 127) {
                  r3 += Vr.getStringWidth(t3.slice(n2).normalize("NFC"));
                  break;
                }
                r3 += o2 >= 32 ? 1 : 0;
              }
              return r3;
            };
          } else {
            s = function(t3) {
              var e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r3 = 0;
              e3 && (t3 = Zr(t3)), t3 = St(t3, "NFC");
              var n2, o2 = i(new pt(t3));
              try {
                for (o2.s(); !(n2 = o2.n()).done; ) {
                  var a2 = n2.value, c2 = vt(a2, 0);
                  Ur(c2) ? r3 += 2 : $r(c2) || r3++;
                }
              } catch (t4) {
                o2.e(t4);
              } finally {
                o2.f();
              }
              return r3;
            };
            var Ur = function(t3) {
              return t3 >= 4352 && (t3 <= 4447 || 9001 === t3 || 9002 === t3 || t3 >= 11904 && t3 <= 12871 && 12351 !== t3 || t3 >= 12880 && t3 <= 19903 || t3 >= 19968 && t3 <= 42182 || t3 >= 43360 && t3 <= 43388 || t3 >= 44032 && t3 <= 55203 || t3 >= 63744 && t3 <= 64255 || t3 >= 65040 && t3 <= 65049 || t3 >= 65072 && t3 <= 65131 || t3 >= 65281 && t3 <= 65376 || t3 >= 65504 && t3 <= 65510 || t3 >= 110592 && t3 <= 110593 || t3 >= 127488 && t3 <= 127569 || t3 >= 127744 && t3 <= 128591 || t3 >= 131072 && t3 <= 262141);
            }, $r = function(t3) {
              return t3 <= 31 || t3 >= 127 && t3 <= 159 || t3 >= 768 && t3 <= 879 || t3 >= 8203 && t3 <= 8207 || t3 >= 8400 && t3 <= 8447 || t3 >= 65024 && t3 <= 65039 || t3 >= 65056 && t3 <= 65071 || t3 >= 917760 && t3 <= 917999;
            };
          }
          function Zr(t3) {
            return ze(t3, "str"), t3.replace(qe, "");
          }
          t2.exports = { inspect: Je, format: function() {
            for (var t3 = arguments.length, e3 = new Array(t3), r3 = 0; r3 < t3; r3++) e3[r3] = arguments[r3];
            return Hr(void 0, e3);
          }, formatWithOptions: function(t3) {
            if ("object" !== o(t3) || null === t3) throw new oe("inspectOptions", "object", t3);
            for (var e3 = arguments.length, r3 = new Array(e3 > 1 ? e3 - 1 : 0), n2 = 1; n2 < e3; n2++) r3[n2 - 1] = arguments[n2];
            return Hr(t3, r3);
          }, getStringWidth: s, inspectDefaultOptions: Be, stripVTControlCharacters: Zr, stylizeWithColor: or, stylizeWithHTML: function(t3, e3) {
            var r3 = Je.styles[e3];
            return void 0 !== r3 ? '<span style="color:'.concat(r3, ';">').concat(t3, "</span>") : t3;
          }, Proxy: Jt };
        }, 915: (t2) => {
          t2.exports = function(t3) {
            if (!t3) throw new Error("Assertion failed");
          };
        }, 875: (t2, e2) => {
          e2.NativeModule = { exists: function(t3) {
            return !t3.startsWith("/");
          } };
        }, 962: (t2, e2, r2) => {
          function n(t3) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, n(t3);
          }
          function o(t3, e3) {
            (null == e3 || e3 > t3.length) && (e3 = t3.length);
            for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++) n2[r3] = t3[r3];
            return n2;
          }
          var i, a, c = r2(459), l = c.ArrayIsArray, u = c.ArrayPrototypeIncludes, f = c.ArrayPrototypeIndexOf, p = c.ArrayPrototypeJoin, s = c.ArrayPrototypePop, y = c.ArrayPrototypePush, g = c.ArrayPrototypeSplice, d = c.ErrorCaptureStackTrace, b = c.ObjectDefineProperty, h = c.ReflectApply, v = c.RegExpPrototypeTest, m = c.SafeMap, S = c.StringPrototypeEndsWith, P = c.StringPrototypeIncludes, O = c.StringPrototypeSlice, x = c.StringPrototypeToLowerCase, w = new m(), A = {}, j = /^([A-Z][a-z0-9]*)+$/, E = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], L = null;
          function F() {
            return L || (L = r2(618)), L;
          }
          var I = T(function(t3, e3, r3) {
            (t3 = C(t3)).name = "".concat(e3, " [").concat(r3, "]"), t3.stack, delete t3.name;
          });
          function T(t3) {
            var e3 = "__node_internal_" + t3.name;
            return b(t3, "name", { value: e3 }), t3;
          }
          function k(t3, e3, n2) {
            var o2 = w.get(t3);
            return void 0 === a && (a = r2(915)), a("function" == typeof o2), a(o2.length <= e3.length, "Code: ".concat(t3, "; The provided arguments length (").concat(e3.length, ") does not ") + "match the required ones (".concat(o2.length, ").")), h(o2, n2, e3);
          }
          var R, _, z, M, N, B, D, C = T(function(t3) {
            return i = Error.stackTraceLimit, Error.stackTraceLimit = 1 / 0, d(t3), Error.stackTraceLimit = i, t3;
          });
          t2.exports = { codes: A, hideStackFrames: T, isStackOverflowError: function(t3) {
            if (void 0 === _) try {
              !function t4() {
                t4();
              }();
            } catch (t4) {
              _ = t4.message, R = t4.name;
            }
            return t3 && t3.name === R && t3.message === _;
          } }, z = "ERR_INVALID_ARG_TYPE", M = function(t3, e3, r3) {
            a("string" == typeof t3, "'name' must be a string"), l(e3) || (e3 = [e3]);
            var i2 = "The ";
            if (S(t3, " argument")) i2 += "".concat(t3, " ");
            else {
              var c2 = P(t3, ".") ? "property" : "argument";
              i2 += '"'.concat(t3, '" ').concat(c2, " ");
            }
            i2 += "must be ";
            var d2, b2 = [], h2 = [], m2 = [], w2 = function(t4, e4) {
              var r4 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
              if (!r4) {
                if (Array.isArray(t4) || (r4 = function(t5, e5) {
                  if (t5) {
                    if ("string" == typeof t5) return o(t5, e5);
                    var r5 = Object.prototype.toString.call(t5).slice(8, -1);
                    return "Object" === r5 && t5.constructor && (r5 = t5.constructor.name), "Map" === r5 || "Set" === r5 ? Array.from(t5) : "Arguments" === r5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r5) ? o(t5, e5) : void 0;
                  }
                }(t4)) || e4 && t4 && "number" == typeof t4.length) {
                  r4 && (t4 = r4);
                  var n2 = 0, i3 = function() {
                  };
                  return { s: i3, n: function() {
                    return n2 >= t4.length ? { done: true } : { done: false, value: t4[n2++] };
                  }, e: function(t5) {
                    throw t5;
                  }, f: i3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var a2, c3 = true, l2 = false;
              return { s: function() {
                r4 = r4.call(t4);
              }, n: function() {
                var t5 = r4.next();
                return c3 = t5.done, t5;
              }, e: function(t5) {
                l2 = true, a2 = t5;
              }, f: function() {
                try {
                  c3 || null == r4.return || r4.return();
                } finally {
                  if (l2) throw a2;
                }
              } };
            }(e3);
            try {
              for (w2.s(); !(d2 = w2.n()).done; ) {
                var A2 = d2.value;
                a("string" == typeof A2, "All expected entries have to be of type string"), u(E, A2) ? y(b2, x(A2)) : v(j, A2) ? y(h2, A2) : (a("object" !== A2, 'The value "object" should be written as "Object"'), y(m2, A2));
              }
            } catch (t4) {
              w2.e(t4);
            } finally {
              w2.f();
            }
            if (h2.length > 0) {
              var L2 = f(b2, "object");
              -1 !== L2 && (g(b2, L2, 1), y(h2, "Object"));
            }
            if (b2.length > 0) {
              if (b2.length > 2) {
                var I2 = s(b2);
                i2 += "one of type ".concat(p(b2, ", "), ", or ").concat(I2);
              } else i2 += 2 === b2.length ? "one of type ".concat(b2[0], " or ").concat(b2[1]) : "of type ".concat(b2[0]);
              (h2.length > 0 || m2.length > 0) && (i2 += " or ");
            }
            if (h2.length > 0) {
              if (h2.length > 2) {
                var T2 = s(h2);
                i2 += "an instance of ".concat(p(h2, ", "), ", or ").concat(T2);
              } else i2 += "an instance of ".concat(h2[0]), 2 === h2.length && (i2 += " or ".concat(h2[1]));
              m2.length > 0 && (i2 += " or ");
            }
            if (m2.length > 0) if (m2.length > 2) {
              var k2 = s(m2);
              i2 += "one of ".concat(p(m2, ", "), ", or ").concat(k2);
            } else 2 === m2.length ? i2 += "one of ".concat(m2[0], " or ").concat(m2[1]) : (x(m2[0]) !== m2[0] && (i2 += "an "), i2 += "".concat(m2[0]));
            if (null == r3) i2 += ". Received ".concat(r3);
            else if ("function" == typeof r3 && r3.name) i2 += ". Received function ".concat(r3.name);
            else if ("object" === n(r3)) if (r3.constructor && r3.constructor.name) i2 += ". Received an instance of ".concat(r3.constructor.name);
            else {
              var R2 = F().inspect(r3, { depth: -1 });
              i2 += ". Received ".concat(R2);
            }
            else {
              var _2 = F().inspect(r3, { colors: false });
              _2.length > 25 && (_2 = "".concat(O(_2, 0, 25), "...")), i2 += ". Received type ".concat(n(r3), " (").concat(_2, ")");
            }
            return i2;
          }, N = TypeError, w.set(z, M), A[z] = (B = N, D = z, function() {
            var t3 = Error.stackTraceLimit;
            Error.stackTraceLimit = 0;
            var e3 = new B();
            Error.stackTraceLimit = t3;
            for (var r3 = arguments.length, n2 = new Array(r3), o2 = 0; o2 < r3; o2++) n2[o2] = arguments[o2];
            var i2 = k(D, n2, e3);
            return b(e3, "message", { value: i2, enumerable: false, writable: true, configurable: true }), b(e3, "toString", { value: function() {
              return "".concat(this.name, " [").concat(D, "]: ").concat(this.message);
            }, enumerable: false, writable: true, configurable: true }), I(e3, B.name, D), e3.code = D, e3;
          });
        }, 719: (t2) => {
          var e2 = /\u001b\[\d\d?m/g;
          t2.exports = { customInspectSymbol: Symbol.for("nodejs.util.inspect.custom"), isError: function(t3) {
            return t3 instanceof Error;
          }, join: Array.prototype.join.call.bind(Array.prototype.join), removeColors: function(t3) {
            return String.prototype.replace.call(t3, e2, "");
          } };
        }, 715: (t2, e2, r2) => {
          function n(t3) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, n(t3);
          }
          var o = r2(493).getConstructorName;
          function i(t3) {
            for (var e3 = arguments.length, r3 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) r3[i2 - 1] = arguments[i2];
            for (var a2 = 0, c2 = r3; a2 < c2.length; a2++) {
              var l2 = c2[a2], u2 = globalThis[l2];
              if (u2 && t3 instanceof u2) return true;
            }
            for (; t3; ) {
              if ("object" !== n(t3)) return false;
              if (r3.indexOf(o(t3)) >= 0) return true;
              t3 = Object.getPrototypeOf(t3);
            }
            return false;
          }
          function a(t3) {
            return function(e3) {
              if (!i(e3, t3.name)) return false;
              try {
                t3.prototype.valueOf.call(e3);
              } catch (t4) {
                return false;
              }
              return true;
            };
          }
          "object" !== ("undefined" == typeof globalThis ? "undefined" : n(globalThis)) && (Object.defineProperty(Object.prototype, "__magic__", { get: function() {
            return this;
          }, configurable: true }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
          var c = a(String), l = a(Number), u = a(Boolean), f = a(BigInt), p = a(Symbol);
          t2.exports = { isAsyncFunction: function(t3) {
            return "function" == typeof t3 && Function.prototype.toString.call(t3).startsWith("async");
          }, isGeneratorFunction: function(t3) {
            return "function" == typeof t3 && Function.prototype.toString.call(t3).match(/^(async\s+)?function *\*/);
          }, isAnyArrayBuffer: function(t3) {
            return i(t3, "ArrayBuffer", "SharedArrayBuffer");
          }, isArrayBuffer: function(t3) {
            return i(t3, "ArrayBuffer");
          }, isArgumentsObject: function(t3) {
            if (null !== t3 && "object" === n(t3) && !Array.isArray(t3) && "number" == typeof t3.length && t3.length === (0 | t3.length) && t3.length >= 0) {
              var e3 = Object.getOwnPropertyDescriptor(t3, "callee");
              return e3 && !e3.enumerable;
            }
            return false;
          }, isBoxedPrimitive: function(t3) {
            return l(t3) || c(t3) || u(t3) || f(t3) || p(t3);
          }, isDataView: function(t3) {
            return i(t3, "DataView");
          }, isExternal: function(t3) {
            return "object" === n(t3) && Object.isFrozen(t3) && null == Object.getPrototypeOf(t3);
          }, isMap: function(t3) {
            if (!i(t3, "Map")) return false;
            try {
              t3.has();
            } catch (t4) {
              return false;
            }
            return true;
          }, isMapIterator: function(t3) {
            return "[object Map Iterator]" === Object.prototype.toString.call(Object.getPrototypeOf(t3));
          }, isModuleNamespaceObject: function(t3) {
            return t3 && "object" === n(t3) && "Module" === t3[Symbol.toStringTag];
          }, isNativeError: function(t3) {
            return t3 instanceof Error && i(t3, "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "AggregateError");
          }, isPromise: function(t3) {
            return i(t3, "Promise");
          }, isSet: function(t3) {
            if (!i(t3, "Set")) return false;
            try {
              t3.has();
            } catch (t4) {
              return false;
            }
            return true;
          }, isSetIterator: function(t3) {
            return "[object Set Iterator]" === Object.prototype.toString.call(Object.getPrototypeOf(t3));
          }, isWeakMap: function(t3) {
            return i(t3, "WeakMap");
          }, isWeakSet: function(t3) {
            return i(t3, "WeakSet");
          }, isRegExp: function(t3) {
            return i(t3, "RegExp");
          }, isDate: function(t3) {
            if (i(t3, "Date")) try {
              return Date.prototype.getTime.call(t3), true;
            } catch (t4) {
            }
            return false;
          }, isTypedArray: function(t3) {
            return i(t3, "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array");
          }, isStringObject: c, isNumberObject: l, isBooleanObject: u, isBigIntObject: f, isSymbolObject: p };
        }, 753: (t2, e2, r2) => {
          function n(t3) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, n(t3);
          }
          var o = r2(459).ArrayIsArray, i = r2(962), a = i.hideStackFrames, c = i.codes.ERR_INVALID_ARG_TYPE, l = a(function(t3, e3, r3) {
            var i2 = null == r3, a2 = !i2 && r3.allowArray, l2 = !i2 && r3.allowFunction;
            if ((i2 || !r3.nullable) && null === t3 || !a2 && o(t3) || "object" !== n(t3) && (!l2 || "function" != typeof t3)) throw new c(e3, "Object", t3);
          });
          t2.exports = { validateObject: l, validateString: function(t3, e3) {
            if ("string" != typeof t3) throw new c(e3, "string", t3);
          } };
        }, 459: (t2, e2, r2) => {
          function n(t3) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, n(t3);
          }
          function o(t3, e3) {
            if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && f(t3, e3);
          }
          function i(t3) {
            var e3 = u();
            return function() {
              var r3, n2 = p(t3);
              if (e3) {
                var o2 = p(this).constructor;
                r3 = Reflect.construct(n2, arguments, o2);
              } else r3 = n2.apply(this, arguments);
              return a(this, r3);
            };
          }
          function a(t3, e3) {
            if (e3 && ("object" === n(e3) || "function" == typeof e3)) return e3;
            if (void 0 !== e3) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t4) {
              if (void 0 === t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t4;
            }(t3);
          }
          function c(t3) {
            var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
            return c = function(t4) {
              if (null === t4 || (r3 = t4, -1 === Function.toString.call(r3).indexOf("[native code]"))) return t4;
              var r3;
              if ("function" != typeof t4) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== e3) {
                if (e3.has(t4)) return e3.get(t4);
                e3.set(t4, n2);
              }
              function n2() {
                return l(t4, arguments, p(this).constructor);
              }
              return n2.prototype = Object.create(t4.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), f(n2, t4);
            }, c(t3);
          }
          function l(t3, e3, r3) {
            return l = u() ? Reflect.construct : function(t4, e4, r4) {
              var n2 = [null];
              n2.push.apply(n2, e4);
              var o2 = new (Function.bind.apply(t4, n2))();
              return r4 && f(o2, r4.prototype), o2;
            }, l.apply(null, arguments);
          }
          function u() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }
          function f(t3, e3) {
            return f = Object.setPrototypeOf || function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, f(t3, e3);
          }
          function p(t3) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, p(t3);
          }
          function s(t3, e3) {
            if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
          }
          function y(t3, e3) {
            for (var r3 = 0; r3 < e3.length; r3++) {
              var n2 = e3[r3];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
            }
          }
          function g(t3, e3, r3) {
            return e3 && y(t3.prototype, e3), r3 && y(t3, r3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
          }
          var d = function(t3, e3) {
            var r3 = function(r4) {
              function n2(e4) {
                s(this, n2), this._iterator = t3(e4);
              }
              return g(n2, [{ key: "next", value: function() {
                return e3(this._iterator);
              } }, { key: Symbol.iterator, value: function() {
                return this;
              } }]), n2;
            }();
            return Object.setPrototypeOf(r3.prototype, null), Object.freeze(r3.prototype), Object.freeze(r3), r3;
          };
          function b(t3, e3) {
            return Function.prototype.call.bind(t3.prototype.__lookupGetter__(e3));
          }
          function h(t3) {
            return Function.prototype.call.bind(t3);
          }
          var v = function(t3, e3) {
            Array.prototype.forEach.call(Reflect.ownKeys(t3), function(r3) {
              Reflect.getOwnPropertyDescriptor(e3, r3) || Reflect.defineProperty(e3, r3, Reflect.getOwnPropertyDescriptor(t3, r3));
            });
          }, m = function(t3, e3) {
            if (Symbol.iterator in t3.prototype) {
              var r3, n2 = new t3();
              Array.prototype.forEach.call(Reflect.ownKeys(t3.prototype), function(o2) {
                if (!Reflect.getOwnPropertyDescriptor(e3.prototype, o2)) {
                  var i2 = Reflect.getOwnPropertyDescriptor(t3.prototype, o2);
                  if ("function" == typeof i2.value && 0 === i2.value.length && Symbol.iterator in (Function.prototype.call.call(i2.value, n2) || {})) {
                    var a2 = h(i2.value);
                    null == r3 && (r3 = h(a2(n2).next));
                    var c2 = d(a2, r3);
                    i2.value = function() {
                      return new c2(this);
                    };
                  }
                  Reflect.defineProperty(e3.prototype, o2, i2);
                }
              });
            } else v(t3.prototype, e3.prototype);
            return v(t3, e3), Object.setPrototypeOf(e3.prototype, null), Object.freeze(e3.prototype), Object.freeze(e3), e3;
          }, S = Function.prototype.call.bind(String.prototype[Symbol.iterator]), P = Reflect.getPrototypeOf(S(""));
          t2.exports = { makeSafe: m, internalBinding: function(t3) {
            if ("config" === t3) return { hasIntl: false };
            throw new Error('unknown module: "'.concat(t3, '"'));
          }, Array, ArrayIsArray: Array.isArray, ArrayPrototypeFilter: Function.prototype.call.bind(Array.prototype.filter), ArrayPrototypeForEach: Function.prototype.call.bind(Array.prototype.forEach), ArrayPrototypeIncludes: Function.prototype.call.bind(Array.prototype.includes), ArrayPrototypeIndexOf: Function.prototype.call.bind(Array.prototype.indexOf), ArrayPrototypeJoin: Function.prototype.call.bind(Array.prototype.join), ArrayPrototypePop: Function.prototype.call.bind(Array.prototype.pop), ArrayPrototypePush: Function.prototype.call.bind(Array.prototype.push), ArrayPrototypePushApply: Function.apply.bind(Array.prototype.push), ArrayPrototypeSort: Function.prototype.call.bind(Array.prototype.sort), ArrayPrototypeSplice: Function.prototype.call.bind(Array.prototype.slice), ArrayPrototypeUnshift: Function.prototype.call.bind(Array.prototype.unshift), BigIntPrototypeValueOf: Function.prototype.call.bind(BigInt.prototype.valueOf), BooleanPrototypeValueOf: Function.prototype.call.bind(Boolean.prototype.valueOf), DatePrototypeGetTime: Function.prototype.call.bind(Date.prototype.getTime), DatePrototypeToISOString: Function.prototype.call.bind(Date.prototype.toISOString), DatePrototypeToString: Function.prototype.call.bind(Date.prototype.toString), ErrorCaptureStackTrace: function(t3) {
            var e3 = new Error().stack;
            t3.stack = e3.replace(/.*\n.*/, "$1");
          }, ErrorPrototypeToString: Function.prototype.call.bind(Error.prototype.toString), FunctionPrototypeCall: Function.prototype.call.bind(Function.prototype.call), FunctionPrototypeToString: Function.prototype.call.bind(Function.prototype.toString), globalThis: "undefined" == typeof globalThis ? r2.g : globalThis, JSONStringify: JSON.stringify, MapPrototypeGetSize: b(Map, "size"), MapPrototypeEntries: Function.prototype.call.bind(Map.prototype.entries), MathFloor: Math.floor, MathMax: Math.max, MathMin: Math.min, MathRound: Math.round, MathSqrt: Math.sqrt, MathTrunc: Math.trunc, Number, NumberIsFinite: Number.isFinite, NumberIsNaN: Number.isNaN, NumberParseFloat: Number.parseFloat, NumberParseInt: Number.parseInt, NumberPrototypeValueOf: Function.prototype.call.bind(Number.prototype.valueOf), Object, ObjectAssign: Object.assign, ObjectCreate: Object.create, ObjectDefineProperty: Object.defineProperty, ObjectGetOwnPropertyDescriptor: Object.getOwnPropertyDescriptor, ObjectGetOwnPropertyNames: Object.getOwnPropertyNames, ObjectGetOwnPropertySymbols: Object.getOwnPropertySymbols, ObjectGetPrototypeOf: Object.getPrototypeOf, ObjectIs: Object.is, ObjectKeys: Object.keys, ObjectPrototypeHasOwnProperty: Function.prototype.call.bind(Object.prototype.hasOwnProperty), ObjectPrototypePropertyIsEnumerable: Function.prototype.call.bind(Object.prototype.propertyIsEnumerable), ObjectSeal: Object.seal, ObjectSetPrototypeOf: Object.setPrototypeOf, ReflectApply: Reflect.apply, ReflectOwnKeys: Reflect.ownKeys, RegExp, RegExpPrototypeTest: Function.prototype.call.bind(RegExp.prototype.test), RegExpPrototypeToString: Function.prototype.call.bind(RegExp.prototype.toString), SafeStringIterator: d(S, Function.prototype.call.bind(P.next)), SafeMap: m(Map, function(t3) {
            o(r3, t3);
            var e3 = i(r3);
            function r3(t4) {
              return s(this, r3), e3.call(this, t4);
            }
            return g(r3);
          }(c(Map))), SafeSet: m(Set, function(t3) {
            o(r3, t3);
            var e3 = i(r3);
            function r3(t4) {
              return s(this, r3), e3.call(this, t4);
            }
            return g(r3);
          }(c(Set))), SetPrototypeGetSize: b(Set, "size"), SetPrototypeValues: Function.prototype.call.bind(Set.prototype.values), String, StringPrototypeCharCodeAt: Function.prototype.call.bind(String.prototype.charCodeAt), StringPrototypeCodePointAt: Function.prototype.call.bind(String.prototype.codePointAt), StringPrototypeEndsWith: Function.prototype.call.bind(String.prototype.endsWith), StringPrototypeIncludes: Function.prototype.call.bind(String.prototype.includes), StringPrototypeNormalize: Function.prototype.call.bind(String.prototype.normalize), StringPrototypePadEnd: Function.prototype.call.bind(String.prototype.padEnd), StringPrototypePadStart: Function.prototype.call.bind(String.prototype.padStart), StringPrototypeRepeat: Function.prototype.call.bind(String.prototype.repeat), StringPrototypeReplace: Function.prototype.call.bind(String.prototype.replace), StringPrototypeSlice: Function.prototype.call.bind(String.prototype.slice), StringPrototypeSplit: Function.prototype.call.bind(String.prototype.split), StringPrototypeToLowerCase: Function.prototype.call.bind(String.prototype.toLowerCase), StringPrototypeTrim: Function.prototype.call.bind(String.prototype.trim), StringPrototypeValueOf: Function.prototype.call.bind(String.prototype.valueOf), SymbolPrototypeToString: Function.prototype.call.bind(Symbol.prototype.toString), SymbolPrototypeValueOf: Function.prototype.call.bind(Symbol.prototype.valueOf), SymbolIterator: Symbol.iterator, SymbolFor: Symbol.for, SymbolToStringTag: Symbol.toStringTag, TypedArrayPrototypeGetLength: ("length", function(t3) {
            return t3.constructor.prototype.__lookupGetter__("length").call(t3);
          }), Uint8Array, uncurryThis: h };
        }, 906: (t2) => {
          function e2(t3, e3) {
            for (var r3 = 0; r3 < e3.length; r3++) {
              var n2 = e3[r3];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
            }
          }
          var r2 = /* @__PURE__ */ new WeakMap(), n = function() {
            function t3(e3, n3) {
              !function(t4, e4) {
                if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
              }(this, t3);
              var o2 = new Proxy(e3, n3);
              return r2.set(o2, [e3, n3]), o2;
            }
            var n2, o;
            return n2 = t3, o = [{ key: "getProxyDetails", value: function(t4) {
              var e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n3 = r2.get(t4);
              if (n3) return e3 ? n3 : n3[0];
            } }], null, o && e2(n2, o), Object.defineProperty(n2, "prototype", { writable: false }), t3;
          }();
          t2.exports = { getProxyDetails: n.getProxyDetails.bind(n), Proxy: n };
        }, 493: (t2, e2, r2) => {
          function n(t3) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, n(t3);
          }
          function o(t3, e3) {
            var r3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
            if (!r3) {
              if (Array.isArray(t3) || (r3 = a(t3)) || e3 && t3 && "number" == typeof t3.length) {
                r3 && (t3 = r3);
                var n2 = 0, o2 = function() {
                };
                return { s: o2, n: function() {
                  return n2 >= t3.length ? { done: true } : { done: false, value: t3[n2++] };
                }, e: function(t4) {
                  throw t4;
                }, f: o2 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i2, c2 = true, l2 = false;
            return { s: function() {
              r3 = r3.call(t3);
            }, n: function() {
              var t4 = r3.next();
              return c2 = t4.done, t4;
            }, e: function(t4) {
              l2 = true, i2 = t4;
            }, f: function() {
              try {
                c2 || null == r3.return || r3.return();
              } finally {
                if (l2) throw i2;
              }
            } };
          }
          function i(t3, e3) {
            return function(t4) {
              if (Array.isArray(t4)) return t4;
            }(t3) || function(t4, e4) {
              var r3 = null == t4 ? null : "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
              if (null != r3) {
                var n2, o2, i2 = [], a2 = true, c2 = false;
                try {
                  for (r3 = r3.call(t4); !(a2 = (n2 = r3.next()).done) && (i2.push(n2.value), !e4 || i2.length !== e4); a2 = true) ;
                } catch (t5) {
                  c2 = true, o2 = t5;
                } finally {
                  try {
                    a2 || null == r3.return || r3.return();
                  } finally {
                    if (c2) throw o2;
                  }
                }
                return i2;
              }
            }(t3, e3) || a(t3, e3) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function a(t3, e3) {
            if (t3) {
              if ("string" == typeof t3) return c(t3, e3);
              var r3 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === r3 && t3.constructor && (r3 = t3.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t3) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? c(t3, e3) : void 0;
            }
          }
          function c(t3, e3) {
            (null == e3 || e3 > t3.length) && (e3 = t3.length);
            for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++) n2[r3] = t3[r3];
            return n2;
          }
          var l = r2(906), u = Symbol("kPending"), f = Symbol("kRejected");
          t2.exports = { getOwnNonIndexProperties: function(t3) {
            for (var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, r3 = Object.getOwnPropertyDescriptors(t3), n2 = [], a2 = 0, c2 = Object.entries(r3); a2 < c2.length; a2++) {
              var l2 = i(c2[a2], 2), u2 = l2[0], f2 = l2[1];
              if (!/^(0|[1-9][0-9]*)$/.test(u2) || parseInt(u2, 10) >= Math.pow(2, 32) - 1) {
                if (2 === e3 && !f2.enumerable) continue;
                n2.push(u2);
              }
            }
            var p, s = o(Object.getOwnPropertySymbols(t3));
            try {
              for (s.s(); !(p = s.n()).done; ) {
                var y = p.value, g = Object.getOwnPropertyDescriptor(t3, y);
                (2 !== e3 || g.enumerable) && n2.push(y);
              }
            } catch (t4) {
              s.e(t4);
            } finally {
              s.f();
            }
            return n2;
          }, getPromiseDetails: function() {
            return [u, void 0];
          }, getProxyDetails: l.getProxyDetails, Proxy: l.Proxy, kPending: u, kRejected: f, previewEntries: function(t3) {
            return [[], false];
          }, getConstructorName: function(t3) {
            if (!t3 || "object" !== n(t3)) throw new Error("Invalid object");
            if (t3.constructor && t3.constructor.name) return t3.constructor.name;
            var e3 = Object.prototype.toString.call(t3).match(/^\[object ([^\]]+)\]/);
            return e3 ? e3[1] : "Object";
          }, getExternalValue: function() {
            return BigInt(0);
          }, propertyFilter: { ALL_PROPERTIES: 0, ONLY_ENUMERABLE: 2 } };
        } }, e = {};
        function r(n) {
          var o = e[n];
          if (void 0 !== o) return o.exports;
          var i = e[n] = { exports: {} };
          return t[n](i, i.exports, r), i.exports;
        }
        return r.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t2) {
            if ("object" == typeof window) return window;
          }
        }(), r(618);
      })();
    });
  }
});

// node_modules/@fastly/http-compute-js/dist/http-compute-js/http-incoming.js
import { Readable } from "stream";

// node_modules/node-inspect-extracted/index.mjs
var import_inspect = __toESM(require_inspect(), 1);
var node_inspect_extracted_default = import_inspect.default;
var inspect = import_inspect.default.inspect;
var format = import_inspect.default.format;
var formatWithOptions = import_inspect.default.formatWithOptions;
var getStringWidth = import_inspect.default.getStringWidth;
var inspectDefaultOptions = import_inspect.default.inspectDefaultOptions;
var stripVTControlCharacters = import_inspect.default.stripVTControlCharacters;
var stylizeWithColor = import_inspect.default.stylizeWithColor;
var stylizeWithHTML = import_inspect.default.stylizeWithHTML;
var Proxy2 = import_inspect.default.Proxy;

// node_modules/@fastly/http-compute-js/dist/utils/errors.js
var classRegExp = /^([A-Z][a-z0-9]*)+$/;
var kTypes = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
];
function determineSpecificType(value) {
  var _a4;
  if (value == null) {
    return "" + value;
  }
  if (typeof value === "function" && value.name) {
    return `function ${value.name}`;
  }
  if (typeof value === "object") {
    if ((_a4 = value.constructor) === null || _a4 === void 0 ? void 0 : _a4.name) {
      return `an instance of ${value.constructor.name}`;
    }
    return `${node_inspect_extracted_default.inspect(value, { depth: -1 })}`;
  }
  let inspected = node_inspect_extracted_default.inspect(value, { colors: false });
  if (inspected.length > 28) {
    inspected = `${inspected.slice(0, 25)}...`;
  }
  return `type ${typeof value} (${inspected})`;
}
var ERR_HTTP_HEADERS_SENT = class extends Error {
  constructor(arg) {
    super(`Cannot ${arg} headers after they are sent to the client`);
  }
};
var ERR_INVALID_ARG_VALUE = class extends TypeError {
  constructor(name, value, reason = "is invalid") {
    let inspected = node_inspect_extracted_default.inspect(value);
    if (inspected.length > 128) {
      inspected = `${inspected.slice(0, 128)}...`;
    }
    const type = name.includes(".") ? "property" : "argument";
    super(`The ${type} '${name}' ${reason}. Received ${inspected}`);
  }
};
var ERR_INVALID_CHAR = class extends TypeError {
  constructor(name, field) {
    let msg = `Invalid character in ${name}`;
    if (field !== void 0) {
      msg += ` ["${field}"]`;
    }
    super(msg);
  }
};
var ERR_HTTP_INVALID_HEADER_VALUE = class extends TypeError {
  constructor(value, name) {
    super(`Invalid value "${value}" for header "${name}"`);
  }
};
var ERR_HTTP_INVALID_STATUS_CODE = class extends RangeError {
  constructor(originalStatusCode) {
    super(`Invalid status code: ${originalStatusCode}`);
    this.originalStatusCode = originalStatusCode;
  }
};
var ERR_HTTP_TRAILER_INVALID = class extends Error {
  constructor() {
    super(`Trailers are invalid with this transfer encoding`);
  }
};
var ERR_INVALID_ARG_TYPE = class extends TypeError {
  constructor(name, expected, actual) {
    if (!Array.isArray(expected)) {
      expected = [expected];
    }
    let msg = "The ";
    if (name.endsWith(" argument")) {
      msg += `${name} `;
    } else {
      const type = name.includes(".") ? "property" : "argument";
      msg += `"${name}" ${type} `;
    }
    msg += "must be ";
    const types = [];
    const instances = [];
    const other = [];
    for (const value of expected) {
      if (kTypes.includes(value)) {
        types.push(value.toLowerCase());
      } else if (classRegExp.exec(value) !== null) {
        instances.push(value);
      } else {
        other.push(value);
      }
    }
    if (instances.length > 0) {
      const pos = types.indexOf("object");
      if (pos !== -1) {
        types.splice(pos, 1);
        instances.push("Object");
      }
    }
    if (types.length > 0) {
      if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(", ")}, or ${last}`;
      } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}`;
      } else {
        msg += `of type ${types[0]}`;
      }
      if (instances.length > 0 || other.length > 0)
        msg += " or ";
    }
    if (instances.length > 0) {
      if (instances.length > 2) {
        const last = instances.pop();
        msg += `an instance of ${instances.join(", ")}, or ${last}`;
      } else {
        msg += `an instance of ${instances[0]}`;
        if (instances.length === 2) {
          msg += ` or ${instances[1]}`;
        }
      }
      if (other.length > 0)
        msg += " or ";
    }
    if (other.length > 0) {
      if (other.length > 2) {
        const last = other.pop();
        msg += `one of ${other.join(", ")}, or ${last}`;
      } else if (other.length === 2) {
        msg += `one of ${other[0]} or ${other[1]}`;
      } else {
        if (other[0].toLowerCase() !== other[0])
          msg += "an ";
        msg += `${other[0]}`;
      }
    }
    msg += `. Received ${determineSpecificType(actual)}`;
    super(msg);
  }
};
var ERR_INVALID_HTTP_TOKEN = class extends TypeError {
  constructor(name, field) {
    super(`${name} must be a valid HTTP token ["${field}"]`);
  }
};
var ERR_METHOD_NOT_IMPLEMENTED = class extends Error {
  constructor(methodName) {
    super(`The ${methodName} method is not implemented`);
  }
};
var ERR_STREAM_ALREADY_FINISHED = class extends Error {
  constructor(methodName) {
    super(`Cannot call ${methodName} after a stream was finished`);
  }
};
var ERR_STREAM_CANNOT_PIPE = class extends Error {
  constructor() {
    super(`Cannot pipe, not readable`);
  }
};
var ERR_STREAM_DESTROYED = class extends Error {
  constructor(methodName) {
    super(`Cannot call ${methodName} after a stream was destroyed`);
  }
};
var ERR_STREAM_NULL_VALUES = class extends TypeError {
  constructor() {
    super(`May not write null values to stream`);
  }
};
var ERR_STREAM_WRITE_AFTER_END = class extends Error {
  constructor() {
    super(`write after end`);
  }
};

// node_modules/@fastly/http-compute-js/dist/http-compute-js/http-incoming.js
var _a;
var _b;
var _c;
var _d;
var _e;
var _f;
var kHeaders = Symbol("kHeaders");
var kHeadersDistinct = Symbol("kHeadersDistinct");
var kHeadersCount = Symbol("kHeadersCount");
var kTrailers = Symbol("kTrailers");
var kTrailersDistinct = Symbol("kTrailersDistinct");
var kTrailersCount = Symbol("kTrailersCount");
var ComputeJsIncomingMessage = class extends Readable {
  constructor() {
    const streamOptions = {};
    super(streamOptions);
    this.complete = false;
    this[_a] = null;
    this[_b] = null;
    this[_c] = 0;
    this.rawHeaders = [];
    this[_d] = null;
    this[_e] = null;
    this[_f] = 0;
    this.rawTrailers = [];
    this.aborted = false;
    this.upgrade = false;
    this.url = "";
    this._stream = null;
    this._readableState.readingMore = true;
    this._consuming = false;
    this._dumped = false;
  }
  get socket() {
    return null;
  }
  set socket(_val) {
    throw new ERR_METHOD_NOT_IMPLEMENTED("socket");
  }
  get connection() {
    return null;
  }
  set connection(_socket) {
    console.error("No support for IncomingMessage.connection");
  }
  get headers() {
    if (!this[kHeaders]) {
      this[kHeaders] = {};
      const src = this.rawHeaders;
      const dst = this[kHeaders];
      for (let n = 0; n < this[kHeadersCount]; n += 2) {
        this._addHeaderLine(src[n], src[n + 1], dst);
      }
    }
    return this[kHeaders];
  }
  set headers(val) {
    this[kHeaders] = val;
  }
  get headersDistinct() {
    if (!this[kHeadersDistinct]) {
      this[kHeadersDistinct] = {};
      const src = this.rawHeaders;
      const dst = this[kHeadersDistinct];
      for (let n = 0; n < this[kHeadersCount]; n += 2) {
        this._addHeaderLineDistinct(src[n], src[n + 1], dst);
      }
    }
    return this[kHeadersDistinct];
  }
  set headersDistinct(val) {
    this[kHeadersDistinct] = val;
  }
  get trailers() {
    if (!this[kTrailers]) {
      this[kTrailers] = {};
      const src = this.rawTrailers;
      const dst = this[kTrailers];
      for (let n = 0; n < this[kTrailersCount]; n += 2) {
        this._addHeaderLine(src[n], src[n + 1], dst);
      }
    }
    return this[kTrailers];
  }
  set trailers(val) {
    this[kTrailers] = val;
  }
  get trailersDistinct() {
    if (!this[kTrailersDistinct]) {
      this[kTrailersDistinct] = {};
      const src = this.rawTrailers;
      const dst = this[kTrailersDistinct];
      for (let n = 0; n < this[kTrailersCount]; n += 2) {
        this._addHeaderLineDistinct(src[n], src[n + 1], dst);
      }
    }
    return this[kTrailersDistinct];
  }
  set trailersDistinct(val) {
    this[kTrailersDistinct] = val;
  }
  setTimeout(msecs, callback) {
    return this;
  }
  async _read(n) {
    if (!this._consuming) {
      this._readableState.readingMore = false;
      this._consuming = true;
    }
    if (this._stream == null) {
      this.complete = true;
      this.push(null);
      return;
    }
    const reader = this._stream.getReader();
    try {
      const data = await reader.read();
      if (data.done) {
        this.complete = true;
        this.push(null);
      } else {
        this.push(data.value);
      }
    } catch (e) {
      this.destroy(e);
    } finally {
      reader.releaseLock();
    }
  }
  _destroy(err, cb) {
    if (!this.readableEnded || !this.complete) {
      this.aborted = true;
      this.emit("aborted");
    }
    process.nextTick(onError, this, err, cb);
  }
  _addHeaderLines(headers, n) {
    if (headers && headers.length) {
      let dest;
      if (this.complete) {
        this.rawTrailers = headers;
        this[kTrailersCount] = n;
        dest = this[kTrailers];
      } else {
        this.rawHeaders = headers;
        this[kHeadersCount] = n;
        dest = this[kHeaders];
      }
      if (dest) {
        for (let i = 0; i < n; i += 2) {
          this._addHeaderLine(headers[i], headers[i + 1], dest);
        }
      }
    }
  }
  _addHeaderLine(field, value, dest) {
    field = matchKnownFields(field);
    const flag = field.charCodeAt(0);
    if (flag === 0 || flag === 2) {
      field = field.slice(1);
      if (typeof dest[field] === "string") {
        dest[field] += (flag === 0 ? ", " : "; ") + value;
      } else {
        dest[field] = value;
      }
    } else if (flag === 1) {
      if (dest["set-cookie"] !== void 0) {
        dest["set-cookie"].push(value);
      } else {
        dest["set-cookie"] = [value];
      }
    } else if (dest[field] === void 0) {
      dest[field] = value;
    }
  }
  _addHeaderLineDistinct(field, value, dest) {
    field = field.toLowerCase();
    if (!dest[field]) {
      dest[field] = [value];
    } else {
      dest[field].push(value);
    }
  }
};
_a = kHeaders, _b = kHeadersDistinct, _c = kHeadersCount, _d = kTrailers, _e = kTrailersDistinct, _f = kTrailersCount;
function matchKnownFields(field, lowercased = false) {
  switch (field.length) {
    case 3:
      if (field === "Age" || field === "age")
        return "age";
      break;
    case 4:
      if (field === "Host" || field === "host")
        return "host";
      if (field === "From" || field === "from")
        return "from";
      if (field === "ETag" || field === "etag")
        return "etag";
      if (field === "Date" || field === "date")
        return "\0date";
      if (field === "Vary" || field === "vary")
        return "\0vary";
      break;
    case 6:
      if (field === "Server" || field === "server")
        return "server";
      if (field === "Cookie" || field === "cookie")
        return "cookie";
      if (field === "Origin" || field === "origin")
        return "\0origin";
      if (field === "Expect" || field === "expect")
        return "\0expect";
      if (field === "Accept" || field === "accept")
        return "\0accept";
      break;
    case 7:
      if (field === "Referer" || field === "referer")
        return "referer";
      if (field === "Expires" || field === "expires")
        return "expires";
      if (field === "Upgrade" || field === "upgrade")
        return "\0upgrade";
      break;
    case 8:
      if (field === "Location" || field === "location")
        return "location";
      if (field === "If-Match" || field === "if-match")
        return "\0if-match";
      break;
    case 10:
      if (field === "User-Agent" || field === "user-agent")
        return "user-agent";
      if (field === "Set-Cookie" || field === "set-cookie")
        return "";
      if (field === "Connection" || field === "connection")
        return "\0connection";
      break;
    case 11:
      if (field === "Retry-After" || field === "retry-after")
        return "retry-after";
      break;
    case 12:
      if (field === "Content-Type" || field === "content-type")
        return "content-type";
      if (field === "Max-Forwards" || field === "max-forwards")
        return "max-forwards";
      break;
    case 13:
      if (field === "Authorization" || field === "authorization")
        return "authorization";
      if (field === "Last-Modified" || field === "last-modified")
        return "last-modified";
      if (field === "Cache-Control" || field === "cache-control")
        return "\0cache-control";
      if (field === "If-None-Match" || field === "if-none-match")
        return "\0if-none-match";
      break;
    case 14:
      if (field === "Content-Length" || field === "content-length")
        return "content-length";
      break;
    case 15:
      if (field === "Accept-Encoding" || field === "accept-encoding")
        return "\0accept-encoding";
      if (field === "Accept-Language" || field === "accept-language")
        return "\0accept-language";
      if (field === "X-Forwarded-For" || field === "x-forwarded-for")
        return "\0x-forwarded-for";
      break;
    case 16:
      if (field === "Content-Encoding" || field === "content-encoding")
        return "\0content-encoding";
      if (field === "X-Forwarded-Host" || field === "x-forwarded-host")
        return "\0x-forwarded-host";
      break;
    case 17:
      if (field === "If-Modified-Since" || field === "if-modified-since")
        return "if-modified-since";
      if (field === "Transfer-Encoding" || field === "transfer-encoding")
        return "\0transfer-encoding";
      if (field === "X-Forwarded-Proto" || field === "x-forwarded-proto")
        return "\0x-forwarded-proto";
      break;
    case 19:
      if (field === "Proxy-Authorization" || field === "proxy-authorization")
        return "proxy-authorization";
      if (field === "If-Unmodified-Since" || field === "if-unmodified-since")
        return "if-unmodified-since";
      break;
  }
  if (lowercased) {
    return "\0" + field;
  }
  return matchKnownFields(field.toLowerCase(), true);
}
function onError(self, error, cb) {
  if (self.listenerCount("error") === 0) {
    cb();
  } else {
    cb(error);
  }
}

// node_modules/@fastly/http-compute-js/dist/http-compute-js/http-outgoing.js
import { Buffer } from "buffer";
import { Writable } from "stream";

// node_modules/@fastly/http-compute-js/dist/utils/types.js
function validateString(value, name) {
  if (typeof value !== "string")
    throw new ERR_INVALID_ARG_TYPE(name, "string", value);
}
function isUint8Array(value) {
  return value != null && value[Symbol.toStringTag] === "Uint8Array";
}

// node_modules/@fastly/http-compute-js/dist/http-compute-js/internal-http.js
var kNeedDrain = Symbol("kNeedDrain");
var kOutHeaders = Symbol("kOutHeaders");
function utcDate() {
  return (/* @__PURE__ */ new Date()).toUTCString();
}

// node_modules/@fastly/http-compute-js/dist/http-compute-js/internal-streams-state.js
function getDefaultHighWaterMark(objectMode) {
  return objectMode ? 16 : 16 * 1024;
}

// node_modules/@fastly/http-compute-js/dist/http-compute-js/http-common.js
var tokenRegExp = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/;
function checkIsHttpToken(val) {
  return tokenRegExp.exec(val) !== null;
}
var headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function checkInvalidHeaderChar(val) {
  return headerCharRegex.exec(val) !== null;
}
var chunkExpression = /(?:^|\W)chunked(?:$|\W)/i;

// node_modules/@fastly/http-compute-js/dist/http-compute-js/http-outgoing.js
var _a2;
var kCorked = Symbol("corked");
var kUniqueHeaders = Symbol("kUniqueHeaders");
function debug(format2) {
}
var nop = () => {
};
var RE_CONN_CLOSE = /(?:^|\W)close(?:$|\W)/i;
var HIGH_WATER_MARK = getDefaultHighWaterMark();
function validateHeaderName(name) {
  if (typeof name !== "string" || !name || !checkIsHttpToken(name)) {
    throw new ERR_INVALID_HTTP_TOKEN("Header name", name);
  }
}
function validateHeaderValue(name, value) {
  if (value === void 0) {
    throw new ERR_HTTP_INVALID_HEADER_VALUE(String(value), name);
  }
  if (checkInvalidHeaderChar(String(value))) {
    debug(`Header "${name}" contains invalid characters`);
    throw new ERR_INVALID_CHAR("header content", name);
  }
}
function isCookieField(s) {
  return s.length === 6 && s.toLowerCase() === "cookie";
}
var WrittenDataBuffer = class {
  constructor(params = {}) {
    this[_a2] = 0;
    this.entries = [];
    this.onWrite = params.onWrite;
  }
  write(data, encoding, callback) {
    this.entries.push({
      data,
      length: data.length,
      encoding,
      callback,
      written: false
    });
    this._flush();
    return true;
  }
  cork() {
    this[kCorked]++;
  }
  uncork() {
    this[kCorked]--;
    this._flush();
  }
  _flush() {
    if (this[kCorked] <= 0) {
      for (const [index, entry] of this.entries.entries()) {
        if (!entry.written) {
          entry.written = true;
          if (this.onWrite != null) {
            this.onWrite(index, entry);
          }
          if (entry.callback != null) {
            entry.callback.call(void 0);
          }
        }
      }
    }
  }
  get writableLength() {
    return this.entries.reduce((acc, entry) => {
      return acc + (entry.written && entry.length ? entry.length : 0);
    }, 0);
  }
  get writableHighWaterMark() {
    return HIGH_WATER_MARK;
  }
  get writableCorked() {
    return this[kCorked];
  }
};
_a2 = kCorked;
var ComputeJsOutgoingMessage = class extends Writable {
  constructor(req) {
    super();
    this.outputData = [];
    this.outputSize = 0;
    this.writtenHeaderBytes = 0;
    this.chunkedEncoding = false;
    this.finished = false;
    this.sendDate = false;
    this.shouldKeepAlive = true;
    this.useChunkedEncodingByDefault = false;
    this._writtenDataBuffer = new WrittenDataBuffer({ onWrite: this._onDataWritten.bind(this) });
    this.req = req;
    this._last = false;
    this.maxRequestsOnConnectionReached = false;
    this._defaultKeepAlive = true;
    this._removedConnection = false;
    this._removedContLen = false;
    this._removedTE = false;
    this._contentLength = null;
    this._hasBody = true;
    this._trailer = "";
    this[kNeedDrain] = false;
    this._headerSent = false;
    this[kCorked] = 0;
    this._closed = false;
    this._header = null;
    this[kOutHeaders] = null;
    this._keepAliveTimeout = 0;
    this._onPendingData = nop;
    this[kUniqueHeaders] = null;
  }
  get _headers() {
    console.warn("DEP0066: OutgoingMessage.prototype._headers is deprecated");
    return this.getHeaders();
  }
  set _headers(val) {
    console.warn("DEP0066: OutgoingMessage.prototype._headers is deprecated");
    if (val == null) {
      this[kOutHeaders] = null;
    } else if (typeof val === "object") {
      const headers = this[kOutHeaders] = /* @__PURE__ */ Object.create(null);
      const keys = Object.keys(val);
      for (let i = 0; i < keys.length; ++i) {
        const name = keys[i];
        headers[name.toLowerCase()] = [name, val[name]];
      }
    }
  }
  get connection() {
    return null;
  }
  set connection(_socket) {
    console.error("No support for OutgoingMessage.connection");
  }
  get socket() {
    return null;
  }
  set socket(_socket) {
    console.error("No support for OutgoingMessage.socket");
  }
  get _headerNames() {
    console.warn("DEP0066: OutgoingMessage.prototype._headerNames is deprecated");
    const headers = this[kOutHeaders];
    if (headers !== null) {
      const out = /* @__PURE__ */ Object.create(null);
      const keys = Object.keys(headers);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const val = headers[key][0];
        out[key] = val;
      }
      return out;
    }
    return null;
  }
  set _headerNames(val) {
    console.warn("DEP0066: OutgoingMessage.prototype._headerNames is deprecated");
    if (typeof val === "object" && val !== null) {
      const headers = this[kOutHeaders];
      if (!headers)
        return;
      const keys = Object.keys(val);
      for (let i = 0; i < keys.length; ++i) {
        const header = headers[keys[i]];
        if (header)
          header[0] = val[keys[i]];
      }
    }
  }
  _renderHeaders() {
    if (this._header) {
      throw new ERR_HTTP_HEADERS_SENT("render");
    }
    const headersMap = this[kOutHeaders];
    const headers = {};
    if (headersMap !== null) {
      const keys = Object.keys(headersMap);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        headers[headersMap[key][0]] = headersMap[key][1];
      }
    }
    return headers;
  }
  cork() {
    if (this._writtenDataBuffer != null) {
      this._writtenDataBuffer.cork();
    } else {
      this[kCorked]++;
    }
  }
  uncork() {
    if (this._writtenDataBuffer != null) {
      this._writtenDataBuffer.uncork();
    } else {
      this[kCorked]--;
    }
  }
  setTimeout(msecs, callback) {
    return this;
  }
  destroy(error) {
    if (this.destroyed) {
      return this;
    }
    this.destroyed = true;
    return this;
  }
  _send(data, encoding, callback) {
    var _b2;
    if (!this._headerSent) {
      const header = this._header;
      if (typeof data === "string" && (encoding === "utf8" || encoding === "latin1" || !encoding)) {
        data = header + data;
      } else {
        this.outputData.unshift({
          data: header,
          encoding: "latin1",
          callback: void 0
        });
        this.outputSize += header.length;
        this._onPendingData(header.length);
      }
      this.writtenHeaderBytes = header.length;
      const [statusLine, ...headerLines] = this._header.split("\r\n");
      const STATUS_LINE_REGEXP = /^HTTP\/1\.1 (?<statusCode>\d+) (?<statusMessage>.*)$/;
      const statusLineResult = STATUS_LINE_REGEXP.exec(statusLine);
      if (statusLineResult == null) {
        throw new Error("Unexpected! Status line was " + statusLine);
      }
      const { statusCode: statusCodeText, statusMessage } = (_b2 = statusLineResult.groups) !== null && _b2 !== void 0 ? _b2 : {};
      const statusCode = parseInt(statusCodeText, 10);
      const headers = [];
      for (const headerLine of headerLines) {
        if (headerLine !== "") {
          const pos = headerLine.indexOf(": ");
          const k = headerLine.slice(0, pos);
          const v = headerLine.slice(pos + 2);
          headers.push([k, v]);
        }
      }
      this._headerSent = true;
      const event = {
        statusCode,
        statusMessage,
        headers
      };
      this.emit("_headersSent", event);
    }
    return this._writeRaw(data, encoding, callback);
  }
  _onDataWritten(index, entry) {
    const event = { index, entry };
    this.emit("_dataWritten", event);
  }
  _writeRaw(data, encoding, callback) {
    let e;
    if (typeof encoding === "function") {
      callback = encoding;
      e = void 0;
    } else {
      e = encoding;
    }
    if (this._writtenDataBuffer != null) {
      if (this.outputData.length) {
        this._flushOutput(this._writtenDataBuffer);
      }
      return this._writtenDataBuffer.write(data, e, callback);
    }
    this.outputData.push({ data, encoding: e, callback });
    this.outputSize += data.length;
    this._onPendingData(data.length);
    return this.outputSize < HIGH_WATER_MARK;
  }
  _storeHeader(firstLine, headers) {
    const state = {
      connection: false,
      contLen: false,
      te: false,
      date: false,
      expect: false,
      trailer: false,
      header: firstLine
    };
    if (headers) {
      if (headers === this[kOutHeaders]) {
        for (const key in headers) {
          const entry = headers[key];
          processHeader(this, state, entry[0], entry[1], false);
        }
      } else if (Array.isArray(headers)) {
        if (headers.length && Array.isArray(headers[0])) {
          for (let i = 0; i < headers.length; i++) {
            const entry = headers[i];
            processHeader(this, state, entry[0], entry[1], true);
          }
        } else {
          if (headers.length % 2 !== 0) {
            throw new ERR_INVALID_ARG_VALUE("headers", headers);
          }
          for (let n = 0; n < headers.length; n += 2) {
            processHeader(this, state, headers[n], headers[n + 1], true);
          }
        }
      } else {
        for (const key in headers) {
          if (headers.hasOwnProperty(key)) {
            const _headers = headers;
            processHeader(this, state, key, _headers[key], true);
          }
        }
      }
    }
    let { header } = state;
    if (this.sendDate && !state.date) {
      header += "Date: " + utcDate() + "\r\n";
    }
    if (this.chunkedEncoding && (this.statusCode === 204 || this.statusCode === 304)) {
      debug(this.statusCode + " response should not use chunked encoding, closing connection.");
      this.chunkedEncoding = false;
      this.shouldKeepAlive = false;
    }
    if (this._removedConnection) {
      this._last = true;
      this.shouldKeepAlive = false;
    } else if (!state.connection) {
      const shouldSendKeepAlive = this.shouldKeepAlive && (state.contLen || this.useChunkedEncodingByDefault);
      if (shouldSendKeepAlive && this.maxRequestsOnConnectionReached) {
        header += "Connection: close\r\n";
      } else if (shouldSendKeepAlive) {
        header += "Connection: keep-alive\r\n";
        if (this._keepAliveTimeout && this._defaultKeepAlive) {
          const timeoutSeconds = Math.floor(this._keepAliveTimeout / 1e3);
          header += `Keep-Alive: timeout=${timeoutSeconds}\r
`;
        }
      } else {
        this._last = true;
        header += "Connection: close\r\n";
      }
    }
    if (!state.contLen && !state.te) {
      if (!this._hasBody) {
        this.chunkedEncoding = false;
      } else if (!this.useChunkedEncodingByDefault) {
        this._last = true;
      } else if (!state.trailer && !this._removedContLen && typeof this._contentLength === "number") {
        header += "Content-Length: " + this._contentLength + "\r\n";
      } else if (!this._removedTE) {
        header += "Transfer-Encoding: chunked\r\n";
        this.chunkedEncoding = true;
      } else {
        debug("Both Content-Length and Transfer-Encoding are removed");
      }
    }
    if (this.chunkedEncoding !== true && state.trailer) {
      throw new ERR_HTTP_TRAILER_INVALID();
    }
    this._header = header + "\r\n";
    this._headerSent = false;
    if (state.expect) {
      this._send("");
    }
  }
  setHeader(name, value) {
    if (this._header) {
      throw new ERR_HTTP_HEADERS_SENT("set");
    }
    validateHeaderName(name);
    validateHeaderValue(name, value);
    let headers = this[kOutHeaders];
    if (headers === null) {
      this[kOutHeaders] = headers = /* @__PURE__ */ Object.create(null);
    }
    headers[name.toLowerCase()] = [name, value];
    return this;
  }
  appendHeader(name, value) {
    if (this._header) {
      throw new ERR_HTTP_HEADERS_SENT("append");
    }
    validateHeaderName(name);
    validateHeaderValue(name, value);
    const field = name.toLowerCase();
    const headers = this[kOutHeaders];
    if (headers === null || !headers[field]) {
      return this.setHeader(name, value);
    }
    if (!Array.isArray(headers[field][1])) {
      headers[field][1] = [headers[field][1]];
    }
    const existingValues = headers[field][1];
    if (Array.isArray(value)) {
      for (let i = 0, length = value.length; i < length; i++) {
        existingValues.push(value[i]);
      }
    } else {
      existingValues.push(value);
    }
    return this;
  }
  getHeader(name) {
    validateString(name, "name");
    const headers = this[kOutHeaders];
    if (headers === null) {
      return void 0;
    }
    const entry = headers[name.toLowerCase()];
    return entry && entry[1];
  }
  getHeaderNames() {
    return this[kOutHeaders] !== null ? Object.keys(this[kOutHeaders]) : [];
  }
  getRawHeaderNames() {
    const headersMap = this[kOutHeaders];
    if (headersMap === null)
      return [];
    const values = Object.values(headersMap);
    const headers = Array(values.length);
    for (let i = 0, l = values.length; i < l; i++) {
      headers[i] = values[i][0];
    }
    return headers;
  }
  getHeaders() {
    const headers = this[kOutHeaders];
    const ret = /* @__PURE__ */ Object.create(null);
    if (headers) {
      const keys = Object.keys(headers);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const val = headers[key][1];
        ret[key] = val;
      }
    }
    return ret;
  }
  hasHeader(name) {
    validateString(name, "name");
    return this[kOutHeaders] !== null && !!this[kOutHeaders][name.toLowerCase()];
  }
  removeHeader(name) {
    validateString(name, "name");
    if (this._header) {
      throw new ERR_HTTP_HEADERS_SENT("remove");
    }
    const key = name.toLowerCase();
    switch (key) {
      case "connection":
        this._removedConnection = true;
        break;
      case "content-length":
        this._removedContLen = true;
        break;
      case "transfer-encoding":
        this._removedTE = true;
        break;
      case "date":
        this.sendDate = false;
        break;
    }
    if (this[kOutHeaders] !== null) {
      delete this[kOutHeaders][key];
    }
  }
  _implicitHeader() {
    throw new ERR_METHOD_NOT_IMPLEMENTED("_implicitHeader()");
  }
  get headersSent() {
    return !!this._header;
  }
  write(chunk, encoding, callback) {
    let e;
    if (typeof encoding === "function") {
      callback = encoding;
      e = void 0;
    } else {
      e = encoding;
    }
    const ret = write_(this, chunk, e, callback, false);
    if (!ret) {
      this[kNeedDrain] = true;
    }
    return ret;
  }
  addTrailers(headers) {
    this._trailer = "";
    const isArray = Array.isArray(headers);
    const keys = isArray ? [...headers.keys()] : Object.keys(headers);
    for (let i = 0, l = keys.length; i < l; i++) {
      let field, value;
      if (isArray) {
        const _headers = headers;
        const key = keys[i];
        field = _headers[key][0];
        value = _headers[key][1];
      } else {
        const _headers = headers;
        const key = keys[i];
        field = key;
        value = _headers[key];
      }
      if (!field || !checkIsHttpToken(field)) {
        throw new ERR_INVALID_HTTP_TOKEN("Trailer name", field);
      }
      if (Array.isArray(value) && value.length > 1 && (!this[kUniqueHeaders] || !this[kUniqueHeaders].has(field.toLowerCase()))) {
        for (let j = 0, l2 = value.length; j < l2; j++) {
          if (checkInvalidHeaderChar(value[j])) {
            debug(`Trailer "${field}"[${j}] contains invalid characters`);
            throw new ERR_INVALID_CHAR("trailer content", field);
          }
          this._trailer += field + ": " + value[j] + "\r\n";
        }
      } else {
        if (Array.isArray(value)) {
          value = value.join("; ");
        } else {
          value = String(value);
        }
        if (checkInvalidHeaderChar(value)) {
          debug(`Trailer "${field}" contains invalid characters`);
          throw new ERR_INVALID_CHAR("trailer content", field);
        }
        this._trailer += field + ": " + value + "\r\n";
      }
    }
  }
  end(chunk, encoding, callback) {
    let ch;
    let e;
    if (typeof chunk === "function") {
      callback = chunk;
      ch = void 0;
      e = void 0;
    } else if (typeof encoding === "function") {
      callback = encoding;
      ch = chunk;
      e = void 0;
    } else {
      ch = chunk;
      e = encoding;
    }
    if (ch) {
      if (this.finished) {
        onError2(this, new ERR_STREAM_WRITE_AFTER_END(), typeof callback !== "function" ? nop : callback);
        return this;
      }
      if (this._writtenDataBuffer != null) {
        this._writtenDataBuffer.cork();
      }
      write_(this, ch, e, void 0, true);
    } else if (this.finished) {
      if (typeof callback === "function") {
        if (!this.writableFinished) {
          this.on("finish", callback);
        } else {
          callback(new ERR_STREAM_ALREADY_FINISHED("end"));
        }
      }
      return this;
    } else if (!this._header) {
      if (this._writtenDataBuffer != null) {
        this._writtenDataBuffer.cork();
      }
      this._contentLength = 0;
      this._implicitHeader();
    }
    if (typeof callback === "function")
      this.once("finish", callback);
    const finish = onFinish.bind(void 0, this);
    if (this._hasBody && this.chunkedEncoding) {
      this._send("0\r\n" + this._trailer + "\r\n", "latin1", finish);
    } else if (!this._headerSent || this.writableLength || ch) {
      this._send("", "latin1", finish);
    } else {
      process.nextTick(finish);
    }
    if (this._writtenDataBuffer != null) {
      this._writtenDataBuffer.uncork();
    }
    this[kCorked] = 0;
    this.finished = true;
    debug("outgoing message end.");
    if (this.outputData.length === 0 && this._writtenDataBuffer != null) {
      this._finish();
    }
    return this;
  }
  _finish() {
    this.emit("prefinish");
  }
  _flushOutput(dataBuffer) {
    while (this[kCorked]) {
      this[kCorked]--;
      dataBuffer.cork();
    }
    const outputLength = this.outputData.length;
    if (outputLength <= 0)
      return void 0;
    const outputData = this.outputData;
    dataBuffer.cork();
    let ret;
    for (let i = 0; i < outputLength; i++) {
      const { data, encoding, callback } = outputData[i];
      ret = dataBuffer.write(data, encoding, callback);
    }
    dataBuffer.uncork();
    this.outputData = [];
    this._onPendingData(-this.outputSize);
    this.outputSize = 0;
    return ret;
  }
  flushHeaders() {
    if (!this._header) {
      this._implicitHeader();
    }
    this._send("");
  }
  pipe(destination) {
    this.emit("error", new ERR_STREAM_CANNOT_PIPE());
    return destination;
  }
};
function processHeader(self, state, key, value, validate) {
  if (validate) {
    validateHeaderName(key);
  }
  if (Array.isArray(value)) {
    if ((value.length < 2 || !isCookieField(key)) && (!self[kUniqueHeaders] || !self[kUniqueHeaders].has(key.toLowerCase()))) {
      for (let i = 0; i < value.length; i++) {
        storeHeader(self, state, key, value[i], validate);
      }
      return;
    }
    value = value.join("; ");
  }
  storeHeader(self, state, key, String(value), validate);
}
function storeHeader(self, state, key, value, validate) {
  if (validate) {
    validateHeaderValue(key, value);
  }
  state.header += key + ": " + value + "\r\n";
  matchHeader(self, state, key, value);
}
function matchHeader(self, state, field, value) {
  if (field.length < 4 || field.length > 17)
    return;
  field = field.toLowerCase();
  switch (field) {
    case "connection":
      state.connection = true;
      self._removedConnection = false;
      if (RE_CONN_CLOSE.exec(value) !== null)
        self._last = true;
      else
        self.shouldKeepAlive = true;
      break;
    case "transfer-encoding":
      state.te = true;
      self._removedTE = false;
      if (chunkExpression.exec(value) !== null)
        self.chunkedEncoding = true;
      break;
    case "content-length":
      state.contLen = true;
      self._removedContLen = false;
      break;
    case "date":
    case "expect":
    case "trailer":
      state[field] = true;
      break;
    case "keep-alive":
      self._defaultKeepAlive = false;
      break;
  }
}
var crlf_buf = Buffer.from("\r\n");
function onError2(msg, err, callback) {
  process.nextTick(emitErrorNt, msg, err, callback);
}
function emitErrorNt(msg, err, callback) {
  callback(err);
  if (typeof msg.emit === "function" && !msg._closed) {
    msg.emit("error", err);
  }
}
function write_(msg, chunk, encoding, callback, fromEnd) {
  if (typeof callback !== "function") {
    callback = nop;
  }
  let len;
  if (chunk === null) {
    throw new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk === "string") {
    len = Buffer.byteLength(chunk, encoding !== null && encoding !== void 0 ? encoding : void 0);
  } else if (isUint8Array(chunk)) {
    len = chunk.length;
  } else {
    throw new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
  }
  let err = void 0;
  if (msg.finished) {
    err = new ERR_STREAM_WRITE_AFTER_END();
  } else if (msg.destroyed) {
    err = new ERR_STREAM_DESTROYED("write");
  }
  if (err) {
    if (!msg.destroyed) {
      onError2(msg, err, callback);
    } else {
      process.nextTick(callback, err);
    }
    return false;
  }
  if (!msg._header) {
    if (fromEnd) {
      msg._contentLength = len;
    }
    msg._implicitHeader();
  }
  if (!msg._hasBody) {
    debug("This type of response MUST NOT have a body. Ignoring write() calls.");
    process.nextTick(callback);
    return true;
  }
  if (!fromEnd && msg._writtenDataBuffer != null && !msg._writtenDataBuffer.writableCorked) {
    msg._writtenDataBuffer.cork();
    process.nextTick(connectionCorkNT, msg._writtenDataBuffer);
  }
  let ret;
  if (msg.chunkedEncoding && chunk.length !== 0) {
    msg._send(len.toString(16), "latin1", void 0);
    msg._send(crlf_buf, void 0, void 0);
    msg._send(chunk, encoding, void 0);
    ret = msg._send(crlf_buf, void 0, callback);
  } else {
    ret = msg._send(chunk, encoding, callback);
  }
  debug("write ret = " + ret);
  return ret;
}
function connectionCorkNT(dataBuffer) {
  dataBuffer.uncork();
}
function onFinish(outmsg) {
  outmsg.emit("finish");
}
Object.defineProperties(ComputeJsOutgoingMessage.prototype, {
  writableFinished: {
    get() {
      return this.finished && this.outputSize === 0 && (this._writtenDataBuffer == null || this._writtenDataBuffer.writableLength === 0);
    }
  },
  writableObjectMode: {
    get() {
      return false;
    }
  },
  writableLength: {
    get() {
      return this.outputSize + (this._writtenDataBuffer != null ? this._writtenDataBuffer.writableLength : 0);
    }
  },
  writableHighWaterMark: {
    get() {
      return HIGH_WATER_MARK + (this._writtenDataBuffer != null ? this._writtenDataBuffer.writableHighWaterMark : 0);
    }
  },
  writableCorked: {
    get() {
      return this[kCorked] + (this._writtenDataBuffer != null ? this._writtenDataBuffer.writableCorked : 0);
    }
  },
  writableEnded: {
    get() {
      return this.finished;
    }
  },
  writableNeedDrain: {
    get() {
      return !this.destroyed && !this.finished && this[kNeedDrain];
    }
  }
});

// node_modules/@fastly/http-compute-js/dist/http-compute-js/http-server.js
import { Buffer as Buffer2 } from "buffer";
var _a3;
var headerCharRegex2 = /[^\t\x20-\x7e\x80-\xff]/;
function checkInvalidHeaderChar2(val) {
  return headerCharRegex2.exec(val) !== null;
}
var STATUS_CODES = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
  // RFC 6585 6
};
var ComputeJsServerResponse = class _ComputeJsServerResponse extends ComputeJsOutgoingMessage {
  constructor(req) {
    super(req);
    this.statusCode = 200;
    this[_a3] = null;
    this.writeHeader = this.writeHead;
    if (req.method === "HEAD") {
      this._hasBody = false;
    }
    this.sendDate = true;
    this._sent100 = false;
    this._expect_continue = false;
    if (req.httpVersionMajor < 1 || req.httpVersionMinor < 1) {
      this.useChunkedEncodingByDefault = chunkExpression.exec(String(req.headers.te)) !== null;
      this.shouldKeepAlive = false;
    }
    this.computeResponse = new Promise((resolve) => {
      let finished = false;
      this.on("finish", () => {
        finished = true;
      });
      const initialDataChunks = [];
      const initialDataWrittenHandler = (e) => {
        if (finished) {
          return;
        }
        initialDataChunks[e.index] = this.dataFromDataWrittenEvent(e);
      };
      this.on("_dataWritten", initialDataWrittenHandler);
      this.on("_headersSent", (e) => {
        this.off("_dataWritten", initialDataWrittenHandler);
        const { statusCode, statusMessage, headers } = e;
        resolve(this._toComputeResponse(statusCode, statusMessage, headers, initialDataChunks, finished));
      });
    });
  }
  dataFromDataWrittenEvent(e) {
    const { index, entry } = e;
    let { data, encoding } = entry;
    if (index === 0) {
      if (typeof data !== "string") {
        console.error("First chunk should be string, not sure what happened.");
        throw new ERR_INVALID_ARG_TYPE("packet.data", ["string", "Buffer", "Uint8Array"], data);
      }
      data = data.slice(this.writtenHeaderBytes);
    }
    if (typeof data === "string") {
      if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
        data = _ComputeJsServerResponse.encoder.encode(data);
      } else {
        data = Buffer2.from(data, encoding);
      }
    }
    return data;
  }
  _finish() {
    super._finish();
  }
  assignSocket(socket) {
    throw new ERR_METHOD_NOT_IMPLEMENTED("assignSocket");
  }
  detachSocket(socket) {
    throw new ERR_METHOD_NOT_IMPLEMENTED("detachSocket");
  }
  writeContinue(callback) {
    this._writeRaw("HTTP/1.1 100 Continue\r\n\r\n", "ascii", callback);
    this._sent100 = true;
  }
  writeProcessing(callback) {
    this._writeRaw("HTTP/1.1 102 Processing\r\n\r\n", "ascii", callback);
  }
  _implicitHeader() {
    this.writeHead(this.statusCode);
  }
  writeHead(statusCode, reason, obj) {
    const originalStatusCode = statusCode;
    statusCode |= 0;
    if (statusCode < 100 || statusCode > 999) {
      throw new ERR_HTTP_INVALID_STATUS_CODE(originalStatusCode);
    }
    if (typeof reason === "string") {
      this.statusMessage = reason;
    } else {
      if (!this.statusMessage)
        this.statusMessage = STATUS_CODES[statusCode] || "unknown";
      obj = reason;
    }
    this.statusCode = statusCode;
    let headers;
    if (this[kOutHeaders]) {
      let k;
      if (Array.isArray(obj)) {
        if (obj.length % 2 !== 0) {
          throw new ERR_INVALID_ARG_VALUE("headers", obj);
        }
        for (let n = 0; n < obj.length; n += 2) {
          k = obj[n];
          if (k) {
            this.setHeader(k, obj[n + 1]);
          }
        }
      } else if (obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
          k = keys[i];
          if (k) {
            this.setHeader(k, obj[k]);
          }
        }
      }
      if (k === void 0 && this._header) {
        throw new ERR_HTTP_HEADERS_SENT("render");
      }
      headers = this[kOutHeaders];
    } else {
      headers = obj;
    }
    if (checkInvalidHeaderChar2(this.statusMessage)) {
      throw new ERR_INVALID_CHAR("statusMessage");
    }
    const statusLine = `HTTP/1.1 ${statusCode} ${this.statusMessage}\r
`;
    if (statusCode === 204 || statusCode === 304 || statusCode >= 100 && statusCode <= 199) {
      this._hasBody = false;
    }
    if (this._expect_continue && !this._sent100) {
      this.shouldKeepAlive = false;
    }
    this._storeHeader(statusLine, headers !== null && headers !== void 0 ? headers : null);
    return this;
  }
  _toComputeResponse(status, statusText, sentHeaders, initialDataChunks, finished) {
    const headers = new Headers();
    for (const [header, value] of sentHeaders) {
      headers.append(header, value);
    }
    const _this = this;
    const body = this._hasBody ? new ReadableStream({
      start(controller) {
        for (const dataChunk of initialDataChunks) {
          controller.enqueue(dataChunk);
        }
        if (finished) {
          controller.close();
        } else {
          _this.on("finish", () => {
            finished = true;
            controller.close();
          });
          _this.on("_dataWritten", (e) => {
            if (finished) {
              return;
            }
            const data = _this.dataFromDataWrittenEvent(e);
            controller.enqueue(data);
          });
        }
      }
    }) : null;
    return new Response(body, {
      status,
      statusText,
      headers
    });
  }
};
_a3 = kOutHeaders;
ComputeJsServerResponse.encoder = new TextEncoder();
function toReqRes(req, options) {
  const { createIncomingMessage = () => new ComputeJsIncomingMessage(), createServerResponse = (incoming2) => new ComputeJsServerResponse(incoming2), ctx } = options !== null && options !== void 0 ? options : {};
  const incoming = createIncomingMessage(ctx);
  const serverResponse = createServerResponse(incoming, ctx);
  const reqUrl = new URL(req.url);
  const versionMajor = 1;
  const versionMinor = 1;
  incoming.httpVersionMajor = versionMajor;
  incoming.httpVersionMinor = versionMinor;
  incoming.httpVersion = `${versionMajor}.${versionMinor}`;
  incoming.url = reqUrl.pathname + reqUrl.search;
  incoming.upgrade = false;
  const headers = [];
  for (const [headerName, headerValue] of req.headers) {
    headers.push(headerName);
    headers.push(headerValue);
  }
  incoming._addHeaderLines(headers, headers.length);
  incoming.method = req.method;
  incoming._stream = req.body;
  return {
    req: incoming,
    res: serverResponse
  };
}
function toComputeResponse(res) {
  if (!(res instanceof ComputeJsServerResponse)) {
    throw new Error("toComputeResponse must be called on ServerResponse generated by generateRequestResponse");
  }
  return res.computeResponse;
}

// src/run/handlers/server.ts
import {
  adjustDateHeader,
  setCacheControlHeaders,
  setCacheStatusHeader,
  setCacheTagsHeaders,
  setVaryHeaders
} from "../headers.js";
import { nextResponseProxy } from "../revalidate.js";
import { createRequestContext, getLogger, getRequestContext } from "./request-context.cjs";
import { getTracer } from "./tracer.cjs";
var nextImportPromise = import("../next.cjs");
var nextHandler;
var nextConfig;
var disableFaultyTransferEncodingHandling = (res) => {
  const originalStoreHeader = res._storeHeader;
  res._storeHeader = function _storeHeader(firstLine, headers) {
    if (headers) {
      if (Array.isArray(headers)) {
        headers = headers.filter(([header]) => header.toLowerCase() !== "transfer-encoding");
      } else {
        delete headers["transfer-encoding"];
      }
    }
    return originalStoreHeader.call(this, firstLine, headers);
  };
};
var server_default = async (request, context) => {
  const tracer = getTracer();
  if (!nextHandler) {
    await tracer.withActiveSpan("initialize next server", async () => {
      const { getRunConfig, setRunConfig } = await import("../config.js");
      nextConfig = await getRunConfig();
      setRunConfig(nextConfig);
      const { getMockedRequestHandlers } = await nextImportPromise;
      const url = new URL(request.url);
      [nextHandler] = await getMockedRequestHandlers({
        port: Number(url.port) || 443,
        hostname: url.hostname,
        dir: process.cwd(),
        isDev: false
      });
    });
  }
  return await tracer.withActiveSpan("generate response", async (span) => {
    const { req, res } = toReqRes(request);
    Object.defineProperty(req, "connection", {
      get() {
        return {};
      }
    });
    Object.defineProperty(req, "socket", {
      get() {
        return {};
      }
    });
    disableFaultyTransferEncodingHandling(res);
    const requestContext = getRequestContext() ?? createRequestContext();
    const resProxy = nextResponseProxy(res, requestContext);
    const nextHandlerPromise = nextHandler(req, resProxy).catch((error) => {
      getLogger().withError(error).error("next handler error");
      console.error(error);
      resProxy.statusCode = 500;
      span.setAttribute("http.status_code", 500);
      resProxy.end("Internal Server Error");
    });
    const response = await toComputeResponse(resProxy);
    if (requestContext.responseCacheKey) {
      span.setAttribute("responseCacheKey", requestContext.responseCacheKey);
    }
    await adjustDateHeader({ headers: response.headers, request, span, tracer, requestContext });
    setCacheControlHeaders(response.headers, request, requestContext);
    setCacheTagsHeaders(response.headers, requestContext);
    setVaryHeaders(response.headers, request, nextConfig);
    setCacheStatusHeader(response.headers);
    if (response.status > 300 && response.status < 400 || response.status >= 500) {
      const body = await response.text();
      return new Response(body || null, response);
    }
    if (context.waitUntil) {
      context.waitUntil(requestContext.backgroundWorkPromise);
    }
    const keepOpenUntilNextFullyRendered = new TransformStream({
      async flush() {
        await nextHandlerPromise;
        if (!context.waitUntil) {
          await requestContext.backgroundWorkPromise;
        }
      }
    });
    return new Response(response.body?.pipeThrough(keepOpenUntilNextFullyRendered), response);
  });
};
export {
  server_default as default
};
