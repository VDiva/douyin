/*! For license information please see NewDanmakuPlugin.cc394532.js.LICENSE.txt */
(self.webpackChunkdouyin_live_v2 = self.webpackChunkdouyin_live_v2 || []).push([
  [3474, 5223],
  {
    37559: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => f });
      var i = n(43500);
      const o = "P5h9eomI",
        r = "DXUCJYVN";
      var a = n(79705),
        s = n.n(a),
        l = n(56402),
        u = n.n(l),
        c = n(45939);
      function f(e) {
        let { message: t, sec_uid: n, emojiReflex: a } = e;
        return i.createElement(
          "div",
          { className: s()(o, n === u()(t, "payload.user.secUid") ? r : "") },
          i.createElement(c.Z, { content: t.payload.content, reflex: a })
        );
      }
    },
    61994: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => m });
      var i = n(56402),
        o = n.n(i),
        r = n(59440),
        a = n.n(r),
        s = n(43500);
      const l = "VMJPFNGB",
        u = "PFdbHoYj",
        c = "oGRV4DYm",
        f = "UEkP6aHe",
        h = "w7g6O8KZ";
      var d = n(45434),
        p = n(38298);
      function m(e) {
        var t, n, i, r;
        let { message: m, giftPages: g } = e;
        const v =
            null !== (t = null == m ? void 0 : m.payload) && void 0 !== t
              ? t
              : {},
          y = Number(v.repeatCount) || 1,
          b = (0, d.dU)(null == v ? void 0 : v.giftId),
          _ =
            (null == g || null === (n = g[1]) || void 0 === n
              ? void 0
              : n.giftList) || [],
          w =
            (null == _ ||
            null ===
              (i = a()(_).call(
                _,
                (e) =>
                  (null == e ? void 0 : e.id) ===
                  Number(null == v ? void 0 : v.giftId)
              )) ||
            void 0 === i
              ? void 0
              : i.icon) || "",
          k =
            "\u9001\u51fa".concat(
              null == _ ||
                null ===
                  (r = a()(_).call(
                    _,
                    (e) =>
                      (null == e ? void 0 : e.id) ===
                      Number(null == v ? void 0 : v.giftId)
                  )) ||
                void 0 === r
                ? void 0
                : r.name
            ) || 0;
        return s.createElement(
          "div",
          { className: l },
          s.createElement("img", {
            className: u,
            src: globalThis
              .getFilterXss()
              .filterUrl(
                (0, p.uC)(o()(v, "gift.icon.urlListList[0]", w)),
                null,
                { logType: "js.href/src", reportOnly: !1 }
              ),
            alt: "",
          }),
          s.createElement(
            "span",
            { className: c },
            o()(v, "user.nickname", ""),
            "\xa0",
            o()(v, "gift.describe", b ? k : "")
          ),
          s.createElement("span", { className: f }, "x"),
          s.createElement("span", { className: h }, y)
        );
      }
    },
    25964: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => L });
      var i = n(9120),
        o = n.n(i),
        r = n(92012),
        a = n.n(r),
        s = n(21805),
        l = n.n(s),
        u = n(81711),
        c = n.n(u),
        f = n(92637),
        h = n.n(f),
        d = n(51975),
        p = n.n(d),
        m = n(43500),
        g = n(35771),
        v = n(19192),
        y = n(57128),
        b = n(81273),
        _ = (n(94904), n(21472)),
        w = n(37559),
        k = n(61994),
        x = n(87432),
        O = n(32583),
        E = n(65463),
        C = n(81734),
        S = n(85070),
        j = n(52962),
        P = n(50524);
      const T = "undefined" != typeof window ? m.useLayoutEffect : () => {},
        M = (e) => !e.method || e.method !== x.kc.WEBCAST_GIFT_MESSAGE;
      const L = function (e) {
        let {
          on: t = !0,
          feature: n = !0,
          livingRoomErrorStatus: i,
          isVerifyed: r,
          isRemenber: s,
          changeDanmuOn: u,
          filterGift: f,
          roomStatus: d,
        } = e;
        const { player: L } = (0, g.n)(),
          {
            userStore: { userInfo: I },
            roomStore: { emojiReflex: D },
            giftStore: { giftPages: z },
          } = (0, C.Z)(),
          { sec_uid: A } = I,
          R = m.useRef(!1),
          B = m.useRef(!1),
          N = m.useRef(i),
          [U, q] = m.useState(t),
          { liveChatroomDanmu: H } = (0, v.j)(),
          V = (0, m.useCallback)((e) => {
            if ("switch_danmu" === e.action) q(e.isOpen);
          }, []);
        m.useEffect(() => {
          N.current = i;
        }, [i]);
        const F = m.useCallback(() => {
            B.current = !0;
          }, []),
          Z = m.useCallback(() => {
            B.current = !1;
          }, []);
        m.useEffect(
          () => (
            null == L || L.on(P.PAUSE, F),
            null == L || L.on(P.PLAY, Z),
            null == L || L.on(P.USER_ACTION, V),
            () => {
              null == L || L.off(P.PAUSE, F),
                null == L || L.off(P.PLAY, Z),
                null == L || L.off(P.USER_ACTION, V);
            }
          ),
          []
        );
        const G = (0, m.useMemo)(() => {
          var e, t;
          return Math.min(
            o()(
              (e = o()((t = null != z ? z : [])).call(
                t,
                (e, t) => a()(e).call(e, t.giftList),
                []
              ))
            ).call(e, (e, t) => Math.max(e, t.name.length), 0),
            10
          );
        }, [z]);
        (0, m.useEffect)(
          () => (
            L.registerPlugin(b.ZP, {
              closeDefaultBtn: !1,
              defaultOpen: !1,
              comments: [],
              area: { start: 0.01, end: 0.4 },
              channelSize: 40,
              fontSize: 20,
              isLive: !0,
              ext: {
                maxCommentsLength: 100,
                hooks: {
                  bulletCreateEl(e) {
                    var t;
                    const {
                      type: n,
                      root: i,
                      sec_uid: r,
                      emojiReflex: a,
                      giftPages: s,
                      message: l,
                    } = null !== (t = e._) && void 0 !== t ? t : {};
                    if (i)
                      switch (n) {
                        case "chat": {
                          var u, c, f;
                          i.render(
                            m.createElement(w.Z, {
                              sec_uid: r,
                              emojiReflex: a,
                              message: l,
                            })
                          );
                          const t = o()(
                            (u = (
                              null !==
                                (c =
                                  null == l ||
                                  null === (f = l.payload) ||
                                  void 0 === f
                                    ? void 0
                                    : f.content) && void 0 !== c
                                ? c
                                : ""
                            ).split(/(\[.*?])/))
                          ).call(u, (e, t) => e + t.length + 1, 0);
                          e.style.width = "".concat(t + 1, "em");
                          break;
                        }
                        case "gift": {
                          var h, d, p, g, v, y, b, _;
                          i.render(
                            m.createElement(k.Z, { giftPages: s, message: l })
                          );
                          const t =
                              2 +
                              (null !==
                                (h =
                                  null == l ||
                                  null === (d = l.payload) ||
                                  void 0 === d ||
                                  null === (p = d.user) ||
                                  void 0 === p ||
                                  null === (g = p.nickname) ||
                                  void 0 === g
                                    ? void 0
                                    : g.length) && void 0 !== h
                                ? h
                                : 0),
                            n = Math.max(
                              null !==
                                (v =
                                  null == l ||
                                  null === (y = l.payload) ||
                                  void 0 === y ||
                                  null === (b = y.gift) ||
                                  void 0 === b ||
                                  null === (_ = b.describe) ||
                                  void 0 === _
                                    ? void 0
                                    : _.length) && void 0 !== v
                                ? v
                                : 0,
                              G
                            );
                          e.style.width = "".concat(t + n + 2, "em");
                          break;
                        }
                      }
                    return (e.style.height = "1em"), (e.el.id = e.id), e.el;
                  },
                  bulletDetached(e) {
                    var t;
                    const { root: n } =
                      null !== (t = e._) && void 0 !== t ? t : {};
                    n.unmount(), (e.el = null), (e._ = null);
                  },
                },
              },
            }),
            () => {
              L.unRegisterPlugin(b.ZP);
            }
          ),
          []
        ),
          (0, m.useEffect)(() => {
            n ? L.plugins.danmu.showIcon() : L.plugins.danmu.hideIcon(),
              U && n ? L.plugins.danmu.start() : L.plugins.danmu.stop();
            const e = U && n;
            L.plugins.danmuicon.switchState(e),
              d === O.LV.END && L.plugins.danmu.hideIcon();
          }, [U, n, d]);
        const W = (0, m.useCallback)(
            (e) => {
              var t, n, i, o, r, a;
              l()((t = [S.$.LIVING_END, S.$.LIVING_PAUSE])).call(
                t,
                N.current
              ) ||
                B.current ||
                (null == L ||
                null === (n = L.plugins) ||
                void 0 === n ||
                null === (i = n.danmu) ||
                void 0 === i ||
                null === (o = i.danmujs) ||
                void 0 === o
                  ? void 0
                  : o.state.comments.length) > 100 ||
                !R.current ||
                c()(
                  (r = h()(
                    (a = h()(e).call(
                      e,
                      (e) => (0, E.J$)(e) && (0, E.G$)(I.id_str, e)
                    ))
                  ).call(a, (e) => !f || M(e)))
                ).call(r, (e) => {
                  const t = document.createElement("div"),
                    n = _.createRoot(t);
                  L.plugins.danmu.sendComment({
                    prior: e.isMock,
                    duration: x.t0,
                    id: e.msgId,
                    el: t,
                    elLazyInit: !0,
                    disableCopyDOM: !0,
                    style: {},
                    _: {
                      type: "chat",
                      root: n,
                      sec_uid: A,
                      emojiReflex: D,
                      message: e,
                    },
                  });
                });
            },
            [A]
          ),
          $ = (0, m.useCallback)((e) => {
            var t, n, i, o, r, a;
            l()((t = [S.$.LIVING_END, S.$.LIVING_PAUSE])).call(t, N.current) ||
              B.current ||
              (null == L ||
              null === (n = L.plugins) ||
              void 0 === n ||
              null === (i = n.danmu) ||
              void 0 === i ||
              null === (o = i.danmujs) ||
              void 0 === o
                ? void 0
                : o.state.comments.length) > 100 ||
              !R.current ||
              H !== j.LiveCommonLibra.Off ||
              c()(
                (r = h()(
                  (a = h()(e).call(
                    e,
                    (e) => (0, E.J$)(e) && (0, E.G$)(I.id_str, e)
                  ))
                ).call(a, (e) => !f || M(e)))
              ).call(r, (e) => {
                const t = document.createElement("div"),
                  n = _.createRoot(t);
                L.plugins.danmu.sendComment({
                  prior: e.isMock,
                  duration: x.t0,
                  id: e.msgId,
                  el: t,
                  elLazyInit: !0,
                  disableCopyDOM: !0,
                  style: {},
                  _: { type: "gift", root: n, giftPages: z, message: e },
                });
              });
          }, []),
          Y = m.useMemo(
            () => "visible" === document.visibilityState,
            [document.visibilityState]
          ),
          J = m.useMemo(() => {
            var e;
            return p()((e = [Y, U, n])).call(e, Boolean);
          }, [Y, U, n]);
        (0, m.useEffect)(
          () => (
            J &&
              (y.ywV.subscribe(O.lm.WEBCAST_CHAT_MESSAGE, W),
              y.ywV.subscribe(O.lm.WEBCAST_GIFT_MESSAGE, $)),
            () => {
              y.ywV.unsubscribe(O.lm.WEBCAST_CHAT_MESSAGE, W),
                y.ywV.unsubscribe(O.lm.WEBCAST_GIFT_MESSAGE, $);
            }
          ),
          [I, r, J, W, $]
        );
        const X = (0, m.useCallback)(() => {
          R.current = "visible" === document.visibilityState;
        }, []);
        return (
          T(
            () => (
              X(),
              document.addEventListener("visibilitychange", X),
              () => {
                document.removeEventListener("visibilitychange", X);
              }
            ),
            []
          ),
          (0, m.useEffect)(() => {
            i === S.$.LIVING_END && L.plugins.danmu.clear();
          }, [i]),
          null
        );
      };
    },
    87432: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { kc: () => i, t0: () => o }),
        (function (e) {
          (e.WEBCAST_CHAT_MESSAGE = "WebcastChatMessage"),
            (e.WEBCAST_GIFT_MESSAGE = "WebcastGiftMessage");
        })(i || (i = {}));
      const o = 1e4;
    },
    75223: (e) => {
      window,
        (e.exports = (function (e) {
          var t = {};
          function n(i) {
            if (t[i]) return t[i].exports;
            var o = (t[i] = { i, l: !1, exports: {} });
            return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, i) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: i });
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var i = Object.create(null);
              if (
                (n.r(i),
                Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    i,
                    o,
                    function (t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return i;
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 4))
          );
        })([
          function (e, t, n) {
            "use strict";
            function i(e, t) {
              return e.classList
                ? Array.prototype.some.call(e.classList, function (e) {
                    return e === t;
                  })
                : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
            }
            function o(e, t) {
              e.classList
                ? t
                    .replace(/(^\s+|\s+$)/g, "")
                    .split(/\s+/g)
                    .forEach(function (t) {
                      t && e.classList.add(t);
                    })
                : i(e, t) || (e.className += " " + t);
            }
            function r(e, t) {
              e.classList
                ? t.split(/\s+/g).forEach(function (t) {
                    e.classList.remove(t);
                  })
                : i(e, t) &&
                  t.split(/\s+/g).forEach(function (t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ");
                  });
            }
            function a(e) {
              return Object.prototype.toString
                .call(e)
                .match(/([^\s.*]+)(?=]$)/g)[0];
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createDom = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "div",
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "",
                  o = document.createElement(e);
                return (
                  (o.className = i),
                  (o.innerHTML = t),
                  Object.keys(n).forEach(function (t) {
                    var i = t,
                      r = n[t];
                    "video" === e || "audio" === e
                      ? r && o.setAttribute(i, r)
                      : o.setAttribute(i, r);
                  }),
                  o
                );
              }),
              (t.hasClass = i),
              (t.addClass = o),
              (t.removeClass = r),
              (t.toggleClass = function (e, t) {
                t.split(/\s+/g).forEach(function (t) {
                  i(e, t) ? r(e, t) : o(e, t);
                });
              }),
              (t.findDom = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : document,
                  t = arguments[1],
                  n = void 0;
                try {
                  n = e.querySelector(t);
                } catch (i) {
                  t.startsWith("#") && (n = e.getElementById(t.slice(1)));
                }
                return n;
              }),
              (t.deepCopy = function e(t, n) {
                if ("Object" === a(n) && "Object" === a(t))
                  return (
                    Object.keys(n).forEach(function (i) {
                      "Object" !== a(n[i]) || n[i] instanceof Node
                        ? "Array" === a(n[i])
                          ? (t[i] =
                              "Array" === a(t[i]) ? t[i].concat(n[i]) : n[i])
                          : (t[i] = n[i])
                        : t[i]
                        ? e(t[i], n[i])
                        : (t[i] = n[i]);
                    }),
                    t
                  );
              }),
              (t.typeOf = a),
              (t.copyDom = function (e) {
                if (e && 1 === e.nodeType) {
                  var t = document.createElement(e.tagName);
                  return (
                    Array.prototype.forEach.call(e.attributes, function (e) {
                      t.setAttribute(e.name, e.value);
                    }),
                    e.innerHTML && (t.innerHTML = e.innerHTML),
                    t
                  );
                }
                return "";
              }),
              (t.attachEventListener = function (e, t, n, i) {
                i
                  ? (e.on(t, n),
                    (function (e, t, n, i) {
                      e.once(i, function o() {
                        e.off(t, n), e.off(i, o);
                      });
                    })(e, t, n, i))
                  : e.on(t, function i(o) {
                      n(o), e.off(t, i);
                    });
              }),
              (t.styleUtil = function (e, t, n) {
                var i = e.style;
                try {
                  i[t] = n;
                } catch (e) {
                  i.setProperty(t, n);
                }
              }),
              (t.styleCSSText = function (e, t) {
                var n = e.style;
                try {
                  n.cssText = t;
                } catch (e) {}
              }),
              (t.isNumber = function (e) {
                return "number" == typeof e && !Number.isNaN(e);
              }),
              (t.isFunction = function (e) {
                return "function" == typeof e;
              }),
              (t.throttle = function (e, t) {
                var n = this,
                  i = 0;
                return function () {
                  for (
                    var o = arguments.length, r = Array(o), a = 0;
                    a < o;
                    a++
                  )
                    r[a] = arguments[a];
                  clearTimeout(i),
                    (i = setTimeout(function () {
                      return e.apply(n, r);
                    }, t));
                };
              }),
              (t.hasOwnProperty = Object.prototype.hasOwnProperty);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i,
              o = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              r = (i = n(26)) && i.__esModule ? i : { default: i },
              a = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  o(e, [
                    {
                      key: "setLogger",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "";
                        this.logger = new r.default(e + ".js");
                      },
                    },
                  ]),
                  e
                );
              })();
            (t.default = a), (e.exports = t.default);
          },
          function (e, t, n) {
            "use strict";
            var i = n(18)();
            e.exports = function (e) {
              return e !== i && null !== e;
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function (e) {
              return null != e;
            };
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i,
              o = (i = n(5)) && i.__esModule ? i : { default: i };
            n(34), (t.default = o.default), (e.exports = t.default);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.DanmuJs = void 0);
            var i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = f(n(6)),
              r = n(25),
              a = f(n(1)),
              s = f(n(27)),
              l = f(n(32)),
              u = n(33),
              c = n(0);
            function f(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function h(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            }
            var d = (t.DanmuJs = (function (e) {
              function t(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = h(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                );
                n.setLogger("danmu"),
                  n.logger && n.logger.info("danmu.js version: " + r.version);
                var i = (n.config = {
                  overlap: !1,
                  area: { start: 0, end: 1, lines: void 0 },
                  hooks: void 0,
                  live: !1,
                  comments: [],
                  direction: "r2l",
                  needResizeObserver: !1,
                  dropStaleComments: !1,
                  channelSize: void 0,
                  maxCommentsLength: void 0,
                  bulletOffset: void 0,
                  interval: 2e3,
                  highScorePriority: !0,
                  chaseEffect: !0,
                });
                if (
                  ((0, c.deepCopy)(i, e),
                  (0, o.default)(n),
                  (n.globalHooks = {}),
                  i.hooks && n.hooks(i.hooks),
                  (n.hideArr = []),
                  (n.recycler = new l.default()),
                  (n.freezeId = null),
                  i.comments.forEach(function (e) {
                    (e.duration = e.duration ? e.duration : 5e3),
                      e.mode || (e.mode = "scroll");
                  }),
                  (n.container =
                    i.container && 1 === i.container.nodeType
                      ? i.container
                      : null),
                  !n.container)
                )
                  return (
                    n.emit("error", "container id can't be empty"), h(n, !1)
                  );
                if (i.containerStyle) {
                  var a = i.containerStyle;
                  Object.keys(a).forEach(function (e) {
                    this.container.style[e] = a[e];
                  });
                }
                return (
                  (0, c.addClass)(n.container, "danmu"),
                  (n.live = i.live),
                  (n.player = i.player),
                  (n.direction = i.direction),
                  (n.bulletBtn = new s.default(n)),
                  (n.main = n.bulletBtn.main),
                  (n.isReady = !0),
                  n.emit("ready"),
                  n.logger && n.logger.info("ready"),
                  n.addResizeObserver(),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                i(t, [
                  {
                    key: "hooks",
                    value: function (e) {
                      (0, c.deepCopy)(this.globalHooks, e);
                    },
                  },
                  {
                    key: "addResizeObserver",
                    value: function () {
                      var e = this;
                      this.config.needResizeObserver &&
                        (0, u.addObserver)(this.container, function () {
                          e.logger && e.logger.info("needResizeObserver"),
                            e.resize();
                        });
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      this.logger && this.logger.info("start"),
                        this.main.start();
                    },
                  },
                  {
                    key: "pause",
                    value: function () {
                      this.logger && this.logger.info("pause"),
                        this.main.pause();
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      this.logger && this.logger.info("play"), this.main.play();
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      this.logger && this.logger.info("stop"), this.main.stop();
                    },
                  },
                  {
                    key: "clear",
                    value: function () {
                      this.logger && this.logger.info("clear"),
                        this.main.clear();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      for (var e in ((0, u.unObserver)(this.container),
                      this.logger && this.logger.info("destroy"),
                      this.stop(),
                      this.bulletBtn.destroy(),
                      this.recycler.destroy(),
                      this))
                        delete this[e];
                      this.emit("destroy");
                    },
                  },
                  {
                    key: "sendComment",
                    value: function (e) {
                      var t = this.main,
                        n = this.logger;
                      n && n.info("sendComment: " + (e.txt || "[DOM Element]")),
                        t &&
                          (e.duration || (e.duration = 15e3),
                          e &&
                            e.id &&
                            e.duration &&
                            (e.el || e.elLazyInit || e.txt) &&
                            ((e.duration = e.duration ? e.duration : 5e3),
                            e.style ||
                              (e.style = { opacity: void 0, fontSize: void 0 }),
                            e.style &&
                              (this.opacity &&
                                this.opacity !== e.style.opacity &&
                                (e.style.opacity = this.opacity),
                              this.fontSize &&
                                this.fontSize !== e.style.fontSize &&
                                (e.style.fontSize = this.fontSize)),
                            e.prior || e.realTime
                              ? (t.data.unshift(e),
                                e.realTime && (t.readData(), t.dataHandle()))
                              : t.data.push(e),
                            t.sortData(),
                            t.keepPoolWatermark()));
                    },
                  },
                  {
                    key: "setCommentID",
                    value: function (e, t) {
                      var n = this;
                      this.logger &&
                        this.logger.info(
                          "setCommentID: oldID " + e + " newID " + t
                        ),
                        e &&
                          t &&
                          (this.main.data.some(function (n) {
                            return n.id === e && ((n.id = t), !0);
                          }),
                          this.main.queue.some(function (i) {
                            return (
                              i.id === e &&
                              ((i.id = t),
                              i.pauseMove(),
                              "paused" !== n.main.status && i.startMove(),
                              !0)
                            );
                          }));
                    },
                  },
                  {
                    key: "setCommentDuration",
                    value: function (e, t) {
                      var n = this;
                      this.logger &&
                        this.logger.info(
                          "setCommentDuration: id " + e + " duration " + t
                        ),
                        e &&
                          t &&
                          ((t = t || 5e3),
                          this.main.data.some(function (n) {
                            return n.id === e && ((n.duration = t), !0);
                          }),
                          this.main.queue.some(function (i) {
                            return (
                              i.id === e &&
                              ((i.duration = t),
                              i.pauseMove(),
                              "paused" !== n.main.status && i.startMove(),
                              !0)
                            );
                          }));
                    },
                  },
                  {
                    key: "setCommentLike",
                    value: function (e, t) {
                      this.logger &&
                        this.logger.info(
                          "setCommentLike: id " + e + " like " + t
                        ),
                        e &&
                          t &&
                          (this.main.data.some(function (n) {
                            return n.id === e && ((n.like = t), !0);
                          }),
                          this.main.queue.some(function (n) {
                            return (
                              n.id === e &&
                              (n.pauseMove(),
                              n.setLikeDom(t.el, t.style),
                              "paused" !== n.danmu.main.status && n.startMove(),
                              !0)
                            );
                          }));
                    },
                  },
                  {
                    key: "restartComment",
                    value: function (e) {
                      if (
                        (this.logger &&
                          this.logger.info("restartComment: id " + e),
                        e)
                      ) {
                        var t = this.main;
                        if ((this._releaseCtrl(e), "closed" === t.status))
                          return;
                        t.queue.some(function (n) {
                          return (
                            n.id === e &&
                            ("paused" !== t.status
                              ? n.startMove(!0)
                              : (n.status = "paused"),
                            !0)
                          );
                        });
                      }
                    },
                  },
                  {
                    key: "_releaseCtrl",
                    value: function (e) {
                      this.freezeId &&
                        e === this.freezeId &&
                        ((this.mouseControl = !1), (this.freezeId = null));
                    },
                  },
                  {
                    key: "_freezeCtrl",
                    value: function (e) {
                      (this.mouseControl = !0), (this.freezeId = e);
                    },
                  },
                  {
                    key: "freezeComment",
                    value: function (e) {
                      this.logger && this.logger.info("freezeComment: id " + e),
                        e &&
                          (this._freezeCtrl(e),
                          this.main.queue.some(function (t) {
                            return (
                              t.id === e &&
                              ((t.status = "forcedPause"),
                              t.pauseMove(),
                              t.el &&
                                t.el.style &&
                                (0, c.styleUtil)(t.el, "zIndex", 10),
                              !0)
                            );
                          }));
                    },
                  },
                  {
                    key: "removeComment",
                    value: function (e) {
                      this.logger && this.logger.info("removeComment: id " + e),
                        e &&
                          (this._releaseCtrl(e),
                          this.main.queue.some(function (t) {
                            return t.id === e && (t.remove(), !0);
                          }));
                    },
                  },
                  {
                    key: "updateComments",
                    value: function (e) {
                      var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      this.logger &&
                        this.logger.info(
                          "updateComments: " + e.length + ", isClear " + t
                        );
                      var n = this.main;
                      "boolean" == typeof t && t && (n.data = []),
                        (n.data = n.data.concat(e)),
                        n.sortData(),
                        n.keepPoolWatermark();
                    },
                  },
                  {
                    key: "setAllDuration",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "scroll",
                        t = this,
                        n = arguments[1],
                        i =
                          !(arguments.length > 2 && void 0 !== arguments[2]) ||
                          arguments[2];
                      this.logger &&
                        this.logger.info(
                          "setAllDuration: mode " +
                            e +
                            " duration " +
                            n +
                            " force " +
                            i
                        ),
                        n &&
                          ((n = n || 5e3),
                          i && (this.main.forceDuration = n),
                          this.main.data.forEach(function (t) {
                            e === t.mode && (t.duration = n);
                          }),
                          this.main.queue.forEach(function (i) {
                            e === i.mode &&
                              ((i.duration = n),
                              i.pauseMove(),
                              "paused" !== t.main.status && i.startMove());
                          }));
                    },
                  },
                  {
                    key: "setPlayRate",
                    value: function () {
                      var e = this,
                        t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "scroll",
                        n = arguments[1];
                      this.logger && this.logger.info("setPlayRate: " + n),
                        (0, c.isNumber)(n) &&
                          n > 0 &&
                          ((this.main.playRate = n),
                          this.main.queue.forEach(function (n) {
                            t === n.mode &&
                              (n.pauseMove(),
                              "paused" !== e.main.status && n.startMove());
                          }));
                    },
                  },
                  {
                    key: "setOpacity",
                    value: function (e) {
                      this.logger &&
                        this.logger.info("setOpacity: opacity " + e),
                        (this.container.style.opacity = e);
                    },
                  },
                  {
                    key: "setFontSize",
                    value: function (e, t) {
                      var n = this,
                        i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : { reflow: !0 };
                      this.logger &&
                        this.logger.info(
                          "setFontSize: size " + e + " channelSize " + t
                        ),
                        (this.fontSize = e + "px"),
                        e &&
                          (this.main.data.forEach(function (e) {
                            e.style && (e.style.fontSize = n.fontSize);
                          }),
                          this.main.queue.forEach(function (e) {
                            e.options.style || (e.options.style = {}),
                              (e.options.style.fontSize = n.fontSize),
                              e.setFontSize(n.fontSize),
                              t && ((e.top = e.channel_id[0] * t), e.topInit());
                          })),
                        t &&
                          ((this.config.channelSize = t),
                          i.reflow && this.main.channel.resizeSync());
                    },
                  },
                  {
                    key: "setArea",
                    value: function (e) {
                      this.logger && this.logger.info("setArea: area " + e),
                        (this.config.area = e),
                        !1 !== e.reflow && this.main.channel.resizeSync();
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "scroll";
                      this.logger && this.logger.info("hide: mode " + e),
                        this.hideArr.indexOf(e) < 0 && this.hideArr.push(e),
                        this.main.queue
                          .filter(function (t) {
                            return e === t.mode || ("color" === e && t.color);
                          })
                          .forEach(function (e) {
                            return e.remove();
                          });
                    },
                  },
                  {
                    key: "show",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "scroll";
                      this.logger && this.logger.info("show: mode " + e);
                      var t = this.hideArr.indexOf(e);
                      t > -1 && this.hideArr.splice(t, 1);
                    },
                  },
                  {
                    key: "setDirection",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "r2l";
                      this.logger &&
                        this.logger.info("setDirection: direction " + e),
                        (this.direction = e),
                        this.emit("changeDirection", e);
                    },
                  },
                  {
                    key: "resize",
                    value: function () {
                      this.logger && this.logger.info("resize"),
                        this.emit("channel_resize");
                    },
                  },
                  {
                    key: "status",
                    get: function () {
                      return this.main.status;
                    },
                  },
                  {
                    key: "state",
                    get: function () {
                      var e = this.main;
                      return {
                        status: e.status,
                        comments: e.data,
                        bullets: e.queue,
                        displayArea: e.channel.getRealOccupyArea(),
                      };
                    },
                  },
                  {
                    key: "containerPos",
                    get: function () {
                      return this.main.channel.containerPos;
                    },
                  },
                ]),
                t
              );
            })(a.default));
            t.default = d;
          },
          function (e, t, n) {
            "use strict";
            var i,
              o,
              r,
              a,
              s,
              l,
              u,
              c = n(7),
              f = n(24),
              h = Function.prototype.apply,
              d = Function.prototype.call,
              p = Object.create,
              m = Object.defineProperty,
              g = Object.defineProperties,
              v = Object.prototype.hasOwnProperty,
              y = { configurable: !0, enumerable: !1, writable: !0 };
            (o = function (e, t) {
              var n, o;
              return (
                f(t),
                (o = this),
                i.call(
                  this,
                  e,
                  (n = function () {
                    r.call(o, e, n), h.call(t, this, arguments);
                  })
                ),
                (n.__eeOnceListener__ = t),
                this
              );
            }),
              (s = {
                on: (i = function (e, t) {
                  var n;
                  return (
                    f(t),
                    v.call(this, "__ee__")
                      ? (n = this.__ee__)
                      : ((n = y.value = p(null)),
                        m(this, "__ee__", y),
                        (y.value = null)),
                    n[e]
                      ? "object" == typeof n[e]
                        ? n[e].push(t)
                        : (n[e] = [n[e], t])
                      : (n[e] = t),
                    this
                  );
                }),
                once: o,
                off: (r = function (e, t) {
                  var n, i, o, r;
                  if ((f(t), !v.call(this, "__ee__"))) return this;
                  if (!(n = this.__ee__)[e]) return this;
                  if ("object" == typeof (i = n[e]))
                    for (r = 0; (o = i[r]); ++r)
                      (o !== t && o.__eeOnceListener__ !== t) ||
                        (2 === i.length
                          ? (n[e] = i[r ? 0 : 1])
                          : i.splice(r, 1));
                  else (i !== t && i.__eeOnceListener__ !== t) || delete n[e];
                  return this;
                }),
                emit: (a = function (e) {
                  var t, n, i, o, r;
                  if (v.call(this, "__ee__") && (o = this.__ee__[e]))
                    if ("object" == typeof o) {
                      for (
                        n = arguments.length, r = new Array(n - 1), t = 1;
                        t < n;
                        ++t
                      )
                        r[t - 1] = arguments[t];
                      for (o = o.slice(), t = 0; (i = o[t]); ++t)
                        h.call(i, this, r);
                    } else
                      switch (arguments.length) {
                        case 1:
                          d.call(o, this);
                          break;
                        case 2:
                          d.call(o, this, arguments[1]);
                          break;
                        case 3:
                          d.call(o, this, arguments[1], arguments[2]);
                          break;
                        default:
                          for (
                            n = arguments.length, r = new Array(n - 1), t = 1;
                            t < n;
                            ++t
                          )
                            r[t - 1] = arguments[t];
                          h.call(o, this, r);
                      }
                }),
              }),
              (l = { on: c(i), once: c(o), off: c(r), emit: c(a) }),
              (u = g({}, l)),
              (e.exports = t =
                function (e) {
                  return null == e ? p(u) : g(Object(e), l);
                }),
              (t.methods = s);
          },
          function (e, t, n) {
            "use strict";
            var i = n(3),
              o = n(8),
              r = n(12),
              a = n(20),
              s = n(21);
            (e.exports = function (e, t) {
              var n, o, l, u, c;
              return (
                arguments.length < 2 || "string" != typeof e
                  ? ((u = t), (t = e), (e = null))
                  : (u = arguments[2]),
                i(e)
                  ? ((n = s.call(e, "c")),
                    (o = s.call(e, "e")),
                    (l = s.call(e, "w")))
                  : ((n = l = !0), (o = !1)),
                (c = { value: t, configurable: n, enumerable: o, writable: l }),
                u ? r(a(u), c) : c
              );
            }).gs = function (e, t, n) {
              var l, u, c, f;
              return (
                "string" != typeof e
                  ? ((c = n), (n = t), (t = e), (e = null))
                  : (c = arguments[3]),
                i(t)
                  ? o(t)
                    ? i(n)
                      ? o(n) || ((c = n), (n = void 0))
                      : (n = void 0)
                    : ((c = t), (t = n = void 0))
                  : (t = void 0),
                i(e)
                  ? ((l = s.call(e, "c")), (u = s.call(e, "e")))
                  : ((l = !0), (u = !1)),
                (f = { get: t, set: n, configurable: l, enumerable: u }),
                c ? r(a(c), f) : f
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var i = n(9),
              o = /^\s*class[\s{/}]/,
              r = Function.prototype.toString;
            e.exports = function (e) {
              return !!i(e) && !o.test(r.call(e));
            };
          },
          function (e, t, n) {
            "use strict";
            var i = n(10);
            e.exports = function (e) {
              if ("function" != typeof e) return !1;
              if (!hasOwnProperty.call(e, "length")) return !1;
              try {
                if ("number" != typeof e.length) return !1;
                if ("function" != typeof e.call) return !1;
                if ("function" != typeof e.apply) return !1;
              } catch (e) {
                return !1;
              }
              return !i(e);
            };
          },
          function (e, t, n) {
            "use strict";
            var i = n(11);
            e.exports = function (e) {
              if (!i(e)) return !1;
              try {
                return !!e.constructor && e.constructor.prototype === e;
              } catch (e) {
                return !1;
              }
            };
          },
          function (e, t, n) {
            "use strict";
            var i = n(3),
              o = { object: !0, function: !0, undefined: !0 };
            e.exports = function (e) {
              return !!i(e) && hasOwnProperty.call(o, typeof e);
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = n(13)() ? Object.assign : n(14);
          },
          function (e, t, n) {
            "use strict";
            e.exports = function () {
              var e,
                t = Object.assign;
              return (
                "function" == typeof t &&
                (t((e = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
                e.foo + e.bar + e.trzy === "razdwatrzy")
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var i = n(15),
              o = n(19),
              r = Math.max;
            e.exports = function (e, t) {
              var n,
                a,
                s,
                l = r(arguments.length, 2);
              for (
                e = Object(o(e)),
                  s = function (i) {
                    try {
                      e[i] = t[i];
                    } catch (e) {
                      n || (n = e);
                    }
                  },
                  a = 1;
                a < l;
                ++a
              )
                i((t = arguments[a])).forEach(s);
              if (void 0 !== n) throw n;
              return e;
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = n(16)() ? Object.keys : n(17);
          },
          function (e, t, n) {
            "use strict";
            e.exports = function () {
              try {
                return Object.keys("primitive"), !0;
              } catch (e) {
                return !1;
              }
            };
          },
          function (e, t, n) {
            "use strict";
            var i = n(2),
              o = Object.keys;
            e.exports = function (e) {
              return o(i(e) ? Object(e) : e);
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function () {};
          },
          function (e, t, n) {
            "use strict";
            var i = n(2);
            e.exports = function (e) {
              if (!i(e)) throw new TypeError("Cannot use null or undefined");
              return e;
            };
          },
          function (e, t, n) {
            "use strict";
            var i = n(2),
              o = Array.prototype.forEach,
              r = Object.create,
              a = function (e, t) {
                var n;
                for (n in e) t[n] = e[n];
              };
            e.exports = function (e) {
              var t = r(null);
              return (
                o.call(arguments, function (e) {
                  i(e) && a(Object(e), t);
                }),
                t
              );
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = n(22)() ? String.prototype.contains : n(23);
          },
          function (e, t, n) {
            "use strict";
            var i = "razdwatrzy";
            e.exports = function () {
              return (
                "function" == typeof i.contains &&
                !0 === i.contains("dwa") &&
                !1 === i.contains("foo")
              );
            };
          },
          function (e, t, n) {
            "use strict";
            var i = String.prototype.indexOf;
            e.exports = function (e) {
              return i.call(this, e, arguments[1]) > -1;
            };
          },
          function (e, t, n) {
            "use strict";
            e.exports = function (e) {
              if ("function" != typeof e)
                throw new TypeError(e + " is not a function");
              return e;
            };
          },
          function (e) {
            e.exports = JSON.parse('{"version":"1.1.9-1"}');
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o =
                "undefined" != typeof window &&
                window.location.href.indexOf("danmu-debug") > -1,
              r = (function () {
                function e(t) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.constructorName = t || "");
                }
                return (
                  i(e, [
                    {
                      key: "info",
                      value: function (e) {
                        for (
                          var t,
                            n = arguments.length,
                            i = Array(n > 1 ? n - 1 : 0),
                            r = 1;
                          r < n;
                          r++
                        )
                          i[r - 1] = arguments[r];
                        o &&
                          (t = console).log.apply(
                            t,
                            [
                              "[Danmu Log][" + this.constructorName + "]",
                              e,
                            ].concat(i)
                          );
                      },
                    },
                  ]),
                  e
                );
              })();
            (t.default = r), (e.exports = t.default);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = s(n(1)),
              r = s(n(28)),
              a = n(0);
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var l = (function (e) {
              function t(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return (
                  n.setLogger("control"),
                  (n.danmu = e),
                  (n.main = new r.default(e)),
                  e.config.defaultOff || n.main.start(),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                i(t, [
                  {
                    key: "createSwitch",
                    value: function () {
                      var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      return (
                        this.logger && this.logger.info("createSwitch"),
                        (this.switchBtn = (0, a.createDom)(
                          "dk-switch",
                          '<span class="txt">\u5f39</span>',
                          {},
                          "danmu-switch " + (e ? "danmu-switch-active" : "")
                        )),
                        this.switchBtn
                      );
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      for (var e in (this.logger && this.logger.info("destroy"),
                      this.main.destroy(),
                      this))
                        a.hasOwnProperty.call(this, e) && delete this[e];
                    },
                  },
                ]),
                t
              );
            })(o.default);
            (t.default = l), (e.exports = t.default);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = l(n(1)),
              r = l(n(29)),
              a = l(n(30)),
              s = n(0);
            function l(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var u = (function (e) {
              function t(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return (
                  n.setLogger("main"),
                  (n.danmu = e),
                  (n.container = e.container),
                  (n.channel = new a.default(e)),
                  (n.data = [].concat(e.config.comments)),
                  (n.playedData = []),
                  (n.queue = []),
                  (n.timer = null),
                  (n.playRate = 1),
                  (n.retryStatus = "normal"),
                  (n.interval = e.config.interval),
                  (n._status = "idle"),
                  (n._events = []),
                  n._bindEvents(),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                i(t, [
                  {
                    key: "destroy",
                    value: function () {
                      for (var e in (this.logger && this.logger.info("destroy"),
                      this._unbindEvents(),
                      this._cancelDataHandleTimer(),
                      this.channel.destroy(),
                      (this.data = []),
                      this))
                        delete this[e];
                    },
                  },
                  {
                    key: "_bindEvents",
                    value: function () {
                      var e = this,
                        t = this.danmu,
                        n = this.container;
                      this._unbindEvents(),
                        this._events.push([
                          t,
                          "bullet_remove",
                          function (t) {
                            var n = t.bullet,
                              i = e.data,
                              o = e.queue;
                            o.some(function (e, t) {
                              return e.id === n.id && (o.splice(t, 1), !0);
                            }),
                              i.some(function (e) {
                                return (
                                  e.id === n.id && ((e.attached_ = !1), !0)
                                );
                              });
                          },
                        ]),
                        this._events.push([
                          n,
                          "transitionend",
                          function (t) {
                            var n = e._getBulletByEvt(t);
                            (n.status = "end"), n.remove(!1);
                          },
                        ]),
                        (t.config.mouseControl || t.config.mouseEnterControl) &&
                          this._events.push([
                            n,
                            "mouseover",
                            function (t) {
                              var n,
                                i = e.danmu;
                              !i ||
                                (i.mouseControl &&
                                  i.config.mouseControlPause) ||
                                ((n = e._getBulletByEvt(t)) &&
                                  "waiting" !== n.status &&
                                  "end" !== n.status &&
                                  i.emit("bullet_hover", {
                                    bullet: n,
                                    event: t,
                                  }));
                            },
                          ]),
                        this._events.forEach(function (e) {
                          e[0].addEventListener
                            ? e[0].addEventListener(e[1], e[2], !1)
                            : e[0].on && e[0].on(e[1], e[2]);
                        });
                    },
                  },
                  {
                    key: "_unbindEvents",
                    value: function () {
                      this._events.length &&
                        (this._events.forEach(function (e) {
                          e[0].removeEventListener
                            ? e[0].removeEventListener(e[1], e[2], !1)
                            : e[0].off && e[0].off(e[1], e[2]);
                        }),
                        (this._events = []));
                    },
                  },
                  {
                    key: "_cancelDataHandleTimer",
                    value: function () {
                      this.handleId &&
                        (clearTimeout(this.handleId), (this.handleId = null)),
                        this.handleTimer &&
                          (clearTimeout(this.handleTimer),
                          (this.handleTimer = null));
                    },
                  },
                  {
                    key: "init",
                    value: function () {
                      var e = this;
                      (e.retryStatus = "normal"),
                        e.sortData(),
                        (function t() {
                          "closed" !== e._status || "stop" !== e.retryStatus
                            ? ("playing" === e._status &&
                                (e.readData(), e.dataHandle()),
                              ("stop" === e.retryStatus &&
                                "paused" !== e._status) ||
                                (e.handleTimer = setTimeout(function () {
                                  e.handleId = requestAnimationFrame(
                                    function () {
                                      t();
                                    }
                                  );
                                }, 250)))
                            : e._cancelDataHandleTimer();
                        })();
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      this.logger && this.logger.info("start"),
                        "playing" !== this._status &&
                          ((this._status = "playing"),
                          (this.queue = []),
                          (this.container.innerHTML = ""),
                          this.channel.reset(),
                          this.init());
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      this.logger && this.logger.info("stop"),
                        "closed" !== this._status &&
                          ((this._status = "closed"),
                          (this.retryStatus = "stop"),
                          (this.queue = []),
                          (this.container.innerHTML = ""),
                          this.channel.reset());
                    },
                  },
                  {
                    key: "clear",
                    value: function () {
                      this.logger && this.logger.info("clear"),
                        this.channel.reset(),
                        (this.data = []),
                        (this.queue = []),
                        (this.container.innerHTML = "");
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      var e = this;
                      if ("closed" !== this._status) {
                        this.logger && this.logger.info("play"),
                          (this._status = "playing");
                        var t = this.channel.channels;
                        t &&
                          t.length > 0 &&
                          ["scroll", "top", "bottom"].forEach(function (n) {
                            e.queue.forEach(function (e) {
                              e.startMove(), (e.resized = !0);
                            });
                            for (var i = 0; i < t.length; i++)
                              t[i].queue[n].forEach(function (e) {
                                e.resized = !1;
                              });
                          });
                      } else this.logger && this.logger.info("play ignored");
                    },
                  },
                  {
                    key: "pause",
                    value: function () {
                      if ("closed" !== this._status) {
                        this.logger && this.logger.info("pause"),
                          (this._status = "paused");
                        var e = this.channel.channels;
                        e &&
                          e.length > 0 &&
                          this.queue.forEach(function (e) {
                            e.pauseMove();
                          });
                      } else this.logger && this.logger.info("pause ignored");
                    },
                  },
                  {
                    key: "dataHandle",
                    value: function () {
                      "paused" !== this._status &&
                        "closed" !== this._status &&
                        this.queue.length &&
                        this.queue.forEach(function (e) {
                          "waiting" === e.status && e.startMove();
                        });
                    },
                  },
                  {
                    key: "readData",
                    value: function () {
                      var e = this.danmu,
                        t = this.interval,
                        n = this.channel,
                        i = e.player,
                        o = void 0,
                        a = void 0;
                      if (e.isReady) {
                        if (i) {
                          var l = i.currentTime
                            ? Math.floor(1e3 * i.currentTime)
                            : 0;
                          (a = this.data.filter(function (n) {
                            return (
                              !n.start &&
                                e.hideArr.indexOf(n.mode) < 0 &&
                                (!n.color || e.hideArr.indexOf("color") < 0) &&
                                (n.start = l),
                              !n.attached_ &&
                                e.hideArr.indexOf(n.mode) < 0 &&
                                (!n.color || e.hideArr.indexOf("color") < 0) &&
                                n.start - t <= l &&
                                l <= n.start + t
                            );
                          })),
                            e.config.highScorePriority &&
                              a.sort(function (e, t) {
                                return (
                                  (t.prior && !e.prior) ||
                                  (t.score || -1) - (e.score || -1)
                                );
                              }),
                            e.live && (this.data = []);
                        } else
                          0 === (a = this.data.splice(0, 1)).length &&
                            (a = this.playedData.splice(0, 1));
                        if (a.length > 0 && n.checkAvailableTrack(a[0].mode)) {
                          n.updatePos();
                          var u = 0;
                          e: for (var c, f = 0; f < a.length; f++)
                            if (
                              ((c = a[f]),
                              this.forceDuration &&
                                this.forceDuration !== c.duration &&
                                (c.duration = this.forceDuration),
                              (o = new r.default(e, c)) && !o.bulletCreateFail)
                            )
                              if (
                                (o.attach(),
                                (c.attached_ = !0),
                                n.addBullet(o).result)
                              )
                                this.queue.push(o), o.topInit(), (u = 0);
                              else {
                                for (var h in (o.detach(), o))
                                  s.hasOwnProperty.call(o, h) && delete o[h];
                                if (
                                  ((o = null),
                                  (c.attached_ = !1),
                                  c.noDiscard &&
                                    (c.prior
                                      ? this.data.unshift(c)
                                      : this.data.push(c)),
                                  0 === u)
                                )
                                  break e;
                                u--;
                              }
                            else {
                              if (0 === u) break e;
                              u--;
                            }
                        }
                      }
                    },
                  },
                  {
                    key: "sortData",
                    value: function () {
                      this.data.sort(function (e, t) {
                        return (e.start || -1) - (t.start || -1);
                      });
                    },
                  },
                  {
                    key: "keepPoolWatermark",
                    value: function () {
                      var e = this.danmu,
                        t = e.config,
                        n = e.player,
                        i = this.data,
                        o = [],
                        r = 0;
                      if (
                        "number" == typeof t.maxCommentsLength &&
                        i.length > t.maxCommentsLength
                      ) {
                        r = i.length - t.maxCommentsLength;
                        for (var a, s = 0; s < r; s++)
                          (a = i[s]).prior && !a.attached_ && o.push(i[s]);
                      } else if (t.dropStaleComments && n && n.currentTime) {
                        var l = Math.floor(1e3 * n.currentTime) - t.interval;
                        if (l > 0)
                          for (var u, c = 0; c < i.length; c++)
                            if (
                              ((u = i[c]).prior && !u.attached_ && o.push(i[c]),
                              u.start > l)
                            ) {
                              r = c;
                              break;
                            }
                      }
                      r > 0 && (i.splice(0, r), (this.data = o.concat(i)));
                    },
                  },
                  {
                    key: "_getBulletByEvt",
                    value: function (e) {
                      for (
                        var t,
                          n = e.target || e.srcElement,
                          i = this.queue,
                          o = void 0,
                          r = 0;
                        r < i.length;
                        r++
                      )
                        if (
                          (t = i[r]) &&
                          t.el &&
                          (t.el === n || t.el.contains(n))
                        ) {
                          o = t;
                          break;
                        }
                      return o;
                    },
                  },
                  {
                    key: "status",
                    get: function () {
                      return this._status;
                    },
                  },
                ]),
                t
              );
            })(o.default);
            (t.default = u), (e.exports = t.default);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Bullet = void 0);
            var i,
              o = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              r = (i = n(1)) && i.__esModule ? i : { default: i },
              a = n(0);
            function s(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            }
            var u = (t.Bullet = (function (e) {
              function t(e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                s(this, t);
                var i,
                  o = l(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                  ),
                  r = e.container,
                  a = e.recycler,
                  u = e.config;
                return (
                  o.setLogger("bullet"),
                  (o.danmu = e),
                  (o.options = n),
                  (o.duration = n.duration),
                  (o.id = n.id),
                  (o.container = r),
                  (o.mode =
                    "top" === n.mode || "bottom" === n.mode
                      ? n.mode
                      : "scroll"),
                  (o.start = n.start),
                  (o.prior = n.prior),
                  (o.realTime = n.realTime),
                  (o.color = n.color),
                  (o.bookChannelId = n.bookChannelId),
                  (o.reuseDOM = !0),
                  (o.noCopyEl = !(!u.disableCopyDOM && !n.disableCopyDOM)),
                  (o.recycler = a),
                  (o._fullySlideInScreenDuration = void 0),
                  (o._lastMoveTime = void 0),
                  (o.hooks = { bulletDetached: function () {} }),
                  (o.status = "waiting"),
                  n.elLazyInit ? o : ((i = o._makeEl()), l(o, i))
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                o(t, [
                  {
                    key: "_makeEl",
                    value: function () {
                      var e = this.danmu,
                        t = this.options,
                        n = e.config,
                        i = e.globalHooks,
                        o = void 0,
                        r = "",
                        s = t.style || {};
                      if (((s.perspective = "500em"), t.el || t.elLazyInit)) {
                        if (
                          (this.noCopyEl && (this.reuseDOM = !1), t.elLazyInit)
                        ) {
                          if ((0, a.isFunction)(i.bulletCreateEl))
                            try {
                              var l = i.bulletCreateEl(t);
                              l instanceof HTMLElement
                                ? (o = l)
                                : ((o = l.el),
                                  (0, a.isFunction)(l.bulletDetached) &&
                                    (this.hooks.bulletDetached =
                                      l.bulletDetached));
                            } catch (e) {}
                        } else if (1 === t.el.nodeType && !t.el.parentNode)
                          if (this.reuseDOM) {
                            var u = (0, a.copyDom)(t.el);
                            t.eventListeners &&
                              t.eventListeners.length > 0 &&
                              t.eventListeners.forEach(function (e) {
                                u.addEventListener(
                                  e.event,
                                  e.listener,
                                  e.useCapture || !1
                                );
                              }),
                              (o = this.recycler.use()).childNodes.length > 0 &&
                                (o.innerHTML = ""),
                              o.textContent && (o.textContent = ""),
                              o.appendChild(u);
                          } else o = t.el;
                      } else
                        "string" == typeof t.txt &&
                          ((o = this.recycler.use()).textContent = t.txt);
                      if (!o) return { bulletCreateFail: !0 };
                      var c = void 0;
                      if (
                        (0, a.isNumber)(n.bulletOffset) &&
                        n.bulletOffset >= 0
                      )
                        c = n.bulletOffset;
                      else {
                        var f = e.containerPos;
                        c = f.width / 10 > 100 ? 100 : f.width / 10;
                      }
                      var h = t.realTime ? 0 : Math.floor(Math.random() * c),
                        d = this.updateOffset(h, !0);
                      (s.left = d),
                        Object.keys(s).forEach(function (e) {
                          var t = e.replace(/[A-Z]/g, function (e) {
                            return "-" + e.toLowerCase();
                          });
                          r += t + ":" + s[e] + ";";
                        }),
                        (0, a.styleCSSText)(o, r),
                        (this.el = o),
                        t.like &&
                          t.like.el &&
                          this.setLikeDom(t.like.el, t.like.style);
                    },
                  },
                  {
                    key: "updateOffset",
                    value: function (e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      this.random = e;
                      var n = this.danmu.containerPos.width + e + "px";
                      return (
                        t ||
                          (0, a.styleUtil)(
                            this.el,
                            "left",
                            this.danmu.containerPos.width + e + "px"
                          ),
                        n
                      );
                    },
                  },
                  {
                    key: "attach",
                    value: function () {
                      this.options.elLazyInit && !this.el && this._makeEl();
                      var e = this.danmu,
                        t = this.options,
                        n = this.el,
                        i = e.globalHooks;
                      i.bulletAttaching && i.bulletAttaching(t),
                        this.container.contains(n) ||
                          this.container.appendChild(n),
                        (this.elPos = n.getBoundingClientRect()),
                        "b2t" === this.direction
                          ? ((this.width = this.elPos.height),
                            (this.height = this.elPos.width))
                          : ((this.width = this.elPos.width),
                            (this.height = this.elPos.height)),
                        this.moveV &&
                          (this.duration =
                            ((this.danmu.containerPos.width +
                              this.random +
                              this.width) /
                              this.moveV) *
                            1e3),
                        i.bulletAttached && i.bulletAttached(t, n);
                    },
                  },
                  {
                    key: "detach",
                    value: function () {
                      var e = this.el,
                        t = this.danmu,
                        n = this.options,
                        i = this.hooks,
                        o = t.globalHooks;
                      e &&
                        (o.bulletDetaching && o.bulletDetaching(n),
                        this.reuseDOM
                          ? this.recycler.unused(e)
                          : e.parentNode && e.parentNode.removeChild(e),
                        i.bulletDetached &&
                          (i.bulletDetached(n, e), delete i.bulletDetached),
                        o.bulletDetached && o.bulletDetached(n, e),
                        (this.el = null)),
                        (this.elPos = void 0);
                    },
                  },
                  {
                    key: "topInit",
                    value: function () {
                      this.logger &&
                        this.logger.info(
                          "topInit #" +
                            (this.options.txt || "[DOM Element]") +
                            "#"
                        ),
                        "b2t" === this.direction
                          ? ((0, a.styleUtil)(
                              this.el,
                              "transformOrigin",
                              "left top"
                            ),
                            (0, a.styleUtil)(
                              this.el,
                              "transform",
                              "translateX(-" +
                                this.top +
                                "px) translateY(" +
                                this.danmu.containerPos.height +
                                "px) translateZ(0px) rotate(90deg)"
                            ),
                            (0, a.styleUtil)(
                              this.el,
                              "transition",
                              "transform 0s linear 0s"
                            ))
                          : (0, a.styleUtil)(this.el, "top", this.top + "px");
                    },
                  },
                  {
                    key: "pauseMove",
                    value: function () {
                      var e =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        t = this;
                      if (
                        "paused" !== t.status &&
                        ("forcedPause" !== t.status && (this.status = "paused"),
                        (t._moveV = void 0),
                        this.el)
                      )
                        if ("scroll" === this.mode) {
                          var n = t.danmu.containerPos;
                          if (e) {
                            var i =
                                ((new Date().getTime() - t._lastMoveTime) /
                                  1e3) *
                                this.moveV,
                              o = 0;
                            (o =
                              t.moveMoreS - i >= 0
                                ? "b2t" === this.direction
                                  ? ((t.moveMoreS - i) /
                                      t.moveContainerHeight) *
                                    n.height
                                  : ((t.moveMoreS - i) / t.moveContainerWidth) *
                                    n.width
                                : t.moveMoreS - i),
                              "b2t" === this.direction
                                ? (0, a.styleUtil)(
                                    this.el,
                                    "transform",
                                    "translateX(-" +
                                      this.top +
                                      "px) translateY(" +
                                      o +
                                      "px) translateZ(0px) rotate(90deg)"
                                  )
                                : (0, a.styleUtil)(this.el, "left", o + "px");
                          } else
                            "b2t" === this.direction
                              ? (0, a.styleUtil)(
                                  this.el,
                                  "transform",
                                  "translateX(-" +
                                    this.top +
                                    "px) translateY(" +
                                    (this.el.getBoundingClientRect().top -
                                      n.top) +
                                    "px) translateZ(0px) rotate(90deg)"
                                )
                              : (0, a.styleUtil)(
                                  this.el,
                                  "left",
                                  this.el.getBoundingClientRect().left -
                                    n.left +
                                    "px"
                                );
                          "b2t" === this.direction ||
                            (0, a.styleUtil)(
                              this.el,
                              "transform",
                              "translateX(0px) translateY(0px) translateZ(0px)"
                            ),
                            (0, a.styleUtil)(
                              this.el,
                              "transition",
                              "transform 0s linear 0s"
                            );
                        } else
                          this.pastDuration && this.startTime
                            ? (this.pastDuration =
                                this.pastDuration +
                                new Date().getTime() -
                                this.startTime)
                            : (this.pastDuration = 1);
                    },
                  },
                  {
                    key: "startMove",
                    value: function (e) {
                      if (
                        (this.hasMove ||
                          (this.danmu.emit("bullet_start", this),
                          (this.hasMove = !0)),
                        ("forcedPause" !== this.status || e) &&
                          this.el &&
                          "start" !== this.status)
                      )
                        if (((this.status = "start"), "scroll" === this.mode)) {
                          var t = this.danmu.containerPos;
                          if (!this.el) return;
                          var n = this.el.getBoundingClientRect(),
                            i = void 0;
                          if ("b2t" === this.direction) {
                            i = n.bottom - t.bottom;
                            var o = (n.bottom - t.top) / this.moveV;
                            (0, a.styleUtil)(
                              this.el,
                              "transition",
                              "transform " + o + "s linear 0s"
                            ),
                              (0, a.styleUtil)(
                                this.el,
                                "transform",
                                "translateX(-" +
                                  this.top +
                                  "px) translateY(-" +
                                  this.height +
                                  "px) translateZ(0px) rotate(90deg)"
                              ),
                              (this._lastMoveTime = new Date().getTime()),
                              (this.moveMoreS = n.top - t.top),
                              (this.moveContainerHeight = t.height);
                          } else {
                            i = n.right - t.right;
                            var r = n.right - t.left,
                              s = r / this.moveV;
                            n.right > t.left
                              ? ((0, a.styleUtil)(
                                  this.el,
                                  "transition",
                                  "transform " + s + "s linear 0s"
                                ),
                                (0, a.styleUtil)(
                                  this.el,
                                  "transform",
                                  "translateX(-" +
                                    r +
                                    "px) translateY(0px) translateZ(0px)"
                                ),
                                (this._lastMoveTime = new Date().getTime()),
                                (this.moveMoreS = n.left - t.left),
                                (this.moveContainerWidth = t.width))
                              : ((this.status = "end"), this.remove());
                          }
                          this._fullySlideInScreenDuration = i / this.moveV;
                        } else {
                          var l = new Date().getTime(),
                            u =
                              (this.startTime &&
                              l - this.startTime > this.duration
                                ? l - this.startTime
                                : this.duration) / 1e3;
                          (0, a.styleUtil)(this.el, "left", "50%"),
                            (0, a.styleUtil)(
                              this.el,
                              "margin",
                              "0 0 0 -" + this.width / 2 + "px"
                            ),
                            (0, a.styleUtil)(this.el, "visibility", "hidden"),
                            (0, a.styleUtil)(
                              this.el,
                              "transition",
                              "visibility " + u + "s 0s"
                            ),
                            this.pastDuration || (this.pastDuration = 1),
                            (this.startTime = l);
                        }
                    },
                  },
                  {
                    key: "remove",
                    value: function () {
                      var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      this.logger &&
                        this.logger.info(
                          "remove #" +
                            (this.options.txt || "[DOM Element]") +
                            "#"
                        );
                      var t = this;
                      e && t.pauseMove(),
                        t.el &&
                          t.el.parentNode &&
                          (t.detach(),
                          this.options.el &&
                            1 === this.options.el.nodeType &&
                            this.noCopyEl &&
                            (0, a.styleUtil)(
                              this.options.el,
                              "transform",
                              "none"
                            ),
                          t.danmu.emit("bullet_remove", { bullet: t }));
                    },
                  },
                  {
                    key: "setFontSize",
                    value: function (e) {
                      this.el && (this.el.style.fontSize = e);
                    },
                  },
                  {
                    key: "setLikeDom",
                    value: function (e, t) {
                      if (
                        e &&
                        (Object.keys(t).forEach(function (n) {
                          e.style[n] = t[n];
                        }),
                        (e.className = "danmu-like"),
                        this.el)
                      ) {
                        var n = this.el.querySelector(".danmu-like");
                        n && this.el.removeChild(n),
                          (this.el.innerHTML =
                            "" + this.el.innerHTML + e.outerHTML);
                      }
                      return e;
                    },
                  },
                  {
                    key: "moveV",
                    get: function () {
                      var e = this.danmu,
                        t = this.options,
                        n = this._moveV;
                      if (!n) {
                        if (t.moveV) n = t.moveV;
                        else if (this.elPos) {
                          var i = e.containerPos;
                          n =
                            (("b2t" === this.direction
                              ? i.height +
                                (e.config.chaseEffect ? this.height : 0)
                              : i.width +
                                (e.config.chaseEffect ? this.width : 0)) /
                              this.duration) *
                            1e3;
                        }
                        n && ((n *= e.main.playRate), (this._moveV = n));
                      }
                      return n;
                    },
                  },
                  {
                    key: "direction",
                    get: function () {
                      return this.danmu.direction;
                    },
                  },
                  {
                    key: "fullySlideIntoScreen",
                    get: function () {
                      var e = !0;
                      return (
                        "scroll" === this.mode &&
                          this._lastMoveTime &&
                          this._fullySlideInScreenDuration > 0 &&
                          (e =
                            (new Date().getTime() - this._lastMoveTime) / 1e3 >=
                            this._fullySlideInScreenDuration),
                        e
                      );
                    },
                  },
                ]),
                t
              );
            })(r.default));
            t.default = u;
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i,
              o = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              r = (i = n(1)) && i.__esModule ? i : { default: i },
              a = n(0),
              s = n(31),
              l = (function (e) {
                function t(e) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t);
                  var n = (function (e, t) {
                      if (!e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    ),
                    i = n;
                  return (
                    i.setLogger("channel"),
                    (i.danmu = e),
                    (i.width = 0),
                    (i.height = 0),
                    i.reset(!0),
                    (i.channels = []),
                    i.updatePos(),
                    (0, a.attachEventListener)(
                      n.danmu,
                      "bullet_remove",
                      function (e) {
                        i.removeBullet(e.bullet);
                      },
                      "destroy"
                    ),
                    (0, a.attachEventListener)(
                      n.danmu,
                      "channel_resize",
                      function () {
                        i.resize();
                      },
                      "destroy"
                    ),
                    n
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  o(t, [
                    {
                      key: "checkAvailableTrack",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "scroll",
                          t = this.channels,
                          n = !1;
                        if ("scroll" === e)
                          for (var i, o = 0; o < t.length; o++)
                            if (((n = !0), (i = t[o]).operating[e])) n = !1;
                            else {
                              var r = i.queue[e][0];
                              if (!r || r.fullySlideIntoScreen) {
                                if (n) break;
                              } else n = !1;
                            }
                        else n = !0;
                        return n;
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        for (var e in (this.logger &&
                          this.logger.info("destroy"),
                        this.channels.splice(0, this.channels.length),
                        this._cancelResizeTimer(),
                        this))
                          a.hasOwnProperty.call(this, e) && delete this[e];
                      },
                    },
                    {
                      key: "reset",
                      value: function () {
                        var e =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0];
                        this.logger && this.logger.info("reset");
                        var t = this,
                          n = t.danmu,
                          i = n.container,
                          o = n.bulletBtn;
                        function r() {
                          var e = i.getBoundingClientRect();
                          (t.width = e.width),
                            (t.height = e.height),
                            t.resetId &&
                              (cancelAnimationFrame(t.resetId),
                              (t.resetId = null));
                          var n = t._initChannels(),
                            o = n.channelSize,
                            r = n.channelCount,
                            a = n.channels;
                          (t.channelCount = r),
                            (t.channels = a),
                            "b2t" === t.direction
                              ? (t.channelWidth = o)
                              : (t.channelHeight = o);
                        }
                        (t.container = i),
                          o &&
                            o.main &&
                            o.main.queue.forEach(function (e) {
                              e.remove();
                            }),
                          t.channels &&
                            t.channels.length > 0 &&
                            ["scroll", "top", "bottom"].forEach(function (e) {
                              for (var n = 0; n < t.channels.length; n++)
                                t.channels[n].queue[e].forEach(function (e) {
                                  e.remove();
                                });
                            }),
                          o &&
                            o.main &&
                            o.main.data &&
                            o.main.data.forEach(function (e) {
                              e.attached_ = !1;
                            }),
                          e ? (this.resetId = requestAnimationFrame(r)) : r();
                      },
                    },
                    {
                      key: "getRealOccupyArea",
                      value: function () {
                        return { width: this.width, height: this.height };
                      },
                    },
                    {
                      key: "updatePos",
                      value: function () {
                        var e = this.container.getBoundingClientRect();
                        (this.containerPos = e),
                          (this.containerWidth = e.width),
                          (this.containerHeight = e.height),
                          (this.containerTop = e.top),
                          (this.containerBottom = e.bottom),
                          (this.containerLeft = e.left),
                          (this.containerRight = e.right);
                      },
                    },
                    {
                      key: "addBullet",
                      value: function (e) {
                        var t = this,
                          n = this.danmu,
                          i = this.channels,
                          o = void 0,
                          r = void 0,
                          a = void 0;
                        if (
                          ("b2t" === t.direction
                            ? ((r = this.channelWidth),
                              (a = Math.ceil(e.width / r)))
                            : ((o = this.channelHeight),
                              (a = Math.ceil(e.height / o))),
                          a > i.length)
                        )
                          return {
                            result: !1,
                            message:
                              "exceed channels.length, occupy=" +
                              a +
                              ",channelsSize=" +
                              i.length,
                          };
                        for (
                          var s = !0, l = void 0, u = -1, c = 0, f = i.length;
                          c < f;
                          c++
                        )
                          if (
                            i[c].queue[e.mode].some(function (t) {
                              return t.id === e.id;
                            })
                          )
                            return {
                              result: !1,
                              message:
                                "exited, channelOrder=" +
                                c +
                                ",danmu_id=" +
                                e.id,
                            };
                        if ("scroll" === e.mode)
                          for (var h = 0, d = i.length - a; h <= d; h += a) {
                            s = !0;
                            for (var p = h; p < h + a; p++) {
                              if (
                                (l = i[p]).operating.scroll ||
                                (l.bookId.scroll && l.bookId.scroll !== e.id)
                              ) {
                                s = !1;
                                break;
                              }
                              l.operating.scroll = !0;
                              var m = l.queue.scroll[0];
                              if (m) {
                                var g = m.el.getBoundingClientRect();
                                if ("b2t" === t.direction) {
                                  if (g.bottom >= t.containerPos.bottom) {
                                    (s = !1), (l.operating.scroll = !1);
                                    break;
                                  }
                                } else if (g.right >= t.containerPos.right) {
                                  (s = !1), (l.operating.scroll = !1);
                                  break;
                                }
                                var v = void 0,
                                  y = m.moveV,
                                  b = void 0,
                                  _ = e.moveV,
                                  w = void 0;
                                if (
                                  ("b2t" === t.direction
                                    ? ((b =
                                        (v = g.bottom - t.containerTop) / y),
                                      (w = t.containerHeight + e.random - v))
                                    : ((b =
                                        (v = g.right - t.containerLeft) / y),
                                      (w = t.containerWidth + e.random - v)),
                                  _ > y)
                                ) {
                                  var k = w / (_ - y);
                                  if (
                                    (n.config.bOffset || (n.config.bOffset = 0),
                                    b + n.config.bOffset >= k)
                                  ) {
                                    var x = b * _ - t.containerPos.width;
                                    x > 0 &&
                                      e.updateOffset(
                                        x + (1 + Math.ceil(5 * Math.random()))
                                      );
                                  }
                                }
                              }
                              l.operating.scroll = !1;
                            }
                            if (s) {
                              u = h;
                              break;
                            }
                          }
                        else if ("top" === e.mode)
                          for (var O = 0, E = i.length - a; O <= E; O++) {
                            s = !0;
                            for (var C = O; C < O + a; C++) {
                              if (C > Math.floor(i.length / 2)) {
                                s = !1;
                                break;
                              }
                              if ((l = i[C]).operating[e.mode]) {
                                s = !1;
                                break;
                              }
                              if (
                                (l.bookId[e.mode] || e.prior) &&
                                l.bookId[e.mode] !== e.id
                              ) {
                                s = !1;
                                break;
                              }
                              if (
                                ((l.operating[e.mode] = !0),
                                l.queue[e.mode].length > 0)
                              ) {
                                (s = !1), (l.operating[e.mode] = !1);
                                break;
                              }
                              l.operating[e.mode] = !1;
                            }
                            if (s) {
                              u = O;
                              break;
                            }
                          }
                        else if ("bottom" === e.mode)
                          for (var S = i.length - a; S >= 0; S--) {
                            s = !0;
                            for (var j = S; j < S + a; j++) {
                              if (j <= Math.floor(i.length / 2)) {
                                s = !1;
                                break;
                              }
                              if ((l = i[j]).operating[e.mode]) {
                                s = !1;
                                break;
                              }
                              if (
                                (l.bookId[e.mode] || e.prior) &&
                                l.bookId[e.mode] !== e.id
                              ) {
                                s = !1;
                                break;
                              }
                              if (
                                ((l.operating[e.mode] = !0),
                                l.queue[e.mode].length > 0)
                              ) {
                                (s = !1), (l.operating[e.mode] = !1);
                                break;
                              }
                              l.operating[e.mode] = !1;
                            }
                            if (s) {
                              u = S;
                              break;
                            }
                          }
                        if (-1 !== u) {
                          for (var P = u, T = u + a; P < T; P++)
                            ((l = i[P]).operating[e.mode] = !0),
                              l.queue[e.mode].unshift(e),
                              e.prior &&
                                (delete l.bookId[e.mode],
                                t.logger &&
                                  t.logger.info(
                                    P +
                                      "\u53f7\u8f68\u9053\u6062\u590d\u6b63\u5e38\u4f7f\u7528"
                                  )),
                              (l.operating[e.mode] = !1);
                          return (
                            e.prior &&
                              (t.logger &&
                                t.logger.info(
                                  e.id +
                                    "\u53f7\u4f18\u5148\u5f39\u5e55\u8fd0\u884c\u5b8c\u6bd5"
                                ),
                              delete e.bookChannelId,
                              n.player &&
                                n.bulletBtn.main.data.some(function (t) {
                                  return (
                                    t.id === e.id &&
                                    (delete t.bookChannelId, !0)
                                  );
                                })),
                            (e.channel_id = [u, a]),
                            e.el.setAttribute("data-line-index", u + 1),
                            "b2t" === t.direction
                              ? ((e.top = u * r),
                                t.danmu.config.area &&
                                  t.danmu.config.area.start &&
                                  (e.top +=
                                    t.containerWidth *
                                    t.danmu.config.area.start))
                              : ((e.top = u * o),
                                t.danmu.config.area &&
                                  t.danmu.config.area.start &&
                                  (e.top +=
                                    t.containerHeight *
                                    t.danmu.config.area.start)),
                            { result: e, message: "success" }
                          );
                        }
                        if (e.options.realTime) {
                          var M = 0,
                            L = -1,
                            I = null;
                          if (
                            (t.danmu.bulletBtn.main.queue.forEach(function (
                              e,
                              n
                            ) {
                              !e.prior &&
                                !e.options.realTime &&
                                e.el &&
                                e.el.getBoundingClientRect().left >
                                  t.containerPos.right &&
                                e.start >= M &&
                                ((M = e.start), (L = n), (I = e));
                            }),
                            I)
                          ) {
                            I.remove(),
                              t.removeBullet(I),
                              t.danmu.bulletBtn.main.queue.splice(L, 1),
                              (e.channel_id = I.channel_id);
                            for (
                              var D = I.channel_id[0],
                                z = I.channel_id[0] + I.channel_id[1];
                              D < z;
                              D++
                            )
                              ((l = i[D]).operating[e.mode] = !0),
                                l.queue[e.mode].unshift(e),
                                e.prior && delete l.bookId[e.mode],
                                (l.operating[e.mode] = !1);
                            return (
                              (e.top = I.top),
                              t.danmu.config.area &&
                                t.danmu.config.area.start &&
                                (e.top +=
                                  t.containerHeight *
                                  t.danmu.config.area.start),
                              { result: e, message: "success" }
                            );
                          }
                        }
                        if (e.prior)
                          if (e.bookChannelId || t.danmu.live)
                            n.player &&
                              n.bulletBtn.main.data.some(function (n) {
                                return (
                                  n.id === e.id &&
                                  (t.logger &&
                                    t.logger.info(
                                      e.id +
                                        "\u53f7\u4f18\u5148\u5f39\u5e55\u5c06\u4e8e2\u79d2\u540e\u518d\u6b21\u8bf7\u6c42\u6ce8\u518c"
                                    ),
                                  (n.start += 2e3),
                                  !0)
                                );
                              });
                          else {
                            u = -1;
                            for (var A = 0, R = i.length - a; A <= R; A++) {
                              s = !0;
                              for (var B = A; B < A + a; B++)
                                if (i[B].bookId[e.mode]) {
                                  s = !1;
                                  break;
                                }
                              if (s) {
                                u = A;
                                break;
                              }
                            }
                            if (-1 !== u) {
                              for (var N = u; N < u + a; N++)
                                (i[N].bookId[e.mode] = e.id),
                                  t.logger &&
                                    t.logger.info(
                                      N +
                                        "\u53f7\u8f68\u9053\u88ab" +
                                        e.id +
                                        "\u53f7\u4f18\u5148\u5f39\u5e55\u9884\u5b9a"
                                    );
                              n.player &&
                                n.bulletBtn.main.data.some(function (n) {
                                  return (
                                    n.id === e.id &&
                                    (t.logger &&
                                      t.logger.info(
                                        e.id +
                                          "\u53f7\u4f18\u5148\u5f39\u5e55\u5c06\u4e8e2\u79d2\u540e\u518d\u6b21\u8bf7\u6c42\u6ce8\u518c"
                                      ),
                                    (n.start += 2e3),
                                    (n.bookChannelId = [u, a]),
                                    t.logger &&
                                      t.logger.info(
                                        e.id +
                                          "\u53f7\u4f18\u5148\u5f39\u5e55\u9884\u5b9a\u4e86" +
                                          u +
                                          "~" +
                                          (u + a - 1) +
                                          "\u53f7\u8f68\u9053"
                                      ),
                                    !0)
                                  );
                                });
                            }
                          }
                        return { result: !1, message: "no surplus will right" };
                      },
                    },
                    {
                      key: "removeBullet",
                      value: function (e) {
                        this.logger &&
                          this.logger.info(
                            "removeBullet " + (e.options.txt || "[DOM Element]")
                          );
                        for (
                          var t = this.channels,
                            n = e.channel_id,
                            i = void 0,
                            o = n[0],
                            r = n[0] + n[1];
                          o < r;
                          o++
                        )
                          if ((i = t[o])) {
                            i.operating[e.mode] = !0;
                            var a = -1;
                            i.queue[e.mode].some(function (t, n) {
                              return t.id === e.id && ((a = n), !0);
                            }),
                              a > -1 && i.queue[e.mode].splice(a, 1),
                              (i.operating[e.mode] = !1);
                          }
                        e.options.loop &&
                          this.danmu.bulletBtn.main.playedData.push(e.options);
                      },
                    },
                    {
                      key: "resizeSync",
                      value: function () {
                        this.resize(!0);
                      },
                    },
                    {
                      key: "_initChannels",
                      value: function () {
                        var e = this.danmu.config,
                          t =
                            e.channelSize ||
                            (/mobile/gi.test(navigator.userAgent) ? 10 : 12),
                          n = void 0;
                        if (e.area) {
                          var i = e.area,
                            o = i.lines,
                            r = i.start,
                            l = i.end;
                          if ((0, s.validAreaLineRule)(o))
                            (n = o),
                              "b2t" === this.direction
                                ? (this.width = n * t)
                                : (this.height = n * t);
                          else if (r >= 0 && l >= r) {
                            var u = l - r;
                            "b2t" === this.direction
                              ? (this.width = Math.floor(this.width * u))
                              : (this.height = Math.floor(this.height * u));
                          }
                        }
                        (0, a.isNumber)(n) ||
                          (n =
                            "b2t" === this.direction
                              ? Math.floor(this.width / t)
                              : Math.floor(this.height / t));
                        for (var c = [], f = 0; f < n; f++)
                          c[f] = {
                            id: f,
                            queue: { scroll: [], top: [], bottom: [] },
                            operating: { scroll: !1, top: !1, bottom: !1 },
                            bookId: {},
                          };
                        return { channelSize: t, channelCount: n, channels: c };
                      },
                    },
                    {
                      key: "resize",
                      value: function () {
                        var e =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0];
                        this.logger && this.logger.info("resize");
                        var t = this;
                        function n(e, t) {
                          e[t] = {
                            id: t,
                            queue: { scroll: [], top: [], bottom: [] },
                            operating: { scroll: !1, top: !1, bottom: !1 },
                            bookId: {},
                          };
                        }
                        function i(e, i) {
                          function o(n) {
                            ["scroll", "top"].forEach(function (i) {
                              t.channels[n].queue[i].forEach(function (t) {
                                t.el && e[n].queue[i].push(t);
                              });
                            });
                          }
                          function r(n) {
                            t.channels[n].queue.bottom.forEach(function (o) {
                              if (
                                o.el &&
                                (e[
                                  n + e.length - t.channels.length
                                ].queue.bottom.push(o),
                                o.channel_id[0] + o.channel_id[1] - 1 === n)
                              ) {
                                var r = [].concat(o.channel_id);
                                (o.channel_id = [
                                  r[0] - t.channels.length + e.length,
                                  r[1],
                                ]),
                                  (o.top = o.channel_id[0] * i),
                                  t.danmu.config.area &&
                                    t.danmu.config.area.start &&
                                    (o.top +=
                                      t.containerHeight *
                                      t.danmu.config.area.start),
                                  o.topInit();
                              }
                            });
                          }
                          for (var a = 0; a < t.channels.length; a++)
                            n(e, a), o(a), r(a);
                          for (
                            var s = function (t) {
                                ["scroll", "top", "bottom"].forEach(function (
                                  n
                                ) {
                                  e[t].queue[n].forEach(function (e) {
                                    e.resized = !1;
                                  });
                                });
                              },
                              l = 0;
                            l < e.length;
                            l++
                          )
                            s(l);
                          (t.channels = e),
                            "b2t" === t.direction
                              ? (t.channelWidth = i)
                              : (t.channelHeight = i);
                        }
                        function o(e, i) {
                          for (
                            var o = ["scroll", "top", "bottom"],
                              r = function (r) {
                                n(e, r),
                                  o.forEach(function (n) {
                                    if (
                                      "top" === n &&
                                      r > Math.floor(e.length / 2)
                                    );
                                    else if (
                                      "bottom" === n &&
                                      r <= Math.floor(e.length / 2)
                                    );
                                    else {
                                      var o =
                                        "bottom" === n
                                          ? r - e.length + t.channels.length
                                          : r;
                                      t.channels[o].queue[n].forEach(function (
                                        a,
                                        s
                                      ) {
                                        if (a.el) {
                                          if (
                                            (e[r].queue[n].push(a),
                                            "bottom" === n &&
                                              a.channel_id[0] +
                                                a.channel_id[1] -
                                                1 ===
                                                o)
                                          ) {
                                            var l = [].concat(a.channel_id);
                                            (a.channel_id = [
                                              l[0] -
                                                t.channels.length +
                                                e.length,
                                              l[1],
                                            ]),
                                              (a.top = a.channel_id[0] * i),
                                              t.danmu.config.area &&
                                                t.danmu.config.area.start &&
                                                (a.top +=
                                                  t.containerHeight *
                                                  t.danmu.config.area.start),
                                              a.topInit();
                                          }
                                          t.channels[o].queue[n].splice(s, 1);
                                        }
                                      });
                                    }
                                  });
                              },
                              a = 0;
                            a < e.length;
                            a++
                          )
                            r(a);
                          var s = function (t) {
                            o.forEach(function (n) {
                              e[t].queue[n].forEach(function (e) {
                                e.resized = !1;
                              });
                            });
                          };
                          for (a = 0; a < e.length; a++) s(a);
                          (t.channels = e),
                            "b2t" === t.direction
                              ? (t.channelWidth = i)
                              : (t.channelHeight = i);
                        }
                        function r() {
                          var e = t.danmu,
                            n = e.container,
                            r = e.bulletBtn;
                          (t.container = n),
                            t.updatePos(),
                            t._cancelResizeTimer(),
                            r.main.data &&
                              r.main.data.forEach(function (e) {
                                e.bookChannelId &&
                                  (delete e.bookChannelId,
                                  t.logger &&
                                    t.logger.info(
                                      "resize\u5bfc\u81f4" +
                                        e.id +
                                        "\u53f7\u4f18\u5148\u5f39\u5e55\u9884\u5b9a\u53d6\u6d88"
                                    ));
                              }),
                            t.logger &&
                              t.logger.info(
                                "resize\u5bfc\u81f4\u6240\u6709\u8f68\u9053\u6062\u590d\u6b63\u5e38\u4f7f\u7528"
                              ),
                            (t.width = t.containerWidth),
                            (t.height = t.containerHeight);
                          var a = t._initChannels(),
                            s = a.channelSize,
                            l = a.channels;
                          t.channels &&
                            (t.channels.length <= l.length ? i(l, s) : o(l, s)),
                            (t.resizing = !1);
                        }
                        t.resizing ||
                          ((t.resizing = !0),
                          e
                            ? r()
                            : (this._cancelResizeTimer(),
                              (this.resizeId = requestAnimationFrame(r))));
                      },
                    },
                    {
                      key: "_cancelResizeTimer",
                      value: function () {
                        this.resizeId &&
                          (cancelAnimationFrame(this.resizeId),
                          (this.resizeId = null));
                      },
                    },
                    {
                      key: "direction",
                      get: function () {
                        return this.danmu.direction;
                      },
                    },
                  ]),
                  t
                );
              })(r.default);
            (t.default = l), (e.exports = t.default);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.validAreaLineRule = function (e) {
                return "number" == typeof e && e >= 0 && Number.isInteger(e);
              });
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = n(0),
              r = (function () {
                function e(t) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (t = {
                      initDOM: function () {
                        return document.createElement("div");
                      },
                      initSize: 10,
                    }),
                    this.init(t);
                }
                return (
                  i(e, [
                    {
                      key: "init",
                      value: function (e) {
                        (this.idleList = []),
                          (this.usingList = []),
                          (this._id = 0),
                          (this.options = e),
                          this._expand(e.initSize);
                      },
                    },
                    {
                      key: "use",
                      value: function () {
                        this.idleList.length || this._expand(1);
                        var e = this.idleList.shift();
                        return this.usingList.push(e), e;
                      },
                    },
                    {
                      key: "unused",
                      value: function (e) {
                        var t = this.usingList.indexOf(e);
                        t < 0 ||
                          (this.usingList.splice(t, 1),
                          (e.style.opacity = 0),
                          this.idleList.push(e));
                      },
                    },
                    {
                      key: "_expand",
                      value: function (e) {
                        for (var t = 0; t < e; t++)
                          this.idleList.push(this.options.initDOM(this._id++));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        for (var e = 0; e < this.idleList.length; e++)
                          (this.idleList[e].innerHTML = ""),
                            (this.idleList[e].textcontent = ""),
                            this.clearElementStyle(this.idleList[e]);
                        for (var t = 0; t < this.usingList.length; t++)
                          (this.usingList[t].innerHTML = ""),
                            (this.usingList[t].textcontent = ""),
                            this.clearElementStyle(this.usingList[t]);
                        for (var n in this)
                          o.hasOwnProperty.call(this, n) && delete this[n];
                      },
                    },
                    {
                      key: "clearElementStyle",
                      value: function (e) {
                        var t =
                          "undefined" != typeof window
                            ? window.navigator.userAgent
                            : null;
                        t &&
                          (t.indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1
                            ? (0, o.styleUtil)(e, "transform", "none")
                            : e.setAttribute("style", ""));
                      },
                    },
                  ]),
                  e
                );
              })();
            (t.default = r), (e.exports = t.default);
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.destroyObserver = t.unObserver = t.addObserver = void 0);
            var i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = n(0),
              r = new ((function () {
                function e() {
                  var t = this;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                    (this.__handlers = []),
                    window.ResizeObserver)
                  )
                    try {
                      this.observer = new window.ResizeObserver(
                        (0, o.throttle)(function (e) {
                          t.__trigger(e);
                        }, 100)
                      );
                    } catch (e) {}
                }
                return (
                  i(e, [
                    {
                      key: "addObserver",
                      value: function (e, t) {
                        if (this.observer) {
                          this.observer && this.observer.observe(e);
                          for (
                            var n = this.__handlers, i = -1, o = 0;
                            o < n.length;
                            o++
                          )
                            n[o] && e === n[o].target && (i = o);
                          i > -1
                            ? this.__handlers[i].handler.push(t)
                            : this.__handlers.push({ target: e, handler: [t] });
                        }
                      },
                    },
                    {
                      key: "unObserver",
                      value: function (e) {
                        var t = -1;
                        this.__handlers.map(function (n, i) {
                          e === n.target && (t = i);
                        }),
                          this.observer && this.observer.unobserve(e),
                          t > -1 && this.__handlers.splice(t, 1);
                      },
                    },
                    {
                      key: "destroyObserver",
                      value: function () {
                        this.observer && this.observer.disconnect(),
                          (this.observer = null),
                          (this.__handlers = null);
                      },
                    },
                    {
                      key: "__runHandler",
                      value: function (e) {
                        for (var t = this.__handlers, n = 0; n < t.length; n++)
                          if (t[n] && e === t[n].target) {
                            t[n].handler &&
                              t[n].handler.map(function (e) {
                                try {
                                  e();
                                } catch (e) {}
                              });
                            break;
                          }
                      },
                    },
                    {
                      key: "__trigger",
                      value: function (e) {
                        var t = this;
                        e.map(function (e) {
                          t.__runHandler(e.target);
                        });
                      },
                    },
                  ]),
                  e
                );
              })())();
            (t.addObserver = function (e, t) {
              r.addObserver(e, t);
            }),
              (t.unObserver = function (e, t) {
                r.unObserver(e, t);
              }),
              (t.destroyObserver = function (e, t) {
                r.destroyObserver(e, t);
              });
          },
          function (e, t, n) {
            var i = n(35);
            "string" == typeof i && (i = [[e.i, i, ""]]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(37)(i, o), i.locals && (e.exports = i.locals);
          },
          function (e, t, n) {
            (e.exports = n(36)(!1)).push([
              e.i,
              ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#fff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}",
              "",
            ]);
          },
          function (e, t) {
            e.exports = function (e) {
              var t = [];
              return (
                (t.toString = function () {
                  return this.map(function (t) {
                    var n = (function (e, t) {
                      var n,
                        i = e[1] || "",
                        o = e[3];
                      if (!o) return i;
                      if (t && "function" == typeof btoa) {
                        var r =
                            ((n = o),
                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(n)))
                              ) +
                              " */"),
                          a = o.sources.map(function (e) {
                            return "/*# sourceURL=" + o.sourceRoot + e + " */";
                          });
                        return [i].concat(a).concat([r]).join("\n");
                      }
                      return [i].join("\n");
                    })(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                  }).join("");
                }),
                (t.i = function (e, n) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0);
                  }
                  for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    ("number" == typeof a[0] && i[a[0]]) ||
                      (n && !a[2]
                        ? (a[2] = n)
                        : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                      t.push(a));
                  }
                }),
                t
              );
            };
          },
          function (e, t, n) {
            var i,
              o,
              r = {},
              a =
                ((i = function () {
                  return window && document && document.all && !window.atob;
                }),
                function () {
                  return void 0 === o && (o = i.apply(this, arguments)), o;
                }),
              s = function (e) {
                return document.querySelector(e);
              },
              l = (function (e) {
                var t = {};
                return function (e) {
                  if ("function" == typeof e) return e();
                  if (void 0 === t[e]) {
                    var n = s.call(this, e);
                    if (
                      window.HTMLIFrameElement &&
                      n instanceof window.HTMLIFrameElement
                    )
                      try {
                        n = n.contentDocument.head;
                      } catch (e) {
                        n = null;
                      }
                    t[e] = n;
                  }
                  return t[e];
                };
              })(),
              u = null,
              c = 0,
              f = [],
              h = n(38);
            function d(e, t) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n],
                  o = r[i.id];
                if (o) {
                  o.refs++;
                  for (var a = 0; a < o.parts.length; a++)
                    o.parts[a](i.parts[a]);
                  for (; a < i.parts.length; a++)
                    o.parts.push(b(i.parts[a], t));
                } else {
                  var s = [];
                  for (a = 0; a < i.parts.length; a++) s.push(b(i.parts[a], t));
                  r[i.id] = { id: i.id, refs: 1, parts: s };
                }
              }
            }
            function p(e, t) {
              for (var n = [], i = {}, o = 0; o < e.length; o++) {
                var r = e[o],
                  a = t.base ? r[0] + t.base : r[0],
                  s = { css: r[1], media: r[2], sourceMap: r[3] };
                i[a]
                  ? i[a].parts.push(s)
                  : n.push((i[a] = { id: a, parts: [s] }));
              }
              return n;
            }
            function m(e, t) {
              var n = l(e.insertInto);
              if (!n)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                );
              var i = f[f.length - 1];
              if ("top" === e.insertAt)
                i
                  ? i.nextSibling
                    ? n.insertBefore(t, i.nextSibling)
                    : n.appendChild(t)
                  : n.insertBefore(t, n.firstChild),
                  f.push(t);
              else if ("bottom" === e.insertAt) n.appendChild(t);
              else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                  throw new Error(
                    "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                  );
                var o = l(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, o);
              }
            }
            function g(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
              var t = f.indexOf(e);
              t >= 0 && f.splice(t, 1);
            }
            function v(e) {
              var t = document.createElement("style");
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                y(t, e.attrs),
                m(e, t),
                t
              );
            }
            function y(e, t) {
              Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
              });
            }
            function b(e, t) {
              var n, i, o, r;
              if (t.transform && e.css) {
                if (!(r = t.transform(e.css))) return function () {};
                e.css = r;
              }
              if (t.singleton) {
                var a = c++;
                (n = u || (u = v(t))),
                  (i = k.bind(null, n, a, !1)),
                  (o = k.bind(null, n, a, !0));
              } else
                e.sourceMap &&
                "function" == typeof URL &&
                "function" == typeof URL.createObjectURL &&
                "function" == typeof URL.revokeObjectURL &&
                "function" == typeof Blob &&
                "function" == typeof btoa
                  ? ((n = (function (e) {
                      var t = document.createElement("link");
                      return (
                        void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                        (e.attrs.rel = "stylesheet"),
                        y(t, e.attrs),
                        m(e, t),
                        t
                      );
                    })(t)),
                    (i = O.bind(null, n, t)),
                    (o = function () {
                      g(n), n.href && URL.revokeObjectURL(n.href);
                    }))
                  : ((n = v(t)),
                    (i = x.bind(null, n)),
                    (o = function () {
                      g(n);
                    }));
              return (
                i(e),
                function (t) {
                  if (t) {
                    if (
                      t.css === e.css &&
                      t.media === e.media &&
                      t.sourceMap === e.sourceMap
                    )
                      return;
                    i((e = t));
                  } else o();
                }
              );
            }
            e.exports = function (e, t) {
              if (
                "undefined" != typeof DEBUG &&
                DEBUG &&
                "object" != typeof document
              )
                throw new Error(
                  "The style-loader cannot be used in a non-browser environment"
                );
              ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
                t.singleton ||
                  "boolean" == typeof t.singleton ||
                  (t.singleton = a()),
                t.insertInto || (t.insertInto = "head"),
                t.insertAt || (t.insertAt = "bottom");
              var n = p(e, t);
              return (
                d(n, t),
                function (e) {
                  for (var i = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = r[a.id]).refs--, i.push(s);
                  }
                  for (e && d(p(e, t), t), o = 0; o < i.length; o++) {
                    var s;
                    if (0 === (s = i[o]).refs) {
                      for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                      delete r[s.id];
                    }
                  }
                }
              );
            };
            var _,
              w =
                ((_ = []),
                function (e, t) {
                  return (_[e] = t), _.filter(Boolean).join("\n");
                });
            function k(e, t, n, i) {
              var o = n ? "" : i.css;
              if (e.styleSheet) e.styleSheet.cssText = w(t, o);
              else {
                var r = document.createTextNode(o),
                  a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                  a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
              }
            }
            function x(e, t) {
              var n = t.css,
                i = t.media;
              if ((i && e.setAttribute("media", i), e.styleSheet))
                e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }
            function O(e, t, n) {
              var i = n.css,
                o = n.sourceMap,
                r = void 0 === t.convertToAbsoluteUrls && o;
              (t.convertToAbsoluteUrls || r) && (i = h(i)),
                o &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                    " */");
              var a = new Blob([i], { type: "text/css" }),
                s = e.href;
              (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
            }
          },
          function (e, t) {
            e.exports = function (e) {
              var t = "undefined" != typeof window && window.location;
              if (!t) throw new Error("fixUrls requires window.location");
              if (!e || "string" != typeof e) return e;
              var n = t.protocol + "//" + t.host,
                i = n + t.pathname.replace(/\/[^\/]*$/, "/");
              return e.replace(
                /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                function (e, t) {
                  var o,
                    r = t
                      .trim()
                      .replace(/^"(.*)"$/, function (e, t) {
                        return t;
                      })
                      .replace(/^'(.*)'$/, function (e, t) {
                        return t;
                      });
                  return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                    r
                  )
                    ? e
                    : ((o =
                        0 === r.indexOf("//")
                          ? r
                          : 0 === r.indexOf("/")
                          ? n + r
                          : i + r.replace(/^\.\//, "")),
                      "url(" + JSON.stringify(o) + ")");
                }
              );
            };
          },
        ]));
    },
    94904: () => {},
    81273: (e, t, n) => {
      "use strict";
      n.d(t, { ZP: () => M });
      var i = n(75223),
        o = n.n(i),
        r = n(50524),
        a = n(17449),
        s = n(58993),
        l = n(73019);
      function u(e) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          u(e)
        );
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              ((o = i.key),
              (r = void 0),
              (r = (function (e, t) {
                if ("object" !== u(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, t || "default");
                  if ("object" !== u(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(o, "string")),
              "symbol" === u(r) ? r : String(r)),
              i
            );
        }
        var o, r;
      }
      function f(e, t) {
        return (
          (f = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          f(e, t)
        );
      }
      function h(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = p(e);
          if (t) {
            var o = p(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        if (t && ("object" === u(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function p(e) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          p(e)
        );
      }
      const m = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && f(e, t);
        })(r, e);
        var t,
          n,
          i,
          o = h(r);
        function r(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
            ((t = o.call(this, e)).set = {
              speed: 1,
              area: {},
              opacity: 1,
              fonSize: "middle",
            }),
            t
          );
        }
        return (
          (t = r),
          (i = [
            {
              key: "pluginName",
              get: function () {
                return "danmuPanel";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  position: s.kd.CONTROLS_RIGHT,
                  index: 11,
                  onChangeSet: function (e) {},
                  speed: 1,
                  area: {},
                  opacity: 1,
                  fonSize: "middle",
                };
              },
            },
          ]),
          (n = [
            {
              key: "afterCreate",
              value: function () {
                "mobile" === l.Z.device
                  ? (this.activeEvent = "click")
                  : (this.activeEvent = "mouseenter"),
                  (this.onStateChange = this.onStateChange.bind(this)),
                  (this.onToggle = this.onToggle.bind(this)),
                  this.bind(this.activeEvent, this.onToggle),
                  this.bind("mouseleave", this.onToggle),
                  this.appendChild(
                    ".xgplayer-panel-icon",
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -11 40 40" width="40" height="40"><path fill="#f85959" d="M29.2 14.984a.952.952 0 00.8-.912v-1.008a.96.96 0 00-.8-.904l-.488-.064a1.4 1.4 0 01-1.04-.688l-.168-.288-.16-.288A1.376 1.376 0 0127.2 9.6l.184-.464a.944.944 0 00-.4-1.136l-.88-.496a.944.944 0 00-1.176.24l-.312.408a1.456 1.456 0 01-1.128.576c-.352 0-1.504-.216-1.776-.56l-.312-.392a.944.944 0 00-1.184-.224l-.872.512a.952.952 0 00-.376 1.144l.2.472a1.496 1.496 0 01-.064 1.264c-.208.296-.936 1.2-1.368 1.264l-.504.072a.952.952 0 00-.8.912v1.016a.936.936 0 00.8.896l.488.064a1.392 1.392 0 011.04.696l.168.288.16.28a1.352 1.352 0 01.112 1.232l-.184.472a.952.952 0 00.4 1.136l.88.496a.952.952 0 001.184-.248l.304-.4a1.464 1.464 0 011.128-.576c.352 0 1.504.2 1.776.552l.312.392a.944.944 0 001.184.224l.904-.512a.952.952 0 00.376-1.144l-.192-.456a1.472 1.472 0 01.056-1.264c.208-.296.936-1.2 1.376-1.264zm-4.4.168a2.208 2.208 0 01-3.72-.96 2.168 2.168 0 01.52-2.088 2.208 2.208 0 013.712.96 2.16 2.16 0 01-.512 2.088z"/><path fill="#f85959" d="M25.6 0H2.872A2.872 2.872 0 000 2.872v13.6a2.872 2.872 0 002.872 2.888h12.904a10.072 10.072 0 01-.648-.96A9.384 9.384 0 0128.432 5.824V2.872A2.872 2.872 0 0025.6 0zM10.4 11.344H3.432a1.216 1.216 0 010-2.4H10.4a1.216 1.216 0 010 2.4zM13.16 6.4H3.432a1.208 1.208 0 010-2.4h9.728a1.208 1.208 0 110 2.4z"/></svg>'()
                  );
              },
            },
            {
              key: "onStateChange",
              value: function (e) {
                this.config.onChangeSet && this.config.onChangeSet(this.set);
              },
            },
            {
              key: "onToggle",
              value: function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  a.ZP.hasClass(this.root, "slider-show")
                    ? a.ZP.removeClass(this.root, "slider-show")
                    : a.ZP.addClass(this.root, "slider-show");
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbind(["click", "touchend"], this.onStateChange);
              },
            },
            {
              key: "render",
              value: function () {
                return '\n      <xg-icon class="xgplayer-panel">\n          <xg-panel-icon class="xgplayer-panel-icon">\n          </xg-panel-icon>\n          <xg-panel-slider class="xgplayer-panel-slider">\n            <xg-hidemode class="xgplayer-hidemode">\n              <p class="xgplayer-hidemode-font">\u5c4f\u853d\u7c7b\u578b</p>\n              <ul class="xgplayer-hidemode-radio">\n                <li class="xgplayer-hidemode-scroll" id="false">\u6eda\u52a8</li><li class="xgplayer-hidemode-top" id="false">\u9876\u90e8</li><li class="xgplayer-hidemode-bottom" id="false">\u5e95\u90e8</li><li class="xgplayer-hidemode-color" id="false">\u8272\u5f69</li>\n              </ul>\n            </xg-hidemode>\n            <xg-transparency class="xgplayer-transparency">\n              <span>\u4e0d\u900f\u660e\u5ea6</span>\n              <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>\n            </xg-transparency>\n            <xg-showarea class="xgplayer-showarea">\n              <div class="xgplayer-showarea-name">\u663e\u793a\u533a\u57df</div>\n              <div class="xgplayer-showarea-control">\n                <div class="xgplayer-showarea-control-up">\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-onequarters">1/4</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-twoquarters selected-color">1/2</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-threequarters">3/4</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-full">1</span>\n                </div>\n                <div class="xgplayer-showarea-control-down">\n                  <div class="xgplayer-showarea-control-down-dots">\n                    <span class="xgplayer-showarea-onequarters-dot"></span>\n                    <span class="xgplayer-showarea-twoquarters-dot"></span>\n                    <span class="xgplayer-showarea-threequarters-dot"></span>\n                    <span class="xgplayer-showarea-full-dot"></span>\n                  </div>\n                  <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="1" max="4" step="1" value="1">\n                </div>\n              </div>\n            </xg-showarea>\n            <xg-danmuspeed class="xgplayer-danmuspeed">\n              <div class="xgplayer-danmuspeed-name">\u5f39\u5e55\u901f\u5ea6</div>\n              <div class="xgplayer-danmuspeed-control">\n                <div class="xgplayer-danmuspeed-control-up">\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-small">\u6162</span>\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-middle selected-color">\u4e2d</span>\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-large">\u5feb</span>\n                </div>\n                <div class="xgplayer-danmuspeed-control-down">\n                  <div class="xgplayer-danmuspeed-control-down-dots">\n                    <span class="xgplayer-danmuspeed-small-dot"></span>\n                    <span class="xgplayer-danmuspeed-middle-dot"></span>\n                    <span class="xgplayer-danmuspeed-large-dot"></span>\n                  </div>\n                  <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-gradient" type="range" min="50" max="150" step="50" value="100">\n                </div>\n              </div>\n            </xg-danmuspeed>\n            <xg-danmufont class="xgplayer-danmufont">\n              <div class="xgplayer-danmufont-name">\u5b57\u4f53\u5927\u5c0f</div>\n              <div class="xgplayer-danmufont-control">\n                <div class="xgplayer-danmufont-control-up">\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-small">\u5c0f</span>\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-middle">\u4e2d</span>\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-large selected-color">\u5927</span>\n                </div>\n                <div class="xgplayer-danmufont-control-down">\n                  <div class="xgplayer-danmufont-control-down-dots">\n                    <span class="xgplayer-danmufont-small-dot"></span>\n                    <span class="xgplayer-danmufont-middle-dot"></span>\n                    <span class="xgplayer-danmufont-large-dot"></span>\n                  </div>\n                  <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-gradient" type="range" min="20" max="30" step="5" value="25">\n                </div>\n              </div>\n            </xg-danmufont>\n          </xg-panel-slider>\n      </xg-icon>';
              },
            },
          ]) && c(t.prototype, n),
          i && c(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          r
        );
      })(s.ZP);
      function g(e) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          g(e)
        );
      }
      function v(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              ((o = i.key),
              (r = void 0),
              (r = (function (e, t) {
                if ("object" !== g(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, t || "default");
                  if ("object" !== g(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(o, "string")),
              "symbol" === g(r) ? r : String(r)),
              i
            );
        }
        var o, r;
      }
      function b(e, t) {
        return (
          (b = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          b(e, t)
        );
      }
      function _(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = k(e);
          if (t) {
            var o = k(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return w(this, n);
        };
      }
      function w(e, t) {
        if (t && ("object" === g(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function k(e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          k(e)
        );
      }
      var x =
        '<dk-switch class="danmu-switch">\n<span class="txt">\u5f39</span>\n</dk-switch>';
      const O = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && b(e, t);
        })(r, e);
        var t,
          n,
          i,
          o = _(r);
        function r() {
          return v(this, r), o.apply(this, arguments);
        }
        return (
          (t = r),
          (i = [
            {
              key: "pluginName",
              get: function () {
                return "danmuIcon";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  position: s.kd.CONTROLS_RIGHT,
                  index: 11,
                  onSwitch: function (e, t) {},
                };
              },
            },
          ]),
          (n = [
            {
              key: "afterCreate",
              value: function () {
                this.initIcons(),
                  (this.onStateChange = this.onStateChange.bind(this)),
                  this.bind(["click", "touchend"], this.onStateChange);
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return {
                  openDanmu: { icon: x, class: "danmu-switch-open" },
                  closeDanmu: { icon: x, class: "danmu-switch-closed" },
                };
              },
            },
            {
              key: "switchState",
              value: function (e) {
                e
                  ? this.setAttr("data-state", "active")
                  : this.setAttr("data-state", "normal"),
                  this.switchTips(e);
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this.icons,
                  t = this.find(".xgplayer-icon");
                t.appendChild(e.openDanmu), t.appendChild(e.closeDanmu);
              },
            },
            {
              key: "switchTips",
              value: function (e) {
                this.changeLangTextKey(
                  this.find(".xg-tips"),
                  e ? "OFF" : "OPEN"
                );
              },
            },
            {
              key: "onStateChange",
              value: function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = "active" === this.root.getAttribute("data-state");
                this.switchState(!t),
                  this.config.onSwitch && this.config.onSwitch(e, !t);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbind(["click", "touchend"], this.getMini);
              },
            },
            {
              key: "render",
              value: function () {
                return '\n    <xg-icon class="danmu-icon">\n      <div class="xgplayer-icon">\n      </div>\n      <div class="xg-tips" lang-key="'
                  .concat(this.i18nKeys.OPEN, '">')
                  .concat(this.i18n.OPEN, "</div>\n    </xg-icon>");
              },
            },
          ]) && y(t.prototype, n),
          i && y(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          r
        );
      })(s.ZP);
      function E(e) {
        return (
          (E =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          E(e)
        );
      }
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              ((o = i.key),
              (r = void 0),
              (r = (function (e, t) {
                if ("object" !== E(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, t || "default");
                  if ("object" !== E(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(o, "string")),
              "symbol" === E(r) ? r : String(r)),
              i
            );
        }
        var o, r;
      }
      function S(e, t) {
        return (
          (S = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          S(e, t)
        );
      }
      function j(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = T(e);
          if (t) {
            var o = T(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return P(this, n);
        };
      }
      function P(e, t) {
        if (t && ("object" === E(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function T(e) {
        return (
          (T = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          T(e)
        );
      }
      var M = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && S(e, t);
        })(l, e);
        var t,
          n,
          i,
          s = j(l);
        function l(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            ((t = s.call(this, e)).danmujs = null),
            (t.danmuPanel = null),
            (t.isOpen = !1),
            (t.seekCost = 0),
            (t.intervalId = 0),
            (t.isUseClose = !1),
            t
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                this.playerConfig.isLive && (this.config.isLive = !0),
                  this.initDanmu(),
                  this.registerExtIcons(),
                  this.once(r.TIME_UPDATE, function () {
                    e.config.defaultOpen && !e.isUseClose && e.start();
                  }),
                  this.on(r.PAUSE, function () {
                    e.isOpen && e.danmujs && e.danmujs.pause();
                  }),
                  this.on(r.PLAY, function () {
                    e.isOpen && e.danmujs && e.danmujs.play();
                  }),
                  this.on(r.SEEKING, function () {
                    (e.seekCost = window.performance.now()),
                      !e.config.isLive && e.danmujs && e.danmujs.stop();
                  }),
                  this.on(r.VIDEO_RESIZE, function () {
                    e.resize();
                  }),
                  this.on(r.SEEKED, function () {
                    e.danmujs &&
                      e.isOpen &&
                      (e.intervalId &&
                        (a.ZP.clearTimeout(e, e.intervalId),
                        (e.intervalId = null)),
                      window.performance.now() - e.seekCost > 300
                        ? e.danmujs.start()
                        : (e.intervalId = a.ZP.setTimeout(
                            e,
                            function () {
                              e.danmujs.start(), (e.intervalId = null);
                            },
                            300
                          )));
                  });
              },
            },
            {
              key: "onPluginsReady",
              value: function () {
                var e = this.player.plugins.pc;
                e &&
                  (e.onVideoDblClick &&
                    this.bind("dblclick", e.onVideoDblClick),
                  e.onVideoClick && this.bind("click", e.onVideoClick));
              },
            },
            {
              key: "initDanmu",
              value: function () {
                var e = this.player,
                  t = this.config,
                  n = this.config,
                  i = n.channelSize,
                  r = n.fontSize,
                  a = n.opacity,
                  s = n.mouseControl,
                  l = n.mouseControlPause,
                  u = n.area,
                  c = n.defaultOff,
                  f = {
                    container: this.root,
                    player: e.video,
                    comments: this.config.comments,
                    live: t.isLive,
                    defaultOff: c,
                    area: u,
                    mouseControl: s,
                    mouseControlPause: l,
                  };
                t.ext &&
                  Object.keys(t.ext).map(function (e) {
                    f[e] = t.ext[e];
                  });
                var h = new (o())(f);
                (this.danmujs = h),
                  (e.danmu = h),
                  this.setFontSize(r, i),
                  this.setArea(u),
                  this.resize(),
                  1 !== a && this.setOpacity(a);
              },
            },
            {
              key: "registerExtIcons",
              value: function () {
                var e = this,
                  t = this.player,
                  n = this.config;
                if (n.panel) {
                  var i = {
                    config: {
                      onChangeset: function (t) {
                        e.changeSet(t);
                      },
                    },
                  };
                  this.danmuPanel = t.controls.registerPlugin(
                    m,
                    i,
                    m.pluginName
                  );
                }
                var o = n.switchConfig;
                if (!n.closeDefaultBtn) {
                  var r = {
                    config: {
                      onSwitch: function (t, n) {
                        e.onSwitch(t, n);
                      },
                    },
                  };
                  Object.keys(o).map(function (e) {
                    r.config[e] = o[e];
                  }),
                    (this.danmuButton = t.controls.registerPlugin(
                      O,
                      r,
                      O.pluginName
                    )),
                    this.config.defaultOpen && this.danmuButton.switchState(!0);
                }
              },
            },
            { key: "changeSet", value: function (e) {} },
            {
              key: "onSwitch",
              value: function (e, t) {
                this.emitUserAction(e, "switch_danmu", { isOpen: t }),
                  t ? this.start() : this.stop();
              },
            },
            {
              key: "start",
              value: function () {
                var e = this;
                !this.isOpen &&
                  this.danmujs &&
                  ((this.isUseClose = !1),
                  this.show(),
                  this.resize(),
                  a.ZP.setTimeout(
                    this,
                    function () {
                      e.danmujs.start(),
                        e.player.paused && e.danmujs.pause(),
                        (e.isOpen = !0);
                    },
                    0
                  ));
              },
            },
            {
              key: "stop",
              value: function () {
                (this.isUseClose = !0),
                  this.isOpen &&
                    this.danmujs &&
                    (this.danmujs.stop(),
                    this.config.isLive && this.clear(),
                    (this.isOpen = !1),
                    this.hide());
              },
            },
            {
              key: "clear",
              value: function () {
                this.danmujs && this.danmujs.clear();
              },
            },
            {
              key: "setCommentLike",
              value: function (e, t) {
                this.danmujs && this.danmujs.setCommentLike(e, t);
              },
            },
            {
              key: "setCommentDuration",
              value: function (e, t) {
                this.danmujs && this.danmujs.setCommentDuration(e, t);
              },
            },
            {
              key: "setAllDuration",
              value: function (e, t) {
                this.danmujs && this.danmujs.setAllDuration(e, t);
              },
            },
            {
              key: "setCommentID",
              value: function (e, t) {
                this.danmujs && this.danmujs.setCommentID(e, t);
              },
            },
            {
              key: "hideMode",
              value: function (e) {
                this.danmujs && this.danmujs.hide(e);
              },
            },
            {
              key: "showMode",
              value: function (e) {
                this.danmujs && this.danmujs.show(e);
              },
            },
            {
              key: "setArea",
              value: function (e) {
                this.danmujs && this.danmujs.setArea(e);
              },
            },
            {
              key: "setOpacity",
              value: function (e) {
                this.danmujs && this.danmujs.setOpacity(e);
              },
            },
            {
              key: "setFontSize",
              value: function (e, t) {
                this.danmujs && this.danmujs.setFontSize(e, t);
              },
            },
            {
              key: "resize",
              value: function () {
                this.danmujs && this.danmujs.resize();
              },
            },
            {
              key: "sendComment",
              value: function (e) {
                this.danmujs && this.danmujs.sendComment(e);
              },
            },
            {
              key: "hideIcon",
              value: function () {
                this.danmuButton && this.danmuButton.hide();
              },
            },
            {
              key: "showIcon",
              value: function () {
                this.danmuButton && this.danmuButton.show();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.danmujs.stop(),
                  this.danmujs.destroy(),
                  (this.danmujs = null),
                  (this.player.danmu = null);
                var e = this.danmuButton,
                  t = this.danmuPanel;
                this.danmuButton &&
                  this.danmuButton.root &&
                  e.__destroy &&
                  e.__destroy(),
                  this.danmuPanel &&
                    this.danmuPanel.root &&
                    t.__destroy &&
                    t.__destroy(),
                  (this.danmuButton = null),
                  (this.danmuPanel = null);
              },
            },
            {
              key: "render",
              value: function () {
                return '<xg-danmu class="xgplayer-danmu">\n    </xg-danmu>';
              },
            },
          ]),
          (i = [
            {
              key: "pluginName",
              get: function () {
                return "danmu";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  comments: [],
                  area: { start: 0, end: 1 },
                  closeDefaultBtn: !1,
                  defaultOff: !1,
                  panel: !1,
                  panelConfig: {},
                  switchConfig: {},
                  defaultOpen: !0,
                  isLive: !1,
                  channelSize: 24,
                  fontSize: 14,
                  opacity: 1,
                  mouseControl: !1,
                  mouseControlPause: !1,
                  ext: {},
                  style: {},
                };
              },
            },
          ]),
          n && C(t.prototype, n),
          i && C(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(s.ZP);
    },
  },
]);