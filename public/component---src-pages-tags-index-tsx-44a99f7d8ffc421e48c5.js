(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    NXoE: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        o = a.n(n),
        r = a("Db/5");
      t.a = function (e) {
        return o.a.createElement(r.a, e);
      };
    },
    ekAe: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("Wbzz"),
        o = a("q1tI"),
        r = a.n(o),
        i = a("NXoE"),
        l = a("q/Ek"),
        c = a("Ac47"),
        s = a("w6rB"),
        m = a("H8eV"),
        d = a("vOnD"),
        u = a("BCat"),
        f = d.c.div.withConfig({
          displayName: "style__TagItem",
          componentId: "sc-16zse1n-0",
        })([""]),
        g = d.c.h2.withConfig({
          displayName: "style__TagName",
          componentId: "sc-16zse1n-1",
        })(
          ["a{text-decoration:none;color:", ";font-family:", ";}"],
          u.b.Primary,
          u.d.Fixed
        ),
        p = d.c.ul.withConfig({
          displayName: "style__TagPostList",
          componentId: "sc-16zse1n-2",
        })(["padding-left:20px;list-style:none;"]),
        E = d.c.li.withConfig({
          displayName: "style__TagPostItem",
          componentId: "sc-16zse1n-3",
        })(
          [
            "margin-bottom:",
            ";a{text-decoration:none;color:",
            ";&:hover,&:focus{text-decoration:underline;}}",
          ],
          Object(u.e)(),
          u.b.Black
        );
      t.default = function (e) {
        var t = e.data,
          a = {};
        t.allMarkdownRemark.nodes.forEach(function (e) {
          var t = e.frontmatter.tags;
          t &&
            t.length > 0 &&
            t.forEach(function (t) {
              var n = e.fields,
                o = n.date,
                r = n.slug,
                i = e.frontmatter,
                l = (i.permalink, i.category, i.title);
              a[t] || (a[t] = []), a[t].push({ link: r, date: o, title: l });
            });
        });
        var o = [];
        for (var d in a) o.push({ tag: d, node: a[d] });
        return (
          o.sort(function (e, t) {
            return e.tag.toLowerCase() > t.tag.toLowerCase() ? 1 : -1;
          }),
          r.a.createElement(
            c.b,
            null,
            r.a.createElement(m.a, {
              title: "태그",
              url: t.site.siteMetadata.url + "/tags",
              description: "태그 목록입니다",
            }),
            r.a.createElement(
              u.c,
              { small: !0 },
              r.a.createElement(
                s.a,
                {
                  title: r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(i.a, { type: l.b.Tag, size: 4 }),
                    "태그"
                  ),
                },
                o.map(function (e) {
                  return r.a.createElement(
                    f,
                    { key: e.tag },
                    r.a.createElement(
                      g,
                      { id: e.tag },
                      r.a.createElement(
                        n.Link,
                        { to: "#" + e.tag, className: "tag-title-link" },
                        "#",
                        e.tag
                      )
                    ),
                    r.a.createElement(
                      p,
                      null,
                      e.node
                        .sort(function (e, t) {
                          return e.date > t.date ? -1 : 1;
                        })
                        .map(function (e) {
                          return r.a.createElement(
                            E,
                            { key: e.link },
                            r.a.createElement(n.Link, { to: e.link }, e.title)
                          );
                        })
                    )
                  );
                })
              )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-tags-index-tsx-44a99f7d8ffc421e48c5.js.map
