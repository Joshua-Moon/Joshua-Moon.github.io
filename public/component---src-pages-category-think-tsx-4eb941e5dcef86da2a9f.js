(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "70It": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        i = a("qRE8");
      t.default = function (e) {
        return r.a.createElement(i.a, {
          title: "생각",
          activeCategory: "think",
          posts: e.data.allMarkdownRemark.edges.map(function (e) {
            return e.node;
          }),
        });
      };
    },
    qRE8: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return y;
      });
      var n = a("Wbzz"),
        r = a("q1tI"),
        i = a.n(r),
        l = a("Db/5"),
        o = a("Ac47"),
        c = a("uP4m"),
        s = a("w6rB"),
        m = a("H8eV"),
        d = a("vOnD"),
        p = a("ufqH"),
        u = a("BCat"),
        b = d.c.ul.withConfig({
          displayName: "style__CategoryList",
          componentId: "sc-5gun5j-0",
        })(["list-style:none;padding-left:0;margin:0;"]),
        g = d.c.li.withConfig({
          displayName: "style__CategoryListItem",
          componentId: "sc-5gun5j-1",
        })(
          [
            "a,label{padding:",
            " ",
            ";display:flex;align-items:center;}label{color:",
            ';font-weight:200;}a{text-decoration:none;&::before{content:"";border-radius:50%;display:inline-block;margin-left:',
            ";margin-right:",
            ";position:absolute;border:solid 0 ",
            ";transition:border-width linear 0.1s;}&.active{&::before{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px;height:",
            ";margin-left:",
            ";margin-right:",
            ";width:",
            ";background-color:",
            ";}}&:not(.active):hover{&::before{border-width:4px;transition:border-width linear 0.1s;}}&:hover{background-color:",
            ";color:",
            ";cursor:pointer;}}",
          ],
          Object(u.e)(2),
          Object(u.e)(4),
          u.b.Gray,
          Object(u.e)(-3),
          Object(u.e)(3),
          u.b.Primary,
          Object(u.e)(),
          Object(u.e)(-4),
          Object(u.e)(),
          Object(u.e)(3),
          u.b.Primary,
          Object(p.a)(0.4, u.b.Primary),
          u.b.Primary
        ),
        f = d.c.div.withConfig({
          displayName: "style__Wrapper",
          componentId: "sc-5gun5j-2",
        })(
          ["@media (min-width:", "){padding-left:", ";}"],
          u.f.Tablet,
          Object(u.e)(4)
        ),
        y = function (e) {
          var t = e.title,
            a = e.posts,
            r = e.activeCategory,
            d = i.a.createElement(
              b,
              null,
              i.a.createElement(
                g,
                null,
                i.a.createElement("label", null, "글분류")
              ),
              i.a.createElement(
                g,
                null,
                i.a.createElement(
                  n.Link,
                  { to: "/category", className: r ? "" : "active" },
                  "모든글"
                ),
                " "
              ),
              i.a.createElement(
                g,
                null,
                i.a.createElement(
                  n.Link,
                  {
                    to: "/category/series",
                    className: "series" === r ? "active" : "",
                  },
                  "연재물"
                ),
                " "
              ),
              i.a.createElement(
                g,
                null,
                i.a.createElement(
                  n.Link,
                  {
                    className: "dev" === r ? "active" : "",
                    to: "/category/dev",
                  },
                  "개발"
                ),
                " "
              ),
              i.a.createElement(
                g,
                null,
                i.a.createElement(
                  n.Link,
                  {
                    to: "/category/think",
                    className: "think" === r ? "active" : "",
                  },
                  "생각"
                ),
                " "
              )
            );
          return i.a.createElement(
            o.c,
            { aside: d },
            i.a.createElement(m.a, { title: "분류: " + t }),
            i.a.createElement(
              f,
              null,
              i.a.createElement(
                s.a,
                {
                  title: i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(l.a, { type: l.b.Article, size: 4 }),
                    t
                  ),
                },
                i.a.createElement(c.a, {
                  posts: a.map(function (e) {
                    return {
                      slug: e.fields.slug,
                      title: e.frontmatter.title,
                      meta: i.a.createElement(
                        "time",
                        { dateTime: e.fields.date },
                        e.fields.dateStr
                      ),
                      excerpt: e.excerpt,
                    };
                  }),
                })
              )
            )
          );
        };
    },
    uP4m: function (e, t, a) {
      "use strict";
      var n = a("Wbzz"),
        r = a("q1tI"),
        i = a.n(r),
        l = a("vOnD"),
        o = a("BCat"),
        c = l.c.ul.withConfig({
          displayName: "style__PostList",
          componentId: "sc-1msf5pd-0",
        })(["list-style:none;padding:0;"]),
        s = l.c.li.withConfig({
          displayName: "style__PostItem",
          componentId: "sc-1msf5pd-1",
        })(
          [
            "a{text-decoration:none;}margin:",
            " 0;text-decoration:none;display:block;",
          ],
          Object(o.e)(7)
        ),
        m = l.c.h2.withConfig({
          displayName: "style__PostTitle",
          componentId: "sc-1msf5pd-2",
        })(["color:", ";margin-bottom:", ";"], o.b.Primary, Object(o.e)()),
        d = l.c.div.withConfig({
          displayName: "style__PostMeta",
          componentId: "sc-1msf5pd-3",
        })(["color:", ";"], o.b.Gray),
        p = l.c.p.withConfig({
          displayName: "style__PostSummary",
          componentId: "sc-1msf5pd-4",
        })(
          [
            "color:",
            ";line-height:1.5em;@media (max-width:calc(",
            " - 1px)){display:none;}",
          ],
          o.b.Black,
          o.f.Tablet
        );
      t.a = function (e) {
        var t = e.posts;
        return i.a.createElement(
          c,
          { id: "post-list" },
          t.map(function (e) {
            var t = e.title,
              a = e.slug,
              r = e.meta,
              l = e.excerpt;
            return i.a.createElement(
              s,
              { key: a },
              i.a.createElement(
                n.Link,
                { to: a },
                i.a.createElement(m, { className: "post-item-title" }, t),
                r && i.a.createElement(d, null, r),
                l &&
                  i.a.createElement(p, {
                    dangerouslySetInnerHTML: { __html: l },
                  })
              )
            );
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-category-think-tsx-4eb941e5dcef86da2a9f.js.map
