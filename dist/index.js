import ae, { useEffect as B, useState as A, useCallback as F, useMemo as yr, useRef as X, memo as Er } from "react";
const cn = ({
  appName: o,
  containerName: t,
  props: f
}) => {
  B(() => {
    window.dispatchEvent(
      new CustomEvent(`[${o}] navigated`, { detail: f.pathname })
    );
  }, [o, f.pathname]), B(() => {
    function c(_) {
      const p = _.detail;
      f.pathname !== p && f.navigate(p);
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
function un(o) {
  console.log(o);
}
const Rr = (o) => (t) => {
  o({
    ...t,
    delta: t.delta * 1e3
  });
}, fn = (o) => {
  o && o instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: t, onINP: f, onLCP: c }) => {
    t(Rr(o)), f(o), c(o);
  });
};
function jr(o, t) {
  let f;
  return () => {
    /* istanbul ignore if -- @preserve */
    f !== null && clearTimeout(f), f = setTimeout(() => {
      f = null, o();
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
  var o = ae, t = Symbol.for("react.element"), f = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, _ = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(i, l, h) {
    var u, w = {}, m = null, y = null;
    h !== void 0 && (m = "" + h), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (u in l)
      c.call(l, u) && !p.hasOwnProperty(u) && (w[u] = l[u]);
    if (i && i.defaultProps)
      for (u in l = i.defaultProps, l)
        w[u] === void 0 && (w[u] = l[u]);
    return { $$typeof: t, type: i, key: m, ref: y, props: w, _owner: _.current };
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
    var o = ae, t = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), S = Symbol.iterator, P = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = S && e[S] || e[P];
      return typeof r == "function" ? r : null;
    }
    var W = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        ie("error", e, n);
      }
    }
    function ie(e, r, n) {
      {
        var s = W.ReactDebugCurrentFrame, b = s.getStackAddendum();
        b !== "" && (r += "%s", n = n.concat([b]));
        var g = n.map(function(v) {
          return String(v);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var se = !1, T = !1, N = !1, oe = !1, H = !1, xe;
    xe = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || H || e === _ || e === h || e === u || oe || e === y || se || T || N || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === w || e.$$typeof === x || e.$$typeof === i || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === xe || e.getModuleId !== void 0));
    }
    function Me(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var b = r.displayName || r.name || "";
      return b !== "" ? n + "(" + b + ")" : n;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function z(e) {
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
        case p:
          return "Profiler";
        case _:
          return "StrictMode";
        case h:
          return "Suspense";
        case u:
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
            return Me(e, e.render, "ForwardRef");
          case w:
            var s = e.displayName || null;
            return s !== null ? s : z(e.type) || "Memo";
          case m: {
            var b = e, g = b._payload, v = b._init;
            try {
              return z(v(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, J = 0, Ee, Re, je, we, ke, Te, Ce;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function Ke() {
      {
        if (J === 0) {
          Ee = console.log, Re = console.info, je = console.warn, we = console.error, ke = console.group, Te = console.groupCollapsed, Ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
              value: Ce
            })
          });
        }
        J < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = W.ReactCurrentDispatcher, ce;
    function Z(e, r, n) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (b) {
            var s = b.stack.trim().match(/\n( *(at )?)/);
            ce = s && s[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var ue = !1, Q;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Ge();
    }
    function Se(e, r) {
      if (!e || ue)
        return "";
      {
        var n = Q.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      ue = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = le.current, le.current = null, Ke();
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
            } catch (O) {
              s = O;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (O) {
              s = O;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            s = O;
          }
          e();
        }
      } catch (O) {
        if (O && s && typeof O.stack == "string") {
          for (var d = O.stack.split(`
`), C = s.stack.split(`
`), E = d.length - 1, R = C.length - 1; E >= 1 && R >= 0 && d[E] !== C[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (d[E] !== C[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || d[E] !== C[R]) {
                    var $ = `
` + d[E].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, $), $;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ue = !1, le.current = g, qe(), Error.prepareStackTrace = b;
      }
      var U = e ? e.displayName || e.name : "", Y = U ? Z(U) : "";
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
        case h:
          return Z("Suspense");
        case u:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Xe(e.render);
          case w:
            return ee(e.type, r, n);
          case m: {
            var s = e, b = s._payload, g = s._init;
            try {
              return ee(g(b), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, $e = {}, Pe = W.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Qe(e, r, n, s, b) {
      {
        var g = Function.call.bind(M);
        for (var v in e)
          if (g(e, v)) {
            var d = void 0;
            try {
              if (typeof e[v] != "function") {
                var C = Error((s || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              d = e[v](r, v, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              d = E;
            }
            d && !(d instanceof Error) && (re(b), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, v, typeof d), re(null)), d instanceof Error && !(d.message in $e) && ($e[d.message] = !0, re(b), k("Failed %s type: %s", n, d.message), re(null));
          }
      }
    }
    var er = Array.isArray;
    function fe(e) {
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
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Ae(e);
    }
    var K = W.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, ze, de;
    de = {};
    function ar(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && K.current && r && K.current.stateNode !== r) {
        var n = z(K.current.type);
        de[n] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(K.current.type), e.ref), de[n] = !0);
      }
    }
    function or(e, r) {
      {
        var n = function() {
          Ne || (Ne = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          ze || (ze = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, s, b, g, v) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: v,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function ur(e, r, n, s, b) {
      {
        var g, v = {}, d = null, C = null;
        n !== void 0 && (We(n), d = "" + n), ir(r) && (We(r.key), d = "" + r.key), ar(r) && (C = r.ref, sr(r, b));
        for (g in r)
          M.call(r, g) && !tr.hasOwnProperty(g) && (v[g] = r[g]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (g in E)
            v[g] === void 0 && (v[g] = E[g]);
        }
        if (d || C) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && or(v, R), C && lr(v, R);
        }
        return cr(e, d, C, b, s, K.current, v);
      }
    }
    var ve = W.ReactCurrentOwner, Fe = W.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(n);
      } else
        Fe.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function De() {
      {
        if (ve.current) {
          var e = z(ve.current.type);
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
        var s = "";
        e && e._owner && e._owner !== ve.current && (s = " It was passed a child from " + z(e._owner.type) + "."), I(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), I(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            he(s) && Ye(s, r);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = D(e);
          if (typeof b == "function" && b !== e.entries)
            for (var g = b.call(e), v; !(v = g.next()).done; )
              he(v.value) && Ye(v.value, r);
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
          var s = z(r);
          Qe(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !_e) {
          _e = !0;
          var b = z(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            I(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ie = {};
    function Ue(e, r, n, s, b, g) {
      {
        var v = Je(e);
        if (!v) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr();
          C ? d += C : d += De();
          var E;
          e === null ? E = "null" : fe(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (z(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, d);
        }
        var R = ur(e, r, n, b, g);
        if (R == null)
          return R;
        if (v) {
          var $ = r.children;
          if ($ !== void 0)
            if (s)
              if (fe($)) {
                for (var U = 0; U < $.length; U++)
                  Be($[U], e);
                Object.freeze && Object.freeze($);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be($, e);
        }
        if (M.call(r, "key")) {
          var Y = z(e), O = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), be = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[Y + be]) {
            var gr = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, be, Y, gr, Y), Ie[Y + be] = !0;
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
const pe = `
`, ge = "[\\.|,]", Tr = new RegExp(
  `.*\\]${ge}?$`
), Cr = new RegExp(
  `\\]${ge}?$`,
  "g"
), Or = new RegExp(
  `${ge}$`
);
function dn(o, t) {
  function f(i, l) {
    if (i.match(Tr) && i.indexOf("|") > -1) {
      const h = i.replace(
        Cr,
        "]"
      ), w = h.substring(
        1,
        h.length - 1
      ).split("|"), m = w[0], y = w[1].replaceAll(
        pe,
        " "
      );
      return /* @__PURE__ */ a.jsxs(ae.Fragment, { children: [
        t(m, y),
        i.match(Or) ? `${i.slice(-1)}` : ""
      ] }, l);
    }
    return i;
  }
  const x = ((i) => {
    const l = i.split("|");
    return l.length > 1 ? l.map((h) => {
      const u = h.split("]");
      return u.length === 2 ? `${u[0].replaceAll(
        " ",
        pe
      )}]${u[1]}` : h;
    }).join("|") : i;
  })(o).split(" ").map((i, l) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ a.jsx("strong", { children: i.substring(1, i.length) }, l) : i.startsWith("[") ? f(i, l) : i === "!!" ? /* @__PURE__ */ a.jsx("br", {}, l) : i.replaceAll(pe, " ")).reduce(
    (i, l) => [...i, " ", l],
    []
  );
  return x.shift(), /* @__PURE__ */ a.jsx(a.Fragment, { children: x });
}
const vn = () => {
  const [o, t] = A({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return B(() => {
    const f = jr(function() {
      t({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), o;
}, Sr = "_accordion_11xxy_1", $r = "_tab_11xxy_24", Pr = "_selectable_11xxy_29", Ar = "_tab__content_11xxy_42", te = {
  accordion: Sr,
  tab: $r,
  selectable: Pr,
  tab__content: Ar
};
function _n({
  model: o,
  groupName: t,
  isSingle: f = !0
}) {
  const [c, _] = A(""), p = F(
    (i) => {
      const l = i.currentTarget;
      c === l.value ? (l.checked = !1, _("")) : _(l.value);
    },
    [c]
  ), x = yr(
    () => o.map((i, l) => /* @__PURE__ */ a.jsx(
      Wr,
      {
        label: i.label,
        isSingle: f,
        value: l,
        groupName: t,
        onInputClick: p,
        content: i.content
      },
      i.label
    )),
    [o, f, t, p]
  );
  return /* @__PURE__ */ a.jsx("div", { className: te.accordion, children: x });
}
function Wr({
  label: o,
  isSingle: t,
  value: f,
  groupName: c,
  onInputClick: _,
  content: p
}) {
  const [x, i] = A(!1), l = F(
    (h) => {
      if (h.key === " " || h.key === "Enter") {
        const u = h.currentTarget.firstElementChild;
        u !== null && u.click();
      }
    },
    []
  );
  return B(() => {
    i(!0);
  }, []), /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `${te.tab} ${x ? te.selectable : ""}`,
      tabIndex: x ? 0 : void 0,
      onKeyUp: l,
      children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          o,
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: t ? "radio" : "checkbox",
              value: f,
              name: c,
              onClick: t ? _ : void 0
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: te.tab__content, children: /* @__PURE__ */ a.jsx("div", { children: p }) })
      ]
    }
  );
}
const Nr = "_announcement_149a8_1", zr = "_only_one_149a8_11", Fr = "_close_149a8_25", Dr = "_button_prev_149a8_77", V = {
  announcement: Nr,
  only_one: zr,
  close: Fr,
  button_prev: Dr
};
function hn({
  ariaAnnouncementTitle: o,
  announcements: t,
  classes: f = ""
}) {
  const [c, _] = A(0), p = () => _(c - 1 >= 0 ? c - 1 : t.length - 1), x = () => _(t.length > c + 1 ? c + 1 : 0), i = t.length === 1;
  return t.length < 1 ? null : /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "status",
      title: o,
      className: `${V.announcement} ${i ? V.only_one : ""} ${f}`,
      children: [
        !i && /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: p,
            className: `${V.button} ${V.button_prev}`,
            children: /* @__PURE__ */ a.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ a.jsx("p", { children: t[c] }),
        !i && /* @__PURE__ */ a.jsx("button", { onClick: x, className: V.button, children: /* @__PURE__ */ a.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ a.jsx("label", { className: V.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ a.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Lr = "_minimenu_1c4fs_1", Yr = "_sticky_1c4fs_1", Br = "_underline_1c4fs_27", ne = {
  minimenu: Lr,
  sticky: Yr,
  underline: Br
};
function bn({ model: o, onScrollMonitor: t }) {
  const [f, c] = A(0), _ = X([]), p = X(null), [x, i] = A(0), l = F(() => {
    t && t(), p.current && (window.scrollY > x ? p.current.classList.add(ne.sticky) : p.current.classList.remove(ne.sticky));
  }, [x, t]), h = F(
    (m) => {
      const y = m[0].target, S = o.findIndex((W) => W.hashId === y.id), P = S < 0 ? 0 : S, D = _.current[P];
      D !== null && m[0].isIntersecting && (D.scrollIntoViewIfNeeded(!0), c(P));
    },
    [o]
  ), u = F(() => {
    const m = new IntersectionObserver(h, {
      threshold: [0.3]
      //never accurate but it's the best
    }), y = new IntersectionObserver(h, {
      threshold: [1]
    });
    return o.forEach((S) => {
      const P = document.getElementById(S.hashId);
      P !== null && (P.clientHeight < window.innerHeight ? y.observe(P) : m.observe(P));
    }), [m, y];
  }, [h, o]), w = F(
    (m) => () => {
      c(m);
    },
    []
  );
  return B(() => {
    var y;
    const m = u();
    return i(((y = p.current) == null ? void 0 : y.getBoundingClientRect().top) || 0), l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l), m.forEach((S) => S.disconnect());
    };
  }, [l, u]), /* @__PURE__ */ a.jsx("nav", { className: ne.minimenu, ref: p, children: o.map((m, y) => /* @__PURE__ */ a.jsxs(ae.Fragment, { children: [
    y !== 0 && /* @__PURE__ */ a.jsx("div", { role: "separator" }),
    /* @__PURE__ */ a.jsx(
      "a",
      {
        href: `#${m.hashId}`,
        ref: (S) => {
          _.current[y] = S;
        },
        className: y === f ? `${ne.underline} italic` : void 0,
        onClick: w(y),
        children: /* @__PURE__ */ a.jsx("span", { children: m.title })
      }
    )
  ] }, m.hashId)) });
}
const Ir = "_desktop__nav_1xz1z_1", Ur = "_mobile__nav_1xz1z_1", Vr = "_top_menu_container_1xz1z_6", Hr = "_expand_1xz1z_12", Jr = "_expand_dummy_1xz1z_13", Mr = "_home_logo_1xz1z_67", Kr = "_subnav_content_1xz1z_78", qr = "_subnav_1xz1z_78", Gr = "_open_1xz1z_88", Xr = "_grow_1xz1z_1", Zr = "_menu_1xz1z_129", Qr = "_hamb_1xz1z_156", en = "_hamb_line_1xz1z_163", rn = "_menu_hamburger_1xz1z_189", nn = "_side__menu_1xz1z_197", tn = "_top__menu_1xz1z_214", j = {
  desktop__nav: Ir,
  mobile__nav: Ur,
  top_menu_container: Vr,
  expand: Hr,
  expand_dummy: Jr,
  home_logo: Mr,
  subnav_content: Kr,
  subnav: qr,
  open: Gr,
  grow: Xr,
  menu: Zr,
  "mobile-menu": "_mobile-menu_1xz1z_149",
  hamb: Qr,
  hamb_line: en,
  menu_hamburger: rn,
  side__menu: nn,
  top__menu: tn
};
function an({
  menuLink: o,
  topMenuItem: t,
  subMenu: f
}) {
  const [c, _] = A(!1), p = X(null), x = F(() => {
    _(!c);
  }, [c]), i = F(
    (h) => {
      (h.key === "Escape" || h.key === "ArrowUp") && _(!1), h.key === "ArrowDown" && _(!0);
    },
    []
  ), l = F(
    (h) => {
      var w;
      let u = (w = h.relatedTarget) == null ? void 0 : w.parentNode;
      for (let m = 0; m < 8; m++)
        if (u = u == null ? void 0 : u.parentNode, u === p.current)
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
      ref: p,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: j.top_menu_container, children: [
          o(t.label, t.url, void 0),
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
    o(t.label, t.url),
    /* @__PURE__ */ a.jsx("div", { className: j.expand_dummy })
  ] }) }, t.label);
}
function sn({
  menuLink: o,
  topMenuItem: t,
  subMenu: f,
  unCheckSideMenu: c
}) {
  const [_, p] = A(!1), x = X(null), [i, l] = A(!1);
  B(() => {
    l(!0);
  }, []);
  const h = F(() => {
    p(!_);
  }, [_]);
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs("li", { className: j.subnav, role: "menu", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        "aria-expanded": _,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${t.label}`,
        onClick: () => {
          var u;
          (u = x.current) == null || u.click();
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
              onClick: h,
              role: "menuitemcheckbox"
            }
          ),
          `Expandable ${t.label}`
        ]
      }
    ),
    o(t.label, t.url, c),
    /* @__PURE__ */ a.jsx("div", { className: j.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: f(t.items, t.url, c) }) })
  ] }, t.label) : /* @__PURE__ */ a.jsx("li", { children: o(t.label, t.url, c) }, t.label);
}
function on({
  menuLink: o,
  homeLink: t,
  homeLogoLink: f,
  model: c,
  shortcutComponent: _,
  mobileStyle: p = {},
  desktopStyle: x = {},
  desktopClassName: i = "",
  mobileClassName: l = "",
  menuName: h = void 0
}) {
  const u = X(null), [w, m] = A(!1), [y, S] = A(!1);
  B(() => {
    S(!0);
  }, []);
  const P = (T, N) => N === void 0 || N === "" ? T : N.replace(/^#/, `${T}#`), D = () => {
    u.current && (u.current.checked = !1, document.body.style.overflow = "auto");
  }, W = (T) => {
    const N = T.target.checked;
    m(N), document.body.style.overflow = N ? "hidden" : "auto";
  }, k = (T, N, oe) => T.map((H) => /* @__PURE__ */ a.jsx("li", { children: o(
    H.label,
    P(N, H.url),
    oe
  ) }, H.label)), ie = c.map((T) => /* @__PURE__ */ a.jsx(
    an,
    {
      menuLink: o,
      topMenuItem: T,
      subMenu: k
    },
    T.label
  )), se = c.map((T) => /* @__PURE__ */ a.jsx(
    sn,
    {
      menuLink: o,
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
        style: p,
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: j["mobile-menu"], children: [
            /* @__PURE__ */ a.jsxs("div", { className: j.menu_hamburger, children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  "aria-expanded": w === !0,
                  "aria-haspopup": !0,
                  className: `${j.hamb} ${y ? "show" : "hide"}`,
                  "aria-label": h || "Hamburger Menu",
                  onClick: () => {
                    var T;
                    (T = u.current) == null || T.click();
                  },
                  children: /* @__PURE__ */ a.jsx("div", { className: j.hamb_line })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "label",
                {
                  className: y ? "hide" : "show",
                  "aria-label": h || "Hamburger Menu",
                  children: /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      className: j.side__menu,
                      type: "checkbox",
                      ref: u,
                      onChange: W
                    }
                  )
                }
              )
            ] }),
            t("/", D, -1),
            _ && _
          ] }),
          /* @__PURE__ */ a.jsxs("nav", { className: j.menu, children: [
            /* @__PURE__ */ a.jsx("ul", { role: "none", children: se }),
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
        "aria-label": h,
        children: /* @__PURE__ */ a.jsxs("ul", { children: [
          /* @__PURE__ */ a.jsx("li", { children: f(j.home_logo) }),
          ie,
          /* @__PURE__ */ a.jsx("li", { children: _ && _ })
        ] })
      }
    )
  ] });
}
const pn = Er(on, () => !0);
export {
  _n as Accordion,
  hn as Announcement,
  pn as Menu,
  bn as MiniMenu,
  on as MutableMenu,
  un as consoleReportHandler,
  jr as debounce,
  dn as htmlConvertor,
  fn as reportWebVitals,
  cn as useNavigationListener,
  vn as useWindowListener
};
