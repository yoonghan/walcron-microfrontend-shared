import te, { useEffect as ee, useState as ne, useCallback as vr, useMemo as pr } from "react";
const $r = ({
  appName: a,
  containerName: s,
  props: f
}) => {
  ee(() => {
    window.dispatchEvent(
      new CustomEvent(`[${a}] navigated`, { detail: f.pathname })
    );
  }, [a, f.pathname]), ee(() => {
    function p(_) {
      const m = _.detail;
      f.pathname !== m && f.navigate(m);
    }
    return window.addEventListener(
      `[${s}] navigated`,
      p
    ), () => {
      window.removeEventListener(
        `[${s}] navigated`,
        p
      );
    };
  }, [s, f]);
};
function Fr(a) {
  console.log(a);
}
function hr(a) {
  const s = a.value;
  return a.name === "CLS" ? Math.round(s * 1e3) : Math.round(s);
}
function Dr(a) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: a.name,
    eventValue: hr(a),
    eventLabel: a.id,
    nonInteraction: !0
  });
}
const Lr = (a) => {
  /* istanbul ignore next -- @preserve */
  a && a instanceof Function && import("./web-vitals-3ca605ab.js").then(({ onCLS: s, onFID: f, onFCP: p, onLCP: _, onTTFB: m }) => {
    /* istanbul ignore next -- @preserve */
    s(a);
    /* istanbul ignore next -- @preserve */
    f(a);
    /* istanbul ignore next -- @preserve */
    p(a);
    /* istanbul ignore next -- @preserve */
    _(a);
    /* istanbul ignore next -- @preserve */
    m(a);
  });
};
function gr(a, s) {
  let f;
  return () => {
    /* istanbul ignore if -- @preserve */
    f !== null && clearTimeout(f), f = setTimeout(() => {
      f = null, a();
    }, s);
  };
}
var re = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function br() {
  if (ke)
    return L;
  ke = 1;
  var a = te, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, _ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(o, u, x) {
    var b, j = {}, T = null, k = null;
    x !== void 0 && (T = "" + x), u.key !== void 0 && (T = "" + u.key), u.ref !== void 0 && (k = u.ref);
    for (b in u)
      p.call(u, b) && !m.hasOwnProperty(b) && (j[b] = u[b]);
    if (o && o.defaultProps)
      for (b in u = o.defaultProps, u)
        j[b] === void 0 && (j[b] = u[b]);
    return { $$typeof: s, type: o, key: T, ref: k, props: j, _owner: _.current };
  }
  return L.Fragment = f, L.jsx = R, L.jsxs = R, L;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function _r() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = te, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), oe = Symbol.iterator, Ae = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = oe && e[oe] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var P = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, d = n.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var v = t.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Fe = !1, De = !1, Le = !1, Ne = !1, Ie = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === m || Ie || e === _ || e === x || e === b || Ne || e === k || Fe || De || Le || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === j || e.$$typeof === R || e.$$typeof === o || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function se(e) {
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
        case p:
          return "Fragment";
        case f:
          return "Portal";
        case m:
          return "Profiler";
        case _:
          return "StrictMode";
        case x:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return se(r) + ".Consumer";
          case R:
            var t = e;
            return se(t._context) + ".Provider";
          case u:
            return Ve(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case T: {
            var d = e, v = d._payload, c = d._init;
            try {
              return C(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ce, ue, le, fe, de, ve, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Me() {
      {
        if (F === 0) {
          ce = console.log, ue = console.info, le = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
    function Ue() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ce
            }),
            info: S({}, e, {
              value: ue
            }),
            warn: S({}, e, {
              value: le
            }),
            error: S({}, e, {
              value: fe
            }),
            group: S({}, e, {
              value: de
            }),
            groupCollapsed: S({}, e, {
              value: ve
            }),
            groupEnd: S({}, e, {
              value: pe
            })
          });
        }
        F < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = P.ReactCurrentDispatcher, H;
    function I(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (d) {
            var n = d.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var z = !1, Y;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Be();
    }
    function ge(e, r) {
      if (!e || z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = B.current, B.current = null, Me();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (O) {
              n = O;
            }
            e.call(c.prototype);
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
`), y = n.stack.split(`
`), h = i.length - 1, g = y.length - 1; h >= 1 && g >= 0 && i[h] !== y[g]; )
            g--;
          for (; h >= 1 && g >= 0; h--, g--)
            if (i[h] !== y[g]) {
              if (h !== 1 || g !== 1)
                do
                  if (h--, g--, g < 0 || i[h] !== y[g]) {
                    var w = `
` + i[h].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, w), w;
                  }
                while (h >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        z = !1, B.current = v, Ue(), Error.prepareStackTrace = d;
      }
      var W = e ? e.displayName || e.name : "", Se = W ? I(W) : "";
      return typeof e == "function" && Y.set(e, Se), Se;
    }
    function He(e, r, t) {
      return ge(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, ze(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case x:
          return I("Suspense");
        case b:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return He(e.render);
          case j:
            return V(e.type, r, t);
          case T: {
            var n = e, d = n._payload, v = n._init;
            try {
              return V(v(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, be = {}, _e = P.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, d) {
      {
        var v = Function.call.bind(M);
        for (var c in e)
          if (v(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              i = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              i = h;
            }
            i && !(i instanceof Error) && (U(d), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof i), U(null)), i instanceof Error && !(i.message in be) && (be[i.message] = !0, U(d), E("Failed %s type: %s", t, i.message), U(null));
          }
      }
    }
    var Je = Array.isArray;
    function q(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ke(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), me(e);
    }
    var D = P.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Re, J;
    J = {};
    function Ze(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = C(D.current.type);
        J[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(D.current.type), e.ref), J[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, d, v, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
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
        value: d
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ar(e, r, t, n, d) {
      {
        var v, c = {}, i = null, y = null;
        t !== void 0 && (Ee(t), i = "" + t), Qe(r) && (Ee(r.key), i = "" + r.key), Ze(r) && (y = r.ref, er(r, d));
        for (v in r)
          M.call(r, v) && !Xe.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (v in h)
            c[v] === void 0 && (c[v] = h[v]);
        }
        if (i || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && rr(c, g), y && tr(c, g);
        }
        return nr(e, i, y, d, n, D.current, c);
      }
    }
    var G = P.ReactCurrentOwner, xe = P.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function je() {
      {
        if (G.current) {
          var e = C(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var we = {};
    function ir(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + C(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Te(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = We(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), c; !(c = v.next()).done; )
              X(c.value) && Te(c.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var d = C(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Oe(e, r, t, n, d, v) {
      {
        var c = Ye(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = or(d);
          y ? i += y : i += je();
          var h;
          e === null ? h = "null" : q(e) ? h = "array" : e !== void 0 && e.$$typeof === s ? (h = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, i);
        }
        var g = ar(e, r, t, d, v);
        if (g == null)
          return g;
        if (c) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (q(w)) {
                for (var W = 0; W < w.length; W++)
                  Ce(w[W], e);
                Object.freeze && Object.freeze(w);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(w, e);
        }
        return e === p ? cr(g) : sr(g), g;
      }
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var fr = lr, dr = ur;
    N.Fragment = p, N.jsx = fr, N.jsxs = dr;
  }()), N;
}
process.env.NODE_ENV === "production" ? re.exports = br() : re.exports = _r();
var l = re.exports;
const Z = `
`, ae = "[\\.|,]", mr = new RegExp(
  `.*\\]${ae}?$`
), Er = new RegExp(
  `\\]${ae}?$`,
  "g"
), yr = new RegExp(
  `${ae}$`
);
function Nr(a, s) {
  function f(o, u) {
    if (o.match(mr) && o.indexOf("|") > -1) {
      const x = o.replace(
        Er,
        "]"
      ), j = x.substring(
        1,
        x.length - 1
      ).split("|"), T = j[0], k = j[1].replaceAll(
        Z,
        " "
      );
      return /* @__PURE__ */ l.jsxs(te.Fragment, { children: [
        s(T, k),
        o.match(yr) ? `${o.slice(-1)}` : ""
      ] }, u);
    }
    return o;
  }
  const R = ((o) => {
    const u = o.split("|");
    return u.length > 1 ? u.map((x) => {
      const b = x.split("]");
      return b.length === 2 ? `${b[0].replaceAll(
        " ",
        Z
      )}]${b[1]}` : x;
    }).join("|") : o;
  })(a).split(" ").map((o, u) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ l.jsx("strong", { children: o.substring(1, o.length) }, u) : o.startsWith("[") ? f(o, u) : o === "!!" ? /* @__PURE__ */ l.jsx("br", {}, u) : o.replaceAll(Z, " ")).reduce(
    (o, u) => [...o, " ", u],
    []
  );
  return R.shift(), /* @__PURE__ */ l.jsx(l.Fragment, { children: R });
}
const Ir = () => {
  const [a, s] = ne({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return ee(() => {
    const f = gr(function() {
      s({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, []), a;
}, Yr = ({ color: a }) => /* @__PURE__ */ l.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ l.jsx("span", { children: a })
] }), Rr = "_footer_ttkno_1", xr = {
  footer: Rr
}, Vr = ({
  companyName: a = "Walcron",
  establishedYear: s = 2014,
  lastUpdatedYear: f
}) => /* @__PURE__ */ l.jsxs("div", { className: xr.footer, children: [
  /* @__PURE__ */ l.jsx("hr", {}),
  /* @__PURE__ */ l.jsxs("div", { children: [
    a,
    " ",
    s,
    " - ",
    f,
    " ©"
  ] })
] }), jr = "_copyright_1c7c9_1", wr = {
  copyright: jr
}, Mr = ({
  companyName: a = "Walcron",
  link: s = "/",
  lastUpdatedYear: f
}) => /* @__PURE__ */ l.jsxs("div", { className: wr.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ l.jsx("a", { color: "inherit", href: s, children: a }),
  " ",
  f,
  "."
] });
function Ur({
  statusText: a,
  message: s
}) {
  return /* @__PURE__ */ l.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ l.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ l.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ l.jsx("p", { children: /* @__PURE__ */ l.jsx("i", { children: a || s || "Error message is unknown." }) })
  ] });
}
const Tr = "_accordion_1gi8s_1", Cr = "_tab_1gi8s_27", Or = "_tab__content_1gi8s_38", Q = {
  accordion: Tr,
  tab: Cr,
  tab__content: Or
};
function Br({
  model: a,
  groupName: s,
  isSingle: f = !0
}) {
  const [p, _] = ne(""), m = vr(
    (o) => {
      const u = o.currentTarget;
      p === u.value ? (u.checked = !1, _("")) : _(u.value);
    },
    [p]
  ), R = pr(
    () => a.map((o, u) => /* @__PURE__ */ l.jsxs("div", { className: Q.tab, children: [
      /* @__PURE__ */ l.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: f ? "radio" : "checkbox",
            value: u,
            name: s,
            onClick: f ? m : void 0
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: Q.tab__content, children: /* @__PURE__ */ l.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [a, f, s, m]
  );
  return /* @__PURE__ */ l.jsx("div", { className: Q.accordion, children: R });
}
const Sr = "_announcement_14tja_1", kr = "_only_one_14tja_11", Pr = "_close_14tja_25", Ar = "_button_prev_14tja_77", $ = {
  announcement: Sr,
  only_one: kr,
  close: Pr,
  button_prev: Ar
};
function Hr({
  ariaAnnouncementTitle: a,
  announcements: s,
  classes: f = ""
}) {
  const [p, _] = ne(0), m = () => _(p - 1 >= 0 ? p - 1 : s.length - 1), R = () => _(s.length > p + 1 ? p + 1 : 0), o = s.length === 1;
  return s.length < 1 ? null : /* @__PURE__ */ l.jsxs(
    "div",
    {
      role: "status",
      title: a,
      className: `${$.announcement} ${o ? $.only_one : ""} ${f}`,
      children: [
        !o && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: m,
            className: `${$.button} ${$.button_prev}`,
            children: /* @__PURE__ */ l.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ l.jsx("p", { children: s[p] }),
        !o && /* @__PURE__ */ l.jsx("button", { onClick: R, className: $.button, children: /* @__PURE__ */ l.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ l.jsxs("label", { className: $.close, children: [
          /* @__PURE__ */ l.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ l.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
export {
  Br as Accordion,
  Hr as Announcement,
  Mr as Copyright,
  Ur as ErrorPage,
  Vr as Footer,
  Yr as Logo,
  Fr as consoleReportHandler,
  gr as debounce,
  Dr as gaReportHandler,
  Nr as htmlConvertor,
  Lr as reportWebVitals,
  $r as useNavigationListener,
  Ir as useWindowListener
};
