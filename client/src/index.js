//import "../node_modules/materialize-css/dist/css/materialize.min.css";
//import 'react-app-polyfill/ie11';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { Helmet } from "react-helmet";
// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import { store } from "./redux/store";
import './index.css';
import App from "./components/App";
//import AdminApp from "./admin/components/adminApp";
// import reducers from "./reducers";
// , applyMiddleware(reduxThunk)
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
  </Provider>,
  
  document.querySelector("#root")
);

// ReactDOM.createPortal(
//   <AdminApp />,
//   document.querySelector("#admin")
// );