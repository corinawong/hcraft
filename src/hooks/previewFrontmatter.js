import { graphql } from "gatsby"

export const PreviewFrontmatter = graphql`
  fragment PreviewFrontmatter on MdxFrontmatter {
    title
    slug
    tags
    image {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageAlt
  }
`
