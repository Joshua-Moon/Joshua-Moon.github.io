module.exports = {
  siteMetadata: {
    title: `거북이 개발자의 엉금엉금 스토리`,
    description: `38세 비전공자가 개발자로 전직하며 남기는 기록들`,
    author: `문호석`,
    url: "https://joshua-moon.github.io",
    social: {
      email: "joshua8565@gmail.com",
      githubUsername: "Joshua-Moon",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // html헤더값 변경 for 검색엔진 최적화
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // file.sourceInstanceName
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // 개츠비시스템 안으로 컨텐츠 가져오기(graphQl에서 file폴더 생성됨)
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`, // 개츠비에서 마크다운 사용
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`, // 개츠비 이미지 처리.. 레이지 로딩, 뿌옇다가 선명하게.. 다음 것 설치 `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
            options: {
              maxWidth: 726,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`, // 헤딩 링크 추가. presimjs 앞에 와야함(https://github.com/gatsbyjs/gatsby/issues/5764)
            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
          },
          {
            resolve: `gatsby-remark-prismjs`, // 코드 하이라이팅, npm i prismjs 해야 함.
            options: {
              showLineNumbers: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`, // graphql에서 사용하도록
    `gatsby-plugin-sharp`, // 샤프 lib 사용
    {
      resolve: `gatsby-plugin-manifest`, // pwa 지원
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/imgs/me.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-disqus`, // 댓글 시스템
      options: {
        shortname: `Josh`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`, // trackCustomEvent로 추적 가능
      options: {
        trackingId: `UA-31588166-2`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
