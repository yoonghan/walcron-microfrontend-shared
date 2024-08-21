import ee, { useEffect as Q, useState as J, useCallback as U, useMemo as Er, useRef as ve, memo as xr } from "react";
const Qr = ({
  appName: a,
  containerName: i,
  props: c
}) => {
  Q(() => {
    window.dispatchEvent(
      new CustomEvent(`[${a}] navigated`, { detail: c.pathname })
    );
  }, [a, c.pathname]), Q(() => {
    function h(R) {
      const g = R.detail;
      c.pathname !== g && c.navigate(g);
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
  }, [i, c]);
};
function en(a) {
  console.log(a);
}
function Rr(a) {
  const i = a.value;
  return a.name === "CLS" ? Math.round(i * 1e3) : Math.round(i);
}
function rn(a) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: a.name,
    eventValue: Rr(a),
    eventLabel: a.id,
    nonInteraction: !0
  });
}
const nn = (a) => {
  a && a instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: i, onINP: c, onLCP: h }) => {
    i(a), c(a), h(a);
  });
};
function tn({ name: a, delta: i, id: c }) {
  gtag("event", a, {
    value: i,
    metric_id: c
  });
}
function jr(a, i) {
  let c;
  return () => {
    /* istanbul ignore if -- @preserve */
    c !== null && clearTimeout(c), c = setTimeout(() => {
      c = null, a();
    }, i);
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
var Ie;
function wr() {
  if (Ie)
    return H;
  Ie = 1;
  var a = ee, i = Symbol.for("react.element"), c = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, R = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(s, l, j) {
    var b, k = {}, p = null, y = null;
    j !== void 0 && (p = "" + j), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (b in l)
      h.call(l, b) && !g.hasOwnProperty(b) && (k[b] = l[b]);
    if (s && s.defaultProps)
      for (b in l = s.defaultProps, l)
        k[b] === void 0 && (k[b] = l[b]);
    return { $$typeof: i, type: s, key: p, ref: y, props: k, _owner: R.current };
  }
  return H.Fragment = c, H.jsx = w, H.jsxs = w, H;
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
var Ye;
function kr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ee, i = Symbol.for("react.element"), c = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = Symbol.iterator, $ = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[$];
      return typeof r == "function" ? r : null;
    }
    var d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        re("error", e, n);
      }
    }
    function re(e, r, n) {
      {
        var o = d.ReactDebugCurrentFrame, v = o.getStackAddendum();
        v !== "" && (r += "%s", n = n.concat([v]));
        var m = n.map(function(f) {
          return String(f);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var I = !1, Ve = !1, Be = !1, He = !1, Me = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === g || Me || e === R || e === j || e === b || He || e === y || I || Ve || Be || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === k || e.$$typeof === w || e.$$typeof === s || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _e || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var v = r.displayName || r.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case c:
          return "Portal";
        case g:
          return "Profiler";
        case R:
          return "StrictMode";
        case j:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var r = e;
            return me(r) + ".Consumer";
          case w:
            var n = e;
            return me(n._context) + ".Provider";
          case l:
            return Je(e, e.render, "ForwardRef");
          case k:
            var o = e.displayName || null;
            return o !== null ? o : A(e.type) || "Memo";
          case p: {
            var v = e, m = v._payload, f = v._init;
            try {
              return A(f(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, Y = 0, be, ge, ye, Ee, xe, Re, je;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function qe() {
      {
        if (Y === 0) {
          be = console.log, ge = console.info, ye = console.warn, Ee = console.error, xe = console.group, Re = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
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
        Y++;
      }
    }
    function Ke() {
      {
        if (Y--, Y === 0) {
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
              value: Ee
            }),
            group: W({}, e, {
              value: xe
            }),
            groupCollapsed: W({}, e, {
              value: Re
            }),
            groupEnd: W({}, e, {
              value: je
            })
          });
        }
        Y < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = d.ReactCurrentDispatcher, te;
    function q(e, r, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (v) {
            var o = v.stack.trim().match(/\n( *(at )?)/);
            te = o && o[1] || "";
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
    function ke(e, r) {
      if (!e || ae)
        return "";
      {
        var n = K.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
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
              o = S;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (S) {
              o = S;
            }
            e.call(f.prototype);
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
`), C = o.stack.split(`
`), E = u.length - 1, x = C.length - 1; E >= 1 && x >= 0 && u[E] !== C[x]; )
            x--;
          for (; E >= 1 && x >= 0; E--, x--)
            if (u[E] !== C[x]) {
              if (E !== 1 || x !== 1)
                do
                  if (E--, x--, x < 0 || u[E] !== C[x]) {
                    var P = `
` + u[E].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, P), P;
                  }
                while (E >= 1 && x >= 0);
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
      return ke(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, Ze(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case j:
          return q("Suspense");
        case b:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Xe(e.render);
          case k:
            return G(e.type, r, n);
          case p: {
            var o = e, v = o._payload, m = o._init;
            try {
              return G(m(v), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Te = {}, Ce = d.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Qe(e, r, n, o, v) {
      {
        var m = Function.call.bind(V);
        for (var f in e)
          if (m(e, f)) {
            var u = void 0;
            try {
              if (typeof e[f] != "function") {
                var C = Error((o || "React class") + ": " + n + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              u = e[f](r, f, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              u = E;
            }
            u && !(u instanceof Error) && (X(v), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, f, typeof u), X(null)), u instanceof Error && !(u.message in Te) && (Te[u.message] = !0, X(v), _("Failed %s type: %s", n, u.message), X(null));
          }
      }
    }
    var er = Array.isArray;
    function oe(e) {
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
    }, Pe, $e, ie;
    ie = {};
    function ar(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var n = A(B.current.type);
        ie[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(B.current.type), e.ref), ie[n] = !0);
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
    function lr(e, r) {
      {
        var n = function() {
          $e || ($e = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, o, v, m, f) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: f,
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
        value: v
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, n, o, v) {
      {
        var m, f = {}, u = null, C = null;
        n !== void 0 && (Se(n), u = "" + n), or(r) && (Se(r.key), u = "" + r.key), ar(r) && (C = r.ref, ir(r, v));
        for (m in r)
          V.call(r, m) && !tr.hasOwnProperty(m) && (f[m] = r[m]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (m in E)
            f[m] === void 0 && (f[m] = E[m]);
        }
        if (u || C) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && sr(f, x), C && lr(f, x);
        }
        return cr(e, u, C, v, o, B.current, f);
      }
    }
    var se = d.ReactCurrentOwner, Ae = d.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(n);
      } else
        Ae.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function We() {
      {
        if (se.current) {
          var e = A(se.current.type);
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
        var o = "";
        e && e._owner && e._owner !== se.current && (o = " It was passed a child from " + A(e._owner.type) + "."), D(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), D(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            ce(o) && Ne(o, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = N(e);
          if (typeof v == "function" && v !== e.entries)
            for (var m = v.call(e), f; !(f = m.next()).done; )
              ce(f.value) && Ne(f.value, r);
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
        r.$$typeof === k))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = A(r);
          Qe(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var v = A(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            D(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Le = {};
    function ze(e, r, n, o, v, m) {
      {
        var f = Ue(e);
        if (!f) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr();
          C ? u += C : u += We();
          var E;
          e === null ? E = "null" : oe(e) ? E = "array" : e !== void 0 && e.$$typeof === i ? (E = "<" + (A(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, u);
        }
        var x = ur(e, r, n, v, m);
        if (x == null)
          return x;
        if (f) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (oe(P)) {
                for (var L = 0; L < P.length; L++)
                  De(P[L], e);
                Object.freeze && Object.freeze(P);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(P, e);
        }
        if (V.call(r, "key")) {
          var F = A(e), S = Object.keys(r).filter(function(yr) {
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
        return e === h ? hr(x) : vr(x), x;
      }
    }
    function pr(e, r, n) {
      return ze(e, r, n, !0);
    }
    function _r(e, r, n) {
      return ze(e, r, n, !1);
    }
    var mr = _r, br = pr;
    M.Fragment = h, M.jsx = mr, M.jsxs = br;
  }()), M;
}
process.env.NODE_ENV === "production" ? he.exports = wr() : he.exports = kr();
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
function an(a, i) {
  function c(s, l) {
    if (s.match(Tr) && s.indexOf("|") > -1) {
      const j = s.replace(
        Cr,
        "]"
      ), k = j.substring(
        1,
        j.length - 1
      ).split("|"), p = k[0], y = k[1].replaceAll(
        fe,
        " "
      );
      return /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
        i(p, y),
        s.match(Or) ? `${s.slice(-1)}` : ""
      ] }, l);
    }
    return s;
  }
  const w = ((s) => {
    const l = s.split("|");
    return l.length > 1 ? l.map((j) => {
      const b = j.split("]");
      return b.length === 2 ? `${b[0].replaceAll(
        " ",
        fe
      )}]${b[1]}` : j;
    }).join("|") : s;
  })(a).split(" ").map((s, l) => s.length < 2 ? s : s.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: s.substring(1, s.length) }, l) : s.startsWith("[") ? c(s, l) : s === "!!" ? /* @__PURE__ */ t.jsx("br", {}, l) : s.replaceAll(fe, " ")).reduce(
    (s, l) => [...s, " ", l],
    []
  );
  return w.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: w });
}
const on = () => {
  const [a, i] = J({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return Q(() => {
    const c = jr(function() {
      i({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", c), () => {
      window.removeEventListener("resize", c);
    };
  }, []), a;
}, sn = ({ color: a }) => /* @__PURE__ */ t.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ t.jsx("span", { children: a })
] }), Sr = "_footer_ttkno_1", Pr = {
  footer: Sr
}, ln = ({
  companyName: a = "Walcron",
  establishedYear: i = 2014,
  lastUpdatedYear: c
}) => /* @__PURE__ */ t.jsxs("div", { className: Pr.footer, children: [
  /* @__PURE__ */ t.jsx("hr", {}),
  /* @__PURE__ */ t.jsxs("div", { children: [
    a,
    " ",
    i,
    " - ",
    c,
    " ©"
  ] })
] }), $r = "_copyright_1c7c9_1", Ar = {
  copyright: $r
}, cn = ({
  companyName: a = "Walcron",
  link: i = "/",
  lastUpdatedYear: c
}) => /* @__PURE__ */ t.jsxs("div", { className: Ar.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ t.jsx("a", { color: "inherit", href: i, children: a }),
  " ",
  c,
  "."
] });
function un({
  statusText: a,
  message: i
}) {
  return /* @__PURE__ */ t.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ t.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ t.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ t.jsx("p", { children: /* @__PURE__ */ t.jsx("i", { children: a || i || "Error message is unknown." }) })
  ] });
}
const Wr = "_accordion_okvze_1", Fr = "_tab_okvze_27", Nr = "_tab__content_okvze_38", de = {
  accordion: Wr,
  tab: Fr,
  tab__content: Nr
};
function fn({
  model: a,
  groupName: i,
  isSingle: c = !0
}) {
  const [h, R] = J(""), g = U(
    (s) => {
      const l = s.currentTarget;
      h === l.value ? (l.checked = !1, R("")) : R(l.value);
    },
    [h]
  ), w = Er(
    () => a.map((s, l) => /* @__PURE__ */ t.jsxs("div", { className: de.tab, children: [
      /* @__PURE__ */ t.jsxs("label", { children: [
        s.label,
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: c ? "radio" : "checkbox",
            value: l,
            name: i,
            onClick: c ? g : void 0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: de.tab__content, children: /* @__PURE__ */ t.jsx("p", { children: s.content }) })
    ] }, s.label)),
    [a, c, i, g]
  );
  return /* @__PURE__ */ t.jsx("div", { className: de.accordion, children: w });
}
const Dr = "_announcement_149a8_1", Lr = "_only_one_149a8_11", zr = "_close_149a8_25", Ir = "_button_prev_149a8_77", z = {
  announcement: Dr,
  only_one: Lr,
  close: zr,
  button_prev: Ir
};
function dn({
  ariaAnnouncementTitle: a,
  announcements: i,
  classes: c = ""
}) {
  const [h, R] = J(0), g = () => R(h - 1 >= 0 ? h - 1 : i.length - 1), w = () => R(i.length > h + 1 ? h + 1 : 0), s = i.length === 1;
  return i.length < 1 ? null : /* @__PURE__ */ t.jsxs(
    "div",
    {
      role: "status",
      title: a,
      className: `${z.announcement} ${s ? z.only_one : ""} ${c}`,
      children: [
        !s && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: g,
            className: `${z.button} ${z.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: i[h] }),
        !s && /* @__PURE__ */ t.jsx("button", { onClick: w, className: z.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ t.jsxs("label", { className: z.close, children: [
          /* @__PURE__ */ t.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ t.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Yr = "_minimenu_1c4fs_1", Vr = "_sticky_1c4fs_1", Br = "_underline_1c4fs_27", Z = {
  minimenu: Yr,
  sticky: Vr,
  underline: Br
};
function vn({ model: a, onScrollMonitor: i }) {
  const [c, h] = J(0), R = ve([]), g = ve(null), [w, s] = J(0), l = U(() => {
    i && i(), g.current && (window.scrollY > w ? g.current.classList.add(Z.sticky) : g.current.classList.remove(Z.sticky));
  }, [w, i]), j = U(
    (p) => {
      const y = p[0].target, O = a.findIndex((d) => d.hashId === y.id), $ = O < 0 ? 0 : O, N = R.current[$];
      N !== null && p[0].isIntersecting && (N.scrollIntoViewIfNeeded(!0), h($));
    },
    [a]
  ), b = U(() => {
    const p = new IntersectionObserver(j, {
      threshold: [0.3]
      //never accurate but it's the best
    }), y = new IntersectionObserver(j, {
      threshold: [1]
    });
    return a.forEach((O) => {
      const $ = document.getElementById(O.hashId);
      $ !== null && ($.clientHeight < window.innerHeight ? y.observe($) : p.observe($));
    }), [p, y];
  }, [j, a]), k = U(
    (p) => () => {
      h(p);
    },
    []
  );
  return Q(() => {
    var y;
    const p = b();
    return s(((y = g.current) == null ? void 0 : y.getBoundingClientRect().top) || 0), l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l), p.forEach((O) => O.disconnect());
    };
  }, [l, b]), /* @__PURE__ */ t.jsx("nav", { className: Z.minimenu, ref: g, children: a.map((p, y) => /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
    y !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${p.hashId}`,
        ref: (O) => {
          R.current[y] = O;
        },
        className: y === c ? `${Z.underline} italic` : void 0,
        onClick: k(y),
        children: /* @__PURE__ */ t.jsx("span", { children: p.title })
      }
    )
  ] }, p.hashId)) });
}
const Hr = "_desktop__nav_g3az5_1", Mr = "_mobile__nav_g3az5_1", Ur = "_menu_g3az5_53", Jr = "_subnav_g3az5_60", qr = "_grow_g3az5_1", Kr = "_hamb_g3az5_128", Gr = "_top__menu_g3az5_209", T = {
  desktop__nav: Hr,
  mobile__nav: Mr,
  "home-logo": "_home-logo_g3az5_48",
  menu: Ur,
  "subnav-content": "_subnav-content_g3az5_60",
  subnav: Jr,
  grow: qr,
  "mobile-menu": "_mobile-menu_g3az5_120",
  hamb: Kr,
  "hamb-line": "_hamb-line_g3az5_133",
  "hamb-hidden": "_hamb-hidden_g3az5_159",
  "top-menu": "_top-menu_g3az5_163",
  "side-menu": "_side-menu_g3az5_164",
  top__menu: Gr
};
function Xr({
  menuLink: a,
  homeLink: i,
  homeLogoLink: c,
  model: h,
  mobileHomeText: R,
  shortcutComponent: g,
  mobileStyle: w = {},
  desktopStyle: s = {},
  desktopClassName: l = "",
  mobileClassName: j = ""
}) {
  const b = ve(null), k = (d, _) => _ === void 0 || _ === "" ? d : _.replace(/^#/, `${d}#`), p = () => {
    b.current && (b.current.checked = !1, document.body.style.overflow = "auto");
  }, y = (d) => {
    document.body.style.overflow = d.target.checked ? "hidden" : "auto";
  }, O = (d, _, re) => d.map((I) => /* @__PURE__ */ t.jsx("li", { role: "presentation", children: a(
    I.label,
    k(_, I.url),
    "menuitem",
    re
  ) }, I.label)), $ = h.map((d) => {
    const _ = d.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: _ ? T.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          a(d.label, d.url, "menuitem"),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: T["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: O(d.items, d.url, p) }) })
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
        className: _ ? T.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          _ ? /* @__PURE__ */ t.jsxs("label", { className: T.top__menu, children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                className: T["top-menu"],
                type: "radio",
                name: "top-menu",
                value: d.label
              }
            ),
            d.label
          ] }) : a(
            d.label,
            d.url,
            "menuitem",
            p
          ),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: T["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: O(d.items, d.url, p) }) })
        ] })
      },
      d.label
    );
  });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${T.mobile__nav} ${j}`,
        style: w,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: T["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("label", { className: T.hamb, "aria-label": "Main Menu", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  className: T["side-menu"],
                  type: "checkbox",
                  ref: b,
                  onChange: y
                }
              ),
              /* @__PURE__ */ t.jsx("span", { className: T["hamb-line"] }),
              /* @__PURE__ */ t.jsx("span", { className: T["hamb-hidden"], children: "Hamburger Menu" })
            ] }),
            i(R, "/", p, -1),
            g && g
          ] }),
          /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: T.menu, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: N }) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${T.desktop__nav} ${l}`,
        style: s,
        children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: T.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: c(T["home-logo"]) }),
          $,
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: g && g })
        ] }) })
      }
    )
  ] });
}
const hn = xr(Xr, () => !0);
export {
  fn as Accordion,
  dn as Announcement,
  cn as Copyright,
  un as ErrorPage,
  ln as Footer,
  sn as Logo,
  hn as Menu,
  vn as MiniMenu,
  Xr as MutableMenu,
  en as consoleReportHandler,
  jr as debounce,
  rn as gaReportHandler,
  tn as gtagReportHandler,
  an as htmlConvertor,
  nn as reportWebVitals,
  Qr as useNavigationListener,
  on as useWindowListener
};
