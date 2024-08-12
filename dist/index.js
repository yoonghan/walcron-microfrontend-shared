import ee, { useEffect as Q, useState as J, useCallback as z, useMemo as xr, useRef as ve, memo as Er } from "react";
const Zr = ({
  appName: a,
  containerName: s,
  props: u
}) => {
  Q(() => {
    window.dispatchEvent(
      new CustomEvent(`[${a}] navigated`, { detail: u.pathname })
    );
  }, [a, u.pathname]), Q(() => {
    function h(E) {
      const b = E.detail;
      u.pathname !== b && u.navigate(b);
    }
    return window.addEventListener(
      `[${s}] navigated`,
      h
    ), () => {
      window.removeEventListener(
        `[${s}] navigated`,
        h
      );
    };
  }, [s, u]);
};
function Qr(a) {
  console.log(a);
}
function Rr(a) {
  const s = a.value;
  return a.name === "CLS" ? Math.round(s * 1e3) : Math.round(s);
}
function en(a) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: a.name,
    eventValue: Rr(a),
    eventLabel: a.id,
    nonInteraction: !0
  });
}
const rn = (a) => {
  a && a instanceof Function && import("./web-vitals-C2duWsRR.js").then(({ onCLS: s, onFID: u, onFCP: h, onLCP: E, onTTFB: b }) => {
    s(a), u(a), h(a), E(a), b(a);
  });
};
function jr(a, s) {
  let u;
  return () => {
    /* istanbul ignore if -- @preserve */
    u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, a();
    }, s);
  };
}
var he = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function kr() {
  if (Ye)
    return H;
  Ye = 1;
  var a = ee, s = Symbol.for("react.element"), u = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, E = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(o, c, j) {
    var g, w = {}, p = null, y = null;
    j !== void 0 && (p = "" + j), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (g in c)
      h.call(c, g) && !b.hasOwnProperty(g) && (w[g] = c[g]);
    if (o && o.defaultProps)
      for (g in c = o.defaultProps, c)
        w[g] === void 0 && (w[g] = c[g]);
    return { $$typeof: s, type: o, key: p, ref: y, props: w, _owner: E.current };
  }
  return H.Fragment = u, H.jsx = k, H.jsxs = k, H;
}
var U = {};
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
function wr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ee, s = Symbol.for("react.element"), u = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[A];
      return typeof r == "function" ? r : null;
    }
    var d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          n[i - 1] = arguments[i];
        re("error", e, n);
      }
    }
    function re(e, r, n) {
      {
        var i = d.ReactDebugCurrentFrame, v = i.getStackAddendum();
        v !== "" && (r += "%s", n = n.concat([v]));
        var m = n.map(function(f) {
          return String(f);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Y = !1, Me = !1, Be = !1, He = !1, Ue = !1, _e;
    _e = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === b || Ue || e === E || e === j || e === g || He || e === y || Y || Me || Be || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === w || e.$$typeof === k || e.$$typeof === o || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _e || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var i = e.displayName;
      if (i)
        return i;
      var v = r.displayName || r.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case u:
          return "Portal";
        case b:
          return "Profiler";
        case E:
          return "StrictMode";
        case j:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return me(r) + ".Consumer";
          case k:
            var n = e;
            return me(n._context) + ".Provider";
          case c:
            return Je(e, e.render, "ForwardRef");
          case w:
            var i = e.displayName || null;
            return i !== null ? i : $(e.type) || "Memo";
          case p: {
            var v = e, m = v._payload, f = v._init;
            try {
              return $(f(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, V = 0, be, ge, ye, xe, Ee, Re, je;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function qe() {
      {
        if (V === 0) {
          be = console.log, ge = console.info, ye = console.warn, xe = console.error, Ee = console.group, Re = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ke,
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
        V++;
      }
    }
    function Ke() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: be
            }),
            info: W({}, e, {
              value: ge
            }),
            warn: W({}, e, {
              value: ye
            }),
            error: W({}, e, {
              value: xe
            }),
            group: W({}, e, {
              value: Ee
            }),
            groupCollapsed: W({}, e, {
              value: Re
            }),
            groupEnd: W({}, e, {
              value: je
            })
          });
        }
        V < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = d.ReactCurrentDispatcher, te;
    function q(e, r, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (v) {
            var i = v.stack.trim().match(/\n( *(at )?)/);
            te = i && i[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ae = !1, K;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ge();
    }
    function we(e, r) {
      if (!e || ae)
        return "";
      {
        var n = K.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      ae = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = ne.current, ne.current = null, qe();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (S) {
              i = S;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (S) {
              i = S;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            i = S;
          }
          e();
        }
      } catch (S) {
        if (S && i && typeof S.stack == "string") {
          for (var l = S.stack.split(`
`), T = i.stack.split(`
`), x = l.length - 1, R = T.length - 1; x >= 1 && R >= 0 && l[x] !== T[R]; )
            R--;
          for (; x >= 1 && R >= 0; x--, R--)
            if (l[x] !== T[R]) {
              if (x !== 1 || R !== 1)
                do
                  if (x--, R--, R < 0 || l[x] !== T[R]) {
                    var P = `
` + l[x].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, P), P;
                  }
                while (x >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ne.current = m, Ke(), Error.prepareStackTrace = v;
      }
      var L = e ? e.displayName || e.name : "", F = L ? q(L) : "";
      return typeof e == "function" && K.set(e, F), F;
    }
    function Xe(e, r, n) {
      return we(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, Ze(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case j:
          return q("Suspense");
        case g:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Xe(e.render);
          case w:
            return G(e.type, r, n);
          case p: {
            var i = e, v = i._payload, m = i._init;
            try {
              return G(m(v), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, Te = {}, Ce = d.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Qe(e, r, n, i, v) {
      {
        var m = Function.call.bind(M);
        for (var f in e)
          if (m(e, f)) {
            var l = void 0;
            try {
              if (typeof e[f] != "function") {
                var T = Error((i || "React class") + ": " + n + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              l = e[f](r, f, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              l = x;
            }
            l && !(l instanceof Error) && (X(v), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, f, typeof l), X(null)), l instanceof Error && !(l.message in Te) && (Te[l.message] = !0, X(v), _("Failed %s type: %s", n, l.message), X(null));
          }
      }
    }
    var er = Array.isArray;
    function ie(e) {
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
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Se(e) {
      if (nr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Oe(e);
    }
    var B = d.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Ae, oe;
    oe = {};
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
    function or(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var n = $(B.current.type);
        oe[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(B.current.type), e.ref), oe[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          Pe || (Pe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ae || (Ae = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, n, i, v, m, f) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: f,
        // Record the component responsible for creating this element.
        _owner: m
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
        value: i
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ur(e, r, n, i, v) {
      {
        var m, f = {}, l = null, T = null;
        n !== void 0 && (Se(n), l = "" + n), ir(r) && (Se(r.key), l = "" + r.key), ar(r) && (T = r.ref, or(r, v));
        for (m in r)
          M.call(r, m) && !tr.hasOwnProperty(m) && (f[m] = r[m]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (m in x)
            f[m] === void 0 && (f[m] = x[m]);
        }
        if (l || T) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && sr(f, R), T && cr(f, R);
        }
        return lr(e, l, T, v, i, B.current, f);
      }
    }
    var se = d.ReactCurrentOwner, $e = d.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        $e.setExtraStackFrame(n);
      } else
        $e.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function We() {
      {
        if (se.current) {
          var e = $(se.current.type);
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
    var Fe = {};
    function dr(e) {
      {
        var r = We();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (Fe[n])
          return;
        Fe[n] = !0;
        var i = "";
        e && e._owner && e._owner !== se.current && (i = " It was passed a child from " + $(e._owner.type) + "."), D(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), D(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            le(i) && Ne(i, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = N(e);
          if (typeof v == "function" && v !== e.entries)
            for (var m = v.call(e), f; !(f = m.next()).done; )
              le(f.value) && Ne(f.value, r);
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
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var i = $(r);
          Qe(n, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var v = $(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var i = r[n];
          if (i !== "children" && i !== "key") {
            D(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Le = {};
    function Ie(e, r, n, i, v, m) {
      {
        var f = ze(e);
        if (!f) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = fr();
          T ? l += T : l += We();
          var x;
          e === null ? x = "null" : ie(e) ? x = "array" : e !== void 0 && e.$$typeof === s ? (x = "<" + ($(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, l);
        }
        var R = ur(e, r, n, v, m);
        if (R == null)
          return R;
        if (f) {
          var P = r.children;
          if (P !== void 0)
            if (i)
              if (ie(P)) {
                for (var L = 0; L < P.length; L++)
                  De(P[L], e);
                Object.freeze && Object.freeze(P);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(P, e);
        }
        if (M.call(r, "key")) {
          var F = $(e), S = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ue = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Le[F + ue]) {
            var gr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, F, gr, F), Le[F + ue] = !0;
          }
        }
        return e === h ? hr(R) : vr(R), R;
      }
    }
    function pr(e, r, n) {
      return Ie(e, r, n, !0);
    }
    function _r(e, r, n) {
      return Ie(e, r, n, !1);
    }
    var mr = _r, br = pr;
    U.Fragment = h, U.jsx = mr, U.jsxs = br;
  }()), U;
}
process.env.NODE_ENV === "production" ? he.exports = kr() : he.exports = wr();
var t = he.exports;
const fe = `
`, pe = "[\\.|,]", Tr = new RegExp(
  `.*\\]${pe}?$`
), Cr = new RegExp(
  `\\]${pe}?$`,
  "g"
), Or = new RegExp(
  `${pe}$`
);
function nn(a, s) {
  function u(o, c) {
    if (o.match(Tr) && o.indexOf("|") > -1) {
      const j = o.replace(
        Cr,
        "]"
      ), w = j.substring(
        1,
        j.length - 1
      ).split("|"), p = w[0], y = w[1].replaceAll(
        fe,
        " "
      );
      return /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
        s(p, y),
        o.match(Or) ? `${o.slice(-1)}` : ""
      ] }, c);
    }
    return o;
  }
  const k = ((o) => {
    const c = o.split("|");
    return c.length > 1 ? c.map((j) => {
      const g = j.split("]");
      return g.length === 2 ? `${g[0].replaceAll(
        " ",
        fe
      )}]${g[1]}` : j;
    }).join("|") : o;
  })(a).split(" ").map((o, c) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: o.substring(1, o.length) }, c) : o.startsWith("[") ? u(o, c) : o === "!!" ? /* @__PURE__ */ t.jsx("br", {}, c) : o.replaceAll(fe, " ")).reduce(
    (o, c) => [...o, " ", c],
    []
  );
  return k.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: k });
}
const tn = () => {
  const [a, s] = J({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return Q(() => {
    const u = jr(function() {
      s({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, []), a;
}, an = ({ color: a }) => /* @__PURE__ */ t.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ t.jsx("span", { children: a })
] }), Sr = "_footer_ttkno_1", Pr = {
  footer: Sr
}, on = ({
  companyName: a = "Walcron",
  establishedYear: s = 2014,
  lastUpdatedYear: u
}) => /* @__PURE__ */ t.jsxs("div", { className: Pr.footer, children: [
  /* @__PURE__ */ t.jsx("hr", {}),
  /* @__PURE__ */ t.jsxs("div", { children: [
    a,
    " ",
    s,
    " - ",
    u,
    " ©"
  ] })
] }), Ar = "_copyright_1c7c9_1", $r = {
  copyright: Ar
}, sn = ({
  companyName: a = "Walcron",
  link: s = "/",
  lastUpdatedYear: u
}) => /* @__PURE__ */ t.jsxs("div", { className: $r.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ t.jsx("a", { color: "inherit", href: s, children: a }),
  " ",
  u,
  "."
] });
function cn({
  statusText: a,
  message: s
}) {
  return /* @__PURE__ */ t.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ t.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ t.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ t.jsx("p", { children: /* @__PURE__ */ t.jsx("i", { children: a || s || "Error message is unknown." }) })
  ] });
}
const Wr = "_accordion_okvze_1", Fr = "_tab_okvze_27", Nr = "_tab__content_okvze_38", de = {
  accordion: Wr,
  tab: Fr,
  tab__content: Nr
};
function ln({
  model: a,
  groupName: s,
  isSingle: u = !0
}) {
  const [h, E] = J(""), b = z(
    (o) => {
      const c = o.currentTarget;
      h === c.value ? (c.checked = !1, E("")) : E(c.value);
    },
    [h]
  ), k = xr(
    () => a.map((o, c) => /* @__PURE__ */ t.jsxs("div", { className: de.tab, children: [
      /* @__PURE__ */ t.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: u ? "radio" : "checkbox",
            value: c,
            name: s,
            onClick: u ? b : void 0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: de.tab__content, children: /* @__PURE__ */ t.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [a, u, s, b]
  );
  return /* @__PURE__ */ t.jsx("div", { className: de.accordion, children: k });
}
const Dr = "_announcement_149a8_1", Lr = "_only_one_149a8_11", Ir = "_close_149a8_25", Yr = "_button_prev_149a8_77", I = {
  announcement: Dr,
  only_one: Lr,
  close: Ir,
  button_prev: Yr
};
function un({
  ariaAnnouncementTitle: a,
  announcements: s,
  classes: u = ""
}) {
  const [h, E] = J(0), b = () => E(h - 1 >= 0 ? h - 1 : s.length - 1), k = () => E(s.length > h + 1 ? h + 1 : 0), o = s.length === 1;
  return s.length < 1 ? null : /* @__PURE__ */ t.jsxs(
    "div",
    {
      role: "status",
      title: a,
      className: `${I.announcement} ${o ? I.only_one : ""} ${u}`,
      children: [
        !o && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: b,
            className: `${I.button} ${I.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: s[h] }),
        !o && /* @__PURE__ */ t.jsx("button", { onClick: k, className: I.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ t.jsxs("label", { className: I.close, children: [
          /* @__PURE__ */ t.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ t.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Vr = "_minimenu_1c4fs_1", Mr = "_sticky_1c4fs_1", Br = "_underline_1c4fs_27", Z = {
  minimenu: Vr,
  sticky: Mr,
  underline: Br
};
function fn({ model: a, onScrollMonitor: s }) {
  const [u, h] = J(0), E = ve([]), b = ve(null), [k, o] = J(0), c = z(() => {
    s && s(), b.current && (window.scrollY > k ? b.current.classList.add(Z.sticky) : b.current.classList.remove(Z.sticky));
  }, [k, s]), j = z(
    (p) => {
      const y = p[0].target, O = a.findIndex((d) => d.hashId === y.id), A = O < 0 ? 0 : O, N = E.current[A];
      N !== null && p[0].isIntersecting && (N.scrollIntoViewIfNeeded(!0), h(A));
    },
    [a]
  ), g = z(() => {
    const p = new IntersectionObserver(j, {
      threshold: [0.3]
      //never accurate but it's the best
    }), y = new IntersectionObserver(j, {
      threshold: [1]
    });
    return a.forEach((O) => {
      const A = document.getElementById(O.hashId);
      A !== null && (A.clientHeight < window.innerHeight ? y.observe(A) : p.observe(A));
    }), [p, y];
  }, [j, a]), w = z(
    (p) => () => {
      h(p);
    },
    []
  );
  return Q(() => {
    var y;
    const p = g();
    return o(((y = b.current) == null ? void 0 : y.getBoundingClientRect().top) || 0), c(), window.addEventListener("scroll", c), () => {
      window.removeEventListener("scroll", c), p.forEach((O) => O.disconnect());
    };
  }, [c, g]), /* @__PURE__ */ t.jsx("nav", { className: Z.minimenu, ref: b, children: a.map((p, y) => /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
    y !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${p.hashId}`,
        ref: (O) => {
          E.current[y] = O;
        },
        className: y === u ? `${Z.underline} italic` : void 0,
        onClick: w(y),
        children: /* @__PURE__ */ t.jsx("span", { children: p.title })
      }
    )
  ] }, p.hashId)) });
}
const Hr = "_desktop__nav_1kcx8_1", Ur = "_mobile__nav_1kcx8_1", zr = "_menu_1kcx8_53", Jr = "_subnav_1kcx8_60", qr = "_grow_1kcx8_1", Kr = "_hamb_1kcx8_127", C = {
  desktop__nav: Hr,
  mobile__nav: Ur,
  "home-logo": "_home-logo_1kcx8_48",
  menu: zr,
  "subnav-content": "_subnav-content_1kcx8_60",
  subnav: Jr,
  grow: qr,
  "mobile-menu": "_mobile-menu_1kcx8_119",
  hamb: Kr,
  "hamb-line": "_hamb-line_1kcx8_132",
  "hamb-hidden": "_hamb-hidden_1kcx8_158",
  "top-menu": "_top-menu_1kcx8_162",
  "side-menu": "_side-menu_1kcx8_163"
};
function Gr({
  menuLink: a,
  homeLink: s,
  homeLogoLink: u,
  model: h,
  mobileHomeText: E,
  shortcutComponent: b,
  mobileStyle: k = {},
  desktopStyle: o = {},
  desktopClassName: c = "",
  mobileClassName: j = ""
}) {
  const g = ve(null), w = (d, _) => _ === void 0 || _ === "" ? d : _.replace(/^#/, `${d}#`), p = () => {
    g.current && (g.current.checked = !1, document.body.style.overflow = "auto");
  }, y = (d) => {
    document.body.style.overflow = d.target.checked ? "hidden" : "auto";
  }, O = (d, _, re) => d.map((Y) => /* @__PURE__ */ t.jsx("li", { role: "presentation", children: a(
    Y.label,
    w(_, Y.url),
    "menuitem",
    re
  ) }, Y.label)), A = h.map((d) => {
    const _ = d.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: _ ? C.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          a(d.label, d.url, "menuitem"),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: C["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: O(d.items, d.url, p) }) })
        ] })
      },
      d.label
    );
  }), N = h.map((d) => {
    const _ = d.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: _ ? C.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          _ ? /* @__PURE__ */ t.jsxs("label", { role: "menuitem", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                className: C["top-menu"],
                type: "radio",
                name: "top-menu"
              }
            ),
            d.label
          ] }) : a(
            d.label,
            d.url,
            "menuitem",
            p
          ),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: C["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: O(d.items, d.url, p) }) })
        ] })
      },
      d.label
    );
  });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${C.mobile__nav} ${j}`,
        style: k,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: C["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("label", { className: C.hamb, "aria-label": "Main Menu", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  className: C["side-menu"],
                  type: "checkbox",
                  ref: g,
                  onChange: y
                }
              ),
              /* @__PURE__ */ t.jsx("span", { className: C["hamb-line"] }),
              /* @__PURE__ */ t.jsx("span", { className: C["hamb-hidden"], children: "Hamburger Menu" })
            ] }),
            s(E, "/", p, -1),
            b && b
          ] }),
          /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: C.menu, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: N }) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${C.desktop__nav} ${c}`,
        style: o,
        children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: C.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: u(C["home-logo"]) }),
          A,
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: b && b })
        ] }) })
      }
    )
  ] });
}
const dn = Er(Gr, () => !0);
export {
  ln as Accordion,
  un as Announcement,
  sn as Copyright,
  cn as ErrorPage,
  on as Footer,
  an as Logo,
  dn as Menu,
  fn as MiniMenu,
  Gr as MutableMenu,
  Qr as consoleReportHandler,
  jr as debounce,
  en as gaReportHandler,
  nn as htmlConvertor,
  rn as reportWebVitals,
  Zr as useNavigationListener,
  tn as useWindowListener
};
