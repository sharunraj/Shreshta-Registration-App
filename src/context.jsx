import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
import callApi from "./utils/callApi";
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
                    name: "Registration App",
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
    const fetchUserDetails = () => {
        return callApi('auth/fetch_user').then(res=>{
            return dispatch({
                type: "USER_DETAILS",
                payload: {
                    userDetails: res.data.user
                },
            });
        }).catch(err=>{
            return dispatch({
                type: "USER_DETAILS",
                payload: {
                    userDetails: null
                },
            });
        })
    };
    return(
    <AppContext.Provider value={{...state,updateHomePage,updateAboutPage, fetchUserDetails}}>{children}</AppContext.Provider>);
};


const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};
