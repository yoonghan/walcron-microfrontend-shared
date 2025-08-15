import Z, { useEffect as O, useState as k, useCallback as y, useMemo as me, useRef as L, memo as fe } from "react";
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
const be = (t) => (n) => {
  t({
    ...n,
    delta: n.delta * 1e3
  });
}, sn = (t) => {
  t && t instanceof Function && import("./web-vitals-bWb0IoaQ.js").then(({ onCLS: n, onINP: o, onLCP: l }) => {
    n(be(t)), o(t), l(t);
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
    var d = null;
    if (i !== void 0 && (d = "" + i), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      i = {};
      for (var s in a)
        s !== "key" && (i[s] = a[s]);
    } else i = a;
    return a = i.ref, {
      $$typeof: t,
      type: l,
      key: d,
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
        case j:
          return "Fragment";
        case P:
          return "Profiler";
        case A:
          return "StrictMode";
        case E:
          return "Suspense";
        case w:
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
          case U:
            return (e.displayName || "Context") + ".Provider";
          case Y:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var c = e.render;
            return e = e.displayName, e || (e = c.displayName || c.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
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
        var m = c.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return m.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), n(e);
      }
    }
    function l(e) {
      if (e === j) return "<>";
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
    function d(e) {
      if (K.call(e, "key")) {
        var c = Object.getOwnPropertyDescriptor(e, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function s(e, c) {
      function m() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: m,
        configurable: !0
      });
    }
    function u() {
      var e = t(this.type);
      return ne[e] || (ne[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, c, m, p, N, T, V, q) {
      return m = T.ref, e = {
        $$typeof: v,
        type: e,
        key: c,
        props: T,
        _owner: N
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
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
    function h(e, c, m, p, N, T, V, q) {
      var x = c.children;
      if (x !== void 0)
        if (p)
          if (de(x)) {
            for (p = 0; p < x.length; p++)
              g(x[p]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(x);
      if (K.call(c, "key")) {
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
      if (x = null, m !== void 0 && (o(m), x = "" + m), d(c) && (o(c.key), x = "" + c.key), "key" in c) {
        m = {};
        for (var G in c)
          G !== "key" && (m[G] = c[G]);
      } else m = c;
      return x && s(
        m,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        x,
        T,
        N,
        a(),
        m,
        V,
        q
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === v && e._store && (e._store.validated = 1);
    }
    var f = Z, v = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), U = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), I = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, de = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var ee, ne = {}, re = f.react_stack_bottom_frame.bind(
      f,
      i
    )(), te = M(l(i)), se = {};
    F.Fragment = j, F.jsx = function(e, c, m, p, N) {
      var T = 1e4 > I.recentlyCreatedOwnerStacks++;
      return h(
        e,
        c,
        m,
        !1,
        p,
        N,
        T ? Error("react-stack-top-frame") : re,
        T ? M(l(e)) : te
      );
    }, F.jsxs = function(e, c, m, p, N) {
      var T = 1e4 > I.recentlyCreatedOwnerStacks++;
      return h(
        e,
        c,
        m,
        !0,
        p,
        N,
        T ? Error("react-stack-top-frame") : re,
        T ? M(l(e)) : te
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
`, Q = "[\\.|,]", Ee = new RegExp(
  `.*\\]${Q}?$`
), je = new RegExp(
  `\\]${Q}?$`,
  "g"
), ge = new RegExp(
  `${Q}$`
);
function an(t, n) {
  function o(s, u) {
    if (Ee.exec(s) && s.indexOf("|") > -1) {
      const _ = s.replace(
        je,
        "]"
      ), g = _.substring(
        1,
        _.length - 1
      ).split("|"), f = g[0], v = g[1].replaceAll(
        X,
        " "
      );
      return /* @__PURE__ */ r.jsxs(Z.Fragment, { children: [
        n(f, v),
        ge.exec(s) ? `${s.slice(-1)}` : ""
      ] }, u);
    }
    return s;
  }
  const d = ((s) => {
    const u = s.split("|");
    return u.length > 1 ? u.map((_) => {
      const h = _.split("]");
      return h.length === 2 ? `${h[0].replaceAll(
        " ",
        X
      )}]${h[1]}` : _;
    }).join("|") : s;
  })(t).split(" ").map((s, u) => s.length < 2 ? s : s.startsWith("*") ? /* @__PURE__ */ r.jsx("strong", { children: s.substring(1, s.length) }, s) : s.startsWith("[") ? o(s, u) : s === "!!" ? /* @__PURE__ */ r.jsx("br", {}, s) : s.replaceAll(X, " ")).reduce(
    (s, u) => [...s, " ", u],
    []
  );
  return d.shift(), /* @__PURE__ */ r.jsx(r.Fragment, { children: d });
}
const on = () => {
  const [t, n] = k({
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
}, ke = "_accordion_8a78m_1", Re = "_tab_8a78m_24", we = "_selectable_8a78m_29", Te = "_tab__content_8a78m_42", B = {
  accordion: ke,
  tab: Re,
  selectable: we,
  tab__content: Te
};
function ln({
  model: t,
  groupName: n,
  isSingle: o = !0
}) {
  const [l, a] = k(""), i = y(
    (s) => {
      const u = s.currentTarget;
      l === u.value ? (u.checked = !1, a("")) : a(u.value);
    },
    [l]
  ), d = me(
    () => t.map((s, u) => /* @__PURE__ */ r.jsx(
      ye,
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
  return /* @__PURE__ */ r.jsx("div", { className: B.accordion, children: d });
}
function ye({
  label: t,
  isSingle: n,
  value: o,
  groupName: l,
  onInputClick: a,
  content: i
}) {
  const [d, s] = k(!1);
  return O(() => {
    s(!0);
  }, []), /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `${B.tab} ${d ? B.selectable : ""}`,
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
        /* @__PURE__ */ r.jsx("div", { className: B.tab__content, children: /* @__PURE__ */ r.jsx("div", { children: i }) })
      ]
    }
  );
}
const Ne = "_announcement_194vp_1", Ae = "_only_one_194vp_11", Oe = "_close_194vp_15", $e = "_button_prev_194vp_69", C = {
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
  const [l, a] = k(0), i = () => a(l - 1 >= 0 ? l - 1 : n.length - 1), d = () => a(n.length > l + 1 ? l + 1 : 0), s = n.length === 1;
  return n.length < 1 ? null : /* @__PURE__ */ r.jsxs(
    "output",
    {
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
        !s && /* @__PURE__ */ r.jsx("button", { onClick: d, className: C.button, children: /* @__PURE__ */ r.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ r.jsx("label", { className: C.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ r.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Se = "_minimenu_5h854_1", Ce = "_sticky_5h854_1", Pe = "_underline_5h854_33", H = {
  minimenu: Se,
  sticky: Ce,
  underline: Pe
};
function un({ model: t, onScrollMonitor: n }) {
  const [o, l] = k(0), a = L([]), i = L(null), [d, s] = k(0), u = y(() => {
    n && n(), i.current && (window.scrollY > d ? i.current.classList.add(H.sticky) : i.current.classList.remove(H.sticky));
  }, [d, n]), _ = y(
    (f) => {
      const v = f[0].target, R = t.findIndex((P) => P.hashId === v.id), j = R < 0 ? 0 : R, A = a.current[j];
      A !== null && f[0].isIntersecting && (A.scrollIntoViewIfNeeded(!0), l(j));
    },
    [t]
  ), h = y(() => {
    const f = new IntersectionObserver(_, {
      threshold: [0.3]
      //never accurate but it's the best
    }), v = new IntersectionObserver(_, {
      threshold: [1]
    });
    return t.forEach((R) => {
      const j = document.getElementById(R.hashId);
      j !== null && (j.clientHeight < window.innerHeight ? v.observe(j) : f.observe(j));
    }), [f, v];
  }, [_, t]), g = y(
    (f) => () => {
      l(f);
    },
    []
  );
  return O(() => {
    const f = h();
    return s(i.current?.getBoundingClientRect().top || 0), u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u), f.forEach((v) => v.disconnect());
    };
  }, [u, h]), /* @__PURE__ */ r.jsx("nav", { className: H.minimenu, ref: i, children: t.map((f, v) => /* @__PURE__ */ r.jsxs(Z.Fragment, { children: [
    v !== 0 && /* @__PURE__ */ r.jsx("hr", {}),
    /* @__PURE__ */ r.jsx(
      "a",
      {
        href: `#${f.hashId}`,
        ref: (R) => {
          a.current[v] = R;
        },
        className: v === o ? `${H.underline} italic` : void 0,
        onClick: g(v),
        children: /* @__PURE__ */ r.jsx("span", { children: f.title })
      }
    )
  ] }, f.hashId)) });
}
const We = "_desktop__nav_mntil_1", Fe = "_mobile__nav_mntil_1", Le = "_top_menu_container_mntil_6", Ye = "_expand_mntil_12", De = "_expand_dummy_mntil_13", He = "_home_logo_mntil_53", Be = "_subnav_content_mntil_57", Ue = "_subnav_mntil_57", ze = "_open_mntil_67", Je = "_menu_mntil_109", Ie = "_hamb_mntil_136", Me = "_hamb_line_mntil_144", Ve = "_menu_hamburger_mntil_170", qe = "_side__menu_mntil_178", Ge = "_top__menu_mntil_195", b = {
  desktop__nav: We,
  mobile__nav: Fe,
  top_menu_container: Le,
  expand: Ye,
  expand_dummy: De,
  home_logo: He,
  subnav_content: Be,
  subnav: Ue,
  open: ze,
  menu: Je,
  "mobile-menu": "_mobile-menu_mntil_129",
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
  const [l, a] = k(!1), i = L(null), d = y(() => {
    a(!l);
  }, [l]), s = y(
    (_) => {
      (_.key === "Escape" || _.key === "ArrowUp") && a(!1), _.key === "ArrowDown" && a(!0);
    },
    []
  ), u = y(
    (_) => {
      let h = _.relatedTarget?.parentNode;
      for (let g = 0; g < 8; g++)
        if (h = h?.parentNode, h === i.current)
          return;
      a(!1);
    },
    []
  );
  return n.items !== void 0 ? /* @__PURE__ */ r.jsxs(
    "li",
    {
      className: `${b.subnav} ${l ? b.open : ""}`,
      onBlur: u,
      ref: i,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: b.top_menu_container, children: [
          t(n.label, n.url, void 0),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: d,
              onKeyUp: s,
              "aria-label": `${n.label}`,
              "aria-expanded": l,
              className: b.expand
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: b.subnav_content, children: /* @__PURE__ */ r.jsx("ul", { children: o(n.items, n.url) }) })
      ]
    }
  ) : /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("div", { className: b.top_menu_container, children: [
    t(n.label, n.url),
    /* @__PURE__ */ r.jsx("div", { className: b.expand_dummy })
  ] }) }, n.label);
}
function Ze({
  menuLink: t,
  topMenuItem: n,
  subMenu: o,
  unCheckSideMenu: l
}) {
  const [a, i] = k(!1), d = L(null), [s, u] = k(!1);
  O(() => {
    u(!0);
  }, []);
  const _ = y(() => {
    i(!a);
  }, [a]);
  return n.items !== void 0 ? /* @__PURE__ */ r.jsxs("li", { className: b.subnav, children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        "aria-expanded": a,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${n.label}`,
        onClick: () => {
          d.current?.click();
        },
        className: `${b.top__menu} ${s ? "show-inline" : "hide"}`
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "label",
      {
        className: `${b.top__menu} ${s ? "hide" : "show-inline"}`,
        children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "checkbox",
              name: "top_menu",
              ref: d,
              value: n.label,
              onClick: _,
              role: "menuitemcheckbox"
            }
          ),
          `Expandable ${n.label}`
        ]
      }
    ),
    t(n.label, n.url, l),
    /* @__PURE__ */ r.jsx("div", { className: b.subnav_content, children: /* @__PURE__ */ r.jsx("ul", { children: o(n.items, n.url, l) }) })
  ] }, n.label) : /* @__PURE__ */ r.jsx("li", { children: t(n.label, n.url, l) }, n.label);
}
function Qe({
  menuLink: t,
  homeLink: n,
  homeLogoLink: o,
  model: l,
  shortcutComponent: a,
  mobileStyle: i = {},
  desktopStyle: d = {},
  desktopClassName: s = "",
  mobileClassName: u = "",
  menuName: _ = void 0
}) {
  const h = L(null), [g, f] = k(!1), [v, R] = k(!1);
  O(() => {
    R(!0);
  }, []);
  const j = (E, w) => w === void 0 || w === "" ? E : w.replace(/^#/, `${E}#`), A = () => {
    h.current && (h.current.checked = !1, document.body.style.overflow = "auto");
  }, P = (E) => {
    const w = E.target.checked;
    f(w), document.body.style.overflow = w ? "hidden" : "auto";
  }, Y = (E, w, J) => E.map(($) => /* @__PURE__ */ r.jsx("li", { children: t(
    $.label,
    j(w, $.url),
    J
  ) }, $.label)), U = l.map((E) => /* @__PURE__ */ r.jsx(
    Xe,
    {
      menuLink: t,
      topMenuItem: E,
      subMenu: Y
    },
    E.label
  )), z = l.map((E) => /* @__PURE__ */ r.jsx(
    Ze,
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
        className: `${b.mobile__nav} ${u}`,
        style: i,
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: b["mobile-menu"], children: [
            /* @__PURE__ */ r.jsxs("div", { className: b.menu_hamburger, children: [
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  "aria-expanded": g === !0,
                  "aria-haspopup": !0,
                  className: `${b.hamb} ${v ? "show" : "hide"}`,
                  "aria-label": _ || "Hamburger Menu",
                  onClick: () => {
                    h.current?.click();
                  },
                  children: /* @__PURE__ */ r.jsx("span", { className: b.hamb_line })
                }
              ),
              /* @__PURE__ */ r.jsx(
                "label",
                {
                  className: v ? "hide" : "show",
                  "aria-label": _ || "Hamburger Menu",
                  children: /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      className: b.side__menu,
                      type: "checkbox",
                      ref: h,
                      onChange: P
                    }
                  )
                }
              )
            ] }),
            n("/", A, -1),
            a && a
          ] }),
          /* @__PURE__ */ r.jsxs("nav", { className: b.menu, children: [
            /* @__PURE__ */ r.jsx("ul", { role: "menu", children: z }),
            " "
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "nav",
      {
        className: `${b.desktop__nav} ${s}`,
        style: d,
        "aria-label": _,
        children: /* @__PURE__ */ r.jsxs("ul", { children: [
          /* @__PURE__ */ r.jsx("li", { children: o(b.home_logo) }),
          U,
          /* @__PURE__ */ r.jsx("li", { children: a && a })
        ] })
      }
    )
  ] });
}
const dn = fe(Qe, () => !0), Ke = "_container_1er0x_1", en = "_reversed_1er0x_14", ce = {
  container: Ke,
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
      children: t.map(({ content: l, id: a }, i) => /* @__PURE__ */ r.jsx("li", { children: l }, `sc-${i}-${a}`))
    }
  );
}
export {
  ln as Accordion,
  cn as Announcement,
  dn as Menu,
  un as MiniMenu,
  Qe as MutableMenu,
  _n as ScrollableCard,
  tn as consoleReportHandler,
  he as debounce,
  an as htmlConvertor,
  sn as reportWebVitals,
  rn as useNavigationListener,
  on as useWindowListener
};
