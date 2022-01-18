import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({value = [], ...props}) =>{ //...props used so it can be passed to all children
    // creates global state
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]}{...props} />;
};

// custom react hook that gives access to (state, dispatch) from StoreProvider above 
const useStoreContext = () => {
    return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};