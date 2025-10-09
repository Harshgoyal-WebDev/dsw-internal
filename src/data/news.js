import { gql } from "@apollo/client";



export const QUERY_ALL_NEWS = gql`
  query AllNews {
    allNews {
      edges {
        node {
          excerpt
          title
          slug
          featuredImage {
            node {
              altText
              srcSet
              sourceUrl
              sizes
            }
          }
          date
        }
      }
    }
  }
`;

export const QUERY_NEWS_BY_SLUG = gql`
  query NewsBySlug($slug: ID!) {
    news(id: $slug, idType: SLUG) {
      content
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
          srcSet
          sizes
        }
      }
      slug
      title
      id
      date
    }
  }
`;

export const QUERY_NEWS_SEO_BY_SLUG = gql`
  query NewsSEOBySlug($slug: ID!) {
    news(id: $slug, idType: SLUG) {
      id
    }
  }
`;

export const QUERY_NEWS_PER_PAGE = gql`
  query NewsPerPage {
    allSettings {
      readingSettingsNewsPerPage
    }
  }
`;
