import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
<<<<<<< HEAD
    isFetching: false,
    errorMessage: undefined,
=======
>>>>>>> 19f24ff57529e762440612cd0b0213be1b6aa8ef
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
<<<<<<< HEAD
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILUE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
=======
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            };
>>>>>>> 19f24ff57529e762440612cd0b0213be1b6aa8ef
        default:
            return state;
    }
};

export default shopReducer;