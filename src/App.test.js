import {mount} from 'enzyme'
import { findByTestAttr} from "../test/testUtils"
import App from "./App"

//activate global mock to make sure getSecretWord dossn't make network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';
const setup = () => {
    return mount (<App/>)
}

test('renders without error',()=>{

const wrapper = setup();
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