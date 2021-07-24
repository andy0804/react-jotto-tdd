
const appReducer = (state,action) => {
    switch(action.type) {
        case 'setSecretWord':
            return{...state,secretWord:action.payload};
        default:
            throw new Error('Invalid action')    
    }
   
}

export default appReducer
