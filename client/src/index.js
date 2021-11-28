// react imports
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Eigen files
import store from "./store/index";
import App from "./App";

// store zorgt ervoor dat heel de app toegang heeft tot specifieke delen waar ze zichzelf op "subscriben"
// BrowserRouter zorgt ervoor dat je "link tags" kan gebruiken, de gebruiker kan redirecten zonder dat de pagina refresht

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
