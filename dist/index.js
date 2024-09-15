import te, { useEffect as V, useState as N, useCallback as F, useMemo as yr, useRef as X, memo as Er } from "react";
const sn = ({
  appName: s,
  containerName: t,
  props: f
}) => {
  V(() => {
    window.dispatchEvent(
      new CustomEvent(`[${s}] navigated`, { detail: f.pathname })
    );
  }, [s, f.pathname]), V(() => {
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
function ln(s) {
  console.log(s);
}
const Rr = (s) => (t) => {
  s({
    ...t,
    delta: t.delta * 1e3
  });
}, cn = (s) => {
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
var Ve;
function wr() {
  if (Ve)
    return q;
  Ve = 1;
  var s = te, t = Symbol.for("react.element"), f = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, _ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(i, l, b) {
    var d, w = {}, p = null, y = null;
    b !== void 0 && (p = "" + b), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (d in l)
      c.call(l, d) && !g.hasOwnProperty(d) && (w[d] = l[d]);
    if (i && i.defaultProps)
      for (d in l = i.defaultProps, l)
        w[d] === void 0 && (w[d] = l[d]);
    return { $$typeof: t, type: i, key: p, ref: y, props: w, _owner: _.current };
  }
  return q.Fragment = f, q.jsx = x, q.jsxs = x, q;
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
var He;
function kr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var s = te, t = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), S = Symbol.iterator, P = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = S && e[S] || e[P];
      return typeof r == "function" ? r : null;
    }
    var A = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        ae("error", e, n);
      }
    }
    function ae(e, r, n) {
      {
        var o = A.ReactDebugCurrentFrame, h = o.getStackAddendum();
        h !== "" && (r += "%s", n = n.concat([h]));
        var m = n.map(function(v) {
          return String(v);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var ie = !1, T = !1, z = !1, oe = !1, H = !1, xe;
    xe = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === g || H || e === _ || e === b || e === d || oe || e === y || ie || T || z || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === w || e.$$typeof === x || e.$$typeof === i || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === xe || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var h = r.displayName || r.name || "";
      return h !== "" ? n + "(" + h + ")" : n;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function W(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case b:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return ye(r) + ".Consumer";
          case x:
            var n = e;
            return ye(n._context) + ".Provider";
          case l:
            return Je(e, e.render, "ForwardRef");
          case w:
            var o = e.displayName || null;
            return o !== null ? o : W(e.type) || "Memo";
          case p: {
            var h = e, m = h._payload, v = h._init;
            try {
              return W(v(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, M = 0, Ee, Re, je, we, ke, Te, Oe;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Ke() {
      {
        if (M === 0) {
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
            log: L({}, e, {
              value: Ee
            }),
            info: L({}, e, {
              value: Re
            }),
            warn: L({}, e, {
              value: je
            }),
            error: L({}, e, {
              value: we
            }),
            group: L({}, e, {
              value: ke
            }),
            groupCollapsed: L({}, e, {
              value: Te
            }),
            groupEnd: L({}, e, {
              value: Oe
            })
          });
        }
        M < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = A.ReactCurrentDispatcher, le;
    function Z(e, r, n) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (h) {
            var o = h.stack.trim().match(/\n( *(at )?)/);
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
      var h = Error.prepareStackTrace;
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
        ce = !1, se.current = m, qe(), Error.prepareStackTrace = h;
      }
      var I = e ? e.displayName || e.name : "", Y = I ? Z(I) : "";
      return typeof e == "function" && Q.set(e, Y), Y;
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
        case b:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Xe(e.render);
          case w:
            return ee(e.type, r, n);
          case p: {
            var o = e, h = o._payload, m = o._init;
            try {
              return ee(m(h), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, $e = {}, Pe = A.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Qe(e, r, n, o, h) {
      {
        var m = Function.call.bind(J);
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
            u && !(u instanceof Error) && (re(h), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, v, typeof u), re(null)), u instanceof Error && !(u.message in $e) && ($e[u.message] = !0, re(h), k("Failed %s type: %s", n, u.message), re(null));
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
    function ze(e) {
      if (nr(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Ae(e);
    }
    var K = A.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ne, fe;
    fe = {};
    function ar(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && K.current && r && K.current.stateNode !== r) {
        var n = W(K.current.type);
        fe[n] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(K.current.type), e.ref), fe[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          We || (We = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ne || (Ne = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, o, h, m, v) {
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
        value: h
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, n, o, h) {
      {
        var m, v = {}, u = null, O = null;
        n !== void 0 && (ze(n), u = "" + n), ir(r) && (ze(r.key), u = "" + r.key), ar(r) && (O = r.ref, or(r, h));
        for (m in r)
          J.call(r, m) && !tr.hasOwnProperty(m) && (v[m] = r[m]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (m in E)
            v[m] === void 0 && (v[m] = E[m]);
        }
        if (u || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && sr(v, R), O && lr(v, R);
        }
        return cr(e, u, O, h, o, K.current, v);
      }
    }
    var de = A.ReactCurrentOwner, Fe = A.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(n);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function De() {
      {
        if (de.current) {
          var e = W(de.current.type);
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
    var Le = {};
    function dr(e) {
      {
        var r = De();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (Le[n])
          return;
        Le[n] = !0;
        var o = "";
        e && e._owner && e._owner !== de.current && (o = " It was passed a child from " + W(e._owner.type) + "."), B(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), B(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            _e(o) && Ye(o, r);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = D(e);
          if (typeof h == "function" && h !== e.entries)
            for (var m = h.call(e), v; !(v = m.next()).done; )
              _e(v.value) && Ye(v.value, r);
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
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = W(r);
          Qe(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var h = W(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            B(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var Ie = {};
    function Ue(e, r, n, o, h, m) {
      {
        var v = Me(e);
        if (!v) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = fr();
          O ? u += O : u += De();
          var E;
          e === null ? E = "null" : ue(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (W(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, u);
        }
        var R = ur(e, r, n, h, m);
        if (R == null)
          return R;
        if (v) {
          var $ = r.children;
          if ($ !== void 0)
            if (o)
              if (ue($)) {
                for (var I = 0; I < $.length; I++)
                  Be($[I], e);
                Object.freeze && Object.freeze($);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be($, e);
        }
        if (J.call(r, "key")) {
          var Y = W(e), C = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), he = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[Y + he]) {
            var gr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, Y, gr, Y), Ie[Y + he] = !0;
          }
        }
        return e === c ? _r(R) : vr(R), R;
      }
    }
    function hr(e, r, n) {
      return Ue(e, r, n, !0);
    }
    function br(e, r, n) {
      return Ue(e, r, n, !1);
    }
    var pr = br, mr = hr;
    G.Fragment = c, G.jsx = pr, G.jsxs = mr;
  }()), G;
}
process.env.NODE_ENV === "production" ? me.exports = wr() : me.exports = kr();
var a = me.exports;
const be = `
`, ge = "[\\.|,]", Tr = new RegExp(
  `.*\\]${ge}?$`
), Or = new RegExp(
  `\\]${ge}?$`,
  "g"
), Cr = new RegExp(
  `${ge}$`
);
function un(s, t) {
  function f(i, l) {
    if (i.match(Tr) && i.indexOf("|") > -1) {
      const b = i.replace(
        Or,
        "]"
      ), w = b.substring(
        1,
        b.length - 1
      ).split("|"), p = w[0], y = w[1].replaceAll(
        be,
        " "
      );
      return /* @__PURE__ */ a.jsxs(te.Fragment, { children: [
        t(p, y),
        i.match(Cr) ? `${i.slice(-1)}` : ""
      ] }, l);
    }
    return i;
  }
  const x = ((i) => {
    const l = i.split("|");
    return l.length > 1 ? l.map((b) => {
      const d = b.split("]");
      return d.length === 2 ? `${d[0].replaceAll(
        " ",
        be
      )}]${d[1]}` : b;
    }).join("|") : i;
  })(s).split(" ").map((i, l) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ a.jsx("strong", { children: i.substring(1, i.length) }, l) : i.startsWith("[") ? f(i, l) : i === "!!" ? /* @__PURE__ */ a.jsx("br", {}, l) : i.replaceAll(be, " ")).reduce(
    (i, l) => [...i, " ", l],
    []
  );
  return x.shift(), /* @__PURE__ */ a.jsx(a.Fragment, { children: x });
}
const fn = () => {
  const [s, t] = N({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return V(() => {
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
}, Sr = "_accordion_okvze_1", $r = "_tab_okvze_27", Pr = "_tab__content_okvze_38", pe = {
  accordion: Sr,
  tab: $r,
  tab__content: Pr
};
function dn({
  model: s,
  groupName: t,
  isSingle: f = !0
}) {
  const [c, _] = N(""), g = F(
    (i) => {
      const l = i.currentTarget;
      c === l.value ? (l.checked = !1, _("")) : _(l.value);
    },
    [c]
  ), x = yr(
    () => s.map((i, l) => /* @__PURE__ */ a.jsxs("div", { className: pe.tab, children: [
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
      /* @__PURE__ */ a.jsx("div", { className: pe.tab__content, children: /* @__PURE__ */ a.jsx("p", { children: i.content }) })
    ] }, i.label)),
    [s, f, t, g]
  );
  return /* @__PURE__ */ a.jsx("div", { className: pe.accordion, children: x });
}
const Ar = "_announcement_149a8_1", zr = "_only_one_149a8_11", Wr = "_close_149a8_25", Nr = "_button_prev_149a8_77", U = {
  announcement: Ar,
  only_one: zr,
  close: Wr,
  button_prev: Nr
};
function vn({
  ariaAnnouncementTitle: s,
  announcements: t,
  classes: f = ""
}) {
  const [c, _] = N(0), g = () => _(c - 1 >= 0 ? c - 1 : t.length - 1), x = () => _(t.length > c + 1 ? c + 1 : 0), i = t.length === 1;
  return t.length < 1 ? null : /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "status",
      title: s,
      className: `${U.announcement} ${i ? U.only_one : ""} ${f}`,
      children: [
        !i && /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: g,
            className: `${U.button} ${U.button_prev}`,
            children: /* @__PURE__ */ a.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ a.jsx("p", { children: t[c] }),
        !i && /* @__PURE__ */ a.jsx("button", { onClick: x, className: U.button, children: /* @__PURE__ */ a.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ a.jsx("label", { className: U.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ a.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Fr = "_minimenu_1c4fs_1", Dr = "_sticky_1c4fs_1", Lr = "_underline_1c4fs_27", ne = {
  minimenu: Fr,
  sticky: Dr,
  underline: Lr
};
function _n({ model: s, onScrollMonitor: t }) {
  const [f, c] = N(0), _ = X([]), g = X(null), [x, i] = N(0), l = F(() => {
    t && t(), g.current && (window.scrollY > x ? g.current.classList.add(ne.sticky) : g.current.classList.remove(ne.sticky));
  }, [x, t]), b = F(
    (p) => {
      const y = p[0].target, S = s.findIndex((A) => A.hashId === y.id), P = S < 0 ? 0 : S, D = _.current[P];
      D !== null && p[0].isIntersecting && (D.scrollIntoViewIfNeeded(!0), c(P));
    },
    [s]
  ), d = F(() => {
    const p = new IntersectionObserver(b, {
      threshold: [0.3]
      //never accurate but it's the best
    }), y = new IntersectionObserver(b, {
      threshold: [1]
    });
    return s.forEach((S) => {
      const P = document.getElementById(S.hashId);
      P !== null && (P.clientHeight < window.innerHeight ? y.observe(P) : p.observe(P));
    }), [p, y];
  }, [b, s]), w = F(
    (p) => () => {
      c(p);
    },
    []
  );
  return V(() => {
    var y;
    const p = d();
    return i(((y = g.current) == null ? void 0 : y.getBoundingClientRect().top) || 0), l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l), p.forEach((S) => S.disconnect());
    };
  }, [l, d]), /* @__PURE__ */ a.jsx("nav", { className: ne.minimenu, ref: g, children: s.map((p, y) => /* @__PURE__ */ a.jsxs(te.Fragment, { children: [
    y !== 0 && /* @__PURE__ */ a.jsx("div", { role: "separator" }),
    /* @__PURE__ */ a.jsx(
      "a",
      {
        href: `#${p.hashId}`,
        ref: (S) => {
          _.current[y] = S;
        },
        className: y === f ? `${ne.underline} italic` : void 0,
        onClick: w(y),
        children: /* @__PURE__ */ a.jsx("span", { children: p.title })
      }
    )
  ] }, p.hashId)) });
}
const Yr = "_desktop__nav_1xz1z_1", Br = "_mobile__nav_1xz1z_1", Ir = "_top_menu_container_1xz1z_6", Ur = "_expand_1xz1z_12", Vr = "_expand_dummy_1xz1z_13", Hr = "_home_logo_1xz1z_67", Mr = "_subnav_content_1xz1z_78", Jr = "_subnav_1xz1z_78", Kr = "_open_1xz1z_88", qr = "_grow_1xz1z_1", Gr = "_menu_1xz1z_129", Xr = "_hamb_1xz1z_156", Zr = "_hamb_line_1xz1z_163", Qr = "_menu_hamburger_1xz1z_189", en = "_side__menu_1xz1z_197", rn = "_top__menu_1xz1z_214", j = {
  desktop__nav: Yr,
  mobile__nav: Br,
  top_menu_container: Ir,
  expand: Ur,
  expand_dummy: Vr,
  home_logo: Hr,
  subnav_content: Mr,
  subnav: Jr,
  open: Kr,
  grow: qr,
  menu: Gr,
  "mobile-menu": "_mobile-menu_1xz1z_149",
  hamb: Xr,
  hamb_line: Zr,
  menu_hamburger: Qr,
  side__menu: en,
  top__menu: rn
};
function nn({
  menuLink: s,
  topMenuItem: t,
  subMenu: f
}) {
  const [c, _] = N(!1), g = X(null), x = F(() => {
    _(!c);
  }, [c]), i = F(
    (b) => {
      (b.key === "Escape" || b.key === "ArrowUp") && _(!1), b.key === "ArrowDown" && _(!0);
    },
    []
  ), l = F(
    (b) => {
      var w;
      let d = (w = b.relatedTarget) == null ? void 0 : w.parentNode;
      for (let p = 0; p < 8; p++)
        if (d = d == null ? void 0 : d.parentNode, d === g.current)
          return;
      _(!1);
    },
    []
  );
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs(
    "li",
    {
      className: `${j.subnav} ${c ? j.open : ""}`,
      onBlur: l,
      ref: g,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: j.top_menu_container, children: [
          s(t.label, t.url, void 0),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: x,
              onKeyUp: i,
              "aria-label": `${t.label}`,
              "aria-expanded": c,
              className: j.expand
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: j.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: f(t.items, t.url) }) })
      ]
    }
  ) : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs("div", { className: j.top_menu_container, children: [
    s(t.label, t.url),
    /* @__PURE__ */ a.jsx("div", { className: j.expand_dummy })
  ] }) }, t.label);
}
function tn({
  menuLink: s,
  topMenuItem: t,
  subMenu: f,
  unCheckSideMenu: c
}) {
  const [_, g] = N(!1), x = X(null), [i, l] = N(!1);
  V(() => {
    l(!0);
  }, []);
  const b = F(() => {
    g(!_);
  }, [_]);
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs("li", { className: j.subnav, role: "menu", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        "aria-expanded": _,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${t.label}`,
        onClick: () => {
          var d;
          (d = x.current) == null || d.click();
        },
        className: `${j.top__menu} ${i ? "show-inline" : "hide"}`
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "label",
      {
        className: `${j.top__menu} ${i ? "hide" : "show-inline"}`,
        children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              name: "top_menu",
              ref: x,
              value: t.label,
              onClick: b,
              role: "menuitemcheckbox"
            }
          ),
          `Expandable ${t.label}`
        ]
      }
    ),
    s(t.label, t.url, c),
    /* @__PURE__ */ a.jsx("div", { className: j.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: f(t.items, t.url, c) }) })
  ] }, t.label) : /* @__PURE__ */ a.jsx("li", { children: s(t.label, t.url, c) }, t.label);
}
function an({
  menuLink: s,
  homeLink: t,
  homeLogoLink: f,
  model: c,
  shortcutComponent: _,
  mobileStyle: g = {},
  desktopStyle: x = {},
  desktopClassName: i = "",
  mobileClassName: l = "",
  menuName: b = void 0
}) {
  const d = X(null), [w, p] = N(!1), [y, S] = N(!1);
  V(() => {
    S(!0);
  }, []);
  const P = (T, z) => z === void 0 || z === "" ? T : z.replace(/^#/, `${T}#`), D = () => {
    d.current && (d.current.checked = !1, document.body.style.overflow = "auto");
  }, A = (T) => {
    const z = T.target.checked;
    p(z), document.body.style.overflow = z ? "hidden" : "auto";
  }, k = (T, z, oe) => T.map((H) => /* @__PURE__ */ a.jsx("li", { children: s(
    H.label,
    P(z, H.url),
    oe
  ) }, H.label)), ae = c.map((T) => /* @__PURE__ */ a.jsx(
    nn,
    {
      menuLink: s,
      topMenuItem: T,
      subMenu: k
    },
    T.label
  )), ie = c.map((T) => /* @__PURE__ */ a.jsx(
    tn,
    {
      menuLink: s,
      topMenuItem: T,
      subMenu: k,
      unCheckSideMenu: D
    },
    T.label
  ));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `${j.mobile__nav} ${l}`,
        style: g,
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: j["mobile-menu"], children: [
            /* @__PURE__ */ a.jsxs("div", { className: j.menu_hamburger, children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  "aria-expanded": w === !0,
                  "aria-haspopup": !0,
                  "aria-controls": "hamburger-menu",
                  className: `${j.hamb} ${y ? "show" : "hide"}`,
                  "aria-label": b || "Hamburger Menu",
                  onClick: () => {
                    var T;
                    (T = d.current) == null || T.click();
                  },
                  children: /* @__PURE__ */ a.jsx("div", { className: j.hamb_line })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "label",
                {
                  className: y ? "hide" : "show",
                  "aria-label": b || "Hamburger Menu",
                  children: /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      className: j.side__menu,
                      type: "checkbox",
                      ref: d,
                      onChange: A
                    }
                  )
                }
              )
            ] }),
            t("/", D, -1),
            _ && _
          ] }),
          /* @__PURE__ */ a.jsxs("nav", { className: j.menu, children: [
            /* @__PURE__ */ a.jsx("ul", { role: "none", id: "hamburger-menu", "aria-labelledby": "hamburger-menu", children: ie }),
            " "
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      "nav",
      {
        className: `${j.desktop__nav} ${i}`,
        style: x,
        "aria-label": b,
        children: /* @__PURE__ */ a.jsxs("ul", { children: [
          /* @__PURE__ */ a.jsx("li", { children: f(j.home_logo) }),
          ae,
          /* @__PURE__ */ a.jsx("li", { children: _ && _ })
        ] })
      }
    )
  ] });
}
const hn = Er(an, () => !0);
export {
  dn as Accordion,
  vn as Announcement,
  hn as Menu,
  _n as MiniMenu,
  an as MutableMenu,
  ln as consoleReportHandler,
  jr as debounce,
  un as htmlConvertor,
  cn as reportWebVitals,
  sn as useNavigationListener,
  fn as useWindowListener
};
