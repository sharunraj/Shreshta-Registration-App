import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
const AppContext = React.createContext();

const initialState={
    name:"",
    image:"",
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "Registeration App",
                    image: "./images/logo.svg",

                },
            }
        );
    };
    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "MITS",
                image: "./images/logo.svg",
            },
        });
    };
    return(
    <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>{children}</AppContext.Provider>);
};


const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};
