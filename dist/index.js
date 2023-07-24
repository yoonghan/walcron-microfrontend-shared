import Ce, { useRef as qt, useDebugValue as Lr, createElement as Ht, useContext as ot } from "react";
const io = () => {
  console.log("i do nothing");
};
var hr = { exports: {} }, je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function Jt() {
  if (Yr)
    return je;
  Yr = 1;
  var e = Ce, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, f, m) {
    var p, v = {}, y = null, S = null;
    m !== void 0 && (y = "" + m), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (p in f)
      o.call(f, p) && !s.hasOwnProperty(p) && (v[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        v[p] === void 0 && (v[p] = f[p]);
    return { $$typeof: r, type: l, key: y, ref: S, props: v, _owner: a.current };
  }
  return je.Fragment = n, je.jsx = c, je.jsxs = c, je;
}
var Ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Kt() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ce, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = Symbol.iterator, j = "@@iterator";
    function B(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = O && t[O] || t[j];
      return typeof i == "function" ? i : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
          u[h - 1] = arguments[h];
        F("error", t, u);
      }
    }
    function F(t, i, u) {
      {
        var h = P.ReactDebugCurrentFrame, _ = h.getStackAddendum();
        _ !== "" && (i += "%s", u = u.concat([_]));
        var C = u.map(function(E) {
          return String(E);
        });
        C.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, C);
      }
    }
    var A = !1, x = !1, T = !1, d = !1, M = !1, J;
    J = Symbol.for("react.module.reference");
    function Z(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === s || M || t === a || t === m || t === p || d || t === S || A || x || T || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === v || t.$$typeof === c || t.$$typeof === l || t.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === J || t.getModuleId !== void 0));
    }
    function nr(t, i, u) {
      var h = t.displayName;
      if (h)
        return h;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? u + "(" + _ + ")" : u;
    }
    function Fe(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case m:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var i = t;
            return Fe(i) + ".Consumer";
          case c:
            var u = t;
            return Fe(u._context) + ".Provider";
          case f:
            return nr(t, t.render, "ForwardRef");
          case v:
            var h = t.displayName || null;
            return h !== null ? h : G(t.type) || "Memo";
          case y: {
            var _ = t, C = _._payload, E = _._init;
            try {
              return G(E(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ne = 0, Me, We, Le, xe, U, ce, oe;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function Te() {
      {
        if (ne === 0) {
          Me = console.log, We = console.info, Le = console.warn, xe = console.error, U = console.group, ce = console.groupCollapsed, oe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        ne++;
      }
    }
    function ke() {
      {
        if (ne--, ne === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, t, {
              value: Me
            }),
            info: Q({}, t, {
              value: We
            }),
            warn: Q({}, t, {
              value: Le
            }),
            error: Q({}, t, {
              value: xe
            }),
            group: Q({}, t, {
              value: U
            }),
            groupCollapsed: Q({}, t, {
              value: ce
            }),
            groupEnd: Q({}, t, {
              value: oe
            })
          });
        }
        ne < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = P.ReactCurrentDispatcher, ee;
    function se(t, i, u) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (_) {
            var h = _.stack.trim().match(/\n( *(at )?)/);
            ee = h && h[1] || "";
          }
        return `
` + ee + t;
      }
    }
    var K = !1, W;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ae();
    }
    function ue(t, i) {
      if (!t || K)
        return "";
      {
        var u = W.get(t);
        if (u !== void 0)
          return u;
      }
      var h;
      K = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = ae.current, ae.current = null, Te();
      try {
        if (i) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (re) {
              h = re;
            }
            Reflect.construct(t, [], E);
          } else {
            try {
              E.call();
            } catch (re) {
              h = re;
            }
            t.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            h = re;
          }
          t();
        }
      } catch (re) {
        if (re && h && typeof re.stack == "string") {
          for (var b = re.stack.split(`
`), L = h.stack.split(`
`), N = b.length - 1, I = L.length - 1; N >= 1 && I >= 0 && b[N] !== L[I]; )
            I--;
          for (; N >= 1 && I >= 0; N--, I--)
            if (b[N] !== L[I]) {
              if (N !== 1 || I !== 1)
                do
                  if (N--, I--, I < 0 || b[N] !== L[I]) {
                    var V = `
` + b[N].replace(" at new ", " at ");
                    return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)), typeof t == "function" && W.set(t, V), V;
                  }
                while (N >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        K = !1, ae.current = C, ke(), Error.prepareStackTrace = _;
      }
      var ve = t ? t.displayName || t.name : "", Wr = ve ? se(ve) : "";
      return typeof t == "function" && W.set(t, Wr), Wr;
    }
    function X(t, i, u) {
      return ue(t, !1);
    }
    function Ot(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ye(t, i, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ue(t, Ot(t));
      if (typeof t == "string")
        return se(t);
      switch (t) {
        case m:
          return se("Suspense");
        case p:
          return se("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return X(t.render);
          case v:
            return Ye(t.type, i, u);
          case y: {
            var h = t, _ = h._payload, C = h._init;
            try {
              return Ye(C(_), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Pr = {}, xr = P.ReactDebugCurrentFrame;
    function ze(t) {
      if (t) {
        var i = t._owner, u = Ye(t.type, t._source, i ? i.type : null);
        xr.setExtraStackFrame(u);
      } else
        xr.setExtraStackFrame(null);
    }
    function Pt(t, i, u, h, _) {
      {
        var C = Function.call.bind(Ve);
        for (var E in t)
          if (C(t, E)) {
            var b = void 0;
            try {
              if (typeof t[E] != "function") {
                var L = Error((h || "React class") + ": " + u + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              b = t[E](i, E, h, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              b = N;
            }
            b && !(b instanceof Error) && (ze(_), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", u, E, typeof b), ze(null)), b instanceof Error && !(b.message in Pr) && (Pr[b.message] = !0, ze(_), w("Failed %s type: %s", u, b.message), ze(null));
          }
      }
    }
    var xt = Array.isArray;
    function or(t) {
      return xt(t);
    }
    function Tt(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function kt(t) {
      try {
        return Tr(t), !1;
      } catch {
        return !0;
      }
    }
    function Tr(t) {
      return "" + t;
    }
    function kr(t) {
      if (kt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tt(t)), Tr(t);
    }
    var Ne = P.ReactCurrentOwner, At = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ar, Nr, ar;
    ar = {};
    function Nt(t) {
      if (Ve.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function jt(t) {
      if (Ve.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function It(t, i) {
      if (typeof t.ref == "string" && Ne.current && i && Ne.current.stateNode !== i) {
        var u = G(Ne.current.type);
        ar[u] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Ne.current.type), t.ref), ar[u] = !0);
      }
    }
    function Dt(t, i) {
      {
        var u = function() {
          Ar || (Ar = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function $t(t, i) {
      {
        var u = function() {
          Nr || (Nr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Ft = function(t, i, u, h, _, C, E) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: u,
        props: E,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Mt(t, i, u, h, _) {
      {
        var C, E = {}, b = null, L = null;
        u !== void 0 && (kr(u), b = "" + u), jt(i) && (kr(i.key), b = "" + i.key), Nt(i) && (L = i.ref, It(i, _));
        for (C in i)
          Ve.call(i, C) && !At.hasOwnProperty(C) && (E[C] = i[C]);
        if (t && t.defaultProps) {
          var N = t.defaultProps;
          for (C in N)
            E[C] === void 0 && (E[C] = N[C]);
        }
        if (b || L) {
          var I = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          b && Dt(E, I), L && $t(E, I);
        }
        return Ft(t, b, L, _, h, Ne.current, E);
      }
    }
    var sr = P.ReactCurrentOwner, jr = P.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var i = t._owner, u = Ye(t.type, t._source, i ? i.type : null);
        jr.setExtraStackFrame(u);
      } else
        jr.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function cr(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ir() {
      {
        if (sr.current) {
          var t = G(sr.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Wt(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var Dr = {};
    function Lt(t) {
      {
        var i = Ir();
        if (!i) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function $r(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = Lt(i);
        if (Dr[u])
          return;
        Dr[u] = !0;
        var h = "";
        t && t._owner && t._owner !== sr.current && (h = " It was passed a child from " + G(t._owner.type) + "."), ge(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, h), ge(null);
      }
    }
    function Fr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (or(t))
          for (var u = 0; u < t.length; u++) {
            var h = t[u];
            cr(h) && $r(h, i);
          }
        else if (cr(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = B(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var C = _.call(t), E; !(E = C.next()).done; )
              cr(E.value) && $r(E.value, i);
        }
      }
    }
    function Yt(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === v))
          u = i.propTypes;
        else
          return;
        if (u) {
          var h = G(i);
          Pt(u, t.props, "prop", h, t);
        } else if (i.PropTypes !== void 0 && !ir) {
          ir = !0;
          var _ = G(i);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vt(t) {
      {
        for (var i = Object.keys(t.props), u = 0; u < i.length; u++) {
          var h = i[u];
          if (h !== "children" && h !== "key") {
            ge(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    function Mr(t, i, u, h, _, C) {
      {
        var E = Z(t);
        if (!E) {
          var b = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Wt(_);
          L ? b += L : b += Ir();
          var N;
          t === null ? N = "null" : or(t) ? N = "array" : t !== void 0 && t.$$typeof === r ? (N = "<" + (G(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : N = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, b);
        }
        var I = Mt(t, i, u, _, C);
        if (I == null)
          return I;
        if (E) {
          var V = i.children;
          if (V !== void 0)
            if (h)
              if (or(V)) {
                for (var ve = 0; ve < V.length; ve++)
                  Fr(V[ve], t);
                Object.freeze && Object.freeze(V);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fr(V, t);
        }
        return t === o ? Vt(I) : Yt(I), I;
      }
    }
    function zt(t, i, u) {
      return Mr(t, i, u, !0);
    }
    function Bt(t, i, u) {
      return Mr(t, i, u, !1);
    }
    var Gt = Bt, Ut = zt;
    Ie.Fragment = o, Ie.jsx = Gt, Ie.jsxs = Ut;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? hr.exports = Jt() : hr.exports = Kt();
var be = hr.exports;
const co = ({ color: e }) => /* @__PURE__ */ be.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ be.jsx("span", { children: e })
] });
var Y = function() {
  return Y = Object.assign || function(r) {
    for (var n, o = 1, a = arguments.length; o < a; o++) {
      n = arguments[o];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
    }
    return r;
  }, Y.apply(this, arguments);
};
function we(e, r, n) {
  if (n || arguments.length === 2)
    for (var o = 0, a = r.length, s; o < a; o++)
      (s || !(o in r)) && (s || (s = Array.prototype.slice.call(r, 0, o)), s[o] = r[o]);
  return e.concat(s || Array.prototype.slice.call(r));
}
var k = "-ms-", $e = "-moz-", R = "-webkit-", at = "comm", Qe = "rule", Er = "decl", Xt = "@import", st = "@keyframes", Zt = "@layer", Qt = Math.abs, Sr = String.fromCharCode, en = Object.assign;
function rn(e, r) {
  return $(e, 0) ^ 45 ? (((r << 2 ^ $(e, 0)) << 2 ^ $(e, 1)) << 2 ^ $(e, 2)) << 2 ^ $(e, 3) : 0;
}
function it(e) {
  return e.trim();
}
function ie(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function g(e, r, n) {
  return e.replace(r, n);
}
function He(e, r) {
  return e.indexOf(r);
}
function $(e, r) {
  return e.charCodeAt(r) | 0;
}
function Ee(e, r, n) {
  return e.slice(r, n);
}
function te(e) {
  return e.length;
}
function _r(e) {
  return e.length;
}
function Be(e, r) {
  return r.push(e), e;
}
function tn(e, r) {
  return e.map(r).join("");
}
var er = 1, Se = 1, ct = 0, z = 0, D = 0, Oe = "";
function rr(e, r, n, o, a, s, c) {
  return { value: e, root: r, parent: n, type: o, props: a, children: s, line: er, column: Se, length: c, return: "" };
}
function De(e, r) {
  return en(rr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function nn() {
  return D;
}
function on() {
  return D = z > 0 ? $(Oe, --z) : 0, Se--, D === 10 && (Se = 1, er--), D;
}
function H() {
  return D = z < ct ? $(Oe, z++) : 0, Se++, D === 10 && (Se = 1, er++), D;
}
function de() {
  return $(Oe, z);
}
function Je() {
  return z;
}
function tr(e, r) {
  return Ee(Oe, e, r);
}
function mr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function an(e) {
  return er = Se = 1, ct = te(Oe = e), z = 0, [];
}
function sn(e) {
  return Oe = "", e;
}
function ur(e) {
  return it(tr(z - 1, gr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function cn(e) {
  for (; (D = de()) && D < 33; )
    H();
  return mr(e) > 2 || mr(D) > 3 ? "" : " ";
}
function un(e, r) {
  for (; --r && H() && !(D < 48 || D > 102 || D > 57 && D < 65 || D > 70 && D < 97); )
    ;
  return tr(e, Je() + (r < 6 && de() == 32 && H() == 32));
}
function gr(e) {
  for (; H(); )
    switch (D) {
      case e:
        return z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gr(D);
        break;
      case 40:
        e === 41 && gr(e);
        break;
      case 92:
        H();
        break;
    }
  return z;
}
function fn(e, r) {
  for (; H() && e + D !== 47 + 10; )
    if (e + D === 42 + 42 && de() === 47)
      break;
  return "/*" + tr(r, z - 1) + "*" + Sr(e === 47 ? e : H());
}
function ln(e) {
  for (; !mr(de()); )
    H();
  return tr(e, z);
}
function dn(e) {
  return sn(Ke("", null, null, null, [""], e = an(e), 0, [0], e));
}
function Ke(e, r, n, o, a, s, c, l, f) {
  for (var m = 0, p = 0, v = c, y = 0, S = 0, O = 0, j = 1, B = 1, P = 1, w = 0, F = "", A = a, x = s, T = o, d = F; B; )
    switch (O = w, w = H()) {
      case 40:
        if (O != 108 && $(d, v - 1) == 58) {
          He(d += g(ur(w), "&", "&\f"), "&\f") != -1 && (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        d += ur(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        d += cn(O);
        break;
      case 92:
        d += un(Je() - 1, 7);
        continue;
      case 47:
        switch (de()) {
          case 42:
          case 47:
            Be(pn(fn(H(), Je()), r, n), f);
            break;
          default:
            d += "/";
        }
        break;
      case 123 * j:
        l[m++] = te(d) * P;
      case 125 * j:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            B = 0;
          case 59 + p:
            P == -1 && (d = g(d, /\f/g, "")), S > 0 && te(d) - v && Be(S > 32 ? Br(d + ";", o, n, v - 1) : Br(g(d, " ", "") + ";", o, n, v - 2), f);
            break;
          case 59:
            d += ";";
          default:
            if (Be(T = zr(d, r, n, m, p, a, l, F, A = [], x = [], v), s), w === 123)
              if (p === 0)
                Ke(d, r, T, T, A, s, v, l, x);
              else
                switch (y === 99 && $(d, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ke(e, T, T, o && Be(zr(e, T, T, 0, 0, a, l, F, a, A = [], v), x), a, x, v, l, o ? A : x);
                    break;
                  default:
                    Ke(d, T, T, T, [""], x, 0, l, x);
                }
        }
        m = p = S = 0, j = P = 1, F = d = "", v = c;
        break;
      case 58:
        v = 1 + te(d), S = O;
      default:
        if (j < 1) {
          if (w == 123)
            --j;
          else if (w == 125 && j++ == 0 && on() == 125)
            continue;
        }
        switch (d += Sr(w), w * j) {
          case 38:
            P = p > 0 ? 1 : (d += "\f", -1);
            break;
          case 44:
            l[m++] = (te(d) - 1) * P, P = 1;
            break;
          case 64:
            de() === 45 && (d += ur(H())), y = de(), p = v = te(F = d += ln(Je())), w++;
            break;
          case 45:
            O === 45 && te(d) == 2 && (j = 0);
        }
    }
  return s;
}
function zr(e, r, n, o, a, s, c, l, f, m, p) {
  for (var v = a - 1, y = a === 0 ? s : [""], S = _r(y), O = 0, j = 0, B = 0; O < o; ++O)
    for (var P = 0, w = Ee(e, v + 1, v = Qt(j = c[O])), F = e; P < S; ++P)
      (F = it(j > 0 ? y[P] + " " + w : g(w, /&\f/g, y[P]))) && (f[B++] = F);
  return rr(e, r, n, a === 0 ? Qe : l, f, m, p);
}
function pn(e, r, n) {
  return rr(e, r, n, at, Sr(nn()), Ee(e, 2, -2), 0);
}
function Br(e, r, n, o) {
  return rr(e, r, n, Er, Ee(e, 0, o), Ee(e, o + 1, -1), o);
}
function ut(e, r, n) {
  switch (rn(e, r)) {
    case 5103:
      return R + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return R + e + e;
    case 4789:
      return $e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + $e + e + k + e + e;
    case 5936:
      switch ($(e, r + 11)) {
        case 114:
          return R + e + k + g(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + k + g(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + k + g(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return R + e + k + e + e;
    case 6165:
      return R + e + k + "flex-" + e + e;
    case 5187:
      return R + e + g(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + k + "flex-$1$2") + e;
    case 5443:
      return R + e + k + "flex-item-" + g(e, /flex-|-self/g, "") + (ie(e, /flex-|baseline/) ? "" : k + "grid-row-" + g(e, /flex-|-self/g, "")) + e;
    case 4675:
      return R + e + k + "flex-line-pack" + g(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return R + e + k + g(e, "shrink", "negative") + e;
    case 5292:
      return R + e + k + g(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + g(e, "-grow", "") + R + e + k + g(e, "grow", "positive") + e;
    case 4554:
      return R + g(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return g(g(g(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return g(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return g(g(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + k + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4200:
      if (!ie(e, /flex-|baseline/))
        return k + "grid-column-align" + Ee(e, r) + e;
      break;
    case 2592:
    case 3360:
      return k + g(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(o, a) {
        return r = a, ie(o.props, /grid-\w+-end/);
      }) ? ~He(e + (n = n[r].value), "span") ? e : k + g(e, "-start", "") + e + k + "grid-row-span:" + (~He(n, "span") ? ie(n, /\d+/) : +ie(n, /\d+/) - +ie(e, /\d+/)) + ";" : k + g(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(o) {
        return ie(o.props, /grid-\w+-start/);
      }) ? e : k + g(g(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return g(e, /(.+)-inline(.+)/, R + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (te(e) - 1 - r > 6)
        switch ($(e, r + 1)) {
          case 109:
            if ($(e, r + 4) !== 45)
              break;
          case 102:
            return g(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + $e + ($(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~He(e, "stretch") ? ut(g(e, "stretch", "fill-available"), r, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return g(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, s, c, l, f, m) {
        return k + a + ":" + s + m + (c ? k + a + "-span:" + (l ? f : +f - +s) + m : "") + e;
      });
    case 4949:
      if ($(e, r + 6) === 121)
        return g(e, ":", ":" + R) + e;
      break;
    case 6444:
      switch ($(e, $(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return g(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + R + ($(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + k + "$2box$3") + e;
        case 100:
          return g(e, ":", ":" + k) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return g(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ye(e, r) {
  for (var n = "", o = _r(e), a = 0; a < o; a++)
    n += r(e[a], a, e, r) || "";
  return n;
}
function hn(e, r, n, o) {
  switch (e.type) {
    case Zt:
      if (e.children.length)
        break;
    case Xt:
    case Er:
      return e.return = e.return || e.value;
    case at:
      return "";
    case st:
      return e.return = e.value + "{" + ye(e.children, o) + "}";
    case Qe:
      e.value = e.props.join(",");
  }
  return te(n = ye(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function mn(e) {
  var r = _r(e);
  return function(n, o, a, s) {
    for (var c = "", l = 0; l < r; l++)
      c += e[l](n, o, a, s) || "";
    return c;
  };
}
function gn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function vn(e, r, n, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Er:
        e.return = ut(e.value, e.length, n);
        return;
      case st:
        return ye([De(e, { value: g(e.value, "@", "@" + R) })], o);
      case Qe:
        if (e.length)
          return tn(e.props, function(a) {
            switch (ie(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ye([De(e, { props: [g(a, /:(read-\w+)/, ":" + $e + "$1")] })], o);
              case "::placeholder":
                return ye([
                  De(e, { props: [g(a, /:(plac\w+)/, ":" + R + "input-$1")] }),
                  De(e, { props: [g(a, /:(plac\w+)/, ":" + $e + "$1")] }),
                  De(e, { props: [g(a, /:(plac\w+)/, k + "input-$1")] })
                ], o);
            }
            return "";
          });
    }
}
var yn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, he = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Rr = typeof window < "u" && "HTMLElement" in window, bn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Gr = /invalid hook call/i, Ge = /* @__PURE__ */ new Set(), wn = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var n = r ? ' with the id of "'.concat(r, '"') : "", o = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var l = [], f = 1; f < arguments.length; f++)
          l[f - 1] = arguments[f];
        Gr.test(c) ? (s = !1, Ge.delete(o)) : a.apply(void 0, we([c], l, !1));
      }, qt(), s && !Ge.has(o) && (console.warn(o), Ge.add(o));
    } catch (c) {
      Gr.test(c.message) && Ge.delete(o);
    } finally {
      console.error = a;
    }
  }
}, ft = Object.freeze([]), me = Object.freeze({});
function En(e, r, n) {
  return n === void 0 && (n = me), e.theme !== n.theme && e.theme || r || n.theme;
}
var lt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Sn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, _n = /(^-|-$)/g;
function Ur(e) {
  return e.replace(Sn, "-").replace(_n, "");
}
var Rn = /(a)(d)/gi, qr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function vr(e) {
  var r, n = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    n = qr(r % 52) + n;
  return (qr(r % 52) + n).replace(Rn, "$1-$2");
}
var fr, fe = function(e, r) {
  for (var n = r.length; n; )
    e = 33 * e ^ r.charCodeAt(--n);
  return e;
}, dt = function(e) {
  return fe(5381, e);
};
function Cn(e) {
  return vr(dt(e) >>> 0);
}
function pt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function lr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ht = typeof Symbol == "function" && Symbol.for, mt = ht ? Symbol.for("react.memo") : 60115, On = ht ? Symbol.for("react.forward_ref") : 60112, Pn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, xn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, gt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Tn = ((fr = {})[On] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, fr[mt] = gt, fr);
function Hr(e) {
  return ("type" in (r = e) && r.type.$$typeof) === mt ? gt : "$$typeof" in e ? Tn[e.$$typeof] : Pn;
  var r;
}
var kn = Object.defineProperty, An = Object.getOwnPropertyNames, Jr = Object.getOwnPropertySymbols, Nn = Object.getOwnPropertyDescriptor, jn = Object.getPrototypeOf, Kr = Object.prototype;
function vt(e, r, n) {
  if (typeof r != "string") {
    if (Kr) {
      var o = jn(r);
      o && o !== Kr && vt(e, o, n);
    }
    var a = An(r);
    Jr && (a = a.concat(Jr(r)));
    for (var s = Hr(e), c = Hr(r), l = 0; l < a.length; ++l) {
      var f = a[l];
      if (!(f in xn || n && n[f] || c && f in c || s && f in s)) {
        var m = Nn(r, f);
        try {
          kn(e, f, m);
        } catch {
        }
      }
    }
  }
  return e;
}
function _e(e) {
  return typeof e == "function";
}
function Cr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function le(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function Xr(e, r) {
  if (e.length === 0)
    return "";
  for (var n = e[0], o = 1; o < e.length; o++)
    n += r ? r + e[o] : e[o];
  return n;
}
function Re(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function yr(e, r, n) {
  if (n === void 0 && (n = !1), !n && !Re(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      e[o] = yr(e[o], r[o]);
  else if (Re(r))
    for (var o in r)
      e[o] = yr(e[o], r[o]);
  return e;
}
var In = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Dn() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var n = e[0], o = [], a = 1, s = e.length; a < s; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    n = n.replace(/%[a-z]/, c);
  }), n;
}
function Pe(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Dn.apply(void 0, we([In[e]], r, !1)).trim());
}
var $n = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++)
      n += this.groupSizes[o];
    return n;
  }, e.prototype.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, s = a; r >= s; )
        if ((s <<= 1) < 0)
          throw Pe(16, "".concat(r));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = a; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), f = (c = 0, n.length); c < f; c++)
      this.tag.insertRule(l, n[c]) && (this.groupSizes[r]++, l++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), a = o + n;
      this.groupSizes[r] = 0;
      for (var s = o; s < a; s++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var o = this.groupSizes[r], a = this.indexOfGroup(r), s = a + o, c = a; c < s; c++)
      n += "".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), Xe = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), dr = 1, Ue = function(e) {
  if (Xe.has(e))
    return Xe.get(e);
  for (; Ze.has(dr); )
    dr++;
  var r = dr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1073741824))
    throw Pe(16, "".concat(r));
  return Xe.set(e, r), Ze.set(r, e), r;
}, Fn = function(e, r) {
  Xe.set(e, r), Ze.set(r, e);
}, Mn = "style[".concat(he, "][").concat("data-styled-version", '="').concat("6.0.0-rc.3", '"]'), Wn = new RegExp("^".concat(he, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ln = function(e, r, n) {
  for (var o, a = n.split(","), s = 0, c = a.length; s < c; s++)
    (o = a[s]) && e.registerName(r, o);
}, Yn = function(e, r) {
  for (var n, o = ((n = r.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), a = [], s = 0, c = o.length; s < c; s++) {
    var l = o[s].trim();
    if (l) {
      var f = l.match(Wn);
      if (f) {
        var m = 0 | parseInt(f[1], 10), p = f[2];
        m !== 0 && (Fn(p, m), Ln(e, p, f[3]), e.getTag().insertRules(m, a)), a.length = 0;
      } else
        a.push(l);
    }
  }
};
function Vn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var yt = function(e) {
  var r = document.head, n = e || r, o = document.createElement("style"), a = function(l) {
    for (var f = l.childNodes, m = f.length; m >= 0; m--) {
      var p = f[m];
      if (p && p.nodeType === 1 && p.hasAttribute(he))
        return p;
    }
  }(n), s = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(he, "active"), o.setAttribute("data-styled-version", "6.0.0-rc.3");
  var c = Vn();
  return c && o.setAttribute("nonce", c), n.insertBefore(o, s), o;
}, zn = function() {
  function e(r) {
    this.element = yt(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var c = o[a];
        if (c.ownerNode === n)
          return c;
      }
      throw Pe(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), Bn = function() {
  function e(r) {
    this.element = yt(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n);
      return this.element.insertBefore(o, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Gn = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Zr = Rr, Un = { isServer: !Rr, useCSSOMInjection: !bn }, bt = function() {
  function e(r, n, o) {
    r === void 0 && (r = me), n === void 0 && (n = {}), this.options = Y(Y({}, Un), r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Rr && Zr && (Zr = !1, function(a) {
      for (var s = document.querySelectorAll(Mn), c = 0, l = s.length; c < l; c++) {
        var f = s[c];
        f && f.getAttribute(he) !== "active" && (Yn(a, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  return e.registerId = function(r) {
    return Ue(r);
  }, e.prototype.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Y(Y({}, this.options), r), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(n) {
      var o = n.useCSSOMInjection, a = n.target;
      return n.isServer ? new Gn(a) : o ? new zn(a) : new Bn(a);
    }(this.options), new $n(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.prototype.registerName = function(r, n) {
    if (Ue(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, e.prototype.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Ue(r), o);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Ue(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e.prototype.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, a = "", s = function(l) {
        var f = function(S) {
          return Ze.get(S);
        }(l);
        if (f === void 0)
          return "continue";
        var m = r.names.get(f), p = n.getGroup(l);
        if (m === void 0 || p.length === 0)
          return "continue";
        var v = "".concat(he, ".g").concat(l, '[id="').concat(f, '"]'), y = "";
        m !== void 0 && m.forEach(function(S) {
          S.length > 0 && (y += "".concat(S, ","));
        }), a += "".concat(p).concat(v, '{content:"').concat(y, '"}').concat(`/*!sc*/
`);
      }, c = 0; c < o; c++)
        s(c);
      return a;
    }(this);
  }, e;
}(), qn = /&/g, Hn = /^\s*\/\/.*$/gm;
function wt(e, r) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(r, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(r, " ")), n.props = n.props.map(function(o) {
      return "".concat(r, " ").concat(o);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = wt(n.children, r)), n;
  });
}
function Jn(e) {
  var r, n, o, a = e === void 0 ? me : e, s = a.options, c = s === void 0 ? me : s, l = a.plugins, f = l === void 0 ? ft : l, m = function(y, S, O) {
    return O === n || O.startsWith(n) && O.endsWith(n) && O.replaceAll(n, "").length > 0 ? ".".concat(r) : y;
  }, p = f.slice();
  p.push(function(y) {
    y.type === Qe && y.value.includes("&") && (y.props[0] = y.props[0].replace(qn, n).replace(o, m));
  }), c.prefix && p.push(vn), p.push(hn);
  var v = function(y, S, O, j) {
    S === void 0 && (S = ""), O === void 0 && (O = ""), j === void 0 && (j = "&"), r = j, n = S, o = new RegExp("\\".concat(n, "\\b"), "g");
    var B = y.replace(Hn, ""), P = dn(O || S ? "".concat(O, " ").concat(S, " { ").concat(B, " }") : B);
    c.namespace && (P = wt(P, c.namespace));
    var w = [];
    return ye(P, mn(p.concat(gn(function(F) {
      return w.push(F);
    })))), w;
  };
  return v.hash = f.length ? f.reduce(function(y, S) {
    return S.name || Pe(15), fe(y, S.name);
  }, 5381).toString() : "", v;
}
var Kn = new bt(), br = Jn(), Et = Ce.createContext({ shouldForwardProp: void 0, styleSheet: Kn, stylis: br });
Et.Consumer;
Ce.createContext(void 0);
function Qr() {
  return ot(Et);
}
var et = function() {
  function e(r, n) {
    var o = this;
    this.inject = function(a, s) {
      s === void 0 && (s = br);
      var c = o.name + s.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.toString = function() {
      throw Pe(12, String(o.name));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = n;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = br), this.name + r.hash;
  }, e;
}(), Xn = function(e) {
  return e >= "A" && e <= "Z";
};
function rt(e) {
  for (var r = "", n = 0; n < e.length; n++) {
    var o = e[n];
    if (n === 1 && o === "-" && e[0] === "-")
      return e;
    Xn(o) ? r += "-" + o.toLowerCase() : r += o;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var St = function(e) {
  return e == null || e === !1 || e === "";
}, _t = function(e) {
  var r, n, o = [];
  for (var a in e) {
    var s = e[a];
    e.hasOwnProperty(a) && !St(s) && (Array.isArray(s) && s.isCss || _e(s) ? o.push("".concat(rt(a), ":"), s, ";") : Re(s) ? o.push.apply(o, we(we(["".concat(a, " {")], _t(s), !1), ["}"], !1)) : o.push("".concat(rt(a), ": ").concat((r = a, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || r in yn || r.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return o;
};
function pe(e, r, n, o) {
  if (St(e))
    return [];
  if (Cr(e))
    return [".".concat(e.styledComponentId)];
  if (_e(e)) {
    if (!_e(s = e) || s.prototype && s.prototype.isReactComponent || !r)
      return [e];
    var a = e(r);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof et || Re(a) || a === null || console.error("".concat(pt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(a, r, n, o);
  }
  var s;
  return e instanceof et ? n ? (e.inject(n, o), [e.getName(o)]) : [e] : Re(e) ? _t(e) : Array.isArray(e) ? e.flatMap(function(c) {
    return pe(c, r, n, o);
  }) : [e.toString()];
}
function Zn(e) {
  for (var r = 0; r < e.length; r += 1) {
    var n = e[r];
    if (_e(n) && !Cr(n))
      return !1;
  }
  return !0;
}
var Qn = dt("6.0.0-rc.3"), eo = function() {
  function e(r, n, o) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Zn(r), this.componentId = n, this.baseHash = fe(Qn, n), this.baseStyle = o, bt.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(r, n, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, n, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        a = le(a, this.staticRulesId);
      else {
        var s = Xr(pe(this.rules, r, n, o)), c = vr(fe(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(this.componentId, c)) {
          var l = o(s, ".".concat(c), void 0, this.componentId);
          n.insertRules(this.componentId, c, l);
        }
        a = le(a, c), this.staticRulesId = c;
      }
    else {
      for (var f = fe(this.baseHash, o.hash), m = "", p = 0; p < this.rules.length; p++) {
        var v = this.rules[p];
        if (typeof v == "string")
          m += v, process.env.NODE_ENV !== "production" && (f = fe(f, v));
        else if (v) {
          var y = Xr(pe(v, r, n, o));
          f = fe(f, y), m += y;
        }
      }
      if (m) {
        var S = vr(f >>> 0);
        n.hasNameForId(this.componentId, S) || n.insertRules(this.componentId, S, o(m, ".".concat(S), void 0, this.componentId)), a = le(a, S);
      }
    }
    return a;
  }, e;
}(), Rt = Ce.createContext(void 0);
Rt.Consumer;
function ro() {
  return ot(Rt);
}
var pr = {};
function to(e, r, n) {
  var o, a = Cr(e), s = e, c = !lr(e), l = r.componentId, f = l === void 0 ? function(x, T) {
    var d = typeof x != "string" ? "sc" : Ur(x);
    pr[d] = (pr[d] || 0) + 1;
    var M = "".concat(d, "-").concat(Cn("6.0.0-rc.3" + d + pr[d]));
    return T ? "".concat(T, "-").concat(M) : M;
  }(r.displayName, r.parentComponentId) : l, m = r.displayName, p = m === void 0 ? function(x) {
    return lr(x) ? "styled.".concat(x) : "Styled(".concat(pt(x), ")");
  }(e) : m, v = (o = r.attrs) !== null && o !== void 0 ? o : [], y = r.displayName && r.componentId ? "".concat(Ur(r.displayName), "-").concat(r.componentId) : r.componentId || f, S = a && s.attrs ? s.attrs.concat(v).filter(Boolean) : v, O = r.shouldForwardProp;
  if (a && s.shouldForwardProp) {
    var j = s.shouldForwardProp;
    if (r.shouldForwardProp) {
      var B = r.shouldForwardProp;
      O = function(x, T) {
        return j(x, T) && B(x, T);
      };
    } else
      O = j;
  }
  var P = new eo(n, y, a ? s.componentStyle : void 0), w = P.isStatic && v.length === 0;
  function F(x, T) {
    return function(d, M, J, Z) {
      var nr = d.attrs, Fe = d.componentStyle, G = d.defaultProps, Q = d.foldedComponentIds, ne = d.styledComponentId, Me = d.target, We = ro(), Le = Qr(), xe = d.shouldForwardProp || Le.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Lr(ne);
      var U = function(ae, ee, se) {
        for (var K, W = Y(Y({}, ee), { className: void 0, theme: se }), Ae = 0; Ae < ae.length; Ae += 1) {
          var ue = _e(K = ae[Ae]) ? K(W) : K;
          for (var X in ue)
            W[X] = X === "className" ? le(W[X], ue[X]) : X === "style" ? Y(Y({}, W[X]), ue[X]) : ue[X];
        }
        return ee.className && (W.className = le(W.className, ee.className)), W;
      }(nr, M, En(M, We, G) || me), ce = U.as || Me, oe = {};
      for (var q in U)
        U[q] === void 0 || q[0] === "$" || q === "as" || q === "theme" || (q === "forwardedAs" ? oe.as = U.forwardedAs : xe && !xe(q, ce) || (oe[q] = U[q]));
      var Te = function(ae, ee, se) {
        var K = Qr(), W = ae.generateAndInjectStyles(ee ? me : se, K.styleSheet, K.stylis);
        return process.env.NODE_ENV !== "production" && Lr(W), W;
      }(Fe, Z, U);
      process.env.NODE_ENV !== "production" && !Z && d.warnTooManyClasses && d.warnTooManyClasses(Te);
      var ke = le(Q, ne);
      return Te && (ke += " " + Te), U.className && (ke += " " + U.className), oe[lr(ce) && !lt.has(ce) ? "class" : "className"] = ke, oe.ref = J, Ht(ce, oe);
    }(A, x, T, w);
  }
  F.displayName = p;
  var A = Ce.forwardRef(F);
  return A.attrs = S, A.componentStyle = P, A.displayName = p, A.shouldForwardProp = O, A.foldedComponentIds = a ? le(s.foldedComponentIds, s.styledComponentId) : "", A.styledComponentId = y, A.target = a ? s.target : e, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = a ? function(T) {
      for (var d = [], M = 1; M < arguments.length; M++)
        d[M - 1] = arguments[M];
      for (var J = 0, Z = d; J < Z.length; J++)
        yr(T, Z[J], !0);
      return T;
    }({}, s.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (wn(p, y), A.warnTooManyClasses = function(x, T) {
    var d = {}, M = !1;
    return function(J) {
      if (!M && (d[J] = !0, Object.keys(d).length >= 200)) {
        var Z = T ? ' with the id of "'.concat(T, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, d = {};
      }
    };
  }(p, y)), Object.defineProperty(A, "toString", { value: function() {
    return ".".concat(A.styledComponentId);
  } }), c && vt(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), A;
}
function tt(e, r) {
  for (var n = [e[0]], o = 0, a = r.length; o < a; o += 1)
    n.push(r[o], e[o + 1]);
  return n;
}
var nt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function no(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  if (_e(e) || Re(e)) {
    var o = e;
    return nt(pe(tt(ft, we([o], r, !0))));
  }
  var a = e;
  return r.length === 0 && a.length === 1 && typeof a[0] == "string" ? pe(a) : nt(pe(tt(a, r)));
}
function wr(e, r, n) {
  if (n === void 0 && (n = me), !r)
    throw Pe(1, r);
  var o = function(a) {
    for (var s = [], c = 1; c < arguments.length; c++)
      s[c - 1] = arguments[c];
    return e(r, n, no.apply(void 0, we([a], s, !1)));
  };
  return o.attrs = function(a) {
    return wr(e, r, Y(Y({}, n), { attrs: Array.prototype.concat(n.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return wr(e, r, Y(Y({}, n), a));
  }, o;
}
function Ct(e) {
  return wr(to, e);
}
var Or = Ct;
lt.forEach(function(e) {
  Or[e] = Ct(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qe = "__sc-".concat(he, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[qe] || (window[qe] = 0), window[qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qe] += 1);
const oo = Or.div`
  font-size: 0.75rem;
  padding: 0.5rem 0.5rem;
`, uo = ({
  companyName: e = "Walcron",
  establishedYear: r = 2014,
  lastUpdatedYear: n
}) => /* @__PURE__ */ be.jsx(oo, { children: /* @__PURE__ */ be.jsxs("small", { children: [
  e,
  " ",
  r,
  "-",
  n,
  " ©"
] }) }), ao = Or.div`
  font-size: 0.75rem;
  text-align: center;
`, fo = ({
  companyName: e = "Walcron",
  link: r = "/",
  lastUpdatedYear: n
}) => /* @__PURE__ */ be.jsxs(ao, { children: [
  "Copyright © ",
  /* @__PURE__ */ be.jsx("a", { color: "inherit", href: r, children: e }),
  " ",
  n,
  "."
] });
export {
  fo as Copyright,
  uo as Footer,
  co as Logo,
  io as placeholder
};
