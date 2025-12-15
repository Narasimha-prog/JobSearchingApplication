const intialValue="Raju";

export const userReducer=(state=intialValue,action)=>{
    switch(action.type){
        case "UPDATE_USER":
            return action.payload;
        default:
            return state;
    }
}