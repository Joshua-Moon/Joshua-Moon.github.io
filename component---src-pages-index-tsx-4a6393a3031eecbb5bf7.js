(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("Wbzz"),l=a("q1tI"),o=a.n(l),i=a("Ac47"),c=a("uP4m"),r=a("w6rB"),s=a("H8eV"),m=a("BCat");t.default=function(e){var t=e.data;return o.a.createElement(i.a,null,o.a.createElement(s.a,{title:"홈"}),o.a.createElement(m.c,{small:!0},o.a.createElement(r.a,null,o.a.createElement(c.a,{posts:t.allMarkdownRemark.nodes.map((function(e){return{slug:e.fields.slug,title:e.frontmatter.title,meta:o.a.createElement("time",{dateTime:e.fields.date},e.fields.dateStr),excerpt:e.excerpt}}))}),o.a.createElement(n.Link,{to:"/category/"},"더보기"))))};var d="3130057779"},uP4m:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),o=a.n(l),i=a("vOnD"),c=a("BCat"),r=i.c.ul.withConfig({displayName:"style__PostList",componentId:"sc-1msf5pd-0"})(["list-style:none;padding:0;"]),s=i.c.li.withConfig({displayName:"style__PostItem",componentId:"sc-1msf5pd-1"})(["a{text-decoration:none;}margin:"," 0;text-decoration:none;display:block;"],Object(c.e)(7)),m=i.c.h2.withConfig({displayName:"style__PostTitle",componentId:"sc-1msf5pd-2"})(["color:",";margin-bottom:",";"],c.b.Primary,Object(c.e)()),d=i.c.div.withConfig({displayName:"style__PostMeta",componentId:"sc-1msf5pd-3"})(["color:",";"],c.b.Gray),p=i.c.p.withConfig({displayName:"style__PostSummary",componentId:"sc-1msf5pd-4"})(["color:",";line-height:1.5em;@media (max-width:calc("," - 1px)){display:none;}"],c.b.Black,c.f.Tablet);t.a=function(e){var t=e.posts;return o.a.createElement(r,{id:"post-list"},t.map((function(e){var t=e.title,a=e.slug,l=e.meta,i=e.excerpt;return o.a.createElement(s,{key:a},o.a.createElement(n.Link,{to:a},o.a.createElement(m,{className:"post-item-title"},t),l&&o.a.createElement(d,null,l),i&&o.a.createElement(p,{dangerouslySetInnerHTML:{__html:i}})))})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4a6393a3031eecbb5bf7.js.map