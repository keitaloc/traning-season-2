
const initialState = {
    months : new Date().getMonth(),
    year : new Date().getFullYear(),
}

const rootReducer = (state= initialState,action) =>{ 
    switch(action.type){
        case 'nextMonth':
        return{
            ...state,
            months: ( (state.months >= 0 && state.months <= 10) ? (state.months + 1 ) : ( state.months=0 )),
            year: ( (state.months >= 0 && state.months <= 10) ? (state.year) : ( ++ state.year))
        } 
        case 'lastMonth': 
        return{
            ...state,
            months:( (state.months > 0 && state.months <= 11) ? (state.months - 1 ) : ( state.months=11 )),
            year: (state.months >= 0 && state.months <= 11 ? (state.year) : ( --state.year))
        }

        default:
            return state;
    }

}

export default rootReducer
