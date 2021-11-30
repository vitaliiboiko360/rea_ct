import React from 'react';
import PropTypes from "prop-types";
import { useContext } from 'react';
import StoreContext from './StoreContext';

const store = useContext(StoreContext);
const storeProvider = (Component) => {
    const WithStore = (props) =>
        <Component {...props} store={store} />;

    WithStore.contextTypes = {
        store: PropTypes.object,
    };

    return WithStore;
};

export default storeProvider;