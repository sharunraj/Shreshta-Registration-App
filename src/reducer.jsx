const reducer = (state, action)=>{
    if (action.type === "HOME_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    if (action.type === "ABOUT_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
        };
    }
    if (action.type === "USER_DETAILS") {
        return {
            ...state,
            userDetails: action.payload.userDetails,
            walletDetails: action.payload.walletDetails
        };
    }
    if (action.type === "EVENT_DETAILS") {
        return {
            ...state,
            eventDetails: action.payload.eventDetails,
        };
    }
    return state;
};

export default reducer;