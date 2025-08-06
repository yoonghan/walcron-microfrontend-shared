import K, { useEffect as O, useState as j, useCallback as T, useMemo as fe, useRef as L, memo as be } from "react";
const rn = ({
  appName: t,
  containerName: n,
  props: o
}) => {
  O(() => {
    window.dispatchEvent(
      new CustomEvent(`[${t}] navigated`, { detail: o.pathname })
    );
  }, [t, o.pathname]), O(() => {
    function l(a) {
      const i = a.detail;
      o.pathname !== i && o.navigate(i);
    }
    return window.addEventListener(
      `[${n}] navigated`,
      l
    ), () => {
      window.removeEventListener(
        `[${n}] navigated`,
        l
      );
    };
  }, [n, o]);
};
function tn(t) {
  console.log(t);
}
const me = (t) => (n) => {
  t({
    ...n,
    delta: n.delta * 1e3
  });
}, sn = (t) => {
  t && t instanceof Function && import("./web-vitals-bWb0IoaQ.js").then(({ onCLS: n, onINP: o, onLCP: l }) => {
    n(me(t)), o(t), l(t);
  });
};
function he(t, n) {
  let o;
  return () => {
    /* istanbul ignore if -- @preserve */
    o !== null && clearTimeout(o), o = setTimeout(() => {
      o = null, t();
    }, n);
  };
}
var D = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function ve() {
  if (ae) return W;
  ae = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(l, a, i) {
    var _ = null;
    if (i !== void 0 && (_ = "" + i), a.key !== void 0 && (_ = "" + a.key), "key" in a) {
      i = {};
      for (var s in a)
        s !== "key" && (i[s] = a[s]);
    } else i = a;
    return a = i.ref, {
      $$typeof: t,
      type: l,
      key: _,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return W.Fragment = n, W.jsx = o, W.jsxs = o, W;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function pe() {
  return oe || (oe = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ue ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
          return "Fragment";
        case P:
          return "Profiler";
        case A:
          return "StrictMode";
        case E:
          return "Suspense";
        case R:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case Y:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var c = e.render;
            return e = e.displayName, e || (e = c.displayName || c.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case z:
            return c = e.displayName || null, c !== null ? c : t(e.type) || "Memo";
          case $:
            c = e._payload, e = e._init;
            try {
              return t(e(c));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function o(e) {
      try {
        n(e);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var f = c.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return f.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), n(e);
      }
    }
    function l(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var c = t(e);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = I.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (Q.call(e, "key")) {
        var c = Object.getOwnPropertyDescriptor(e, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function s(e, c) {
      function f() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: f,
        configurable: !0
      });
    }
    function u() {
      var e = t(this.type);
      return ne[e] || (ne[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, c, f, p, N, w, V, q) {
      return f = w.ref, e = {
        $$typeof: v,
        type: e,
        key: c,
        props: w,
        _owner: N
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, c, f, p, N, w, V, q) {
      var x = c.children;
      if (x !== void 0)
        if (p)
          if (de(x)) {
            for (p = 0; p < x.length; p++)
              k(x[p]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(x);
      if (Q.call(c, "key")) {
        x = t(e);
        var S = Object.keys(c).filter(function(_e) {
          return _e !== "key";
        });
        p = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", se[x + p] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          x,
          S,
          x
        ), se[x + p] = !0);
      }
      if (x = null, f !== void 0 && (o(f), x = "" + f), _(c) && (o(c.key), x = "" + c.key), "key" in c) {
        f = {};
        for (var G in c)
          G !== "key" && (f[G] = c[G]);
      } else f = c;
      return x && s(
        f,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(
        e,
        x,
        w,
        N,
        a(),
        f,
        V,
        q
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === v && e._store && (e._store.validated = 1);
    }
    var m = K, v = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), B = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), I = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, de = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var ee, ne = {}, re = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), te = M(l(i)), se = {};
    F.Fragment = g, F.jsx = function(e, c, f, p, N) {
      var w = 1e4 > I.recentlyCreatedOwnerStacks++;
      return b(
        e,
        c,
        f,
        !1,
        p,
        N,
        w ? Error("react-stack-top-frame") : re,
        w ? M(l(e)) : te
      );
    }, F.jsxs = function(e, c, f, p, N) {
      var w = 1e4 > I.recentlyCreatedOwnerStacks++;
      return b(
        e,
        c,
        f,
        !0,
        p,
        N,
        w ? Error("react-stack-top-frame") : re,
        w ? M(l(e)) : te
      );
    };
  }()), F;
}
var le;
function xe() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? D.exports = ve() : D.exports = pe()), D.exports;
}
var r = xe();
const X = `
`, Z = "[\\.|,]", Ee = new RegExp(
  `.*\\]${Z}?$`
), ge = new RegExp(
  `\\]${Z}?$`,
  "g"
), ke = new RegExp(
  `${Z}$`
);
function an(t, n) {
  function o(s, u) {
    if (s.match(Ee) && s.indexOf("|") > -1) {
      const d = s.replace(
        ge,
        "]"
      ), k = d.substring(
        1,
        d.length - 1
      ).split("|"), m = k[0], v = k[1].replaceAll(
        X,
        " "
      );
      return /* @__PURE__ */ r.jsxs(K.Fragment, { children: [
        n(m, v),
        s.match(ke) ? `${s.slice(-1)}` : ""
      ] }, u);
    }
    return s;
  }
  const _ = ((s) => {
    const u = s.split("|");
    return u.length > 1 ? u.map((d) => {
      const b = d.split("]");
      return b.length === 2 ? `${b[0].replaceAll(
        " ",
        X
      )}]${b[1]}` : d;
    }).join("|") : s;
  })(t).split(" ").map((s, u) => s.length < 2 ? s : s.startsWith("*") ? /* @__PURE__ */ r.jsx("strong", { children: s.substring(1, s.length) }, u) : s.startsWith("[") ? o(s, u) : s === "!!" ? /* @__PURE__ */ r.jsx("br", {}, u) : s.replaceAll(X, " ")).reduce(
    (s, u) => [...s, " ", u],
    []
  );
  return _.shift(), /* @__PURE__ */ r.jsx(r.Fragment, { children: _ });
}
const on = () => {
  const [t, n] = j({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return O(() => {
    const o = he(function() {
      n({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", o), () => {
      window.removeEventListener("resize", o);
    };
  }, []), t;
}, je = "_accordion_8a78m_1", ye = "_tab_8a78m_24", Re = "_selectable_8a78m_29", we = "_tab__content_8a78m_42", U = {
  accordion: je,
  tab: ye,
  selectable: Re,
  tab__content: we
};
function ln({
  model: t,
  groupName: n,
  isSingle: o = !0
}) {
  const [l, a] = j(""), i = T(
    (s) => {
      const u = s.currentTarget;
      l === u.value ? (u.checked = !1, a("")) : a(u.value);
    },
    [l]
  ), _ = fe(
    () => t.map((s, u) => /* @__PURE__ */ r.jsx(
      Te,
      {
        label: s.label,
        isSingle: o,
        value: u,
        groupName: n,
        onInputClick: i,
        content: s.content
      },
      s.label
    )),
    [t, o, n, i]
  );
  return /* @__PURE__ */ r.jsx("div", { className: U.accordion, children: _ });
}
function Te({
  label: t,
  isSingle: n,
  value: o,
  groupName: l,
  onInputClick: a,
  content: i
}) {
  const [_, s] = j(!1), u = T(
    (d) => {
      if (d.key === " " || d.key === "Enter") {
        const b = d.currentTarget.firstElementChild;
        b !== null && b.click();
      }
    },
    []
  );
  return O(() => {
    s(!0);
  }, []), /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `${U.tab} ${_ ? U.selectable : ""}`,
      tabIndex: _ ? 0 : void 0,
      onKeyUp: u,
      children: [
        /* @__PURE__ */ r.jsxs("label", { children: [
          t,
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: n ? "radio" : "checkbox",
              value: o,
              name: l,
              onClick: n ? a : void 0
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: U.tab__content, children: /* @__PURE__ */ r.jsx("div", { children: i }) })
      ]
    }
  );
}
const Ne = "_announcement_149a8_1", Ae = "_only_one_149a8_11", Oe = "_close_149a8_25", $e = "_button_prev_149a8_77", C = {
  announcement: Ne,
  only_one: Ae,
  close: Oe,
  button_prev: $e
};
function cn({
  ariaAnnouncementTitle: t,
  announcements: n,
  classes: o = ""
}) {
  const [l, a] = j(0), i = () => a(l - 1 >= 0 ? l - 1 : n.length - 1), _ = () => a(n.length > l + 1 ? l + 1 : 0), s = n.length === 1;
  return n.length < 1 ? null : /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "status",
      title: t,
      className: `${C.announcement} ${s ? C.only_one : ""} ${o}`,
      children: [
        !s && /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: i,
            className: `${C.button} ${C.button_prev}`,
            children: /* @__PURE__ */ r.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ r.jsx("p", { children: n[l] }),
        !s && /* @__PURE__ */ r.jsx("button", { onClick: _, className: C.button, children: /* @__PURE__ */ r.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ r.jsx("label", { className: C.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ r.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Se = "_minimenu_1exl9_1", Ce = "_sticky_1exl9_1", Pe = "_underline_1exl9_32", H = {
  minimenu: Se,
  sticky: Ce,
  underline: Pe
};
function un({ model: t, onScrollMonitor: n }) {
  const [o, l] = j(0), a = L([]), i = L(null), [_, s] = j(0), u = T(() => {
    n && n(), i.current && (window.scrollY > _ ? i.current.classList.add(H.sticky) : i.current.classList.remove(H.sticky));
  }, [_, n]), d = T(
    (m) => {
      const v = m[0].target, y = t.findIndex((P) => P.hashId === v.id), g = y < 0 ? 0 : y, A = a.current[g];
      A !== null && m[0].isIntersecting && (A.scrollIntoViewIfNeeded(!0), l(g));
    },
    [t]
  ), b = T(() => {
    const m = new IntersectionObserver(d, {
      threshold: [0.3]
      //never accurate but it's the best
    }), v = new IntersectionObserver(d, {
      threshold: [1]
    });
    return t.forEach((y) => {
      const g = document.getElementById(y.hashId);
      g !== null && (g.clientHeight < window.innerHeight ? v.observe(g) : m.observe(g));
    }), [m, v];
  }, [d, t]), k = T(
    (m) => () => {
      l(m);
    },
    []
  );
  return O(() => {
    const m = b();
    return s(i.current?.getBoundingClientRect().top || 0), u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u), m.forEach((v) => v.disconnect());
    };
  }, [u, b]), /* @__PURE__ */ r.jsx("nav", { className: H.minimenu, ref: i, children: t.map((m, v) => /* @__PURE__ */ r.jsxs(K.Fragment, { children: [
    v !== 0 && /* @__PURE__ */ r.jsx("div", { role: "separator" }),
    /* @__PURE__ */ r.jsx(
      "a",
      {
        href: `#${m.hashId}`,
        ref: (y) => {
          a.current[v] = y;
        },
        className: v === o ? `${H.underline} italic` : void 0,
        onClick: k(v),
        children: /* @__PURE__ */ r.jsx("span", { children: m.title })
      }
    )
  ] }, m.hashId)) });
}
const We = "_desktop__nav_erey8_1", Fe = "_mobile__nav_erey8_1", Le = "_top_menu_container_erey8_6", Ye = "_expand_erey8_12", De = "_expand_dummy_erey8_13", He = "_home_logo_erey8_67", Ue = "_subnav_content_erey8_78", Be = "_subnav_erey8_78", Je = "_open_erey8_88", ze = "_menu_erey8_129", Ie = "_hamb_erey8_156", Me = "_hamb_line_erey8_164", Ve = "_menu_hamburger_erey8_191", qe = "_side__menu_erey8_199", Ge = "_top__menu_erey8_216", h = {
  desktop__nav: We,
  mobile__nav: Fe,
  top_menu_container: Le,
  expand: Ye,
  expand_dummy: De,
  home_logo: He,
  subnav_content: Ue,
  subnav: Be,
  open: Je,
  menu: ze,
  "mobile-menu": "_mobile-menu_erey8_149",
  hamb: Ie,
  hamb_line: Me,
  menu_hamburger: Ve,
  side__menu: qe,
  top__menu: Ge
};
function Xe({
  menuLink: t,
  topMenuItem: n,
  subMenu: o
}) {
  const [l, a] = j(!1), i = L(null), _ = T(() => {
    a(!l);
  }, [l]), s = T(
    (d) => {
      (d.key === "Escape" || d.key === "ArrowUp") && a(!1), d.key === "ArrowDown" && a(!0);
    },
    []
  ), u = T(
    (d) => {
      let b = d.relatedTarget?.parentNode;
      for (let k = 0; k < 8; k++)
        if (b = b?.parentNode, b === i.current)
          return;
      a(!1);
    },
    []
  );
  return n.items !== void 0 ? /* @__PURE__ */ r.jsxs(
    "li",
    {
      className: `${h.subnav} ${l ? h.open : ""}`,
      onBlur: u,
      ref: i,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: h.top_menu_container, children: [
          t(n.label, n.url, void 0),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: _,
              onKeyUp: s,
              "aria-label": `${n.label}`,
              "aria-expanded": l,
              className: h.expand
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: h.subnav_content, children: /* @__PURE__ */ r.jsx("ul", { children: o(n.items, n.url) }) })
      ]
    }
  ) : /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("div", { className: h.top_menu_container, children: [
    t(n.label, n.url),
    /* @__PURE__ */ r.jsx("div", { className: h.expand_dummy })
  ] }) }, n.label);
}
function Ke({
  menuLink: t,
  topMenuItem: n,
  subMenu: o,
  unCheckSideMenu: l
}) {
  const [a, i] = j(!1), _ = L(null), [s, u] = j(!1);
  O(() => {
    u(!0);
  }, []);
  const d = T(() => {
    i(!a);
  }, [a]);
  return n.items !== void 0 ? /* @__PURE__ */ r.jsxs("li", { className: h.subnav, children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        "aria-expanded": a,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${n.label}`,
        onClick: () => {
          _.current?.click();
        },
        className: `${h.top__menu} ${s ? "show-inline" : "hide"}`
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "label",
      {
        className: `${h.top__menu} ${s ? "hide" : "show-inline"}`,
        children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              name: "top_menu",
              ref: _,
              value: n.label,
              onClick: d,
              role: "menuitemcheckbox"
            }
          ),
          `Expandable ${n.label}`
        ]
      }
    ),
    t(n.label, n.url, l),
    /* @__PURE__ */ r.jsx("div", { className: h.subnav_content, children: /* @__PURE__ */ r.jsx("ul", { children: o(n.items, n.url, l) }) })
  ] }, n.label) : /* @__PURE__ */ r.jsx("li", { children: t(n.label, n.url, l) }, n.label);
}
function Ze({
  menuLink: t,
  homeLink: n,
  homeLogoLink: o,
  model: l,
  shortcutComponent: a,
  mobileStyle: i = {},
  desktopStyle: _ = {},
  desktopClassName: s = "",
  mobileClassName: u = "",
  menuName: d = void 0
}) {
  const b = L(null), [k, m] = j(!1), [v, y] = j(!1);
  O(() => {
    y(!0);
  }, []);
  const g = (E, R) => R === void 0 || R === "" ? E : R.replace(/^#/, `${E}#`), A = () => {
    b.current && (b.current.checked = !1, document.body.style.overflow = "auto");
  }, P = (E) => {
    const R = E.target.checked;
    m(R), document.body.style.overflow = R ? "hidden" : "auto";
  }, Y = (E, R, z) => E.map(($) => /* @__PURE__ */ r.jsx("li", { children: t(
    $.label,
    g(R, $.url),
    z
  ) }, $.label)), B = l.map((E) => /* @__PURE__ */ r.jsx(
    Xe,
    {
      menuLink: t,
      topMenuItem: E,
      subMenu: Y
    },
    E.label
  )), J = l.map((E) => /* @__PURE__ */ r.jsx(
    Ke,
    {
      menuLink: t,
      topMenuItem: E,
      subMenu: Y,
      unCheckSideMenu: A
    },
    E.label
  ));
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `${h.mobile__nav} ${u}`,
        style: i,
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: h["mobile-menu"], children: [
            /* @__PURE__ */ r.jsxs("div", { className: h.menu_hamburger, children: [
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  "aria-expanded": k === !0,
                  "aria-haspopup": !0,
                  className: `${h.hamb} ${v ? "show" : "hide"}`,
                  "aria-label": d || "Hamburger Menu",
                  onClick: () => {
                    b.current?.click();
                  },
                  children: /* @__PURE__ */ r.jsx("span", { className: h.hamb_line })
                }
              ),
              /* @__PURE__ */ r.jsx(
                "label",
                {
                  className: v ? "hide" : "show",
                  "aria-label": d || "Hamburger Menu",
                  children: /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      className: h.side__menu,
                      type: "checkbox",
                      ref: b,
                      onChange: P
                    }
                  )
                }
              )
            ] }),
            n("/", A, -1),
            a && a
          ] }),
          /* @__PURE__ */ r.jsxs("nav", { className: h.menu, children: [
            /* @__PURE__ */ r.jsx("ul", { role: "menu", children: J }),
            " "
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "nav",
      {
        className: `${h.desktop__nav} ${s}`,
        style: _,
        "aria-label": d,
        children: /* @__PURE__ */ r.jsxs("ul", { children: [
          /* @__PURE__ */ r.jsx("li", { children: o(h.home_logo) }),
          B,
          /* @__PURE__ */ r.jsx("li", { children: a && a })
        ] })
      }
    )
  ] });
}
const dn = be(Ze, () => !0), Qe = "_container_1er0x_1", en = "_reversed_1er0x_14", ce = {
  container: Qe,
  reversed: en
};
function _n({
  model: t,
  className: n,
  isReversed: o = !1
}) {
  return /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: `${ce.container} ${n} ${o ? ce.reversed : ""}`,
      children: t.map(({ content: l }, a) => /* @__PURE__ */ r.jsx("li", { children: l }, `sc-${a}`))
    }
  );
}
export {
  ln as Accordion,
  cn as Announcement,
  dn as Menu,
  un as MiniMenu,
  Ze as MutableMenu,
  _n as ScrollableCard,
  tn as consoleReportHandler,
  he as debounce,
  an as htmlConvertor,
  sn as reportWebVitals,
  rn as useNavigationListener,
  on as useWindowListener
};
