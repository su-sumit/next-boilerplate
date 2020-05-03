import '../styles/main.scss';
import PropTypes from 'prop-types';

interface AppProps {
  Component: React.FunctionComponent | React.ComponentClass;
  pageProps?: object;
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  pageProps: PropTypes.object,
};

export default App;
