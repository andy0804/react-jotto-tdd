import { storeFactory } from "../test/testUtils";
import {guessWord, resetJotto} from "./actions";

describe('guess word action',()=>{
    const secretWord = 'party';
    const unsuccessfulWord = 'train';
    describe('no guessed words',()=>{
        let store;
        const initialState = { secretWord};
        beforeEach(()=>{
          store = storeFactory(initialState)
        })
        test('updats correctly for unsuccessful guess',()=>{
            store.dispatch(guessWord(unsuccessfulWord)); 
            const newState = store.getState(); 
            const expectedState = {
                ...initialState,
                success:false,
                guessedWords:[{
                    guessedWord:unsuccessfulWord,
                    letterMatchCount:3
                }]
            }  
            expect(newState).toEqual(expectedState);

        })
        test('updats correctly for success guess',()=>{
            store.dispatch(guessWord(secretWord)); 
            const newState = store.getState(); 
            const expectedState = {
                secretWord,
                success:true,
                guessedWords:[{
                    guessedWord:secretWord,
                    letterMatchCount:5
                }]
            }  
            expect(newState).toEqual(expectedState);

            
        })
        test('updates correctly for reset game',()=>{
            store.dispatch(resetJotto()); 
            const newState = store.getState(); 
            const expectedState = {
                secretWord,
                success:false,
                guessedWords:[]
            }  
            expect(newState).toEqual(expectedState);

            
        })
    });
    describe('some  guessed words',()=>{
        const guessedWords = [{guessedWord:'agile',letterMatchCount:1}]
        const initialState = {guessedWords,secretWord};
        let store;
        beforeEach(()=>{
          store = storeFactory(initialState)
        })
        test('updats correctly for unsuccessful guess',()=>{
            store.dispatch(guessWord(unsuccessfulWord)); 
            const newState = store.getState(); 
            const expectedState = {
                   secretWord,
                   success:false,
                guessedWords:[...guessedWords,{
                    guessedWord:unsuccessfulWord,
                    letterMatchCount:3
                }]
            }  
            expect(newState).toEqual(expectedState);


        })
        test('updats correctly for success guess',()=>{
            store.dispatch(guessWord(secretWord)); 
            const newState = store.getState(); 
            const expectedState = {
                   secretWord,
                   success:true,
                guessedWords:[...guessedWords,{
                    guessedWord:secretWord,
                    letterMatchCount:5
                }]
            }  
            expect(newState).toEqual(expectedState);


        })
    })
})