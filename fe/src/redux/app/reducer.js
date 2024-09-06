import AppAction from './action';
let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    sampleData: {
        loading: false,
        data: {},
    },
    locale: {
        list: [],
        selected: localStorage.getItem('locale') || 'JP',
    },
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppAction.LOADING_APP_START:
            return {
                ...state,
                loadingApp: true,
            };
        case AppAction.CLOSE_LOADING_APP:
            return {
                ...state,
                loadingApp: false,
            };
        case AppAction.LOADING_APP_POPUP_START:
            return {
                ...state,
                loadingAppPopup: true,
            };
        case AppAction.CLOSE_LOADING_APP_POPUP:
            return {
                ...state,
                loadingAppPopup: false,
            };
        case AppAction.FETCH_LOCALE_LIST_SUCCESS:
            return {
                ...state,
                locale: {
                    ...state.locale,
                    list: action.payload,
                },
            };
        case AppAction.SELECT_LOCALE:
            localStorage.setItem('locale', action.payload);
            return {
                ...state,
                locale: {
                    ...state.locale,
                    selected: action.payload,
                },
            };
        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
