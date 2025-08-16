import Z, { useEffect as O, useState as k, useCallback as y, useMemo as me, useRef as L, memo as fe } from "react";
const tn = ({
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
function rn(r) {
  console.log(r);
}
const be = (r) => (n) => {
  r({
    ...n,
    delta: n.delta * 1e3
  });
}, sn = (r) => {
  r && r instanceof Function && import("./web-vitals-bWb0IoaQ.js").then(({ onCLS: n, onINP: a, onLCP: o }) => {
    n(be(r)), a(r), o(r);
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
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(o, l, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      i = {};
      for (var s in l)
        s !== "key" && (i[s] = l[s]);
    } else i = l;
    return l = i.ref, {
      $$typeof: r,
      type: o,
      key: d,
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
function pe() {
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
        var m = c.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return m.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
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
      var e = r(this.type);
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
              j(x[p]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(x);
      if (K.call(c, "key")) {
        x = r(e);
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
      if (x = null, m !== void 0 && (a(m), x = "" + m), d(c) && (a(c.key), x = "" + c.key), "key" in c) {
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
        l(),
        m,
        V,
        q
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === v && e._store && (e._store.validated = 1);
    }
    var f = Z, v = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), U = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), z = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, de = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var ee, ne = {}, te = f.react_stack_bottom_frame.bind(
      f,
      i
    )(), re = M(o(i)), se = {};
    F.Fragment = g, F.jsx = function(e, c, m, p, N) {
      var T = 1e4 > z.recentlyCreatedOwnerStacks++;
      return h(
        e,
        c,
        m,
        !1,
        p,
        N,
        T ? Error("react-stack-top-frame") : te,
        T ? M(o(e)) : re
      );
    }, F.jsxs = function(e, c, m, p, N) {
      var T = 1e4 > z.recentlyCreatedOwnerStacks++;
      return h(
        e,
        c,
        m,
        !0,
        p,
        N,
        T ? Error("react-stack-top-frame") : te,
        T ? M(o(e)) : re
      );
    };
  }()), F;
}
var le;
function xe() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? D.exports = ve() : D.exports = pe()), D.exports;
}
var t = xe();
const X = `
`, Q = "[\\.|,]", Ee = new RegExp(
  `.*\\]${Q}?$`
), ge = new RegExp(
  `\\]${Q}?$`,
  "g"
), je = new RegExp(
  `${Q}$`
);
function an(r, n) {
  function a(s, u) {
    if (Ee.exec(s) && s.indexOf("|") > -1) {
      const _ = s.replace(
        ge,
        "]"
      ), j = _.substring(
        1,
        _.length - 1
      ).split("|"), f = j[0], v = j[1].replaceAll(
        X,
        " "
      );
      return /* @__PURE__ */ t.jsxs(Z.Fragment, { children: [
        n(f, v),
        je.exec(s) ? `${s.slice(-1)}` : ""
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
  })(r).split(" ").map((s, u) => s.length < 2 ? s : s.startsWith("*") ? /* @__PURE__ */ t.jsx("strong", { children: s.substring(1, s.length) }, s) : s.startsWith("[") ? a(s, u) : s === "!!" ? /* @__PURE__ */ t.jsx("br", {}, s) : s.replaceAll(X, " ")).reduce(
    (s, u) => [...s, " ", u],
    []
  );
  return d.shift(), /* @__PURE__ */ t.jsx(t.Fragment, { children: d });
}
const on = () => {
  const [r, n] = k({
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
}, ke = "_accordion_8a78m_1", Re = "_tab_8a78m_24", we = "_selectable_8a78m_29", Te = "_tab__content_8a78m_42", B = {
  accordion: ke,
  tab: Re,
  selectable: we,
  tab__content: Te
};
function ln({
  model: r,
  groupName: n,
  isSingle: a = !0
}) {
  const [o, l] = k(""), i = y(
    (s) => {
      const u = s.currentTarget;
      o === u.value ? (u.checked = !1, l("")) : l(u.value);
    },
    [o]
  ), d = me(
    () => r.map((s, u) => /* @__PURE__ */ t.jsx(
      ye,
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
  return /* @__PURE__ */ t.jsx("div", { className: B.accordion, children: d });
}
function ye({
  label: r,
  isSingle: n,
  value: a,
  groupName: o,
  onInputClick: l,
  content: i
}) {
  const [d, s] = k(!1);
  return O(() => {
    s(!0);
  }, []), /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `${B.tab} ${d ? B.selectable : ""}`,
      children: [
        /* @__PURE__ */ t.jsxs("label", { children: [
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
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: B.tab__content, children: /* @__PURE__ */ t.jsx("div", { children: i }) })
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
  ariaAnnouncementTitle: r,
  announcements: n,
  classes: a = ""
}) {
  const [o, l] = k(0), i = () => l(o - 1 >= 0 ? o - 1 : n.length - 1), d = () => l(n.length > o + 1 ? o + 1 : 0), s = n.length === 1;
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
        !s && /* @__PURE__ */ t.jsx("button", { onClick: d, className: C.button, children: /* @__PURE__ */ t.jsx("i", { "aria-label": "next announcement" }) }),
        /* @__PURE__ */ t.jsx("label", { className: C.close, "aria-label": "Close Announcement", children: /* @__PURE__ */ t.jsx("input", { type: "checkbox" }) })
      ]
    }
  );
}
const Se = "_minimenu_5h854_1", Ce = "_sticky_5h854_1", Pe = "_underline_5h854_33", H = {
  minimenu: Se,
  sticky: Ce,
  underline: Pe
};
function un({ model: r, onScrollMonitor: n }) {
  const [a, o] = k(0), l = L([]), i = L(null), [d, s] = k(0), u = y(() => {
    n && n(), i.current && (window.scrollY > d ? i.current.classList.add(H.sticky) : i.current.classList.remove(H.sticky));
  }, [d, n]), _ = y(
    (f) => {
      const v = f[0].target, R = r.findIndex((P) => P.hashId === v.id), g = R < 0 ? 0 : R, A = l.current[g];
      A !== null && f[0].isIntersecting && (A.scrollIntoViewIfNeeded(!0), o(g));
    },
    [r]
  ), h = y(() => {
    const f = new IntersectionObserver(_, {
      threshold: [0.3]
      //never accurate but it's the best
    }), v = new IntersectionObserver(_, {
      threshold: [1]
    });
    return r.forEach((R) => {
      const g = document.getElementById(R.hashId);
      g !== null && (g.clientHeight < window.innerHeight ? v.observe(g) : f.observe(g));
    }), [f, v];
  }, [_, r]), j = y(
    (f) => () => {
      o(f);
    },
    []
  );
  return O(() => {
    const f = h();
    return s(i.current?.getBoundingClientRect().top || 0), u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u), f.forEach((v) => v.disconnect());
    };
  }, [u, h]), /* @__PURE__ */ t.jsx("nav", { className: H.minimenu, ref: i, children: r.map((f, v) => /* @__PURE__ */ t.jsxs(Z.Fragment, { children: [
    v !== 0 && /* @__PURE__ */ t.jsx("hr", {}),
    /* @__PURE__ */ t.jsx(
      "a",
      {
        href: `#${f.hashId}`,
        ref: (R) => {
          l.current[v] = R;
        },
        className: v === a ? `${H.underline} italic` : void 0,
        onClick: j(v),
        children: /* @__PURE__ */ t.jsx("span", { children: f.title })
      }
    )
  ] }, f.hashId)) });
}
const We = "_desktop__nav_mntil_1", Fe = "_mobile__nav_mntil_1", Le = "_top_menu_container_mntil_6", Ye = "_expand_mntil_12", De = "_expand_dummy_mntil_13", He = "_home_logo_mntil_53", Be = "_subnav_content_mntil_57", Ue = "_subnav_mntil_57", Je = "_open_mntil_67", Ie = "_menu_mntil_109", ze = "_hamb_mntil_136", Me = "_hamb_line_mntil_144", Ve = "_menu_hamburger_mntil_170", qe = "_side__menu_mntil_178", Ge = "_top__menu_mntil_195", b = {
  desktop__nav: We,
  mobile__nav: Fe,
  top_menu_container: Le,
  expand: Ye,
  expand_dummy: De,
  home_logo: He,
  subnav_content: Be,
  subnav: Ue,
  open: Je,
  menu: Ie,
  "mobile-menu": "_mobile-menu_mntil_129",
  hamb: ze,
  hamb_line: Me,
  menu_hamburger: Ve,
  side__menu: qe,
  top__menu: Ge
};
function Xe({
  menuLink: r,
  topMenuItem: n,
  subMenu: a
}) {
  const [o, l] = k(!1), i = L(null), d = y(() => {
    l(!o);
  }, [o]), s = y(
    (_) => {
      (_.key === "Escape" || _.key === "ArrowUp") && l(!1), _.key === "ArrowDown" && l(!0);
    },
    []
  ), u = y(
    (_) => {
      let h = _.relatedTarget?.parentNode;
      for (let j = 0; j < 8; j++)
        if (h = h?.parentNode, h === i.current)
          return;
      l(!1);
    },
    []
  );
  return n.items !== void 0 ? /* @__PURE__ */ t.jsxs(
    "li",
    {
      className: `${b.subnav} ${o ? b.open : ""}`,
      onBlur: u,
      ref: i,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: b.top_menu_container, children: [
          r(n.label, n.url, void 0),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: d,
              onKeyUp: s,
              "aria-label": `${n.label}`,
              "aria-expanded": o,
              className: b.expand
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: b.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { children: a(n.items, n.url) }) })
      ]
    }
  ) : /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("div", { className: b.top_menu_container, children: [
    r(n.label, n.url),
    /* @__PURE__ */ t.jsx("div", { className: b.expand_dummy })
  ] }) }, n.label);
}
function Ze({
  menuLink: r,
  topMenuItem: n,
  subMenu: a,
  unCheckSideMenu: o
}) {
  const [l, i] = k(!1), d = L(null), [s, u] = k(!1);
  O(() => {
    u(!0);
  }, []);
  const _ = y(() => {
    i(!l);
  }, [l]);
  return n.items !== void 0 ? /* @__PURE__ */ t.jsxs("li", { className: b.subnav, children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        "aria-expanded": l,
        "aria-haspopup": !0,
        "aria-label": `Expandable ${n.label}`,
        onClick: () => {
          d.current?.click();
        },
        className: `${b.top__menu} ${s ? "show-inline" : "hide"}`
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "label",
      {
        className: `${b.top__menu} ${s ? "hide" : "show-inline"}`,
        children: [
          /* @__PURE__ */ t.jsx(
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
    r(n.label, n.url, o),
    /* @__PURE__ */ t.jsx("div", { className: b.subnav_content, children: /* @__PURE__ */ t.jsx("ul", { children: a(n.items, n.url, o) }) })
  ] }, n.label) : /* @__PURE__ */ t.jsx("li", { children: r(n.label, n.url, o) }, n.label);
}
function Qe({
  menuLink: r,
  homeLink: n,
  homeLogoLink: a,
  model: o,
  shortcutComponent: l,
  mobileStyle: i = {},
  desktopStyle: d = {},
  desktopClassName: s = "",
  mobileClassName: u = "",
  menuName: _ = void 0
}) {
  const h = L(null), [j, f] = k(!1), [v, R] = k(!1);
  O(() => {
    R(!0);
  }, []);
  const g = (E, w) => w === void 0 || w === "" ? E : w.replace(/^#/, `${E}#`), A = () => {
    h.current && (h.current.checked = !1, document.body.style.overflow = "auto");
  }, P = (E) => {
    const w = E.target.checked;
    f(w), document.body.style.overflow = w ? "hidden" : "auto";
  }, Y = (E, w, I) => E.map(($) => /* @__PURE__ */ t.jsx("li", { children: r(
    $.label,
    g(w, $.url),
    I
  ) }, $.label)), U = o.map((E) => /* @__PURE__ */ t.jsx(
    Xe,
    {
      menuLink: r,
      topMenuItem: E,
      subMenu: Y
    },
    E.label
  )), J = o.map((E) => /* @__PURE__ */ t.jsx(
    Ze,
    {
      menuLink: r,
      topMenuItem: E,
      subMenu: Y,
      unCheckSideMenu: A
    },
    E.label
  ));
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `${b.mobile__nav} ${u}`,
        style: i,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: b["mobile-menu"], children: [
            /* @__PURE__ */ t.jsxs("div", { className: b.menu_hamburger, children: [
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  "aria-expanded": j === !0,
                  "aria-haspopup": !0,
                  className: `${b.hamb} ${v ? "show" : "hide"}`,
                  "aria-label": _ || "Hamburger Menu",
                  onClick: () => {
                    h.current?.click();
                  },
                  children: /* @__PURE__ */ t.jsx("span", { className: b.hamb_line })
                }
              ),
              /* @__PURE__ */ t.jsx(
                "label",
                {
                  className: v ? "hide" : "show",
                  "aria-label": _ || "Hamburger Menu",
                  children: /* @__PURE__ */ t.jsx(
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
            l
          ] }),
          /* @__PURE__ */ t.jsxs("nav", { className: b.menu, children: [
            /* @__PURE__ */ t.jsx("ul", { role: "menu", children: J }),
            " "
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "nav",
      {
        className: `${b.desktop__nav} ${s}`,
        style: d,
        "aria-label": _,
        children: /* @__PURE__ */ t.jsxs("ul", { children: [
          /* @__PURE__ */ t.jsx("li", { children: a(b.home_logo) }),
          U,
          /* @__PURE__ */ t.jsx("li", { children: l })
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
  ln as Accordion,
  cn as Announcement,
  dn as Menu,
  un as MiniMenu,
  Qe as MutableMenu,
  _n as ScrollableCard,
  rn as consoleReportHandler,
  he as debounce,
  an as htmlConvertor,
  sn as reportWebVitals,
  tn as useNavigationListener,
  on as useWindowListener
};
