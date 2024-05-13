import ae, { useEffect as te, useState as oe, useCallback as br, useMemo as _r } from "react";
const Ir = ({
  appName: a,
  containerName: s,
  props: f
}) => {
  te(() => {
    window.dispatchEvent(
      new CustomEvent(`[${a}] navigated`, { detail: f.pathname })
    );
  }, [a, f.pathname]), te(() => {
    function p(m) {
      const y = m.detail;
      f.pathname !== y && f.navigate(y);
    }
    return window.addEventListener(
      `[${s}] navigated`,
      p
    ), () => {
      window.removeEventListener(
        `[${s}] navigated`,
        p
      );
    };
  }, [s, f]);
};
function Nr(a) {
  console.log(a);
}
function mr(a) {
  const s = a.value;
  return a.name === "CLS" ? Math.round(s * 1e3) : Math.round(s);
}
function Yr(a) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: a.name,
    eventValue: mr(a),
    eventLabel: a.id,
    nonInteraction: !0
  });
}
const Vr = (a) => {
  /* istanbul ignore next -- @preserve */
  a && a instanceof Function && import("./web-vitals-C2duWsRR.js").then(({ onCLS: s, onFID: f, onFCP: p, onLCP: m, onTTFB: y }) => {
    /* istanbul ignore next -- @preserve */
    s(a);
    /* istanbul ignore next -- @preserve */
    f(a);
    /* istanbul ignore next -- @preserve */
    p(a);
    /* istanbul ignore next -- @preserve */
    m(a);
    /* istanbul ignore next -- @preserve */
    y(a);
  });
};
function yr(a, s) {
  let f;
  return () => {
    /* istanbul ignore if -- @preserve */
    f !== null && clearTimeout(f), f = setTimeout(() => {
      f = null, a();
    }, s);
  };
}
var ne = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Er() {
  if (Ae)
    return N;
  Ae = 1;
  var a = ae, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, m = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(o, u, j) {
    var b, w = {}, O = null, P = null;
    j !== void 0 && (O = "" + j), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (P = u.ref);
    for (b in u)
      p.call(u, b) && !y.hasOwnProperty(b) && (w[b] = u[b]);
    if (o && o.defaultProps)
      for (b in u = o.defaultProps, u)
        w[b] === void 0 && (w[b] = u[b]);
    return { $$typeof: s, type: o, key: O, ref: P, props: w, _owner: m.current };
  }
  return N.Fragment = f, N.jsx = x, N.jsxs = x, N;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Rr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ae, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), se = Symbol.iterator, $e = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = se && e[se] || e[$e];
      return typeof r == "function" ? r : null;
    }
    var A = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, d = n.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var v = t.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Le = !1, Ie = !1, Ne = !1, Ye = !1, Ve = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === y || Ve || e === m || e === j || e === b || Ye || e === P || Le || Ie || Ne || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === x || e.$$typeof === o || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case f:
          return "Portal";
        case y:
          return "Profiler";
        case m:
          return "StrictMode";
        case j:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return ue(r) + ".Consumer";
          case x:
            var t = e;
            return ue(t._context) + ".Provider";
          case u:
            return Ue(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case O: {
            var d = e, v = d._payload, c = d._init;
            try {
              return C(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, le, fe, de, ve, pe, he, ge;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Be() {
      {
        if (D === 0) {
          le = console.log, fe = console.info, de = console.warn, ve = console.error, pe = console.group, he = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
    function He() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: le
            }),
            info: S({}, e, {
              value: fe
            }),
            warn: S({}, e, {
              value: de
            }),
            error: S({}, e, {
              value: ve
            }),
            group: S({}, e, {
              value: pe
            }),
            groupCollapsed: S({}, e, {
              value: he
            }),
            groupEnd: S({}, e, {
              value: ge
            })
          });
        }
        D < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = A.ReactCurrentDispatcher, z;
    function V(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (d) {
            var n = d.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var J = !1, M;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      M = new ze();
    }
    function _e(e, r) {
      if (!e || J)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = H.current, H.current = null, Be();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (R) {
              n = R;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var i = R.stack.split(`
`), E = n.stack.split(`
`), h = i.length - 1, g = E.length - 1; h >= 1 && g >= 0 && i[h] !== E[g]; )
            g--;
          for (; h >= 1 && g >= 0; h--, g--)
            if (i[h] !== E[g]) {
              if (h !== 1 || g !== 1)
                do
                  if (h--, g--, g < 0 || i[h] !== E[g]) {
                    var T = `
` + i[h].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (h >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        J = !1, H.current = v, He(), Error.prepareStackTrace = d;
      }
      var $ = e ? e.displayName || e.name : "", k = $ ? V($) : "";
      return typeof e == "function" && M.set(e, k), k;
    }
    function Je(e, r, t) {
      return _e(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, qe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case j:
          return V("Suspense");
        case b:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Je(e.render);
          case w:
            return U(e.type, r, t);
          case O: {
            var n = e, d = n._payload, v = n._init;
            try {
              return U(v(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, me = {}, ye = A.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, d) {
      {
        var v = Function.call.bind(L);
        for (var c in e)
          if (v(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              i = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              i = h;
            }
            i && !(i instanceof Error) && (B(d), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof i), B(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, B(d), _("Failed %s type: %s", t, i.message), B(null));
          }
      }
    }
    var Ge = Array.isArray;
    function q(e) {
      return Ge(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (Ze(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Ee(e);
    }
    var I = A.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, je, K;
    K = {};
    function er(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = C(I.current.type);
        K[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(I.current.type), e.ref), K[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          je || (je = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, n, d, v, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ir(e, r, t, n, d) {
      {
        var v, c = {}, i = null, E = null;
        t !== void 0 && (Re(t), i = "" + t), rr(r) && (Re(r.key), i = "" + r.key), er(r) && (E = r.ref, tr(r, d));
        for (v in r)
          L.call(r, v) && !Qe.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (v in h)
            c[v] === void 0 && (c[v] = h[v]);
        }
        if (i || E) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && nr(c, g), E && ar(c, g);
        }
        return or(e, i, E, d, n, I.current, c);
      }
    }
    var G = A.ReactCurrentOwner, we = A.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Te() {
      {
        if (G.current) {
          var e = C(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var Ce = {};
    function cr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + C(e._owner.type) + "."), W(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), W(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Oe(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = Fe(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), c; !(c = v.next()).done; )
              Z(c.value) && Oe(c.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var d = C(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            W(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var ke = {};
    function Pe(e, r, t, n, d, v) {
      {
        var c = Me(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = sr();
          E ? i += E : i += Te();
          var h;
          e === null ? h = "null" : q(e) ? h = "array" : e !== void 0 && e.$$typeof === s ? (h = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, i);
        }
        var g = ir(e, r, t, d, v);
        if (g == null)
          return g;
        if (c) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (q(T)) {
                for (var $ = 0; $ < T.length; $++)
                  Se(T[$], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(T, e);
        }
        if (L.call(r, "key")) {
          var k = C(e), R = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), Q = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[k + Q]) {
            var hr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, k, hr, k), ke[k + Q] = !0;
          }
        }
        return e === p ? lr(g) : ur(g), g;
      }
    }
    function fr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    Y.Fragment = p, Y.jsx = vr, Y.jsxs = pr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ne.exports = Er() : ne.exports = Rr();
var l = ne.exports;
const ee = `
`, ie = "[\\.|,]", xr = new RegExp(
  `.*\\]${ie}?$`
), jr = new RegExp(
  `\\]${ie}?$`,
  "g"
), wr = new RegExp(
  `${ie}$`
);
function Mr(a, s) {
  function f(o, u) {
    if (o.match(xr) && o.indexOf("|") > -1) {
      const j = o.replace(
        jr,
        "]"
      ), w = j.substring(
        1,
        j.length - 1
      ).split("|"), O = w[0], P = w[1].replaceAll(
        ee,
        " "
      );
      return /* @__PURE__ */ l.jsxs(ae.Fragment, { children: [
        s(O, P),
        o.match(wr) ? `${o.slice(-1)}` : ""
      ] }, u);
    }
    return o;
  }
  const x = ((o) => {
    const u = o.split("|");
    return u.length > 1 ? u.map((j) => {
      const b = j.split("]");
      return b.length === 2 ? `${b[0].replaceAll(
        " ",
        ee
      )}]${b[1]}` : j;
    }).join("|") : o;
  })(a).split(" ").map((o, u) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ l.jsx("strong", { children: o.substring(1, o.length) }, u) : o.startsWith("[") ? f(o, u) : o === "!!" ? /* @__PURE__ */ l.jsx("br", {}, u) : o.replaceAll(ee, " ")).reduce(
    (o, u) => [...o, " ", u],
    []
  );
  return x.shift(), /* @__PURE__ */ l.jsx(l.Fragment, { children: x });
}
const Ur = () => {
  const [a, s] = oe({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return te(() => {
    const f = yr(function() {
      s({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), a;
}, Br = ({ color: a }) => /* @__PURE__ */ l.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ l.jsx("span", { children: a })
] }), Tr = "_footer_ttkno_1", Cr = {
  footer: Tr
}, Hr = ({
  companyName: a = "Walcron",
  establishedYear: s = 2014,
  lastUpdatedYear: f
}) => /* @__PURE__ */ l.jsxs("div", { className: Cr.footer, children: [
  /* @__PURE__ */ l.jsx("hr", {}),
  /* @__PURE__ */ l.jsxs("div", { children: [
    a,
    " ",
    s,
    " - ",
    f,
    " ©"
  ] })
] }), Or = "_copyright_1c7c9_1", Sr = {
  copyright: Or
}, zr = ({
  companyName: a = "Walcron",
  link: s = "/",
  lastUpdatedYear: f
}) => /* @__PURE__ */ l.jsxs("div", { className: Sr.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ l.jsx("a", { color: "inherit", href: s, children: a }),
  " ",
  f,
  "."
] });
function Jr({
  statusText: a,
  message: s
}) {
  return /* @__PURE__ */ l.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ l.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ l.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ l.jsx("p", { children: /* @__PURE__ */ l.jsx("i", { children: a || s || "Error message is unknown." }) })
  ] });
}
const kr = "_accordion_1gi8s_1", Pr = "_tab_1gi8s_27", Ar = "_tab__content_1gi8s_38", re = {
  accordion: kr,
  tab: Pr,
  tab__content: Ar
};
function qr({
  model: a,
  groupName: s,
  isSingle: f = !0
}) {
  const [p, m] = oe(""), y = br(
    (o) => {
      const u = o.currentTarget;
      p === u.value ? (u.checked = !1, m("")) : m(u.value);
    },
    [p]
  ), x = _r(
    () => a.map((o, u) => /* @__PURE__ */ l.jsxs("div", { className: re.tab, children: [
      /* @__PURE__ */ l.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: f ? "radio" : "checkbox",
            value: u,
            name: s,
            onClick: f ? y : void 0
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: re.tab__content, children: /* @__PURE__ */ l.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [a, f, s, y]
  );
  return /* @__PURE__ */ l.jsx("div", { className: re.accordion, children: x });
}
const Wr = "_announcement_14tja_1", $r = "_only_one_14tja_11", Fr = "_close_14tja_25", Dr = "_button_prev_14tja_77", F = {
  announcement: Wr,
  only_one: $r,
  close: Fr,
  button_prev: Dr
};
function Kr({
  ariaAnnouncementTitle: a,
  announcements: s,
  classes: f = ""
}) {
  const [p, m] = oe(0), y = () => m(p - 1 >= 0 ? p - 1 : s.length - 1), x = () => m(s.length > p + 1 ? p + 1 : 0), o = s.length === 1;
  return s.length < 1 ? null : /* @__PURE__ */ l.jsxs(
    "div",
    {
      role: "status",
      title: a,
      className: `${F.announcement} ${o ? F.only_one : ""} ${f}`,
      children: [
        !o && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: y,
            className: `${F.button} ${F.button_prev}`,
            children: /* @__PURE__ */ l.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ l.jsx("p", { children: s[p] }),
        !o && /* @__PURE__ */ l.jsx("button", { onClick: x, className: F.button, children: /* @__PURE__ */ l.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ l.jsxs("label", { className: F.close, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ l.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
export {
  qr as Accordion,
  Kr as Announcement,
  zr as Copyright,
  Jr as ErrorPage,
  Hr as Footer,
  Br as Logo,
  Nr as consoleReportHandler,
  yr as debounce,
  Yr as gaReportHandler,
  Mr as htmlConvertor,
  Vr as reportWebVitals,
  Ir as useNavigationListener,
  Ur as useWindowListener
};
