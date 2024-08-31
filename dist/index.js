import ee, { useEffect as Q, useState as J, useCallback as H, useMemo as xr, useRef as de, memo as Er } from "react";
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
    function h(g) {
      const y = g.detail;
      u.pathname !== y && u.navigate(y);
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
var ve = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function wr() {
  if (ze)
    return U;
  ze = 1;
  var i = ee, s = Symbol.for("react.element"), u = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, g = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(o, l, E) {
    var m, R = {}, p = null, b = null;
    E !== void 0 && (p = "" + E), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (m in l)
      h.call(l, m) && !y.hasOwnProperty(m) && (R[m] = l[m]);
    if (o && o.defaultProps)
      for (m in l = o.defaultProps, l)
        R[m] === void 0 && (R[m] = l[m]);
    return { $$typeof: s, type: o, key: p, ref: b, props: R, _owner: g.current };
  }
  return U.Fragment = u, U.jsx = T, U.jsxs = T, U;
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
var Ie;
function kr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ee, s = Symbol.for("react.element"), u = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), P = Symbol.iterator, $ = "@@iterator";
    function v(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[$];
      return typeof r == "function" ? r : null;
    }
    var w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        I("error", e, n);
      }
    }
    function I(e, r, n) {
      {
        var a = w.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", n = n.concat([d]));
        var _ = n.map(function(f) {
          return String(f);
        });
        _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var Ye = !1, Ve = !1, Be = !1, Ue = !1, Me = !1, _e;
    _e = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === y || Me || e === g || e === E || e === m || Ue || e === b || Ye || Ve || Be || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === R || e.$$typeof === T || e.$$typeof === o || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _e || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function pe(e) {
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
        case h:
          return "Fragment";
        case u:
          return "Portal";
        case y:
          return "Profiler";
        case g:
          return "StrictMode";
        case E:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return pe(r) + ".Consumer";
          case T:
            var n = e;
            return pe(n._context) + ".Provider";
          case l:
            return Je(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : W(e.type) || "Memo";
          case p: {
            var d = e, _ = d._payload, f = d._init;
            try {
              return W(f(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, me, be, ge, ye, xe, Ee, je;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function qe() {
      {
        if (Y === 0) {
          me = console.log, be = console.info, ge = console.warn, ye = console.error, xe = console.group, Ee = console.groupCollapsed, je = console.groupEnd;
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
            log: F({}, e, {
              value: me
            }),
            info: F({}, e, {
              value: be
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
              value: je
            })
          });
        }
        Y < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = w.ReactCurrentDispatcher, ne;
    function q(e, r, n) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            ne = a && a[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var te = !1, K;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ge();
    }
    function we(e, r) {
      if (!e || te)
        return "";
      {
        var n = K.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      te = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = re.current, re.current = null, qe();
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
`), O = a.stack.split(`
`), x = c.length - 1, j = O.length - 1; x >= 1 && j >= 0 && c[x] !== O[j]; )
            j--;
          for (; x >= 1 && j >= 0; x--, j--)
            if (c[x] !== O[j]) {
              if (x !== 1 || j !== 1)
                do
                  if (x--, j--, j < 0 || c[x] !== O[j]) {
                    var A = `
` + c[x].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, A), A;
                  }
                while (x >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        te = !1, re.current = _, Ke(), Error.prepareStackTrace = d;
      }
      var L = e ? e.displayName || e.name : "", N = L ? q(L) : "";
      return typeof e == "function" && K.set(e, N), N;
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
        case E:
          return q("Suspense");
        case m:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Xe(e.render);
          case R:
            return G(e.type, r, n);
          case p: {
            var a = e, d = a._payload, _ = a._init;
            try {
              return G(_(d), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ke = {}, Te = w.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    function Qe(e, r, n, a, d) {
      {
        var _ = Function.call.bind(V);
        for (var f in e)
          if (_(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var O = Error((a || "React class") + ": " + n + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              c = e[f](r, f, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (X(d), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, f, typeof c), X(null)), c instanceof Error && !(c.message in ke) && (ke[c.message] = !0, X(d), k("Failed %s type: %s", n, c.message), X(null));
          }
      }
    }
    var er = Array.isArray;
    function ae(e) {
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
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Ce(e);
    }
    var B = w.ReactCurrentOwner, tr = {
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
        var n = W(B.current.type);
        ie[n] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(B.current.type), e.ref), ie[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          Se || (Se = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Pe || (Pe = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, a, d, _, f) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: f,
        // Record the component responsible for creating this element.
        _owner: _
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
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ur(e, r, n, a, d) {
      {
        var _, f = {}, c = null, O = null;
        n !== void 0 && (Oe(n), c = "" + n), ir(r) && (Oe(r.key), c = "" + r.key), ar(r) && (O = r.ref, or(r, d));
        for (_ in r)
          V.call(r, _) && !tr.hasOwnProperty(_) && (f[_] = r[_]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (_ in x)
            f[_] === void 0 && (f[_] = x[_]);
        }
        if (c || O) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && sr(f, j), O && lr(f, j);
        }
        return cr(e, c, O, d, a, B.current, f);
      }
    }
    var oe = w.ReactCurrentOwner, Ae = w.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(n);
      } else
        Ae.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function $e() {
      {
        if (oe.current) {
          var e = W(oe.current.type);
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
        var r = $e();
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
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + W(e._owner.type) + "."), D(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), D(null);
      }
    }
    function Ne(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            le(a) && Fe(a, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = v(e);
          if (typeof d == "function" && d !== e.entries)
            for (var _ = d.call(e), f; !(f = _.next()).done; )
              le(f.value) && Fe(f.value, r);
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
        r.$$typeof === R))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = W(r);
          Qe(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var d = W(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            D(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var De = {};
    function Le(e, r, n, a, d, _) {
      {
        var f = He(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = fr();
          O ? c += O : c += $e();
          var x;
          e === null ? x = "null" : ae(e) ? x = "array" : e !== void 0 && e.$$typeof === s ? (x = "<" + (W(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var j = ur(e, r, n, d, _);
        if (j == null)
          return j;
        if (f) {
          var A = r.children;
          if (A !== void 0)
            if (a)
              if (ae(A)) {
                for (var L = 0; L < A.length; L++)
                  Ne(A[L], e);
                Object.freeze && Object.freeze(A);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(A, e);
        }
        if (V.call(r, "key")) {
          var N = W(e), S = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ce = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[N + ce]) {
            var gr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, N, gr, N), De[N + ce] = !0;
          }
        }
        return e === h ? hr(j) : vr(j), j;
      }
    }
    function _r(e, r, n) {
      return Le(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Le(e, r, n, !1);
    }
    var mr = pr, br = _r;
    M.Fragment = h, M.jsx = mr, M.jsxs = br;
  }()), M;
}
process.env.NODE_ENV === "production" ? ve.exports = wr() : ve.exports = kr();
var t = ve.exports;
const ue = `
`, he = "[\\.|,]", Tr = new RegExp(
  `.*\\]${he}?$`
), Cr = new RegExp(
  `\\]${he}?$`,
  "g"
), Or = new RegExp(
  `${he}$`
);
function nn(i, s) {
  function u(o, l) {
    if (o.match(Tr) && o.indexOf("|") > -1) {
      const E = o.replace(
        Cr,
        "]"
      ), R = E.substring(
        1,
        E.length - 1
      ).split("|"), p = R[0], b = R[1].replaceAll(
        ue,
        " "
      );
      return /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
        s(p, b),
        o.match(Or) ? `${o.slice(-1)}` : ""
      ] }, l);
    }
    return o;
  }
  const T = ((o) => {
    const l = o.split("|");
    return l.length > 1 ? l.map((E) => {
      const m = E.split("]");
      return m.length === 2 ? `${m[0].replaceAll(
        " ",
        ue
      )}]${m[1]}` : E;
    }).join("|") : o;
  })(i).split(" ").map((o, l) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: o.substring(1, o.length) }, l) : o.startsWith("[") ? u(o, l) : o === "!!" ? /* @__PURE__ */ t.jsx("br", {}, l) : o.replaceAll(ue, " ")).reduce(
    (o, l) => [...o, " ", l],
    []
  );
  return T.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: T });
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
const Wr = "_accordion_okvze_1", Fr = "_tab_okvze_27", Nr = "_tab__content_okvze_38", fe = {
  accordion: Wr,
  tab: Fr,
  tab__content: Nr
};
function cn({
  model: i,
  groupName: s,
  isSingle: u = !0
}) {
  const [h, g] = J(""), y = H(
    (o) => {
      const l = o.currentTarget;
      h === l.value ? (l.checked = !1, g("")) : g(l.value);
    },
    [h]
  ), T = xr(
    () => i.map((o, l) => /* @__PURE__ */ t.jsxs("div", { className: fe.tab, children: [
      /* @__PURE__ */ t.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: u ? "radio" : "checkbox",
            value: l,
            name: s,
            onClick: u ? y : void 0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: fe.tab__content, children: /* @__PURE__ */ t.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [i, u, s, y]
  );
  return /* @__PURE__ */ t.jsx("div", { className: fe.accordion, children: T });
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
  const [h, g] = J(0), y = () => g(h - 1 >= 0 ? h - 1 : s.length - 1), T = () => g(s.length > h + 1 ? h + 1 : 0), o = s.length === 1;
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
            onClick: y,
            className: `${z.button} ${z.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: s[h] }),
        !o && /* @__PURE__ */ t.jsx("button", { onClick: T, className: z.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
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
  const [u, h] = J(0), g = de([]), y = de(null), [T, o] = J(0), l = H(() => {
    s && s(), y.current && (window.scrollY > T ? y.current.classList.add(Z.sticky) : y.current.classList.remove(Z.sticky));
  }, [T, s]), E = H(
    (p) => {
      const b = p[0].target, P = i.findIndex((w) => w.hashId === b.id), $ = P < 0 ? 0 : P, v = g.current[$];
      v !== null && p[0].isIntersecting && (v.scrollIntoViewIfNeeded(!0), h($));
    },
    [i]
  ), m = H(() => {
    const p = new IntersectionObserver(E, {
      threshold: [0.3]
      //never accurate but it's the best
    }), b = new IntersectionObserver(E, {
      threshold: [1]
    });
    return i.forEach((P) => {
      const $ = document.getElementById(P.hashId);
      $ !== null && ($.clientHeight < window.innerHeight ? b.observe($) : p.observe($));
    }), [p, b];
  }, [E, i]), R = H(
    (p) => () => {
      h(p);
    },
    []
  );
  return Q(() => {
    var b;
    const p = m();
    return o(((b = y.current) == null ? void 0 : b.getBoundingClientRect().top) || 0), l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l), p.forEach((P) => P.disconnect());
    };
  }, [l, m]), /* @__PURE__ */ t.jsx("nav", { className: Z.minimenu, ref: y, children: i.map((p, b) => /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
    b !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${p.hashId}`,
        ref: (P) => {
          g.current[b] = P;
        },
        className: b === u ? `${Z.underline} italic` : void 0,
        onClick: R(b),
        children: /* @__PURE__ */ t.jsx("span", { children: p.title })
      }
    )
  ] }, p.hashId)) });
}
const Ur = "_desktop__nav_7z714_1", Mr = "_mobile__nav_7z714_1", Hr = "_menu_7z714_53", Jr = "_subnav_7z714_60", qr = "_grow_7z714_1", Kr = "_hamb_7z714_127", Gr = "_top__menu_7z714_208", C = {
  desktop__nav: Ur,
  mobile__nav: Mr,
  "home-logo": "_home-logo_7z714_48",
  menu: Hr,
  "subnav-content": "_subnav-content_7z714_60",
  subnav: Jr,
  grow: qr,
  "mobile-menu": "_mobile-menu_7z714_120",
  hamb: Kr,
  "hamb-line": "_hamb-line_7z714_132",
  "hamb-hidden": "_hamb-hidden_7z714_158",
  "top-menu": "_top-menu_7z714_162",
  "side-menu": "_side-menu_7z714_163",
  top__menu: Gr
};
function Xr({
  menuLink: i,
  homeLink: s,
  homeLogoLink: u,
  model: h,
  shortcutComponent: g,
  mobileStyle: y = {},
  desktopStyle: T = {},
  desktopClassName: o = "",
  mobileClassName: l = ""
}) {
  const E = de(null), m = (v, w) => w === void 0 || w === "" ? v : w.replace(/^#/, `${v}#`), R = () => {
    E.current && (E.current.checked = !1, document.body.style.overflow = "auto");
  }, p = (v) => {
    document.body.style.overflow = v.target.checked ? "hidden" : "auto";
  }, b = (v, w, k) => v.map((I) => /* @__PURE__ */ t.jsx("li", { role: "presentation", children: i(
    I.label,
    m(w, I.url),
    "menuitem",
    k
  ) }, I.label)), P = h.map((v) => {
    const w = v.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: w ? C.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          i(v.label, v.url, "menuitem"),
          v.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: C["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: b(v.items, v.url, R) }) })
        ] })
      },
      v.label
    );
  }), $ = h.map((v) => {
    const w = v.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: w ? C.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          w ? /* @__PURE__ */ t.jsxs("label", { className: C.top__menu, children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                className: C["top-menu"],
                type: "radio",
                name: "top-menu",
                value: v.label
              }
            ),
            v.label
          ] }) : i(
            v.label,
            v.url,
            "menuitem",
            R
          ),
          v.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: C["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: b(v.items, v.url, R) }) })
        ] })
      },
      v.label
    );
  });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${C.mobile__nav} ${l}`,
        style: y,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: C["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("label", { className: C.hamb, "aria-label": "Main Menu", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  className: C["side-menu"],
                  type: "checkbox",
                  ref: E,
                  onChange: p
                }
              ),
              /* @__PURE__ */ t.jsx("span", { className: C["hamb-line"] }),
              /* @__PURE__ */ t.jsx("span", { className: C["hamb-hidden"], children: "Hamburger Menu" })
            ] }),
            s("/", R, -1),
            g && g
          ] }),
          /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: C.menu, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: $ }) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${C.desktop__nav} ${o}`,
        style: T,
        children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: C.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: u(C["home-logo"]) }),
          P,
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
