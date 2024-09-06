
import { Provider } from 'react-redux';
import MainRouter from 'router/MainRouter';
import initStore from './redux/store';
import "Common.scss";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import './i18nextInit'
import ErrorFallbackRenderer from 'shared/components/common/error-fallback/ErrorFallbackRenderer';
import { ErrorBoundary } from 'react-error-boundary';

const store = initStore()
function App(props) {
    return (
        <Provider store={store}>
            <ErrorBoundary fallbackRender={ErrorFallbackRenderer}>
                <MainRouter />
            </ErrorBoundary>
        </Provider>
    )
}

export default App
