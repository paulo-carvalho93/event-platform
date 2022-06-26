import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vou36q1phf01un6hyd3ad2/master',
  cache: new InMemoryCache()
});
