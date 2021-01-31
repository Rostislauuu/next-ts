import { AppProps } from "next/app";
import { Provider } from "react-redux";

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

export default MyApp
