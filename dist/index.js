import Q, { useEffect as Z, useState as z, useCallback as U, useMemo as xr, useRef as fe, memo as Er } from "react";
const Zr = ({
  appName: a,
  containerName: s,
  props: u
}) => {
  Z(() => {
    window.dispatchEvent(
      new CustomEvent(`[${a}] navigated`, { detail: u.pathname })
    );
  }, [a, u.pathname]), Z(() => {
    function h(x) {
      const _ = x.detail;
      u.pathname !== _ && u.navigate(_);
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
function Qr(a) {
  console.log(a);
}
function jr(a) {
  const s = a.value;
  return a.name === "CLS" ? Math.round(s * 1e3) : Math.round(s);
}
function en(a) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: a.name,
    eventValue: jr(a),
    eventLabel: a.id,
    nonInteraction: !0
  });
}
const rn = (a) => {
  a && a instanceof Function && import("./web-vitals-C2duWsRR.js").then(({ onCLS: s, onFID: u, onFCP: h, onLCP: x, onTTFB: _ }) => {
    s(a), u(a), h(a), x(a), _(a);
  });
};
function Rr(a, s) {
  let u;
  return () => {
    /* istanbul ignore if -- @preserve */
    u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, a();
    }, s);
  };
}
var de = { exports: {} }, B = {};
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
function wr() {
  if (Le)
    return B;
  Le = 1;
  var a = Q, s = Symbol.for("react.element"), u = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(o, c, R) {
    var m, k = {}, b = null, g = null;
    R !== void 0 && (b = "" + R), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (m in c)
      h.call(c, m) && !_.hasOwnProperty(m) && (k[m] = c[m]);
    if (o && o.defaultProps)
      for (m in c = o.defaultProps, c)
        k[m] === void 0 && (k[m] = c[m]);
    return { $$typeof: s, type: o, key: b, ref: g, props: k, _owner: x.current };
  }
  return B.Fragment = u, B.jsx = w, B.jsxs = w, B;
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
var Ie;
function kr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Q, s = Symbol.for("react.element"), u = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), P = Symbol.iterator, d = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[d];
      return typeof r == "function" ? r : null;
    }
    var W = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          n[i - 1] = arguments[i];
        Ye("error", e, n);
      }
    }
    function Ye(e, r, n) {
      {
        var i = W.ReactDebugCurrentFrame, v = i.getStackAddendum();
        v !== "" && (r += "%s", n = n.concat([v]));
        var p = n.map(function(f) {
          return String(f);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Ve = !1, Me = !1, Be = !1, He = !1, Ue = !1, he;
    he = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === _ || Ue || e === x || e === R || e === m || He || e === g || Ve || Me || Be || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === k || e.$$typeof === w || e.$$typeof === o || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === he || e.getModuleId !== void 0));
    }
    function Je(e, r, n) {
      var i = e.displayName;
      if (i)
        return i;
      var v = r.displayName || r.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case u:
          return "Portal";
        case _:
          return "Profiler";
        case x:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return pe(r) + ".Consumer";
          case w:
            var n = e;
            return pe(n._context) + ".Provider";
          case c:
            return Je(e, e.render, "ForwardRef");
          case k:
            var i = e.displayName || null;
            return i !== null ? i : $(e.type) || "Memo";
          case b: {
            var v = e, p = v._payload, f = v._init;
            try {
              return $(f(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, _e, me, be, ge, ye, xe, Ee;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function qe() {
      {
        if (Y === 0) {
          _e = console.log, me = console.info, be = console.warn, ge = console.error, ye = console.group, xe = console.groupCollapsed, Ee = console.groupEnd;
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
              value: _e
            }),
            info: F({}, e, {
              value: me
            }),
            warn: F({}, e, {
              value: be
            }),
            error: F({}, e, {
              value: ge
            }),
            group: F({}, e, {
              value: ye
            }),
            groupCollapsed: F({}, e, {
              value: xe
            }),
            groupEnd: F({}, e, {
              value: Ee
            })
          });
        }
        Y < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = W.ReactCurrentDispatcher, re;
    function J(e, r, n) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (v) {
            var i = v.stack.trim().match(/\n( *(at )?)/);
            re = i && i[1] || "";
          }
        return `
` + re + e;
      }
    }
    var ne = !1, q;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ge();
    }
    function Re(e, r) {
      if (!e || ne)
        return "";
      {
        var n = q.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      ne = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = ee.current, ee.current = null, qe();
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
              i = S;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (S) {
              i = S;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            i = S;
          }
          e();
        }
      } catch (S) {
        if (S && i && typeof S.stack == "string") {
          for (var l = S.stack.split(`
`), C = i.stack.split(`
`), y = l.length - 1, j = C.length - 1; y >= 1 && j >= 0 && l[y] !== C[j]; )
            j--;
          for (; y >= 1 && j >= 0; y--, j--)
            if (l[y] !== C[j]) {
              if (y !== 1 || j !== 1)
                do
                  if (y--, j--, j < 0 || l[y] !== C[j]) {
                    var A = `
` + l[y].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, A), A;
                  }
                while (y >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ne = !1, ee.current = p, Ke(), Error.prepareStackTrace = v;
      }
      var L = e ? e.displayName || e.name : "", N = L ? J(L) : "";
      return typeof e == "function" && q.set(e, N), N;
    }
    function Xe(e, r, n) {
      return Re(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ze(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case R:
          return J("Suspense");
        case m:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Xe(e.render);
          case k:
            return K(e.type, r, n);
          case b: {
            var i = e, v = i._payload, p = i._init;
            try {
              return K(p(v), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, we = {}, ke = W.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, n = K(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(n);
      } else
        ke.setExtraStackFrame(null);
    }
    function Qe(e, r, n, i, v) {
      {
        var p = Function.call.bind(V);
        for (var f in e)
          if (p(e, f)) {
            var l = void 0;
            try {
              if (typeof e[f] != "function") {
                var C = Error((i || "React class") + ": " + n + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              l = e[f](r, f, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              l = y;
            }
            l && !(l instanceof Error) && (G(v), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, f, typeof l), G(null)), l instanceof Error && !(l.message in we) && (we[l.message] = !0, G(v), E("Failed %s type: %s", n, l.message), G(null));
          }
      }
    }
    var er = Array.isArray;
    function te(e) {
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
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Ce(e) {
      if (nr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), Te(e);
    }
    var M = W.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Se, ae;
    ae = {};
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
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var n = $(M.current.type);
        ae[n] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(M.current.type), e.ref), ae[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          Oe || (Oe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var n = function() {
          Se || (Se = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, n, i, v, p, f) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: f,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ur(e, r, n, i, v) {
      {
        var p, f = {}, l = null, C = null;
        n !== void 0 && (Ce(n), l = "" + n), ir(r) && (Ce(r.key), l = "" + r.key), ar(r) && (C = r.ref, or(r, v));
        for (p in r)
          V.call(r, p) && !tr.hasOwnProperty(p) && (f[p] = r[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            f[p] === void 0 && (f[p] = y[p]);
        }
        if (l || C) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && sr(f, j), C && cr(f, j);
        }
        return lr(e, l, C, v, i, M.current, f);
      }
    }
    var ie = W.ReactCurrentOwner, Pe = W.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, n = K(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Ae() {
      {
        if (ie.current) {
          var e = $(ie.current.type);
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
    function $e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (We[n])
          return;
        We[n] = !0;
        var i = "";
        e && e._owner && e._owner !== ie.current && (i = " It was passed a child from " + $(e._owner.type) + "."), D(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), D(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            se(i) && $e(i, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = T(e);
          if (typeof v == "function" && v !== e.entries)
            for (var p = v.call(e), f; !(f = p.next()).done; )
              se(f.value) && $e(f.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === k))
          n = r.propTypes;
        else
          return;
        if (n) {
          var i = $(r);
          Qe(n, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var v = $(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var i = r[n];
          if (i !== "children" && i !== "key") {
            D(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Ne = {};
    function De(e, r, n, i, v, p) {
      {
        var f = ze(e);
        if (!f) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr();
          C ? l += C : l += Ae();
          var y;
          e === null ? y = "null" : te(e) ? y = "array" : e !== void 0 && e.$$typeof === s ? (y = "<" + ($(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, l);
        }
        var j = ur(e, r, n, v, p);
        if (j == null)
          return j;
        if (f) {
          var A = r.children;
          if (A !== void 0)
            if (i)
              if (te(A)) {
                for (var L = 0; L < A.length; L++)
                  Fe(A[L], e);
                Object.freeze && Object.freeze(A);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(A, e);
        }
        if (V.call(r, "key")) {
          var N = $(e), S = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ce = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[N + ce]) {
            var gr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, N, gr, N), Ne[N + ce] = !0;
          }
        }
        return e === h ? hr(j) : vr(j), j;
      }
    }
    function pr(e, r, n) {
      return De(e, r, n, !0);
    }
    function _r(e, r, n) {
      return De(e, r, n, !1);
    }
    var mr = _r, br = pr;
    H.Fragment = h, H.jsx = mr, H.jsxs = br;
  }()), H;
}
process.env.NODE_ENV === "production" ? de.exports = wr() : de.exports = kr();
var t = de.exports;
const le = `
`, ve = "[\\.|,]", Tr = new RegExp(
  `.*\\]${ve}?$`
), Cr = new RegExp(
  `\\]${ve}?$`,
  "g"
), Or = new RegExp(
  `${ve}$`
);
function nn(a, s) {
  function u(o, c) {
    if (o.match(Tr) && o.indexOf("|") > -1) {
      const R = o.replace(
        Cr,
        "]"
      ), k = R.substring(
        1,
        R.length - 1
      ).split("|"), b = k[0], g = k[1].replaceAll(
        le,
        " "
      );
      return /* @__PURE__ */ t.jsxs(Q.Fragment, { children: [
        s(b, g),
        o.match(Or) ? `${o.slice(-1)}` : ""
      ] }, c);
    }
    return o;
  }
  const w = ((o) => {
    const c = o.split("|");
    return c.length > 1 ? c.map((R) => {
      const m = R.split("]");
      return m.length === 2 ? `${m[0].replaceAll(
        " ",
        le
      )}]${m[1]}` : R;
    }).join("|") : o;
  })(a).split(" ").map((o, c) => o.length < 2 ? o : o.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: o.substring(1, o.length) }, c) : o.startsWith("[") ? u(o, c) : o === "!!" ? /* @__PURE__ */ t.jsx("br", {}, c) : o.replaceAll(le, " ")).reduce(
    (o, c) => [...o, " ", c],
    []
  );
  return w.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: w });
}
const tn = () => {
  const [a, s] = z({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return Z(() => {
    const u = Rr(function() {
      s({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, []), a;
}, an = ({ color: a }) => /* @__PURE__ */ t.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ t.jsx("span", { children: a })
] }), Sr = "_footer_ttkno_1", Pr = {
  footer: Sr
}, on = ({
  companyName: a = "Walcron",
  establishedYear: s = 2014,
  lastUpdatedYear: u
}) => /* @__PURE__ */ t.jsxs("div", { className: Pr.footer, children: [
  /* @__PURE__ */ t.jsx("hr", {}),
  /* @__PURE__ */ t.jsxs("div", { children: [
    a,
    " ",
    s,
    " - ",
    u,
    " ©"
  ] })
] }), Ar = "_copyright_1c7c9_1", Wr = {
  copyright: Ar
}, sn = ({
  companyName: a = "Walcron",
  link: s = "/",
  lastUpdatedYear: u
}) => /* @__PURE__ */ t.jsxs("div", { className: Wr.copyright, children: [
  "Copyright © ",
  /* @__PURE__ */ t.jsx("a", { color: "inherit", href: s, children: a }),
  " ",
  u,
  "."
] });
function cn({
  statusText: a,
  message: s
}) {
  return /* @__PURE__ */ t.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ t.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ t.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ t.jsx("p", { children: /* @__PURE__ */ t.jsx("i", { children: a || s || "Error message is unknown." }) })
  ] });
}
const $r = "_accordion_okvze_1", Fr = "_tab_okvze_27", Nr = "_tab__content_okvze_38", ue = {
  accordion: $r,
  tab: Fr,
  tab__content: Nr
};
function ln({
  model: a,
  groupName: s,
  isSingle: u = !0
}) {
  const [h, x] = z(""), _ = U(
    (o) => {
      const c = o.currentTarget;
      h === c.value ? (c.checked = !1, x("")) : x(c.value);
    },
    [h]
  ), w = xr(
    () => a.map((o, c) => /* @__PURE__ */ t.jsxs("div", { className: ue.tab, children: [
      /* @__PURE__ */ t.jsxs("label", { children: [
        o.label,
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: u ? "radio" : "checkbox",
            value: c,
            name: s,
            onClick: u ? _ : void 0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: ue.tab__content, children: /* @__PURE__ */ t.jsx("p", { children: o.content }) })
    ] }, o.label)),
    [a, u, s, _]
  );
  return /* @__PURE__ */ t.jsx("div", { className: ue.accordion, children: w });
}
const Dr = "_announcement_149a8_1", Lr = "_only_one_149a8_11", Ir = "_close_149a8_25", Yr = "_button_prev_149a8_77", I = {
  announcement: Dr,
  only_one: Lr,
  close: Ir,
  button_prev: Yr
};
function un({
  ariaAnnouncementTitle: a,
  announcements: s,
  classes: u = ""
}) {
  const [h, x] = z(0), _ = () => x(h - 1 >= 0 ? h - 1 : s.length - 1), w = () => x(s.length > h + 1 ? h + 1 : 0), o = s.length === 1;
  return s.length < 1 ? null : /* @__PURE__ */ t.jsxs(
    "div",
    {
      role: "status",
      title: a,
      className: `${I.announcement} ${o ? I.only_one : ""} ${u}`,
      children: [
        !o && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: _,
            className: `${I.button} ${I.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: s[h] }),
        !o && /* @__PURE__ */ t.jsx("button", { onClick: w, className: I.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ t.jsxs("label", { className: I.close, children: [
          /* @__PURE__ */ t.jsx("span", { "aria-label": "Close Announcement" }),
          /* @__PURE__ */ t.jsx("input", { type: "checkbox" })
        ] })
      ]
    }
  );
}
const Vr = "_mini_menu_cjvt3_1", Mr = "_sticky_cjvt3_1", Br = "_underline_cjvt3_26", X = {
  mini_menu: Vr,
  sticky: Mr,
  underline: Br
};
function fn({ model: a, onScrollMonitor: s }) {
  const [u, h] = z(0), x = fe([]), _ = fe(null), [w, o] = z(0), c = U(() => {
    s && s(), _.current && (window.scrollY > w ? _.current.classList.add(X.sticky) : _.current.classList.remove(X.sticky));
  }, [w, s]), R = U(
    (b) => {
      const g = b[0].target, P = a.findIndex((W) => W.hashId === g.id), d = P < 0 ? 0 : P, T = x.current[d];
      T !== null && b[0].isIntersecting && (T.scrollIntoViewIfNeeded(!0), h(d));
    },
    [a]
  ), m = U(() => {
    const b = new IntersectionObserver(R, {
      threshold: [0.3]
      //never accurate but it's the best
    }), g = new IntersectionObserver(R, {
      threshold: [1]
    });
    return a.forEach((P) => {
      const d = document.getElementById(P.hashId);
      d !== null && (d.clientHeight < window.innerHeight ? g.observe(d) : b.observe(d));
    }), [b, g];
  }, [R, a]), k = U(
    (b) => () => {
      h(b);
    },
    []
  );
  return Z(() => {
    var g;
    const b = m();
    return o(((g = _.current) == null ? void 0 : g.getBoundingClientRect().top) || 0), c(), window.addEventListener("scroll", c), () => {
      window.removeEventListener("scroll", c), b.forEach((P) => P.disconnect());
    };
  }, [c, m]), /* @__PURE__ */ t.jsx("nav", { className: X.mini_menu, ref: _, children: a.map((b, g) => /* @__PURE__ */ t.jsxs(Q.Fragment, { children: [
    g !== 0 && /* @__PURE__ */ t.jsx("div", { role: "separator" }),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${b.hashId}`,
        ref: (P) => {
          x.current[g] = P;
        },
        className: g === u ? `${X.underline} italic` : void 0,
        onClick: k(g),
        children: b.title
      }
    )
  ] }, b.hashId)) });
}
const Hr = "_desktop__nav_1cf8p_1", Ur = "_mobile__nav_1cf8p_1", zr = "_menu_1cf8p_49", Jr = "_subnav_1cf8p_56", qr = "_grow_1cf8p_1", Kr = "_hamb_1cf8p_123", O = {
  desktop__nav: Hr,
  mobile__nav: Ur,
  "home-logo": "_home-logo_1cf8p_44",
  menu: zr,
  "subnav-content": "_subnav-content_1cf8p_56",
  subnav: Jr,
  grow: qr,
  "mobile-menu": "_mobile-menu_1cf8p_115",
  hamb: Kr,
  "hamb-line": "_hamb-line_1cf8p_128",
  "hamb-hidden": "_hamb-hidden_1cf8p_154",
  "top-menu": "_top-menu_1cf8p_158",
  "side-menu": "_side-menu_1cf8p_159"
};
function Gr({
  menuLink: a,
  homeLink: s,
  homeLogoLink: u,
  model: h,
  mobileHomeText: x,
  shortcutComponent: _,
  mobileStyle: w = {},
  desktopStyle: o = {}
}) {
  const c = fe(null), R = (d, T) => T === void 0 || T === "" ? d : T.replace(/^#/, `${d}#`), m = () => {
    c.current && (c.current.checked = !1, document.body.style.overflow = "auto");
  }, k = (d) => {
    document.body.style.overflow = d.target.checked ? "hidden" : "auto";
  }, b = (d, T, W) => d.map((E) => /* @__PURE__ */ t.jsx("li", { role: "presentation", children: a(
    E.label,
    R(T, E.url),
    "menuitem",
    W
  ) }, E.label)), g = h.map((d) => {
    const T = d.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: T ? O.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          a(d.label, d.url, "menuitem"),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: O["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: b(d.items, d.url, m) }) })
        ] })
      },
      d.label
    );
  }), P = h.map((d) => {
    const T = d.items;
    return /* @__PURE__ */ t.jsx(
      "li",
      {
        role: "presentation",
        className: T ? O.subnav : "",
        children: /* @__PURE__ */ t.jsxs("div", { children: [
          T ? /* @__PURE__ */ t.jsxs("label", { role: "menuitem", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                className: O["top-menu"],
                type: "radio",
                name: "top-menu"
              }
            ),
            d.label
          ] }) : a(
            d.label,
            d.url,
            "menuitem",
            m
          ),
          d.items && /* @__PURE__ */ t.jsx("div", { role: "presentation", className: O["subnav-content"], children: /* @__PURE__ */ t.jsx("ul", { role: "menu", children: b(d.items, d.url, m) }) })
        ] })
      },
      d.label
    );
  });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("div", { className: O.mobile__nav, style: w, children: [
      /* @__PURE__ */ t.jsxs("div", { className: O["mobile-menu"], children: [
        /* @__PURE__ */ t.jsxs("label", { className: O.hamb, "aria-label": "Main Menu", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              className: O["side-menu"],
              type: "checkbox",
              ref: c,
              onChange: k
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: O["hamb-line"] }),
          /* @__PURE__ */ t.jsx("span", { className: O["hamb-hidden"], children: "Hamburger Menu" })
        ] }),
        s(x, "/", m, -1),
        _ && _
      ] }),
      /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: O.menu, children: /* @__PURE__ */ t.jsx("ul", { role: "menu", "aria-orientation": "horizontal", children: P }) })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: O.desktop__nav, style: o, children: /* @__PURE__ */ t.jsx("nav", { role: "menubar", className: O.menu, children: /* @__PURE__ */ t.jsxs("ul", { role: "menu", "aria-orientation": "horizontal", children: [
      /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: u(O["home-logo"]) }),
      g,
      /* @__PURE__ */ t.jsx("li", { role: "menuitem", children: _ && _ })
    ] }) }) })
  ] });
}
const dn = Er(Gr, () => !0);
export {
  ln as Accordion,
  un as Announcement,
  sn as Copyright,
  cn as ErrorPage,
  on as Footer,
  an as Logo,
  dn as Menu,
  fn as MiniMenu,
  Gr as MutableMenu,
  Qr as consoleReportHandler,
  Rr as debounce,
  en as gaReportHandler,
  nn as htmlConvertor,
  rn as reportWebVitals,
  Zr as useNavigationListener,
  tn as useWindowListener
};
