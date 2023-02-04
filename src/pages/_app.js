import "@/styles/globals.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import AuthContext from "@/Context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthContext>
        <Component {...pageProps} />
      </AuthContext>
    </Provider>
  );
}
