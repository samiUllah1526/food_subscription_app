import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MantineProvider, Global } from "@mantine/core";
import globalTheme from './globalStyles';

const queryClient = new QueryClient()

const theme = {
  fontFamily: 'Poppins',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Global styles={(theme) => ({ ...globalTheme })} />
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

