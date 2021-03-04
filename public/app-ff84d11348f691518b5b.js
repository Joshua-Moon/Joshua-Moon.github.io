/*! For license information please see app-ff84d11348f691518b5b.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "+ZDr": function (t, e, n) {
      "use strict";
      var r = n("5NKs");
      (e.__esModule = !0),
        (e.withPrefix = h),
        (e.withAssetPrefix = function (t) {
          return h(t, v());
        }),
        (e.navigateTo = e.replace = e.push = e.navigate = e.default = void 0);
      var o = r(n("uDP2")),
        a = r(n("v06X")),
        i = r(n("XEEL")),
        u = r(n("j8BX")),
        s = r(n("17x9")),
        c = r(n("q1tI")),
        l = n("YwZP"),
        p = n("LYrO"),
        f = n("cu4x");
      e.parsePath = f.parsePath;
      var d = function (t) {
        return null == t ? void 0 : t.startsWith("/");
      };
      function h(t, e) {
        var n, r;
        if ((void 0 === e && (e = m()), !g(t))) return t;
        if (t.startsWith("./") || t.startsWith("../")) return t;
        var o =
          null !== (n = null !== (r = e) && void 0 !== r ? r : v()) &&
          void 0 !== n
            ? n
            : "/";
        return (
          "" +
          ((null == o ? void 0 : o.endsWith("/")) ? o.slice(0, -1) : o) +
          (t.startsWith("/") ? t : "/" + t)
        );
      }
      var v = function () {
          return "";
        },
        m = function () {
          return "";
        },
        g = function (t) {
          return (
            t &&
            !t.startsWith("http://") &&
            !t.startsWith("https://") &&
            !t.startsWith("//")
          );
        };
      var y = function (t, e) {
          return "number" == typeof t
            ? t
            : g(t)
            ? d(t)
              ? h(t)
              : (function (t, e) {
                  return d(t) ? t : (0, p.resolve)(t, e);
                })(t, e)
            : t;
        },
        b = {
          activeClassName: s.default.string,
          activeStyle: s.default.object,
          partiallyActive: s.default.bool,
        };
      function w(t) {
        return c.default.createElement(l.Location, null, function (e) {
          var n = e.location;
          return c.default.createElement(
            P,
            (0, u.default)({}, t, { _location: n })
          );
        });
      }
      var P = (function (t) {
        function e(e) {
          var n;
          (n = t.call(this, e) || this).defaultGetProps = function (t) {
            var e = t.isPartiallyCurrent,
              r = t.isCurrent;
            return (n.props.partiallyActive ? e : r)
              ? {
                  className: [n.props.className, n.props.activeClassName]
                    .filter(Boolean)
                    .join(" "),
                  style: (0, u.default)({}, n.props.style, n.props.activeStyle),
                }
              : null;
          };
          var r = !1;
          return (
            "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(e, t);
        var n = e.prototype;
        return (
          (n._prefetch = function () {
            var t = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname);
            var e = y(this.props.to, t),
              n = (0, f.parsePath)(e).pathname;
            t !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function (t, e) {
            this.props.to === t.to ||
              this.state.IOSupported ||
              this._prefetch();
          }),
          (n.componentDidMount = function () {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var t = this.io,
                e = t.instance,
                n = t.el;
              e.unobserve(n), e.disconnect();
            }
          }),
          (n.handleRef = function (t) {
            var e,
              n,
              r,
              o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty("current")
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function () {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n());
                    });
                  })).observe(e),
                  { instance: r, el: e }));
          }),
          (n.render = function () {
            var t = this,
              e = this.props,
              n = e.to,
              r = e.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = e.onClick,
              s = e.onMouseEnter,
              p =
                (e.activeClassName,
                e.activeStyle,
                e.innerRef,
                e.partiallyActive,
                e.state),
              d = e.replace,
              h = e._location,
              v = (0, o.default)(e, [
                "to",
                "getProps",
                "onClick",
                "onMouseEnter",
                "activeClassName",
                "activeStyle",
                "innerRef",
                "partiallyActive",
                "state",
                "replace",
                "_location",
              ]);
            var m = y(n, h.pathname);
            return g(m)
              ? c.default.createElement(
                  l.Link,
                  (0, u.default)(
                    {
                      to: m,
                      state: p,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function (t) {
                        s && s(t),
                          ___loader.hovering((0, f.parsePath)(m).pathname);
                      },
                      onClick: function (e) {
                        if (
                          (i && i(e),
                          !(
                            0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault();
                          var n = d,
                            r = encodeURI(m) === h.pathname;
                          "boolean" != typeof d && r && (n = !0),
                            window.___navigate(m, { state: p, replace: n });
                        }
                        return !0;
                      },
                    },
                    v
                  )
                )
              : c.default.createElement("a", (0, u.default)({ href: m }, v));
          }),
          e
        );
      })(c.default.Component);
      P.propTypes = (0, u.default)({}, b, {
        onClick: s.default.func,
        to: s.default.string.isRequired,
        replace: s.default.bool,
        state: s.default.object,
      });
      var R = function (t, e, n) {
          return console.warn(
            'The "' +
              t +
              '" method is now deprecated and will be removed in Gatsby v' +
              n +
              '. Please use "' +
              e +
              '" instead.'
          );
        },
        _ = c.default.forwardRef(function (t, e) {
          return c.default.createElement(w, (0, u.default)({ innerRef: e }, t));
        });
      e.default = _;
      e.navigate = function (t, e) {
        window.___navigate(y(t, window.location.pathname), e);
      };
      var O = function (t) {
        R("push", "navigate", 3),
          window.___push(y(t, window.location.pathname));
      };
      e.push = O;
      e.replace = function (t) {
        R("replace", "navigate", 3),
          window.___replace(y(t, window.location.pathname));
      };
      e.navigateTo = function (t) {
        return R("navigateTo", "navigate", 3), O(t);
      };
    },
    "/hTd": function (t, e, n) {
      "use strict";
      (e.__esModule = !0), (e.SessionStorage = void 0);
      var r = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.read = function (t, e) {
            var n = this.getStateKey(t, e);
            try {
              var r = window.sessionStorage.getItem(n);
              return r ? JSON.parse(r) : 0;
            } catch (o) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : 0;
            }
          }),
          (e.save = function (t, e, n) {
            var r = this.getStateKey(t, e),
              o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (a) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o));
            }
          }),
          (e.getStateKey = function (t, e) {
            var n = "@@scroll|" + t.pathname;
            return null == e ? n : n + "|" + e;
          }),
          t
        );
      })();
      e.SessionStorage = r;
    },
    "30RF": function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "b", function () {
          return d;
        });
      var r = n("LYrO"),
        o = n("cSJ8"),
        a = function (t) {
          return void 0 === t
            ? t
            : "/" === t
            ? "/"
            : "/" === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t;
        },
        i = new Map(),
        u = [],
        s = function (t) {
          var e = decodeURIComponent(t);
          return Object(o.a)(e, "").split("#")[0].split("?")[0];
        };
      function c(t) {
        return t.startsWith("/") ||
          t.startsWith("https://") ||
          t.startsWith("http://")
          ? t
          : new URL(
              t,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname;
      }
      var l = function (t) {
          u = t;
        },
        p = function (t) {
          var e = h(t),
            n = u.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = Object(r.pick)(n, e);
          return o ? a(o.route.originalPath) : null;
        },
        f = function (t) {
          var e = h(t),
            n = u.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = Object(r.pick)(n, e);
          return o ? o.params : {};
        },
        d = function (t) {
          var e = s(c(t));
          if (i.has(e)) return i.get(e);
          var n = p(e);
          return n || (n = h(t)), i.set(e, n), n;
        },
        h = function (t) {
          var e = s(c(t));
          return "/index.html" === e && (e = "/"), (e = a(e));
        };
    },
    "3uz+": function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.useScrollRestoration = function (t) {
          var e = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)();
          return (
            (0, o.useLayoutEffect)(function () {
              if (i.current) {
                var r = n.read(e, t);
                i.current.scrollTo(0, r || 0);
              }
            }, []),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(e, t, i.current.scrollTop);
              },
            }
          );
        });
      var r = n("Enzk"),
        o = n("q1tI"),
        a = n("YwZP");
    },
    "5NKs": function (t, e) {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "5yr3": function (t, e, n) {
      "use strict";
      var r = (function (t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function (e, n) {
              (t[e] || (t[e] = [])).push(n);
            },
            off: function (e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
            },
            emit: function (e, n) {
              (t[e] || []).slice().map(function (t) {
                t(n);
              }),
                (t["*"] || []).slice().map(function (t) {
                  t(e, n);
                });
            },
          }
        );
      })();
      e.a = r;
    },
    "7hJ6": function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.useScrollRestoration = e.ScrollContainer = e.ScrollContext = void 0);
      var r = n("Enzk");
      e.ScrollContext = r.ScrollHandler;
      var o = n("hd9s");
      e.ScrollContainer = o.ScrollContainer;
      var a = n("3uz+");
      e.useScrollRestoration = a.useScrollRestoration;
    },
    "94VI": function (t, e) {
      e.polyfill = function (t) {
        return t;
      };
    },
    "9Hrx": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n("gUOe");
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          Object(r.a)(t, e);
      }
    },
    "9Xx/": function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return s;
      }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return i;
        });
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        o = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            i = e.protocol,
            s = e.host,
            c = e.hostname,
            l = e.port,
            p = t.location.pathname;
          !p && o && u && (p = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: s,
            hostname: c,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || "initial",
          };
        },
        a = function (t, e) {
          var n = [],
            a = o(t),
            i = !1,
            u = function () {};
          return {
            get location() {
              return a;
            },
            get transitioning() {
              return i;
            },
            _onTransitionComplete: function () {
              (i = !1), u();
            },
            listen: function (e) {
              n.push(e);
              var r = function () {
                (a = o(t)), e({ location: a, action: "POP" });
              };
              return (
                t.addEventListener("popstate", r),
                function () {
                  t.removeEventListener("popstate", r),
                    (n = n.filter(function (t) {
                      return t !== e;
                    }));
                }
              );
            },
            navigate: function (e) {
              var s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                c = s.state,
                l = s.replace,
                p = void 0 !== l && l;
              if ("number" == typeof e) t.history.go(e);
              else {
                c = r({}, c, { key: Date.now() + "" });
                try {
                  i || p
                    ? t.history.replaceState(c, null, e)
                    : t.history.pushState(c, null, e);
                } catch (d) {
                  t.location[p ? "replace" : "assign"](e);
                }
              }
              (a = o(t)), (i = !0);
              var f = new Promise(function (t) {
                return (u = t);
              });
              return (
                n.forEach(function (t) {
                  return t({ location: a, action: "PUSH" });
                }),
                f
              );
            },
          };
        },
        i = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            e = t.indexOf("?"),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : "",
            },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (t, e, n) {
                var i = n.split("?"),
                  u = i[0],
                  s = i[1],
                  c = void 0 === s ? "" : s;
                r++,
                  o.push({ pathname: u, search: c.length ? "?" + c : c }),
                  a.push(t);
              },
              replaceState: function (t, e, n) {
                var i = n.split("?"),
                  u = i[0],
                  s = i[1],
                  c = void 0 === s ? "" : s;
                (o[r] = { pathname: u, search: c }), (a[r] = t);
              },
              go: function (t) {
                var e = r + t;
                e < 0 || e > a.length - 1 || (r = e);
              },
            },
          };
        },
        u = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        s = a(u ? window : i()),
        c = s.navigate;
    },
    "9hXx": function (t, e, n) {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      e.default = function (t, e) {
        if (!Array.isArray(e)) return "manifest.webmanifest";
        var n = e.find(function (e) {
          return t.startsWith(e.start_url);
        });
        return n
          ? "manifest_" + n.lang + ".webmanifest"
          : "manifest.webmanifest";
      };
    },
    Enzk: function (t, e, n) {
      "use strict";
      var r = n("jGDn"),
        o = n("5NKs");
      (e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0);
      var a = o(n("v06X")),
        i = o(n("XEEL")),
        u = r(n("q1tI")),
        s = o(n("17x9")),
        c = n("/hTd"),
        l = u.createContext(new c.SessionStorage());
      (e.ScrollContext = l), (l.displayName = "GatsbyScrollContext");
      var p = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((e =
              t.call.apply(t, [this].concat(r)) ||
              this)._stateStorage = new c.SessionStorage()),
            (e.scrollListener = function () {
              var t = e.props.location.key;
              t && e._stateStorage.save(e.props.location, t, window.scrollY);
            }),
            (e.windowScroll = function (t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t);
            }),
            (e.scrollToHash = function (t, n) {
              var r = document.getElementById(t.substring(1));
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView();
            }),
            (e.shouldUpdateScroll = function (t, n) {
              var r = e.props.shouldUpdateScroll;
              return !r || r.call((0, a.default)(e), t, n);
            }),
            e
          );
        }
        (0, i.default)(e, t);
        var n = e.prototype;
        return (
          (n.componentDidMount = function () {
            var t;
            window.addEventListener("scroll", this.scrollListener);
            var e = this.props.location,
              n = e.key,
              r = e.hash;
            n && (t = this._stateStorage.read(this.props.location, n)),
              t
                ? this.windowScroll(t, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener("scroll", this.scrollListener);
          }),
          (n.componentDidUpdate = function (t) {
            var e,
              n = this.props.location,
              r = n.hash,
              o = n.key;
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t);
          }),
          (n.render = function () {
            return u.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            );
          }),
          e
        );
      })(u.Component);
      (e.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired,
        });
    },
    GddB: function (t, e, n) {
      "use strict";
      n.r(e);
      n("qHiR"), n("TpNv");
    },
    IOVJ: function (t, e, n) {
      "use strict";
      var r = n("9Hrx"),
        o = n("q1tI"),
        a = n.n(o),
        i = n("emEt"),
        u = n("xtsi"),
        s = n("30RF"),
        c = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(e, t),
            (e.prototype.render = function () {
              var t = Object.assign({}, this.props, {
                  params: Object.assign(
                    {},
                    Object(s.c)(this.props.location.pathname),
                    this.props.pageResources.json.pageContext.__params
                  ),
                  pathContext: this.props.pageContext,
                }),
                e =
                  Object(u.apiRunner)("replaceComponentRenderer", {
                    props: this.props,
                    loader: i.publicLoader,
                  })[0] ||
                  Object(o.createElement)(
                    this.props.pageResources.component,
                    Object.assign({}, t, {
                      key:
                        this.props.path || this.props.pageResources.page.path,
                    })
                  );
              return Object(u.apiRunner)(
                "wrapPageElement",
                { element: e, props: t },
                e,
                function (e) {
                  return { element: e.result, props: t };
                }
              ).pop();
            }),
            e
          );
        })(a.a.Component);
      e.a = c;
    },
    JeVI: function (t) {
      t.exports = JSON.parse("[]");
    },
    LYrO: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "startsWith", function () {
          return a;
        }),
        n.d(e, "pick", function () {
          return i;
        }),
        n.d(e, "match", function () {
          return u;
        }),
        n.d(e, "resolve", function () {
          return s;
        }),
        n.d(e, "insertParams", function () {
          return c;
        }),
        n.d(e, "validateRedirect", function () {
          return l;
        }),
        n.d(e, "shallowCompare", function () {
          return b;
        });
      var r = n("QLaP"),
        o = n.n(r),
        a = function (t, e) {
          return t.substr(0, e.length) === e;
        },
        i = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              a = e.split("?")[0],
              i = m(a),
              u = "" === i[0],
              s = v(t),
              c = 0,
              l = s.length;
            c < l;
            c++
          ) {
            var f = !1,
              h = s[c].route;
            if (h.default) r = { route: h, params: {}, uri: e };
            else {
              for (
                var g = m(h.path),
                  b = {},
                  w = Math.max(i.length, g.length),
                  P = 0;
                P < w;
                P++
              ) {
                var R = g[P],
                  _ = i[P];
                if (d(R)) {
                  b[R.slice(1) || "*"] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === _) {
                  f = !0;
                  break;
                }
                var O = p.exec(R);
                if (O && !u) {
                  -1 === y.indexOf(O[1]) || o()(!1);
                  var x = decodeURIComponent(_);
                  b[O[1]] = x;
                } else if (R !== _) {
                  f = !0;
                  break;
                }
              }
              if (!f) {
                n = { route: h, params: b, uri: "/" + i.slice(0, P).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        u = function (t, e) {
          return i([{ path: t }], e);
        },
        s = function (t, e) {
          if (a(t, "/")) return t;
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            i = e.split("?")[0],
            u = m(r),
            s = m(i);
          if ("" === u[0]) return g(i, o);
          if (!a(u[0], ".")) {
            var c = s.concat(u).join("/");
            return g(("/" === i ? "" : "/") + c, o);
          }
          for (var l = s.concat(u), p = [], f = 0, d = l.length; f < d; f++) {
            var h = l[f];
            ".." === h ? p.pop() : "." !== h && p.push(h);
          }
          return g("/" + p.join("/"), o);
        },
        c = function (t, e) {
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              m(r)
                .map(function (t) {
                  var n = p.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join("/"),
            u = e.location,
            s = (u = void 0 === u ? {} : u).search,
            c = (void 0 === s ? "" : s).split("?")[1] || "";
          return (i = g(i, a, c));
        },
        l = function (t, e) {
          var n = function (t) {
            return f(t);
          };
          return (
            m(t).filter(n).sort().join("/") === m(e).filter(n).sort().join("/")
          );
        },
        p = /^:(.+)/,
        f = function (t) {
          return p.test(t);
        },
        d = function (t) {
          return t && "*" === t[0];
        },
        h = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : m(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return "" === t;
                    })(e)
                      ? f(e)
                        ? (t += 2)
                        : d(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  );
                }, 0),
            index: e,
          };
        },
        v = function (t) {
          return t.map(h).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index;
          });
        },
        m = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        g = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0;
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          );
        },
        y = ["uri", "path"],
        b = function (t, e) {
          var n = Object.keys(t);
          return (
            n.length === Object.keys(e).length &&
            n.every(function (n) {
              return e.hasOwnProperty(n) && t[n] === e[n];
            })
          );
        };
    },
    LeKB: function (t, e, n) {
      t.exports = [
        {
          plugin: n("q9nr"),
          options: { plugins: [], maxWidth: 726, showCaptions: !0 },
        },
        { plugin: n("hUyl"), options: { plugins: [] } },
        {
          plugin: n("npZl"),
          options: {
            plugins: [],
            name: "gatsby-starter-default",
            short_name: "starter",
            start_url: "/",
            background_color: "#663399",
            theme_color: "#663399",
            display: "minimal-ui",
            icon: "static/assets/imgs/me.jpg",
            cache_busting_mode: "query",
            include_favicon: !0,
            legacy: !0,
            theme_color_in_head: !0,
            cacheDigest: "e086d9fa26f0982bdea4aba2cd6f0c94",
          },
        },
        {
          plugin: n("pWkz"),
          options: { plugins: [], trackingId: "UA-31588166-2" },
        },
        { plugin: n("GddB"), options: { plugins: [] } },
      ];
    },
    MMVs: function (t, e, n) {
      t.exports = (function () {
        var t = !1;
        -1 !== navigator.appVersion.indexOf("MSIE 10") && (t = !0);
        var e,
          n = [],
          r = "object" == typeof document && document,
          o = t
            ? r.documentElement.doScroll("left")
            : r.documentElement.doScroll,
          a = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !a &&
            r &&
            r.addEventListener(
              "DOMContentLoaded",
              (e = function () {
                for (
                  r.removeEventListener("DOMContentLoaded", e), a = 1;
                  (e = n.shift());

                )
                  e();
              })
            ),
          function (t) {
            a ? setTimeout(t, 0) : n.push(t);
          }
        );
      })();
    },
    NSX3: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("xtsi");
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/sw.js")
            .then(function (t) {
              t.addEventListener("updatefound", function () {
                Object(r.apiRunner)("onServiceWorkerUpdateFound", {
                  serviceWorker: t,
                });
                var e = t.installing;
                console.log("installingWorker", e),
                  e.addEventListener("statechange", function () {
                    switch (e.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(r.apiRunner)("onServiceWorkerUpdateReady", {
                              serviceWorker: t,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            Object(r.apiRunner)("onServiceWorkerInstalled", {
                              serviceWorker: t,
                            }));
                        break;
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          Object(r.apiRunner)("onServiceWorkerRedundant", {
                            serviceWorker: t,
                          });
                        break;
                      case "activated":
                        Object(r.apiRunner)("onServiceWorkerActive", {
                          serviceWorker: t,
                        });
                    }
                  });
              });
            })
            .catch(function (t) {
              console.error("Error during service worker registration:", t);
            });
    },
    NsGk: function (t, e, n) {
      e.components = {
        "component---src-pages-404-tsx": function () {
          return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "i6+/"));
        },
        "component---src-pages-category-dev-tsx": function () {
          return Promise.all([n.e(0), n.e(1), n.e(5)]).then(
            n.bind(null, "8VoU")
          );
        },
        "component---src-pages-category-index-tsx": function () {
          return Promise.all([n.e(0), n.e(1), n.e(6)]).then(
            n.bind(null, "XEZr")
          );
        },
        "component---src-pages-category-series-tsx": function () {
          return Promise.all([n.e(0), n.e(1), n.e(7)]).then(
            n.bind(null, "HTls")
          );
        },
        "component---src-pages-category-think-tsx": function () {
          return Promise.all([n.e(0), n.e(1), n.e(8)]).then(
            n.bind(null, "70It")
          );
        },
        "component---src-pages-index-tsx": function () {
          return Promise.all([n.e(0), n.e(1), n.e(9)]).then(
            n.bind(null, "QeBL")
          );
        },
        "component---src-pages-tags-index-tsx": function () {
          return Promise.all([n.e(0), n.e(1), n.e(10)]).then(
            n.bind(null, "ekAe")
          );
        },
        "component---src-templates-blog-post-index-tsx": function () {
          return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "8JVb"));
        },
      };
    },
    Q83E: function (t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n(e, r)
        );
      }
      (t.exports = n),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    QLaP: function (t, e, n) {
      "use strict";
      t.exports = function (t, e, n, r, o, a, i, u) {
        if (!t) {
          var s;
          if (void 0 === e)
            s = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [n, r, o, a, i, u],
              l = 0;
            (s = new Error(
              e.replace(/%s/g, function () {
                return c[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    TpNv: function (t, e, n) {},
    UxWs: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("9Hrx"),
        o = n("xtsi"),
        a = n("q1tI"),
        i = n.n(a),
        u = n("i8i4"),
        s = n.n(u),
        c = n("YwZP"),
        l = n("7hJ6"),
        p = n("MMVs"),
        f = n.n(p),
        d = n("Wbzz"),
        h = n("emEt"),
        v = n("YLt+"),
        m = n("5yr3"),
        g = {
          id: "gatsby-announcer",
          style: {
            position: "absolute",
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          },
          "aria-live": "assertive",
          "aria-atomic": "true",
        },
        y = n("9Xx/"),
        b = n("+ZDr"),
        w = new Map(),
        P = new Map();
      function R(t) {
        var e = w.get(t);
        return (
          e || (e = P.get(t.toLowerCase())),
          null != e && (window.___replace(e.toPath), !0)
        );
      }
      v.forEach(function (t) {
        t.ignoreCase ? P.set(t.fromPath, t) : w.set(t.fromPath, t);
      });
      var _ = function (t, e) {
          R(t.pathname) ||
            Object(o.apiRunner)("onPreRouteUpdate", {
              location: t,
              prevLocation: e,
            });
        },
        O = function (t, e) {
          R(t.pathname) ||
            Object(o.apiRunner)("onRouteUpdate", {
              location: t,
              prevLocation: e,
            });
        },
        x = function (t, e) {
          if ((void 0 === e && (e = {}), "number" != typeof t)) {
            var n = Object(b.parsePath)(t).pathname,
              r = w.get(n);
            if (
              (r || (r = P.get(n.toLowerCase())),
              r && ((t = r.toPath), (n = Object(b.parsePath)(t).pathname)),
              window.___swUpdated)
            )
              window.location = n;
            else {
              var a = setTimeout(function () {
                m.a.emit("onDelayedLoadPageResources", { pathname: n }),
                  Object(o.apiRunner)("onRouteUpdateDelayed", {
                    location: window.location,
                  });
              }, 1e3);
              h.default.loadPage(n).then(function (r) {
                if (!r || r.status === h.PageResourceStatus.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = n),
                    void clearTimeout(a)
                  );
                r &&
                  r.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources",
                    }),
                  (window.location = n)),
                  Object(c.navigate)(t, e),
                  clearTimeout(a);
              });
            }
          } else y.c.navigate(t);
        };
      function S(t, e) {
        var n = this,
          r = e.location,
          a = r.pathname,
          i = r.hash,
          u = Object(o.apiRunner)("shouldUpdateScroll", {
            prevRouterProps: t,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function (t) {
              return [0, n._stateStorage.read(t, t.key)];
            },
          });
        if (u.length > 0) return u[u.length - 1];
        if (t && t.location.pathname === a)
          return i ? decodeURI(i.slice(1)) : [0, 0];
        return !0;
      }
      var E = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).announcementRef = i.a.createRef()),
              n
            );
          }
          Object(r.a)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidUpdate = function (t, e) {
              var n = this;
              requestAnimationFrame(function () {
                var t = "new page at " + n.props.location.pathname;
                document.title && (t = document.title);
                var e = document.querySelectorAll("#gatsby-focus-wrapper h1");
                e && e.length && (t = e[0].textContent);
                var r = "Navigated to " + t;
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r);
              });
            }),
            (n.render = function () {
              return i.a.createElement(
                "div",
                Object.assign({}, g, { ref: this.announcementRef })
              );
            }),
            e
          );
        })(i.a.Component),
        j = function (t, e) {
          var n, r;
          return (
            t.href !== e.href ||
            (null == t || null === (n = t.state) || void 0 === n
              ? void 0
              : n.key) !==
              (null == e || null === (r = e.state) || void 0 === r
                ? void 0
                : r.key)
          );
        },
        C = (function (t) {
          function e(e) {
            var n;
            return (n = t.call(this, e) || this), _(e.location, null), n;
          }
          Object(r.a)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              O(this.props.location, null);
            }),
            (n.shouldComponentUpdate = function (t) {
              return (
                !!j(t.location, this.props.location) &&
                (_(this.props.location, t.location), !0)
              );
            }),
            (n.componentDidUpdate = function (t) {
              j(t.location, this.props.location) &&
                O(this.props.location, t.location);
            }),
            (n.render = function () {
              return i.a.createElement(
                i.a.Fragment,
                null,
                this.props.children,
                i.a.createElement(E, { location: location })
              );
            }),
            e
          );
        })(i.a.Component),
        k = n("IOVJ"),
        L = n("NsGk"),
        D = n.n(L);
      function T(t, e) {
        for (var n in t) if (!(n in e)) return !0;
        for (var r in e) if (t[r] !== e[r]) return !0;
        return !1;
      }
      var U = (function (t) {
          function e(e) {
            var n;
            n = t.call(this) || this;
            var r = e.location,
              o = e.pageResources;
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources: o || h.default.loadPageSync(r.pathname),
              }),
              n
            );
          }
          Object(r.a)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = t.location;
              return e.location.href !== n.href
                ? {
                    pageResources: h.default.loadPageSync(n.pathname),
                    location: Object.assign({}, n),
                  }
                : { location: Object.assign({}, n) };
            });
          var n = e.prototype;
          return (
            (n.loadResources = function (t) {
              var e = this;
              h.default.loadPage(t).then(function (n) {
                n && n.status !== h.PageResourceStatus.Error
                  ? e.setState({
                      location: Object.assign({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = t));
              });
            }),
            (n.shouldComponentUpdate = function (t, e) {
              return e.pageResources
                ? this.state.pageResources !== e.pageResources ||
                    this.state.pageResources.component !==
                      e.pageResources.component ||
                    this.state.pageResources.json !== e.pageResources.json ||
                    !(
                      this.state.location.key === e.location.key ||
                      !e.pageResources.page ||
                      (!e.pageResources.page.matchPath &&
                        !e.pageResources.page.path)
                    ) ||
                    (function (t, e, n) {
                      return T(t.props, e) || T(t.state, n);
                    })(this, t, e)
                : (this.loadResources(t.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            e
          );
        })(i.a.Component),
        M = n("cSJ8"),
        A = n("JeVI"),
        I = new h.ProdLoader(D.a, A);
      Object(h.setLoader)(I),
        I.setApiRunner(o.apiRunner),
        (window.asyncRequires = D.a),
        (window.___emitter = m.a),
        (window.___loader = h.publicLoader),
        y.c.listen(function (t) {
          t.location.action = t.action;
        }),
        (window.___push = function (t) {
          return x(t, { replace: !1 });
        }),
        (window.___replace = function (t) {
          return x(t, { replace: !0 });
        }),
        (window.___navigate = function (t, e) {
          return x(t, e);
        }),
        R(window.location.pathname),
        Object(o.apiRunnerAsync)("onClientEntry").then(function () {
          Object(o.apiRunner)("registerServiceWorker").length > 0 && n("NSX3");
          var t = function (t) {
              return i.a.createElement(
                c.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                i.a.createElement(k.a, t)
              );
            },
            e = i.a.createContext({}),
            a = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(n, t),
                (n.prototype.render = function () {
                  var t = this.props.children;
                  return i.a.createElement(c.Location, null, function (n) {
                    var r = n.location;
                    return i.a.createElement(U, { location: r }, function (n) {
                      var r = n.pageResources,
                        o = n.location,
                        a = Object(h.getStaticQueryResults)();
                      return i.a.createElement(
                        d.StaticQueryContext.Provider,
                        { value: a },
                        i.a.createElement(
                          e.Provider,
                          { value: { pageResources: r, location: o } },
                          t
                        )
                      );
                    });
                  });
                }),
                n
              );
            })(i.a.Component),
            u = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(o, n),
                (o.prototype.render = function () {
                  var n = this;
                  return i.a.createElement(e.Consumer, null, function (e) {
                    var r = e.pageResources,
                      o = e.location;
                    return i.a.createElement(
                      C,
                      { location: o },
                      i.a.createElement(
                        l.ScrollContext,
                        { location: o, shouldUpdateScroll: S },
                        i.a.createElement(
                          c.Router,
                          {
                            basepath: "",
                            location: o,
                            id: "gatsby-focus-wrapper",
                          },
                          i.a.createElement(
                            t,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === r.page.path
                                    ? Object(M.a)(o.pathname, "")
                                    : encodeURI(
                                        r.page.matchPath || r.page.path
                                      ),
                              },
                              n.props,
                              { location: o, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                o
              );
            })(i.a.Component),
            p = window,
            v = p.pagePath,
            m = p.location;
          v &&
            "" + v !== m.pathname &&
            !(
              I.findMatchPath(Object(M.a)(m.pathname, "")) ||
              "/404.html" === v ||
              v.match(/^\/404\/?$/) ||
              v.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(c.navigate)("" + v + m.search + m.hash, { replace: !0 }),
            h.publicLoader.loadPage(m.pathname).then(function (t) {
              if (!t || t.status === h.PageResourceStatus.Error)
                throw new Error(
                  "page resources for " +
                    m.pathname +
                    " not found. Not rendering React"
                );
              window.___webpackCompilationHash = t.page.webpackCompilationHash;
              var e = Object(o.apiRunner)(
                  "wrapRootElement",
                  { element: i.a.createElement(u, null) },
                  i.a.createElement(u, null),
                  function (t) {
                    return { element: t.result };
                  }
                ).pop(),
                n = function () {
                  return i.a.createElement(a, null, e);
                },
                r = Object(o.apiRunner)(
                  "replaceHydrateFunction",
                  void 0,
                  s.a.hydrate
                )[0];
              f()(function () {
                r(
                  i.a.createElement(n, null),
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : void 0,
                  function () {
                    Object(o.apiRunner)("onInitialClientRender");
                  }
                );
              });
            });
        });
    },
    Wbzz: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "graphql", function () {
          return v;
        }),
        n.d(e, "StaticQueryContext", function () {
          return p;
        }),
        n.d(e, "StaticQuery", function () {
          return d;
        }),
        n.d(e, "useStaticQuery", function () {
          return h;
        }),
        n.d(e, "prefetchPathname", function () {
          return l;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = n("+ZDr"),
        i = n.n(a);
      n.d(e, "Link", function () {
        return i.a;
      }),
        n.d(e, "withAssetPrefix", function () {
          return a.withAssetPrefix;
        }),
        n.d(e, "withPrefix", function () {
          return a.withPrefix;
        }),
        n.d(e, "parsePath", function () {
          return a.parsePath;
        }),
        n.d(e, "navigate", function () {
          return a.navigate;
        }),
        n.d(e, "push", function () {
          return a.push;
        }),
        n.d(e, "replace", function () {
          return a.replace;
        }),
        n.d(e, "navigateTo", function () {
          return a.navigateTo;
        });
      var u = n("7hJ6");
      n.d(e, "useScrollRestoration", function () {
        return u.useScrollRestoration;
      });
      var s = n("lw3w"),
        c = n.n(s);
      n.d(e, "PageRenderer", function () {
        return c.a;
      });
      var l = n("emEt").default.enqueue,
        p = o.a.createContext({});
      function f(t) {
        var e = t.staticQueryData,
          n = t.data,
          r = t.query,
          a = t.render,
          i = n ? n.data : e[r] && e[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          i && a(i),
          !i && o.a.createElement("div", null, "Loading (StaticQuery)")
        );
      }
      var d = function (t) {
          var e = t.data,
            n = t.query,
            r = t.render,
            a = t.children;
          return o.a.createElement(p.Consumer, null, function (t) {
            return o.a.createElement(f, {
              data: e,
              query: n,
              render: r || a,
              staticQueryData: t,
            });
          });
        },
        h = function (t) {
          var e;
          o.a.useContext;
          var n = o.a.useContext(p);
          if (isNaN(Number(t)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                t +
                "`);\n"
            );
          if (null !== (e = n[t]) && void 0 !== e && e.data) return n[t].data;
          throw new Error(
            "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
          );
        };
      function v() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
    },
    XEEL: function (t, e, n) {
      var r = n("Q83E");
      (t.exports = function (t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "YLt+": function (t) {
      t.exports = JSON.parse("[]");
    },
    YVoz: function (t, e, n) {
      "use strict";
      t.exports = Object.assign;
    },
    YwZP: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Link", function () {
          return D;
        }),
        n.d(e, "Location", function () {
          return b;
        }),
        n.d(e, "LocationProvider", function () {
          return w;
        }),
        n.d(e, "Match", function () {
          return F;
        }),
        n.d(e, "Redirect", function () {
          return I;
        }),
        n.d(e, "Router", function () {
          return _;
        }),
        n.d(e, "ServerLocation", function () {
          return P;
        }),
        n.d(e, "isRedirect", function () {
          return U;
        }),
        n.d(e, "redirectTo", function () {
          return M;
        }),
        n.d(e, "useLocation", function () {
          return q;
        }),
        n.d(e, "useNavigate", function () {
          return W;
        }),
        n.d(e, "useParams", function () {
          return N;
        }),
        n.d(e, "useMatch", function () {
          return H;
        }),
        n.d(e, "BaseContext", function () {
          return R;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = (n("17x9"), n("QLaP")),
        i = n.n(a),
        u = n("nqlD"),
        s = n.n(u),
        c = n("94VI"),
        l = n("LYrO");
      n.d(e, "matchPath", function () {
        return l.match;
      });
      var p = n("9Xx/");
      n.d(e, "createHistory", function () {
        return p.a;
      }),
        n.d(e, "createMemorySource", function () {
          return p.b;
        }),
        n.d(e, "navigate", function () {
          return p.d;
        }),
        n.d(e, "globalHistory", function () {
          return p.c;
        });
      var f =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      function d(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function h(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function m(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      var g = function (t, e) {
          var n = s()(e);
          return (n.displayName = t), n;
        },
        y = g("Location"),
        b = function (t) {
          var e = t.children;
          return o.a.createElement(y.Consumer, null, function (t) {
            return t ? e(t) : o.a.createElement(w, null, e);
          });
        },
        w = (function (t) {
          function e() {
            var n, r;
            h(this, e);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = v(this, t.call.apply(t, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              v(r, n)
            );
          }
          return (
            m(e, t),
            (e.prototype.getContext = function () {
              var t = this.props.history;
              return { navigate: t.navigate, location: t.location };
            }),
            (e.prototype.componentDidCatch = function (t, e) {
              if (!U(t)) throw t;
              (0, this.props.history.navigate)(t.uri, { replace: !0 });
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (e.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      t.unmounted ||
                        t.setState(function () {
                          return { context: t.getContext() };
                        });
                    });
                  });
                }));
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.state.refs;
              (this.unmounted = !0), t.unlisten();
            }),
            (e.prototype.render = function () {
              var t = this.state.context,
                e = this.props.children;
              return o.a.createElement(
                y.Provider,
                { value: t },
                "function" == typeof e ? e(t) : e || null
              );
            }),
            e
          );
        })(o.a.Component);
      w.defaultProps = { history: p.c };
      var P = function (t) {
          var e = t.url,
            n = t.children,
            r = e.indexOf("?"),
            a = void 0,
            i = "";
          return (
            r > -1 ? ((a = e.substring(0, r)), (i = e.substring(r))) : (a = e),
            o.a.createElement(
              y.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: "" },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.");
                  },
                },
              },
              n
            )
          );
        },
        R = g("Base", { baseuri: "/", basepath: "/" }),
        _ = function (t) {
          return o.a.createElement(R.Consumer, null, function (e) {
            return o.a.createElement(b, null, function (n) {
              return o.a.createElement(O, f({}, e, n, t));
            });
          });
        },
        O = (function (t) {
          function e() {
            return h(this, e), v(this, t.apply(this, arguments));
          }
          return (
            m(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                r = t.basepath,
                a = t.primary,
                i = t.children,
                u = (t.baseuri, t.component),
                s = void 0 === u ? "div" : u,
                c = d(t, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                p = o.a.Children.toArray(i).reduce(function (t, e) {
                  var n = B(r)(e);
                  return t.concat(n);
                }, []),
                h = e.pathname,
                v = Object(l.pick)(p, h);
              if (v) {
                var m = v.params,
                  g = v.uri,
                  y = v.route,
                  b = v.route.value;
                r = y.default ? r : y.path.replace(/\*$/, "");
                var w = f({}, m, {
                    uri: g,
                    location: e,
                    navigate: function (t, e) {
                      return n(Object(l.resolve)(t, g), e);
                    },
                  }),
                  P = o.a.cloneElement(
                    b,
                    w,
                    b.props.children
                      ? o.a.createElement(
                          _,
                          { location: e, primary: a },
                          b.props.children
                        )
                      : void 0
                  ),
                  O = a ? S : s,
                  x = a ? f({ uri: g, location: e, component: s }, c) : c;
                return o.a.createElement(
                  R.Provider,
                  { value: { baseuri: g, basepath: r } },
                  o.a.createElement(O, x, P)
                );
              }
              return null;
            }),
            e
          );
        })(o.a.PureComponent);
      O.defaultProps = { primary: !0 };
      var x = g("Focus"),
        S = function (t) {
          var e = t.uri,
            n = t.location,
            r = t.component,
            a = d(t, ["uri", "location", "component"]);
          return o.a.createElement(x.Consumer, null, function (t) {
            return o.a.createElement(
              C,
              f({}, a, { component: r, requestFocus: t, uri: e, location: n })
            );
          });
        },
        E = !0,
        j = 0,
        C = (function (t) {
          function e() {
            var n, r;
            h(this, e);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = v(this, t.call.apply(t, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (t) {
                !r.state.shouldFocus && t && t.focus();
              }),
              v(r, n)
            );
          }
          return (
            m(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              if (null == e.uri) return f({ shouldFocus: !0 }, t);
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri;
              return f({ shouldFocus: n || r }, t);
            }),
            (e.prototype.componentDidMount = function () {
              j++, this.focus();
            }),
            (e.prototype.componentWillUnmount = function () {
              0 === --j && (E = !0);
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              t.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (e.prototype.focus = function () {
              var t = this.props.requestFocus;
              t
                ? t(this.node)
                : E
                ? (E = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus());
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                r = (e.requestFocus, e.component),
                a = void 0 === r ? "div" : r,
                i =
                  (e.uri,
                  e.location,
                  d(e, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]));
              return o.a.createElement(
                a,
                f(
                  {
                    style: f({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function (e) {
                      return (t.node = e);
                    },
                  },
                  i
                ),
                o.a.createElement(
                  x.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            e
          );
        })(o.a.Component);
      Object(c.polyfill)(C);
      var k = function () {},
        L = o.a.forwardRef;
      void 0 === L &&
        (L = function (t) {
          return t;
        });
      var D = L(function (t, e) {
        var n = t.innerRef,
          r = d(t, ["innerRef"]);
        return o.a.createElement(R.Consumer, null, function (t) {
          t.basepath;
          var a = t.baseuri;
          return o.a.createElement(b, null, function (t) {
            var i = t.location,
              u = t.navigate,
              s = r.to,
              c = r.state,
              p = r.replace,
              h = r.getProps,
              v = void 0 === h ? k : h,
              m = d(r, ["to", "state", "replace", "getProps"]),
              g = Object(l.resolve)(s, a),
              y = encodeURI(g),
              b = i.pathname === y,
              w = Object(l.startsWith)(i.pathname, y);
            return o.a.createElement(
              "a",
              f(
                { ref: e || n, "aria-current": b ? "page" : void 0 },
                m,
                v({
                  isCurrent: b,
                  isPartiallyCurrent: w,
                  href: g,
                  location: i,
                }),
                {
                  href: g,
                  onClick: function (t) {
                    if ((m.onClick && m.onClick(t), J(t))) {
                      t.preventDefault();
                      var e = p;
                      if ("boolean" != typeof p && b) {
                        var n = f({}, i.state),
                          r = (n.key, d(n, ["key"]));
                        e = Object(l.shallowCompare)(f({}, c), r);
                      }
                      u(g, { state: c, replace: e });
                    }
                  },
                }
              )
            );
          });
        });
      });
      function T(t) {
        this.uri = t;
      }
      D.displayName = "Link";
      var U = function (t) {
          return t instanceof T;
        },
        M = function (t) {
          throw new T(t);
        },
        A = (function (t) {
          function e() {
            return h(this, e), v(this, t.apply(this, arguments));
          }
          return (
            m(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                a = t.state,
                i = (t.noThrow, t.baseuri),
                u = d(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]);
              Promise.resolve().then(function () {
                var t = Object(l.resolve)(n, i);
                e(Object(l.insertParams)(t, u), { replace: o, state: a });
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = d(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                a = Object(l.resolve)(e, r);
              return n || M(Object(l.insertParams)(a, o)), null;
            }),
            e
          );
        })(o.a.Component),
        I = function (t) {
          return o.a.createElement(R.Consumer, null, function (e) {
            var n = e.baseuri;
            return o.a.createElement(b, null, function (e) {
              return o.a.createElement(A, f({}, e, { baseuri: n }, t));
            });
          });
        },
        F = function (t) {
          var e = t.path,
            n = t.children;
          return o.a.createElement(R.Consumer, null, function (t) {
            var r = t.baseuri;
            return o.a.createElement(b, null, function (t) {
              var o = t.navigate,
                a = t.location,
                i = Object(l.resolve)(e, r),
                u = Object(l.match)(i, a.pathname);
              return n({
                navigate: o,
                location: a,
                match: u ? f({}, u.params, { uri: u.uri, path: e }) : null,
              });
            });
          });
        },
        q = function () {
          var t = Object(r.useContext)(y);
          if (!t)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.location;
        },
        W = function () {
          var t = Object(r.useContext)(y);
          if (!t)
            throw new Error(
              "useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.navigate;
        },
        N = function () {
          var t = Object(r.useContext)(R);
          if (!t)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var e = q(),
            n = Object(l.match)(t.basepath, e.pathname);
          return n ? n.params : null;
        },
        H = function (t) {
          if (!t)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            );
          var e = Object(r.useContext)(R);
          if (!e)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var n = q(),
            o = Object(l.resolve)(t, e.baseuri),
            a = Object(l.match)(o, n.pathname);
          return a ? f({}, a.params, { uri: a.uri, path: t }) : null;
        },
        G = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "");
        },
        B = function t(e) {
          return function (n) {
            if (!n) return null;
            if (n.type === o.a.Fragment && n.props.children)
              return o.a.Children.map(n.props.children, t(e));
            if (
              (n.props.path || n.props.default || n.type === I || i()(!1),
              n.type !== I || (n.props.from && n.props.to) || i()(!1),
              n.type !== I ||
                Object(l.validateRedirect)(n.props.from, n.props.to) ||
                i()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var r = n.type === I ? n.props.from : n.props.path,
              a = "/" === r ? e : G(e) + "/" + G(r);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? G(a) + "/*" : a,
            };
          };
        },
        J = function (t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          );
        };
    },
    cSJ8: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          void 0 === e && (e = ""),
          e
            ? t === e
              ? "/"
              : t.startsWith(e + "/")
              ? t.slice(e.length)
              : t
            : t
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    cjBy: function (t, e) {
      function n(e) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? ((t.exports = n = function (t) {
                return typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = n = function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    cu4x: function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.parsePath = function (t) {
          var e = t || "/",
            n = "",
            r = "",
            o = e.indexOf("#");
          -1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)));
          var a = e.indexOf("?");
          -1 !== a && ((n = e.substr(a)), (e = e.substr(0, a)));
          return {
            pathname: e,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
          };
        });
    },
    emEt: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "PageResourceStatus", function () {
          return l;
        }),
        n.d(e, "BaseLoader", function () {
          return m;
        }),
        n.d(e, "ProdLoader", function () {
          return y;
        }),
        n.d(e, "setLoader", function () {
          return b;
        }),
        n.d(e, "publicLoader", function () {
          return w;
        }),
        n.d(e, "getStaticQueryResults", function () {
          return P;
        });
      var r = n("9Hrx"),
        o = n("t8Zj"),
        a = (function (t) {
          if ("undefined" == typeof document) return !1;
          var e = document.createElement("link");
          try {
            if (e.relList && "function" == typeof e.relList.supports)
              return e.relList.supports(t);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (t, e) {
              return new Promise(function (n, r) {
                if ("undefined" != typeof document) {
                  var o = document.createElement("link");
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", t),
                    Object.keys(e).forEach(function (t) {
                      o.setAttribute(t, e[t]);
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(o);
                } else r();
              });
            }
          : function (t) {
              return new Promise(function (e, n) {
                var r = new XMLHttpRequest();
                r.open("GET", t, !0),
                  (r.onload = function () {
                    200 === r.status ? e() : n();
                  }),
                  r.send(null);
              });
            },
        i = {},
        u = function (t, e) {
          return new Promise(function (n) {
            i[t]
              ? n()
              : a(t, e)
                  .then(function () {
                    n(), (i[t] = !0);
                  })
                  .catch(function () {});
          });
        },
        s = n("5yr3"),
        c = n("30RF"),
        l = { Error: "error", Success: "success" },
        p = function (t) {
          return (t && t.default) || t;
        },
        f = function (t) {
          var e;
          return (
            "/page-data/" +
            ("/" === t
              ? "index"
              : (e = (e = "/" === (e = t)[0] ? e.slice(1) : e).endsWith("/")
                  ? e.slice(0, -1)
                  : e)) +
            "/page-data.json"
          );
        };
      function d(t, e) {
        return (
          void 0 === e && (e = "GET"),
          new Promise(function (n, r) {
            var o = new XMLHttpRequest();
            o.open(e, t, !0),
              (o.onreadystatechange = function () {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      var h,
        v = function (t, e) {
          void 0 === e && (e = null);
          var n = {
            componentChunkName: t.componentChunkName,
            path: t.path,
            webpackCompilationHash: t.webpackCompilationHash,
            matchPath: t.matchPath,
            staticQueryHashes: t.staticQueryHashes,
          };
          return { component: e, json: t.result, page: n };
        },
        m = (function () {
          function t(t, e) {
            (this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = t),
              Object(c.d)(e);
          }
          var e = t.prototype;
          return (
            (e.memoizedGet = function (t) {
              var e = this,
                n = this.inFlightNetworkRequests.get(t);
              return (
                n ||
                  ((n = d(t, "GET")), this.inFlightNetworkRequests.set(t, n)),
                n
                  .then(function (n) {
                    return e.inFlightNetworkRequests.delete(t), n;
                  })
                  .catch(function (n) {
                    throw (e.inFlightNetworkRequests.delete(t), n);
                  })
              );
            }),
            (e.setApiRunner = function (t) {
              (this.apiRunner = t),
                (this.prefetchDisabled = t("disableCorePrefetching").some(
                  function (t) {
                    return t;
                  }
                ));
            }),
            (e.fetchPageDataJson = function (t) {
              var e = this,
                n = t.pagePath,
                r = t.retries,
                o = void 0 === r ? 0 : r,
                a = f(n);
              return this.memoizedGet(a).then(function (r) {
                var a = r.status,
                  i = r.responseText;
                if (200 === a)
                  try {
                    var u = JSON.parse(i);
                    if (void 0 === u.path)
                      throw new Error("not a valid pageData response");
                    return Object.assign(t, { status: l.Success, payload: u });
                  } catch (s) {}
                return 404 === a || 200 === a
                  ? "/404.html" === n
                    ? Object.assign(t, { status: l.Error })
                    : e.fetchPageDataJson(
                        Object.assign(t, {
                          pagePath: "/404.html",
                          notFound: !0,
                        })
                      )
                  : 500 === a
                  ? Object.assign(t, { status: l.Error })
                  : o < 3
                  ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                  : Object.assign(t, { status: l.Error });
              });
            }),
            (e.loadPageDataJson = function (t) {
              var e = this,
                n = Object(c.b)(t);
              if (this.pageDataDb.has(n)) {
                var r = this.pageDataDb.get(n);
                return Promise.resolve(r);
              }
              return this.fetchPageDataJson({ pagePath: n }).then(function (t) {
                return e.pageDataDb.set(n, t), t;
              });
            }),
            (e.findMatchPath = function (t) {
              return Object(c.a)(t);
            }),
            (e.loadPage = function (t) {
              var e = this,
                n = Object(c.b)(t);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function (t) {
                var r = t[1];
                if (r.status === l.Error) return { status: l.Error };
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  u = a.staticQueryHashes,
                  c = void 0 === u ? [] : u,
                  p = {},
                  f = e.loadComponent(i).then(function (e) {
                    var n;
                    return (
                      (p.createdAt = new Date()),
                      e
                        ? ((p.status = l.Success),
                          !0 === r.notFound && (p.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: t[0]
                              ? t[0].webpackCompilationHash
                              : "",
                          })),
                          (n = v(o, e)))
                        : (p.status = l.Error),
                      n
                    );
                  }),
                  d = Promise.all(
                    c.map(function (t) {
                      if (e.staticQueryDb[t]) {
                        var n = e.staticQueryDb[t];
                        return { staticQueryHash: t, jsonPayload: n };
                      }
                      return e
                        .memoizedGet("/page-data/sq/d/" + t + ".json")
                        .then(function (e) {
                          var n = JSON.parse(e.responseText);
                          return { staticQueryHash: t, jsonPayload: n };
                        });
                    })
                  ).then(function (t) {
                    var n = {};
                    return (
                      t.forEach(function (t) {
                        var r = t.staticQueryHash,
                          o = t.jsonPayload;
                        (n[r] = o), (e.staticQueryDb[r] = o);
                      }),
                      n
                    );
                  });
                return Promise.all([f, d]).then(function (t) {
                  var r,
                    o = t[0],
                    a = t[1];
                  return (
                    o &&
                      ((r = Object.assign({}, o, { staticQueryResults: a })),
                      (p.payload = r),
                      s.a.emit("onPostLoadPageResources", {
                        page: r,
                        pageResources: r,
                      })),
                    e.pageDb.set(n, p),
                    r
                  );
                });
              });
              return (
                o
                  .then(function (t) {
                    e.inFlightDb.delete(n);
                  })
                  .catch(function (t) {
                    throw (e.inFlightDb.delete(n), t);
                  }),
                this.inFlightDb.set(n, o),
                o
              );
            }),
            (e.loadPageSync = function (t) {
              var e = Object(c.b)(t);
              if (this.pageDb.has(e)) return this.pageDb.get(e).payload;
            }),
            (e.shouldPrefetch = function (t) {
              return (
                !!(function () {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(t)
              );
            }),
            (e.prefetch = function (t) {
              var e = this;
              if (!this.shouldPrefetch(t)) return !1;
              if (
                (this.prefetchTriggered.has(t) ||
                  (this.apiRunner("onPrefetchPathname", { pathname: t }),
                  this.prefetchTriggered.add(t)),
                this.prefetchDisabled)
              )
                return !1;
              var n = Object(c.b)(t);
              return (
                this.doPrefetch(n).then(function () {
                  e.prefetchCompleted.has(t) ||
                    (e.apiRunner("onPostPrefetchPathname", { pathname: t }),
                    e.prefetchCompleted.add(t));
                }),
                !0
              );
            }),
            (e.doPrefetch = function (t) {
              var e = this,
                n = f(t);
              return u(n, { crossOrigin: "anonymous", as: "fetch" }).then(
                function () {
                  return e.loadPageDataJson(t);
                }
              );
            }),
            (e.hovering = function (t) {
              this.loadPage(t);
            }),
            (e.getResourceURLsForPathname = function (t) {
              var e = Object(c.b)(t),
                n = this.pageDataDb.get(e);
              if (n) {
                var r = v(n.payload);
                return [].concat(Object(o.a)(g(r.page.componentChunkName)), [
                  f(e),
                ]);
              }
              return null;
            }),
            (e.isPageNotFound = function (t) {
              var e = Object(c.b)(t),
                n = this.pageDb.get(e);
              return !n || n.notFound;
            }),
            (e.loadAppData = function (t) {
              var e = this;
              return (
                void 0 === t && (t = 0),
                this.memoizedGet("/page-data/app-data.json").then(function (n) {
                  var r,
                    o = n.status,
                    a = n.responseText;
                  if (200 !== o && t < 3) return e.loadAppData(t + 1);
                  if (200 === o)
                    try {
                      var i = JSON.parse(a);
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error("not a valid app-data response");
                      r = i;
                    } catch (u) {}
                  return r;
                })
              );
            }),
            t
          );
        })(),
        g = function (t) {
          return (window.___chunkMapping[t] || []).map(function (t) {
            return "" + t;
          });
        },
        y = (function (t) {
          function e(e, n) {
            return (
              t.call(
                this,
                function (t) {
                  return e.components[t]
                    ? e.components[t]()
                        .then(p)
                        .catch(function () {
                          return null;
                        })
                    : Promise.resolve();
                },
                n
              ) || this
            );
          }
          Object(r.a)(e, t);
          var n = e.prototype;
          return (
            (n.doPrefetch = function (e) {
              return t.prototype.doPrefetch.call(this, e).then(function (t) {
                if (t.status !== l.Success) return Promise.resolve();
                var e = t.payload,
                  n = e.componentChunkName,
                  r = g(n);
                return Promise.all(r.map(u)).then(function () {
                  return e;
                });
              });
            }),
            (n.loadPageDataJson = function (e) {
              return t.prototype.loadPageDataJson
                .call(this, e)
                .then(function (t) {
                  return t.notFound
                    ? d(e, "HEAD").then(function (e) {
                        return 200 === e.status ? { status: l.Error } : t;
                      })
                    : t;
                });
            }),
            e
          );
        })(m),
        b = function (t) {
          h = t;
        },
        w = {
          getResourcesForPathname: function (t) {
            return (
              console.warn(
                "Warning: getResourcesForPathname is deprecated. Use loadPage instead"
              ),
              h.i.loadPage(t)
            );
          },
          getResourcesForPathnameSync: function (t) {
            return (
              console.warn(
                "Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead"
              ),
              h.i.loadPageSync(t)
            );
          },
          enqueue: function (t) {
            return h.prefetch(t);
          },
          getResourceURLsForPathname: function (t) {
            return h.getResourceURLsForPathname(t);
          },
          loadPage: function (t) {
            return h.loadPage(t);
          },
          loadPageSync: function (t) {
            return h.loadPageSync(t);
          },
          prefetch: function (t) {
            return h.prefetch(t);
          },
          isPageNotFound: function (t) {
            return h.isPageNotFound(t);
          },
          hovering: function (t) {
            return h.hovering(t);
          },
          loadAppData: function () {
            return h.loadAppData();
          },
        };
      e.default = w;
      function P() {
        return h ? h.staticQueryDb : {};
      }
    },
    gUOe: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    hUyl: function (t, e, n) {
      "use strict";
      var r = 0,
        o = function (t) {
          var e = window.decodeURI(t.replace("#", ""));
          if ("" !== e) {
            var n = document.getElementById(e);
            if (n) {
              var o =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop,
                a =
                  document.documentElement.clientTop ||
                  document.body.clientTop ||
                  0,
                i = window.getComputedStyle(n),
                u =
                  i.getPropertyValue("scroll-margin-top") ||
                  i.getPropertyValue("scroll-snap-margin-top") ||
                  "0px";
              return (
                n.getBoundingClientRect().top + o - parseInt(u, 10) - a - r
              );
            }
          }
          return null;
        };
      (e.onInitialClientRender = function (t, e) {
        e.offsetY && (r = e.offsetY),
          requestAnimationFrame(function () {
            var t = o(window.location.hash);
            null !== t && window.scrollTo(0, t);
          });
      }),
        (e.shouldUpdateScroll = function (t) {
          var e = t.routerProps.location,
            n = o(e.hash);
          return null === n || [0, n];
        });
    },
    hd9s: function (t, e, n) {
      "use strict";
      var r = n("jGDn"),
        o = n("5NKs");
      (e.__esModule = !0), (e.ScrollContainer = void 0);
      var a = o(n("j8BX")),
        i = o(n("XEEL")),
        u = r(n("q1tI")),
        s = o(n("i8i4")),
        c = o(n("17x9")),
        l = n("Enzk"),
        p = n("YwZP"),
        f = {
          scrollKey: c.default.string.isRequired,
          shouldUpdateScroll: c.default.func,
          children: c.default.element.isRequired,
        },
        d = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          (0, i.default)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              var t = this,
                e = s.default.findDOMNode(this),
                n = this.props,
                r = n.location,
                o = n.scrollKey;
              if (e) {
                e.addEventListener("scroll", function () {
                  t.props.context.save(r, o, e.scrollTop);
                });
                var a = this.props.context.read(r, o);
                e.scrollTo(0, a || 0);
              }
            }),
            (n.render = function () {
              return this.props.children;
            }),
            e
          );
        })(u.Component),
        h = function (t) {
          return u.createElement(p.Location, null, function (e) {
            var n = e.location;
            return u.createElement(l.ScrollContext.Consumer, null, function (
              e
            ) {
              return u.createElement(
                d,
                (0, a.default)({}, t, { context: e, location: n })
              );
            });
          });
        };
      (e.ScrollContainer = h), (h.propTypes = f);
    },
    j8BX: function (t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          n.apply(this, arguments)
        );
      }
      (t.exports = n),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    jGDn: function (t, e, n) {
      var r = n("cjBy").default;
      function o() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (o = function () {
            return t;
          }),
          t
        );
      }
      (t.exports = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || ("object" !== r(t) && "function" != typeof t))
          return { default: t };
        var e = o();
        if (e && e.has(t)) return e.get(t);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in t)
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            var u = a ? Object.getOwnPropertyDescriptor(t, i) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(n, i, u)
              : (n[i] = t[i]);
          }
        return (n.default = t), e && e.set(t, n), n;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    lw3w: function (t, e, n) {
      var r;
      t.exports = ((r = n("rzlk")) && r.default) || r;
    },
    npZl: function (t, e, n) {
      "use strict";
      var r = n("5NKs");
      n("Wbzz"), r(n("9hXx"));
    },
    nqlD: function (t, e, n) {
      var r = n("q1tI").createContext;
      (t.exports = r), (t.exports.default = r);
    },
    nwwn: function (t, e, n) {
      "use strict";
      (e.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: "",
        backgroundColor: "white",
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        tracedSVG: !1,
        loading: "lazy",
        disableBgImageOnAlpha: !1,
        disableBgImage: !1,
      }),
        (e.imageClass = "gatsby-resp-image-image"),
        (e.imageWrapperClass = "gatsby-resp-image-wrapper"),
        (e.imageBackgroundClass = "gatsby-resp-image-background-image");
    },
    pWkz: function (t, e, n) {
      "use strict";
      (e.__esModule = !0), (e.onRouteUpdate = void 0);
      e.onRouteUpdate = function (t, e) {
        var n = t.location;
        if ((void 0 === e && (e = {}), "function" != typeof ga)) return null;
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(function (t) {
            return t.test(n.pathname);
          })
        )
          return null;
        var r = Math.max(32, e.pageTransitionDelay || 0);
        return (
          setTimeout(function () {
            var t = n ? n.pathname + n.search + n.hash : void 0;
            window.ga("set", "page", t), window.ga("send", "pageview");
          }, r),
          null
        );
      };
    },
    q9nr: function (t, e, n) {
      "use strict";
      var r = n("nwwn"),
        o = r.DEFAULT_OPTIONS,
        a = r.imageClass,
        i = r.imageBackgroundClass,
        u = r.imageWrapperClass;
      e.onRouteUpdate = function (t, e) {
        for (
          var n = Object.assign({}, o, e),
            r = document.querySelectorAll("." + u),
            s = function (t) {
              var e = r[t],
                o = e.querySelector("." + i),
                u = e.querySelector("." + a),
                s = function () {
                  (o.style.transition = "opacity 0.5s 0.5s"),
                    (u.style.transition = "opacity 0.5s"),
                    c();
                },
                c = function t() {
                  (o.style.opacity = 0),
                    (u.style.opacity = 1),
                    (u.style.color = "inherit"),
                    (u.style.boxShadow =
                      "inset 0px 0px 0px 400px " + n.backgroundColor),
                    u.removeEventListener("load", s),
                    u.removeEventListener("error", t);
                };
              (u.style.opacity = 0),
                u.addEventListener("load", s),
                u.addEventListener("error", c),
                u.complete && c();
            },
            c = 0;
          c < r.length;
          c++
        )
          s(c);
      };
    },
    qHiR: function (t, e, n) {},
    rzlk: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("q1tI"),
        o = n.n(r),
        a = n("emEt"),
        i = n("IOVJ");
      e.default = function (t) {
        var e = t.location,
          n = a.default.loadPageSync(e.pathname);
        return n
          ? o.a.createElement(
              i.a,
              Object.assign({ location: e, pageResources: n }, n.json)
            )
          : null;
      };
    },
    t8Zj: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return r(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      n.d(e, "a", function () {
        return o;
      });
    },
    uDP2: function (t, e) {
      (t.exports = function (t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    v06X: function (t, e) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    xtsi: function (t, e, n) {
      var r = n("LeKB"),
        o = n("emEt").publicLoader,
        a = o.getResourcesForPathname,
        i = o.getResourcesForPathnameSync,
        u = o.getResourceURLsForPathname,
        s = o.loadPage,
        c = o.loadPageSync;
      (e.apiRunner = function (t, e, n, o) {
        void 0 === e && (e = {});
        var l = r.map(function (n) {
          if (n.plugin[t]) {
            (e.getResourcesForPathnameSync = i),
              (e.getResourcesForPathname = a),
              (e.getResourceURLsForPathname = u),
              (e.loadPage = s),
              (e.loadPageSync = c);
            var r = n.plugin[t](e, n.options);
            return r && o && (e = o({ args: e, result: r, plugin: n })), r;
          }
        });
        return (l = l.filter(function (t) {
          return void 0 !== t;
        })).length > 0
          ? l
          : n
          ? [n]
          : [];
      }),
        (e.apiRunnerAsync = function (t, e, n) {
          return r.reduce(function (n, r) {
            return r.plugin[t]
              ? n.then(function () {
                  return r.plugin[t](e, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
  },
  [["UxWs", 2, 12, 14]],
]);
//# sourceMappingURL=app-ff84d11348f691518b5b.js.map
