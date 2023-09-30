import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importez le CSS pour le style des toasts




const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 1, // 5 minutes
        staleTime: 1000 * 60 * 1, // 1 minute
      },
    },
  }
);


const queryCache = new QueryCache();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient} queryCache={queryCache} >
      <ToastContainer/>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
