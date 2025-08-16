import K, { useEffect as O, useState as j, useCallback as y, useMemo as fe, useRef as Y, memo as be } from "react";
const rn = ({
  appName: r,
  containerName: n,
  props: a
}) => {
  O(() => {
    window.dispatchEvent(
      new CustomEvent(`[${r}] navigated`, { detail: a.pathname })
    );
  }, [r, a.pathname]), O(() => {
    function o(l) {
      const i = l.detail;
      a.pathname !== i && a.navigate(i);
    }
    return window.addEventListener(
      `[${n}] navigated`,
      o
    ), () => {
      window.removeEventListener(
        `[${n}] navigated`,
        o
      );
    };
  }, [n, a]);
};
function sn(r) {
  console.log(r);
}
const me = (r) => (n) => {
  r({
    ...n,
    delta: n.delta * 1e3
  });
}, an = (r) => {
  r && r instanceof Function && import("./web-vitals-bWb0IoaQ.js").then(({ onCLS: n, onINP: a, onLCP: o }) => {
    n(me(r)), a(r), o(r);
  });
};
function he(r, n) {
  let a;
  return () => {
    /* istanbul ignore if -- @preserve */
    a !== null && clearTimeout(a), a = setTimeout(() => {
      a = null, r();
    }, n);
  };
}
var H = { exports: {} }, W = {};
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
function pe() {
  if (ae) return W;
  ae = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(o, l, i) {
    var _ = null;
    if (i !== void 0 && (_ = "" + i), l.key !== void 0 && (_ = "" + l.key), "key" in l) {
      i = {};
      for (var s in l)
        s !== "key" && (i[s] = l[s]);
    } else i = l;
    return l = i.ref, {
      $$typeof: r,
      type: o,
      key: _,
      ref: l !== void 0 ? l : null,
      props: i
    };
  }
  return W.Fragment = n, W.jsx = a, W.jsxs = a, W;
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
function ve() {
  return oe || (oe = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
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
        case T:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case R:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case D:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var c = e.render;
            return e = e.displayName, e || (e = c.displayName || c.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case I:
            return c = e.displayName || null, c !== null ? c : r(e.type) || "Memo";
          case $:
            c = e._payload, e = e._init;
            try {
              return r(e(c));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function a(e) {
      try {
        n(e);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var f = c.error, v = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return f.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), n(e);
      }
    }
    function o(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var c = r(e);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = z.A;
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
      var e = r(this.type);
      return ne[e] || (ne[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, c, f, v, N, w, V, q) {
      return f = w.ref, e = {
        $$typeof: p,
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
    function b(e, c, f, v, N, w, V, q) {
      var x = c.children;
      if (x !== void 0)
        if (v)
          if (de(x)) {
            for (v = 0; v < x.length; v++)
              k(x[v]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(x);
      if (Q.call(c, "key")) {
        x = r(e);
        var S = Object.keys(c).filter(function(_e) {
          return _e !== "key";
        });
        v = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", se[x + v] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          x,
          S,
          x
        ), se[x + v] = !0);
      }
      if (x = null, f !== void 0 && (a(f), x = "" + f), _(c) && (a(c.key), x = "" + c.key), "key" in c) {
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
        l(),
        f,
        V,
        q
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === p && e._store && (e._store.validated = 1);
    }
    var m = K, p = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), B = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), z = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, de = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var ee, ne = {}, te = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), re = M(o(i)), se = {};
    F.Fragment = g, F.jsx = function(e, c, f, v, N) {
      var w = 1e4 > z.recentlyCreatedOwnerStacks++;
      return b(
        e,
        c,
        f,
        !1,
        v,
        N,
        w ? Error("react-stack-top-frame") : te,
        w ? M(o(e)) : re
      );
    }, F.jsxs = function(e, c, f, v, N) {
      var w = 1e4 > z.recentlyCreatedOwnerStacks++;
      return b(
        e,
        c,
        f,
        !0,
        v,
        N,
        w ? Error("react-stack-top-frame") : te,
        w ? M(o(e)) : re
      );
    };
  }()), F;
}
var le;
function xe() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? H.exports = pe() : H.exports = ve()), H.exports;
}
var t = xe();
const X = `
`, Z = "[\\.|,]", Ee = new RegExp(
  `.*\\]${Z}?$`
), ge = new RegExp(
  `\\]${Z}?$`,
  "g"
), ke = new RegExp(
  `${Z}$`
);
function on(r, n) {
  function a(s, u) {
    if (Ee.exec(s) && s.indexOf("|") > -1) {
      const d = s.replace(
        ge,
        "]"
      ), k = d.substring(
        1,
        d.length - 1
      ).split("|"), m = k[0], p = k[1].replaceAll(
        X,
        " "
      );
      return /* @__PURE__ */ t.jsxs(K.Fragment, { children: [
        n(m, p),
        ke.exec(s) ? `${s.slice(-1)}` : ""
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
  })(r).split(" ").map((s, u) => s.length < 2 ? s : s.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: s.substring(1, s.length) }, s) : s.startsWith("[") ? a(s, u) : s === "!!" ? /* @__PURE__ */ t.jsx("br", {}, s) : s.replaceAll(X, " ")).reduce(
    (s, u) => [...s, " ", u],
    []
  );
  return _.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: _ });
}
const ln = () => {
  const [r, n] = j({
    height: window.innerHeight,
    width: window.innerWidth
  });
  return O(() => {
    const a = he(function() {
      n({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1e3);
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), r;
}, je = "_accordion_6xfsi_1", Re = "_no_button_6xfsi_24", Te = "_tab_6xfsi_32", we = "_selectable_6xfsi_37", ye = "_tab__content_6xfsi_50", L = {
  accordion: je,
  no_button: Re,
  tab: Te,
  selectable: we,
  tab__content: ye
};
function cn({
  model: r,
  groupName: n,
  isSingle: a = !0
}) {
  const [o, l] = j(""), i = y(
    (s) => {
      const u = s.currentTarget;
      o === u.value ? (u.checked = !1, l("")) : l(u.value);
    },
    [o]
  ), _ = fe(
    () => r.map((s, u) => /* @__PURE__ */ t.jsx(
      Ne,
      {
        label: s.label,
        isSingle: a,
        value: u,
        groupName: n,
        onInputClick: i,
        content: s.content
      },
      s.label
    )),
    [r, a, n, i]
  );
  return /* @__PURE__ */ t.jsx("div", { className: L.accordion, children: _ });
}
function Ne({
  label: r,
  isSingle: n,
  value: a,
  groupName: o,
  onInputClick: l,
  content: i
}) {
  const [_, s] = j(!1);
  O(() => {
    s(!0);
  }, []);
  const u = y(
    (d) => {
      if (d.key === " " || d.key === "Enter") {
        const b = d.currentTarget.firstElementChild;
        b !== null && b.click();
      }
    },
    []
  );
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `${L.tab} ${_ ? L.selectable : ""}`,
      children: [
        /* @__PURE__ */ t.jsx("button", { onKeyUp: u, className: L.no_button, children: /* @__PURE__ */ t.jsxs("label", { children: [
          r,
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: n ? "radio" : "checkbox",
              value: a,
              name: o,
              onClick: n ? l : void 0
            }
          )
        ] }) }),
        /* @__PURE__ */ t.jsx("div", { className: L.tab__content, children: /* @__PURE__ */ t.jsx("div", { children: i }) })
      ]
    }
  );
}
const Ae = "_announcement_ilcby_1", Oe = "_only_one_ilcby_11", $e = "_close_ilcby_15", Se = "_button_prev_ilcby_67", C = {
  announcement: Ae,
  only_one: Oe,
  close: $e,
  button_prev: Se
};
function un({
  ariaAnnouncementTitle: r,
  announcements: n,
  classes: a = ""
}) {
  const [o, l] = j(0), i = () => l(o - 1 >= 0 ? o - 1 : n.length - 1), _ = () => l(n.length > o + 1 ? o + 1 : 0), s = n.length === 1;
  return n.length < 1 ? null : /* @__PURE__ */ t.jsxs(
    "output",
    {
      title: r,
      className: `${C.announcement} ${s ? C.only_one : ""} ${a}`,
      children: [
        !s && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: i,
            className: `${C.button} ${C.button_prev}`,
            children: /* @__PURE__ */ t.jsx("i", { "aria-label": "previous announcement" })
          }
        ),
        /* @__PURE__ */ t.jsx("p", { children: n[o] }),
        !s && /* @__PURE__ */ t.jsx("button", { onClick: _, className: C.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ t.jsx("label", { className: C.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ t.jsx("input", { type: "checkbox", id: "close-announcement" }) })
      ]
    }
  );
}
const Ce = "_minimenu_5h854_1", Pe = "_sticky_5h854_1", We = "_underline_5h854_33", U = {
  minimenu: Ce,
  sticky: Pe,
  underline: We
};
function dn({ model: r, onScrollMonitor: n }) {
  const [a, o] = j(0), l = Y([]), i = Y(null), [_, s] = j(0), u = y(() => {
    n && n(), i.current && (window.scrollY > _ ? i.current.classList.add(U.sticky) : i.current.classList.remove(U.sticky));
  }, [_, n]), d = y(
    (m) => {
      const p = m[0].target, R = r.findIndex((P) => P.hashId === p.id), g = R < 0 ? 0 : R, A = l.current[g];
      A !== null && m[0].isIntersecting && (A.scrollIntoViewIfNeeded(!0), o(g));
    },
    [r]
  ), b = y(() => {
    const m = new IntersectionObserver(d, {
      threshold: [0.3]
      //never accurate but it's the best
    }), p = new IntersectionObserver(d, {
      threshold: [1]
    });
    return r.forEach((R) => {
      const g = document.getElementById(R.hashId);
      g !== null && (g.clientHeight < window.innerHeight ? p.observe(g) : m.observe(g));
    }), [m, p];
  }, [d, r]), k = y(
    (m) => () => {
      o(m);
    },
    []
  );
  return O(() => {
    const m = b();
    return s(i.current?.getBoundingClientRect().top || 0), u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u), m.forEach((p) => p.disconnect());
    };
  }, [u, b]), /* @__PURE__ */ t.jsx("nav", { className: U.minimenu, ref: i, children: r.map((m, p) => /* @__PURE__ */ t.jsxs(K.Fragment, { children: [
    p !== 0 && /* @__PURE__ */ t.jsx("hr", {}),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${m.hashId}`,
        ref: (R) => {
          l.current[p] = R;
        },
        className: p === a ? `${U.underline} italic` : void 0,
        onClick: k(p),
        children: /* @__PURE__ */ t.jsx("span", { children: m.title })
      }
    )
  ] }, m.hashId)) });
}
const Fe = "_desktop__nav_mntil_1", Le = "_mobile__nav_mntil_1", Ye = "_top_menu_container_mntil_6", De = "_expand_mntil_12", He = "_expand_dummy_mntil_13", Ue = "_home_logo_mntil_53", Be = "_subnav_content_mntil_57", Je = "_subnav_mntil_57", Ie = "_open_mntil_67", ze = "_menu_mntil_109", Me = "_hamb_mntil_136", Ve = "_hamb_line_mntil_144", qe = "_menu_hamburger_mntil_170", Ge = "_side__menu_mntil_178", Xe = "_top__menu_mntil_195", h = {
  desktop__nav: Fe,
  mobile__nav: Le,
  top_menu_container: Ye,
  expand: De,
  expand_dummy: He,
  home_logo: Ue,
  subnav_content: Be,
  subnav: Je,
  open: Ie,
  menu: ze,
  "mobile-menu": "_mobile-menu_mntil_129",
  hamb: Me,
  hamb_line: Ve,
  menu_hamburger: qe,
  side__menu: Ge,
  top__menu: Xe
};
function Ke({
  menuLink: r,
  topMenuItem: n,
  subMenu: a
}) {
  const [o, l] = j(!1), i = Y(null), _ = y(() => {
    l(!o);
  }, [o]), s = y(
    (d) => {
      (d.key === "Escape" || d.key === "ArrowUp") && l(!1), d.key === "ArrowDown" && l(!0);
    },
    []
  ), u = y(
    (d) => {
      let b = d.relatedTarget?.parentNode;
      for (let k = 0; k < 8; k++)
        if (b = b?.parentNode, b === i.current)
          return;
      l(!1);
    },
    []
  );
  return n.items !== void 0 ? /* @__PURE__ */ t.jsxs(
    "li",
    {
      className: `${h.subnav} ${o ? h.open : ""}`,
      onBlur: u,
      ref: i,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: h.top_menu_container, children: [
          r(n.label, n.url, void 0),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: _,
              onKeyUp: s,
              "aria-label": `${n.label}`,
              "aria-expanded": o,
              className: h.expand
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: h.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { children: a(n.items, n.url) }) })
      ]
    }
  ) : /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("div", { className: h.top_menu_container, children: [
    r(n.label, n.url),
    /* @__PURE__ */ t.jsx("div", { className: h.expand_dummy })
  ] }) }, n.label);
}
function Ze({
  menuLink: r,
  topMenuItem: n,
  subMenu: a,
  unCheckSideMenu: o
}) {
  const [l, i] = j(!1), _ = Y(null), [s, u] = j(!1);
  O(() => {
    u(!0);
  }, []);
  const d = y(() => {
    i(!l);
  }, [l]);
  return n.items !== void 0 ? /* @__PURE__ */ t.jsxs("li", { className: h.subnav, children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        "aria-expanded": l,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${n.label}`,
        onClick: () => {
          _.current?.click();
        },
        className: `${h.top__menu} ${s ? "show-inline" : "hide"}`
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "label",
      {
        className: `${h.top__menu} ${s ? "hide" : "show-inline"}`,
        children: [
          /* @__PURE__ */ t.jsx(
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
    r(n.label, n.url, o),
    /* @__PURE__ */ t.jsx("div", { className: h.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { children: a(n.items, n.url, o) }) })
  ] }, n.label) : /* @__PURE__ */ t.jsx("li", { children: r(n.label, n.url, o) }, n.label);
}
function Qe({
  menuLink: r,
  homeLink: n,
  homeLogoLink: a,
  model: o,
  shortcutComponent: l,
  mobileStyle: i = {},
  desktopStyle: _ = {},
  desktopClassName: s = "",
  mobileClassName: u = "",
  menuName: d = void 0
}) {
  const b = Y(null), [k, m] = j(!1), [p, R] = j(!1);
  O(() => {
    R(!0);
  }, []);
  const g = (E, T) => T === void 0 || T === "" ? E : T.replace(/^#/, `${E}#`), A = () => {
    b.current && (b.current.checked = !1, document.body.style.overflow = "auto");
  }, P = (E) => {
    const T = E.target.checked;
    m(T), document.body.style.overflow = T ? "hidden" : "auto";
  }, D = (E, T, I) => E.map(($) => /* @__PURE__ */ t.jsx("li", { children: r(
    $.label,
    g(T, $.url),
    I
  ) }, $.label)), B = o.map((E) => /* @__PURE__ */ t.jsx(
    Ke,
    {
      menuLink: r,
      topMenuItem: E,
      subMenu: D
    },
    E.label
  )), J = o.map((E) => /* @__PURE__ */ t.jsx(
    Ze,
    {
      menuLink: r,
      topMenuItem: E,
      subMenu: D,
      unCheckSideMenu: A
    },
    E.label
  ));
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${h.mobile__nav} ${u}`,
        style: i,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: h["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("div", { className: h.menu_hamburger, children: [
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  "aria-expanded": k === !0,
                  "aria-haspopup": !0,
                  className: `${h.hamb} ${p ? "show" : "hide"}`,
                  "aria-label": d || "Hamburger Menu",
                  onClick: () => {
                    b.current?.click();
                  },
                  children: /* @__PURE__ */ t.jsx("span", { className: h.hamb_line })
                }
              ),
              /* @__PURE__ */ t.jsx(
                "label",
                {
                  className: p ? "hide" : "show",
                  "aria-label": d || "Hamburger Menu",
                  children: /* @__PURE__ */ t.jsx(
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
            l
          ] }),
          /* @__PURE__ */ t.jsxs("nav", { className: h.menu, children: [
            /* @__PURE__ */ t.jsx("ul", { role: "menu", children: J }),
            " "
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "nav",
      {
        className: `${h.desktop__nav} ${s}`,
        style: _,
        "aria-label": d,
        children: /* @__PURE__ */ t.jsxs("ul", { children: [
          /* @__PURE__ */ t.jsx("li", { children: a(h.home_logo) }),
          B,
          /* @__PURE__ */ t.jsx("li", { children: l })
        ] })
      }
    )
  ] });
}
const _n = be(Qe, () => !0), en = "_container_1er0x_1", nn = "_reversed_1er0x_14", ce = {
  container: en,
  reversed: nn
};
function fn({
  model: r,
  className: n,
  isReversed: a = !1
}) {
  return /* @__PURE__ */ t.jsx(
    "ul",
    {
      className: `${ce.container} ${n} ${a ? ce.reversed : ""}`,
      children: r.map(({ content: o, id: l }, i) => /* @__PURE__ */ t.jsx("li", { children: o }, `sc-${i}-${l}`))
    }
  );
}
export {
  cn as Accordion,
  un as Announcement,
  _n as Menu,
  dn as MiniMenu,
  Qe as MutableMenu,
  fn as ScrollableCard,
  sn as consoleReportHandler,
  he as debounce,
  on as htmlConvertor,
  an as reportWebVitals,
  rn as useNavigationListener,
  ln as useWindowListener
};
