import ne, { useEffect as Q, useState as L, useCallback as W, useMemo as En, useRef as ee, memo as Rn } from "react";
const ar = ({
  appName: l,
  containerName: t,
  props: u
}) => {
  Q(() => {
    window.dispatchEvent(
      new CustomEvent(`[${l}] navigated`, { detail: u.pathname })
    );
  }, [l, u.pathname]), Q(() => {
    function f(v) {
      const h = v.detail;
      u.pathname !== h && u.navigate(h);
    }
    return window.addEventListener(
      `[${t}] navigated`,
      f
    ), () => {
      window.removeEventListener(
        `[${t}] navigated`,
        f
      );
    };
  }, [t, u]);
};
function or(l) {
  console.log(l);
}
const jn = (l) => (t) => {
  l({
    ...t,
    delta: t.delta * 1e3
  });
}, ir = (l) => {
  l && l instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: t, onINP: u, onLCP: f }) => {
    t(jn(l)), u(l), f(l);
  });
};
function wn(l, t) {
  let u;
  return () => {
    /* istanbul ignore if -- @preserve */
    u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, l();
    }, t);
  };
}
var ve = { exports: {} }, H = {};
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
function kn() {
  if (Ye)
    return H;
  Ye = 1;
  var l = ne, t = Symbol.for("react.element"), u = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, v = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(o, i, E) {
    var _, y = {}, b = null, g = null;
    E !== void 0 && (b = "" + E), i.key !== void 0 && (b = "" + i.key), i.ref !== void 0 && (g = i.ref);
    for (_ in i)
      f.call(i, _) && !h.hasOwnProperty(_) && (y[_] = i[_]);
    if (o && o.defaultProps)
      for (_ in i = o.defaultProps, i)
        y[_] === void 0 && (y[_] = i[_]);
    return { $$typeof: t, type: o, key: b, ref: g, props: y, _owner: v.current };
  }
  return H.Fragment = u, H.jsx = x, H.jsxs = x, H;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Tn() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var l = ne, t = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), o = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), P = Symbol.iterator, $ = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = P && e[P] || e[$];
      return typeof n == "function" ? n : null;
    }
    var C = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
          r[s - 1] = arguments[s];
        U("error", e, r);
      }
    }
    function U(e, n, r) {
      {
        var s = C.ReactDebugCurrentFrame, p = s.getStackAddendum();
        p !== "" && (n += "%s", r = r.concat([p]));
        var m = r.map(function(d) {
          return String(d);
        });
        m.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Ie = !1, Ue = !1, Ve = !1, Me = !1, ze = !1, pe;
    pe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === h || ze || e === v || e === E || e === _ || Me || e === g || Ie || Ue || Ve || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === x || e.$$typeof === o || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function Ke(e, n, r) {
      var s = e.displayName;
      if (s)
        return s;
      var p = n.displayName || n.name || "";
      return p !== "" ? r + "(" + p + ")" : r;
    }
    function he(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case u:
          return "Portal";
        case h:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var n = e;
            return he(n) + ".Consumer";
          case x:
            var r = e;
            return he(r._context) + ".Provider";
          case i:
            return Ke(e, e.render, "ForwardRef");
          case y:
            var s = e.displayName || null;
            return s !== null ? s : N(e.type) || "Memo";
          case b: {
            var p = e, m = p._payload, d = p._init;
            try {
              return N(d(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, V = 0, be, me, ge, ye, xe, Ee, Re;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Je() {
      {
        if (V === 0) {
          be = console.log, me = console.info, ge = console.warn, ye = console.error, xe = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: je,
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
    function qe() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: be
            }),
            info: F({}, e, {
              value: me
            }),
            warn: F({}, e, {
              value: ge
            }),
            error: F({}, e, {
              value: ye
            }),
            group: F({}, e, {
              value: xe
            }),
            groupCollapsed: F({}, e, {
              value: Ee
            }),
            groupEnd: F({}, e, {
              value: Re
            })
          });
        }
        V < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = C.ReactCurrentDispatcher, te;
    function J(e, n, r) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (p) {
            var s = p.stack.trim().match(/\n( *(at )?)/);
            te = s && s[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ae = !1, q;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ge();
    }
    function we(e, n) {
      if (!e || ae)
        return "";
      {
        var r = q.get(e);
        if (r !== void 0)
          return r;
      }
      var s;
      ae = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = re.current, re.current = null, Je();
      try {
        if (n) {
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
              s = S;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (S) {
              s = S;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            s = S;
          }
          e();
        }
      } catch (S) {
        if (S && s && typeof S.stack == "string") {
          for (var c = S.stack.split(`
`), O = s.stack.split(`
`), R = c.length - 1, j = O.length - 1; R >= 1 && j >= 0 && c[R] !== O[j]; )
            j--;
          for (; R >= 1 && j >= 0; R--, j--)
            if (c[R] !== O[j]) {
              if (R !== 1 || j !== 1)
                do
                  if (R--, j--, j < 0 || c[R] !== O[j]) {
                    var A = `
` + c[R].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, A), A;
                  }
                while (R >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ae = !1, re.current = m, qe(), Error.prepareStackTrace = p;
      }
      var B = e ? e.displayName || e.name : "", D = B ? J(B) : "";
      return typeof e == "function" && q.set(e, D), D;
    }
    function Xe(e, n, r) {
      return we(e, !1);
    }
    function Ze(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function G(e, n, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, Ze(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case E:
          return J("Suspense");
        case _:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Xe(e.render);
          case y:
            return G(e.type, n, r);
          case b: {
            var s = e, p = s._payload, m = s._init;
            try {
              return G(m(p), n, r);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, ke = {}, Te = C.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var n = e._owner, r = G(e.type, e._source, n ? n.type : null);
        Te.setExtraStackFrame(r);
      } else
        Te.setExtraStackFrame(null);
    }
    function Qe(e, n, r, s, p) {
      {
        var m = Function.call.bind(M);
        for (var d in e)
          if (m(e, d)) {
            var c = void 0;
            try {
              if (typeof e[d] != "function") {
                var O = Error((s || "React class") + ": " + r + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              c = e[d](n, d, s, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              c = R;
            }
            c && !(c instanceof Error) && (X(p), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", r, d, typeof c), X(null)), c instanceof Error && !(c.message in ke) && (ke[c.message] = !0, X(p), k("Failed %s type: %s", r, c.message), X(null));
          }
      }
    }
    var en = Array.isArray;
    function oe(e) {
      return en(e);
    }
    function nn(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, r = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function rn(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Ce(e) {
      if (rn(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nn(e)), Oe(e);
    }
    var z = C.ReactCurrentOwner, tn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Pe, ie;
    ie = {};
    function an(e) {
      if (M.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function on(e) {
      if (M.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sn(e, n) {
      if (typeof e.ref == "string" && z.current && n && z.current.stateNode !== n) {
        var r = N(z.current.type);
        ie[r] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(z.current.type), e.ref), ie[r] = !0);
      }
    }
    function ln(e, n) {
      {
        var r = function() {
          Se || (Se = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function cn(e, n) {
      {
        var r = function() {
          Pe || (Pe = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var un = function(e, n, r, s, p, m, d) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: r,
        props: d,
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
        value: s
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function fn(e, n, r, s, p) {
      {
        var m, d = {}, c = null, O = null;
        r !== void 0 && (Ce(r), c = "" + r), on(n) && (Ce(n.key), c = "" + n.key), an(n) && (O = n.ref, sn(n, p));
        for (m in n)
          M.call(n, m) && !tn.hasOwnProperty(m) && (d[m] = n[m]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (m in R)
            d[m] === void 0 && (d[m] = R[m]);
        }
        if (c || O) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ln(d, j), O && cn(d, j);
        }
        return un(e, c, O, p, s, z.current, d);
      }
    }
    var se = C.ReactCurrentOwner, Ae = C.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var n = e._owner, r = G(e.type, e._source, n ? n.type : null);
        Ae.setExtraStackFrame(r);
      } else
        Ae.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function $e() {
      {
        if (se.current) {
          var e = N(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dn(e) {
      return "";
    }
    var Ne = {};
    function vn(e) {
      {
        var n = $e();
        if (!n) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (n = `

Check the top-level render call using <` + r + ">.");
        }
        return n;
      }
    }
    function We(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = vn(n);
        if (Ne[r])
          return;
        Ne[r] = !0;
        var s = "";
        e && e._owner && e._owner !== se.current && (s = " It was passed a child from " + N(e._owner.type) + "."), Y(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, s), Y(null);
      }
    }
    function Fe(e, n) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var r = 0; r < e.length; r++) {
            var s = e[r];
            ce(s) && We(s, n);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = T(e);
          if (typeof p == "function" && p !== e.entries)
            for (var m = p.call(e), d; !(d = m.next()).done; )
              ce(d.value) && We(d.value, n);
        }
      }
    }
    function _n(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var r;
        if (typeof n == "function")
          r = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === y))
          r = n.propTypes;
        else
          return;
        if (r) {
          var s = N(n);
          Qe(r, e.props, "prop", s, e);
        } else if (n.PropTypes !== void 0 && !le) {
          le = !0;
          var p = N(n);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pn(e) {
      {
        for (var n = Object.keys(e.props), r = 0; r < n.length; r++) {
          var s = n[r];
          if (s !== "children" && s !== "key") {
            Y(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var De = {};
    function Le(e, n, r, s, p, m) {
      {
        var d = He(e);
        if (!d) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = dn();
          O ? c += O : c += $e();
          var R;
          e === null ? R = "null" : oe(e) ? R = "array" : e !== void 0 && e.$$typeof === t ? (R = "<" + (N(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, c);
        }
        var j = fn(e, n, r, p, m);
        if (j == null)
          return j;
        if (d) {
          var A = n.children;
          if (A !== void 0)
            if (s)
              if (oe(A)) {
                for (var B = 0; B < A.length; B++)
                  Fe(A[B], e);
                Object.freeze && Object.freeze(A);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(A, e);
        }
        if (M.call(n, "key")) {
          var D = N(e), S = Object.keys(n).filter(function(xn) {
            return xn !== "key";
          }), ue = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[D + ue]) {
            var yn = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, D, yn, D), De[D + ue] = !0;
          }
        }
        return e === f ? pn(j) : _n(j), j;
      }
    }
    function hn(e, n, r) {
      return Le(e, n, r, !0);
    }
    function bn(e, n, r) {
      return Le(e, n, r, !1);
    }
    var mn = bn, gn = hn;
    K.Fragment = f, K.jsx = mn, K.jsxs = gn;
  }()), K;
}
process.env.NODE_ENV === "production" ? ve.exports = kn() : ve.exports = Tn();
var a = ve.exports;
const fe = `
`, _e = "[\\.|,]", On = new RegExp(
  `.*\\]${_e}?$`
), Cn = new RegExp(
  `\\]${_e}?$`,
  "g"
), Sn = new RegExp(
  `${_e}$`
);
function sr(l, t) {
  function u(o, i) {
    if (o.match(On) && o.indexOf("|") > -1) {
      const E = o.replace(
        Cn,
        "]"
      ), y = E.substring(
        1,
        E.length - 1
      ).split("|"), b = y[0], g = y[1].replaceAll(
        fe,
        " "
      );
      return /* @__PURE__ */ a.jsxs(ne.Fragment, { children: [
        t(b, g),
        o.match(Sn) ? `${o.slice(-1)}` : ""
      ] }, i);
    }
    return o;
  }
  const x = ((o) => {
    const i = o.split("|");
    return i.length > 1 ? i.map((E) => {
      const _ = E.split("]");
      return _.length === 2 ? `${_[0].replaceAll(
        " ",
        fe
      )}]${_[1]}` : E;
    }).join("|") : o;
  })(l).split(" ").map((o, i) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ a.jsx("strong", { children: o.substring(1, o.length) }, i) : o.startsWith("[") ? u(o, i) : o === "!!" ? /* @__PURE__ */ a.jsx("br", {}, i) : o.replaceAll(fe, " ")).reduce(
    (o, i) => [...o, " ", i],
    []
  );
  return x.shift(), /* @__PURE__ */ a.jsx(a.Fragment, { children: x });
}
const lr = () => {
  const [l, t] = L({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return Q(() => {
    const u = wn(function() {
      t({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, []), l;
}, Pn = "_accordion_okvze_1", An = "_tab_okvze_27", $n = "_tab__content_okvze_38", de = {
  accordion: Pn,
  tab: An,
  tab__content: $n
};
function cr({
  model: l,
  groupName: t,
  isSingle: u = !0
}) {
  const [f, v] = L(""), h = W(
    (o) => {
      const i = o.currentTarget;
      f === i.value ? (i.checked = !1, v("")) : v(i.value);
    },
    [f]
  ), x = En(
    () => l.map((o, i) => /* @__PURE__ */ a.jsxs("div", { className: de.tab, children: [
      /* @__PURE__ */ a.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: u ? "radio" : "checkbox",
            value: i,
            name: t,
            onClick: u ? h : void 0
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: de.tab__content, children: /* @__PURE__ */ a.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [l, u, t, h]
  );
  return /* @__PURE__ */ a.jsx("div", { className: de.accordion, children: x });
}
const Nn = "_announcement_149a8_1", Wn = "_only_one_149a8_11", Fn = "_close_149a8_25", Dn = "_button_prev_149a8_77", I = {
  announcement: Nn,
  only_one: Wn,
  close: Fn,
  button_prev: Dn
};
function ur({
  ariaAnnouncementTitle: l,
  announcements: t,
  classes: u = ""
}) {
  const [f, v] = L(0), h = () => v(f - 1 >= 0 ? f - 1 : t.length - 1), x = () => v(t.length > f + 1 ? f + 1 : 0), o = t.length === 1;
  return t.length < 1 ? null : /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "status",
      title: l,
      className: `${I.announcement} ${o ? I.only_one : ""} ${u}`,
      children: [
        !o && /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: h,
            className: `${I.button} ${I.button_prev}`,
            children: /* @__PURE__ */ a.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ a.jsx("p", { children: t[f] }),
        !o && /* @__PURE__ */ a.jsx("button", { onClick: x, className: I.button, children: /* @__PURE__ */ a.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ a.jsxs("label", { className: I.close, children: [
          /* @__PURE__ */ a.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ a.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Ln = "_minimenu_1c4fs_1", Yn = "_sticky_1c4fs_1", Bn = "_underline_1c4fs_27", Z = {
  minimenu: Ln,
  sticky: Yn,
  underline: Bn
};
function fr({ model: l, onScrollMonitor: t }) {
  const [u, f] = L(0), v = ee([]), h = ee(null), [x, o] = L(0), i = W(() => {
    t && t(), h.current && (window.scrollY > x ? h.current.classList.add(Z.sticky) : h.current.classList.remove(Z.sticky));
  }, [x, t]), E = W(
    (b) => {
      const g = b[0].target, P = l.findIndex((C) => C.hashId === g.id), $ = P < 0 ? 0 : P, T = v.current[$];
      T !== null && b[0].isIntersecting && (T.scrollIntoViewIfNeeded(!0), f($));
    },
    [l]
  ), _ = W(() => {
    const b = new IntersectionObserver(E, {
      threshold: [0.3]
      //never accurate but it's the best
    }), g = new IntersectionObserver(E, {
      threshold: [1]
    });
    return l.forEach((P) => {
      const $ = document.getElementById(P.hashId);
      $ !== null && ($.clientHeight < window.innerHeight ? g.observe($) : b.observe($));
    }), [b, g];
  }, [E, l]), y = W(
    (b) => () => {
      f(b);
    },
    []
  );
  return Q(() => {
    var g;
    const b = _();
    return o(((g = h.current) == null ? void 0 : g.getBoundingClientRect().top) || 0), i(), window.addEventListener("scroll", i), () => {
      window.removeEventListener("scroll", i), b.forEach((P) => P.disconnect());
    };
  }, [i, _]), /* @__PURE__ */ a.jsx("nav", { className: Z.minimenu, ref: h, children: l.map((b, g) => /* @__PURE__ */ a.jsxs(ne.Fragment, { children: [
    g !== 0 && /* @__PURE__ */ a.jsx("div", { role: "separator" }),
    /* @__PURE__ */ a.jsx(
      "a",
      {
        href: `#${b.hashId}`,
        ref: (P) => {
          v.current[g] = P;
        },
        className: g === u ? `${Z.underline} italic` : void 0,
        onClick: y(g),
        children: /* @__PURE__ */ a.jsx("span", { children: b.title })
      }
    )
  ] }, b.hashId)) });
}
const In = "_desktop__nav_tbapn_1", Un = "_mobile__nav_tbapn_1", Vn = "_top_menu_container_tbapn_6", Mn = "_expand_tbapn_11", zn = "_expand_dummy_tbapn_12", Hn = "_menu_tbapn_76", Kn = "_subnav_content_tbapn_83", Jn = "_subnav_tbapn_83", qn = "_open_tbapn_93", Gn = "_grow_tbapn_1", Xn = "_hamb_tbapn_148", Zn = "_top__menu_tbapn_183", Qn = "_side__menu_tbapn_184", w = {
  desktop__nav: In,
  mobile__nav: Un,
  top_menu_container: Vn,
  expand: Mn,
  expand_dummy: zn,
  "home-logo": "_home-logo_tbapn_71",
  menu: Hn,
  subnav_content: Kn,
  subnav: Jn,
  open: qn,
  grow: Gn,
  "mobile-menu": "_mobile-menu_tbapn_141",
  hamb: Xn,
  "hamb-line": "_hamb-line_tbapn_153",
  "hamb-hidden": "_hamb-hidden_tbapn_179",
  top__menu: Zn,
  side__menu: Qn
};
function er({
  menuLink: l,
  topMenuItem: t,
  subMenu: u,
  unCheckSideMenu: f
}) {
  const [v, h] = L(!1), x = ee(null), o = W(() => {
    h(!v);
  }, [v]), i = W(
    (_) => {
      (_.key === "Escape" || _.key === "ArrowUp") && h(!1), _.key === "ArrowDown" && h(!0);
    },
    []
  ), E = W(
    (_) => {
      var b;
      let y = (b = _.relatedTarget) == null ? void 0 : b.parentNode;
      for (let g = 0; g < 8; g++)
        if (y = y == null ? void 0 : y.parentNode, y === x.current)
          return;
      h(!1);
    },
    []
  );
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs(
    "li",
    {
      role: "menuitem",
      className: `${w.subnav} ${v ? w.open : ""}`,
      onBlur: E,
      ref: x,
      "aria-expanded": v,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: w.top_menu_container, children: [
          l(t.label, t.url),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: o,
              onKeyUp: i,
              "aria-label": `Expand ${t.label}`,
              "aria-expanded": v,
              className: w.expand
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: w.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { role: "menu", onFocus: (_) => _.stopPropagation(), children: u(t.items, t.url, f) }) })
      ]
    }
  ) : /* @__PURE__ */ a.jsx("li", { role: "menuitem", children: /* @__PURE__ */ a.jsxs("div", { className: w.top_menu_container, children: [
    l(t.label, t.url),
    /* @__PURE__ */ a.jsx("div", { className: w.expand_dummy })
  ] }) }, t.label);
}
function nr({
  menuLink: l,
  topMenuItem: t,
  subMenu: u,
  unCheckSideMenu: f
}) {
  const [v, h] = L(!1), x = W(() => {
    h(!v);
  }, [v]), o = W(
    (i) => {
      (i.key === "Space" || i.key === " " || i.key === "Enter") && i.currentTarget.firstElementChild.click();
    },
    []
  );
  return t.items !== void 0 ? /* @__PURE__ */ a.jsxs(
    "li",
    {
      role: "menuitem",
      className: w.subnav,
      "aria-expanded": v,
      children: [
        /* @__PURE__ */ a.jsx(
          "label",
          {
            className: w.top__menu,
            tabIndex: 0,
            onClick: x,
            onKeyUp: o,
            "aria-label": `Expand ${t.label}`,
            children: /* @__PURE__ */ a.jsx("input", { type: "radio", name: "top_menu", value: t.label })
          }
        ),
        l(t.label, t.url, f),
        /* @__PURE__ */ a.jsx("div", { className: w.subnav_content, children: /* @__PURE__ */ a.jsx("ul", { role: "menu", children: u(t.items, t.url, f) }) })
      ]
    },
    t.label
  ) : /* @__PURE__ */ a.jsx("li", { role: "menuitem", children: l(t.label, t.url, f) }, t.label);
}
function rr({
  menuLink: l,
  homeLink: t,
  homeLogoLink: u,
  model: f,
  shortcutComponent: v,
  mobileStyle: h = {},
  desktopStyle: x = {},
  desktopClassName: o = "",
  mobileClassName: i = ""
}) {
  const E = ee(null), _ = (T, C) => C === void 0 || C === "" ? T : C.replace(/^#/, `${T}#`), y = () => {
    E.current && (E.current.checked = !1, document.body.style.overflow = "auto");
  }, b = (T) => {
    document.body.style.overflow = T.target.checked ? "hidden" : "auto";
  }, g = (T, C, k) => T.map((U) => /* @__PURE__ */ a.jsx("li", { role: "menuitem", children: l(
    U.label,
    _(C, U.url),
    k
  ) }, U.label)), P = f.map((T) => /* @__PURE__ */ a.jsx(
    er,
    {
      menuLink: l,
      topMenuItem: T,
      subMenu: g,
      unCheckSideMenu: y
    },
    T.label
  )), $ = f.map((T) => /* @__PURE__ */ a.jsx(
    nr,
    {
      menuLink: l,
      topMenuItem: T,
      subMenu: g,
      unCheckSideMenu: y
    },
    T.label
  ));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `${w.mobile__nav} ${i}`,
        style: h,
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: w["mobile-menu"], children: [
            /* @__PURE__ */ a.jsxs("label", { className: w.hamb, "aria-label": "Main Menu", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  className: w.side__menu,
                  type: "checkbox",
                  ref: E,
                  onChange: b
                }
              ),
              /* @__PURE__ */ a.jsx("span", { className: w["hamb-line"] }),
              /* @__PURE__ */ a.jsx("span", { className: w["hamb-hidden"], children: "Hamburger Menu" })
            ] }),
            t("/", y, -1),
            v && v
          ] }),
          /* @__PURE__ */ a.jsx("nav", { role: "menubar", className: w.menu, children: /* @__PURE__ */ a.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: $ }) })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `${w.desktop__nav} ${o}`,
        style: x,
        children: /* @__PURE__ */ a.jsx("nav", { role: "menubar", className: w.menu, children: /* @__PURE__ */ a.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ a.jsx("li", { role: "menuitem", children: u(w["home-logo"]) }),
          P,
          /* @__PURE__ */ a.jsx("li", { role: "menuitem", children: v && v })
        ] }) })
      }
    )
  ] });
}
const dr = Rn(rr, () => !0);
export {
  cr as Accordion,
  ur as Announcement,
  dr as Menu,
  fr as MiniMenu,
  rr as MutableMenu,
  or as consoleReportHandler,
  wn as debounce,
  sr as htmlConvertor,
  ir as reportWebVitals,
  ar as useNavigationListener,
  lr as useWindowListener
};
