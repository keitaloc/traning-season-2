const initialState = {
    date: '',
    works: []
}
export  const list_work =(state = initialState, action)=>{
    switch(action.type){
        case 'addWork':
            return {
                ...state,
                date: action.payload,
                works: ['Cong viec 1']
            }
        default:
            return state;
    }
}