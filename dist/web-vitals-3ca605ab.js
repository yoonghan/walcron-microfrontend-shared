var p, h, R, g, O = -1, l = function(t) {
  addEventListener("pageshow", function(e) {
    e.persisted && (O = e.timeStamp, t(e));
  }, !0);
}, S = function() {
  return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
}, y = function() {
  var t = S();
  return t && t.activationStart || 0;
}, f = function(t, e) {
  var r = S(), i = "navigate";
  return O >= 0 ? i = "back-forward-cache" : r && (document.prerendering || y() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))), { name: t, value: e === void 0 ? -1 : e, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: i };
}, E = function(t, e, r) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      var i = new PerformanceObserver(function(n) {
        Promise.resolve().then(function() {
          e(n.getEntries());
        });
      });
      return i.observe(Object.assign({ type: t, buffered: !0 }, r || {})), i;
    }
  } catch {
  }
}, d = function(t, e, r, i) {
  var n, a;
  return function(c) {
    e.value >= 0 && (c || i) && ((a = e.value - (n || 0)) || n === void 0) && (n = e.value, e.delta = a, e.rating = function(u, o) {
      return u > o[1] ? "poor" : u > o[0] ? "needs-improvement" : "good";
    }(e.value, r), t(e));
  };
}, w = function(t) {
  requestAnimationFrame(function() {
    return requestAnimationFrame(function() {
      return t();
    });
  });
}, F = function(t) {
  var e = function(r) {
    r.type !== "pagehide" && document.visibilityState !== "hidden" || t(r);
  };
  addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0);
}, b = function(t) {
  var e = !1;
  return function(r) {
    e || (t(r), e = !0);
  };
}, v = -1, A = function() {
  return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
}, T = function(t) {
  document.visibilityState === "hidden" && v > -1 && (v = t.type === "visibilitychange" ? t.timeStamp : 0, W());
}, D = function() {
  addEventListener("visibilitychange", T, !0), addEventListener("prerenderingchange", T, !0);
}, W = function() {
  removeEventListener("visibilitychange", T, !0), removeEventListener("prerenderingchange", T, !0);
}, P = function() {
  return v < 0 && (v = A(), D(), l(function() {
    setTimeout(function() {
      v = A(), D();
    }, 0);
  })), { get firstHiddenTime() {
    return v;
  } };
}, L = function(t) {
  document.prerendering ? addEventListener("prerenderingchange", function() {
    return t();
  }, !0) : t();
}, k = [1800, 3e3], X = function(t, e) {
  e = e || {}, L(function() {
    var r, i = P(), n = f("FCP"), a = E("paint", function(c) {
      c.forEach(function(u) {
        u.name === "first-contentful-paint" && (a.disconnect(), u.startTime < i.firstHiddenTime && (n.value = Math.max(u.startTime - y(), 0), n.entries.push(u), r(!0)));
      });
    });
    a && (r = d(t, n, k, e.reportAllChanges), l(function(c) {
      n = f("FCP"), r = d(t, n, k, e.reportAllChanges), w(function() {
        n.value = performance.now() - c.timeStamp, r(!0);
      });
    }));
  });
}, B = [0.1, 0.25], z = function(t, e) {
  e = e || {}, X(b(function() {
    var r, i = f("CLS", 0), n = 0, a = [], c = function(o) {
      o.forEach(function(s) {
        if (!s.hadRecentInput) {
          var U = a[0], V = a[a.length - 1];
          n && s.startTime - V.startTime < 1e3 && s.startTime - U.startTime < 5e3 ? (n += s.value, a.push(s)) : (n = s.value, a = [s]);
        }
      }), n > i.value && (i.value = n, i.entries = a, r());
    }, u = E("layout-shift", c);
    u && (r = d(t, i, B, e.reportAllChanges), F(function() {
      c(u.takeRecords()), r(!0);
    }), l(function() {
      n = 0, i = f("CLS", 0), r = d(t, i, B, e.reportAllChanges), w(function() {
        return r();
      });
    }), setTimeout(r, 0));
  }));
}, m = { passive: !0, capture: !0 }, Y = /* @__PURE__ */ new Date(), I = function(t, e) {
  p || (p = e, h = t, R = /* @__PURE__ */ new Date(), j(removeEventListener), q());
}, q = function() {
  if (h >= 0 && h < R - Y) {
    var t = { entryType: "first-input", name: p.type, target: p.target, cancelable: p.cancelable, startTime: p.timeStamp, processingStart: p.timeStamp + h };
    g.forEach(function(e) {
      e(t);
    }), g = [];
  }
}, Z = function(t) {
  if (t.cancelable) {
    var e = (t.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - t.timeStamp;
    t.type == "pointerdown" ? function(r, i) {
      var n = function() {
        I(r, i), c();
      }, a = function() {
        c();
      }, c = function() {
        removeEventListener("pointerup", n, m), removeEventListener("pointercancel", a, m);
      };
      addEventListener("pointerup", n, m), addEventListener("pointercancel", a, m);
    }(e, t) : I(e, t);
  }
}, j = function(t) {
  ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
    return t(e, Z, m);
  });
}, M = [100, 300], G = function(t, e) {
  e = e || {}, L(function() {
    var r, i = P(), n = f("FID"), a = function(o) {
      o.startTime < i.firstHiddenTime && (n.value = o.processingStart - o.startTime, n.entries.push(o), r(!0));
    }, c = function(o) {
      o.forEach(a);
    }, u = E("first-input", c);
    r = d(t, n, M, e.reportAllChanges), u && F(b(function() {
      c(u.takeRecords()), u.disconnect();
    })), u && l(function() {
      var o;
      n = f("FID"), r = d(t, n, M, e.reportAllChanges), g = [], h = -1, p = null, j(addEventListener), o = a, g.push(o), q();
    });
  });
}, x = [2500, 4e3], C = {}, J = function(t, e) {
  e = e || {}, L(function() {
    var r, i = P(), n = f("LCP"), a = function(o) {
      var s = o[o.length - 1];
      s && s.startTime < i.firstHiddenTime && (n.value = Math.max(s.startTime - y(), 0), n.entries = [s], r());
    }, c = E("largest-contentful-paint", a);
    if (c) {
      r = d(t, n, x, e.reportAllChanges);
      var u = b(function() {
        C[n.id] || (a(c.takeRecords()), c.disconnect(), C[n.id] = !0, r(!0));
      });
      ["keydown", "click"].forEach(function(o) {
        addEventListener(o, u, !0);
      }), F(u), l(function(o) {
        n = f("LCP"), r = d(t, n, x, e.reportAllChanges), w(function() {
          n.value = performance.now() - o.timeStamp, C[n.id] = !0, r(!0);
        });
      });
    }
  });
}, H = [800, 1800], _ = function t(e) {
  document.prerendering ? L(function() {
    return t(e);
  }) : document.readyState !== "complete" ? addEventListener("load", function() {
    return t(e);
  }, !0) : setTimeout(e, 0);
}, K = function(t, e) {
  e = e || {};
  var r = f("TTFB"), i = d(t, r, H, e.reportAllChanges);
  _(function() {
    var n = S();
    if (n) {
      var a = n.responseStart;
      if (a <= 0 || a > performance.now())
        return;
      r.value = Math.max(a - y(), 0), r.entries = [n], i(!0), l(function() {
        r = f("TTFB", 0), (i = d(t, r, H, e.reportAllChanges))(!0);
      });
    }
  });
};
export {
  B as CLSThresholds,
  k as FCPThresholds,
  M as FIDThresholds,
  x as LCPThresholds,
  H as TTFBThresholds,
  z as getCLS,
  X as getFCP,
  G as getFID,
  J as getLCP,
  K as getTTFB,
  z as onCLS,
  X as onFCP,
  G as onFID,
  J as onLCP,
  K as onTTFB
};
