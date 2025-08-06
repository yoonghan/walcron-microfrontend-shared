let N = -1;
const m = (t) => {
  addEventListener("pageshow", (e) => {
    e.persisted && (N = e.timeStamp, t(e));
  }, !0);
}, l = (t, e, i, n) => {
  let r, s;
  return (a) => {
    e.value >= 0 && (a || n) && (s = e.value - (r ?? 0), (s || r === void 0) && (r = e.value, e.delta = s, e.rating = ((o, d) => o > d[1] ? "poor" : o > d[0] ? "needs-improvement" : "good")(e.value, i), t(e)));
  };
}, L = (t) => {
  requestAnimationFrame(() => requestAnimationFrame(() => t()));
}, q = () => {
  const t = performance.getEntriesByType("navigation")[0];
  if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t;
}, g = () => q()?.activationStart ?? 0, h = (t, e = -1) => {
  const i = q();
  let n = "navigate";
  return N >= 0 ? n = "back-forward-cache" : i && (document.prerendering || g() > 0 ? n = "prerender" : document.wasDiscarded ? n = "restore" : i.type && (n = i.type.replace(/_/g, "-"))), { name: t, value: e, rating: "good", delta: 0, entries: [], id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`, navigationType: n };
}, y = /* @__PURE__ */ new WeakMap();
function E(t, e) {
  return y.get(t) || y.set(t, new e()), y.get(t);
}
class O {
  t;
  i = 0;
  o = [];
  h(e) {
    if (e.hadRecentInput) return;
    const i = this.o[0], n = this.o.at(-1);
    this.i && i && n && e.startTime - n.startTime < 1e3 && e.startTime - i.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]), this.t?.(e);
  }
}
const f = (t, e, i = {}) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      const n = new PerformanceObserver((r) => {
        Promise.resolve().then(() => {
          e(r.getEntries());
        });
      });
      return n.observe({ type: t, buffered: !0, ...i }), n;
    }
  } catch {
  }
}, S = (t) => {
  let e = !1;
  return () => {
    e || (t(), e = !0);
  };
};
let p = -1;
const R = /* @__PURE__ */ new Set(), I = () => document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0, C = (t) => {
  if (document.visibilityState === "hidden") {
    if (t.type === "visibilitychange") for (const e of R) e();
    isFinite(p) || (p = t.type === "visibilitychange" ? t.timeStamp : 0, removeEventListener("prerenderingchange", C, !0));
  }
}, T = () => {
  if (p < 0) {
    const t = g();
    p = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((i) => i.name === "hidden" && i.startTime > t)[0]?.startTime) ?? I(), addEventListener("visibilitychange", C, !0), addEventListener("prerenderingchange", C, !0), m(() => {
      setTimeout(() => {
        p = I();
      });
    });
  }
  return { get firstHiddenTime() {
    return p;
  }, onHidden(t) {
    R.add(t);
  } };
}, w = (t) => {
  document.prerendering ? addEventListener("prerenderingchange", () => t(), !0) : t();
}, A = [1800, 3e3], _ = (t, e = {}) => {
  w(() => {
    const i = T();
    let n, r = h("FCP");
    const s = f("paint", (a) => {
      for (const o of a) o.name === "first-contentful-paint" && (s.disconnect(), o.startTime < i.firstHiddenTime && (r.value = Math.max(o.startTime - g(), 0), r.entries.push(o), n(!0)));
    });
    s && (n = l(t, r, A, e.reportAllChanges), m((a) => {
      r = h("FCP"), n = l(t, r, A, e.reportAllChanges), L(() => {
        r.value = performance.now() - a.timeStamp, n(!0);
      });
    }));
  });
}, M = [0.1, 0.25], G = (t, e = {}) => {
  const i = T();
  _(S(() => {
    let n, r = h("CLS", 0);
    const s = E(e, O), a = (d) => {
      for (const c of d) s.h(c);
      s.i > r.value && (r.value = s.i, r.entries = s.o, n());
    }, o = f("layout-shift", a);
    o && (n = l(t, r, M, e.reportAllChanges), i.onHidden(() => {
      a(o.takeRecords()), n(!0);
    }), m(() => {
      s.i = 0, r = h("CLS", 0), n = l(t, r, M, e.reportAllChanges), L(() => n());
    }), setTimeout(n));
  }));
};
let B = 0, P = 1 / 0, v = 0;
const $ = (t) => {
  for (const e of t) e.interactionId && (P = Math.min(P, e.interactionId), v = Math.max(v, e.interactionId), B = v ? (v - P) / 7 + 1 : 0);
};
let b;
const k = () => b ? B : performance.interactionCount ?? 0, W = () => {
  "interactionCount" in performance || b || (b = f("event", $, { type: "event", buffered: !0, durationThreshold: 0 }));
};
let F = 0;
class j {
  u = [];
  l = /* @__PURE__ */ new Map();
  m;
  p;
  v() {
    F = k(), this.u.length = 0, this.l.clear();
  }
  L() {
    const e = Math.min(this.u.length - 1, Math.floor((k() - F) / 50));
    return this.u[e];
  }
  h(e) {
    if (this.m?.(e), !e.interactionId && e.entryType !== "first-input") return;
    const i = this.u.at(-1);
    let n = this.l.get(e.interactionId);
    if (n || this.u.length < 10 || e.duration > i.P) {
      if (n ? e.duration > n.P ? (n.entries = [e], n.P = e.duration) : e.duration === n.P && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = { id: e.interactionId, entries: [e], P: e.duration }, this.l.set(n.id, n), this.u.push(n)), this.u.sort((r, s) => s.P - r.P), this.u.length > 10) {
        const r = this.u.splice(10);
        for (const s of r) this.l.delete(s.id);
      }
      this.p?.(n);
    }
  }
}
const D = (t) => {
  const e = globalThis.requestIdleCallback || setTimeout;
  document.visibilityState === "hidden" ? t() : (t = S(t), addEventListener("visibilitychange", t, { once: !0, capture: !0 }), e(() => {
    t(), removeEventListener("visibilitychange", t, { capture: !0 });
  }));
}, H = [200, 500], J = (t, e = {}) => {
  if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
  const i = T();
  w(() => {
    W();
    let n, r = h("INP");
    const s = E(e, j), a = (d) => {
      D(() => {
        for (const u of d) s.h(u);
        const c = s.L();
        c && c.P !== r.value && (r.value = c.P, r.entries = c.entries, n());
      });
    }, o = f("event", a, { durationThreshold: e.durationThreshold ?? 40 });
    n = l(t, r, H, e.reportAllChanges), o && (o.observe({ type: "first-input", buffered: !0 }), i.onHidden(() => {
      a(o.takeRecords()), n(!0);
    }), m(() => {
      s.v(), r = h("INP"), n = l(t, r, H, e.reportAllChanges);
    }));
  });
};
class z {
  m;
  h(e) {
    this.m?.(e);
  }
}
const x = [2500, 4e3], K = (t, e = {}) => {
  w(() => {
    const i = T();
    let n, r = h("LCP");
    const s = E(e, z), a = (d) => {
      e.reportAllChanges || (d = d.slice(-1));
      for (const c of d) s.h(c), c.startTime < i.firstHiddenTime && (r.value = Math.max(c.startTime - g(), 0), r.entries = [c], n());
    }, o = f("largest-contentful-paint", a);
    if (o) {
      n = l(t, r, x, e.reportAllChanges);
      const d = S(() => {
        a(o.takeRecords()), o.disconnect(), n(!0);
      }), c = (u) => {
        u.isTrusted && (D(d), removeEventListener(u.type, c, { capture: !0 }));
      };
      for (const u of ["keydown", "click", "visibilitychange"]) addEventListener(u, c, { capture: !0 });
      m((u) => {
        r = h("LCP"), n = l(t, r, x, e.reportAllChanges), L(() => {
          r.value = performance.now() - u.timeStamp, n(!0);
        });
      });
    }
  });
};
export {
  M as CLSThresholds,
  A as FCPThresholds,
  H as INPThresholds,
  x as LCPThresholds,
  G as onCLS,
  _ as onFCP,
  J as onINP,
  K as onLCP
};
