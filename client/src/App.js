import React from 'react';
import Header from './components/Header';
import 'react-bootstrap'
import Featured from './components/Featured.js.js';
import './style.css'
import ProductList from './components/ProductList';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Featured />
        <ProductList />
      </div>
    </ApolloProvider>

  );
}

export default App;
