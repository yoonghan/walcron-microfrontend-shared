import Z, { useEffect as X, useState as H, useCallback as N, useMemo as yr, useRef as De } from "react";
const Br = ({
  appName: t,
  containerName: i,
  props: l
}) => {
  X(() => {
    window.dispatchEvent(
      new CustomEvent(`[${t}] navigated`, { detail: l.pathname })
    );
  }, [t, l.pathname]), X(() => {
    function h(y) {
      const E = y.detail;
      l.pathname !== E && l.navigate(E);
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
  }, [i, l]);
};
function Ur(t) {
  console.log(t);
}
function Er(t) {
  const i = t.value;
  return t.name === "CLS" ? Math.round(i * 1e3) : Math.round(i);
}
function Hr(t) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: t.name,
    eventValue: Er(t),
    eventLabel: t.id,
    nonInteraction: !0
  });
}
const zr = (t) => {
  t && t instanceof Function && import("./web-vitals-C2duWsRR.js").then(({ onCLS: i, onFID: l, onFCP: h, onLCP: y, onTTFB: E }) => {
    i(t), l(t), h(t), y(t), E(t);
  });
};
function Rr(t, i) {
  let l;
  return () => {
    /* istanbul ignore if -- @preserve */
    l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, t();
    }, i);
  };
}
var fe = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function xr() {
  if (Le)
    return B;
  Le = 1;
  var t = Z, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(o, u, x) {
    var p, w = {}, S = null, P = null;
    x !== void 0 && (S = "" + x), u.key !== void 0 && (S = "" + u.key), u.ref !== void 0 && (P = u.ref);
    for (p in u)
      h.call(u, p) && !E.hasOwnProperty(p) && (w[p] = u[p]);
    if (o && o.defaultProps)
      for (p in u = o.defaultProps, u)
        w[p] === void 0 && (w[p] = u[p]);
    return { $$typeof: i, type: o, key: S, ref: P, props: w, _owner: y.current };
  }
  return B.Fragment = l, B.jsx = R, B.jsxs = R, B;
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
var Ne;
function wr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Z, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), _ = Symbol.iterator, O = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = _ && e[_] || e[O];
      return typeof r == "function" ? r : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        Q("error", e, n);
      }
    }
    function Q(e, r, n) {
      {
        var a = T.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", n = n.concat([d]));
        var v = n.map(function(f) {
          return String(f);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ye = !1, Ve = !1, Me = !1, Be = !1, Ue = !1, ve;
    ve = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === E || Ue || e === y || e === x || e === p || Be || e === P || Ye || Ve || Me || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === w || e.$$typeof === R || e.$$typeof === o || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ve || e.getModuleId !== void 0));
    }
    function ze(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function he(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case l:
          return "Portal";
        case E:
          return "Profiler";
        case y:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return he(r) + ".Consumer";
          case R:
            var n = e;
            return he(n._context) + ".Provider";
          case u:
            return ze(e, e.render, "ForwardRef");
          case w:
            var a = e.displayName || null;
            return a !== null ? a : A(e.type) || "Memo";
          case S: {
            var d = e, v = d._payload, f = d._init;
            try {
              return A(f(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, Y = 0, pe, ge, be, _e, me, ye, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Je() {
      {
        if (Y === 0) {
          pe = console.log, ge = console.info, be = console.warn, _e = console.error, me = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
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
    function qe() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: pe
            }),
            info: $({}, e, {
              value: ge
            }),
            warn: $({}, e, {
              value: be
            }),
            error: $({}, e, {
              value: _e
            }),
            group: $({}, e, {
              value: me
            }),
            groupCollapsed: $({}, e, {
              value: ye
            }),
            groupEnd: $({}, e, {
              value: Ee
            })
          });
        }
        Y < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = T.ReactCurrentDispatcher, re;
    function z(e, r, n) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            re = a && a[1] || "";
          }
        return `
` + re + e;
      }
    }
    var ne = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function xe(e, r) {
      if (!e || ne)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      ne = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = ee.current, ee.current = null, Je();
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
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (C) {
              a = C;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), j = a.stack.split(`
`), g = s.length - 1, b = j.length - 1; g >= 1 && b >= 0 && s[g] !== j[b]; )
            b--;
          for (; g >= 1 && b >= 0; g--, b--)
            if (s[g] !== j[b]) {
              if (g !== 1 || b !== 1)
                do
                  if (g--, b--, b < 0 || s[g] !== j[b]) {
                    var k = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, k), k;
                  }
                while (g >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ne = !1, ee.current = v, qe(), Error.prepareStackTrace = d;
      }
      var D = e ? e.displayName || e.name : "", F = D ? z(D) : "";
      return typeof e == "function" && J.set(e, F), F;
    }
    function Ge(e, r, n) {
      return xe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Xe(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case x:
          return z("Suspense");
        case p:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ge(e.render);
          case w:
            return q(e.type, r, n);
          case S: {
            var a = e, d = a._payload, v = a._init;
            try {
              return q(v(d), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, we = {}, je = T.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    function Ze(e, r, n, a, d) {
      {
        var v = Function.call.bind(V);
        for (var f in e)
          if (v(e, f)) {
            var s = void 0;
            try {
              if (typeof e[f] != "function") {
                var j = Error((a || "React class") + ": " + n + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              s = e[f](r, f, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (K(d), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, f, typeof s), K(null)), s instanceof Error && !(s.message in we) && (we[s.message] = !0, K(d), m("Failed %s type: %s", n, s.message), K(null));
          }
      }
    }
    var Qe = Array.isArray;
    function te(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function rr(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Ce(e) {
      if (rr(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Te(e);
    }
    var M = T.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, ke, ae;
    ae = {};
    function tr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var n = A(M.current.type);
        ae[n] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(M.current.type), e.ref), ae[n] = !0);
      }
    }
    function ir(e, r) {
      {
        var n = function() {
          Oe || (Oe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          ke || (ke = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, a, d, v, f) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: f,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, n, a, d) {
      {
        var v, f = {}, s = null, j = null;
        n !== void 0 && (Ce(n), s = "" + n), ar(r) && (Ce(r.key), s = "" + r.key), tr(r) && (j = r.ref, or(r, d));
        for (v in r)
          V.call(r, v) && !nr.hasOwnProperty(v) && (f[v] = r[v]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (v in g)
            f[v] === void 0 && (f[v] = g[v]);
        }
        if (s || j) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(f, b), j && sr(f, b);
        }
        return cr(e, s, j, d, a, M.current, f);
      }
    }
    var oe = T.ReactCurrentOwner, Se = T.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = q(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(n);
      } else
        Se.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Pe() {
      {
        if (oe.current) {
          var e = A(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var Ae = {};
    function fr(e) {
      {
        var r = Pe();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function We(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = fr(r);
        if (Ae[n])
          return;
        Ae[n] = !0;
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + A(e._owner.type) + "."), I(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), I(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            se(a) && We(a, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = W(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), f; !(f = v.next()).done; )
              se(f.value) && We(f.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = A(r);
          Ze(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var d = A(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            I(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Fe = {};
    function Ie(e, r, n, a, d, v) {
      {
        var f = He(e);
        if (!f) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ur();
          j ? s += j : s += Pe();
          var g;
          e === null ? g = "null" : te(e) ? g = "array" : e !== void 0 && e.$$typeof === i ? (g = "<" + (A(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var b = lr(e, r, n, d, v);
        if (b == null)
          return b;
        if (f) {
          var k = r.children;
          if (k !== void 0)
            if (a)
              if (te(k)) {
                for (var D = 0; D < k.length; D++)
                  $e(k[D], e);
                Object.freeze && Object.freeze(k);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(k, e);
        }
        if (V.call(r, "key")) {
          var F = A(e), C = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), ce = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[F + ce]) {
            var _r = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, F, _r, F), Fe[F + ce] = !0;
          }
        }
        return e === h ? vr(b) : dr(b), b;
      }
    }
    function hr(e, r, n) {
      return Ie(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Ie(e, r, n, !1);
    }
    var gr = pr, br = hr;
    U.Fragment = h, U.jsx = gr, U.jsxs = br;
  }()), U;
}
process.env.NODE_ENV === "production" ? fe.exports = xr() : fe.exports = wr();
var c = fe.exports;
const le = `
`, de = "[\\.|,]", jr = new RegExp(
  `.*\\]${de}?$`
), Tr = new RegExp(
  `\\]${de}?$`,
  "g"
), Cr = new RegExp(
  `${de}$`
);
function Jr(t, i) {
  function l(o, u) {
    if (o.match(jr) && o.indexOf("|") > -1) {
      const x = o.replace(
        Tr,
        "]"
      ), w = x.substring(
        1,
        x.length - 1
      ).split("|"), S = w[0], P = w[1].replaceAll(
        le,
        " "
      );
      return /* @__PURE__ */ c.jsxs(Z.Fragment, { children: [
        i(S, P),
        o.match(Cr) ? `${o.slice(-1)}` : ""
      ] }, u);
    }
    return o;
  }
  const R = ((o) => {
    const u = o.split("|");
    return u.length > 1 ? u.map((x) => {
      const p = x.split("]");
      return p.length === 2 ? `${p[0].replaceAll(
        " ",
        le
      )}]${p[1]}` : x;
    }).join("|") : o;
  })(t).split(" ").map((o, u) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ c.jsx("strong", { children: o.substring(1, o.length) }, u) : o.startsWith("[") ? l(o, u) : o === "!!" ? /* @__PURE__ */ c.jsx("br", {}, u) : o.replaceAll(le, " ")).reduce(
    (o, u) => [...o, " ", u],
    []
  );
  return R.shift(), /* @__PURE__ */ c.jsx(c.Fragment, { children: R });
}
const qr = () => {
  const [t, i] = H({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return X(() => {
    const l = Rr(function() {
      i({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", l), () => {
      window.removeEventListener("resize", l);
    };
  }, []), t;
}, Kr = ({ color: t }) => /* @__PURE__ */ c.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ c.jsx("span", { children: t })
] }), Or = "_footer_ttkno_1", kr = {
  footer: Or
}, Gr = ({
  companyName: t = "Walcron",
  establishedYear: i = 2014,
  lastUpdatedYear: l
}) => /* @__PURE__ */ c.jsxs("div", { className: kr.footer, children: [
  /* @__PURE__ */ c.jsx("hr", {}),
  /* @__PURE__ */ c.jsxs("div", { children: [
    t,
    " ",
    i,
    " - ",
    l,
    " ©"
  ] })
] }), Sr = "_copyright_1c7c9_1", Pr = {
  copyright: Sr
}, Xr = ({
  companyName: t = "Walcron",
  link: i = "/",
  lastUpdatedYear: l
}) => /* @__PURE__ */ c.jsxs("div", { className: Pr.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ c.jsx("a", { color: "inherit", href: i, children: t }),
  " ",
  l,
  "."
] });
function Zr({
  statusText: t,
  message: i
}) {
  return /* @__PURE__ */ c.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ c.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ c.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ c.jsx("p", { children: /* @__PURE__ */ c.jsx("i", { children: t || i || "Error message is unknown." }) })
  ] });
}
const Ar = "_accordion_1gi8s_1", Wr = "_tab_1gi8s_27", $r = "_tab__content_1gi8s_38", ue = {
  accordion: Ar,
  tab: Wr,
  tab__content: $r
};
function Qr({
  model: t,
  groupName: i,
  isSingle: l = !0
}) {
  const [h, y] = H(""), E = N(
    (o) => {
      const u = o.currentTarget;
      h === u.value ? (u.checked = !1, y("")) : y(u.value);
    },
    [h]
  ), R = yr(
    () => t.map((o, u) => /* @__PURE__ */ c.jsxs("div", { className: ue.tab, children: [
      /* @__PURE__ */ c.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: l ? "radio" : "checkbox",
            value: u,
            name: i,
            onClick: l ? E : void 0
          }
        )
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: ue.tab__content, children: /* @__PURE__ */ c.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [t, l, i, E]
  );
  return /* @__PURE__ */ c.jsx("div", { className: ue.accordion, children: R });
}
const Fr = "_announcement_14tja_1", Ir = "_only_one_14tja_11", Dr = "_close_14tja_25", Lr = "_button_prev_14tja_77", L = {
  announcement: Fr,
  only_one: Ir,
  close: Dr,
  button_prev: Lr
};
function en({
  ariaAnnouncementTitle: t,
  announcements: i,
  classes: l = ""
}) {
  const [h, y] = H(0), E = () => y(h - 1 >= 0 ? h - 1 : i.length - 1), R = () => y(i.length > h + 1 ? h + 1 : 0), o = i.length === 1;
  return i.length < 1 ? null : /* @__PURE__ */ c.jsxs(
    "div",
    {
      role: "status",
      title: t,
      className: `${L.announcement} ${o ? L.only_one : ""} ${l}`,
      children: [
        !o && /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: E,
            className: `${L.button} ${L.button_prev}`,
            children: /* @__PURE__ */ c.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ c.jsx("p", { children: i[h] }),
        !o && /* @__PURE__ */ c.jsx("button", { onClick: R, className: L.button, children: /* @__PURE__ */ c.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ c.jsxs("label", { className: L.close, children: [
          /* @__PURE__ */ c.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ c.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Nr = "_mini_menu_1xr6p_1", Yr = "_sticky_1xr6p_1", Vr = "_underline_1xr6p_27", G = {
  mini_menu: Nr,
  sticky: Yr,
  underline: Vr
};
function rn({ model: t, onScrollMonitor: i, onResizeMonitor: l }) {
  const [h, y] = H(0), E = De([]), R = De(null), [o, u] = H(0), x = N(() => {
    i && i(), R.current && (window.scrollY > o ? R.current.classList.add(G.sticky) : R.current.classList.remove(G.sticky));
  }, [o, i]), p = N(
    (_) => {
      const O = _[0].target, W = t.findIndex((Q) => Q.hashId === O.id), T = W < 0 ? 0 : W, m = E.current[T];
      m !== null && _[0].isIntersecting && (m.scrollIntoViewIfNeeded(!0), y(T));
    },
    [t]
  ), w = N(() => {
    const _ = new IntersectionObserver(p, {
      threshold: [0.3]
      //never accurate but it's the best
    }), O = new IntersectionObserver(p, {
      threshold: [1]
    });
    return t.forEach((W) => {
      const T = document.getElementById(W.hashId);
      T !== null && (T.clientHeight < window.innerHeight ? O.observe(T) : _.observe(T));
    }), [_, O];
  }, [p, t]), S = N(
    (_) => () => {
      y(_);
    },
    []
  ), P = N(() => {
    var _;
    l && l(), u(((_ = R.current) == null ? void 0 : _.getBoundingClientRect().top) || 0);
  }, [l]);
  return X(() => {
    const _ = w();
    return P(), x(), window.addEventListener("resize", P), window.addEventListener("scroll", x), () => {
      window.removeEventListener("scroll", x), window.removeEventListener("resize", P), _.forEach((O) => O.disconnect());
    };
  }, [x, w, P]), /* @__PURE__ */ c.jsx("nav", { className: G.mini_menu, ref: R, children: t.map((_, O) => /* @__PURE__ */ c.jsxs(Z.Fragment, { children: [
    O !== 0 && /* @__PURE__ */ c.jsx("div", { role: "separator" }),
    /* @__PURE__ */ c.jsx(
      "a",
      {
        href: `#${_.hashId}`,
        ref: (W) => {
          E.current[O] = W;
        },
        className: O === h ? `${G.underline} italic` : void 0,
        onClick: S(O),
        children: _.title
      }
    )
  ] }, _.hashId)) });
}
export {
  Qr as Accordion,
  en as Announcement,
  Xr as Copyright,
  Zr as ErrorPage,
  Gr as Footer,
  Kr as Logo,
  rn as MiniMenu,
  Ur as consoleReportHandler,
  Rr as debounce,
  Hr as gaReportHandler,
  Jr as htmlConvertor,
  zr as reportWebVitals,
  Br as useNavigationListener,
  qr as useWindowListener
};
