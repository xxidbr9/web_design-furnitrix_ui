import React, { createContext } from "react";
import useLoad from "utils/hooks/useLoad";

export const LoadingContext = createContext();

function LoadProvider({ children, ...props }) {
    const { handlerLoad, loadRef, percentage, loading } = useLoad();

    return (
        <LoadingContext.Provider
            value={{ handlerLoad, loadRef, percentage, loading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export default LoadProvider;
