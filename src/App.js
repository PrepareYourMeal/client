import React from 'react';
import { Provider } from 'react-redux';
import store from '@frontend/redux';
import '@frontend/assets/scss/index.scss';

function App() {
    return (
        <Provider store={store}>
            <div>
                <h1>INITIAL STOVE and OVEN</h1>
            </div>
        </Provider>
    );
}

export default App;
