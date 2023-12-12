const reducer = (state, action) => {
            
    switch (action.type) {

        case "WITHDRAW_500":
            return {
                ...state,
                total: state.total - 500,
                withdrawn: state.withdrawn + 500,
            };

        case "DEPOSIT_1000":
            return {
                ...state,
                total: state.total + 1000,
                added: state.added + 1000,
            };

        default:
            return state;
    }
};
export default reducer;