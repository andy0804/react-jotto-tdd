import moxios from "moxios";
import {getSecretWord ,correctGuess, actionTypes  } from "./index"
import {storeFactory} from "../../test/testUtils"
describe('getSecretWord',()=>{
    beforeEach(()=>{
        moxios.install()
    });
    afterEach(()=>{
        moxios.uninstall();
    })
    test('secretword is returned',()=>{
        const store = storeFactory();
        moxios.wait(()=>{
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status:200,
                    response:'party'
                });
        })
        return store.dispatch(getSecretWord())
        .then(()=>{
            const secretWord = store.getState().secretWord
           expect(secretWord).toBe('party')
        })
    })

})

