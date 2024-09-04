import re, { useEffect as Q, useState as L, useCallback as N, useMemo as yr, useRef as ee, memo as Er } from "react";
const sn = ({
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
      const p = v.detail;
      c.pathname !== p && c.navigate(p);
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
function ln(o) {
  console.log(o);
}
const jr = (o) => (a) => {
  o({
    ...a,
    delta: a.delta * 1e3
  });
}, cn = (o) => {
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
  var o = re, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, v = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(i, s, E) {
    var h, x = {}, b = null, g = null;
    E !== void 0 && (b = "" + E), s.key !== void 0 && (b = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (h in s)
      f.call(s, h) && !p.hasOwnProperty(h) && (x[h] = s[h]);
    if (i && i.defaultProps)
      for (h in s = i.defaultProps, s)
        x[h] === void 0 && (x[h] = s[h]);
    return { $$typeof: a, type: i, key: b, ref: g, props: x, _owner: v.current };
  }
  return H.Fragment = c, H.jsx = y, H.jsxs = y, H;
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
    var o = re, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), P = Symbol.iterator, A = "@@iterator";
    function T(e) {
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
        U("error", e, n);
      }
    }
    function U(e, r, n) {
      {
        var l = O.ReactDebugCurrentFrame, _ = l.getStackAddendum();
        _ !== "" && (r += "%s", n = n.concat([_]));
        var m = n.map(function(d) {
          return String(d);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Ie = !1, Ue = !1, Ve = !1, Me = !1, ze = !1, _e;
    _e = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === p || ze || e === v || e === E || e === h || Me || e === g || Ie || Ue || Ve || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === x || e.$$typeof === y || e.$$typeof === i || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _e || e.getModuleId !== void 0));
    }
    function Ke(e, r, n) {
      var l = e.displayName;
      if (l)
        return l;
      var _ = r.displayName || r.name || "";
      return _ !== "" ? n + "(" + _ + ")" : n;
    }
    function pe(e) {
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
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return pe(r) + ".Consumer";
          case y:
            var n = e;
            return pe(n._context) + ".Provider";
          case s:
            return Ke(e, e.render, "ForwardRef");
          case x:
            var l = e.displayName || null;
            return l !== null ? l : W(e.type) || "Memo";
          case b: {
            var _ = e, m = _._payload, d = _._init;
            try {
              return W(d(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, V = 0, be, me, ge, xe, ye, Ee, je;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Je() {
      {
        if (V === 0) {
          be = console.log, me = console.info, ge = console.warn, xe = console.error, ye = console.group, Ee = console.groupCollapsed, je = console.groupEnd;
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
              value: xe
            }),
            group: F({}, e, {
              value: ye
            }),
            groupCollapsed: F({}, e, {
              value: Ee
            }),
            groupEnd: F({}, e, {
              value: je
            })
          });
        }
        V < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = O.ReactCurrentDispatcher, te;
    function J(e, r, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (_) {
            var l = _.stack.trim().match(/\n( *(at )?)/);
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
      var _ = Error.prepareStackTrace;
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
        ae = !1, ne.current = m, qe(), Error.prepareStackTrace = _;
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
        case h:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Xe(e.render);
          case x:
            return G(e.type, r, n);
          case b: {
            var l = e, _ = l._payload, m = l._init;
            try {
              return G(m(_), r, n);
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
    function Qe(e, r, n, l, _) {
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
            u && !(u instanceof Error) && (X(_), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", n, d, typeof u), X(null)), u instanceof Error && !(u.message in ke) && (ke[u.message] = !0, X(_), w("Failed %s type: %s", n, u.message), X(null));
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
        ie[n] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(z.current.type), e.ref), ie[n] = !0);
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
    var cr = function(e, r, n, l, _, m, d) {
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
        value: _
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ur(e, r, n, l, _) {
      {
        var m, d = {}, u = null, C = null;
        n !== void 0 && (Oe(n), u = "" + n), or(r) && (Oe(r.key), u = "" + r.key), ar(r) && (C = r.ref, ir(r, _));
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
        return cr(e, u, C, _, l, z.current, d);
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
        e && e._owner && e._owner !== se.current && (l = " It was passed a child from " + W(e._owner.type) + "."), Y(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, l), Y(null);
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
          var _ = T(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var m = _.call(e), d; !(d = m.next()).done; )
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
        r.$$typeof === x))
          n = r.propTypes;
        else
          return;
        if (n) {
          var l = W(r);
          Qe(n, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = W(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
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
    function Le(e, r, n, l, _, m) {
      {
        var d = He(e);
        if (!d) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr();
          C ? u += C : u += Ae();
          var j;
          e === null ? j = "null" : oe(e) ? j = "array" : e !== void 0 && e.$$typeof === a ? (j = "<" + (W(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, u);
        }
        var R = ur(e, r, n, _, m);
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
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe($, e);
        }
        if (M.call(r, "key")) {
          var D = W(e), S = Object.keys(r).filter(function(xr) {
            return xr !== "key";
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
    function _r(e, r, n) {
      return Le(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Le(e, r, n, !1);
    }
    var br = pr, mr = _r;
    K.Fragment = f, K.jsx = br, K.jsxs = mr;
  }()), K;
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
function un(o, a) {
  function c(i, s) {
    if (i.match(Tr) && i.indexOf("|") > -1) {
      const E = i.replace(
        Cr,
        "]"
      ), x = E.substring(
        1,
        E.length - 1
      ).split("|"), b = x[0], g = x[1].replaceAll(
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
  const y = ((i) => {
    const s = i.split("|");
    return s.length > 1 ? s.map((E) => {
      const h = E.split("]");
      return h.length === 2 ? `${h[0].replaceAll(
        " ",
        fe
      )}]${h[1]}` : E;
    }).join("|") : i;
  })(o).split(" ").map((i, s) => i.length < 2 ? i : i.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: i.substring(1, i.length) }, s) : i.startsWith("[") ? c(i, s) : i === "!!" ? /* @__PURE__ */ t.jsx("br", {}, s) : i.replaceAll(fe, " ")).reduce(
    (i, s) => [...i, " ", s],
    []
  );
  return y.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: y });
}
const fn = () => {
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
}, dn = ({ color: o }) => /* @__PURE__ */ t.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ t.jsx("span", { children: o })
] }), Sr = "_footer_ttkno_1", Pr = {
  footer: Sr
}, vn = ({
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
function pn({
  model: o,
  groupName: a,
  isSingle: c = !0
}) {
  const [f, v] = L(""), p = N(
    (i) => {
      const s = i.currentTarget;
      f === s.value ? (s.checked = !1, v("")) : v(s.value);
    },
    [f]
  ), y = yr(
    () => o.map((i, s) => /* @__PURE__ */ t.jsxs("div", { className: de.tab, children: [
      /* @__PURE__ */ t.jsxs("label", { children: [
        i.label,
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: c ? "radio" : "checkbox",
            value: s,
            name: a,
            onClick: c ? p : void 0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: de.tab__content, children: /* @__PURE__ */ t.jsx("p", { children: i.content }) })
    ] }, i.label)),
    [o, c, a, p]
  );
  return /* @__PURE__ */ t.jsx("div", { className: de.accordion, children: y });
}
const Dr = "_announcement_149a8_1", Lr = "_only_one_149a8_11", Yr = "_close_149a8_25", Br = "_button_prev_149a8_77", I = {
  announcement: Dr,
  only_one: Lr,
  close: Yr,
  button_prev: Br
};
function bn({
  ariaAnnouncementTitle: o,
  announcements: a,
  classes: c = ""
}) {
  const [f, v] = L(0), p = () => v(f - 1 >= 0 ? f - 1 : a.length - 1), y = () => v(a.length > f + 1 ? f + 1 : 0), i = a.length === 1;
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
            onClick: p,
            className: `${I.button} ${I.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: a[f] }),
        !i && /* @__PURE__ */ t.jsx("button", { onClick: y, className: I.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
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
function mn({ model: o, onScrollMonitor: a }) {
  const [c, f] = L(0), v = ee([]), p = ee(null), [y, i] = L(0), s = N(() => {
    a && a(), p.current && (window.scrollY > y ? p.current.classList.add(Z.sticky) : p.current.classList.remove(Z.sticky));
  }, [y, a]), E = N(
    (b) => {
      const g = b[0].target, P = o.findIndex((O) => O.hashId === g.id), A = P < 0 ? 0 : P, T = v.current[A];
      T !== null && b[0].isIntersecting && (T.scrollIntoViewIfNeeded(!0), f(A));
    },
    [o]
  ), h = N(() => {
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
  }, [E, o]), x = N(
    (b) => () => {
      f(b);
    },
    []
  );
  return Q(() => {
    var g;
    const b = h();
    return i(((g = p.current) == null ? void 0 : g.getBoundingClientRect().top) || 0), s(), window.addEventListener("scroll", s), () => {
      window.removeEventListener("scroll", s), b.forEach((P) => P.disconnect());
    };
  }, [s, h]), /* @__PURE__ */ t.jsx("nav", { className: Z.minimenu, ref: p, children: o.map((b, g) => /* @__PURE__ */ t.jsxs(re.Fragment, { children: [
    g !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${b.hashId}`,
        ref: (P) => {
          v.current[g] = P;
        },
        className: g === c ? `${Z.underline} italic` : void 0,
        onClick: x(g),
        children: /* @__PURE__ */ t.jsx("span", { children: b.title })
      }
    )
  ] }, b.hashId)) });
}
const Mr = "_desktop__nav_1wxa4_1", zr = "_mobile__nav_1wxa4_1", Hr = "_expand_1wxa4_10", Kr = "_expand_dummy_1wxa4_11", Jr = "_menu_1wxa4_80", qr = "_subnav_content_1wxa4_87", Gr = "_subnav_1wxa4_87", Xr = "_open_1wxa4_97", Zr = "_grow_1wxa4_1", Qr = "_hamb_1wxa4_152", en = "_top__menu_1wxa4_187", rn = "_side__menu_1wxa4_188", k = {
  desktop__nav: Mr,
  mobile__nav: zr,
  expand: Hr,
  expand_dummy: Kr,
  "home-logo": "_home-logo_1wxa4_75",
  menu: Jr,
  subnav_content: qr,
  subnav: Gr,
  open: Xr,
  grow: Zr,
  "mobile-menu": "_mobile-menu_1wxa4_145",
  hamb: Qr,
  "hamb-line": "_hamb-line_1wxa4_157",
  "hamb-hidden": "_hamb-hidden_1wxa4_183",
  top__menu: en,
  side__menu: rn
};
function nn({
  menuLink: o,
  topMenuItem: a,
  subMenu: c,
  unCheckSideMenu: f
}) {
  const [v, p] = L(!1), y = ee(null), i = N(() => {
    p(!v);
  }, [v]), s = N(
    (h) => {
      (h.key === "Escape" || h.key === "ArrowUp") && p(!1), h.key === "ArrowDown" && p(!0);
    },
    []
  ), E = N(
    (h) => {
      var b;
      let x = (b = h.relatedTarget) == null ? void 0 : b.parentNode;
      for (let g = 0; g < 8; g++)
        if (x = x == null ? void 0 : x.parentNode, x === y.current)
          return;
      p(!1);
    },
    []
  );
  return a.items !== void 0 ? /* @__PURE__ */ t.jsx(
    "li",
    {
      role: "menuitem",
      className: `${k.subnav} ${v ? k.open : ""}`,
      onBlur: E,
      ref: y,
      "aria-expanded": v,
      children: /* @__PURE__ */ t.jsxs("div", { children: [
        o(a.label, a.url),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: i,
            onKeyUp: s,
            "aria-label": `Expand ${a.label}`,
            "aria-expanded": v,
            className: k.expand
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: k.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", onFocus: (h) => h.stopPropagation(), children: c(a.items, a.url, f) }) })
      ] })
    }
  ) : /* @__PURE__ */ t.jsxs("li", { role: "menuitem", children: [
    o(a.label, a.url),
    /* @__PURE__ */ t.jsx("div", { className: k.expand_dummy })
  ] }, a.label);
}
function tn({
  menuLink: o,
  topMenuItem: a,
  subMenu: c,
  unCheckSideMenu: f
}) {
  const [v, p] = L(!1), y = N(() => {
    p(!v);
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
      className: k.subnav,
      "aria-expanded": v,
      children: [
        /* @__PURE__ */ t.jsx(
          "label",
          {
            className: k.top__menu,
            tabIndex: 0,
            onClick: y,
            onKeyUp: i,
            "aria-label": `Expand ${a.label}`,
            children: /* @__PURE__ */ t.jsx("input", { type: "radio", name: "top_menu", value: a.label })
          }
        ),
        o(a.label, a.url, f),
        /* @__PURE__ */ t.jsx("div", { className: k.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: c(a.items, a.url, f) }) })
      ]
    },
    a.label
  ) : /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: o(a.label, a.url, f) }, a.label);
}
function an({
  menuLink: o,
  homeLink: a,
  homeLogoLink: c,
  model: f,
  shortcutComponent: v,
  mobileStyle: p = {},
  desktopStyle: y = {},
  desktopClassName: i = "",
  mobileClassName: s = ""
}) {
  const E = ee(null), h = (T, O) => O === void 0 || O === "" ? T : O.replace(/^#/, `${T}#`), x = () => {
    E.current && (E.current.checked = !1, document.body.style.overflow = "auto");
  }, b = (T) => {
    document.body.style.overflow = T.target.checked ? "hidden" : "auto";
  }, g = (T, O, w) => T.map((U) => /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: o(
    U.label,
    h(O, U.url),
    w
  ) }, U.label)), P = f.map((T) => /* @__PURE__ */ t.jsx(
    nn,
    {
      menuLink: o,
      topMenuItem: T,
      subMenu: g,
      unCheckSideMenu: x
    },
    T.label
  )), A = f.map((T) => /* @__PURE__ */ t.jsx(
    tn,
    {
      menuLink: o,
      topMenuItem: T,
      subMenu: g,
      unCheckSideMenu: x
    },
    T.label
  ));
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${k.mobile__nav} ${s}`,
        style: p,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: k["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("label", { className: k.hamb, "aria-label": "Main Menu", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  className: k.side__menu,
                  type: "checkbox",
                  ref: E,
                  onChange: b
                }
              ),
              /* @__PURE__ */ t.jsx("span", { className: k["hamb-line"] }),
              /* @__PURE__ */ t.jsx("span", { className: k["hamb-hidden"], children: "Hamburger Menu" })
            ] }),
            a("/", x, -1),
            v && v
          ] }),
          /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: k.menu, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: A }) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${k.desktop__nav} ${i}`,
        style: y,
        children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: k.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: c(k["home-logo"]) }),
          P,
          /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: v && v })
        ] }) })
      }
    )
  ] });
}
const gn = Er(an, () => !0);
export {
  pn as Accordion,
  bn as Announcement,
  hn as Copyright,
  _n as ErrorPage,
  vn as Footer,
  dn as Logo,
  gn as Menu,
  mn as MiniMenu,
  an as MutableMenu,
  ln as consoleReportHandler,
  Rr as debounce,
  un as htmlConvertor,
  cn as reportWebVitals,
  sn as useNavigationListener,
  fn as useWindowListener
};
