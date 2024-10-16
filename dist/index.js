import ae, { useEffect as I, useState as A, useCallback as D, useMemo as Er, useRef as X, memo as Rr } from "react";
const dn = ({
  appName: s,
  containerName: t,
  props: u
}) => {
  I(() => {
    window.dispatchEvent(
      new CustomEvent(`[${s}] navigated`, { detail: u.pathname })
    );
  }, [s, u.pathname]), I(() => {
    function c(v) {
      const p = v.detail;
      u.pathname !== p && u.navigate(p);
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
  }, [t, u]);
};
function vn(s) {
  console.log(s);
}
const jr = (s) => (t) => {
  s({
    ...t,
    delta: t.delta * 1e3
  });
}, _n = (s) => {
  s && s instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: t, onINP: u, onLCP: c }) => {
    t(jr(s)), u(s), c(s);
  });
};
function wr(s, t) {
  let u;
  return () => {
    /* istanbul ignore if -- @preserve */
    u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, s();
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
function kr() {
  if (He)
    return q;
  He = 1;
  var s = ae, t = Symbol.for("react.element"), u = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, v = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(i, l, h) {
    var f, w = {}, m = null, x = null;
    h !== void 0 && (m = "" + h), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (f in l)
      c.call(l, f) && !p.hasOwnProperty(f) && (w[f] = l[f]);
    if (i && i.defaultProps)
      for (f in l = i.defaultProps, l)
        w[f] === void 0 && (w[f] = l[f]);
    return { $$typeof: t, type: i, key: m, ref: x, props: w, _owner: v.current };
  }
  return q.Fragment = u, q.jsx = y, q.jsxs = y, q;
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
var Je;
function Tr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var s = ae, t = Symbol.for("react.element"), u = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, P = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = S && e[S] || e[P];
      return typeof r == "function" ? r : null;
    }
    var N = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        ie("error", e, n);
      }
    }
    function ie(e, r, n) {
      {
        var o = N.ReactDebugCurrentFrame, b = o.getStackAddendum();
        b !== "" && (r += "%s", n = n.concat([b]));
        var g = n.map(function(_) {
          return String(_);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var se = !1, T = !1, W = !1, oe = !1, J = !1, ye;
    ye = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || J || e === v || e === h || e === f || oe || e === x || se || T || W || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === w || e.$$typeof === y || e.$$typeof === i || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ye || e.getModuleId !== void 0));
    }
    function ze(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var b = r.displayName || r.name || "";
      return b !== "" ? n + "(" + b + ")" : n;
    }
    function xe(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case u:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
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
          case w:
            var o = e.displayName || null;
            return o !== null ? o : F(e.type) || "Memo";
          case m: {
            var b = e, g = b._payload, _ = b._init;
            try {
              return F(_(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, M = 0, Ee, Re, je, we, ke, Te, Ce;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function qe() {
      {
        if (M === 0) {
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
        M++;
      }
    }
    function Ge() {
      {
        if (M--, M === 0) {
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
              value: Ce
            })
          });
        }
        M < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = N.ReactCurrentDispatcher, ce;
    function Z(e, r, n) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (b) {
            var o = b.stack.trim().match(/\n( *(at )?)/);
            ce = o && o[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var ue = !1, Q;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Xe();
    }
    function Se(e, r) {
      if (!e || ue)
        return "";
      {
        var n = Q.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ue = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = le.current, le.current = null, qe();
      try {
        if (r) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (O) {
              o = O;
            }
            Reflect.construct(e, [], _);
          } else {
            try {
              _.call();
            } catch (O) {
              o = O;
            }
            e.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            o = O;
          }
          e();
        }
      } catch (O) {
        if (O && o && typeof O.stack == "string") {
          for (var d = O.stack.split(`
`), C = o.stack.split(`
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
        ue = !1, le.current = g, Ge(), Error.prepareStackTrace = b;
      }
      var V = e ? e.displayName || e.name : "", B = V ? Z(V) : "";
      return typeof e == "function" && Q.set(e, B), B;
    }
    function Ze(e, r, n) {
      return Se(e, !1);
    }
    function Qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ee(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, Qe(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case h:
          return Z("Suspense");
        case f:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ze(e.render);
          case w:
            return ee(e.type, r, n);
          case m: {
            var o = e, b = o._payload, g = o._init;
            try {
              return ee(g(b), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, $e = {}, Pe = N.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    function er(e, r, n, o, b) {
      {
        var g = Function.call.bind(K);
        for (var _ in e)
          if (g(e, _)) {
            var d = void 0;
            try {
              if (typeof e[_] != "function") {
                var C = Error((o || "React class") + ": " + n + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              d = e[_](r, _, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              d = E;
            }
            d && !(d instanceof Error) && (re(b), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, _, typeof d), re(null)), d instanceof Error && !(d.message in $e) && ($e[d.message] = !0, re(b), k("Failed %s type: %s", n, d.message), re(null));
          }
      }
    }
    var rr = Array.isArray;
    function fe(e) {
      return rr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function tr(e) {
      try {
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function Ne(e) {
      if (tr(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), Ae(e);
    }
    var z = N.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Fe, de;
    de = {};
    function ir(e) {
      if (K.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var n = F(z.current.type);
        de[n] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(z.current.type), e.ref), de[n] = !0);
      }
    }
    function lr(e, r) {
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
    function cr(e, r) {
      {
        var n = function() {
          Fe || (Fe = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, n, o, b, g, _) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: _,
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
        value: o
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function fr(e, r, n, o, b) {
      {
        var g, _ = {}, d = null, C = null;
        n !== void 0 && (Ne(n), d = "" + n), sr(r) && (Ne(r.key), d = "" + r.key), ir(r) && (C = r.ref, or(r, b));
        for (g in r)
          K.call(r, g) && !ar.hasOwnProperty(g) && (_[g] = r[g]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (g in E)
            _[g] === void 0 && (_[g] = E[g]);
        }
        if (d || C) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && lr(_, R), C && cr(_, R);
        }
        return ur(e, d, C, b, o, z.current, _);
      }
    }
    var ve = N.ReactCurrentOwner, De = N.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, n = ee(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(n);
      } else
        De.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Le() {
      {
        if (ve.current) {
          var e = F(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      return "";
    }
    var Ye = {};
    function vr(e) {
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
        var n = vr(r);
        if (Ye[n])
          return;
        Ye[n] = !0;
        var o = "";
        e && e._owner && e._owner !== ve.current && (o = " It was passed a child from " + F(e._owner.type) + "."), U(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), U(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            he(o) && Be(o, r);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = L(e);
          if (typeof b == "function" && b !== e.entries)
            for (var g = b.call(e), _; !(_ = g.next()).done; )
              he(_.value) && Be(_.value, r);
        }
      }
    }
    function _r(e) {
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
          var o = F(r);
          er(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !_e) {
          _e = !0;
          var b = F(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            U(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var Ue = {};
    function Ve(e, r, n, o, b, g) {
      {
        var _ = Ke(e);
        if (!_) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = dr();
          C ? d += C : d += Le();
          var E;
          e === null ? E = "null" : fe(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (F(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, d);
        }
        var R = fr(e, r, n, b, g);
        if (R == null)
          return R;
        if (_) {
          var $ = r.children;
          if ($ !== void 0)
            if (o)
              if (fe($)) {
                for (var V = 0; V < $.length; V++)
                  Ie($[V], e);
                Object.freeze && Object.freeze($);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie($, e);
        }
        if (K.call(r, "key")) {
          var B = F(e), O = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), be = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[B + be]) {
            var yr = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, be, B, yr, B), Ue[B + be] = !0;
          }
        }
        return e === c ? hr(R) : _r(R), R;
      }
    }
    function br(e, r, n) {
      return Ve(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Ve(e, r, n, !1);
    }
    var mr = pr, gr = br;
    G.Fragment = c, G.jsx = mr, G.jsxs = gr;
  }()), G;
}
process.env.NODE_ENV === "production" ? me.exports = kr() : me.exports = Tr();
var a = me.exports;
const pe = `
`, ge = "[\\.|,]", Cr = new RegExp(
  `.*\\]${ge}?$`
), Or = new RegExp(
  `\\]${ge}?$`,
  "g"
), Sr = new RegExp(
  `${ge}$`
);
function hn(s, t) {
  function u(i, l) {
    if (i.match(Cr) && i.indexOf("|") > -1) {
      const h = i.replace(
        Or,
        "]"
      ), w = h.substring(
        1,
        h.length - 1
      ).split("|"), m = w[0], x = w[1].replaceAll(
        pe,
        " "
      );
      return /* @__PURE__ */ a.jsxs(ae.Fragment, { children: [
        t(m, x),
        i.match(Sr) ? `${i.slice(-1)}` : ""
      ] }, l);
    }
    return i;
  }
  const y = ((i) => {
    const l = i.split("|");
    return l.length > 1 ? l.map((h) => {
      const f = h.split("]");
      return f.length === 2 ? `${f[0].replaceAll(
        " ",
        pe
      )}]${f[1]}` : h;
    }).join("|") : i;
  })(s).split(" ").map((i, l) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ a.jsx("strong", { children: i.substring(1, i.length) }, l) : i.startsWith("[") ? u(i, l) : i === "!!" ? /* @__PURE__ */ a.jsx("br", {}, l) : i.replaceAll(pe, " ")).reduce(
    (i, l) => [...i, " ", l],
    []
  );
  return y.shift(), /* @__PURE__ */ a.jsx(a.Fragment, { children: y });
}
const bn = () => {
  const [s, t] = A({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return I(() => {
    const u = wr(function() {
      t({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, []), s;
}, $r = "_accordion_8a78m_1", Pr = "_tab_8a78m_24", Ar = "_selectable_8a78m_29", Nr = "_tab__content_8a78m_42", te = {
  accordion: $r,
  tab: Pr,
  selectable: Ar,
  tab__content: Nr
};
function pn({
  model: s,
  groupName: t,
  isSingle: u = !0
}) {
  const [c, v] = A(""), p = D(
    (i) => {
      const l = i.currentTarget;
      c === l.value ? (l.checked = !1, v("")) : v(l.value);
    },
    [c]
  ), y = Er(
    () => s.map((i, l) => /* @__PURE__ */ a.jsx(
      Wr,
      {
        label: i.label,
        isSingle: u,
        value: l,
        groupName: t,
        onInputClick: p,
        content: i.content
      },
      i.label
    )),
    [s, u, t, p]
  );
  return /* @__PURE__ */ a.jsx("div", { className: te.accordion, children: y });
}
function Wr({
  label: s,
  isSingle: t,
  value: u,
  groupName: c,
  onInputClick: v,
  content: p
}) {
  const [y, i] = A(!1), l = D(
    (h) => {
      if (h.key === " " || h.key === "Enter") {
        const f = h.currentTarget.firstElementChild;
        f !== null && f.click();
      }
    },
    []
  );
  return I(() => {
    i(!0);
  }, []), /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `${te.tab} ${y ? te.selectable : ""}`,
      tabIndex: y ? 0 : void 0,
      onKeyUp: l,
      children: [
        /* @__PURE__ */ a.jsxs("label", { children: [
          s,
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: t ? "radio" : "checkbox",
              value: u,
              name: c,
              onClick: t ? v : void 0
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: te.tab__content, children: /* @__PURE__ */ a.jsx("div", { children: p }) })
      ]
    }
  );
}
const Fr = "_announcement_149a8_1", Dr = "_only_one_149a8_11", Lr = "_close_149a8_25", Yr = "_button_prev_149a8_77", H = {
  announcement: Fr,
  only_one: Dr,
  close: Lr,
  button_prev: Yr
};
function mn({
  ariaAnnouncementTitle: s,
  announcements: t,
  classes: u = ""
}) {
  const [c, v] = A(0), p = () => v(c - 1 >= 0 ? c - 1 : t.length - 1), y = () => v(t.length > c + 1 ? c + 1 : 0), i = t.length === 1;
  return t.length < 1 ? null : /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "status",
      title: s,
      className: `${H.announcement} ${i ? H.only_one : ""} ${u}`,
      children: [
        !i && /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: p,
            className: `${H.button} ${H.button_prev}`,
            children: /* @__PURE__ */ a.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ a.jsx("p", { children: t[c] }),
        !i && /* @__PURE__ */ a.jsx("button", { onClick: y, className: H.button, children: /* @__PURE__ */ a.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ a.jsx("label", { className: H.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ a.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Br = "_minimenu_1exl9_1", Ir = "_sticky_1exl9_1", Ur = "_underline_1exl9_32", ne = {
  minimenu: Br,
  sticky: Ir,
  underline: Ur
};
function gn({ model: s, onScrollMonitor: t }) {
  const [u, c] = A(0), v = X([]), p = X(null), [y, i] = A(0), l = D(() => {
    t && t(), p.current && (window.scrollY > y ? p.current.classList.add(ne.sticky) : p.current.classList.remove(ne.sticky));
  }, [y, t]), h = D(
    (m) => {
      const x = m[0].target, S = s.findIndex((N) => N.hashId === x.id), P = S < 0 ? 0 : S, L = v.current[P];
      L !== null && m[0].isIntersecting && (L.scrollIntoViewIfNeeded(!0), c(P));
    },
    [s]
  ), f = D(() => {
    const m = new IntersectionObserver(h, {
      threshold: [0.3]
      //never accurate but it's the best
    }), x = new IntersectionObserver(h, {
      threshold: [1]
    });
    return s.forEach((S) => {
      const P = document.getElementById(S.hashId);
      P !== null && (P.clientHeight < window.innerHeight ? x.observe(P) : m.observe(P));
    }), [m, x];
  }, [h, s]), w = D(
    (m) => () => {
      c(m);
    },
    []
  );
  return I(() => {
    var x;
    const m = f();
    return i(((x = p.current) == null ? void 0 : x.getBoundingClientRect().top) || 0), l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l), m.forEach((S) => S.disconnect());
    };
  }, [l, f]), /* @__PURE__ */ a.jsx("nav", { className: ne.minimenu, ref: p, children: s.map((m, x) => /* @__PURE__ */ a.jsxs(ae.Fragment, { children: [
    x !== 0 && /* @__PURE__ */ a.jsx("div", { role: "separator" }),
    /* @__PURE__ */ a.jsx(
      "a",
      {
        href: `#${m.hashId}`,
        ref: (S) => {
          v.current[x] = S;
        },
        className: x === u ? `${ne.underline} italic` : void 0,
        onClick: w(x),
        children: /* @__PURE__ */ a.jsx("span", { children: m.title })
      }
    )
  ] }, m.hashId)) });
}
const Vr = "_desktop__nav_erey8_1", Hr = "_mobile__nav_erey8_1", Jr = "_top_menu_container_erey8_6", Mr = "_expand_erey8_12", Kr = "_expand_dummy_erey8_13", zr = "_home_logo_erey8_67", qr = "_subnav_content_erey8_78", Gr = "_subnav_erey8_78", Xr = "_open_erey8_88", Zr = "_grow_erey8_1", Qr = "_menu_erey8_129", en = "_hamb_erey8_156", rn = "_hamb_line_erey8_164", nn = "_menu_hamburger_erey8_191", tn = "_side__menu_erey8_199", an = "_top__menu_erey8_216", j = {
  desktop__nav: Vr,
  mobile__nav: Hr,
  top_menu_container: Jr,
  expand: Mr,
  expand_dummy: Kr,
  home_logo: zr,
  subnav_content: qr,
  subnav: Gr,
  open: Xr,
  grow: Zr,
  menu: Qr,
  "mobile-menu": "_mobile-menu_erey8_149",
  hamb: en,
  hamb_line: rn,
  menu_hamburger: nn,
  side__menu: tn,
  top__menu: an
};
function sn({
  menuLink: s,
  topMenuItem: t,
  subMenu: u
}) {
  const [c, v] = A(!1), p = X(null), y = D(() => {
    v(!c);
  }, [c]), i = D(
    (h) => {
      (h.key === "Escape" || h.key === "ArrowUp") && v(!1), h.key === "ArrowDown" && v(!0);
    },
    []
  ), l = D(
    (h) => {
      var w;
      let f = (w = h.relatedTarget) == null ? void 0 : w.parentNode;
      for (let m = 0; m < 8; m++)
        if (f = f == null ? void 0 : f.parentNode, f === p.current)
          return;
      v(!1);
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
          s(t.label, t.url, void 0),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: y,
              onKeyUp: i,
              "aria-label": `${t.label}`,
              "aria-expanded": c,
              className: j.expand
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: j.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: u(t.items, t.url) }) })
      ]
    }
  ) : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs("div", { className: j.top_menu_container, children: [
    s(t.label, t.url),
    /* @__PURE__ */ a.jsx("div", { className: j.expand_dummy })
  ] }) }, t.label);
}
function on({
  menuLink: s,
  topMenuItem: t,
  subMenu: u,
  unCheckSideMenu: c
}) {
  const [v, p] = A(!1), y = X(null), [i, l] = A(!1);
  I(() => {
    l(!0);
  }, []);
  const h = D(() => {
    p(!v);
  }, [v]);
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs("li", { className: j.subnav, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        "aria-expanded": v,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${t.label}`,
        onClick: () => {
          var f;
          (f = y.current) == null || f.click();
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
    /* @__PURE__ */ a.jsx("div", { className: j.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { children: u(t.items, t.url, c) }) })
  ] }, t.label) : /* @__PURE__ */ a.jsx("li", { children: s(t.label, t.url, c) }, t.label);
}
function ln({
  menuLink: s,
  homeLink: t,
  homeLogoLink: u,
  model: c,
  shortcutComponent: v,
  mobileStyle: p = {},
  desktopStyle: y = {},
  desktopClassName: i = "",
  mobileClassName: l = "",
  menuName: h = void 0
}) {
  const f = X(null), [w, m] = A(!1), [x, S] = A(!1);
  I(() => {
    S(!0);
  }, []);
  const P = (T, W) => W === void 0 || W === "" ? T : W.replace(/^#/, `${T}#`), L = () => {
    f.current && (f.current.checked = !1, document.body.style.overflow = "auto");
  }, N = (T) => {
    const W = T.target.checked;
    m(W), document.body.style.overflow = W ? "hidden" : "auto";
  }, k = (T, W, oe) => T.map((J) => /* @__PURE__ */ a.jsx("li", { children: s(
    J.label,
    P(W, J.url),
    oe
  ) }, J.label)), ie = c.map((T) => /* @__PURE__ */ a.jsx(
    sn,
    {
      menuLink: s,
      topMenuItem: T,
      subMenu: k
    },
    T.label
  )), se = c.map((T) => /* @__PURE__ */ a.jsx(
    on,
    {
      menuLink: s,
      topMenuItem: T,
      subMenu: k,
      unCheckSideMenu: L
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
                  className: `${j.hamb} ${x ? "show" : "hide"}`,
                  "aria-label": h || "Hamburger Menu",
                  onClick: () => {
                    var T;
                    (T = f.current) == null || T.click();
                  },
                  children: /* @__PURE__ */ a.jsx("span", { className: j.hamb_line })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "label",
                {
                  className: x ? "hide" : "show",
                  "aria-label": h || "Hamburger Menu",
                  children: /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      className: j.side__menu,
                      type: "checkbox",
                      ref: f,
                      onChange: N
                    }
                  )
                }
              )
            ] }),
            t("/", L, -1),
            v && v
          ] }),
          /* @__PURE__ */ a.jsxs("nav", { className: j.menu, children: [
            /* @__PURE__ */ a.jsx("ul", { role: "menu", children: se }),
            " "
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      "nav",
      {
        className: `${j.desktop__nav} ${i}`,
        style: y,
        "aria-label": h,
        children: /* @__PURE__ */ a.jsxs("ul", { children: [
          /* @__PURE__ */ a.jsx("li", { children: u(j.home_logo) }),
          ie,
          /* @__PURE__ */ a.jsx("li", { children: v && v })
        ] })
      }
    )
  ] });
}
const yn = Rr(ln, () => !0), cn = "_container_1er0x_1", un = "_reversed_1er0x_14", Me = {
  container: cn,
  reversed: un
};
function xn({
  model: s,
  className: t,
  isReversed: u = !1
}) {
  return /* @__PURE__ */ a.jsx(
    "ul",
    {
      className: `${Me.container} ${t} ${u ? Me.reversed : ""}`,
      children: s.map(({ content: c }, v) => /* @__PURE__ */ a.jsx("li", { children: c }, `sc-${v}`))
    }
  );
}
export {
  pn as Accordion,
  mn as Announcement,
  yn as Menu,
  gn as MiniMenu,
  ln as MutableMenu,
  xn as ScrollableCard,
  vn as consoleReportHandler,
  wr as debounce,
  hn as htmlConvertor,
  _n as reportWebVitals,
  dn as useNavigationListener,
  bn as useWindowListener
};
