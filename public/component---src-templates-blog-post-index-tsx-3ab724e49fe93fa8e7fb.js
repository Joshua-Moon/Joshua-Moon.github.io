/*! For license information please see component---src-templates-blog-post-index-tsx-3ab724e49fe93fa8e7fb.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    "0Foj": function (e, t, n) {
      e.exports =
        n.p + "static/icon-video-2-b19447359213dedf693d74aadbaaa8fb.png";
    },
    "4M6O": function (e, t, n) {
      "use strict";
      var o = n("5NKs");
      (t.__esModule = !0),
        (t.insertScript = function (e, t, n) {
          var o = window.document.createElement("script");
          return (o.async = !0), (o.src = e), (o.id = t), n.appendChild(o), o;
        }),
        (t.removeScript = function (e, t) {
          var n = window.document.getElementById(e);
          n && t.removeChild(n);
        }),
        (t.debounce = function (e, t, n) {
          var o;
          return function () {
            var r = this,
              i = arguments,
              a = function () {
                (o = null), n || e.apply(r, i);
              },
              l = n && !o;
            window.clearTimeout(o), (o = setTimeout(a, t)), l && e.apply(r, i);
          };
        }),
        (t.isReactElement = a),
        (t.shallowComparison = function e(t, n) {
          var o,
            i = new Set(Object.keys(t).concat(Object.keys(n)));
          return (
            0 !==
            (o = []).concat.apply(o, (0, r.default)(i)).filter(function (o) {
              if ("object" == typeof t[o]) {
                if (e(t[o], n[o])) return !0;
              } else if (t[o] !== n[o] && !a(t[o])) return !0;
            }).length
          );
        });
      var r = o(n("R7tm")),
        i = o(n("q1tI"));
      function a(e) {
        return (
          !!i.default.isValidElement(e) ||
          (!!Array.isArray(e) &&
            e.some(function (e) {
              return i.default.isValidElement(e);
            }))
        );
      }
    },
    "8JVb": function (e, t, n) {
      "use strict";
      n.r(t);
      var o,
        r = n("q1tI"),
        i = n.n(r),
        a = n("Ac47"),
        l = n("w6rB"),
        c = n("H8eV"),
        s = n("BCat"),
        u = n("ORnI"),
        d = function (e) {
          var t = e.markdownRemark,
            n = {
              url: "" + (e.site.siteMetadata.url + t.fields.slug),
              title: t.frontmatter.title,
            };
          return (
            t.fields.beforeGatsby || (n.identifier = t.id),
            i.a.createElement(u.Disqus, { config: n })
          );
        },
        f = n("t8Zj"),
        p =
          ((o = function (e, t) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        m = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.name = "AssertionError"), n;
          }
          return p(t, e), t;
        })(Error);
      function h(e, t) {
        if (!e) throw new m(t);
      }
      function g(e) {
        var t = Object.entries(e)
          .filter(function (e) {
            var t = e[1];
            return null != t;
          })
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return encodeURIComponent(t) + "=" + encodeURIComponent(String(n));
          });
        return t.length > 0 ? "?" + t.join("&") : "";
      }
      var y = n("TSYQ"),
        v = n.n(y),
        b = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        w = function () {
          return (w =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        k = function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, l);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        x = function (e, t) {
          var n,
            o,
            r,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function l(i) {
            return function (l) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((r = a.trys),
                          (r = r.length > 0 && r[r.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = i);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(i);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (l) {
                    (i = [6, l]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, l]);
            };
          }
        },
        E = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        _ = function (e) {
          return (
            !!e &&
            ("object" == typeof e || "function" == typeof e) &&
            "function" == typeof e.then
          );
        },
        O = function (e, t) {
          return {
            left:
              window.outerWidth / 2 +
              (window.screenX || window.screenLeft || 0) -
              e / 2,
            top:
              window.outerHeight / 2 +
              (window.screenY || window.screenTop || 0) -
              t / 2,
          };
        },
        C = function (e, t) {
          return {
            top: (window.screen.height - t) / 2,
            left: (window.screen.width - e) / 2,
          };
        };
      function S(e, t, n) {
        var o = t.height,
          r = t.width,
          i = E(t, ["height", "width"]),
          a = w(
            {
              height: o,
              width: r,
              location: "no",
              toolbar: "no",
              status: "no",
              directories: "no",
              menubar: "no",
              scrollbars: "yes",
              resizable: "no",
              centerscreen: "yes",
              chrome: "yes",
            },
            i
          ),
          l = window.open(
            e,
            "",
            Object.keys(a)
              .map(function (e) {
                return e + "=" + a[e];
              })
              .join(", ")
          );
        if (n)
          var c = window.setInterval(function () {
            try {
              (null === l || l.closed) && (window.clearInterval(c), n(l));
            } catch (e) {
              console.error(e);
            }
          }, 1e3);
        return l;
      }
      var j = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.openShareDialog = function (e) {
                var n = t.props,
                  o = n.onShareWindowClose,
                  r = n.windowHeight,
                  i = void 0 === r ? 400 : r,
                  a = n.windowPosition,
                  l = void 0 === a ? "windowCenter" : a,
                  c = n.windowWidth,
                  s = void 0 === c ? 550 : c;
                S(
                  e,
                  w(
                    { height: i, width: s },
                    "windowCenter" === l ? O(s, i) : C(s, i)
                  ),
                  o
                );
              }),
              (t.handleClick = function (e) {
                return k(t, void 0, void 0, function () {
                  var t, n, o, r, i, a, l, c, s, u;
                  return x(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return (
                          (t = this.props),
                          (n = t.beforeOnClick),
                          (o = t.disabled),
                          (r = t.networkLink),
                          (i = t.onClick),
                          (a = t.url),
                          (l = t.openShareDialogOnClick),
                          (c = t.opts),
                          (s = r(a, c)),
                          o
                            ? [2]
                            : (e.preventDefault(),
                              n ? ((u = n()), _(u) ? [4, u] : [3, 2]) : [3, 2])
                        );
                      case 1:
                        d.sent(), (d.label = 2);
                      case 2:
                        return l && this.openShareDialog(s), i && i(e, s), [2];
                    }
                  });
                });
              }),
              t
            );
          }
          return (
            b(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.beforeOnClick, e.children),
                n = e.className,
                o = e.disabled,
                r = e.disabledStyle,
                a = e.forwardedRef,
                l = (e.networkLink, e.networkName),
                c =
                  (e.onShareWindowClose,
                  e.openShareDialogOnClick,
                  e.opts,
                  e.resetButtonStyle),
                s = e.style,
                u =
                  (e.url,
                  e.windowHeight,
                  e.windowPosition,
                  e.windowWidth,
                  E(e, [
                    "beforeOnClick",
                    "children",
                    "className",
                    "disabled",
                    "disabledStyle",
                    "forwardedRef",
                    "networkLink",
                    "networkName",
                    "onShareWindowClose",
                    "openShareDialogOnClick",
                    "opts",
                    "resetButtonStyle",
                    "style",
                    "url",
                    "windowHeight",
                    "windowPosition",
                    "windowWidth",
                  ])),
                d = v()(
                  "react-share__ShareButton",
                  { "react-share__ShareButton--disabled": !!o, disabled: !!o },
                  n
                ),
                f = w(
                  w(
                    c
                      ? {
                          backgroundColor: "transparent",
                          border: "none",
                          padding: 0,
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }
                      : {},
                    s
                  ),
                  o && r
                );
              return i.a.createElement(
                "button",
                w({}, u, {
                  "aria-label": u["aria-label"] || l,
                  className: d,
                  onClick: this.handleClick,
                  ref: a,
                  style: f,
                }),
                t
              );
            }),
            (t.defaultProps = {
              disabledStyle: { opacity: 0.6 },
              openShareDialogOnClick: !0,
              resetButtonStyle: !0,
            }),
            t
          );
        })(r.Component),
        I = function () {
          return (I =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      var N = function (e, t, n, o) {
        function a(r, a) {
          var l = n(r),
            c = I({}, r);
          return (
            Object.keys(l).forEach(function (e) {
              delete c[e];
            }),
            i.a.createElement(
              j,
              I({}, o, c, {
                forwardedRef: a,
                networkName: e,
                networkLink: t,
                opts: n(r),
              })
            )
          );
        }
        return (a.displayName = "ShareButton-" + e), Object(r.forwardRef)(a);
      };
      var P = N(
          "twitter",
          function (e, t) {
            var n = t.title,
              o = t.via,
              r = t.hashtags,
              i = void 0 === r ? [] : r,
              a = t.related,
              l = void 0 === a ? [] : a;
            return (
              h(e, "twitter.url"),
              h(Array.isArray(i), "twitter.hashtags is not an array"),
              h(Array.isArray(l), "twitter.related is not an array"),
              "https://twitter.com/share" +
                g({
                  url: e,
                  text: n,
                  via: o,
                  hashtags: i.length > 0 ? i.join(",") : void 0,
                  related: l.length > 0 ? l.join(",") : void 0,
                })
            );
          },
          function (e) {
            return {
              hashtags: e.hashtags,
              title: e.title,
              via: e.via,
              related: e.related,
            };
          },
          { windowWidth: 550, windowHeight: 400 }
        ),
        q = function () {
          return (q =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        A = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      function M(e) {
        var t = function (t) {
          var n = t.bgStyle,
            o = t.borderRadius,
            r = t.iconFillColor,
            a = t.round,
            l = t.size,
            c = A(t, [
              "bgStyle",
              "borderRadius",
              "iconFillColor",
              "round",
              "size",
            ]);
          return i.a.createElement(
            "svg",
            q({ viewBox: "0 0 64 64", width: l, height: l }, c),
            a
              ? i.a.createElement("circle", {
                  cx: "32",
                  cy: "32",
                  r: "31",
                  fill: e.color,
                  style: n,
                })
              : i.a.createElement("rect", {
                  width: "64",
                  height: "64",
                  rx: o,
                  ry: o,
                  fill: e.color,
                  style: n,
                }),
            i.a.createElement("path", { d: e.path, fill: r })
          );
        };
        return (
          (t.defaultProps = {
            bgStyle: {},
            borderRadius: 0,
            iconFillColor: "white",
            size: 64,
          }),
          t
        );
      }
      var T = M({
        color: "#00aced",
        networkName: "twitter",
        path:
          "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",
      });
      var D = N(
          "facebook",
          function (e, t) {
            var n = t.quote,
              o = t.hashtag;
            return (
              h(e, "facebook.url"),
              "https://www.facebook.com/sharer/sharer.php" +
                g({ u: e, quote: n, hashtag: o })
            );
          },
          function (e) {
            return { quote: e.quote, hashtag: e.hashtag };
          },
          { windowWidth: 550, windowHeight: 400 }
        ),
        B = M({
          color: "#3b5998",
          networkName: "facebook",
          path:
            "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
        });
      var L,
        z,
        R = N(
          "pocket",
          function (e, t) {
            var n = t.title;
            return (
              h(e, "pocket.url"),
              "https://getpocket.com/save" + g({ url: e, title: n })
            );
          },
          function (e) {
            return { title: e.title };
          },
          { windowWidth: 500, windowHeight: 500 }
        ),
        U = M({
          color: "#EF3F56",
          networkName: "pocket",
          path:
            "M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z",
        }),
        W = n("vOnD"),
        H = n("ufqH"),
        V = n("0Foj"),
        Q = n.n(V),
        K = W.c.main.withConfig({
          displayName: "style__Main",
          componentId: "sc-1n9unvi-0",
        })(
          [
            "display:flex;align-items:flex-start;margin-top:",
            ";@media (max-width:",
            "){margin-top:",
            ";}@media (max-width:",
            "){margin-top:",
            ";}",
          ],
          Object(s.e)(10),
          s.f.Tablet,
          Object(s.e)(5),
          s.f.Mobile,
          Object(s.e)(2)
        ),
        F = W.c.aside.withConfig({
          displayName: "style__Aside",
          componentId: "sc-1n9unvi-1",
        })(
          [
            "order:1;width:250px;position:sticky;max-height:100vh;overflow-y:scroll;top:",
            ";margin-left:",
            ";padding-bottom:",
            ";@media (max-width:calc(",
            " - 1px)){display:none;}",
          ],
          Object(s.e)(),
          Object(s.e)(4),
          Object(s.e)(),
          s.f.Desktop
        ),
        G = W.c.article.withConfig({
          displayName: "style__Article",
          componentId: "sc-1n9unvi-2",
        })(["order:0;flex:1 0 0%;min-width:0%;"]),
        J = W.c.header.withConfig({
          displayName: "style__PostHeader",
          componentId: "sc-1n9unvi-3",
        })(["margin-bottom:", ";"], Object(s.e)(7)),
        X = W.c.h1.withConfig({
          displayName: "style__PostTitle",
          componentId: "sc-1n9unvi-4",
        })(
          ["margin-top:0;margin-bottom:", ";color:", ";font-size:42px;"],
          Object(s.e)(),
          s.b.Black
        ),
        Y = W.c.time.withConfig({
          displayName: "style__PostTime",
          componentId: "sc-1n9unvi-5",
        })(["color:", ";"], s.b.Gray),
        Z = W.c.div.withConfig({
          displayName: "style__PostContent",
          componentId: "sc-1n9unvi-6",
        })(
          [
            "font-size:18px;line-height:1.5em;font-family:",
            ";word-break:break-all;h1{font-size:200%;margin-top:20px;}h2{font-size:180%;margin-top:18px;}h3{font-size:160%;margin-top:16px;}h4{font-size:140%;margin-top:14px;}h5{font-size:120%;margin-top:12px;}h1,h2,h3,h4,h5,h6{color:",
            ";font-family:",
            ";line-height:1em;}img{border-radius:",
            ";display:block;margin:",
            " * 2 auto;max-width:100%;}blockquote{color:",
            ';position:relative;&::before{content:"“";position:absolute;left:-',
            ";font-size:40px;color:",
            ";}}.gatsby-highlight{pre{border-radius:",
            " / 2;overflow:auto;word-wrap:normal;white-space:pre;}}",
          ],
          s.d.Article,
          s.b.Brand,
          s.d.Base,
          Object(s.e)(0.5),
          Object(s.e)(),
          Object(H.a)(0.2, s.b.Black),
          Object(s.e)(3),
          Object(H.a)(0.6, s.b.Black),
          Object(s.e)()
        ),
        $ = W.c.div.withConfig({
          displayName: "style__PostMeta",
          componentId: "sc-1n9unvi-7",
        })(["margin-top:", ";"], Object(s.e)(4)),
        ee = W.c.ul.withConfig({
          displayName: "style__ShareList",
          componentId: "sc-1n9unvi-8",
        })(["list-style:none;padding-left:0;"]),
        te = W.c.li.withConfig({
          displayName: "style__ShareItem",
          componentId: "sc-1n9unvi-9",
        })(
          [
            "display:inline-block;margin-right:",
            ";&:last-child{margin-right:0;}",
          ],
          Object(s.e)()
        ),
        ne = W.c.ul.withConfig({
          displayName: "style__TagList",
          componentId: "sc-1n9unvi-10",
        })(["list-style:none;padding-left:0;"]),
        oe = W.c.li.withConfig({
          displayName: "style__TagItem",
          componentId: "sc-1n9unvi-11",
        })(
          [
            "display:inline-block;margin-right:",
            ";&:last-child{margin-right:0;}",
          ],
          Object(s.e)()
        ),
        re = W.c.div.withConfig({
          displayName: "style__Toc",
          componentId: "sc-1n9unvi-12",
        })(
          [
            "border-left:",
            ";ul{padding-left:",
            ";list-style:none;margin:0;li{margin-bottom:4px;p{margin:0;}a{text-decoration:none;color:",
            ";font-size:14px;&:hover,&:focus{color:",
            ";}&.active{color:",
            ";}}}}",
          ],
          Object(s.a)(2),
          Object(s.e)(2),
          s.b.Gray,
          s.b.Black,
          s.b.Brand
        ),
        ie = W.c.div.withConfig({
          displayName: "style__PostVideo",
          componentId: "sc-1n9unvi-13",
        })(
          [
            "a{display:block;position:relative;overflow:hidden;img{width:100%;transition:all 0.3s ease;}&:hover{img{transform:scale(1.2);}}.post-video-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;.video-icon-wrapper{flex:1;display:flex;align-items:center;justify-content:center;.video-icon{background:url(",
            ") no-repeat;background-position:center center;background-size:50px 50px;opacity:0.7;width:100px;height:100px;border-radius:50%;background-color:rgba(0,0,0,0.3);}}.post-video-title{background:rgba(0,0,0,0.3);color:white;padding:8px;text-align:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:14px;}}}",
          ],
          Q.a
        ),
        ae = W.c.div.withConfig({
          displayName: "style__SeriesNav",
          componentId: "sc-1n9unvi-14",
        })(
          ["padding:", " ", ";border-left:", ";"],
          Object(s.e)(3),
          Object(s.e)(2),
          Object(s.a)(2)
        ),
        le = W.c.div.withConfig({
          displayName: "style__SeriesNavTitle",
          componentId: "sc-1n9unvi-15",
        })(
          [
            "font-weight:bold;margin-bottom:",
            ';&::before{content:"연재물";display:block;font-size:14px;color:',
            ";font-weight:normal;}.series-order{font-weight:normal;.active{font-weight:bold;}}",
          ],
          Object(s.e)(),
          s.b.Gray
        ),
        ce = W.c.div.withConfig({
          displayName: "style__SeriesNavControls",
          componentId: "sc-1n9unvi-16",
        })(["display:flex;"]),
        se = W.c.span.withConfig({
          displayName: "style__SeriesNavPrev",
          componentId: "sc-1n9unvi-17",
        })(["display:inline-block;flex:1 0 50%;text-align:left;"]),
        ue = Object(W.c)(se).withConfig({
          displayName: "style__SeriesNavNext",
          componentId: "sc-1n9unvi-18",
        })(["text-align:right;"]),
        de = W.c.div.withConfig({
          displayName: "style__SeriesNavigator",
          componentId: "sc-1n9unvi-19",
        })(
          [
            "padding:",
            " ",
            " ",
            ";border-top:",
            ";border-bottom:",
            ";.flex{flex-flow:row;}.controls{flex:0 0 100px;text-align:right;a{text-decoration:none;}}.series-title{margin-top:",
            ';&::before{content:"이 연재물 더보기";display:block;font-size:14px;color:',
            ";font-weight:normal;}}.post-list{line-height:1.5em;a{display:inline-block;width:100%;text-decoration:none;&:hover,&:focus{text-decoration:underline;}}li{list-style:circle;&.active{list-style:unset;font-weight:bold;}}}",
          ],
          Object(s.e)(3),
          Object(s.e)(2),
          Object(s.e)(2),
          Object(s.a)(2),
          Object(s.a)(2),
          Object(s.e)(),
          s.b.Gray
        ),
        fe = W.c.div.withConfig({
          displayName: "style__SiblingNav",
          componentId: "sc-1n9unvi-20",
        })(["display:flex;justify-content:space-between;"]),
        pe = W.c.div.withConfig({
          displayName: "style__SiblingNavItem",
          componentId: "sc-1n9unvi-21",
        })(
          [
            "max-width:33.3333%;@media (max-width:",
            "){max-width:48%;}.label{color:",
            ";}a{text-decoration:none;color:",
            ";i{}h3{margin-top:",
            ";margin-bottom:",
            ";}}",
          ],
          s.f.Tablet,
          s.b.Gray,
          s.b.Primary,
          Object(s.e)(),
          Object(s.e)()
        ),
        me = function (e) {
          var t = e.markdownRemark,
            n = e.siteMetadata,
            o = { round: !0, size: 48 },
            r = n.url + t.fields.slug;
          return i.a.createElement(
            ee,
            null,
            i.a.createElement(
              te,
              null,
              i.a.createElement(
                P,
                {
                  url: r,
                  hashtags: [].concat(Object(f.a)(t.frontmatter.tags || []), [
                    n.title.replace(/\s/g, ""),
                  ]),
                },
                i.a.createElement(T, o)
              )
            ),
            i.a.createElement(
              te,
              null,
              i.a.createElement(
                D,
                { url: r, hashtag: "#" + n.title.replace(/\s/g, "") },
                i.a.createElement(B, o)
              )
            ),
            i.a.createElement(
              te,
              null,
              i.a.createElement(R, { url: r }, i.a.createElement(U, o))
            )
          );
        },
        he = n("Wbzz");
      !(function (e) {
        (e.Primary = "Primary"), (e.Secondary = "Secondary");
      })(z || (z = {}));
      var ge,
        ye,
        ve =
          (((L = {})[z.Primary] = s.b.Primary),
          (L[z.Secondary] = s.b.Secondary),
          L),
        be = W.c.button.withConfig({
          displayName: "style__Button",
          componentId: "tlugo0-0",
        })(
          [
            "display:inline-block;padding:",
            " ",
            ";border-radius:4px;background-color:",
            ";text-decoration:none;color:",
            ";border:solid 1px ",
            ";transition:all 0.1s ease-in-out;&:focus,&:hover{background-color:",
            ";color:",
            ";cursor:pointer;}",
          ],
          Object(s.e)(),
          Object(s.e)(2),
          s.b.White,
          function (e) {
            return ve[e.type];
          },
          function (e) {
            return ve[e.type];
          },
          function (e) {
            return ve[e.type];
          },
          s.b.White
        ),
        we = Object(W.c)(be).withConfig({
          displayName: "style__ButtonLink",
          componentId: "tlugo0-1",
        })(
          [
            "padding:0;a{display:inline-block;padding:",
            " ",
            ";text-decoration:none;color:inherit;}",
          ],
          Object(s.e)(),
          Object(s.e)(2)
        ),
        ke = function (e) {
          var t = e.type,
            n = e.link,
            o = e.to,
            r = e.children,
            a = e.onClick;
          return n
            ? i.a.createElement(
                we,
                { type: t },
                i.a.createElement(
                  he.Link,
                  {
                    to: o,
                    onClick: function () {
                      return a;
                    },
                  },
                  r
                )
              )
            : i.a.createElement(
                be,
                {
                  type: t,
                  onClick: function () {
                    return a();
                  },
                },
                r
              );
        };
      !(function (e) {
        (e.Primary = "Primary"), (e.Secondary = "Secondary");
      })(ye || (ye = {}));
      var xe =
          (((ge = {})[ye.Primary] = s.b.Primary),
          (ge[ye.Secondary] = s.b.Secondary),
          ge),
        Ee = W.c.button.withConfig({
          displayName: "style__Button",
          componentId: "znc2s7-0",
        })(
          [
            "display:inline-block;padding:",
            " ",
            ";border-radius:4px;background-color:",
            ";text-decoration:none;color:",
            ";border:solid 1px ",
            ";transition:all 0.1s ease-in-out;&:focus,&:hover{background-color:",
            ";color:",
            ";cursor:pointer;}",
          ],
          Object(s.e)(),
          Object(s.e)(2),
          s.b.White,
          function (e) {
            return xe[e.type];
          },
          function (e) {
            return xe[e.type];
          },
          function (e) {
            return xe[e.type];
          },
          s.b.White
        ),
        _e =
          (Object(W.c)(Ee).withConfig({
            displayName: "style__ButtonLink",
            componentId: "znc2s7-1",
          })(
            [
              "padding:0;a{display:inline-block;padding:",
              " ",
              ";text-decoration:none;color:inherit;}",
            ],
            Object(s.e)(),
            Object(s.e)(2)
          ),
          function (e) {
            var t = e.tags;
            return i.a.createElement(
              ne,
              null,
              t.map(function (e) {
                return i.a.createElement(
                  oe,
                  { key: e },
                  i.a.createElement(
                    ke,
                    { type: ye.Secondary, link: !0, to: "/tags/#" + e },
                    "#",
                    e
                  )
                );
              })
            );
          }),
        Oe = (function () {
          function e(e, t, n) {
            var o = this;
            (this.targets = Array.from(e.querySelectorAll("a"))),
              (this.refs = t),
              (this.sensitivity = n || -10),
              window.addEventListener("scroll", function () {
                return o.onScroll();
              });
          }
          var t = e.prototype;
          return (
            (t.onScroll = function () {
              var e = this;
              this.isOnTopOfDoc(this.refs[0]) || this.deactiveateTarget(),
                this.refs.forEach(function (t) {
                  if (e.isOnTopOfDoc(t)) {
                    e.deactiveateTarget();
                    var n = e.findTarget(t.id);
                    n && e.activate(n);
                  }
                });
            }),
            (t.isOnTopOfDoc = function (e) {
              return (
                document.documentElement.scrollTop - e.offsetTop >=
                this.sensitivity
              );
            }),
            (t.deactiveateTarget = function () {
              var e = this;
              this.targets.forEach(function (t) {
                return e.deactivate(t);
              });
            }),
            (t.findTarget = function (e) {
              return this.targets.filter(function (t) {
                return (
                  decodeURIComponent(
                    t.attributes.href.value.replace(/^#/, "")
                  ) === e
                );
              })[0];
            }),
            (t.activate = function (e) {
              e.classList.add("active");
            }),
            (t.deactivate = function (e) {
              e.classList.remove("active");
            }),
            e
          );
        })(),
        Ce = function (e) {
          var t = e.tableOfContents;
          return (
            Object(r.useEffect)(function () {
              var e = document.querySelector("#post-content"),
                t = Array.from(e.querySelectorAll("h1,h2,h3,h4,h5,h6")).filter(
                  function (e) {
                    return e.id;
                  }
                ),
                n = document.querySelector("#post-toc");
              new Oe(n, t);
            }, []),
            i.a.createElement(re, {
              id: "post-toc",
              dangerouslySetInnerHTML: { __html: t },
            })
          );
        },
        Se = n("Kfvu"),
        je = function (e) {
          var t = e.video;
          return i.a.createElement(
            ie,
            null,
            i.a.createElement(
              "a",
              {
                id: "post-video",
                href: t.url,
                onClick: function (e) {
                  Object(Se.trackCustomEvent)({
                    category: "포스트/관련영상",
                    action: "click",
                    label: t.title,
                  });
                },
              },
              i.a.createElement("img", { src: t.thumb }),
              i.a.createElement(
                "div",
                { className: "post-video-overlay" },
                i.a.createElement(
                  "div",
                  { className: "video-icon-wrapper" },
                  i.a.createElement("div", { className: "video-icon" })
                ),
                i.a.createElement(
                  "div",
                  { className: "post-video-title" },
                  t.title ? t.title : "영상 더보기",
                  " »"
                )
              )
            )
          );
        },
        Ie = function (e) {
          var t = e.title,
            n = e.datetime;
          return i.a.createElement(
            J,
            null,
            i.a.createElement(X, { itemProp: "name headline" }, t),
            i.a.createElement(Y, { itemProp: "datePublished" }, n)
          );
        },
        Ne = function (e) {
          var t = e.series,
            n = e.posts,
            o = e.nodeId,
            r = e.lite,
            a = e.className,
            l = n.findIndex(function (e) {
              return e.id === o;
            }),
            c = 0 === l ? null : n[l - 1],
            s = l === n.length ? null : n[l + 1];
          return r
            ? i.a.createElement(
                ae,
                { className: "" + (a || "") },
                i.a.createElement(
                  le,
                  null,
                  t.title,
                  i.a.createElement(
                    "span",
                    { className: "series-order" },
                    "(",
                    i.a.createElement("span", { className: "active" }, l + 1),
                    "/",
                    n.length,
                    ")"
                  )
                ),
                i.a.createElement(
                  ce,
                  null,
                  c &&
                    i.a.createElement(
                      se,
                      null,
                      i.a.createElement(
                        ke,
                        { link: !0, type: ye.Secondary, to: c.fields.slug },
                        "« 이전"
                      )
                    ),
                  s &&
                    i.a.createElement(
                      ue,
                      null,
                      i.a.createElement(
                        ke,
                        { link: !0, type: ye.Secondary, to: s.fields.slug },
                        "다음 »"
                      )
                    )
                )
              )
            : i.a.createElement(
                de,
                { className: "" + (a || "") },
                i.a.createElement("h3", { className: "series-title" }, t.title),
                i.a.createElement(
                  "div",
                  { className: "post-list" },
                  i.a.createElement(
                    "ul",
                    null,
                    n.map(function (e) {
                      var t = e.id === o;
                      return i.a.createElement(
                        "li",
                        { className: t ? "active" : "", key: e.fields.slug },
                        t
                          ? i.a.createElement(
                              "div",
                              { className: "active" },
                              e.frontmatter.title
                            )
                          : i.a.createElement(
                              he.Link,
                              { to: e.fields.slug },
                              e.frontmatter.title
                            )
                      );
                    })
                  )
                )
              );
        },
        Pe = function (e) {
          var t = { textAlign: e.align };
          return (
            "left" === e.align ? (t.marginLeft = 16) : (t.marginRight = 16),
            i.a.createElement(
              pe,
              null,
              i.a.createElement(
                "div",
                { className: "label", style: t },
                e.label
              ),
              i.a.createElement(
                he.Link,
                { to: e.url },
                i.a.createElement(
                  "div",
                  { className: "flex" },
                  "left" === e.align &&
                    i.a.createElement(
                      "i",
                      { style: { marginRight: 8 } },
                      e.icon
                    ),
                  i.a.createElement(
                    "h3",
                    { style: { textAlign: e.align } },
                    e.text
                  ),
                  "right" === e.align &&
                    i.a.createElement("i", { style: { marginLeft: 8 } }, e.icon)
                )
              )
            )
          );
        },
        qe = function (e) {
          return i.a.createElement(
            fe,
            null,
            e.previous &&
              i.a.createElement(Pe, {
                label: "이전글",
                align: "left",
                icon: "«",
                text: e.previous.frontmatter.title,
                url: e.previous.fields.slug,
              }),
            e.next &&
              i.a.createElement(Pe, {
                label: "다음글",
                align: "right",
                icon: "»",
                text: "" + e.next.frontmatter.title,
                url: e.next.fields.slug,
              })
          );
        };
      t.default = function (e) {
        var t,
          n = e.data,
          o = e.pageContext,
          r = n.site,
          u = n.markdownRemark,
          f = n.series,
          p = n.video,
          m = o.previous,
          h = o.next,
          g = u.tableOfContents || f || p;
        return i.a.createElement(
          a.b,
          null,
          i.a.createElement(c.a, {
            title: u.frontmatter.title,
            description: u.excerpt,
            date: u.fields.date,
            url: r.siteMetadata.url + u.fields.slug,
            image:
              u.frontmatter.featured_image ||
              (null === (t = u.frontmatter.featuredImage) || void 0 === t
                ? void 0
                : t.childImageSharp.fluid.src),
          }),
          i.a.createElement(
            s.c,
            { small: !g },
            i.a.createElement(
              "div",
              { itemScope: !0, itemType: "http://schema.org/BlogPosting" },
              i.a.createElement(
                l.a,
                null,
                i.a.createElement(
                  K,
                  null,
                  g &&
                    i.a.createElement(
                      F,
                      null,
                      u.tableOfContents &&
                        i.a.createElement(Ce, {
                          tableOfContents: u.tableOfContents,
                        }),
                      f &&
                        i.a.createElement(Ne, {
                          lite: !0,
                          series: f,
                          nodeId: u.id,
                          posts: n.allMarkdownRemark.nodes,
                        }),
                      p && i.a.createElement(je, { video: p })
                    ),
                  i.a.createElement(
                    G,
                    null,
                    i.a.createElement(Ie, {
                      title: u.frontmatter.title,
                      datetime: u.fields.dateStr,
                    }),
                    i.a.createElement(Z, {
                      id: "post-content",
                      itemProp: "articleBody",
                      dangerouslySetInnerHTML: { __html: u.html },
                    }),
                    i.a.createElement(
                      $,
                      null,
                      (u.frontmatter.tags || []).length > 0 &&
                        i.a.createElement(_e, { tags: u.frontmatter.tags }),
                      i.a.createElement(me, {
                        markdownRemark: u,
                        siteMetadata: n.site.siteMetadata,
                      })
                    )
                  )
                )
              ),
              i.a.createElement(
                l.a,
                null,
                i.a.createElement(
                  s.c,
                  { small: !0 },
                  i.a.createElement(
                    "footer",
                    null,
                    i.a.createElement(qe, { previous: m, next: h }),
                    f &&
                      i.a.createElement(Ne, {
                        className: "mb-4",
                        series: f,
                        nodeId: u.id,
                        posts: n.allMarkdownRemark.nodes,
                      }),
                    i.a.createElement(d, { markdownRemark: u, site: n.site })
                  )
                )
              )
            )
          )
        );
      };
    },
    Kfvu: function (e, t, n) {
      "use strict";
      var o = n("5NKs");
      (t.__esModule = !0),
        (t.OutboundLink = c),
        (t.trackCustomEvent = function (e) {
          var t = e.category,
            n = e.action,
            o = e.label,
            r = e.value,
            i = e.nonInteraction,
            a = void 0 !== i && i,
            l = e.transport,
            c = e.hitCallback,
            s = e.callbackTimeout,
            u = void 0 === s ? 1e3 : s;
          if ("undefined" != typeof window && window.ga) {
            var d = {
              eventCategory: t,
              eventAction: n,
              eventLabel: o,
              eventValue: r,
              nonInteraction: a,
              transport: l,
            };
            c &&
              "function" == typeof c &&
              (d.hitCallback = (function (e, t) {
                void 0 === t && (t = 1e3);
                var n = !1,
                  o = function () {
                    n || ((n = !0), e());
                  };
                return setTimeout(o, t), o;
              })(c, u)),
              window.ga("send", "event", d);
          }
        });
      var r = o(n("j8BX")),
        i = o(n("uDP2")),
        a = o(n("q1tI")),
        l = o(n("17x9"));
      function c(e) {
        var t = e.eventCategory,
          n = e.eventAction,
          o = e.eventLabel,
          l = e.eventValue,
          c = (0, i.default)(e, [
            "eventCategory",
            "eventAction",
            "eventLabel",
            "eventValue",
          ]);
        return a.default.createElement(
          "a",
          (0, r.default)({}, c, {
            onClick: function (r) {
              "function" == typeof e.onClick && e.onClick(r);
              var i = !0;
              return (
                (0 !== r.button ||
                  r.altKey ||
                  r.ctrlKey ||
                  r.metaKey ||
                  r.shiftKey ||
                  r.defaultPrevented) &&
                  (i = !1),
                e.target && "_self" !== e.target.toLowerCase() && (i = !1),
                window.ga
                  ? window.ga("send", "event", {
                      eventCategory: t || "Outbound Link",
                      eventAction: n || "click",
                      eventLabel: o || e.href,
                      eventValue: l,
                      transport: i ? "beacon" : "",
                      hitCallback: function () {
                        i && (document.location = e.href);
                      },
                    })
                  : i && (document.location = e.href),
                !1
              );
            },
          })
        );
      }
      c.propTypes = {
        href: l.default.string,
        target: l.default.string,
        eventCategory: l.default.string,
        eventAction: l.default.string,
        eventLabel: l.default.string,
        eventValue: l.default.number,
        onClick: l.default.func,
      };
    },
    ORnI: function (e, t, n) {
      "use strict";
      var o = n("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var r = o(n("VUT9"));
      t.Disqus = r.default;
      var i = o(n("qASQ"));
      t.CommentCount = i.default;
      var a = o(n("vAJ3"));
      t.CommentEmbed = a.default;
      var l = r.default;
      t.default = l;
    },
    R7tm: function (e, t, n) {
      var o = n("qHws"),
        r = n("gC2u"),
        i = n("dQcQ"),
        a = n("m7BV");
      (e.exports = function (e) {
        return o(e) || r(e) || i(e) || a();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    TSYQ: function (e, t, n) {
      var o;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var o = arguments[t];
            if (o) {
              var i = typeof o;
              if ("string" === i || "number" === i) e.push(o);
              else if (Array.isArray(o) && o.length) {
                var a = r.apply(null, o);
                a && e.push(a);
              } else if ("object" === i)
                for (var l in o) n.call(o, l) && o[l] && e.push(l);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (o = function () {
                return r;
              }.apply(t, [])) || (e.exports = o);
      })();
    },
    VUT9: function (e, t, n) {
      "use strict";
      var o = n("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var r = o(n("j8BX")),
        i = o(n("uDP2")),
        a = o(n("XEEL")),
        l = o(n("q1tI")),
        c = o(n("17x9")),
        s = n("4M6O"),
        u = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).shortname = "Josh"),
              (n.embedUrl = "https://" + n.shortname + ".disqus.com/embed.js"),
              n
            );
          }
          (0, a.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.loadInstance();
            }),
            (n.shouldComponentUpdate = function (e) {
              return (
                this.props !== e && (0, s.shallowComparison)(this.props, e)
              );
            }),
            (n.componentDidUpdate = function () {
              this.loadInstance();
            }),
            (n.componentWillUnmount = function () {
              this.cleanInstance();
            }),
            (n.getDisqusConfig = function (e) {
              return function () {
                (this.page.identifier = e.identifier),
                  (this.page.url = e.url),
                  (this.page.title = e.title),
                  (this.page.remote_auth_s3 = e.remoteAuthS3),
                  (this.page.api_key = e.apiKey),
                  (this.language = e.language);
              };
            }),
            (n.loadInstance = function () {
              "undefined" != typeof window &&
                window.document &&
                ((window.disqus_config = this.getDisqusConfig(
                  this.props.config
                )),
                window.document.getElementById("dsq-embed-scr")
                  ? this.reloadInstance()
                  : (0, s.insertScript)(
                      this.embedUrl,
                      "dsq-embed-scr",
                      window.document.body
                    ));
            }),
            (n.reloadInstance = function () {
              window && window.DISQUS && window.DISQUS.reset({ reload: !0 });
            }),
            (n.cleanInstance = function () {
              (0, s.removeScript)("dsq-embed-scr", window.document.body);
              try {
                delete window.DISQUS;
              } catch (n) {
                window.DISQUS = void 0;
              }
              var e = window.document.getElementById("disqus_thread");
              if (e) for (; e.hasChildNodes(); ) e.removeChild(e.firstChild);
              if (window.document.querySelector('[id^="dsq-app"]')) {
                var t = window.document.getElementById(
                  window.document.querySelector('[id^="dsq-app"]').id
                );
                t.parentNode.removeChild(t);
              }
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.config, (0, i.default)(e, ["config"]));
              return l.default.createElement(
                "div",
                (0, r.default)({ id: "disqus_thread" }, t, {
                  __self: this,
                  __source: {
                    fileName:
                      "/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",
                    lineNumber: 86,
                    columnNumber: 7,
                  },
                })
              );
            }),
            t
          );
        })(l.default.Component);
      (t.default = u),
        (u.propTypes = {
          config: c.default.shape({
            identifier: c.default.string,
            title: c.default.string,
            url: c.default.string,
            language: c.default.string,
            remoteAuthS3: c.default.string,
            apiKey: c.default.string,
          }),
        });
    },
    dQcQ: function (e, t, n) {
      var o = n("hMe3");
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    gC2u: function (e, t) {
      (e.exports = function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    hMe3: function (e, t) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    m7BV: function (e, t) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    qASQ: function (e, t, n) {
      "use strict";
      var o = n("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var r = o(n("j8BX")),
        i = o(n("uDP2")),
        a = o(n("XEEL")),
        l = o(n("q1tI")),
        c = o(n("17x9")),
        s = n("4M6O"),
        u = (0, s.debounce)(
          function () {
            window.DISQUSWIDGETS &&
              window.DISQUSWIDGETS.getCount({ reset: !0 });
          },
          300,
          !1
        ),
        d = (function (e) {
          function t(t) {
            var n;
            return ((n = e.call(this, t) || this).shortname = "Josh"), n;
          }
          (0, a.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.loadInstance();
            }),
            (n.shouldComponentUpdate = function (e) {
              return (
                this.props !== e && (0, s.shallowComparison)(this.props, e)
              );
            }),
            (n.componentDidUpdate = function () {
              this.loadInstance();
            }),
            (n.componentWillUnmount = function () {
              this.cleanInstance();
            }),
            (n.loadInstance = function () {
              window.document.getElementById("dsq-count-scr")
                ? u()
                : (0, s.insertScript)(
                    "https://" + this.shortname + ".disqus.com/count.js",
                    "dsq-count-scr",
                    window.document.body
                  );
            }),
            (n.cleanInstance = function () {
              (0, s.removeScript)("dsq-count-scr", window.document.body),
                (window.DISQUSWIDGETS = void 0);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.config,
                n = e.placeholder,
                o = (0, i.default)(e, ["config", "placeholder"]);
              return l.default.createElement(
                "span",
                (0, r.default)(
                  {
                    className: "disqus-comment-count",
                    "data-disqus-identifier": t.identifier,
                    "data-disqus-url": t.url,
                  },
                  o,
                  {
                    __self: this,
                    __source: {
                      fileName:
                        "/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",
                      lineNumber: 53,
                      columnNumber: 7,
                    },
                  }
                ),
                n
              );
            }),
            t
          );
        })(l.default.Component);
      (t.default = d),
        (d.defaultProps = { placeholder: "..." }),
        (d.propTypes = {
          config: c.default.shape({
            identifier: c.default.string,
            title: c.default.string,
            url: c.default.string,
          }),
          placeholder: c.default.string,
        });
    },
    qHws: function (e, t, n) {
      var o = n("hMe3");
      (e.exports = function (e) {
        if (Array.isArray(e)) return o(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    vAJ3: function (e, t, n) {
      "use strict";
      var o = n("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var r = o(n("XEEL")),
        i = o(n("q1tI")),
        a = o(n("17x9")),
        l = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          (0, r.default)(t, e);
          var n = t.prototype;
          return (
            (n.getSrc = function () {
              return (
                "https://embed.disqus.com/p/" +
                Number(this.props.commentId).toString(36) +
                "?p=" +
                (this.props.showParentComment ? "1" : "0") +
                "&m=" +
                (this.props.showMedia ? "1" : "0")
              );
            }),
            (n.render = function () {
              return i.default.createElement("iframe", {
                src: this.getSrc(),
                width: this.props.width,
                height: this.props.height,
                seamless: "seamless",
                scrolling: "no",
                frameBorder: "0",
                __self: this,
                __source: {
                  fileName:
                    "/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",
                  lineNumber: 17,
                  columnNumber: 13,
                },
              });
            }),
            t
          );
        })(i.default.Component);
      (t.default = l),
        (l.defaultProps = {
          width: 420,
          height: 320,
          showMedia: !0,
          showParentComment: !0,
        }),
        (l.propTypes = {
          commentId: a.default.string.isRequired,
          width: a.default.number,
          height: a.default.number,
          showMedia: a.default.bool,
          showParentComment: a.default.bool,
        });
    },
  },
]);
//# sourceMappingURL=component---src-templates-blog-post-index-tsx-3ab724e49fe93fa8e7fb.js.map
