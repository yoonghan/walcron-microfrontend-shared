import te, { useEffect as re, useState as D, useCallback as N, useMemo as xr, useRef as ne, memo as Er } from "react";
const on = ({
  appName: s,
  containerName: t,
  props: f
}) => {
  re(() => {
    window.dispatchEvent(
      new CustomEvent(`[${s}] navigated`, { detail: f.pathname })
    );
  }, [s, f.pathname]), re(() => {
    function l(_) {
      const m = _.detail;
      f.pathname !== m && f.navigate(m);
    }
    return window.addEventListener(
      `[${t}] navigated`,
      l
    ), () => {
      window.removeEventListener(
        `[${t}] navigated`,
        l
      );
    };
  }, [t, f]);
};
function sn(s) {
  console.log(s);
}
const jr = (s) => (t) => {
  s({
    ...t,
    delta: t.delta * 1e3
  });
}, cn = (s) => {
  s && s instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: t, onINP: f, onLCP: l }) => {
    t(jr(s)), f(s), l(s);
  });
};
function Rr(s, t) {
  let f;
  return () => {
    /* istanbul ignore if -- @preserve */
    f !== null && clearTimeout(f), f = setTimeout(() => {
      f = null, s();
    }, t);
  };
}
var pe = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function wr() {
  if (Ue)
    return J;
  Ue = 1;
  var s = te, t = Symbol.for("react.element"), f = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, _ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(i, c, g) {
    var v, R = {}, p = null, x = null;
    g !== void 0 && (p = "" + g), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (v in c)
      l.call(c, v) && !m.hasOwnProperty(v) && (R[v] = c[v]);
    if (i && i.defaultProps)
      for (v in c = i.defaultProps, c)
        R[v] === void 0 && (R[v] = c[v]);
    return { $$typeof: t, type: i, key: p, ref: x, props: R, _owner: _.current };
  }
  return J.Fragment = f, J.jsx = y, J.jsxs = y, J;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function kr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var s = te, t = Symbol.for("react.element"), f = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[A];
      return typeof r == "function" ? r : null;
    }
    var $ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        C("error", e, n);
      }
    }
    function C(e, r, n) {
      {
        var o = $.ReactDebugCurrentFrame, h = o.getStackAddendum();
        h !== "" && (r += "%s", n = n.concat([h]));
        var b = n.map(function(d) {
          return String(d);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var W = !1, ae = !1, H = !1, He = !1, Me = !1, me;
    me = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === m || Me || e === _ || e === g || e === v || He || e === x || W || ae || H || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === R || e.$$typeof === y || e.$$typeof === i || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function Ke(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var h = r.displayName || r.name || "";
      return h !== "" ? n + "(" + h + ")" : n;
    }
    function ge(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case f:
          return "Portal";
        case m:
          return "Profiler";
        case _:
          return "StrictMode";
        case g:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return ge(r) + ".Consumer";
          case y:
            var n = e;
            return ge(n._context) + ".Provider";
          case c:
            return Ke(e, e.render, "ForwardRef");
          case R:
            var o = e.displayName || null;
            return o !== null ? o : F(e.type) || "Memo";
          case p: {
            var h = e, b = h._payload, d = h._init;
            try {
              return F(d(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, M = 0, ye, xe, Ee, je, Re, we, ke;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Je() {
      {
        if (M === 0) {
          ye = console.log, xe = console.info, Ee = console.warn, je = console.error, Re = console.group, we = console.groupCollapsed, ke = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        M++;
      }
    }
    function qe() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: ye
            }),
            info: Y({}, e, {
              value: xe
            }),
            warn: Y({}, e, {
              value: Ee
            }),
            error: Y({}, e, {
              value: je
            }),
            group: Y({}, e, {
              value: Re
            }),
            groupCollapsed: Y({}, e, {
              value: we
            }),
            groupEnd: Y({}, e, {
              value: ke
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = $.ReactCurrentDispatcher, ie;
    function G(e, r, n) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (h) {
            var o = h.stack.trim().match(/\n( *(at )?)/);
            ie = o && o[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var se = !1, X;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      X = new Ge();
    }
    function Oe(e, r) {
      if (!e || se)
        return "";
      {
        var n = X.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      se = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = oe.current, oe.current = null, Je();
      try {
        if (r) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (S) {
              o = S;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (S) {
              o = S;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            o = S;
          }
          e();
        }
      } catch (S) {
        if (S && o && typeof S.stack == "string") {
          for (var u = S.stack.split(`
`), T = o.stack.split(`
`), E = u.length - 1, j = T.length - 1; E >= 1 && j >= 0 && u[E] !== T[j]; )
            j--;
          for (; E >= 1 && j >= 0; E--, j--)
            if (u[E] !== T[j]) {
              if (E !== 1 || j !== 1)
                do
                  if (E--, j--, j < 0 || u[E] !== T[j]) {
                    var P = `
` + u[E].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, P), P;
                  }
                while (E >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        se = !1, oe.current = b, qe(), Error.prepareStackTrace = h;
      }
      var U = e ? e.displayName || e.name : "", B = U ? G(U) : "";
      return typeof e == "function" && X.set(e, B), B;
    }
    function Xe(e, r, n) {
      return Oe(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Z(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Ze(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case g:
          return G("Suspense");
        case v:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Xe(e.render);
          case R:
            return Z(e.type, r, n);
          case p: {
            var o = e, h = o._payload, b = o._init;
            try {
              return Z(b(h), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Ce = {}, Se = $.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var r = e._owner, n = Z(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(n);
      } else
        Se.setExtraStackFrame(null);
    }
    function Qe(e, r, n, o, h) {
      {
        var b = Function.call.bind(z);
        for (var d in e)
          if (b(e, d)) {
            var u = void 0;
            try {
              if (typeof e[d] != "function") {
                var T = Error((o || "React class") + ": " + n + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              u = e[d](r, d, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              u = E;
            }
            u && !(u instanceof Error) && (Q(h), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, d, typeof u), Q(null)), u instanceof Error && !(u.message in Ce) && (Ce[u.message] = !0, Q(h), w("Failed %s type: %s", n, u.message), Q(null));
          }
      }
    }
    var er = Array.isArray;
    function ce(e) {
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
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function Ae(e) {
      if (nr(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Pe(e);
    }
    var K = $.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, We, le;
    le = {};
    function ar(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && K.current && r && K.current.stateNode !== r) {
        var n = F(K.current.type);
        le[n] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(K.current.type), e.ref), le[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          $e || ($e = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var n = function() {
          We || (We = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, n, o, h, b, d) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: d,
        // Record the component responsible for creating this element.
        _owner: b
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
        value: h
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, n, o, h) {
      {
        var b, d = {}, u = null, T = null;
        n !== void 0 && (Ae(n), u = "" + n), or(r) && (Ae(r.key), u = "" + r.key), ar(r) && (T = r.ref, ir(r, h));
        for (b in r)
          z.call(r, b) && !tr.hasOwnProperty(b) && (d[b] = r[b]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (b in E)
            d[b] === void 0 && (d[b] = E[b]);
        }
        if (u || T) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && sr(d, j), T && cr(d, j);
        }
        return lr(e, u, T, h, o, K.current, d);
      }
    }
    var ue = $.ReactCurrentOwner, Fe = $.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = Z(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(n);
      } else
        Fe.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ne() {
      {
        if (ue.current) {
          var e = F(ue.current.type);
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
    var De = {};
    function dr(e) {
      {
        var r = Ne();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Le(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (De[n])
          return;
        De[n] = !0;
        var o = "";
        e && e._owner && e._owner !== ue.current && (o = " It was passed a child from " + F(e._owner.type) + "."), I(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), I(null);
      }
    }
    function Ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            de(o) && Le(o, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = L(e);
          if (typeof h == "function" && h !== e.entries)
            for (var b = h.call(e), d; !(d = b.next()).done; )
              de(d.value) && Le(d.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = F(r);
          Qe(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var h = F(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
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
    var Be = {};
    function Ie(e, r, n, o, h, b) {
      {
        var d = ze(e);
        if (!d) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = fr();
          T ? u += T : u += Ne();
          var E;
          e === null ? E = "null" : ce(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (F(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, u);
        }
        var j = ur(e, r, n, h, b);
        if (j == null)
          return j;
        if (d) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (ce(P)) {
                for (var U = 0; U < P.length; U++)
                  Ye(P[U], e);
                Object.freeze && Object.freeze(P);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(P, e);
        }
        if (z.call(r, "key")) {
          var B = F(e), S = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ve = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[B + ve]) {
            var gr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, B, gr, B), Be[B + ve] = !0;
          }
        }
        return e === l ? _r(j) : vr(j), j;
      }
    }
    function hr(e, r, n) {
      return Ie(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Ie(e, r, n, !1);
    }
    var br = pr, mr = hr;
    q.Fragment = l, q.jsx = br, q.jsxs = mr;
  }()), q;
}
process.env.NODE_ENV === "production" ? pe.exports = wr() : pe.exports = kr();
var a = pe.exports;
const _e = `
`, be = "[\\.|,]", Tr = new RegExp(
  `.*\\]${be}?$`
), Or = new RegExp(
  `\\]${be}?$`,
  "g"
), Cr = new RegExp(
  `${be}$`
);
function ln(s, t) {
  function f(i, c) {
    if (i.match(Tr) && i.indexOf("|") > -1) {
      const g = i.replace(
        Or,
        "]"
      ), R = g.substring(
        1,
        g.length - 1
      ).split("|"), p = R[0], x = R[1].replaceAll(
        _e,
        " "
      );
      return /* @__PURE__ */ a.jsxs(te.Fragment, { children: [
        t(p, x),
        i.match(Cr) ? `${i.slice(-1)}` : ""
      ] }, c);
    }
    return i;
  }
  const y = ((i) => {
    const c = i.split("|");
    return c.length > 1 ? c.map((g) => {
      const v = g.split("]");
      return v.length === 2 ? `${v[0].replaceAll(
        " ",
        _e
      )}]${v[1]}` : g;
    }).join("|") : i;
  })(s).split(" ").map((i, c) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ a.jsx("strong", { children: i.substring(1, i.length) }, c) : i.startsWith("[") ? f(i, c) : i === "!!" ? /* @__PURE__ */ a.jsx("br", {}, c) : i.replaceAll(_e, " ")).reduce(
    (i, c) => [...i, " ", c],
    []
  );
  return y.shift(), /* @__PURE__ */ a.jsx(a.Fragment, { children: y });
}
const un = () => {
  const [s, t] = D({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return re(() => {
    const f = Rr(function() {
      t({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), s;
}, Sr = "_accordion_okvze_1", Pr = "_tab_okvze_27", Ar = "_tab__content_okvze_38", he = {
  accordion: Sr,
  tab: Pr,
  tab__content: Ar
};
function fn({
  model: s,
  groupName: t,
  isSingle: f = !0
}) {
  const [l, _] = D(""), m = N(
    (i) => {
      const c = i.currentTarget;
      l === c.value ? (c.checked = !1, _("")) : _(c.value);
    },
    [l]
  ), y = xr(
    () => s.map((i, c) => /* @__PURE__ */ a.jsxs("div", { className: he.tab, children: [
      /* @__PURE__ */ a.jsxs("label", { children: [
        i.label,
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: f ? "radio" : "checkbox",
            value: c,
            name: t,
            onClick: f ? m : void 0
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: he.tab__content, children: /* @__PURE__ */ a.jsx("p", { children: i.content }) })
    ] }, i.label)),
    [s, f, t, m]
  );
  return /* @__PURE__ */ a.jsx("div", { className: he.accordion, children: y });
}
const $r = "_announcement_149a8_1", Wr = "_only_one_149a8_11", Fr = "_close_149a8_25", Nr = "_button_prev_149a8_77", V = {
  announcement: $r,
  only_one: Wr,
  close: Fr,
  button_prev: Nr
};
function dn({
  ariaAnnouncementTitle: s,
  announcements: t,
  classes: f = ""
}) {
  const [l, _] = D(0), m = () => _(l - 1 >= 0 ? l - 1 : t.length - 1), y = () => _(t.length > l + 1 ? l + 1 : 0), i = t.length === 1;
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
            onClick: m,
            className: `${V.button} ${V.button_prev}`,
            children: /* @__PURE__ */ a.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ a.jsx("p", { children: t[l] }),
        !i && /* @__PURE__ */ a.jsx("button", { onClick: y, className: V.button, children: /* @__PURE__ */ a.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ a.jsx("label", { className: V.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ a.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Dr = "_minimenu_1c4fs_1", Lr = "_sticky_1c4fs_1", Yr = "_underline_1c4fs_27", ee = {
  minimenu: Dr,
  sticky: Lr,
  underline: Yr
};
function vn({ model: s, onScrollMonitor: t }) {
  const [f, l] = D(0), _ = ne([]), m = ne(null), [y, i] = D(0), c = N(() => {
    t && t(), m.current && (window.scrollY > y ? m.current.classList.add(ee.sticky) : m.current.classList.remove(ee.sticky));
  }, [y, t]), g = N(
    (p) => {
      const x = p[0].target, O = s.findIndex(($) => $.hashId === x.id), A = O < 0 ? 0 : O, L = _.current[A];
      L !== null && p[0].isIntersecting && (L.scrollIntoViewIfNeeded(!0), l(A));
    },
    [s]
  ), v = N(() => {
    const p = new IntersectionObserver(g, {
      threshold: [0.3]
      //never accurate but it's the best
    }), x = new IntersectionObserver(g, {
      threshold: [1]
    });
    return s.forEach((O) => {
      const A = document.getElementById(O.hashId);
      A !== null && (A.clientHeight < window.innerHeight ? x.observe(A) : p.observe(A));
    }), [p, x];
  }, [g, s]), R = N(
    (p) => () => {
      l(p);
    },
    []
  );
  return re(() => {
    var x;
    const p = v();
    return i(((x = m.current) == null ? void 0 : x.getBoundingClientRect().top) || 0), c(), window.addEventListener("scroll", c), () => {
      window.removeEventListener("scroll", c), p.forEach((O) => O.disconnect());
    };
  }, [c, v]), /* @__PURE__ */ a.jsx("nav", { className: ee.minimenu, ref: m, children: s.map((p, x) => /* @__PURE__ */ a.jsxs(te.Fragment, { children: [
    x !== 0 && /* @__PURE__ */ a.jsx("div", { role: "separator" }),
    /* @__PURE__ */ a.jsx(
      "a",
      {
        href: `#${p.hashId}`,
        ref: (O) => {
          _.current[x] = O;
        },
        className: x === f ? `${ee.underline} italic` : void 0,
        onClick: R(x),
        children: /* @__PURE__ */ a.jsx("span", { children: p.title })
      }
    )
  ] }, p.hashId)) });
}
const Br = "_desktop__nav_ccjnd_1", Ir = "_mobile__nav_ccjnd_1", Ur = "_top_menu_container_ccjnd_6", Vr = "_expand_ccjnd_12", Hr = "_expand_dummy_ccjnd_13", Mr = "_home_logo_ccjnd_67", zr = "_subnav_content_ccjnd_78", Kr = "_subnav_ccjnd_78", Jr = "_open_ccjnd_88", qr = "_grow_ccjnd_1", Gr = "_menu_ccjnd_117", Xr = "_hamb_ccjnd_144", Zr = "_hamb_line_ccjnd_149", Qr = "_top__menu_ccjnd_175", en = "_side__menu_ccjnd_176", k = {
  desktop__nav: Br,
  mobile__nav: Ir,
  top_menu_container: Ur,
  expand: Vr,
  expand_dummy: Hr,
  home_logo: Mr,
  subnav_content: zr,
  subnav: Kr,
  open: Jr,
  grow: qr,
  menu: Gr,
  "mobile-menu": "_mobile-menu_ccjnd_137",
  hamb: Xr,
  hamb_line: Zr,
  top__menu: Qr,
  side__menu: en
};
function rn({
  menuLink: s,
  topMenuItem: t,
  subMenu: f
}) {
  const [l, _] = D(!1), m = ne(null), y = N(() => {
    _(!l);
  }, [l]), i = N(
    (g) => {
      (g.key === "Escape" || g.key === "ArrowUp") && _(!1), g.key === "ArrowDown" && _(!0);
    },
    []
  ), c = N(
    (g) => {
      var R;
      let v = (R = g.relatedTarget) == null ? void 0 : R.parentNode;
      for (let p = 0; p < 8; p++)
        if (v = v == null ? void 0 : v.parentNode, v === m.current)
          return;
      _(!1);
    },
    []
  );
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs(
    "li",
    {
      className: `${k.subnav} ${l ? k.open : ""}`,
      onBlur: c,
      ref: m,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: k.top_menu_container, children: [
          s(t.label, t.url, void 0),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: y,
              onKeyUp: i,
              "aria-label": `${t.label}`,
              "aria-expanded": l,
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
  unCheckSideMenu: l
}) {
  const [_, m] = D(!1), y = N(() => {
    m(!_);
  }, [_]);
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs("li", { className: k.subnav, role: "menu", children: [
    /* @__PURE__ */ a.jsx(
      "label",
      {
        className: k.top__menu,
        "aria-label": `Expandable ${t.label}`,
        children: /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            name: "top_menu",
            value: t.label,
            onClick: y,
            "aria-expanded": _,
            "aria-haspopup": !0,
            role: "menuitemcheckbox"
          }
        )
      }
    ),
    s(t.label, t.url, l),
    /* @__PURE__ */ a.jsx("div", { className: k.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: f(t.items, t.url, l) }) })
  ] }, t.label) : /* @__PURE__ */ a.jsx("li", { children: s(t.label, t.url, l) }, t.label);
}
function tn({
  menuLink: s,
  homeLink: t,
  homeLogoLink: f,
  model: l,
  shortcutComponent: _,
  mobileStyle: m = {},
  desktopStyle: y = {},
  desktopClassName: i = "",
  mobileClassName: c = "",
  menuName: g = void 0
}) {
  const v = ne(null), [R, p] = D(!1), x = (C, W) => W === void 0 || W === "" ? C : W.replace(/^#/, `${C}#`), O = () => {
    v.current && (v.current.checked = !1, document.body.style.overflow = "auto");
  }, A = (C) => {
    const W = C.target.checked;
    p(W), document.body.style.overflow = W ? "hidden" : "auto";
  }, L = (C, W, ae) => C.map((H) => /* @__PURE__ */ a.jsx("li", { children: s(
    H.label,
    x(W, H.url),
    ae
  ) }, H.label)), $ = l.map((C) => /* @__PURE__ */ a.jsx(
    rn,
    {
      menuLink: s,
      topMenuItem: C,
      subMenu: L
    },
    C.label
  )), w = l.map((C) => /* @__PURE__ */ a.jsx(
    nn,
    {
      menuLink: s,
      topMenuItem: C,
      subMenu: L,
      unCheckSideMenu: O
    },
    C.label
  ));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `${k.mobile__nav} ${c}`,
        style: m,
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: k["mobile-menu"], children: [
            /* @__PURE__ */ a.jsxs(
              "label",
              {
                className: k.hamb,
                "aria-label": g || "Hamburger Menu",
                children: [
                  /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      className: k.side__menu,
                      type: "checkbox",
                      ref: v,
                      onChange: A,
                      "aria-expanded": R === !0,
                      "aria-haspopup": !0,
                      "aria-controls": "hamburger-menu"
                    }
                  ),
                  /* @__PURE__ */ a.jsx("span", { className: k.hamb_line })
                ]
              }
            ),
            t("/", O, -1),
            _ && _
          ] }),
          /* @__PURE__ */ a.jsxs("nav", { className: k.menu, children: [
            /* @__PURE__ */ a.jsx("ul", { role: "none", id: "hamburger-menu", "aria-labelledby": "hamburger-menu", children: w }),
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
        "aria-label": g,
        children: /* @__PURE__ */ a.jsxs("ul", { children: [
          /* @__PURE__ */ a.jsx("li", { children: f(k.home_logo) }),
          $,
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
  Rr as debounce,
  ln as htmlConvertor,
  cn as reportWebVitals,
  on as useNavigationListener,
  un as useWindowListener
};
