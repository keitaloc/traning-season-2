let initialState = {
    month: new Date().getMonth(),
    year: new Date().getFullYear()
};

const change_month = (state = initialState, action) => {
    switch(action.type) {
        case 'handleNextMonth':
            return{
                ...state,
                month: ( state.month >= 0 && state.month <= 10) ? (++ state.month ) : ( state.month=0 ),
                year: ( state.month > 0 && state.month <= 11) ? (state.year ) : ( ++state.year )
            } 
        case 'handlePrevMonth':
            return{
                ...state,
                month: ( state.month > 0 && state.month <= 11) ? (-- state.month ) : ( state.month = 11 ),
                year: ( state.month >= 0 && state.month < 11) ? (state.year ) : ( --state.year )
            } 
        default: 
            return{
                ...state,
                month: state.month,
                year: state.year
            }
    }
}
export default change_month;

