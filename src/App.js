import React from 'react';
import { Provider } from 'react-redux';
import store from '@frontend/redux';
import Pages from '@frontend/pages';
import '@frontend/assets/scss/index.scss';

function App() {
    return (
        <Provider store={store}>
            <Pages />
        </Provider>
    );
}

export default App;
