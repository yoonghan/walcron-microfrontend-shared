import te, { useEffect as H, useState as F, useCallback as D, useMemo as xr, useRef as X, memo as Er } from "react";
const on = ({
  appName: s,
  containerName: t,
  props: f
}) => {
  H(() => {
    window.dispatchEvent(
      new CustomEvent(`[${s}] navigated`, { detail: f.pathname })
    );
  }, [s, f.pathname]), H(() => {
    function c(_) {
      const g = _.detail;
      f.pathname !== g && f.navigate(g);
    }
    return window.addEventListener(
      `[${t}] navigated`,
      c
    ), () => {
      window.removeEventListener(
        `[${t}] navigated`,
        c
      );
    };
  }, [t, f]);
};
function sn(s) {
  console.log(s);
}
const Rr = (s) => (t) => {
  s({
    ...t,
    delta: t.delta * 1e3
  });
}, ln = (s) => {
  s && s instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: t, onINP: f, onLCP: c }) => {
    t(Rr(s)), f(s), c(s);
  });
};
function jr(s, t) {
  let f;
  return () => {
    /* istanbul ignore if -- @preserve */
    f !== null && clearTimeout(f), f = setTimeout(() => {
      f = null, s();
    }, t);
  };
}
var me = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function wr() {
  if (He)
    return q;
  He = 1;
  var s = te, t = Symbol.for("react.element"), f = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, _ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(i, l, h) {
    var d, j = {}, b = null, x = null;
    h !== void 0 && (b = "" + h), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (d in l)
      c.call(l, d) && !g.hasOwnProperty(d) && (j[d] = l[d]);
    if (i && i.defaultProps)
      for (d in l = i.defaultProps, l)
        j[d] === void 0 && (j[d] = l[d]);
    return { $$typeof: t, type: i, key: b, ref: x, props: j, _owner: _.current };
  }
  return q.Fragment = f, q.jsx = y, q.jsxs = y, q;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function kr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var s = te, t = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, P = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = S && e[S] || e[P];
      return typeof r == "function" ? r : null;
    }
    var A = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        ae("error", e, n);
      }
    }
    function ae(e, r, n) {
      {
        var o = A.ReactDebugCurrentFrame, p = o.getStackAddendum();
        p !== "" && (r += "%s", n = n.concat([p]));
        var m = n.map(function(v) {
          return String(v);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var ie = !1, T = !1, W = !1, oe = !1, M = !1, ye;
    ye = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === g || M || e === _ || e === h || e === d || oe || e === x || ie || T || W || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === j || e.$$typeof === y || e.$$typeof === i || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ye || e.getModuleId !== void 0));
    }
    function ze(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var p = r.displayName || r.name || "";
      return p !== "" ? n + "(" + p + ")" : n;
    }
    function xe(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case f:
          return "Portal";
        case g:
          return "Profiler";
        case _:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return xe(r) + ".Consumer";
          case y:
            var n = e;
            return xe(n._context) + ".Provider";
          case l:
            return ze(e, e.render, "ForwardRef");
          case j:
            var o = e.displayName || null;
            return o !== null ? o : N(e.type) || "Memo";
          case b: {
            var p = e, m = p._payload, v = p._init;
            try {
              return N(v(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, J = 0, Ee, Re, je, we, ke, Te, Oe;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Ke() {
      {
        if (J === 0) {
          Ee = console.log, Re = console.info, je = console.warn, we = console.error, ke = console.group, Te = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
        J++;
      }
    }
    function qe() {
      {
        if (J--, J === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: Ee
            }),
            info: Y({}, e, {
              value: Re
            }),
            warn: Y({}, e, {
              value: je
            }),
            error: Y({}, e, {
              value: we
            }),
            group: Y({}, e, {
              value: ke
            }),
            groupCollapsed: Y({}, e, {
              value: Te
            }),
            groupEnd: Y({}, e, {
              value: Oe
            })
          });
        }
        J < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = A.ReactCurrentDispatcher, le;
    function Z(e, r, n) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (p) {
            var o = p.stack.trim().match(/\n( *(at )?)/);
            le = o && o[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ce = !1, Q;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Ge();
    }
    function Se(e, r) {
      if (!e || ce)
        return "";
      {
        var n = Q.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ce = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = se.current, se.current = null, Ke();
      try {
        if (r) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (C) {
              o = C;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (C) {
              o = C;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            o = C;
          }
          e();
        }
      } catch (C) {
        if (C && o && typeof C.stack == "string") {
          for (var u = C.stack.split(`
`), O = o.stack.split(`
`), E = u.length - 1, R = O.length - 1; E >= 1 && R >= 0 && u[E] !== O[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (u[E] !== O[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || u[E] !== O[R]) {
                    var $ = `
` + u[E].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, $), $;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ce = !1, se.current = m, qe(), Error.prepareStackTrace = p;
      }
      var U = e ? e.displayName || e.name : "", B = U ? Z(U) : "";
      return typeof e == "function" && Q.set(e, B), B;
    }
    function Xe(e, r, n) {
      return Se(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ee(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, Ze(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case h:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Xe(e.render);
          case j:
            return ee(e.type, r, n);
          case b: {
            var o = e, p = o._payload, m = o._init;
            try {
              return ee(m(p), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, $e = {}, Pe = A.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Qe(e, r, n, o, p) {
      {
        var m = Function.call.bind(z);
        for (var v in e)
          if (m(e, v)) {
            var u = void 0;
            try {
              if (typeof e[v] != "function") {
                var O = Error((o || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              u = e[v](r, v, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              u = E;
            }
            u && !(u instanceof Error) && (re(p), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, v, typeof u), re(null)), u instanceof Error && !(u.message in $e) && ($e[u.message] = !0, re(p), w("Failed %s type: %s", n, u.message), re(null));
          }
      }
    }
    var er = Array.isArray;
    function ue(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function nr(e) {
      try {
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function We(e) {
      if (nr(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Ae(e);
    }
    var K = A.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, Fe, fe;
    fe = {};
    function ar(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && K.current && r && K.current.stateNode !== r) {
        var n = N(K.current.type);
        fe[n] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(K.current.type), e.ref), fe[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          Ne || (Ne = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var n = function() {
          Fe || (Fe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, o, p, m, v) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: v,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, n, o, p) {
      {
        var m, v = {}, u = null, O = null;
        n !== void 0 && (We(n), u = "" + n), ir(r) && (We(r.key), u = "" + r.key), ar(r) && (O = r.ref, or(r, p));
        for (m in r)
          z.call(r, m) && !tr.hasOwnProperty(m) && (v[m] = r[m]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (m in E)
            v[m] === void 0 && (v[m] = E[m]);
        }
        if (u || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && sr(v, R), O && lr(v, R);
        }
        return cr(e, u, O, p, o, K.current, v);
      }
    }
    var de = A.ReactCurrentOwner, De = A.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(n);
      } else
        De.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Le() {
      {
        if (de.current) {
          var e = N(de.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function fr(e) {
      return "";
    }
    var Ye = {};
    function dr(e) {
      {
        var r = Le();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (Ye[n])
          return;
        Ye[n] = !0;
        var o = "";
        e && e._owner && e._owner !== de.current && (o = " It was passed a child from " + N(e._owner.type) + "."), I(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), I(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            _e(o) && Be(o, r);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = L(e);
          if (typeof p == "function" && p !== e.entries)
            for (var m = p.call(e), v; !(v = m.next()).done; )
              _e(v.value) && Be(v.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = N(r);
          Qe(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var p = N(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            I(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ue = {};
    function Ve(e, r, n, o, p, m) {
      {
        var v = Je(e);
        if (!v) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = fr();
          O ? u += O : u += Le();
          var E;
          e === null ? E = "null" : ue(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (N(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, u);
        }
        var R = ur(e, r, n, p, m);
        if (R == null)
          return R;
        if (v) {
          var $ = r.children;
          if ($ !== void 0)
            if (o)
              if (ue($)) {
                for (var U = 0; U < $.length; U++)
                  Ie($[U], e);
                Object.freeze && Object.freeze($);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie($, e);
        }
        if (z.call(r, "key")) {
          var B = N(e), C = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), pe = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[B + pe]) {
            var gr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pe, B, gr, B), Ue[B + pe] = !0;
          }
        }
        return e === c ? _r(R) : vr(R), R;
      }
    }
    function pr(e, r, n) {
      return Ve(e, r, n, !0);
    }
    function hr(e, r, n) {
      return Ve(e, r, n, !1);
    }
    var br = hr, mr = pr;
    G.Fragment = c, G.jsx = br, G.jsxs = mr;
  }()), G;
}
process.env.NODE_ENV === "production" ? me.exports = wr() : me.exports = kr();
var a = me.exports;
const he = `
`, ge = "[\\.|,]", Tr = new RegExp(
  `.*\\]${ge}?$`
), Or = new RegExp(
  `\\]${ge}?$`,
  "g"
), Cr = new RegExp(
  `${ge}$`
);
function cn(s, t) {
  function f(i, l) {
    if (i.match(Tr) && i.indexOf("|") > -1) {
      const h = i.replace(
        Or,
        "]"
      ), j = h.substring(
        1,
        h.length - 1
      ).split("|"), b = j[0], x = j[1].replaceAll(
        he,
        " "
      );
      return /* @__PURE__ */ a.jsxs(te.Fragment, { children: [
        t(b, x),
        i.match(Cr) ? `${i.slice(-1)}` : ""
      ] }, l);
    }
    return i;
  }
  const y = ((i) => {
    const l = i.split("|");
    return l.length > 1 ? l.map((h) => {
      const d = h.split("]");
      return d.length === 2 ? `${d[0].replaceAll(
        " ",
        he
      )}]${d[1]}` : h;
    }).join("|") : i;
  })(s).split(" ").map((i, l) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ a.jsx("strong", { children: i.substring(1, i.length) }, l) : i.startsWith("[") ? f(i, l) : i === "!!" ? /* @__PURE__ */ a.jsx("br", {}, l) : i.replaceAll(he, " ")).reduce(
    (i, l) => [...i, " ", l],
    []
  );
  return y.shift(), /* @__PURE__ */ a.jsx(a.Fragment, { children: y });
}
const un = () => {
  const [s, t] = F({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return H(() => {
    const f = jr(function() {
      t({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), s;
}, Sr = "_accordion_okvze_1", $r = "_tab_okvze_27", Pr = "_tab__content_okvze_38", be = {
  accordion: Sr,
  tab: $r,
  tab__content: Pr
};
function fn({
  model: s,
  groupName: t,
  isSingle: f = !0
}) {
  const [c, _] = F(""), g = D(
    (i) => {
      const l = i.currentTarget;
      c === l.value ? (l.checked = !1, _("")) : _(l.value);
    },
    [c]
  ), y = xr(
    () => s.map((i, l) => /* @__PURE__ */ a.jsxs("div", { className: be.tab, children: [
      /* @__PURE__ */ a.jsxs("label", { children: [
        i.label,
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: f ? "radio" : "checkbox",
            value: l,
            name: t,
            onClick: f ? g : void 0
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: be.tab__content, children: /* @__PURE__ */ a.jsx("p", { children: i.content }) })
    ] }, i.label)),
    [s, f, t, g]
  );
  return /* @__PURE__ */ a.jsx("div", { className: be.accordion, children: y });
}
const Ar = "_announcement_149a8_1", Wr = "_only_one_149a8_11", Nr = "_close_149a8_25", Fr = "_button_prev_149a8_77", V = {
  announcement: Ar,
  only_one: Wr,
  close: Nr,
  button_prev: Fr
};
function dn({
  ariaAnnouncementTitle: s,
  announcements: t,
  classes: f = ""
}) {
  const [c, _] = F(0), g = () => _(c - 1 >= 0 ? c - 1 : t.length - 1), y = () => _(t.length > c + 1 ? c + 1 : 0), i = t.length === 1;
  return t.length < 1 ? null : /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "status",
      title: s,
      className: `${V.announcement} ${i ? V.only_one : ""} ${f}`,
      children: [
        !i && /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: g,
            className: `${V.button} ${V.button_prev}`,
            children: /* @__PURE__ */ a.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ a.jsx("p", { children: t[c] }),
        !i && /* @__PURE__ */ a.jsx("button", { onClick: y, className: V.button, children: /* @__PURE__ */ a.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ a.jsx("label", { className: V.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ a.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Dr = "_minimenu_1c4fs_1", Lr = "_sticky_1c4fs_1", Yr = "_underline_1c4fs_27", ne = {
  minimenu: Dr,
  sticky: Lr,
  underline: Yr
};
function vn({ model: s, onScrollMonitor: t }) {
  const [f, c] = F(0), _ = X([]), g = X(null), [y, i] = F(0), l = D(() => {
    t && t(), g.current && (window.scrollY > y ? g.current.classList.add(ne.sticky) : g.current.classList.remove(ne.sticky));
  }, [y, t]), h = D(
    (b) => {
      const x = b[0].target, S = s.findIndex((A) => A.hashId === x.id), P = S < 0 ? 0 : S, L = _.current[P];
      L !== null && b[0].isIntersecting && (L.scrollIntoViewIfNeeded(!0), c(P));
    },
    [s]
  ), d = D(() => {
    const b = new IntersectionObserver(h, {
      threshold: [0.3]
      //never accurate but it's the best
    }), x = new IntersectionObserver(h, {
      threshold: [1]
    });
    return s.forEach((S) => {
      const P = document.getElementById(S.hashId);
      P !== null && (P.clientHeight < window.innerHeight ? x.observe(P) : b.observe(P));
    }), [b, x];
  }, [h, s]), j = D(
    (b) => () => {
      c(b);
    },
    []
  );
  return H(() => {
    var x;
    const b = d();
    return i(((x = g.current) == null ? void 0 : x.getBoundingClientRect().top) || 0), l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l), b.forEach((S) => S.disconnect());
    };
  }, [l, d]), /* @__PURE__ */ a.jsx("nav", { className: ne.minimenu, ref: g, children: s.map((b, x) => /* @__PURE__ */ a.jsxs(te.Fragment, { children: [
    x !== 0 && /* @__PURE__ */ a.jsx("div", { role: "separator" }),
    /* @__PURE__ */ a.jsx(
      "a",
      {
        href: `#${b.hashId}`,
        ref: (S) => {
          _.current[x] = S;
        },
        className: x === f ? `${ne.underline} italic` : void 0,
        onClick: j(x),
        children: /* @__PURE__ */ a.jsx("span", { children: b.title })
      }
    )
  ] }, b.hashId)) });
}
const Br = "_desktop__nav_pouis_1", Ir = "_mobile__nav_pouis_1", Ur = "_top_menu_container_pouis_6", Vr = "_expand_pouis_12", Hr = "_expand_dummy_pouis_13", Mr = "_home_logo_pouis_67", Jr = "_subnav_content_pouis_78", zr = "_subnav_pouis_78", Kr = "_open_pouis_88", qr = "_grow_pouis_1", Gr = "_menu_pouis_129", Xr = "_hamb_pouis_156", Zr = "_hamb_line_pouis_163", Qr = "_side__menu_pouis_191", en = "_top__menu_pouis_208", k = {
  desktop__nav: Br,
  mobile__nav: Ir,
  top_menu_container: Ur,
  expand: Vr,
  expand_dummy: Hr,
  home_logo: Mr,
  subnav_content: Jr,
  subnav: zr,
  open: Kr,
  grow: qr,
  menu: Gr,
  "mobile-menu": "_mobile-menu_pouis_149",
  hamb: Xr,
  hamb_line: Zr,
  side__menu: Qr,
  top__menu: en
};
function rn({
  menuLink: s,
  topMenuItem: t,
  subMenu: f
}) {
  const [c, _] = F(!1), g = X(null), y = D(() => {
    _(!c);
  }, [c]), i = D(
    (h) => {
      (h.key === "Escape" || h.key === "ArrowUp") && _(!1), h.key === "ArrowDown" && _(!0);
    },
    []
  ), l = D(
    (h) => {
      var j;
      let d = (j = h.relatedTarget) == null ? void 0 : j.parentNode;
      for (let b = 0; b < 8; b++)
        if (d = d == null ? void 0 : d.parentNode, d === g.current)
          return;
      _(!1);
    },
    []
  );
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs(
    "li",
    {
      className: `${k.subnav} ${c ? k.open : ""}`,
      onBlur: l,
      ref: g,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: k.top_menu_container, children: [
          s(t.label, t.url, void 0),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: y,
              onKeyUp: i,
              "aria-label": `${t.label}`,
              "aria-expanded": c,
              className: k.expand
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: k.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: f(t.items, t.url) }) })
      ]
    }
  ) : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs("div", { className: k.top_menu_container, children: [
    s(t.label, t.url),
    /* @__PURE__ */ a.jsx("div", { className: k.expand_dummy })
  ] }) }, t.label);
}
function nn({
  menuLink: s,
  topMenuItem: t,
  subMenu: f,
  unCheckSideMenu: c
}) {
  const [_, g] = F(!1), y = X(null), [i, l] = F(!1);
  H(() => {
    l(!0);
  }, []);
  const h = D(() => {
    g(!_);
  }, [_]);
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs("li", { className: k.subnav, role: "menu", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        "aria-expanded": _,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${t.label}`,
        onClick: () => {
          var d;
          (d = y.current) == null || d.click();
        },
        className: `${k.top__menu} ${i ? "show-inline" : "hide"}`
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "label",
      {
        className: `${k.top__menu} ${i ? "hide" : "show-inline"}`,
        children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              name: "top_menu",
              ref: y,
              value: t.label,
              onClick: h,
              role: "menuitemcheckbox"
            }
          ),
          `Expandable ${t.label}`
        ]
      }
    ),
    s(t.label, t.url, c),
    /* @__PURE__ */ a.jsx("div", { className: k.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: f(t.items, t.url, c) }) })
  ] }, t.label) : /* @__PURE__ */ a.jsx("li", { children: s(t.label, t.url, c) }, t.label);
}
function tn({
  menuLink: s,
  homeLink: t,
  homeLogoLink: f,
  model: c,
  shortcutComponent: _,
  mobileStyle: g = {},
  desktopStyle: y = {},
  desktopClassName: i = "",
  mobileClassName: l = "",
  menuName: h = void 0
}) {
  const d = X(null), [j, b] = F(!1), [x, S] = F(!1);
  H(() => {
    S(!0);
  }, []);
  const P = (T, W) => W === void 0 || W === "" ? T : W.replace(/^#/, `${T}#`), L = () => {
    d.current && (d.current.checked = !1, document.body.style.overflow = "auto");
  }, A = (T) => {
    const W = T.target.checked;
    b(W), document.body.style.overflow = W ? "hidden" : "auto";
  }, w = (T, W, oe) => T.map((M) => /* @__PURE__ */ a.jsx("li", { children: s(
    M.label,
    P(W, M.url),
    oe
  ) }, M.label)), ae = c.map((T) => /* @__PURE__ */ a.jsx(
    rn,
    {
      menuLink: s,
      topMenuItem: T,
      subMenu: w
    },
    T.label
  )), ie = c.map((T) => /* @__PURE__ */ a.jsx(
    nn,
    {
      menuLink: s,
      topMenuItem: T,
      subMenu: w,
      unCheckSideMenu: L
    },
    T.label
  ));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `${k.mobile__nav} ${l}`,
        style: g,
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: k["mobile-menu"], children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                "aria-expanded": j === !0,
                "aria-haspopup": !0,
                "aria-controls": "hamburger-menu",
                className: `${k.hamb} ${x ? "show" : "hide"}`,
                "aria-label": h || "Hamburger Menu",
                onClick: () => {
                  var T;
                  (T = d.current) == null || T.click();
                },
                children: /* @__PURE__ */ a.jsx("div", { className: k.hamb_line })
              }
            ),
            /* @__PURE__ */ a.jsxs("label", { className: `${x ? "hide" : "show"}`, children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  className: k.side__menu,
                  type: "checkbox",
                  ref: d,
                  onChange: A
                }
              ),
              h || "Hamburger Menu"
            ] }),
            t("/", L, -1),
            _ && _
          ] }),
          /* @__PURE__ */ a.jsxs("nav", { className: k.menu, children: [
            /* @__PURE__ */ a.jsx("ul", { role: "none", id: "hamburger-menu", "aria-labelledby": "hamburger-menu", children: ie }),
            " "
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      "nav",
      {
        className: `${k.desktop__nav} ${i}`,
        style: y,
        "aria-label": h,
        children: /* @__PURE__ */ a.jsxs("ul", { children: [
          /* @__PURE__ */ a.jsx("li", { children: f(k.home_logo) }),
          ae,
          /* @__PURE__ */ a.jsx("li", { children: _ && _ })
        ] })
      }
    )
  ] });
}
const _n = Er(tn, () => !0);
export {
  fn as Accordion,
  dn as Announcement,
  _n as Menu,
  vn as MiniMenu,
  tn as MutableMenu,
  sn as consoleReportHandler,
  jr as debounce,
  cn as htmlConvertor,
  ln as reportWebVitals,
  on as useNavigationListener,
  un as useWindowListener
};
