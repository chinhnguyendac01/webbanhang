import AccountAction from './action';

let initialState = {
    loading: false,
    loadingPopup: false,
    data: [],
    selectedAccount: {}
};

const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case AccountAction.FETCH_ACCOUNTS_LIST_START:
            return {
                ...state,
                loading: true
            }
        case AccountAction.FETCH_ACCOUNTS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        // case AccountAction.DELETE_MANY_START:
        //     return {
        //         ...state,

        //     }
        // case AccountAction.DELETE_MANY_SUCCESS:
        //     return {
        //         ...state,
        //     }
        case AccountAction.GET_ACCOUNT_START:
            return {
                ...state,
                loading: true,
            }
        case AccountAction.GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedAccount: action.payload
            }
        default:
            return {
                ...state,
            };
    }
};

export default AccountReducer;
