import {mount} from 'enzyme'
import { findByTestAttr,storeFactory} from "../test/testUtils"
import App from "./App"
import {Provider} from "react-redux"

//activate global mock to make sure getSecretWord dossn't make network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';
const setup = () => {
    const store = storeFactory();

    return mount (<Provider store={store}><App/></Provider>)
}

test('renders without error',()=>{

const wrapper = setup({success:false});
const appComponent =  findByTestAttr( wrapper ,'component-app')
expect(appComponent).toHaveLength(1);
})

describe('get secret word',()=>{
    beforeEach(()=>{
        // clear mock calls from previous tests
        mockGetSecretWord.mockClear();
    })
    test('getSecretWord is CALLED on app mount',()=>{
        const wrapper = setup();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)

    });

    test('getSecretWord is NOT CALLED  on app update',()=>{
        const wrapper = setup();
        mockGetSecretWord.mockClear();
        wrapper.setProps(); 
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0)


    })
})