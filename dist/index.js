import ee, { useEffect as Q, useState as J, useCallback as H, useMemo as xr, useRef as ve, memo as Er } from "react";
const Qr = ({
  appName: i,
  containerName: s,
  props: u
}) => {
  Q(() => {
    window.dispatchEvent(
      new CustomEvent(`[${i}] navigated`, { detail: u.pathname })
    );
  }, [i, u.pathname]), Q(() => {
    function h(j) {
      const g = j.detail;
      u.pathname !== g && u.navigate(g);
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
function en(i) {
  console.log(i);
}
const jr = (i) => (s) => {
  i({
    ...s,
    delta: s.delta * 1e3
  });
}, rn = (i) => {
  i && i instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: s, onINP: u, onLCP: h }) => {
    s(jr(i)), u(i), h(i);
  });
};
function Rr(i, s) {
  let u;
  return () => {
    /* istanbul ignore if -- @preserve */
    u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, i();
    }, s);
  };
}
var he = { exports: {} }, U = {};
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
    return U;
  Ie = 1;
  var i = ee, s = Symbol.for("react.element"), u = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, j = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(o, l, R) {
    var b, k = {}, _ = null, y = null;
    R !== void 0 && (_ = "" + R), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (b in l)
      h.call(l, b) && !g.hasOwnProperty(b) && (k[b] = l[b]);
    if (o && o.defaultProps)
      for (b in l = o.defaultProps, l)
        k[b] === void 0 && (k[b] = l[b]);
    return { $$typeof: s, type: o, key: _, ref: y, props: k, _owner: j.current };
  }
  return U.Fragment = u, U.jsx = w, U.jsxs = w, U;
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
    var i = ee, s = Symbol.for("react.element"), u = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[A];
      return typeof r == "function" ? r : null;
    }
    var d = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        re("error", e, n);
      }
    }
    function re(e, r, n) {
      {
        var a = d.ReactDebugCurrentFrame, v = a.getStackAddendum();
        v !== "" && (r += "%s", n = n.concat([v]));
        var m = n.map(function(f) {
          return String(f);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var I = !1, Ve = !1, Be = !1, Ue = !1, Me = !1, pe;
    pe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === g || Me || e === j || e === R || e === b || Ue || e === y || I || Ve || Be || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === k || e.$$typeof === w || e.$$typeof === o || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var v = r.displayName || r.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case u:
          return "Portal";
        case g:
          return "Profiler";
        case j:
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
            return me(r) + ".Consumer";
          case w:
            var n = e;
            return me(n._context) + ".Provider";
          case l:
            return Je(e, e.render, "ForwardRef");
          case k:
            var a = e.displayName || null;
            return a !== null ? a : $(e.type) || "Memo";
          case _: {
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
    var W = Object.assign, Y = 0, be, ge, ye, xe, Ee, je, Re;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function qe() {
      {
        if (Y === 0) {
          be = console.log, ge = console.info, ye = console.warn, xe = console.error, Ee = console.group, je = console.groupCollapsed, Re = console.groupEnd;
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
              value: xe
            }),
            group: W({}, e, {
              value: Ee
            }),
            groupCollapsed: W({}, e, {
              value: je
            }),
            groupEnd: W({}, e, {
              value: Re
            })
          });
        }
        Y < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = d.ReactCurrentDispatcher, te;
    function q(e, r, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (v) {
            var a = v.stack.trim().match(/\n( *(at )?)/);
            te = a && a[1] || "";
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
      var a;
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
              a = S;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (S) {
              a = S;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            a = S;
          }
          e();
        }
      } catch (S) {
        if (S && a && typeof S.stack == "string") {
          for (var c = S.stack.split(`
`), C = a.stack.split(`
`), x = c.length - 1, E = C.length - 1; x >= 1 && E >= 0 && c[x] !== C[E]; )
            E--;
          for (; x >= 1 && E >= 0; x--, E--)
            if (c[x] !== C[E]) {
              if (x !== 1 || E !== 1)
                do
                  if (x--, E--, E < 0 || c[x] !== C[E]) {
                    var P = `
` + c[x].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, P), P;
                  }
                while (x >= 1 && E >= 0);
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
        case R:
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
          case _: {
            var a = e, v = a._payload, m = a._init;
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
    function Qe(e, r, n, a, v) {
      {
        var m = Function.call.bind(V);
        for (var f in e)
          if (m(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var C = Error((a || "React class") + ": " + n + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              c = e[f](r, f, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (X(v), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, f, typeof c), X(null)), c instanceof Error && !(c.message in Te) && (Te[c.message] = !0, X(v), p("Failed %s type: %s", n, c.message), X(null));
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
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Oe(e);
    }
    var B = d.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Ae, oe;
    oe = {};
    function ar(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var n = $(B.current.type);
        oe[n] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(B.current.type), e.ref), oe[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          Pe || (Pe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ae || (Ae = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, a, v, m, f) {
      var c = {
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
        value: v
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ur(e, r, n, a, v) {
      {
        var m, f = {}, c = null, C = null;
        n !== void 0 && (Se(n), c = "" + n), ir(r) && (Se(r.key), c = "" + r.key), ar(r) && (C = r.ref, or(r, v));
        for (m in r)
          V.call(r, m) && !tr.hasOwnProperty(m) && (f[m] = r[m]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (m in x)
            f[m] === void 0 && (f[m] = x[m]);
        }
        if (c || C) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && sr(f, E), C && lr(f, E);
        }
        return cr(e, c, C, v, a, B.current, f);
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
    var le;
    le = !1;
    function ce(e) {
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
        var a = "";
        e && e._owner && e._owner !== se.current && (a = " It was passed a child from " + $(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), D(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ce(a) && Ne(a, r);
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
          var a = $(r);
          Qe(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var v = $(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Le = {};
    function ze(e, r, n, a, v, m) {
      {
        var f = He(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr();
          C ? c += C : c += We();
          var x;
          e === null ? x = "null" : ie(e) ? x = "array" : e !== void 0 && e.$$typeof === s ? (x = "<" + ($(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var E = ur(e, r, n, v, m);
        if (E == null)
          return E;
        if (f) {
          var P = r.children;
          if (P !== void 0)
            if (a)
              if (ie(P)) {
                for (var L = 0; L < P.length; L++)
                  De(P[L], e);
                Object.freeze && Object.freeze(P);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(P, e);
        }
        if (V.call(r, "key")) {
          var F = $(e), S = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ue = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Le[F + ue]) {
            var gr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, F, gr, F), Le[F + ue] = !0;
          }
        }
        return e === h ? hr(E) : vr(E), E;
      }
    }
    function _r(e, r, n) {
      return ze(e, r, n, !0);
    }
    function pr(e, r, n) {
      return ze(e, r, n, !1);
    }
    var mr = pr, br = _r;
    M.Fragment = h, M.jsx = mr, M.jsxs = br;
  }()), M;
}
process.env.NODE_ENV === "production" ? he.exports = wr() : he.exports = kr();
var t = he.exports;
const fe = `
`, _e = "[\\.|,]", Tr = new RegExp(
  `.*\\]${_e}?$`
), Cr = new RegExp(
  `\\]${_e}?$`,
  "g"
), Or = new RegExp(
  `${_e}$`
);
function nn(i, s) {
  function u(o, l) {
    if (o.match(Tr) && o.indexOf("|") > -1) {
      const R = o.replace(
        Cr,
        "]"
      ), k = R.substring(
        1,
        R.length - 1
      ).split("|"), _ = k[0], y = k[1].replaceAll(
        fe,
        " "
      );
      return /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
        s(_, y),
        o.match(Or) ? `${o.slice(-1)}` : ""
      ] }, l);
    }
    return o;
  }
  const w = ((o) => {
    const l = o.split("|");
    return l.length > 1 ? l.map((R) => {
      const b = R.split("]");
      return b.length === 2 ? `${b[0].replaceAll(
        " ",
        fe
      )}]${b[1]}` : R;
    }).join("|") : o;
  })(i).split(" ").map((o, l) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: o.substring(1, o.length) }, l) : o.startsWith("[") ? u(o, l) : o === "!!" ? /* @__PURE__ */ t.jsx("br", {}, l) : o.replaceAll(fe, " ")).reduce(
    (o, l) => [...o, " ", l],
    []
  );
  return w.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: w });
}
const tn = () => {
  const [i, s] = J({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return Q(() => {
    const u = Rr(function() {
      s({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, []), i;
}, an = ({ color: i }) => /* @__PURE__ */ t.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ t.jsx("span", { children: i })
] }), Sr = "_footer_ttkno_1", Pr = {
  footer: Sr
}, on = ({
  companyName: i = "Walcron",
  establishedYear: s = 2014,
  lastUpdatedYear: u
}) => /* @__PURE__ */ t.jsxs("div", { className: Pr.footer, children: [
  /* @__PURE__ */ t.jsx("hr", {}),
  /* @__PURE__ */ t.jsxs("div", { children: [
    i,
    " ",
    s,
    " - ",
    u,
    " ©"
  ] })
] }), Ar = "_copyright_1c7c9_1", $r = {
  copyright: Ar
}, sn = ({
  companyName: i = "Walcron",
  link: s = "/",
  lastUpdatedYear: u
}) => /* @__PURE__ */ t.jsxs("div", { className: $r.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ t.jsx("a", { color: "inherit", href: s, children: i }),
  " ",
  u,
  "."
] });
function ln({
  statusText: i,
  message: s
}) {
  return /* @__PURE__ */ t.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ t.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ t.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ t.jsx("p", { children: /* @__PURE__ */ t.jsx("i", { children: i || s || "Error message is unknown." }) })
  ] });
}
const Wr = "_accordion_okvze_1", Fr = "_tab_okvze_27", Nr = "_tab__content_okvze_38", de = {
  accordion: Wr,
  tab: Fr,
  tab__content: Nr
};
function cn({
  model: i,
  groupName: s,
  isSingle: u = !0
}) {
  const [h, j] = J(""), g = H(
    (o) => {
      const l = o.currentTarget;
      h === l.value ? (l.checked = !1, j("")) : j(l.value);
    },
    [h]
  ), w = xr(
    () => i.map((o, l) => /* @__PURE__ */ t.jsxs("div", { className: de.tab, children: [
      /* @__PURE__ */ t.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: u ? "radio" : "checkbox",
            value: l,
            name: s,
            onClick: u ? g : void 0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: de.tab__content, children: /* @__PURE__ */ t.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [i, u, s, g]
  );
  return /* @__PURE__ */ t.jsx("div", { className: de.accordion, children: w });
}
const Dr = "_announcement_149a8_1", Lr = "_only_one_149a8_11", zr = "_close_149a8_25", Ir = "_button_prev_149a8_77", z = {
  announcement: Dr,
  only_one: Lr,
  close: zr,
  button_prev: Ir
};
function un({
  ariaAnnouncementTitle: i,
  announcements: s,
  classes: u = ""
}) {
  const [h, j] = J(0), g = () => j(h - 1 >= 0 ? h - 1 : s.length - 1), w = () => j(s.length > h + 1 ? h + 1 : 0), o = s.length === 1;
  return s.length < 1 ? null : /* @__PURE__ */ t.jsxs(
    "div",
    {
      role: "status",
      title: i,
      className: `${z.announcement} ${o ? z.only_one : ""} ${u}`,
      children: [
        !o && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: g,
            className: `${z.button} ${z.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: s[h] }),
        !o && /* @__PURE__ */ t.jsx("button", { onClick: w, className: z.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
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
function fn({ model: i, onScrollMonitor: s }) {
  const [u, h] = J(0), j = ve([]), g = ve(null), [w, o] = J(0), l = H(() => {
    s && s(), g.current && (window.scrollY > w ? g.current.classList.add(Z.sticky) : g.current.classList.remove(Z.sticky));
  }, [w, s]), R = H(
    (_) => {
      const y = _[0].target, O = i.findIndex((d) => d.hashId === y.id), A = O < 0 ? 0 : O, N = j.current[A];
      N !== null && _[0].isIntersecting && (N.scrollIntoViewIfNeeded(!0), h(A));
    },
    [i]
  ), b = H(() => {
    const _ = new IntersectionObserver(R, {
      threshold: [0.3]
      //never accurate but it's the best
    }), y = new IntersectionObserver(R, {
      threshold: [1]
    });
    return i.forEach((O) => {
      const A = document.getElementById(O.hashId);
      A !== null && (A.clientHeight < window.innerHeight ? y.observe(A) : _.observe(A));
    }), [_, y];
  }, [R, i]), k = H(
    (_) => () => {
      h(_);
    },
    []
  );
  return Q(() => {
    var y;
    const _ = b();
    return o(((y = g.current) == null ? void 0 : y.getBoundingClientRect().top) || 0), l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l), _.forEach((O) => O.disconnect());
    };
  }, [l, b]), /* @__PURE__ */ t.jsx("nav", { className: Z.minimenu, ref: g, children: i.map((_, y) => /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
    y !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${_.hashId}`,
        ref: (O) => {
          j.current[y] = O;
        },
        className: y === u ? `${Z.underline} italic` : void 0,
        onClick: k(y),
        children: /* @__PURE__ */ t.jsx("span", { children: _.title })
      }
    )
  ] }, _.hashId)) });
}
const Ur = "_desktop__nav_g3az5_1", Mr = "_mobile__nav_g3az5_1", Hr = "_menu_g3az5_53", Jr = "_subnav_g3az5_60", qr = "_grow_g3az5_1", Kr = "_hamb_g3az5_128", Gr = "_top__menu_g3az5_209", T = {
  desktop__nav: Ur,
  mobile__nav: Mr,
  "home-logo": "_home-logo_g3az5_48",
  menu: Hr,
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
  menuLink: i,
  homeLink: s,
  homeLogoLink: u,
  model: h,
  mobileHomeText: j,
  shortcutComponent: g,
  mobileStyle: w = {},
  desktopStyle: o = {},
  desktopClassName: l = "",
  mobileClassName: R = ""
}) {
  const b = ve(null), k = (d, p) => p === void 0 || p === "" ? d : p.replace(/^#/, `${d}#`), _ = () => {
    b.current && (b.current.checked = !1, document.body.style.overflow = "auto");
  }, y = (d) => {
    document.body.style.overflow = d.target.checked ? "hidden" : "auto";
  }, O = (d, p, re) => d.map((I) => /* @__PURE__ */ t.jsx("li", { role: "presentation", children: i(
    I.label,
    k(p, I.url),
    "menuitem",
    re
  ) }, I.label)), A = h.map((d) => {
    const p = d.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: p ? T.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          i(d.label, d.url, "menuitem"),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: T["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: O(d.items, d.url, _) }) })
        ] })
      },
      d.label
    );
  }), N = h.map((d) => {
    const p = d.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: p ? T.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          p ? /* @__PURE__ */ t.jsxs("label", { className: T.top__menu, children: [
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
          ] }) : i(
            d.label,
            d.url,
            "menuitem",
            _
          ),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: T["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: O(d.items, d.url, _) }) })
        ] })
      },
      d.label
    );
  });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${T.mobile__nav} ${R}`,
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
            s(j, "/", _, -1),
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
        style: o,
        children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: T.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: u(T["home-logo"]) }),
          A,
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: g && g })
        ] }) })
      }
    )
  ] });
}
const dn = Er(Xr, () => !0);
export {
  cn as Accordion,
  un as Announcement,
  sn as Copyright,
  ln as ErrorPage,
  on as Footer,
  an as Logo,
  dn as Menu,
  fn as MiniMenu,
  Xr as MutableMenu,
  en as consoleReportHandler,
  Rr as debounce,
  nn as htmlConvertor,
  rn as reportWebVitals,
  Qr as useNavigationListener,
  tn as useWindowListener
};
