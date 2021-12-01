import React from 'react';
import PropTypes from "prop-types";
import { useContext } from 'react';
import StoreContext from './StoreContext';

const storeProvider = (Component) => {
    // return class extends React.Component {
    //     static displayName = `${Component.name}Container`;
    //     static contextTypes = {
    //             store: PropTypes.object,
    //         };
    //     render() {
    //         const storeContext = useContext(StoreContext);
    //         return <Component {...this.props} store={this.storeContext} />;
    //     }
    // };
    const WithStore = (props) => {
        const storeContext = useContext(StoreContext);
        return <Component {...props} store={storeContext} />;
    }
  
    WithStore.contextTypes = {
        store: PropTypes.object,
    };

    WithStore.displayName = `${Component.name}Container`;
  
    return WithStore;
  };

export default storeProvider;