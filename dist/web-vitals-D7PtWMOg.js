var P, q = -1, m = function(t) {
  addEventListener("pageshow", function(n) {
    n.persisted && (q = n.timeStamp, t(n));
  }, !0);
}, B = function() {
  return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
}, b = function() {
  var t = B();
  return t && t.activationStart || 0;
}, l = function(t, n) {
  var i = B(), r = "navigate";
  return q >= 0 ? r = "back-forward-cache" : i && (document.prerendering || b() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : i.type && (r = i.type.replace(/_/g, "-"))), { name: t, value: n === void 0 ? -1 : n, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r };
}, p = function(t, n, i) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      var r = new PerformanceObserver(function(e) {
        Promise.resolve().then(function() {
          n(e.getEntries());
        });
      });
      return r.observe(Object.assign({ type: t, buffered: !0 }, i || {})), r;
    }
  } catch {
  }
}, v = function(t, n, i, r) {
  var e, a;
  return function(c) {
    n.value >= 0 && (c || r) && ((a = n.value - (e || 0)) || e === void 0) && (e = n.value, n.delta = a, n.rating = function(u, s) {
      return u > s[1] ? "poor" : u > s[0] ? "needs-improvement" : "good";
    }(n.value, i), t(n));
  };
}, S = function(t) {
  requestAnimationFrame(function() {
    return requestAnimationFrame(function() {
      return t();
    });
  });
}, w = function(t) {
  var n = function(i) {
    i.type !== "pagehide" && document.visibilityState !== "hidden" || t(i);
  };
  addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
}, j = function(t) {
  var n = !1;
  return function(i) {
    n || (t(i), n = !0);
  };
}, h = -1, M = function() {
  return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
}, y = function(t) {
  document.visibilityState === "hidden" && h > -1 && (h = t.type === "visibilitychange" ? t.timeStamp : 0, J());
}, F = function() {
  addEventListener("visibilitychange", y, !0), addEventListener("prerenderingchange", y, !0);
}, J = function() {
  removeEventListener("visibilitychange", y, !0), removeEventListener("prerenderingchange", y, !0);
}, D = function() {
  return h < 0 && (h = M(), F(), m(function() {
    setTimeout(function() {
      h = M(), F();
    }, 0);
  })), { get firstHiddenTime() {
    return h;
  } };
}, I = function(t) {
  document.prerendering ? addEventListener("prerenderingchange", function() {
    return t();
  }, !0) : t();
}, k = [1800, 3e3], K = function(t, n) {
  n = n || {}, I(function() {
    var i, r = D(), e = l("FCP"), a = p("paint", function(c) {
      c.forEach(function(u) {
        u.name === "first-contentful-paint" && (a.disconnect(), u.startTime < r.firstHiddenTime && (e.value = Math.max(u.startTime - b(), 0), e.entries.push(u), i(!0)));
      });
    });
    a && (i = v(t, e, k, n.reportAllChanges), m(function(c) {
      e = l("FCP"), i = v(t, e, k, n.reportAllChanges), S(function() {
        e.value = performance.now() - c.timeStamp, i(!0);
      });
    }));
  });
}, N = [0.1, 0.25], V = function(t, n) {
  n = n || {}, K(j(function() {
    var i, r = l("CLS", 0), e = 0, a = [], c = function(s) {
      s.forEach(function(o) {
        if (!o.hadRecentInput) {
          var d = a[0], T = a[a.length - 1];
          e && o.startTime - T.startTime < 1e3 && o.startTime - d.startTime < 5e3 ? (e += o.value, a.push(o)) : (e = o.value, a = [o]);
        }
      }), e > r.value && (r.value = e, r.entries = a, i());
    }, u = p("layout-shift", c);
    u && (i = v(t, r, N, n.reportAllChanges), w(function() {
      c(u.takeRecords()), i(!0);
    }), m(function() {
      e = 0, r = l("CLS", 0), i = v(t, r, N, n.reportAllChanges), S(function() {
        return i();
      });
    }), setTimeout(i, 0));
  }));
}, _ = 0, C = 1 / 0, g = 0, Q = function(t) {
  t.forEach(function(n) {
    n.interactionId && (C = Math.min(C, n.interactionId), g = Math.max(g, n.interactionId), _ = g ? (g - C) / 7 + 1 : 0);
  });
}, z = function() {
  return P ? _ : performance.interactionCount || 0;
}, U = function() {
  "interactionCount" in performance || P || (P = p("event", Q, { type: "event", buffered: !0, durationThreshold: 0 }));
}, x = [200, 500], G = 0, R = function() {
  return z() - G;
}, f = [], E = {}, H = function(t) {
  var n = f[f.length - 1], i = E[t.interactionId];
  if (i || f.length < 10 || t.duration > n.latency) {
    if (i)
      i.entries.push(t), i.latency = Math.max(i.latency, t.duration);
    else {
      var r = { id: t.interactionId, latency: t.duration, entries: [t] };
      E[r.id] = r, f.push(r);
    }
    f.sort(function(e, a) {
      return a.latency - e.latency;
    }), f.splice(10).forEach(function(e) {
      delete E[e.id];
    });
  }
}, W = function(t, n) {
  n = n || {}, I(function() {
    var i;
    U();
    var r, e = l("INP"), a = function(u) {
      u.forEach(function(d) {
        d.interactionId && H(d), d.entryType === "first-input" && !f.some(function(T) {
          return T.entries.some(function(A) {
            return d.duration === A.duration && d.startTime === A.startTime;
          });
        }) && H(d);
      });
      var s, o = (s = Math.min(f.length - 1, Math.floor(R() / 50)), f[s]);
      o && o.latency !== e.value && (e.value = o.latency, e.entries = o.entries, r());
    }, c = p("event", a, { durationThreshold: (i = n.durationThreshold) !== null && i !== void 0 ? i : 40 });
    r = v(t, e, x, n.reportAllChanges), c && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && c.observe({ type: "first-input", buffered: !0 }), w(function() {
      a(c.takeRecords()), e.value < 0 && R() > 0 && (e.value = 0, e.entries = []), r(!0);
    }), m(function() {
      f = [], G = z(), e = l("INP"), r = v(t, e, x, n.reportAllChanges);
    }));
  });
}, O = [2500, 4e3], L = {}, X = function(t, n) {
  n = n || {}, I(function() {
    var i, r = D(), e = l("LCP"), a = function(s) {
      var o = s[s.length - 1];
      o && o.startTime < r.firstHiddenTime && (e.value = Math.max(o.startTime - b(), 0), e.entries = [o], i());
    }, c = p("largest-contentful-paint", a);
    if (c) {
      i = v(t, e, O, n.reportAllChanges);
      var u = j(function() {
        L[e.id] || (a(c.takeRecords()), c.disconnect(), L[e.id] = !0, i(!0));
      });
      ["keydown", "click"].forEach(function(s) {
        addEventListener(s, function() {
          return setTimeout(u, 0);
        }, !0);
      }), w(u), m(function(s) {
        e = l("LCP"), i = v(t, e, O, n.reportAllChanges), S(function() {
          e.value = performance.now() - s.timeStamp, L[e.id] = !0, i(!0);
        });
      });
    }
  });
};
export {
  N as CLSThresholds,
  k as FCPThresholds,
  x as INPThresholds,
  O as LCPThresholds,
  V as getCLS,
  K as getFCP,
  W as getINP,
  X as getLCP,
  V as onCLS,
  K as onFCP,
  W as onINP,
  X as onLCP
};
