var P, q = -1, m = function(e) {
  addEventListener("pageshow", function(t) {
    t.persisted && (q = t.timeStamp, e(t));
  }, !0);
}, B = function() {
  return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
}, b = function() {
  var e = B();
  return e && e.activationStart || 0;
}, l = function(e, t) {
  var r = B(), i = "navigate";
  return q >= 0 ? i = "back-forward-cache" : r && (document.prerendering || b() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))), { name: e, value: t === void 0 ? -1 : t, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: i };
}, p = function(e, t, r) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
      var i = new PerformanceObserver(function(n) {
        Promise.resolve().then(function() {
          t(n.getEntries());
        });
      });
      return i.observe(Object.assign({ type: e, buffered: !0 }, r || {})), i;
    }
  } catch {
  }
}, v = function(e, t, r, i) {
  var n, a;
  return function(u) {
    t.value >= 0 && (u || i) && ((a = t.value - (n || 0)) || n === void 0) && (n = t.value, t.delta = a, t.rating = function(c, s) {
      return c > s[1] ? "poor" : c > s[0] ? "needs-improvement" : "good";
    }(t.value, r), e(t));
  };
}, S = function(e) {
  requestAnimationFrame(function() {
    return requestAnimationFrame(function() {
      return e();
    });
  });
}, w = function(e) {
  var t = function(r) {
    r.type !== "pagehide" && document.visibilityState !== "hidden" || e(r);
  };
  addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0);
}, j = function(e) {
  var t = !1;
  return function(r) {
    t || (e(r), t = !0);
  };
}, h = -1, M = function() {
  return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
}, y = function(e) {
  document.visibilityState === "hidden" && h > -1 && (h = e.type === "visibilitychange" ? e.timeStamp : 0, J());
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
}, I = function(e) {
  document.prerendering ? addEventListener("prerenderingchange", function() {
    return e();
  }, !0) : e();
}, k = [1800, 3e3], K = function(e, t) {
  t = t || {}, I(function() {
    var r, i = D(), n = l("FCP"), a = p("paint", function(u) {
      u.forEach(function(c) {
        c.name === "first-contentful-paint" && (a.disconnect(), c.startTime < i.firstHiddenTime && (n.value = Math.max(c.startTime - b(), 0), n.entries.push(c), r(!0)));
      });
    });
    a && (r = v(e, n, k, t.reportAllChanges), m(function(u) {
      n = l("FCP"), r = v(e, n, k, t.reportAllChanges), S(function() {
        n.value = performance.now() - u.timeStamp, r(!0);
      });
    }));
  });
}, N = [0.1, 0.25], V = function(e, t) {
  t = t || {}, K(j(function() {
    var r, i = l("CLS", 0), n = 0, a = [], u = function(s) {
      s.forEach(function(o) {
        if (!o.hadRecentInput) {
          var d = a[0], T = a[a.length - 1];
          n && o.startTime - T.startTime < 1e3 && o.startTime - d.startTime < 5e3 ? (n += o.value, a.push(o)) : (n = o.value, a = [o]);
        }
      }), n > i.value && (i.value = n, i.entries = a, r());
    }, c = p("layout-shift", u);
    c && (r = v(e, i, N, t.reportAllChanges), w(function() {
      u(c.takeRecords()), r(!0);
    }), m(function() {
      n = 0, i = l("CLS", 0), r = v(e, i, N, t.reportAllChanges), S(function() {
        return r();
      });
    }), setTimeout(r, 0));
  }));
}, _ = 0, C = 1 / 0, g = 0, Q = function(e) {
  e.forEach(function(t) {
    t.interactionId && (C = Math.min(C, t.interactionId), g = Math.max(g, t.interactionId), _ = g ? (g - C) / 7 + 1 : 0);
  });
}, z = function() {
  return P ? _ : performance.interactionCount || 0;
}, U = function() {
  "interactionCount" in performance || P || (P = p("event", Q, { type: "event", buffered: !0, durationThreshold: 0 }));
}, x = [200, 500], G = 0, R = function() {
  return z() - G;
}, f = [], E = {}, H = function(e) {
  var t = f[f.length - 1], r = E[e.interactionId];
  if (r || f.length < 10 || e.duration > t.latency) {
    if (r) r.entries.push(e), r.latency = Math.max(r.latency, e.duration);
    else {
      var i = { id: e.interactionId, latency: e.duration, entries: [e] };
      E[i.id] = i, f.push(i);
    }
    f.sort(function(n, a) {
      return a.latency - n.latency;
    }), f.splice(10).forEach(function(n) {
      delete E[n.id];
    });
  }
}, W = function(e, t) {
  t = t || {}, I(function() {
    var r;
    U();
    var i, n = l("INP"), a = function(c) {
      c.forEach(function(d) {
        d.interactionId && H(d), d.entryType === "first-input" && !f.some(function(T) {
          return T.entries.some(function(A) {
            return d.duration === A.duration && d.startTime === A.startTime;
          });
        }) && H(d);
      });
      var s, o = (s = Math.min(f.length - 1, Math.floor(R() / 50)), f[s]);
      o && o.latency !== n.value && (n.value = o.latency, n.entries = o.entries, i());
    }, u = p("event", a, { durationThreshold: (r = t.durationThreshold) !== null && r !== void 0 ? r : 40 });
    i = v(e, n, x, t.reportAllChanges), u && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && u.observe({ type: "first-input", buffered: !0 }), w(function() {
      a(u.takeRecords()), n.value < 0 && R() > 0 && (n.value = 0, n.entries = []), i(!0);
    }), m(function() {
      f = [], G = z(), n = l("INP"), i = v(e, n, x, t.reportAllChanges);
    }));
  });
}, O = [2500, 4e3], L = {}, X = function(e, t) {
  t = t || {}, I(function() {
    var r, i = D(), n = l("LCP"), a = function(s) {
      var o = s[s.length - 1];
      o && o.startTime < i.firstHiddenTime && (n.value = Math.max(o.startTime - b(), 0), n.entries = [o], r());
    }, u = p("largest-contentful-paint", a);
    if (u) {
      r = v(e, n, O, t.reportAllChanges);
      var c = j(function() {
        L[n.id] || (a(u.takeRecords()), u.disconnect(), L[n.id] = !0, r(!0));
      });
      ["keydown", "click"].forEach(function(s) {
        addEventListener(s, function() {
          return setTimeout(c, 0);
        }, !0);
      }), w(c), m(function(s) {
        n = l("LCP"), r = v(e, n, O, t.reportAllChanges), S(function() {
          n.value = performance.now() - s.timeStamp, L[n.id] = !0, r(!0);
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
