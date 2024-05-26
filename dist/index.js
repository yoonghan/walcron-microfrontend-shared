import Z, { useEffect as X, useState as B, useCallback as G, useMemo as yr, useRef as Ie } from "react";
const Hr = ({
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
      const _ = E.detail;
      f.pathname !== _ && f.navigate(_);
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
function zr(t) {
  console.log(t);
}
function Er(t) {
  const i = t.value;
  return t.name === "CLS" ? Math.round(i * 1e3) : Math.round(i);
}
function Jr(t) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: t.name,
    eventValue: Er(t),
    eventLabel: t.id,
    nonInteraction: !0
  });
}
const qr = (t) => {
  t && t instanceof Function && import("./web-vitals-C2duWsRR.js").then(({ onCLS: i, onFID: f, onFCP: h, onLCP: E, onTTFB: _ }) => {
    i(t), f(t), h(t), E(t), _(t);
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
var ue = { exports: {} }, Y = {};
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
function jr() {
  if (De)
    return Y;
  De = 1;
  var t = Z, i = Symbol.for("react.element"), f = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(o, s, x) {
    var m, p = {}, g = null, C = null;
    x !== void 0 && (g = "" + x), s.key !== void 0 && (g = "" + s.key), s.ref !== void 0 && (C = s.ref);
    for (m in s)
      h.call(s, m) && !_.hasOwnProperty(m) && (p[m] = s[m]);
    if (o && o.defaultProps)
      for (m in s = o.defaultProps, s)
        p[m] === void 0 && (p[m] = s[m]);
    return { $$typeof: i, type: o, key: g, ref: C, props: p, _owner: E.current };
  }
  return Y.Fragment = f, Y.jsx = j, Y.jsxs = j, Y;
}
var M = {};
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
function xr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Z, i = Symbol.for("react.element"), f = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), I = Symbol.iterator, U = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[U];
      return typeof r == "function" ? r : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        Ne("error", e, n);
      }
    }
    function Ne(e, r, n) {
      {
        var a = S.ReactDebugCurrentFrame, d = a.getStackAddendum();
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
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === _ || Ue || e === E || e === x || e === m || Be || e === C || Ye || Me || Ve || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === p || e.$$typeof === j || e.$$typeof === o || e.$$typeof === s || // This needs to include all possible module reference object
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
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case f:
          return "Portal";
        case _:
          return "Profiler";
        case E:
          return "StrictMode";
        case x:
          return "Suspense";
        case m:
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
          case p:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case g: {
            var d = e, v = d._payload, u = d._init;
            try {
              return O(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, he, pe, ge, _e, be, me, ye;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Je() {
      {
        if (D === 0) {
          he = console.log, pe = console.info, ge = console.warn, _e = console.error, be = console.group, me = console.groupCollapsed, ye = console.groupEnd;
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
        D++;
      }
    }
    function qe() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: he
            }),
            info: P({}, e, {
              value: pe
            }),
            warn: P({}, e, {
              value: ge
            }),
            error: P({}, e, {
              value: _e
            }),
            group: P({}, e, {
              value: be
            }),
            groupCollapsed: P({}, e, {
              value: me
            }),
            groupEnd: P({}, e, {
              value: ye
            })
          });
        }
        D < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = S.ReactCurrentDispatcher, ee;
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
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (T) {
              a = T;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var l = T.stack.split(`
`), w = a.stack.split(`
`), b = l.length - 1, y = w.length - 1; b >= 1 && y >= 0 && l[b] !== w[y]; )
            y--;
          for (; b >= 1 && y >= 0; b--, y--)
            if (l[b] !== w[y]) {
              if (b !== 1 || y !== 1)
                do
                  if (b--, y--, y < 0 || l[b] !== w[y]) {
                    var k = `
` + l[b].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, k), k;
                  }
                while (b >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = v, qe(), Error.prepareStackTrace = d;
      }
      var $ = e ? e.displayName || e.name : "", A = $ ? z($) : "";
      return typeof e == "function" && J.set(e, A), A;
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
        case x:
          return z("Suspense");
        case m:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ge(e.render);
          case p:
            return q(e.type, r, n);
          case g: {
            var a = e, d = a._payload, v = a._init;
            try {
              return q(v(d), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, je = {}, xe = S.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(n);
      } else
        xe.setExtraStackFrame(null);
    }
    function Ze(e, r, n, a, d) {
      {
        var v = Function.call.bind(L);
        for (var u in e)
          if (v(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((a || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              l = e[u](r, u, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              l = b;
            }
            l && !(l instanceof Error) && (K(d), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof l), K(null)), l instanceof Error && !(l.message in je) && (je[l.message] = !0, K(d), R("Failed %s type: %s", n, l.message), K(null));
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
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), we(e);
    }
    var N = S.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, ke, te;
    te = {};
    function tr(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var n = O(N.current.type);
        te[n] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(N.current.type), e.ref), te[n] = !0);
      }
    }
    function ir(e, r) {
      {
        var n = function() {
          Ce || (Ce = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          ke || (ke = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, a, d, v, u) {
      var l = {
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
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function lr(e, r, n, a, d) {
      {
        var v, u = {}, l = null, w = null;
        n !== void 0 && (Te(n), l = "" + n), ar(r) && (Te(r.key), l = "" + r.key), tr(r) && (w = r.ref, or(r, d));
        for (v in r)
          L.call(r, v) && !nr.hasOwnProperty(v) && (u[v] = r[v]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (v in b)
            u[v] === void 0 && (u[v] = b[v]);
        }
        if (l || w) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && ir(u, y), w && sr(u, y);
        }
        return cr(e, l, w, d, a, N.current, u);
      }
    }
    var ae = S.ReactCurrentOwner, Oe = S.ReactDebugCurrentFrame;
    function W(e) {
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
          var e = O(ae.current.type);
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
        e && e._owner && e._owner !== ae.current && (a = " It was passed a child from " + O(e._owner.type) + "."), W(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), W(null);
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
        r.$$typeof === p))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = O(r);
          Ze(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var d = O(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            W(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var $e = {};
    function Fe(e, r, n, a, d, v) {
      {
        var u = He(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ur();
          w ? l += w : l += Se();
          var b;
          e === null ? b = "null" : ne(e) ? b = "array" : e !== void 0 && e.$$typeof === i ? (b = "<" + (O(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, l);
        }
        var y = lr(e, r, n, d, v);
        if (y == null)
          return y;
        if (u) {
          var k = r.children;
          if (k !== void 0)
            if (a)
              if (ne(k)) {
                for (var $ = 0; $ < k.length; $++)
                  We(k[$], e);
                Object.freeze && Object.freeze(k);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(k, e);
        }
        if (L.call(r, "key")) {
          var A = O(e), T = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), se = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[A + se]) {
            var br = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, A, br, A), $e[A + se] = !0;
          }
        }
        return e === h ? vr(y) : dr(y), y;
      }
    }
    function hr(e, r, n) {
      return Fe(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Fe(e, r, n, !1);
    }
    var gr = pr, _r = hr;
    M.Fragment = h, M.jsx = gr, M.jsxs = _r;
  }()), M;
}
process.env.NODE_ENV === "production" ? ue.exports = jr() : ue.exports = xr();
var c = ue.exports;
const ce = `
`, fe = "[\\.|,]", wr = new RegExp(
  `.*\\]${fe}?$`
), Tr = new RegExp(
  `\\]${fe}?$`,
  "g"
), Cr = new RegExp(
  `${fe}$`
);
function Kr(t, i) {
  function f(o, s) {
    if (o.match(wr) && o.indexOf("|") > -1) {
      const x = o.replace(
        Tr,
        "]"
      ), p = x.substring(
        1,
        x.length - 1
      ).split("|"), g = p[0], C = p[1].replaceAll(
        ce,
        " "
      );
      return /* @__PURE__ */ c.jsxs(Z.Fragment, { children: [
        i(g, C),
        o.match(Cr) ? `${o.slice(-1)}` : ""
      ] }, s);
    }
    return o;
  }
  const j = ((o) => {
    const s = o.split("|");
    return s.length > 1 ? s.map((x) => {
      const m = x.split("]");
      return m.length === 2 ? `${m[0].replaceAll(
        " ",
        ce
      )}]${m[1]}` : x;
    }).join("|") : o;
  })(t).split(" ").map((o, s) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ c.jsx("strong", { children: o.substring(1, o.length) }, s) : o.startsWith("[") ? f(o, s) : o === "!!" ? /* @__PURE__ */ c.jsx("br", {}, s) : o.replaceAll(ce, " ")).reduce(
    (o, s) => [...o, " ", s],
    []
  );
  return j.shift(), /* @__PURE__ */ c.jsx(c.Fragment, { children: j });
}
const Gr = () => {
  const [t, i] = B({
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
}, Xr = ({ color: t }) => /* @__PURE__ */ c.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ c.jsx("span", { children: t })
] }), kr = "_footer_ttkno_1", Or = {
  footer: kr
}, Zr = ({
  companyName: t = "Walcron",
  establishedYear: i = 2014,
  lastUpdatedYear: f
}) => /* @__PURE__ */ c.jsxs("div", { className: Or.footer, children: [
  /* @__PURE__ */ c.jsx("hr", {}),
  /* @__PURE__ */ c.jsxs("div", { children: [
    t,
    " ",
    i,
    " - ",
    f,
    " ©"
  ] })
] }), Sr = "_copyright_1c7c9_1", Pr = {
  copyright: Sr
}, Qr = ({
  companyName: t = "Walcron",
  link: i = "/",
  lastUpdatedYear: f
}) => /* @__PURE__ */ c.jsxs("div", { className: Pr.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ c.jsx("a", { color: "inherit", href: i, children: t }),
  " ",
  f,
  "."
] });
function en({
  statusText: t,
  message: i
}) {
  return /* @__PURE__ */ c.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ c.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ c.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ c.jsx("p", { children: /* @__PURE__ */ c.jsx("i", { children: t || i || "Error message is unknown." }) })
  ] });
}
const Ar = "_accordion_1gi8s_1", Wr = "_tab_1gi8s_27", $r = "_tab__content_1gi8s_38", le = {
  accordion: Ar,
  tab: Wr,
  tab__content: $r
};
function rn({
  model: t,
  groupName: i,
  isSingle: f = !0
}) {
  const [h, E] = B(""), _ = G(
    (o) => {
      const s = o.currentTarget;
      h === s.value ? (s.checked = !1, E("")) : E(s.value);
    },
    [h]
  ), j = yr(
    () => t.map((o, s) => /* @__PURE__ */ c.jsxs("div", { className: le.tab, children: [
      /* @__PURE__ */ c.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: f ? "radio" : "checkbox",
            value: s,
            name: i,
            onClick: f ? _ : void 0
          }
        )
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: le.tab__content, children: /* @__PURE__ */ c.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [t, f, i, _]
  );
  return /* @__PURE__ */ c.jsx("div", { className: le.accordion, children: j });
}
const Fr = "_announcement_14tja_1", Ir = "_only_one_14tja_11", Dr = "_close_14tja_25", Lr = "_button_prev_14tja_77", F = {
  announcement: Fr,
  only_one: Ir,
  close: Dr,
  button_prev: Lr
};
function nn({
  ariaAnnouncementTitle: t,
  announcements: i,
  classes: f = ""
}) {
  const [h, E] = B(0), _ = () => E(h - 1 >= 0 ? h - 1 : i.length - 1), j = () => E(i.length > h + 1 ? h + 1 : 0), o = i.length === 1;
  return i.length < 1 ? null : /* @__PURE__ */ c.jsxs(
    "div",
    {
      role: "status",
      title: t,
      className: `${F.announcement} ${o ? F.only_one : ""} ${f}`,
      children: [
        !o && /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: _,
            className: `${F.button} ${F.button_prev}`,
            children: /* @__PURE__ */ c.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ c.jsx("p", { children: i[h] }),
        !o && /* @__PURE__ */ c.jsx("button", { onClick: j, className: F.button, children: /* @__PURE__ */ c.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ c.jsxs("label", { className: F.close, children: [
          /* @__PURE__ */ c.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ c.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Nr = "_mini_menu_nwj37_1", Yr = "_container_nwj37_21", Mr = "_separator_nwj37_26", Vr = "_sticky_nwj37_30", Br = "_underline_nwj37_36", V = {
  mini_menu: Nr,
  container: Yr,
  separator: Mr,
  sticky: Vr,
  underline: Br
};
function tn({ model: t, onScrollMonitor: i }) {
  const [f, h] = B(0), E = Ie([]), _ = Ie(null), [j, o] = B(0), s = G(() => {
    i && i(), _.current && (window.scrollY > j ? _.current.classList.add(V.sticky) : _.current.classList.remove(V.sticky));
  }, [j, i]), x = G(() => {
    const p = new IntersectionObserver(
      (g) => {
        const C = g[0].target, I = t.findIndex((S) => S.hashId === C.id), U = I < 0 ? 0 : I, H = E.current[U];
        H !== null && g[0].isIntersecting && (H.scrollIntoViewIfNeeded({
          behavior: "instant",
          inline: "center"
        }), h(U));
      },
      {
        threshold: [0.3]
        //never accurate but it's the best
      }
    );
    return t.forEach((g) => {
      const C = document.getElementById(g.hashId);
      C !== null && p.observe(C);
    }), p;
  }, [t]), m = G(
    (p) => () => {
      h(p);
    },
    []
  );
  return X(() => {
    var g;
    const p = x();
    return o(((g = _.current) == null ? void 0 : g.offsetHeight) || 0), s(), window.addEventListener("scroll", s), () => {
      window.removeEventListener("scroll", s), p.disconnect();
    };
  }, [s, x]), /* @__PURE__ */ c.jsx("nav", { className: V.mini_menu, ref: _, id: "mini-menu-nav", children: /* @__PURE__ */ c.jsx("div", { className: V.container, children: t.map((p, g) => /* @__PURE__ */ c.jsxs(Z.Fragment, { children: [
    g !== 0 && /* @__PURE__ */ c.jsx("div", { role: "separator" }),
    /* @__PURE__ */ c.jsx(
      "a",
      {
        href: `#${p.hashId}`,
        ref: (C) => {
          E.current[g] = C;
        },
        className: g === f ? `${V.underline} italic` : void 0,
        onClick: m(g),
        children: p.title
      }
    )
  ] }, p.hashId)) }) });
}
export {
  rn as Accordion,
  nn as Announcement,
  Qr as Copyright,
  en as ErrorPage,
  Zr as Footer,
  Xr as Logo,
  tn as MiniMenu,
  zr as consoleReportHandler,
  Rr as debounce,
  Jr as gaReportHandler,
  Kr as htmlConvertor,
  qr as reportWebVitals,
  Hr as useNavigationListener,
  Gr as useWindowListener
};
