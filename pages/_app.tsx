import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import React from 'react';
import Layout from '../components/layout';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
};

export default MyApp;
