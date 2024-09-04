import re, { useEffect as Q, useState as L, useCallback as N, useMemo as xr, useRef as ee, memo as Er } from "react";
const ln = ({
  appName: o,
  containerName: a,
  props: c
}) => {
  Q(() => {
    window.dispatchEvent(
      new CustomEvent(`[${o}] navigated`, { detail: c.pathname })
    );
  }, [o, c.pathname]), Q(() => {
    function f(v) {
      const _ = v.detail;
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
function cn(o) {
  console.log(o);
}
const jr = (o) => (a) => {
  o({
    ...a,
    delta: a.delta * 1e3
  });
}, un = (o) => {
  o && o instanceof Function && import("./web-vitals-D7PtWMOg.js").then(({ onCLS: a, onINP: c, onLCP: f }) => {
    a(jr(o)), c(o), f(o);
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
function wr() {
  if (Ye)
    return H;
  Ye = 1;
  var o = re, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, v = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(i, s, E) {
    var p, y = {}, b = null, g = null;
    E !== void 0 && (b = "" + E), s.key !== void 0 && (b = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (p in s)
      f.call(s, p) && !_.hasOwnProperty(p) && (y[p] = s[p]);
    if (i && i.defaultProps)
      for (p in s = i.defaultProps, s)
        y[p] === void 0 && (y[p] = s[p]);
    return { $$typeof: a, type: i, key: b, ref: g, props: y, _owner: v.current };
  }
  return H.Fragment = c, H.jsx = x, H.jsxs = x, H;
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
function kr() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var o = re, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), P = Symbol.iterator, A = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[A];
      return typeof r == "function" ? r : null;
    }
    var O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          n[l - 1] = arguments[l];
        U("error", e, n);
      }
    }
    function U(e, r, n) {
      {
        var l = O.ReactDebugCurrentFrame, h = l.getStackAddendum();
        h !== "" && (r += "%s", n = n.concat([h]));
        var m = n.map(function(d) {
          return String(d);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Ie = !1, Ue = !1, Ve = !1, Me = !1, ze = !1, he;
    he = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === _ || ze || e === v || e === E || e === p || Me || e === g || Ie || Ue || Ve || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === x || e.$$typeof === i || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === he || e.getModuleId !== void 0));
    }
    function Ke(e, r, n) {
      var l = e.displayName;
      if (l)
        return l;
      var h = r.displayName || r.name || "";
      return h !== "" ? n + "(" + h + ")" : n;
    }
    function _e(e) {
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
        case f:
          return "Fragment";
        case c:
          return "Portal";
        case _:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case p:
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
            return Ke(e, e.render, "ForwardRef");
          case y:
            var l = e.displayName || null;
            return l !== null ? l : W(e.type) || "Memo";
          case b: {
            var h = e, m = h._payload, d = h._init;
            try {
              return W(d(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, V = 0, be, me, ge, ye, xe, Ee, je;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Je() {
      {
        if (V === 0) {
          be = console.log, me = console.info, ge = console.warn, ye = console.error, xe = console.group, Ee = console.groupCollapsed, je = console.groupEnd;
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
              value: je
            })
          });
        }
        V < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = O.ReactCurrentDispatcher, te;
    function J(e, r, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (h) {
            var l = h.stack.trim().match(/\n( *(at )?)/);
            te = l && l[1] || "";
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
    function we(e, r) {
      if (!e || ae)
        return "";
      {
        var n = q.get(e);
        if (n !== void 0)
          return n;
      }
      var l;
      ae = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = ne.current, ne.current = null, Je();
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
`), j = u.length - 1, R = C.length - 1; j >= 1 && R >= 0 && u[j] !== C[R]; )
            R--;
          for (; j >= 1 && R >= 0; j--, R--)
            if (u[j] !== C[R]) {
              if (j !== 1 || R !== 1)
                do
                  if (j--, R--, R < 0 || u[j] !== C[R]) {
                    var $ = `
` + u[j].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, $), $;
                  }
                while (j >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ne.current = m, qe(), Error.prepareStackTrace = h;
      }
      var B = e ? e.displayName || e.name : "", D = B ? J(B) : "";
      return typeof e == "function" && q.set(e, D), D;
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
        return J(e);
      switch (e) {
        case E:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Xe(e.render);
          case y:
            return G(e.type, r, n);
          case b: {
            var l = e, h = l._payload, m = l._init;
            try {
              return G(m(h), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, ke = {}, Te = O.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    function Qe(e, r, n, l, h) {
      {
        var m = Function.call.bind(M);
        for (var d in e)
          if (m(e, d)) {
            var u = void 0;
            try {
              if (typeof e[d] != "function") {
                var C = Error((l || "React class") + ": " + n + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              u = e[d](r, d, l, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              u = j;
            }
            u && !(u instanceof Error) && (X(h), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", n, d, typeof u), X(null)), u instanceof Error && !(u.message in ke) && (ke[u.message] = !0, X(h), k("Failed %s type: %s", n, u.message), X(null));
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
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Ce(e);
    }
    var z = O.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Pe, ie;
    ie = {};
    function ar(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var n = W(z.current.type);
        ie[n] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(z.current.type), e.ref), ie[n] = !0);
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
    var cr = function(e, r, n, l, h, m, d) {
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
        value: h
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, n, l, h) {
      {
        var m, d = {}, u = null, C = null;
        n !== void 0 && (Oe(n), u = "" + n), or(r) && (Oe(r.key), u = "" + r.key), ar(r) && (C = r.ref, ir(r, h));
        for (m in r)
          M.call(r, m) && !tr.hasOwnProperty(m) && (d[m] = r[m]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (m in j)
            d[m] === void 0 && (d[m] = j[m]);
        }
        if (u || C) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && sr(d, R), C && lr(d, R);
        }
        return cr(e, u, C, h, l, z.current, d);
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
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (We[n])
          return;
        We[n] = !0;
        var l = "";
        e && e._owner && e._owner !== se.current && (l = " It was passed a child from " + W(e._owner.type) + "."), Y(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, l), Y(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            ce(l) && Ne(l, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = T(e);
          if (typeof h == "function" && h !== e.entries)
            for (var m = h.call(e), d; !(d = m.next()).done; )
              ce(d.value) && Ne(d.value, r);
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
          var h = W(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var l = r[n];
          if (l !== "children" && l !== "key") {
            Y(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var De = {};
    function Le(e, r, n, l, h, m) {
      {
        var d = He(e);
        if (!d) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr();
          C ? u += C : u += Ae();
          var j;
          e === null ? j = "null" : oe(e) ? j = "array" : e !== void 0 && e.$$typeof === a ? (j = "<" + (W(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, u);
        }
        var R = ur(e, r, n, h, m);
        if (R == null)
          return R;
        if (d) {
          var $ = r.children;
          if ($ !== void 0)
            if (l)
              if (oe($)) {
                for (var B = 0; B < $.length; B++)
                  Fe($[B], e);
                Object.freeze && Object.freeze($);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe($, e);
        }
        if (M.call(r, "key")) {
          var D = W(e), S = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ue = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[D + ue]) {
            var gr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, D, gr, D), De[D + ue] = !0;
          }
        }
        return e === f ? pr(R) : vr(R), R;
      }
    }
    function hr(e, r, n) {
      return Le(e, r, n, !0);
    }
    function _r(e, r, n) {
      return Le(e, r, n, !1);
    }
    var br = _r, mr = hr;
    K.Fragment = f, K.jsx = br, K.jsxs = mr;
  }()), K;
}
process.env.NODE_ENV === "production" ? ve.exports = wr() : ve.exports = kr();
var t = ve.exports;
const fe = `
`, pe = "[\\.|,]", Tr = new RegExp(
  `.*\\]${pe}?$`
), Cr = new RegExp(
  `\\]${pe}?$`,
  "g"
), Or = new RegExp(
  `${pe}$`
);
function fn(o, a) {
  function c(i, s) {
    if (i.match(Tr) && i.indexOf("|") > -1) {
      const E = i.replace(
        Cr,
        "]"
      ), y = E.substring(
        1,
        E.length - 1
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
    return s.length > 1 ? s.map((E) => {
      const p = E.split("]");
      return p.length === 2 ? `${p[0].replaceAll(
        " ",
        fe
      )}]${p[1]}` : E;
    }).join("|") : i;
  })(o).split(" ").map((i, s) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: i.substring(1, i.length) }, s) : i.startsWith("[") ? c(i, s) : i === "!!" ? /* @__PURE__ */ t.jsx("br", {}, s) : i.replaceAll(fe, " ")).reduce(
    (i, s) => [...i, " ", s],
    []
  );
  return x.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: x });
}
const dn = () => {
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
}, vn = ({ color: o }) => /* @__PURE__ */ t.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ t.jsx("span", { children: o })
] }), Sr = "_footer_ttkno_1", Pr = {
  footer: Sr
}, pn = ({
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
}, hn = ({
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
function _n({
  statusText: o,
  message: a
}) {
  return /* @__PURE__ */ t.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ t.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ t.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ t.jsx("p", { children: /* @__PURE__ */ t.jsx("i", { children: o || a || "Error message is unknown." }) })
  ] });
}
const Wr = "_accordion_okvze_1", Nr = "_tab_okvze_27", Fr = "_tab__content_okvze_38", de = {
  accordion: Wr,
  tab: Nr,
  tab__content: Fr
};
function bn({
  model: o,
  groupName: a,
  isSingle: c = !0
}) {
  const [f, v] = L(""), _ = N(
    (i) => {
      const s = i.currentTarget;
      f === s.value ? (s.checked = !1, v("")) : v(s.value);
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
const Dr = "_announcement_149a8_1", Lr = "_only_one_149a8_11", Yr = "_close_149a8_25", Br = "_button_prev_149a8_77", I = {
  announcement: Dr,
  only_one: Lr,
  close: Yr,
  button_prev: Br
};
function mn({
  ariaAnnouncementTitle: o,
  announcements: a,
  classes: c = ""
}) {
  const [f, v] = L(0), _ = () => v(f - 1 >= 0 ? f - 1 : a.length - 1), x = () => v(a.length > f + 1 ? f + 1 : 0), i = a.length === 1;
  return a.length < 1 ? null : /* @__PURE__ */ t.jsxs(
    "div",
    {
      role: "status",
      title: o,
      className: `${I.announcement} ${i ? I.only_one : ""} ${c}`,
      children: [
        !i && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: _,
            className: `${I.button} ${I.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: a[f] }),
        !i && /* @__PURE__ */ t.jsx("button", { onClick: x, className: I.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ t.jsxs("label", { className: I.close, children: [
          /* @__PURE__ */ t.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ t.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Ir = "_minimenu_1c4fs_1", Ur = "_sticky_1c4fs_1", Vr = "_underline_1c4fs_27", Z = {
  minimenu: Ir,
  sticky: Ur,
  underline: Vr
};
function gn({ model: o, onScrollMonitor: a }) {
  const [c, f] = L(0), v = ee([]), _ = ee(null), [x, i] = L(0), s = N(() => {
    a && a(), _.current && (window.scrollY > x ? _.current.classList.add(Z.sticky) : _.current.classList.remove(Z.sticky));
  }, [x, a]), E = N(
    (b) => {
      const g = b[0].target, P = o.findIndex((O) => O.hashId === g.id), A = P < 0 ? 0 : P, T = v.current[A];
      T !== null && b[0].isIntersecting && (T.scrollIntoViewIfNeeded(!0), f(A));
    },
    [o]
  ), p = N(() => {
    const b = new IntersectionObserver(E, {
      threshold: [0.3]
      //never accurate but it's the best
    }), g = new IntersectionObserver(E, {
      threshold: [1]
    });
    return o.forEach((P) => {
      const A = document.getElementById(P.hashId);
      A !== null && (A.clientHeight < window.innerHeight ? g.observe(A) : b.observe(A));
    }), [b, g];
  }, [E, o]), y = N(
    (b) => () => {
      f(b);
    },
    []
  );
  return Q(() => {
    var g;
    const b = p();
    return i(((g = _.current) == null ? void 0 : g.getBoundingClientRect().top) || 0), s(), window.addEventListener("scroll", s), () => {
      window.removeEventListener("scroll", s), b.forEach((P) => P.disconnect());
    };
  }, [s, p]), /* @__PURE__ */ t.jsx("nav", { className: Z.minimenu, ref: _, children: o.map((b, g) => /* @__PURE__ */ t.jsxs(re.Fragment, { children: [
    g !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${b.hashId}`,
        ref: (P) => {
          v.current[g] = P;
        },
        className: g === c ? `${Z.underline} italic` : void 0,
        onClick: y(g),
        children: /* @__PURE__ */ t.jsx("span", { children: b.title })
      }
    )
  ] }, b.hashId)) });
}
const Mr = "_desktop__nav_tbapn_1", zr = "_mobile__nav_tbapn_1", Hr = "_top_menu_container_tbapn_6", Kr = "_expand_tbapn_11", Jr = "_expand_dummy_tbapn_12", qr = "_menu_tbapn_76", Gr = "_subnav_content_tbapn_83", Xr = "_subnav_tbapn_83", Zr = "_open_tbapn_93", Qr = "_grow_tbapn_1", en = "_hamb_tbapn_148", rn = "_top__menu_tbapn_183", nn = "_side__menu_tbapn_184", w = {
  desktop__nav: Mr,
  mobile__nav: zr,
  top_menu_container: Hr,
  expand: Kr,
  expand_dummy: Jr,
  "home-logo": "_home-logo_tbapn_71",
  menu: qr,
  subnav_content: Gr,
  subnav: Xr,
  open: Zr,
  grow: Qr,
  "mobile-menu": "_mobile-menu_tbapn_141",
  hamb: en,
  "hamb-line": "_hamb-line_tbapn_153",
  "hamb-hidden": "_hamb-hidden_tbapn_179",
  top__menu: rn,
  side__menu: nn
};
function tn({
  menuLink: o,
  topMenuItem: a,
  subMenu: c,
  unCheckSideMenu: f
}) {
  const [v, _] = L(!1), x = ee(null), i = N(() => {
    _(!v);
  }, [v]), s = N(
    (p) => {
      (p.key === "Escape" || p.key === "ArrowUp") && _(!1), p.key === "ArrowDown" && _(!0);
    },
    []
  ), E = N(
    (p) => {
      var b;
      let y = (b = p.relatedTarget) == null ? void 0 : b.parentNode;
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
      className: `${w.subnav} ${v ? w.open : ""}`,
      onBlur: E,
      ref: x,
      "aria-expanded": v,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: w.top_menu_container, children: [
          o(a.label, a.url),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: i,
              onKeyUp: s,
              "aria-label": `Expand ${a.label}`,
              "aria-expanded": v,
              className: w.expand
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: w.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", onFocus: (p) => p.stopPropagation(), children: c(a.items, a.url, f) }) })
      ]
    }
  ) : /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: /* @__PURE__ */ t.jsxs("div", { className: w.top_menu_container, children: [
    o(a.label, a.url),
    /* @__PURE__ */ t.jsx("div", { className: w.expand_dummy })
  ] }) }, a.label);
}
function an({
  menuLink: o,
  topMenuItem: a,
  subMenu: c,
  unCheckSideMenu: f
}) {
  const [v, _] = L(!1), x = N(() => {
    _(!v);
  }, [v]), i = N(
    (s) => {
      (s.key === "Space" || s.key === " " || s.key === "Enter") && s.currentTarget.firstElementChild.click();
    },
    []
  );
  return a.items !== void 0 ? /* @__PURE__ */ t.jsxs(
    "li",
    {
      role: "menuitem",
      className: w.subnav,
      "aria-expanded": v,
      children: [
        /* @__PURE__ */ t.jsx(
          "label",
          {
            className: w.top__menu,
            tabIndex: 0,
            onClick: x,
            onKeyUp: i,
            "aria-label": `Expand ${a.label}`,
            children: /* @__PURE__ */ t.jsx("input", { type: "radio", name: "top_menu", value: a.label })
          }
        ),
        o(a.label, a.url, f),
        /* @__PURE__ */ t.jsx("div", { className: w.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: c(a.items, a.url, f) }) })
      ]
    },
    a.label
  ) : /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: o(a.label, a.url, f) }, a.label);
}
function on({
  menuLink: o,
  homeLink: a,
  homeLogoLink: c,
  model: f,
  shortcutComponent: v,
  mobileStyle: _ = {},
  desktopStyle: x = {},
  desktopClassName: i = "",
  mobileClassName: s = ""
}) {
  const E = ee(null), p = (T, O) => O === void 0 || O === "" ? T : O.replace(/^#/, `${T}#`), y = () => {
    E.current && (E.current.checked = !1, document.body.style.overflow = "auto");
  }, b = (T) => {
    document.body.style.overflow = T.target.checked ? "hidden" : "auto";
  }, g = (T, O, k) => T.map((U) => /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: o(
    U.label,
    p(O, U.url),
    k
  ) }, U.label)), P = f.map((T) => /* @__PURE__ */ t.jsx(
    tn,
    {
      menuLink: o,
      topMenuItem: T,
      subMenu: g,
      unCheckSideMenu: y
    },
    T.label
  )), A = f.map((T) => /* @__PURE__ */ t.jsx(
    an,
    {
      menuLink: o,
      topMenuItem: T,
      subMenu: g,
      unCheckSideMenu: y
    },
    T.label
  ));
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${w.mobile__nav} ${s}`,
        style: _,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: w["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("label", { className: w.hamb, "aria-label": "Main Menu", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  className: w.side__menu,
                  type: "checkbox",
                  ref: E,
                  onChange: b
                }
              ),
              /* @__PURE__ */ t.jsx("span", { className: w["hamb-line"] }),
              /* @__PURE__ */ t.jsx("span", { className: w["hamb-hidden"], children: "Hamburger Menu" })
            ] }),
            a("/", y, -1),
            v && v
          ] }),
          /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: w.menu, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: A }) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${w.desktop__nav} ${i}`,
        style: x,
        children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: w.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: c(w["home-logo"]) }),
          P,
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: v && v })
        ] }) })
      }
    )
  ] });
}
const yn = Er(on, () => !0);
export {
  bn as Accordion,
  mn as Announcement,
  hn as Copyright,
  _n as ErrorPage,
  pn as Footer,
  vn as Logo,
  yn as Menu,
  gn as MiniMenu,
  on as MutableMenu,
  cn as consoleReportHandler,
  Rr as debounce,
  fn as htmlConvertor,
  un as reportWebVitals,
  ln as useNavigationListener,
  dn as useWindowListener
};
