import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";

import Navigation from "../components/Navigation";
import configureStore from "../redux/store";

import "../styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(MyApp);
