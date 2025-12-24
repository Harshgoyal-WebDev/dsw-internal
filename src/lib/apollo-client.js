import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { removeLastTrailingSlash } from './util';
let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */


export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT),
       fetch,
       headers: {
        "Content-Type": "application/json",
        "User-Agent": "NextJS-Apollo",
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
  });
}
