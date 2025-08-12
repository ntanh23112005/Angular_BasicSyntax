import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://graphqlzero.almansi.me/api'; // API demo miễn phí

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: ApolloLink.from([
      httpLink.create({ uri }), // Kết nối GraphQL endpoint
    ]),
    cache: new InMemoryCache(), // Lưu cache dữ liệu
  };
}

export const APOLLO_PROVIDER = {
  provide: APOLLO_OPTIONS,
  useFactory: createApollo,
  deps: [HttpLink], // Angular sẽ inject HttpLink
};
