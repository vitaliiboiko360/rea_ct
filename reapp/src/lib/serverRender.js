import React from 'react';
import ReactDOMServer from 'readct-dom/server';

import App from './components/App';

const serverRender = () => {
    return ReactDOMServer.renderToString(
        <App />
    );
};

export default serverRender;