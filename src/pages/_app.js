import '../styles/globals.css'
import Layout from '@components/Layout/layout.component'
import {NextUIProvider} from "@nextui-org/react";
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from 'store/reducers';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
);

export default function App({ Component, pageProps }) {
  return(
    <NextUIProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </NextUIProvider>
  )
}
