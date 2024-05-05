import re, { useEffect as Q, useState as ke, useCallback as dr, useMemo as vr } from "react";
const kr = ({
  appName: a,
  containerName: l,
  props: f
}) => {
  Q(() => {
    window.dispatchEvent(
      new CustomEvent(`[${a}] navigated`, { detail: f.pathname })
    );
  }, [a, f.pathname]), Q(() => {
    function m(y) {
      const _ = y.detail;
      f.pathname !== _ && f.navigate(_);
    }
    return window.addEventListener(
      `[${l}] navigated`,
      m
    ), () => {
      window.removeEventListener(
        `[${l}] navigated`,
        m
      );
    };
  }, [l, f]);
};
function Pr(a) {
  console.log(a);
}
function pr(a) {
  const l = a.value;
  return a.name === "CLS" ? Math.round(l * 1e3) : Math.round(l);
}
function Wr(a) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: a.name,
    eventValue: pr(a),
    eventLabel: a.id,
    nonInteraction: !0
  });
}
const Ar = (a) => {
  /* istanbul ignore next -- @preserve */
  a && a instanceof Function && import("./web-vitals-3ca605ab.js").then(({ onCLS: l, onFID: f, onFCP: m, onLCP: y, onTTFB: _ }) => {
    /* istanbul ignore next -- @preserve */
    l(a);
    /* istanbul ignore next -- @preserve */
    f(a);
    /* istanbul ignore next -- @preserve */
    m(a);
    /* istanbul ignore next -- @preserve */
    y(a);
    /* istanbul ignore next -- @preserve */
    _(a);
  });
};
function hr(a, l) {
  let f;
  return () => {
    /* istanbul ignore if -- @preserve */
    f !== null && clearTimeout(f), f = setTimeout(() => {
      f = null, a();
    }, l);
  };
}
var ee = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function gr() {
  if (Oe)
    return D;
  Oe = 1;
  var a = re, l = Symbol.for("react.element"), f = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, y = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(u, s, g) {
    var b, x = {}, j = null, k = null;
    g !== void 0 && (j = "" + g), s.key !== void 0 && (j = "" + s.key), s.ref !== void 0 && (k = s.ref);
    for (b in s)
      m.call(s, b) && !_.hasOwnProperty(b) && (x[b] = s[b]);
    if (u && u.defaultProps)
      for (b in s = u.defaultProps, s)
        x[b] === void 0 && (x[b] = s[b]);
    return { $$typeof: l, type: u, key: j, ref: k, props: x, _owner: y.current };
  }
  return D.Fragment = f, D.jsx = T, D.jsxs = T, D;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function br() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var a = re, l = Symbol.for("react.element"), f = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), ne = Symbol.iterator, Pe = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var P = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(o) {
          return String(o);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Fe = !1, $e = !1, De = !1, Le = !1, Ie = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === _ || Ie || e === y || e === g || e === b || Le || e === k || Fe || $e || De || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === x || e.$$typeof === T || e.$$typeof === u || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case f:
          return "Portal";
        case _:
          return "Profiler";
        case y:
          return "StrictMode";
        case g:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var r = e;
            return ie(r) + ".Consumer";
          case T:
            var t = e;
            return ie(t._context) + ".Provider";
          case s:
            return Ye(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case j: {
            var c = e, d = c._payload, o = c._init;
            try {
              return C(o(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, oe, se, ue, ce, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ve() {
      {
        if (F === 0) {
          oe = console.log, se = console.info, ue = console.warn, ce = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: oe
            }),
            info: S({}, e, {
              value: se
            }),
            warn: S({}, e, {
              value: ue
            }),
            error: S({}, e, {
              value: ce
            }),
            group: S({}, e, {
              value: le
            }),
            groupCollapsed: S({}, e, {
              value: fe
            }),
            groupEnd: S({}, e, {
              value: de
            })
          });
        }
        F < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = P.ReactCurrentDispatcher, B;
    function I(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var H = !1, N;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ue();
    }
    function pe(e, r) {
      if (!e || H)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = U.current, U.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var i = O.stack.split(`
`), R = n.stack.split(`
`), p = i.length - 1, h = R.length - 1; p >= 1 && h >= 0 && i[p] !== R[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (i[p] !== R[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || i[p] !== R[h]) {
                    var w = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, w), w;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        H = !1, U.current = d, Me(), Error.prepareStackTrace = c;
      }
      var A = e ? e.displayName || e.name : "", Ce = A ? I(A) : "";
      return typeof e == "function" && N.set(e, Ce), Ce;
    }
    function Be(e, r, t) {
      return pe(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, He(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case g:
          return I("Suspense");
        case b:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Be(e.render);
          case x:
            return Y(e.type, r, t);
          case j: {
            var n = e, c = n._payload, d = n._init;
            try {
              return Y(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, he = {}, ge = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, c) {
      {
        var d = Function.call.bind(V);
        for (var o in e)
          if (d(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var R = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (M(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), M(null)), i instanceof Error && !(i.message in he) && (he[i.message] = !0, M(c), E("Failed %s type: %s", t, i.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function me(e) {
      if (Ge(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), be(e);
    }
    var $ = P.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Ee, q;
    q = {};
    function Xe(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = C($.current.type);
        q[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C($.current.type), e.ref), q[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          _e || (_e = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, c, d, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, n, c) {
      {
        var d, o = {}, i = null, R = null;
        t !== void 0 && (me(t), i = "" + t), Ze(r) && (me(r.key), i = "" + r.key), Xe(r) && (R = r.ref, Qe(r, c));
        for (d in r)
          V.call(r, d) && !Ke.hasOwnProperty(d) && (o[d] = r[d]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (d in p)
            o[d] === void 0 && (o[d] = p[d]);
        }
        if (i || R) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(o, h), R && rr(o, h);
        }
        return tr(e, i, R, c, n, $.current, o);
      }
    }
    var J = P.ReactCurrentOwner, Re = P.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function ye() {
      {
        if (J.current) {
          var e = C(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function ir(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + C(e._owner.type) + "."), W(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), W(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && we(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = We(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), o; !(o = d.next()).done; )
              K(o.value) && we(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var c = C(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            W(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function je(e, r, t, n, c, d) {
      {
        var o = Ne(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ar(c);
          R ? i += R : i += ye();
          var p;
          e === null ? p = "null" : z(e) ? p = "array" : e !== void 0 && e.$$typeof === l ? (p = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var h = nr(e, r, t, c, d);
        if (h == null)
          return h;
        if (o) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (z(w)) {
                for (var A = 0; A < w.length; A++)
                  Te(w[A], e);
                Object.freeze && Object.freeze(w);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(w, e);
        }
        return e === m ? sr(h) : or(h), h;
      }
    }
    function ur(e, r, t) {
      return je(e, r, t, !0);
    }
    function cr(e, r, t) {
      return je(e, r, t, !1);
    }
    var lr = cr, fr = ur;
    L.Fragment = m, L.jsx = lr, L.jsxs = fr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ee.exports = gr() : ee.exports = br();
var v = ee.exports;
const X = `
`, te = "[\\.|,]", mr = new RegExp(
  `.*\\]${te}?$`
), _r = new RegExp(
  `\\]${te}?$`,
  "g"
), Er = new RegExp(
  `${te}$`
);
function Rr(a, l) {
  function f(u, s) {
    if (u.match(mr) && u.indexOf("|") > -1) {
      const g = u.replace(
        _r,
        "]"
      ), x = g.substring(
        1,
        g.length - 1
      ).split("|"), j = x[0], k = x[1].replaceAll(
        X,
        " "
      );
      return /* @__PURE__ */ v.jsxs(re.Fragment, { children: [
        l(j, k),
        u.match(Er) ? `${u.slice(-1)}` : ""
      ] }, s);
    }
    return u;
  }
  const T = ((u) => {
    const s = u.split("|");
    return s.length > 1 ? s.map((g) => {
      const b = g.split("]");
      return b.length === 2 ? `${b[0].replaceAll(
        " ",
        X
      )}]${b[1]}` : g;
    }).join("|") : u;
  })(a).split(" ").map((u, s) => u.length < 2 ? u : u.startsWith("*") ? /* @__PURE__ */ v.jsx("strong", { children: u.substring(1, u.length) }, s) : u.startsWith("[") ? f(u, s) : u === "!!" ? /* @__PURE__ */ v.jsx("br", {}, s) : u.replaceAll(X, " ")).reduce(
    (u, s) => [...u, " ", s],
    []
  );
  return T.shift(), /* @__PURE__ */ v.jsx(v.Fragment, { children: T });
}
const Fr = () => {
  const [a, l] = ke({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return Q(() => {
    const f = hr(function() {
      l({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), a;
}, $r = ({ color: a }) => /* @__PURE__ */ v.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ v.jsx("span", { children: a })
] }), yr = "_footer_ttkno_1", xr = {
  footer: yr
}, Dr = ({
  companyName: a = "Walcron",
  establishedYear: l = 2014,
  lastUpdatedYear: f
}) => /* @__PURE__ */ v.jsxs("div", { className: xr.footer, children: [
  /* @__PURE__ */ v.jsx("hr", {}),
  /* @__PURE__ */ v.jsxs("div", { children: [
    a,
    " ",
    l,
    " - ",
    f,
    " ©"
  ] })
] }), wr = "_copyright_1c7c9_1", Tr = {
  copyright: wr
}, Lr = ({
  companyName: a = "Walcron",
  link: l = "/",
  lastUpdatedYear: f
}) => /* @__PURE__ */ v.jsxs("div", { className: Tr.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ v.jsx("a", { color: "inherit", href: l, children: a }),
  " ",
  f,
  "."
] });
function Ir({
  statusText: a,
  message: l
}) {
  return /* @__PURE__ */ v.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ v.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ v.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ v.jsx("p", { children: /* @__PURE__ */ v.jsx("i", { children: a || l || "Error message is unknown." }) })
  ] });
}
const jr = "_accordion_1gi8s_1", Cr = "_tab_1gi8s_27", Or = "_tab__content_1gi8s_38", Z = {
  accordion: jr,
  tab: Cr,
  tab__content: Or
};
function Nr({
  model: a,
  groupName: l,
  isSingle: f = !0,
  anchorElem: m = (y, _) => /* @__PURE__ */ v.jsx("a", { href: y, children: _ })
}) {
  const [y, _] = ke(""), T = dr(
    (s) => {
      const g = s.currentTarget;
      y === g.value ? (g.checked = !1, _("")) : _(g.value);
    },
    [y]
  ), u = vr(
    () => a.map((s, g) => /* @__PURE__ */ v.jsxs("div", { className: Z.tab, children: [
      /* @__PURE__ */ v.jsxs("label", { children: [
        s.label,
        /* @__PURE__ */ v.jsx(
          "input",
          {
            type: f ? "radio" : "checkbox",
            value: g,
            name: l,
            onClick: f ? T : void 0
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: Z.tab__content, children: /* @__PURE__ */ v.jsx("p", { children: Rr(s.content, m) }) })
    ] }, s.label)),
    [a, f, l, T, m]
  );
  return /* @__PURE__ */ v.jsx("div", { className: Z.accordion, children: u });
}
export {
  Nr as Accordion,
  Lr as Copyright,
  Ir as ErrorPage,
  Dr as Footer,
  $r as Logo,
  Pr as consoleReportHandler,
  hr as debounce,
  Wr as gaReportHandler,
  Rr as htmlConvertor,
  Ar as reportWebVitals,
  kr as useNavigationListener,
  Fr as useWindowListener
};
