import { graphql, Link, PageProps } from "gatsby"
import React, { FC } from "react"
import Icon from "../components/icon"
import { IconType } from "../components/Icon/style"
import { HomeLayout } from "../components/layout"
import PostList, { PostItemType } from "../components/PostList"
import Section from "../components/Section"
import SEO from "../components/seo"
import { MarkdownRemark } from "../models/markdown-remark"
import { Container } from "../styles/style-variables"

// const videos: PostItemType[] = [
//   {
//     title: "프론트엔드 개발환경의 이해와 실습",
//     slug: "https://www.inflearn.com/course/프론트엔드-개발환경",
//     meta: "2020년 03월 / 인프런",
//   },
//   {
//     title: "Express.js 코드리딩",
//     slug:
//       "https://www.youtube.com/playlist?list=PL91ve-iBgvZ5ga1BQkN2DLJgqBfWCkGfm",
//     meta: "2019년 03월 / 유투브",
//   },
// ]

type P = PageProps<{ allMarkdownRemark: { nodes: MarkdownRemark[] } }>

const BlogIndex: FC<P> = ({ data }: P) => {
  return (
    <HomeLayout>
      <SEO title="홈" />
      <Container small>
        <Section>
          <PostList
            posts={data.allMarkdownRemark.nodes.map(node => ({
              slug: node.fields.slug,
              title: node.frontmatter.title,
              meta: (
                <time dateTime={node.fields.date}>{node.fields.dateStr}</time>
              ),
              excerpt: node.excerpt,
            }))}
          />
          <Link to="/category/">더보기</Link>
        </Section>
        {/* <Section
          title={
            <>
              <Icon type={IconType.Video} size={4} />
              <span id="videos">VIDEOS</span>
            </>
          }
        >
          <PostList posts={videos} />
        </Section> */}
      </Container>
    </HomeLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: fields___date, order: DESC }, limit: 10) {
      nodes {
        excerpt(pruneLength: 200, format: PLAIN, truncate: true)
        fields {
          slug
          dateStr: date(formatString: "YYYY년 MM월 DD일")
          date
        }
        frontmatter {
          title
        }
      }
    }
  }
`
