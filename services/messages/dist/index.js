import V from "express";
const M = {
  HELLO: "hello"
};
function _(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var E = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var C, k;
function R() {
  if (k) return C;
  k = 1;
  var g = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function A(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var u = {}, n = 0; n < 10; n++)
        u["_" + String.fromCharCode(n)] = n;
      var l = Object.getOwnPropertyNames(u).map(function(c) {
        return u[c];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        f[c] = c;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return C = o() ? Object.assign : function(s, u) {
    for (var n, l = A(s), f, c = 1; c < arguments.length; c++) {
      n = Object(arguments[c]);
      for (var v in n)
        p.call(n, v) && (l[v] = n[v]);
      if (g) {
        f = g(n);
        for (var h = 0; h < f.length; h++)
          y.call(n, f[h]) && (l[f[h]] = n[f[h]]);
      }
    }
    return l;
  }, C;
}
var j = { exports: {} };
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
var S;
function I() {
  if (S) return j.exports;
  S = 1, j.exports = A, j.exports.append = p;
  var g = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  function p(o, s) {
    if (typeof o != "string")
      throw new TypeError("header argument is required");
    if (!s)
      throw new TypeError("field argument is required");
    for (var u = Array.isArray(s) ? s : y(String(s)), n = 0; n < u.length; n++)
      if (!g.test(u[n]))
        throw new TypeError("field argument contains an invalid header name");
    if (o === "*")
      return o;
    var l = o, f = y(o.toLowerCase());
    if (u.indexOf("*") !== -1 || f.indexOf("*") !== -1)
      return "*";
    for (var c = 0; c < u.length; c++) {
      var v = u[c].toLowerCase();
      f.indexOf(v) === -1 && (f.push(v), l = l ? l + ", " + u[c] : u[c]);
    }
    return l;
  }
  function y(o) {
    for (var s = 0, u = [], n = 0, l = 0, f = o.length; l < f; l++)
      switch (o.charCodeAt(l)) {
        case 32:
          n === s && (n = s = l + 1);
          break;
        case 44:
          u.push(o.substring(n, s)), n = s = l + 1;
          break;
        default:
          s = l + 1;
          break;
      }
    return u.push(o.substring(n, s)), u;
  }
  function A(o, s) {
    if (!o || !o.getHeader || !o.setHeader)
      throw new TypeError("res argument is required");
    var u = o.getHeader("Vary") || "", n = Array.isArray(u) ? u.join(", ") : String(u);
    (u = p(n, s)) && o.setHeader("Vary", u);
  }
  return j.exports;
}
var P;
function N() {
  return P || (P = 1, function() {
    var g = R(), p = I(), y = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: !1,
      optionsSuccessStatus: 204
    };
    function A(e) {
      return typeof e == "string" || e instanceof String;
    }
    function o(e, r) {
      if (Array.isArray(r)) {
        for (var t = 0; t < r.length; ++t)
          if (o(e, r[t]))
            return !0;
        return !1;
      } else return A(r) ? e === r : r instanceof RegExp ? r.test(e) : !!r;
    }
    function s(e, r) {
      var t = r.headers.origin, i = [], a;
      return !e.origin || e.origin === "*" ? i.push([{
        key: "Access-Control-Allow-Origin",
        value: "*"
      }]) : A(e.origin) ? (i.push([{
        key: "Access-Control-Allow-Origin",
        value: e.origin
      }]), i.push([{
        key: "Vary",
        value: "Origin"
      }])) : (a = o(t, e.origin), i.push([{
        key: "Access-Control-Allow-Origin",
        value: a ? t : !1
      }]), i.push([{
        key: "Vary",
        value: "Origin"
      }])), i;
    }
    function u(e) {
      var r = e.methods;
      return r.join && (r = e.methods.join(",")), {
        key: "Access-Control-Allow-Methods",
        value: r
      };
    }
    function n(e) {
      return e.credentials === !0 ? {
        key: "Access-Control-Allow-Credentials",
        value: "true"
      } : null;
    }
    function l(e, r) {
      var t = e.allowedHeaders || e.headers, i = [];
      return t ? t.join && (t = t.join(",")) : (t = r.headers["access-control-request-headers"], i.push([{
        key: "Vary",
        value: "Access-Control-Request-Headers"
      }])), t && t.length && i.push([{
        key: "Access-Control-Allow-Headers",
        value: t
      }]), i;
    }
    function f(e) {
      var r = e.exposedHeaders;
      if (r)
        r.join && (r = r.join(","));
      else return null;
      return r && r.length ? {
        key: "Access-Control-Expose-Headers",
        value: r
      } : null;
    }
    function c(e) {
      var r = (typeof e.maxAge == "number" || e.maxAge) && e.maxAge.toString();
      return r && r.length ? {
        key: "Access-Control-Max-Age",
        value: r
      } : null;
    }
    function v(e, r) {
      for (var t = 0, i = e.length; t < i; t++) {
        var a = e[t];
        a && (Array.isArray(a) ? v(a, r) : a.key === "Vary" && a.value ? p(r, a.value) : a.value && r.setHeader(a.key, a.value));
      }
    }
    function h(e, r, t, i) {
      var a = [], m = r.method && r.method.toUpperCase && r.method.toUpperCase();
      m === "OPTIONS" ? (a.push(s(e, r)), a.push(n(e)), a.push(u(e)), a.push(l(e, r)), a.push(c(e)), a.push(f(e)), v(a, t), e.preflightContinue ? i() : (t.statusCode = e.optionsSuccessStatus, t.setHeader("Content-Length", "0"), t.end())) : (a.push(s(e, r)), a.push(n(e)), a.push(f(e)), v(a, t), i());
    }
    function T(e) {
      var r = null;
      return typeof e == "function" ? r = e : r = function(t, i) {
        i(null, e);
      }, function(i, a, m) {
        r(i, function(H, q) {
          if (H)
            m(H);
          else {
            var d = g({}, y, q), b = null;
            d.origin && typeof d.origin == "function" ? b = d.origin : d.origin && (b = function(O, w) {
              w(null, d.origin);
            }), b ? b(i.headers.origin, function(O, w) {
              O || !w ? m(O) : (d.origin = w, h(d, i, a, m));
            }) : m();
          }
        });
      };
    }
    E.exports = T;
  }()), E.exports;
}
var D = N();
const U = /* @__PURE__ */ _(D), $ = "hello world", F = {
  message: $,
  type: M.HELLO
}, x = V(), L = 3e3;
x.use(U());
x.get("/message", (g, p) => {
  p.json(F);
});
x.listen(L, () => {
  console.log(`✅ API listening at http://localhost:${L}/message`);
});
