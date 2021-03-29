exports.createSeriesNode = ({ actions, createNodeId, createContentDigest }) => {
  const series = [
    {
      id: "series-20200102",
      title: "프론트엔드 개발환경의 이해",
    },
    {
      id: "series-20181201",
      title: "Node.js 코드랩",
    },
    {
      id: "series-20171002",
      title: "Express.js 만들기",
    },
    {
      id: "series-20170422",
      title: "함수형 프로그래밍",
    },
    {
      id: "series-20150222",
      title: "Hapi.js로 API 서버 시작하기",
    },
    {
      id: "series-20160611",
      title: "앵귤러로 Todo앱 만들기",
    },
  ]

  series.forEach(s => {
    actions.createNode({
      id: createNodeId(`series-${s.title}`),
      title: s.title,
      internal: {
        type: "series",
        contentDigest: createContentDigest(s),
      },
    })
  })
}

// exports.createVideoNode = ({ actions, createNodeId, createContentDigest }) => {
//   const videos = [
//     {
//       id: "1",
//       url: "https://www.inflearn.com/course/프론트엔드-개발환경?inst=245c31e1",
//       thumb:
//         "https://cdn.inflearn.com/public/courses/324671/course_cover/638eee1a-6381-402d-a17b-3724751414f1/frontend-env-eng.png",
//       title: "프론트엔드 개발환경의 이해와 실습",
//     },
//     {
//       id: "2",
//       url: "https://www.inflearn.com/course/vuejs?inst=4b6acc34",
//       thumb: "https://cdn.inflearn.com/wp-content/uploads/kjh_Vuejs-3.jpg",
//       title:
//         "트렐로 개발로 배우는 Vuejs, Vuex, Vue-Router 프론트엔드 실전 기술",
//     },
//   ]

//   videos.forEach(v => {
//     actions.createNode({
//       id: createNodeId(`series-${v.title}`),
//       title: v.title,
//       thumb: v.thumb,
//       url: v.url,
//       internal: {
//         type: "video",
//         contentDigest: createContentDigest(v),
//       },
//     })
//   })
// }
