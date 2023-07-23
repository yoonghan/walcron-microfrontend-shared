import * as j from "react";
import Oe, { useRef as En, useDebugValue as Zt, createElement as wn, useContext as Er, useEffect as Qt } from "react";
var bt = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function _n() {
  if (er)
    return ke;
  er = 1;
  var e = Oe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, u, h) {
    var d, m = {}, g = null, _ = null;
    h !== void 0 && (g = "" + h), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (_ = u.ref);
    for (d in u)
      o.call(u, d) && !s.hasOwnProperty(d) && (m[d] = u[d]);
    if (f && f.defaultProps)
      for (d in u = f.defaultProps, u)
        m[d] === void 0 && (m[d] = u[d]);
    return { $$typeof: t, type: f, key: g, ref: _, props: m, _owner: a.current };
  }
  return ke.Fragment = r, ke.jsx = c, ke.jsxs = c, ke;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Sn() {
  return tr || (tr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), x = Symbol.iterator, I = "@@iterator";
    function G(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = x && n[x] || n[I];
      return typeof i == "function" ? i : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(n) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          l[v - 1] = arguments[v];
        L("error", n, l);
      }
    }
    function L(n, i, l) {
      {
        var v = O.ReactDebugCurrentFrame, S = v.getStackAddendum();
        S !== "" && (i += "%s", l = l.concat([S]));
        var C = l.map(function(w) {
          return String(w);
        });
        C.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, C);
      }
    }
    var D = !1, N = !1, P = !1, p = !1, V = !1, Z;
    Z = Symbol.for("react.module.reference");
    function te(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || V || n === a || n === h || n === d || p || n === _ || D || N || P || typeof n == "object" && n !== null && (n.$$typeof === g || n.$$typeof === m || n.$$typeof === c || n.$$typeof === f || n.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Z || n.getModuleId !== void 0));
    }
    function it(n, i, l) {
      var v = n.displayName;
      if (v)
        return v;
      var S = i.displayName || i.name || "";
      return S !== "" ? l + "(" + S + ")" : l;
    }
    function We(n) {
      return n.displayName || "Context";
    }
    function q(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var i = n;
            return We(i) + ".Consumer";
          case c:
            var l = n;
            return We(l._context) + ".Provider";
          case u:
            return it(n, n.render, "ForwardRef");
          case m:
            var v = n.displayName || null;
            return v !== null ? v : q(n.type) || "Memo";
          case g: {
            var S = n, C = S._payload, w = S._init;
            try {
              return q(w(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, se = 0, Me, Ue, Ye, Te, J, fe, ie;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function je() {
      {
        if (se === 0) {
          Me = console.log, Ue = console.info, Ye = console.warn, Te = console.error, J = console.group, fe = console.groupCollapsed, ie = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        se++;
      }
    }
    function De() {
      {
        if (se--, se === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, n, {
              value: Me
            }),
            info: re({}, n, {
              value: Ue
            }),
            warn: re({}, n, {
              value: Ye
            }),
            error: re({}, n, {
              value: Te
            }),
            group: re({}, n, {
              value: J
            }),
            groupCollapsed: re({}, n, {
              value: fe
            }),
            groupEnd: re({}, n, {
              value: ie
            })
          });
        }
        se < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = O.ReactCurrentDispatcher, ne;
    function ue(n, i, l) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (S) {
            var v = S.stack.trim().match(/\n( *(at )?)/);
            ne = v && v[1] || "";
          }
        return `
` + ne + n;
      }
    }
    var Q = !1, W;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ae();
    }
    function de(n, i) {
      if (!n || Q)
        return "";
      {
        var l = W.get(n);
        if (l !== void 0)
          return l;
      }
      var v;
      Q = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = ce.current, ce.current = null, je();
      try {
        if (i) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (oe) {
              v = oe;
            }
            Reflect.construct(n, [], w);
          } else {
            try {
              w.call();
            } catch (oe) {
              v = oe;
            }
            n.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oe) {
            v = oe;
          }
          n();
        }
      } catch (oe) {
        if (oe && v && typeof oe.stack == "string") {
          for (var b = oe.stack.split(`
`), M = v.stack.split(`
`), A = b.length - 1, k = M.length - 1; A >= 1 && k >= 0 && b[A] !== M[k]; )
            k--;
          for (; A >= 1 && k >= 0; A--, k--)
            if (b[A] !== M[k]) {
              if (A !== 1 || k !== 1)
                do
                  if (A--, k--, k < 0 || b[A] !== M[k]) {
                    var z = `
` + b[A].replace(" at new ", " at ");
                    return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), typeof n == "function" && W.set(n, z), z;
                  }
                while (A >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Q = !1, ce.current = C, De(), Error.prepareStackTrace = S;
      }
      var Ee = n ? n.displayName || n.name : "", Xt = Ee ? ue(Ee) : "";
      return typeof n == "function" && W.set(n, Xt), Xt;
    }
    function ee(n, i, l) {
      return de(n, !1);
    }
    function Zr(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function ze(n, i, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return de(n, Zr(n));
      if (typeof n == "string")
        return ue(n);
      switch (n) {
        case h:
          return ue("Suspense");
        case d:
          return ue("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            return ee(n.render);
          case m:
            return ze(n.type, i, l);
          case g: {
            var v = n, S = v._payload, C = v._init;
            try {
              return ze(C(S), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, Vt = {}, Wt = O.ReactDebugCurrentFrame;
    function Ge(n) {
      if (n) {
        var i = n._owner, l = ze(n.type, n._source, i ? i.type : null);
        Wt.setExtraStackFrame(l);
      } else
        Wt.setExtraStackFrame(null);
    }
    function Qr(n, i, l, v, S) {
      {
        var C = Function.call.bind(Be);
        for (var w in n)
          if (C(n, w)) {
            var b = void 0;
            try {
              if (typeof n[w] != "function") {
                var M = Error((v || "React class") + ": " + l + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              b = n[w](i, w, v, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              b = A;
            }
            b && !(b instanceof Error) && (Ge(S), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", l, w, typeof b), Ge(null)), b instanceof Error && !(b.message in Vt) && (Vt[b.message] = !0, Ge(S), E("Failed %s type: %s", l, b.message), Ge(null));
          }
      }
    }
    var en = Array.isArray;
    function ct(n) {
      return en(n);
    }
    function tn(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
      }
    }
    function rn(n) {
      try {
        return Mt(n), !1;
      } catch {
        return !0;
      }
    }
    function Mt(n) {
      return "" + n;
    }
    function Ut(n) {
      if (rn(n))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tn(n)), Mt(n);
    }
    var Ie = O.ReactCurrentOwner, nn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yt, zt, ut;
    ut = {};
    function on(n) {
      if (Be.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function an(n) {
      if (Be.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function sn(n, i) {
      if (typeof n.ref == "string" && Ie.current && i && Ie.current.stateNode !== i) {
        var l = q(Ie.current.type);
        ut[l] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Ie.current.type), n.ref), ut[l] = !0);
      }
    }
    function cn(n, i) {
      {
        var l = function() {
          Yt || (Yt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function un(n, i) {
      {
        var l = function() {
          zt || (zt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ln = function(n, i, l, v, S, C, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: i,
        ref: l,
        props: w,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function fn(n, i, l, v, S) {
      {
        var C, w = {}, b = null, M = null;
        l !== void 0 && (Ut(l), b = "" + l), an(i) && (Ut(i.key), b = "" + i.key), on(i) && (M = i.ref, sn(i, S));
        for (C in i)
          Be.call(i, C) && !nn.hasOwnProperty(C) && (w[C] = i[C]);
        if (n && n.defaultProps) {
          var A = n.defaultProps;
          for (C in A)
            w[C] === void 0 && (w[C] = A[C]);
        }
        if (b || M) {
          var k = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          b && cn(w, k), M && un(w, k);
        }
        return ln(n, b, M, S, v, Ie.current, w);
      }
    }
    var lt = O.ReactCurrentOwner, Bt = O.ReactDebugCurrentFrame;
    function be(n) {
      if (n) {
        var i = n._owner, l = ze(n.type, n._source, i ? i.type : null);
        Bt.setExtraStackFrame(l);
      } else
        Bt.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Gt() {
      {
        if (lt.current) {
          var n = q(lt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function dn(n) {
      {
        if (n !== void 0) {
          var i = n.fileName.replace(/^.*[\\\/]/, ""), l = n.lineNumber;
          return `

Check your code at ` + i + ":" + l + ".";
        }
        return "";
      }
    }
    var qt = {};
    function pn(n) {
      {
        var i = Gt();
        if (!i) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function Jt(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = pn(i);
        if (qt[l])
          return;
        qt[l] = !0;
        var v = "";
        n && n._owner && n._owner !== lt.current && (v = " It was passed a child from " + q(n._owner.type) + "."), be(n), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, v), be(null);
      }
    }
    function Kt(n, i) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var l = 0; l < n.length; l++) {
            var v = n[l];
            dt(v) && Jt(v, i);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var S = G(n);
          if (typeof S == "function" && S !== n.entries)
            for (var C = S.call(n), w; !(w = C.next()).done; )
              dt(w.value) && Jt(w.value, i);
        }
      }
    }
    function hn(n) {
      {
        var i = n.type;
        if (i == null || typeof i == "string")
          return;
        var l;
        if (typeof i == "function")
          l = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === m))
          l = i.propTypes;
        else
          return;
        if (l) {
          var v = q(i);
          Qr(l, n.props, "prop", v, n);
        } else if (i.PropTypes !== void 0 && !ft) {
          ft = !0;
          var S = q(i);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vn(n) {
      {
        for (var i = Object.keys(n.props), l = 0; l < i.length; l++) {
          var v = i[l];
          if (v !== "children" && v !== "key") {
            be(n), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), be(null);
            break;
          }
        }
        n.ref !== null && (be(n), E("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function Ht(n, i, l, v, S, C) {
      {
        var w = te(n);
        if (!w) {
          var b = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = dn(S);
          M ? b += M : b += Gt();
          var A;
          n === null ? A = "null" : ct(n) ? A = "array" : n !== void 0 && n.$$typeof === t ? (A = "<" + (q(n.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : A = typeof n, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, b);
        }
        var k = fn(n, i, l, S, C);
        if (k == null)
          return k;
        if (w) {
          var z = i.children;
          if (z !== void 0)
            if (v)
              if (ct(z)) {
                for (var Ee = 0; Ee < z.length; Ee++)
                  Kt(z[Ee], n);
                Object.freeze && Object.freeze(z);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kt(z, n);
        }
        return n === o ? vn(k) : hn(k), k;
      }
    }
    function mn(n, i, l) {
      return Ht(n, i, l, !0);
    }
    function gn(n, i, l) {
      return Ht(n, i, l, !1);
    }
    var yn = gn, bn = mn;
    $e.Fragment = o, $e.jsx = yn, $e.jsxs = bn;
  }()), $e;
}
process.env.NODE_ENV === "production" ? bt.exports = _n() : bt.exports = Sn();
var H = bt.exports;
const Ho = ({ color: e }) => /* @__PURE__ */ H.jsxs("div", { children: [
  "Logo ",
  /* @__PURE__ */ H.jsx("span", { children: e })
] });
var Y = function() {
  return Y = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function _e(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, s; o < a; o++)
      (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var T = "-ms-", Le = "-moz-", R = "-webkit-", wr = "comm", rt = "rule", Pt = "decl", Rn = "@import", _r = "@keyframes", Cn = "@layer", xn = Math.abs, Tt = String.fromCharCode, On = Object.assign;
function Nn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function Sr(e) {
  return e.trim();
}
function le(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function Xe(e, t) {
  return e.indexOf(t);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function Se(e, t, r) {
  return e.slice(t, r);
}
function ae(e) {
  return e.length;
}
function jt(e) {
  return e.length;
}
function qe(e, t) {
  return t.push(e), e;
}
function Pn(e, t) {
  return e.map(t).join("");
}
var nt = 1, Re = 1, Rr = 0, B = 0, $ = 0, Ne = "";
function ot(e, t, r, o, a, s, c) {
  return { value: e, root: t, parent: r, type: o, props: a, children: s, line: nt, column: Re, length: c, return: "" };
}
function Fe(e, t) {
  return On(ot("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Tn() {
  return $;
}
function jn() {
  return $ = B > 0 ? F(Ne, --B) : 0, Re--, $ === 10 && (Re = 1, nt--), $;
}
function X() {
  return $ = B < Rr ? F(Ne, B++) : 0, Re++, $ === 10 && (Re = 1, nt++), $;
}
function ve() {
  return F(Ne, B);
}
function Ze() {
  return B;
}
function at(e, t) {
  return Se(Ne, e, t);
}
function Et(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Dn(e) {
  return nt = Re = 1, Rr = ae(Ne = e), B = 0, [];
}
function An(e) {
  return Ne = "", e;
}
function pt(e) {
  return Sr(at(B - 1, wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function In(e) {
  for (; ($ = ve()) && $ < 33; )
    X();
  return Et(e) > 2 || Et($) > 3 ? "" : " ";
}
function kn(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return at(e, Ze() + (t < 6 && ve() == 32 && X() == 32));
}
function wt(e) {
  for (; X(); )
    switch ($) {
      case e:
        return B;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wt($);
        break;
      case 40:
        e === 41 && wt(e);
        break;
      case 92:
        X();
        break;
    }
  return B;
}
function $n(e, t) {
  for (; X() && e + $ !== 47 + 10; )
    if (e + $ === 42 + 42 && ve() === 47)
      break;
  return "/*" + at(t, B - 1) + "*" + Tt(e === 47 ? e : X());
}
function Fn(e) {
  for (; !Et(ve()); )
    X();
  return at(e, B);
}
function Ln(e) {
  return An(Qe("", null, null, null, [""], e = Dn(e), 0, [0], e));
}
function Qe(e, t, r, o, a, s, c, f, u) {
  for (var h = 0, d = 0, m = c, g = 0, _ = 0, x = 0, I = 1, G = 1, O = 1, E = 0, L = "", D = a, N = s, P = o, p = L; G; )
    switch (x = E, E = X()) {
      case 40:
        if (x != 108 && F(p, m - 1) == 58) {
          Xe(p += y(pt(E), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        p += pt(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        p += In(x);
        break;
      case 92:
        p += kn(Ze() - 1, 7);
        continue;
      case 47:
        switch (ve()) {
          case 42:
          case 47:
            qe(Vn($n(X(), Ze()), t, r), u);
            break;
          default:
            p += "/";
        }
        break;
      case 123 * I:
        f[h++] = ae(p) * O;
      case 125 * I:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            G = 0;
          case 59 + d:
            O == -1 && (p = y(p, /\f/g, "")), _ > 0 && ae(p) - m && qe(_ > 32 ? nr(p + ";", o, r, m - 1) : nr(y(p, " ", "") + ";", o, r, m - 2), u);
            break;
          case 59:
            p += ";";
          default:
            if (qe(P = rr(p, t, r, h, d, a, f, L, D = [], N = [], m), s), E === 123)
              if (d === 0)
                Qe(p, t, P, P, D, s, m, f, N);
              else
                switch (g === 99 && F(p, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qe(e, P, P, o && qe(rr(e, P, P, 0, 0, a, f, L, a, D = [], m), N), a, N, m, f, o ? D : N);
                    break;
                  default:
                    Qe(p, P, P, P, [""], N, 0, f, N);
                }
        }
        h = d = _ = 0, I = O = 1, L = p = "", m = c;
        break;
      case 58:
        m = 1 + ae(p), _ = x;
      default:
        if (I < 1) {
          if (E == 123)
            --I;
          else if (E == 125 && I++ == 0 && jn() == 125)
            continue;
        }
        switch (p += Tt(E), E * I) {
          case 38:
            O = d > 0 ? 1 : (p += "\f", -1);
            break;
          case 44:
            f[h++] = (ae(p) - 1) * O, O = 1;
            break;
          case 64:
            ve() === 45 && (p += pt(X())), g = ve(), d = m = ae(L = p += Fn(Ze())), E++;
            break;
          case 45:
            x === 45 && ae(p) == 2 && (I = 0);
        }
    }
  return s;
}
function rr(e, t, r, o, a, s, c, f, u, h, d) {
  for (var m = a - 1, g = a === 0 ? s : [""], _ = jt(g), x = 0, I = 0, G = 0; x < o; ++x)
    for (var O = 0, E = Se(e, m + 1, m = xn(I = c[x])), L = e; O < _; ++O)
      (L = Sr(I > 0 ? g[O] + " " + E : y(E, /&\f/g, g[O]))) && (u[G++] = L);
  return ot(e, t, r, a === 0 ? rt : f, u, h, d);
}
function Vn(e, t, r) {
  return ot(e, t, r, wr, Tt(Tn()), Se(e, 2, -2), 0);
}
function nr(e, t, r, o) {
  return ot(e, t, r, Pt, Se(e, 0, o), Se(e, o + 1, -1), o);
}
function Cr(e, t, r) {
  switch (Nn(e, t)) {
    case 5103:
      return R + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return R + e + e;
    case 4789:
      return Le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + Le + e + T + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return R + e + T + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + T + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + T + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return R + e + T + e + e;
    case 6165:
      return R + e + T + "flex-" + e + e;
    case 5187:
      return R + e + y(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + T + "flex-$1$2") + e;
    case 5443:
      return R + e + T + "flex-item-" + y(e, /flex-|-self/g, "") + (le(e, /flex-|baseline/) ? "" : T + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return R + e + T + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return R + e + T + y(e, "shrink", "negative") + e;
    case 5292:
      return R + e + T + y(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + y(e, "-grow", "") + R + e + T + y(e, "grow", "positive") + e;
    case 4554:
      return R + y(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4200:
      if (!le(e, /flex-|baseline/))
        return T + "grid-column-align" + Se(e, t) + e;
      break;
    case 2592:
    case 3360:
      return T + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, le(o.props, /grid-\w+-end/);
      }) ? ~Xe(e + (r = r[t].value), "span") ? e : T + y(e, "-start", "") + e + T + "grid-row-span:" + (~Xe(r, "span") ? le(r, /\d+/) : +le(r, /\d+/) - +le(e, /\d+/)) + ";" : T + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return le(o.props, /grid-\w+-start/);
      }) ? e : T + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, R + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ae(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + Le + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xe(e, "stretch") ? Cr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, s, c, f, u, h) {
        return T + a + ":" + s + h + (c ? T + a + "-span:" + (f ? u : +u - +s) + h : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + R) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + R + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + T + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + T) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function we(e, t) {
  for (var r = "", o = jt(e), a = 0; a < o; a++)
    r += t(e[a], a, e, t) || "";
  return r;
}
function Wn(e, t, r, o) {
  switch (e.type) {
    case Cn:
      if (e.children.length)
        break;
    case Rn:
    case Pt:
      return e.return = e.return || e.value;
    case wr:
      return "";
    case _r:
      return e.return = e.value + "{" + we(e.children, o) + "}";
    case rt:
      e.value = e.props.join(",");
  }
  return ae(r = we(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Mn(e) {
  var t = jt(e);
  return function(r, o, a, s) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, s) || "";
    return c;
  };
}
function Un(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Pt:
        e.return = Cr(e.value, e.length, r);
        return;
      case _r:
        return we([Fe(e, { value: y(e.value, "@", "@" + R) })], o);
      case rt:
        if (e.length)
          return Pn(e.props, function(a) {
            switch (le(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return we([Fe(e, { props: [y(a, /:(read-\w+)/, ":" + Le + "$1")] })], o);
              case "::placeholder":
                return we([
                  Fe(e, { props: [y(a, /:(plac\w+)/, ":" + R + "input-$1")] }),
                  Fe(e, { props: [y(a, /:(plac\w+)/, ":" + Le + "$1")] }),
                  Fe(e, { props: [y(a, /:(plac\w+)/, T + "input-$1")] })
                ], o);
            }
            return "";
          });
    }
}
var zn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Dt = typeof window < "u" && "HTMLElement" in window, Bn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), or = /invalid hook call/i, Je = /* @__PURE__ */ new Set(), Gn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], u = 1; u < arguments.length; u++)
          f[u - 1] = arguments[u];
        or.test(c) ? (s = !1, Je.delete(o)) : a.apply(void 0, _e([c], f, !1));
      }, En(), s && !Je.has(o) && (console.warn(o), Je.add(o));
    } catch (c) {
      or.test(c.message) && Je.delete(o);
    } finally {
      console.error = a;
    }
  }
}, xr = Object.freeze([]), ye = Object.freeze({});
function qn(e, t, r) {
  return r === void 0 && (r = ye), e.theme !== r.theme && e.theme || t || r.theme;
}
var Or = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Jn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Kn = /(^-|-$)/g;
function ar(e) {
  return e.replace(Jn, "-").replace(Kn, "");
}
var Hn = /(a)(d)/gi, sr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _t(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = sr(t % 52) + r;
  return (sr(t % 52) + r).replace(Hn, "$1-$2");
}
var ht, pe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Nr = function(e) {
  return pe(5381, e);
};
function Xn(e) {
  return _t(Nr(e) >>> 0);
}
function Pr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function vt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Tr = typeof Symbol == "function" && Symbol.for, jr = Tr ? Symbol.for("react.memo") : 60115, Zn = Tr ? Symbol.for("react.forward_ref") : 60112, Qn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, eo = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Dr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, to = ((ht = {})[Zn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ht[jr] = Dr, ht);
function ir(e) {
  return ("type" in (t = e) && t.type.$$typeof) === jr ? Dr : "$$typeof" in e ? to[e.$$typeof] : Qn;
  var t;
}
var ro = Object.defineProperty, no = Object.getOwnPropertyNames, cr = Object.getOwnPropertySymbols, oo = Object.getOwnPropertyDescriptor, ao = Object.getPrototypeOf, ur = Object.prototype;
function Ar(e, t, r) {
  if (typeof t != "string") {
    if (ur) {
      var o = ao(t);
      o && o !== ur && Ar(e, o, r);
    }
    var a = no(t);
    cr && (a = a.concat(cr(t)));
    for (var s = ir(e), c = ir(t), f = 0; f < a.length; ++f) {
      var u = a[f];
      if (!(u in eo || r && r[u] || c && u in c || s && u in s)) {
        var h = oo(t, u);
        try {
          ro(e, u, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function At(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function he(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function lr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function xe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function St(e, t, r) {
  if (r === void 0 && (r = !1), !r && !xe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = St(e[o], t[o]);
  else if (xe(t))
    for (var o in t)
      e[o] = St(e[o], t[o]);
  return e;
}
var so = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function io() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, s = e.length; a < s; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Pe(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(io.apply(void 0, _e([so[e]], t, !1)).trim());
}
var co = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, s = a; t >= s; )
        if ((s <<= 1) < 0)
          throw Pe(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = a; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), u = (c = 0, r.length); c < u; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < a; s++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), s = a + o, c = a; c < s; c++)
      r += "".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);
    return r;
  }, e;
}(), et = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), mt = 1, Ke = function(e) {
  if (et.has(e))
    return et.get(e);
  for (; tt.has(mt); )
    mt++;
  var t = mt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Pe(16, "".concat(t));
  return et.set(e, t), tt.set(t, e), t;
}, uo = function(e, t) {
  et.set(e, t), tt.set(t, e);
}, lo = "style[".concat(ge, "][").concat("data-styled-version", '="').concat("6.0.0-rc.3", '"]'), fo = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), po = function(e, t, r) {
  for (var o, a = r.split(","), s = 0, c = a.length; s < c; s++)
    (o = a[s]) && e.registerName(t, o);
}, ho = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(`/*!sc*/
`), a = [], s = 0, c = o.length; s < c; s++) {
    var f = o[s].trim();
    if (f) {
      var u = f.match(fo);
      if (u) {
        var h = 0 | parseInt(u[1], 10), d = u[2];
        h !== 0 && (uo(d, h), po(e, d, u[3]), e.getTag().insertRules(h, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
};
function vo() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ir = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    for (var u = f.childNodes, h = u.length; h >= 0; h--) {
      var d = u[h];
      if (d && d.nodeType === 1 && d.hasAttribute(ge))
        return d;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(ge, "active"), o.setAttribute("data-styled-version", "6.0.0-rc.3");
  var c = vo();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, mo = function() {
  function e(t) {
    this.element = Ir(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Pe(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), go = function() {
  function e(t) {
    this.element = Ir(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), yo = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), fr = Dt, bo = { isServer: !Dt, useCSSOMInjection: !Bn }, kr = function() {
  function e(t, r, o) {
    t === void 0 && (t = ye), r === void 0 && (r = {}), this.options = Y(Y({}, bo), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Dt && fr && (fr = !1, function(a) {
      for (var s = document.querySelectorAll(lo), c = 0, f = s.length; c < f; c++) {
        var u = s[c];
        u && u.getAttribute(ge) !== "active" && (ho(a, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  return e.registerId = function(t) {
    return Ke(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Y(Y({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new yo(a) : o ? new mo(a) : new go(a);
    }(this.options), new co(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ke(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ke(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ke(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e.prototype.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, a = "", s = function(f) {
        var u = function(_) {
          return tt.get(_);
        }(f);
        if (u === void 0)
          return "continue";
        var h = t.names.get(u), d = r.getGroup(f);
        if (h === void 0 || d.length === 0)
          return "continue";
        var m = "".concat(ge, ".g").concat(f, '[id="').concat(u, '"]'), g = "";
        h !== void 0 && h.forEach(function(_) {
          _.length > 0 && (g += "".concat(_, ","));
        }), a += "".concat(d).concat(m, '{content:"').concat(g, '"}').concat(`/*!sc*/
`);
      }, c = 0; c < o; c++)
        s(c);
      return a;
    }(this);
  }, e;
}(), Eo = /&/g, wo = /^\s*\/\/.*$/gm;
function $r(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = $r(r.children, t)), r;
  });
}
function _o(e) {
  var t, r, o, a = e === void 0 ? ye : e, s = a.options, c = s === void 0 ? ye : s, f = a.plugins, u = f === void 0 ? xr : f, h = function(g, _, x) {
    return x === r || x.startsWith(r) && x.endsWith(r) && x.replaceAll(r, "").length > 0 ? ".".concat(t) : g;
  }, d = u.slice();
  d.push(function(g) {
    g.type === rt && g.value.includes("&") && (g.props[0] = g.props[0].replace(Eo, r).replace(o, h));
  }), c.prefix && d.push(Yn), d.push(Wn);
  var m = function(g, _, x, I) {
    _ === void 0 && (_ = ""), x === void 0 && (x = ""), I === void 0 && (I = "&"), t = I, r = _, o = new RegExp("\\".concat(r, "\\b"), "g");
    var G = g.replace(wo, ""), O = Ln(x || _ ? "".concat(x, " ").concat(_, " { ").concat(G, " }") : G);
    c.namespace && (O = $r(O, c.namespace));
    var E = [];
    return we(O, Mn(d.concat(Un(function(L) {
      return E.push(L);
    })))), E;
  };
  return m.hash = u.length ? u.reduce(function(g, _) {
    return _.name || Pe(15), pe(g, _.name);
  }, 5381).toString() : "", m;
}
var So = new kr(), Rt = _o(), Fr = Oe.createContext({ shouldForwardProp: void 0, styleSheet: So, stylis: Rt });
Fr.Consumer;
Oe.createContext(void 0);
function dr() {
  return Er(Fr);
}
var pr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Rt);
      var c = o.name + s.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.toString = function() {
      throw Pe(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Rt), this.name + t.hash;
  }, e;
}(), Ro = function(e) {
  return e >= "A" && e <= "Z";
};
function hr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    Ro(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Lr = function(e) {
  return e == null || e === !1 || e === "";
}, Vr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var s = e[a];
    e.hasOwnProperty(a) && !Lr(s) && (Array.isArray(s) && s.isCss || Ce(s) ? o.push("".concat(hr(a), ":"), s, ";") : xe(s) ? o.push.apply(o, _e(_e(["".concat(a, " {")], Vr(s), !1), ["}"], !1)) : o.push("".concat(hr(a), ": ").concat((t = a, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in zn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function me(e, t, r, o) {
  if (Lr(e))
    return [];
  if (At(e))
    return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof pr || xe(a) || a === null || console.error("".concat(Pr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(a, t, r, o);
  }
  var s;
  return e instanceof pr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : xe(e) ? Vr(e) : Array.isArray(e) ? e.flatMap(function(c) {
    return me(c, t, r, o);
  }) : [e.toString()];
}
function Co(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !At(r))
      return !1;
  }
  return !0;
}
var xo = Nr("6.0.0-rc.3"), Oo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Co(t), this.componentId = r, this.baseHash = pe(xo, r), this.baseStyle = o, kr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = he(a, this.staticRulesId);
      else {
        var s = lr(me(this.rules, t, r, o)), c = _t(pe(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(s, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        a = he(a, c), this.staticRulesId = c;
      }
    else {
      for (var u = pe(this.baseHash, o.hash), h = "", d = 0; d < this.rules.length; d++) {
        var m = this.rules[d];
        if (typeof m == "string")
          h += m, process.env.NODE_ENV !== "production" && (u = pe(u, m));
        else if (m) {
          var g = lr(me(m, t, r, o));
          u = pe(u, g), h += g;
        }
      }
      if (h) {
        var _ = _t(u >>> 0);
        r.hasNameForId(this.componentId, _) || r.insertRules(this.componentId, _, o(h, ".".concat(_), void 0, this.componentId)), a = he(a, _);
      }
    }
    return a;
  }, e;
}(), Wr = Oe.createContext(void 0);
Wr.Consumer;
function No() {
  return Er(Wr);
}
var gt = {};
function Po(e, t, r) {
  var o, a = At(e), s = e, c = !vt(e), f = t.componentId, u = f === void 0 ? function(N, P) {
    var p = typeof N != "string" ? "sc" : ar(N);
    gt[p] = (gt[p] || 0) + 1;
    var V = "".concat(p, "-").concat(Xn("6.0.0-rc.3" + p + gt[p]));
    return P ? "".concat(P, "-").concat(V) : V;
  }(t.displayName, t.parentComponentId) : f, h = t.displayName, d = h === void 0 ? function(N) {
    return vt(N) ? "styled.".concat(N) : "Styled(".concat(Pr(N), ")");
  }(e) : h, m = (o = t.attrs) !== null && o !== void 0 ? o : [], g = t.displayName && t.componentId ? "".concat(ar(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = a && s.attrs ? s.attrs.concat(m).filter(Boolean) : m, x = t.shouldForwardProp;
  if (a && s.shouldForwardProp) {
    var I = s.shouldForwardProp;
    if (t.shouldForwardProp) {
      var G = t.shouldForwardProp;
      x = function(N, P) {
        return I(N, P) && G(N, P);
      };
    } else
      x = I;
  }
  var O = new Oo(r, g, a ? s.componentStyle : void 0), E = O.isStatic && m.length === 0;
  function L(N, P) {
    return function(p, V, Z, te) {
      var it = p.attrs, We = p.componentStyle, q = p.defaultProps, re = p.foldedComponentIds, se = p.styledComponentId, Me = p.target, Ue = No(), Ye = dr(), Te = p.shouldForwardProp || Ye.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Zt(se);
      var J = function(ce, ne, ue) {
        for (var Q, W = Y(Y({}, ne), { className: void 0, theme: ue }), Ae = 0; Ae < ce.length; Ae += 1) {
          var de = Ce(Q = ce[Ae]) ? Q(W) : Q;
          for (var ee in de)
            W[ee] = ee === "className" ? he(W[ee], de[ee]) : ee === "style" ? Y(Y({}, W[ee]), de[ee]) : de[ee];
        }
        return ne.className && (W.className = he(W.className, ne.className)), W;
      }(it, V, qn(V, Ue, q) || ye), fe = J.as || Me, ie = {};
      for (var K in J)
        J[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" || (K === "forwardedAs" ? ie.as = J.forwardedAs : Te && !Te(K, fe) || (ie[K] = J[K]));
      var je = function(ce, ne, ue) {
        var Q = dr(), W = ce.generateAndInjectStyles(ne ? ye : ue, Q.styleSheet, Q.stylis);
        return process.env.NODE_ENV !== "production" && Zt(W), W;
      }(We, te, J);
      process.env.NODE_ENV !== "production" && !te && p.warnTooManyClasses && p.warnTooManyClasses(je);
      var De = he(re, se);
      return je && (De += " " + je), J.className && (De += " " + J.className), ie[vt(fe) && !Or.has(fe) ? "class" : "className"] = De, ie.ref = Z, wn(fe, ie);
    }(D, N, P, E);
  }
  L.displayName = d;
  var D = Oe.forwardRef(L);
  return D.attrs = _, D.componentStyle = O, D.displayName = d, D.shouldForwardProp = x, D.foldedComponentIds = a ? he(s.foldedComponentIds, s.styledComponentId) : "", D.styledComponentId = g, D.target = a ? s.target : e, Object.defineProperty(D, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = a ? function(P) {
      for (var p = [], V = 1; V < arguments.length; V++)
        p[V - 1] = arguments[V];
      for (var Z = 0, te = p; Z < te.length; Z++)
        St(P, te[Z], !0);
      return P;
    }({}, s.defaultProps, N) : N;
  } }), process.env.NODE_ENV !== "production" && (Gn(d, g), D.warnTooManyClasses = function(N, P) {
    var p = {}, V = !1;
    return function(Z) {
      if (!V && (p[Z] = !0, Object.keys(p).length >= 200)) {
        var te = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(N).concat(te, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), V = !0, p = {};
      }
    };
  }(d, g)), Object.defineProperty(D, "toString", { value: function() {
    return ".".concat(D.styledComponentId);
  } }), c && Ar(D, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), D;
}
function vr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var mr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function To(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Ce(e) || xe(e)) {
    var o = e;
    return mr(me(vr(xr, _e([o], t, !0))));
  }
  var a = e;
  return t.length === 0 && a.length === 1 && typeof a[0] == "string" ? me(a) : mr(me(vr(a, t)));
}
function Ct(e, t, r) {
  if (r === void 0 && (r = ye), !t)
    throw Pe(1, t);
  var o = function(a) {
    for (var s = [], c = 1; c < arguments.length; c++)
      s[c - 1] = arguments[c];
    return e(t, r, To.apply(void 0, _e([a], s, !1)));
  };
  return o.attrs = function(a) {
    return Ct(e, t, Y(Y({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Ct(e, t, Y(Y({}, r), a));
  }, o;
}
function Mr(e) {
  return Ct(Po, e);
}
var It = Mr;
Or.forEach(function(e) {
  It[e] = Mr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var He = "__sc-".concat(ge, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[He] || (window[He] = 0), window[He] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[He] += 1);
const jo = It.div`
  font-size: 0.75rem;
  text-align: center;
`, Xo = ({
  companyName: e = "Walcron",
  link: t = "/",
  lastUpdatedYear: r
}) => /* @__PURE__ */ H.jsxs(jo, { children: [
  "Copyright © ",
  /* @__PURE__ */ H.jsx("a", { color: "inherit", href: t, children: e }),
  " ",
  r,
  "."
] }), Do = It.div`
  font-size: 0.75rem;
  padding: 0.5rem 0.5rem;
`, Zo = ({
  companyName: e = "Walcron",
  establishedYear: t = 2014,
  lastUpdatedYear: r
}) => /* @__PURE__ */ H.jsx(Do, { children: /* @__PURE__ */ H.jsxs("small", { children: [
  e,
  " ",
  t,
  "-",
  r,
  " ©"
] }) });
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, xt.apply(this, arguments);
}
var gr;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(gr || (gr = {}));
function U(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ur(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Yr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let o = e.indexOf("?");
    o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e);
  }
  return t;
}
var yr;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(yr || (yr = {}));
function Ao(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: o = "",
    hash: a = ""
  } = typeof e == "string" ? Yr(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Io(r, t) : t,
    search: Lo(o),
    hash: Vo(a)
  };
}
function Io(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function yt(e, t, r, o) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function ko(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function $o(e, t, r, o) {
  o === void 0 && (o = !1);
  let a;
  typeof e == "string" ? a = Yr(e) : (a = xt({}, e), U(!a.pathname || !a.pathname.includes("?"), yt("?", "pathname", "search", a)), U(!a.pathname || !a.pathname.includes("#"), yt("#", "pathname", "hash", a)), U(!a.search || !a.search.includes("#"), yt("#", "search", "hash", a)));
  let s = e === "" || a.pathname === "", c = s ? "/" : a.pathname, f;
  if (o || c == null)
    f = r;
  else {
    let m = t.length - 1;
    if (c.startsWith("..")) {
      let g = c.split("/");
      for (; g[0] === ".."; )
        g.shift(), m -= 1;
      a.pathname = g.join("/");
    }
    f = m >= 0 ? t[m] : "/";
  }
  let u = Ao(a, f), h = c && c !== "/" && c.endsWith("/"), d = (s || c === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (h || d) && (u.pathname += "/"), u;
}
const Fo = (e) => e.join("/").replace(/\/\/+/g, "/"), Lo = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Vo = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, zr = ["post", "put", "patch", "delete"];
new Set(zr);
const Wo = ["get", ...zr];
new Set(Wo);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Ot.apply(this, arguments);
}
const kt = /* @__PURE__ */ j.createContext(null);
process.env.NODE_ENV !== "production" && (kt.displayName = "DataRouter");
const Br = /* @__PURE__ */ j.createContext(null);
process.env.NODE_ENV !== "production" && (Br.displayName = "DataRouterState");
const Mo = /* @__PURE__ */ j.createContext(null);
process.env.NODE_ENV !== "production" && (Mo.displayName = "Await");
const $t = /* @__PURE__ */ j.createContext(null);
process.env.NODE_ENV !== "production" && ($t.displayName = "Navigation");
const Ft = /* @__PURE__ */ j.createContext(null);
process.env.NODE_ENV !== "production" && (Ft.displayName = "Location");
const st = /* @__PURE__ */ j.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (st.displayName = "Route");
const Gr = /* @__PURE__ */ j.createContext(null);
process.env.NODE_ENV !== "production" && (Gr.displayName = "RouteError");
function qr() {
  return j.useContext(Ft) != null;
}
function Jr() {
  return qr() || (process.env.NODE_ENV !== "production" ? U(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : U(!1)), j.useContext(Ft).location;
}
const Kr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Hr(e) {
  j.useContext($t).static || j.useLayoutEffect(e);
}
function Uo() {
  let {
    isDataRoute: e
  } = j.useContext(st);
  return e ? Jo() : Yo();
}
function Yo() {
  qr() || (process.env.NODE_ENV !== "production" ? U(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : U(!1));
  let e = j.useContext(kt), {
    basename: t,
    navigator: r
  } = j.useContext($t), {
    matches: o
  } = j.useContext(st), {
    pathname: a
  } = Jr(), s = JSON.stringify(ko(o).map((u) => u.pathnameBase)), c = j.useRef(!1);
  return Hr(() => {
    c.current = !0;
  }), j.useCallback(function(u, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && Ur(c.current, Kr), !c.current)
      return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let d = $o(u, JSON.parse(s), a, h.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Fo([t, d.pathname])), (h.replace ? r.replace : r.push)(d, h.state, h);
  }, [t, r, s, a, e]);
}
var Nt;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate";
})(Nt || (Nt = {}));
var Ve;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId";
})(Ve || (Ve = {}));
function Lt(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function zo(e) {
  let t = j.useContext(kt);
  return t || (process.env.NODE_ENV !== "production" ? U(!1, Lt(e)) : U(!1)), t;
}
function Bo(e) {
  let t = j.useContext(Br);
  return t || (process.env.NODE_ENV !== "production" ? U(!1, Lt(e)) : U(!1)), t;
}
function Go(e) {
  let t = j.useContext(st);
  return t || (process.env.NODE_ENV !== "production" ? U(!1, Lt(e)) : U(!1)), t;
}
function Xr(e) {
  let t = Go(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? U(!1, e + ' can only be used on routes that contain a unique "id"') : U(!1)), r.route.id;
}
function qo() {
  var e;
  let t = j.useContext(Gr), r = Bo(Ve.UseRouteError), o = Xr(Ve.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[o]);
}
function Jo() {
  let {
    router: e
  } = zo(Nt.UseNavigateStable), t = Xr(Ve.UseNavigateStable), r = j.useRef(!1);
  return Hr(() => {
    r.current = !0;
  }), j.useCallback(function(a, s) {
    s === void 0 && (s = {}), process.env.NODE_ENV !== "production" && Ur(r.current, Kr), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, Ot({
      fromRouteId: t
    }, s)));
  }, [e, t]);
}
var br;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(br || (br = {}));
new Promise(() => {
});
function Qo() {
  const e = qo();
  return /* @__PURE__ */ H.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ H.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ H.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ H.jsx("p", { children: /* @__PURE__ */ H.jsx("i", { children: e.statusText || e.message }) })
  ] });
}
const ea = ({
  children: e,
  appName: t,
  containerName: r
}) => {
  const o = Jr(), a = Uo();
  return Qt(() => {
    window.dispatchEvent(
      new CustomEvent(`[${t}] navigated`, { detail: o.pathname })
    );
  }, [t, o]), Qt(() => {
    function s(c) {
      const f = c.detail;
      o.pathname !== f && a(f);
    }
    return window.addEventListener(
      `[${r}] navigated`,
      s
    ), () => {
      window.removeEventListener(
        `[${r}] navigated`,
        s
      );
    };
  }, [r, o.pathname, a]), e;
};
export {
  Xo as Copyright,
  Qo as ErrorPage,
  Zo as Footer,
  Ho as Logo,
  ea as NavigatorListener
};
