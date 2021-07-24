
const appReducer = (state,action) => {
    switch(action.type) {
        case 'setSecretWord':
            return{...state,secretWord:action.payload};
        case 'setLanguage':
                return{...state,language:action.payload};
        default:
            throw new Error('Invalid action')    
    }
   
}

export default appReducer
