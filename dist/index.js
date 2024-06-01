import Z, { useEffect as X, useState as U, useCallback as B, useMemo as yr, useRef as Ie } from "react";
const Br = ({
  appName: t,
  containerName: i,
  props: f
}) => {
  X(() => {
    window.dispatchEvent(
      new CustomEvent(`[${t}] navigated`, { detail: f.pathname })
    );
  }, [t, f.pathname]), X(() => {
    function h(E) {
      const g = E.detail;
      f.pathname !== g && f.navigate(g);
    }
    return window.addEventListener(
      `[${i}] navigated`,
      h
    ), () => {
      window.removeEventListener(
        `[${i}] navigated`,
        h
      );
    };
  }, [i, f]);
};
function Ur(t) {
  console.log(t);
}
function Er(t) {
  const i = t.value;
  return t.name === "CLS" ? Math.round(i * 1e3) : Math.round(i);
}
function Hr(t) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: t.name,
    eventValue: Er(t),
    eventLabel: t.id,
    nonInteraction: !0
  });
}
const zr = (t) => {
  t && t instanceof Function && import("./web-vitals-C2duWsRR.js").then(({ onCLS: i, onFID: f, onFCP: h, onLCP: E, onTTFB: g }) => {
    i(t), f(t), h(t), E(t), g(t);
  });
};
function Rr(t, i) {
  let f;
  return () => {
    /* istanbul ignore if -- @preserve */
    f !== null && clearTimeout(f), f = setTimeout(() => {
      f = null, t();
    }, i);
  };
}
var ue = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function xr() {
  if (De)
    return M;
  De = 1;
  var t = Z, i = Symbol.for("react.element"), f = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(o, s, R) {
    var b, T = {}, p = null, y = null;
    R !== void 0 && (p = "" + R), s.key !== void 0 && (p = "" + s.key), s.ref !== void 0 && (y = s.ref);
    for (b in s)
      h.call(s, b) && !g.hasOwnProperty(b) && (T[b] = s[b]);
    if (o && o.defaultProps)
      for (b in s = o.defaultProps, s)
        T[b] === void 0 && (T[b] = s[b]);
    return { $$typeof: i, type: o, key: p, ref: y, props: T, _owner: E.current };
  }
  return M.Fragment = f, M.jsx = j, M.jsxs = j, M;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function jr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Z, i = Symbol.for("react.element"), f = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = Symbol.iterator, P = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[P];
      return typeof r == "function" ? r : null;
    }
    var A = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        Ne("error", e, n);
      }
    }
    function Ne(e, r, n) {
      {
        var a = A.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", n = n.concat([d]));
        var v = n.map(function(u) {
          return String(u);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ye = !1, Me = !1, Ve = !1, Be = !1, Ue = !1, de;
    de = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === g || Ue || e === E || e === R || e === b || Be || e === y || Ye || Me || Ve || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === T || e.$$typeof === j || e.$$typeof === o || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function ze(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case f:
          return "Portal";
        case g:
          return "Profiler";
        case E:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return ve(r) + ".Consumer";
          case j:
            var n = e;
            return ve(n._context) + ".Provider";
          case s:
            return ze(e, e.render, "ForwardRef");
          case T:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case p: {
            var d = e, v = d._payload, u = d._init;
            try {
              return S(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, L = 0, he, pe, ge, be, _e, me, ye;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Je() {
      {
        if (L === 0) {
          he = console.log, pe = console.info, ge = console.warn, be = console.error, _e = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function qe() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: he
            }),
            info: W({}, e, {
              value: pe
            }),
            warn: W({}, e, {
              value: ge
            }),
            error: W({}, e, {
              value: be
            }),
            group: W({}, e, {
              value: _e
            }),
            groupCollapsed: W({}, e, {
              value: me
            }),
            groupEnd: W({}, e, {
              value: ye
            })
          });
        }
        L < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = A.ReactCurrentDispatcher, ee;
    function z(e, r, n) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            ee = a && a[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function Re(e, r) {
      if (!e || re)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      re = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Q.current, Q.current = null, Je();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (C) {
              a = C;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var c = C.stack.split(`
`), w = a.stack.split(`
`), _ = c.length - 1, m = w.length - 1; _ >= 1 && m >= 0 && c[_] !== w[m]; )
            m--;
          for (; _ >= 1 && m >= 0; _--, m--)
            if (c[_] !== w[m]) {
              if (_ !== 1 || m !== 1)
                do
                  if (_--, m--, m < 0 || c[_] !== w[m]) {
                    var k = `
` + c[_].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, k), k;
                  }
                while (_ >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = v, qe(), Error.prepareStackTrace = d;
      }
      var I = e ? e.displayName || e.name : "", $ = I ? z(I) : "";
      return typeof e == "function" && J.set(e, $), $;
    }
    function Ge(e, r, n) {
      return Re(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Xe(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case R:
          return z("Suspense");
        case b:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ge(e.render);
          case T:
            return q(e.type, r, n);
          case p: {
            var a = e, d = a._payload, v = a._init;
            try {
              return q(v(d), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, xe = {}, je = A.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    function Ze(e, r, n, a, d) {
      {
        var v = Function.call.bind(N);
        for (var u in e)
          if (v(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((a || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              c = e[u](r, u, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              c = _;
            }
            c && !(c instanceof Error) && (K(d), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof c), K(null)), c instanceof Error && !(c.message in xe) && (xe[c.message] = !0, K(d), x("Failed %s type: %s", n, c.message), K(null));
          }
      }
    }
    var Qe = Array.isArray;
    function ne(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function rr(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Te(e) {
      if (rr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), we(e);
    }
    var Y = A.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, ke, te;
    te = {};
    function tr(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var n = S(Y.current.type);
        te[n] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(Y.current.type), e.ref), te[n] = !0);
      }
    }
    function ir(e, r) {
      {
        var n = function() {
          Ce || (Ce = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          ke || (ke = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, a, d, v, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: u,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function lr(e, r, n, a, d) {
      {
        var v, u = {}, c = null, w = null;
        n !== void 0 && (Te(n), c = "" + n), ar(r) && (Te(r.key), c = "" + r.key), tr(r) && (w = r.ref, or(r, d));
        for (v in r)
          N.call(r, v) && !nr.hasOwnProperty(v) && (u[v] = r[v]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (v in _)
            u[v] === void 0 && (u[v] = _[v]);
        }
        if (c || w) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ir(u, m), w && sr(u, m);
        }
        return cr(e, c, w, d, a, Y.current, u);
      }
    }
    var ae = A.ReactCurrentOwner, Oe = A.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(n);
      } else
        Oe.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Se() {
      {
        if (ae.current) {
          var e = S(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var Pe = {};
    function fr(e) {
      {
        var r = Se();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = fr(r);
        if (Pe[n])
          return;
        Pe[n] = !0;
        var a = "";
        e && e._owner && e._owner !== ae.current && (a = " It was passed a child from " + S(e._owner.type) + "."), F(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), F(null);
      }
    }
    function We(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ie(a) && Ae(a, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = H(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), u; !(u = v.next()).done; )
              ie(u.value) && Ae(u.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = S(r);
          Ze(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var d = S(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            F(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var $e = {};
    function Fe(e, r, n, a, d, v) {
      {
        var u = He(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ur();
          w ? c += w : c += Se();
          var _;
          e === null ? _ = "null" : ne(e) ? _ = "array" : e !== void 0 && e.$$typeof === i ? (_ = "<" + (S(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, c);
        }
        var m = lr(e, r, n, d, v);
        if (m == null)
          return m;
        if (u) {
          var k = r.children;
          if (k !== void 0)
            if (a)
              if (ne(k)) {
                for (var I = 0; I < k.length; I++)
                  We(k[I], e);
                Object.freeze && Object.freeze(k);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(k, e);
        }
        if (N.call(r, "key")) {
          var $ = S(e), C = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), se = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[$ + se]) {
            var _r = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, $, _r, $), $e[$ + se] = !0;
          }
        }
        return e === h ? vr(m) : dr(m), m;
      }
    }
    function hr(e, r, n) {
      return Fe(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Fe(e, r, n, !1);
    }
    var gr = pr, br = hr;
    V.Fragment = h, V.jsx = gr, V.jsxs = br;
  }()), V;
}
process.env.NODE_ENV === "production" ? ue.exports = xr() : ue.exports = jr();
var l = ue.exports;
const ce = `
`, fe = "[\\.|,]", wr = new RegExp(
  `.*\\]${fe}?$`
), Tr = new RegExp(
  `\\]${fe}?$`,
  "g"
), Cr = new RegExp(
  `${fe}$`
);
function Jr(t, i) {
  function f(o, s) {
    if (o.match(wr) && o.indexOf("|") > -1) {
      const R = o.replace(
        Tr,
        "]"
      ), T = R.substring(
        1,
        R.length - 1
      ).split("|"), p = T[0], y = T[1].replaceAll(
        ce,
        " "
      );
      return /* @__PURE__ */ l.jsxs(Z.Fragment, { children: [
        i(p, y),
        o.match(Cr) ? `${o.slice(-1)}` : ""
      ] }, s);
    }
    return o;
  }
  const j = ((o) => {
    const s = o.split("|");
    return s.length > 1 ? s.map((R) => {
      const b = R.split("]");
      return b.length === 2 ? `${b[0].replaceAll(
        " ",
        ce
      )}]${b[1]}` : R;
    }).join("|") : o;
  })(t).split(" ").map((o, s) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ l.jsx("strong", { children: o.substring(1, o.length) }, s) : o.startsWith("[") ? f(o, s) : o === "!!" ? /* @__PURE__ */ l.jsx("br", {}, s) : o.replaceAll(ce, " ")).reduce(
    (o, s) => [...o, " ", s],
    []
  );
  return j.shift(), /* @__PURE__ */ l.jsx(l.Fragment, { children: j });
}
const qr = () => {
  const [t, i] = U({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return X(() => {
    const f = Rr(function() {
      i({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), t;
}, Kr = ({ color: t }) => /* @__PURE__ */ l.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ l.jsx("span", { children: t })
] }), kr = "_footer_ttkno_1", Or = {
  footer: kr
}, Gr = ({
  companyName: t = "Walcron",
  establishedYear: i = 2014,
  lastUpdatedYear: f
}) => /* @__PURE__ */ l.jsxs("div", { className: Or.footer, children: [
  /* @__PURE__ */ l.jsx("hr", {}),
  /* @__PURE__ */ l.jsxs("div", { children: [
    t,
    " ",
    i,
    " - ",
    f,
    " ©"
  ] })
] }), Sr = "_copyright_1c7c9_1", Pr = {
  copyright: Sr
}, Xr = ({
  companyName: t = "Walcron",
  link: i = "/",
  lastUpdatedYear: f
}) => /* @__PURE__ */ l.jsxs("div", { className: Pr.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ l.jsx("a", { color: "inherit", href: i, children: t }),
  " ",
  f,
  "."
] });
function Zr({
  statusText: t,
  message: i
}) {
  return /* @__PURE__ */ l.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ l.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ l.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ l.jsx("p", { children: /* @__PURE__ */ l.jsx("i", { children: t || i || "Error message is unknown." }) })
  ] });
}
const Ar = "_accordion_1gi8s_1", Wr = "_tab_1gi8s_27", $r = "_tab__content_1gi8s_38", le = {
  accordion: Ar,
  tab: Wr,
  tab__content: $r
};
function Qr({
  model: t,
  groupName: i,
  isSingle: f = !0
}) {
  const [h, E] = U(""), g = B(
    (o) => {
      const s = o.currentTarget;
      h === s.value ? (s.checked = !1, E("")) : E(s.value);
    },
    [h]
  ), j = yr(
    () => t.map((o, s) => /* @__PURE__ */ l.jsxs("div", { className: le.tab, children: [
      /* @__PURE__ */ l.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: f ? "radio" : "checkbox",
            value: s,
            name: i,
            onClick: f ? g : void 0
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: le.tab__content, children: /* @__PURE__ */ l.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [t, f, i, g]
  );
  return /* @__PURE__ */ l.jsx("div", { className: le.accordion, children: j });
}
const Fr = "_announcement_14tja_1", Ir = "_only_one_14tja_11", Dr = "_close_14tja_25", Lr = "_button_prev_14tja_77", D = {
  announcement: Fr,
  only_one: Ir,
  close: Dr,
  button_prev: Lr
};
function en({
  ariaAnnouncementTitle: t,
  announcements: i,
  classes: f = ""
}) {
  const [h, E] = U(0), g = () => E(h - 1 >= 0 ? h - 1 : i.length - 1), j = () => E(i.length > h + 1 ? h + 1 : 0), o = i.length === 1;
  return i.length < 1 ? null : /* @__PURE__ */ l.jsxs(
    "div",
    {
      role: "status",
      title: t,
      className: `${D.announcement} ${o ? D.only_one : ""} ${f}`,
      children: [
        !o && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: g,
            className: `${D.button} ${D.button_prev}`,
            children: /* @__PURE__ */ l.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ l.jsx("p", { children: i[h] }),
        !o && /* @__PURE__ */ l.jsx("button", { onClick: j, className: D.button, children: /* @__PURE__ */ l.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ l.jsxs("label", { className: D.close, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ l.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Nr = "_mini_menu_cjvt3_1", Yr = "_sticky_cjvt3_1", Mr = "_underline_cjvt3_26", G = {
  mini_menu: Nr,
  sticky: Yr,
  underline: Mr
};
function rn({ model: t, onScrollMonitor: i }) {
  const [f, h] = U(0), E = Ie([]), g = Ie(null), [j, o] = U(0), s = B(() => {
    i && i(), g.current && (window.scrollY > j ? g.current.classList.add(G.sticky) : g.current.classList.remove(G.sticky));
  }, [j, i]), R = B(
    (p) => {
      const y = p[0].target, O = t.findIndex((A) => A.hashId === y.id), P = O < 0 ? 0 : O, H = E.current[P];
      H !== null && p[0].isIntersecting && (H.scrollIntoViewIfNeeded(!0), h(P));
    },
    [t]
  ), b = B(() => {
    const p = new IntersectionObserver(R, {
      threshold: [0.3]
      //never accurate but it's the best
    }), y = new IntersectionObserver(R, {
      threshold: [1]
    });
    return t.forEach((O) => {
      const P = document.getElementById(O.hashId);
      P !== null && (P.clientHeight < window.innerHeight ? y.observe(P) : p.observe(P));
    }), [p, y];
  }, [R, t]), T = B(
    (p) => () => {
      h(p);
    },
    []
  );
  return X(() => {
    var y;
    const p = b();
    return o(((y = g.current) == null ? void 0 : y.getBoundingClientRect().top) || 0), s(), window.addEventListener("scroll", s), () => {
      window.removeEventListener("scroll", s), p.forEach((O) => O.disconnect());
    };
  }, [s, b]), /* @__PURE__ */ l.jsx("nav", { className: G.mini_menu, ref: g, children: t.map((p, y) => /* @__PURE__ */ l.jsxs(Z.Fragment, { children: [
    y !== 0 && /* @__PURE__ */ l.jsx("div", { role: "separator" }),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: `#${p.hashId}`,
        ref: (O) => {
          E.current[y] = O;
        },
        className: y === f ? `${G.underline} italic` : void 0,
        onClick: T(y),
        children: p.title
      }
    )
  ] }, p.hashId)) });
}
export {
  Qr as Accordion,
  en as Announcement,
  Xr as Copyright,
  Zr as ErrorPage,
  Gr as Footer,
  Kr as Logo,
  rn as MiniMenu,
  Ur as consoleReportHandler,
  Rr as debounce,
  Hr as gaReportHandler,
  Jr as htmlConvertor,
  zr as reportWebVitals,
  Br as useNavigationListener,
  qr as useWindowListener
};
