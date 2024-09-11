import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import "./i18nextInit";
import { LanguageProvider } from './context/LanguageProvider';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./Helper/ScrollToTop";
import { BrowserRouter as Route } from "react-router-dom";
// import store from './app/store'
import { Provider } from 'react-redux'
import {persistor, store} from "./config/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import Loader from "./Helper/Loader";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Suspense fallback={<Loader/>}>
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
              <LanguageProvider>
                <Route>
                  <ScrollToTop />
                  <App />
                </Route>
              </LanguageProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
  // </Suspense>
);
reportWebVitals();
