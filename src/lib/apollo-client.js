// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// import { removeLastTrailingSlash } from './util';
// let client;

// /**
//  * getApolloClient
//  */

// export function getApolloClient() {
//   if (!client) {
//     client = _createApolloClient();
//   }
//   return client;
// }

// /**
//  * createApolloClient
//  */


// export function _createApolloClient() {
//   return new ApolloClient({
//     link: new HttpLink({
//       uri: removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT),
//        fetch,
//        headers: {
//         "Content-Type": "application/json",
//         "User-Agent": "NextJS-Apollo",
//       },
//     }),
//     cache: new InMemoryCache({
//       typePolicies: {
//         RootQuery: {
//           queryType: true,
//         },
//         RootMutation: {
//           mutationType: true,
//         },
//       },
//     }),
//   });
// }


import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client;

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

export function _createApolloClient() {
  const isServer = typeof window === 'undefined';
  
  return new ApolloClient({
    link: new HttpLink({
      // Use direct WordPress URL on server (build time), proxy on client
      uri: isServer 
        ? process.env.WORDPRESS_GRAPHQL_ENDPOINT 
        : '/api/graphql',
      headers: {
        "Content-Type": "application/json",
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
