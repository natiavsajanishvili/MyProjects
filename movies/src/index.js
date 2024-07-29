import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles, GlobalLayout } from "./global/GlobalStyles";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProviderWrapper>
      <Router>
        <GlobalLayout>
          <GlobalStyles />
          <App />
        </GlobalLayout>
      </Router>
    </ThemeProviderWrapper>
  </Provider>
);

reportWebVitals();
