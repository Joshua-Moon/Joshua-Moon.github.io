(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    NXoE: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        l = a.n(n),
        s = a("Db/5");
      t.a = function (e) {
        return l.a.createElement(s.a, e);
      };
    },
    QeBL: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("Wbzz"),
        l = a("q1tI"),
        s = a.n(l),
        i = a("NXoE"),
        o = a("q/Ek"),
        c = a("Ac47"),
        r = a("uP4m"),
        m = a("w6rB"),
        u = a("H8eV"),
        p = a("BCat"),
        E = [
          {
            title: "프론트엔드 개발환경의 이해와 실습",
            slug: "https://www.inflearn.com/course/프론트엔드-개발환경",
            meta: "2020년 03월 / 인프런",
          },
          {
            title: "Express.js 코드리딩",
            slug:
              "https://www.youtube.com/playlist?list=PL91ve-iBgvZ5ga1BQkN2DLJgqBfWCkGfm",
            meta: "2019년 03월 / 유투브",
          },
          {
            title:
              "트렐로 개발로 배우는 Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술",
            slug: "https://www.inflearn.com/course/vuejs",
            meta: "2018년 11월 / 인프런",
          },
          {
            title: "견고한 JS 소프트웨어 만들기",
            slug:
              "https://www.inflearn.com/course/tdd-%EA%B2%AC%EA%B3%A0%ED%95%9C-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0",
            meta: "2018년 06월 / 인프런",
          },
          {
            title: "Node.js 기반의 REST API 서버 개발",
            slug:
              "https://tacademy.skplanet.com/live/player/onlineLectureDetail.action?seq=134",
            meta: "2018년 04월 / T아카데미",
          },
          {
            title: "실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발",
            slug:
              "https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C",
            meta: "2018년 01월 / 인프런",
          },
          {
            title: "테스트주도개발(TDD)로 만드는 NodeJS API 서버",
            slug:
              "https://www.inflearn.com/course/%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%A3%BC%EB%8F%84%EA%B0%9C%EB%B0%9C-tdd-nodejs-api",
            meta: "2017년 03월 / 인프런",
          },
          {
            title: "AngularJS 기본 개념과 To-Do 앱 만들기 실습 - 앵귤러 강좌",
            slug:
              "https://www.youtube.com/watch?v=EklH54kysps&list=PLs_XsVQJKaBk_JN5RctLmmVrGwEzpzqaj",
            meta: "2016년 07월 / 유투브",
          },
        ];
      t.default = function (e) {
        var t = e.data;
        return s.a.createElement(
          c.a,
          null,
          s.a.createElement(u.a, { title: "홈" }),
          s.a.createElement(
            p.c,
            { small: !0 },
            s.a.createElement(
              m.a,
              null,
              s.a.createElement(r.a, {
                posts: t.allMarkdownRemark.nodes.map(function (e) {
                  return {
                    slug: e.fields.slug,
                    title: e.frontmatter.title,
                    meta: s.a.createElement(
                      "time",
                      { dateTime: e.fields.date },
                      e.fields.dateStr
                    ),
                    excerpt: e.excerpt,
                  };
                }),
              }),
              s.a.createElement(n.Link, { to: "/category/" }, "더보기")
            ),
            s.a.createElement(
              m.a,
              {
                title: s.a.createElement(
                  s.a.Fragment,
                  null,
                  s.a.createElement(i.a, { type: o.b.Video, size: 4 }),
                  s.a.createElement("span", { id: "videos" }, "VIDEOS")
                ),
              },
              s.a.createElement(r.a, { posts: E })
            )
          )
        );
      };
    },
    uP4m: function (e, t, a) {
      "use strict";
      var n = a("Wbzz"),
        l = a("q1tI"),
        s = a.n(l),
        i = a("vOnD"),
        o = a("BCat"),
        c = i.c.ul.withConfig({
          displayName: "style__PostList",
          componentId: "sc-1msf5pd-0",
        })(["list-style:none;padding:0;"]),
        r = i.c.li.withConfig({
          displayName: "style__PostItem",
          componentId: "sc-1msf5pd-1",
        })(
          [
            "a{text-decoration:none;}margin:",
            " 0;text-decoration:none;display:block;",
          ],
          Object(o.e)(7)
        ),
        m = i.c.h2.withConfig({
          displayName: "style__PostTitle",
          componentId: "sc-1msf5pd-2",
        })(["color:", ";margin-bottom:", ";"], o.b.Primary, Object(o.e)()),
        u = i.c.div.withConfig({
          displayName: "style__PostMeta",
          componentId: "sc-1msf5pd-3",
        })(["color:", ";"], o.b.Gray),
        p = i.c.p.withConfig({
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
        return s.a.createElement(
          c,
          { id: "post-list" },
          t.map(function (e) {
            var t = e.title,
              a = e.slug,
              l = e.meta,
              i = e.excerpt;
            return s.a.createElement(
              r,
              { key: a },
              s.a.createElement(
                n.Link,
                { to: a },
                s.a.createElement(m, { className: "post-item-title" }, t),
                l && s.a.createElement(u, null, l),
                i &&
                  s.a.createElement(p, {
                    dangerouslySetInnerHTML: { __html: i },
                  })
              )
            );
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-0fe17fb47887ca79ece9.js.map
