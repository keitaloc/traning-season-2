let initialState = {
    date:''
}

const choose_date = (state = initialState, action) => {
    switch(action.type) {
        case 'chooseDate':
            return {
                ...state,
                date: action.date
            }
       
        default: 
            return {
                ...state,
                date:state.date
            }
    }
}
export default choose_date;
