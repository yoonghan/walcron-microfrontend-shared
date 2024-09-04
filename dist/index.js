import re, { useEffect as Q, useState as L, useCallback as F, useMemo as xr, useRef as ee, memo as jr } from "react";
const on = ({
  appName: o,
  containerName: a,
  props: c
}) => {
  Q(() => {
    window.dispatchEvent(
      new CustomEvent(`[${o}] navigated`, { detail: c.pathname })
    );
  }, [o, c.pathname]), Q(() => {
    function f(h) {
      const _ = h.detail;
      c.pathname !== _ && c.navigate(_);
    }
    return window.addEventListener(
      `[${a}] navigated`,
      f
    ), () => {
      window.removeEventListener(
        `[${a}] navigated`,
        f
      );
    };
  }, [a, c]);
};
function sn(o) {
  console.log(o);
}
const Er = (o) => (a) => {
  o({
    ...a,
    delta: a.delta * 1e3
  });
}, ln = (o) => {
  o && o instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: a, onINP: c, onLCP: f }) => {
    a(Er(o)), c(o), f(o);
  });
};
function Rr(o, a) {
  let c;
  return () => {
    /* istanbul ignore if -- @preserve */
    c !== null && clearTimeout(c), c = setTimeout(() => {
      c = null, o();
    }, a);
  };
}
var ve = { exports: {} }, z = {};
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
function wr() {
  if (Ye)
    return z;
  Ye = 1;
  var o = re, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, h = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(i, s, j) {
    var v, y = {}, b = null, g = null;
    j !== void 0 && (b = "" + j), s.key !== void 0 && (b = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (v in s)
      f.call(s, v) && !_.hasOwnProperty(v) && (y[v] = s[v]);
    if (i && i.defaultProps)
      for (v in s = i.defaultProps, s)
        y[v] === void 0 && (y[v] = s[v]);
    return { $$typeof: a, type: i, key: b, ref: g, props: y, _owner: h.current };
  }
  return z.Fragment = c, z.jsx = x, z.jsxs = x, z;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function kr() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = re, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), P = Symbol.iterator, A = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[A];
      return typeof r == "function" ? r : null;
    }
    var O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          n[l - 1] = arguments[l];
        I("error", e, n);
      }
    }
    function I(e, r, n) {
      {
        var l = O.ReactDebugCurrentFrame, p = l.getStackAddendum();
        p !== "" && (r += "%s", n = n.concat([p]));
        var m = n.map(function(d) {
          return String(d);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Be = !1, Ie = !1, Ue = !1, Ve = !1, Me = !1, pe;
    pe = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === _ || Me || e === h || e === j || e === v || Ve || e === g || Be || Ie || Ue || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === x || e.$$typeof === i || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function He(e, r, n) {
      var l = e.displayName;
      if (l)
        return l;
      var p = r.displayName || r.name || "";
      return p !== "" ? n + "(" + p + ")" : n;
    }
    function _e(e) {
      return e.displayName || "Context";
    }
    function W(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case c:
          return "Portal";
        case _:
          return "Profiler";
        case h:
          return "StrictMode";
        case j:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return _e(r) + ".Consumer";
          case x:
            var n = e;
            return _e(n._context) + ".Provider";
          case s:
            return He(e, e.render, "ForwardRef");
          case y:
            var l = e.displayName || null;
            return l !== null ? l : W(e.type) || "Memo";
          case b: {
            var p = e, m = p._payload, d = p._init;
            try {
              return W(d(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, U = 0, be, me, ge, ye, xe, je, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ke() {
      {
        if (U === 0) {
          be = console.log, me = console.info, ge = console.warn, ye = console.error, xe = console.group, je = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
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
        U++;
      }
    }
    function Je() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: be
            }),
            info: N({}, e, {
              value: me
            }),
            warn: N({}, e, {
              value: ge
            }),
            error: N({}, e, {
              value: ye
            }),
            group: N({}, e, {
              value: xe
            }),
            groupCollapsed: N({}, e, {
              value: je
            }),
            groupEnd: N({}, e, {
              value: Ee
            })
          });
        }
        U < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = O.ReactCurrentDispatcher, te;
    function K(e, r, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (p) {
            var l = p.stack.trim().match(/\n( *(at )?)/);
            te = l && l[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ae = !1, J;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ge();
    }
    function we(e, r) {
      if (!e || ae)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var l;
      ae = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = ne.current, ne.current = null, Ke();
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
              l = S;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (S) {
              l = S;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            l = S;
          }
          e();
        }
      } catch (S) {
        if (S && l && typeof S.stack == "string") {
          for (var u = S.stack.split(`
`), C = l.stack.split(`
`), E = u.length - 1, R = C.length - 1; E >= 1 && R >= 0 && u[E] !== C[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (u[E] !== C[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || u[E] !== C[R]) {
                    var $ = `
` + u[E].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, $), $;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ne.current = m, Je(), Error.prepareStackTrace = p;
      }
      var q = e ? e.displayName || e.name : "", D = q ? K(q) : "";
      return typeof e == "function" && J.set(e, D), D;
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
        return K(e);
      switch (e) {
        case j:
          return K("Suspense");
        case v:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Xe(e.render);
          case y:
            return G(e.type, r, n);
          case b: {
            var l = e, p = l._payload, m = l._init;
            try {
              return G(m(p), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ke = {}, Te = O.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    function Qe(e, r, n, l, p) {
      {
        var m = Function.call.bind(V);
        for (var d in e)
          if (m(e, d)) {
            var u = void 0;
            try {
              if (typeof e[d] != "function") {
                var C = Error((l || "React class") + ": " + n + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              u = e[d](r, d, l, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              u = E;
            }
            u && !(u instanceof Error) && (X(p), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", n, d, typeof u), X(null)), u instanceof Error && !(u.message in ke) && (ke[u.message] = !0, X(p), w("Failed %s type: %s", n, u.message), X(null));
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
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Oe(e) {
      if (nr(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Ce(e);
    }
    var M = O.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Pe, ie;
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
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var n = W(M.current.type);
        ie[n] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(M.current.type), e.ref), ie[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          Se || (Se = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Pe || (Pe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, l, p, m, d) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: d,
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
        value: l
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, n, l, p) {
      {
        var m, d = {}, u = null, C = null;
        n !== void 0 && (Oe(n), u = "" + n), or(r) && (Oe(r.key), u = "" + r.key), ar(r) && (C = r.ref, ir(r, p));
        for (m in r)
          V.call(r, m) && !tr.hasOwnProperty(m) && (d[m] = r[m]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (m in E)
            d[m] === void 0 && (d[m] = E[m]);
        }
        if (u || C) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && sr(d, R), C && lr(d, R);
        }
        return cr(e, u, C, p, l, M.current, d);
      }
    }
    var se = O.ReactCurrentOwner, $e = O.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        $e.setExtraStackFrame(n);
      } else
        $e.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ae() {
      {
        if (se.current) {
          var e = W(se.current.type);
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
    var We = {};
    function dr(e) {
      {
        var r = Ae();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (We[n])
          return;
        We[n] = !0;
        var l = "";
        e && e._owner && e._owner !== se.current && (l = " It was passed a child from " + W(e._owner.type) + "."), Y(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, l), Y(null);
      }
    }
    function Ne(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            ce(l) && Fe(l, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = k(e);
          if (typeof p == "function" && p !== e.entries)
            for (var m = p.call(e), d; !(d = m.next()).done; )
              ce(d.value) && Fe(d.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          n = r.propTypes;
        else
          return;
        if (n) {
          var l = W(r);
          Qe(n, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var p = W(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var l = r[n];
          if (l !== "children" && l !== "key") {
            Y(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var De = {};
    function Le(e, r, n, l, p, m) {
      {
        var d = ze(e);
        if (!d) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr();
          C ? u += C : u += Ae();
          var E;
          e === null ? E = "null" : oe(e) ? E = "array" : e !== void 0 && e.$$typeof === a ? (E = "<" + (W(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, u);
        }
        var R = ur(e, r, n, p, m);
        if (R == null)
          return R;
        if (d) {
          var $ = r.children;
          if ($ !== void 0)
            if (l)
              if (oe($)) {
                for (var q = 0; q < $.length; q++)
                  Ne($[q], e);
                Object.freeze && Object.freeze($);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne($, e);
        }
        if (V.call(r, "key")) {
          var D = W(e), S = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ue = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[D + ue]) {
            var gr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, D, gr, D), De[D + ue] = !0;
          }
        }
        return e === f ? hr(R) : vr(R), R;
      }
    }
    function pr(e, r, n) {
      return Le(e, r, n, !0);
    }
    function _r(e, r, n) {
      return Le(e, r, n, !1);
    }
    var br = _r, mr = pr;
    H.Fragment = f, H.jsx = br, H.jsxs = mr;
  }()), H;
}
process.env.NODE_ENV === "production" ? ve.exports = wr() : ve.exports = kr();
var t = ve.exports;
const fe = `
`, he = "[\\.|,]", Tr = new RegExp(
  `.*\\]${he}?$`
), Cr = new RegExp(
  `\\]${he}?$`,
  "g"
), Or = new RegExp(
  `${he}$`
);
function cn(o, a) {
  function c(i, s) {
    if (i.match(Tr) && i.indexOf("|") > -1) {
      const j = i.replace(
        Cr,
        "]"
      ), y = j.substring(
        1,
        j.length - 1
      ).split("|"), b = y[0], g = y[1].replaceAll(
        fe,
        " "
      );
      return /* @__PURE__ */ t.jsxs(re.Fragment, { children: [
        a(b, g),
        i.match(Or) ? `${i.slice(-1)}` : ""
      ] }, s);
    }
    return i;
  }
  const x = ((i) => {
    const s = i.split("|");
    return s.length > 1 ? s.map((j) => {
      const v = j.split("]");
      return v.length === 2 ? `${v[0].replaceAll(
        " ",
        fe
      )}]${v[1]}` : j;
    }).join("|") : i;
  })(o).split(" ").map((i, s) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: i.substring(1, i.length) }, s) : i.startsWith("[") ? c(i, s) : i === "!!" ? /* @__PURE__ */ t.jsx("br", {}, s) : i.replaceAll(fe, " ")).reduce(
    (i, s) => [...i, " ", s],
    []
  );
  return x.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: x });
}
const un = () => {
  const [o, a] = L({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return Q(() => {
    const c = Rr(function() {
      a({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", c), () => {
      window.removeEventListener("resize", c);
    };
  }, []), o;
}, fn = ({ color: o }) => /* @__PURE__ */ t.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ t.jsx("span", { children: o })
] }), Sr = "_footer_ttkno_1", Pr = {
  footer: Sr
}, dn = ({
  companyName: o = "Walcron",
  establishedYear: a = 2014,
  lastUpdatedYear: c
}) => /* @__PURE__ */ t.jsxs("div", { className: Pr.footer, children: [
  /* @__PURE__ */ t.jsx("hr", {}),
  /* @__PURE__ */ t.jsxs("div", { children: [
    o,
    " ",
    a,
    " - ",
    c,
    " ©"
  ] })
] }), $r = "_copyright_1c7c9_1", Ar = {
  copyright: $r
}, vn = ({
  companyName: o = "Walcron",
  link: a = "/",
  lastUpdatedYear: c
}) => /* @__PURE__ */ t.jsxs("div", { className: Ar.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ t.jsx("a", { color: "inherit", href: a, children: o }),
  " ",
  c,
  "."
] });
function hn({
  statusText: o,
  message: a
}) {
  return /* @__PURE__ */ t.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ t.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ t.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ t.jsx("p", { children: /* @__PURE__ */ t.jsx("i", { children: o || a || "Error message is unknown." }) })
  ] });
}
const Wr = "_accordion_okvze_1", Fr = "_tab_okvze_27", Nr = "_tab__content_okvze_38", de = {
  accordion: Wr,
  tab: Fr,
  tab__content: Nr
};
function pn({
  model: o,
  groupName: a,
  isSingle: c = !0
}) {
  const [f, h] = L(""), _ = F(
    (i) => {
      const s = i.currentTarget;
      f === s.value ? (s.checked = !1, h("")) : h(s.value);
    },
    [f]
  ), x = xr(
    () => o.map((i, s) => /* @__PURE__ */ t.jsxs("div", { className: de.tab, children: [
      /* @__PURE__ */ t.jsxs("label", { children: [
        i.label,
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: c ? "radio" : "checkbox",
            value: s,
            name: a,
            onClick: c ? _ : void 0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: de.tab__content, children: /* @__PURE__ */ t.jsx("p", { children: i.content }) })
    ] }, i.label)),
    [o, c, a, _]
  );
  return /* @__PURE__ */ t.jsx("div", { className: de.accordion, children: x });
}
const Dr = "_announcement_149a8_1", Lr = "_only_one_149a8_11", Yr = "_close_149a8_25", qr = "_button_prev_149a8_77", B = {
  announcement: Dr,
  only_one: Lr,
  close: Yr,
  button_prev: qr
};
function _n({
  ariaAnnouncementTitle: o,
  announcements: a,
  classes: c = ""
}) {
  const [f, h] = L(0), _ = () => h(f - 1 >= 0 ? f - 1 : a.length - 1), x = () => h(a.length > f + 1 ? f + 1 : 0), i = a.length === 1;
  return a.length < 1 ? null : /* @__PURE__ */ t.jsxs(
    "div",
    {
      role: "status",
      title: o,
      className: `${B.announcement} ${i ? B.only_one : ""} ${c}`,
      children: [
        !i && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: _,
            className: `${B.button} ${B.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: a[f] }),
        !i && /* @__PURE__ */ t.jsx("button", { onClick: x, className: B.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ t.jsxs("label", { className: B.close, children: [
          /* @__PURE__ */ t.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ t.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Br = "_minimenu_1c4fs_1", Ir = "_sticky_1c4fs_1", Ur = "_underline_1c4fs_27", Z = {
  minimenu: Br,
  sticky: Ir,
  underline: Ur
};
function bn({ model: o, onScrollMonitor: a }) {
  const [c, f] = L(0), h = ee([]), _ = ee(null), [x, i] = L(0), s = F(() => {
    a && a(), _.current && (window.scrollY > x ? _.current.classList.add(Z.sticky) : _.current.classList.remove(Z.sticky));
  }, [x, a]), j = F(
    (b) => {
      const g = b[0].target, P = o.findIndex((O) => O.hashId === g.id), A = P < 0 ? 0 : P, k = h.current[A];
      k !== null && b[0].isIntersecting && (k.scrollIntoViewIfNeeded(!0), f(A));
    },
    [o]
  ), v = F(() => {
    const b = new IntersectionObserver(j, {
      threshold: [0.3]
      //never accurate but it's the best
    }), g = new IntersectionObserver(j, {
      threshold: [1]
    });
    return o.forEach((P) => {
      const A = document.getElementById(P.hashId);
      A !== null && (A.clientHeight < window.innerHeight ? g.observe(A) : b.observe(A));
    }), [b, g];
  }, [j, o]), y = F(
    (b) => () => {
      f(b);
    },
    []
  );
  return Q(() => {
    var g;
    const b = v();
    return i(((g = _.current) == null ? void 0 : g.getBoundingClientRect().top) || 0), s(), window.addEventListener("scroll", s), () => {
      window.removeEventListener("scroll", s), b.forEach((P) => P.disconnect());
    };
  }, [s, v]), /* @__PURE__ */ t.jsx("nav", { className: Z.minimenu, ref: _, children: o.map((b, g) => /* @__PURE__ */ t.jsxs(re.Fragment, { children: [
    g !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${b.hashId}`,
        ref: (P) => {
          h.current[g] = P;
        },
        className: g === c ? `${Z.underline} italic` : void 0,
        onClick: y(g),
        children: /* @__PURE__ */ t.jsx("span", { children: b.title })
      }
    )
  ] }, b.hashId)) });
}
const Vr = "_desktop__nav_13eqj_1", Mr = "_mobile__nav_13eqj_1", zr = "_expand_13eqj_10", Hr = "_menu_13eqj_75", Kr = "_subnav_content_13eqj_82", Jr = "_subnav_13eqj_82", Gr = "_open_13eqj_92", Xr = "_grow_13eqj_1", Zr = "_hamb_13eqj_147", Qr = "_top__menu_13eqj_182", en = "_side__menu_13eqj_183", T = {
  desktop__nav: Vr,
  mobile__nav: Mr,
  expand: zr,
  "home-logo": "_home-logo_13eqj_70",
  menu: Hr,
  subnav_content: Kr,
  subnav: Jr,
  open: Gr,
  grow: Xr,
  "mobile-menu": "_mobile-menu_13eqj_140",
  hamb: Zr,
  "hamb-line": "_hamb-line_13eqj_152",
  "hamb-hidden": "_hamb-hidden_13eqj_178",
  top__menu: Qr,
  side__menu: en
};
function rn({
  menuLink: o,
  topMenuItem: a,
  subMenu: c,
  unCheckSideMenu: f
}) {
  const [h, _] = L(!1), x = ee(null), i = F(() => {
    _(!h);
  }, [h]), s = F(
    (v) => {
      (v.key === "Escape" || v.key === "ArrowUp") && _(!1), v.key === "ArrowDown" && _(!0);
    },
    []
  ), j = F(
    (v) => {
      var b;
      let y = (b = v.relatedTarget) == null ? void 0 : b.parentNode;
      for (let g = 0; g < 8; g++)
        if (y = y == null ? void 0 : y.parentNode, y === x.current)
          return;
      _(!1);
    },
    []
  );
  return a.items !== void 0 ? /* @__PURE__ */ t.jsxs(
    "li",
    {
      role: "menuitem",
      className: `${T.subnav} ${h ? T.open : ""}`,
      onBlur: j,
      ref: x,
      "aria-expanded": h,
      children: [
        o(a.label, a.url),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: i,
            onKeyUp: s,
            "aria-label": `Expand ${a.label}`,
            className: T.expand
          }
        ),
        /* @__PURE__ */ t.jsx("div", { role: "presentation", className: T.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", onFocus: (v) => v.stopPropagation(), children: c(a.items, a.url, f) }) })
      ]
    }
  ) : /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: o(a.label, a.url) }, a.label);
}
function nn({
  menuLink: o,
  topMenuItem: a,
  subMenu: c,
  unCheckSideMenu: f
}) {
  const [h, _] = L(!1), x = F(() => {
    _(!h);
  }, [h]), i = F(
    (s) => {
      (s.key === "Space" || s.key === " " || s.key === "Enter") && s.currentTarget.firstElementChild.click();
    },
    []
  );
  return a.items !== void 0 ? /* @__PURE__ */ t.jsxs(
    "li",
    {
      role: "menuitem",
      className: T.subnav,
      "aria-expanded": h,
      children: [
        /* @__PURE__ */ t.jsx(
          "label",
          {
            className: T.top__menu,
            tabIndex: 0,
            onClick: x,
            onKeyUp: i,
            "aria-label": `Expand ${a.label}`,
            children: /* @__PURE__ */ t.jsx("input", { type: "radio", name: "top_menu", value: a.label })
          }
        ),
        o(a.label, a.url, f),
        /* @__PURE__ */ t.jsx("div", { role: "presentation", className: T.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: c(a.items, a.url, f) }) })
      ]
    },
    a.label
  ) : /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: o(a.label, a.url, f) }, a.label);
}
function tn({
  menuLink: o,
  homeLink: a,
  homeLogoLink: c,
  model: f,
  shortcutComponent: h,
  mobileStyle: _ = {},
  desktopStyle: x = {},
  desktopClassName: i = "",
  mobileClassName: s = ""
}) {
  const j = ee(null), v = (k, O) => O === void 0 || O === "" ? k : O.replace(/^#/, `${k}#`), y = () => {
    j.current && (j.current.checked = !1, document.body.style.overflow = "auto");
  }, b = (k) => {
    document.body.style.overflow = k.target.checked ? "hidden" : "auto";
  }, g = (k, O, w) => k.map((I) => /* @__PURE__ */ t.jsx("li", { role: "presentation", children: o(
    I.label,
    v(O, I.url),
    w
  ) }, I.label)), P = f.map((k) => /* @__PURE__ */ t.jsx(
    rn,
    {
      menuLink: o,
      topMenuItem: k,
      subMenu: g,
      unCheckSideMenu: y
    },
    k.label
  )), A = f.map((k) => /* @__PURE__ */ t.jsx(
    nn,
    {
      menuLink: o,
      topMenuItem: k,
      subMenu: g,
      unCheckSideMenu: y
    },
    k.label
  ));
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${T.mobile__nav} ${s}`,
        style: _,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: T["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("label", { className: T.hamb, "aria-label": "Main Menu", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  className: T.side__menu,
                  type: "checkbox",
                  ref: j,
                  onChange: b
                }
              ),
              /* @__PURE__ */ t.jsx("span", { className: T["hamb-line"] }),
              /* @__PURE__ */ t.jsx("span", { className: T["hamb-hidden"], children: "Hamburger Menu" })
            ] }),
            a("/", y, -1),
            h && h
          ] }),
          /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: T.menu, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: A }) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${T.desktop__nav} ${i}`,
        style: x,
        children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: T.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: c(T["home-logo"]) }),
          P,
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: h && h })
        ] }) })
      }
    )
  ] });
}
const mn = jr(tn, () => !0);
export {
  pn as Accordion,
  _n as Announcement,
  vn as Copyright,
  hn as ErrorPage,
  dn as Footer,
  fn as Logo,
  mn as Menu,
  bn as MiniMenu,
  tn as MutableMenu,
  sn as consoleReportHandler,
  Rr as debounce,
  cn as htmlConvertor,
  ln as reportWebVitals,
  on as useNavigationListener,
  un as useWindowListener
};
