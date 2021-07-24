import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

//activate global mock to make sure getSecretWord dossn't make network call
jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";
import React  from "react";
const setup = () => {
  return mount(<App />);
};



describe("get secret word", () => {
  beforeEach(() => {
    // clear mock calls from previous tests
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord is CALLED on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("getSecretWord is NOT CALLED  on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});

// describe.each([
//     [null, true, false], 
//     ["party", false, true]
// ])(
//     "render with secret word as  %s",
//     (secretWord, loadingShows, appShows) => {
//         let wrapper;
//         let originalUseReducer;
//         beforeEach(()=>{
//         originalUseReducer = React.useReducer;  
//         const mockUseReducer = jest.fn()
//         .mockReturnValue(
//             {secretWord},
//             jest.fn()
//         )  
//         React.useReducer = mockUseReducer;
//         wrapper = setup();
//         })

//         afterEach(()=>{
//             React.useReducer = originalUseReducer
//         })

//         test(`renders loading spinner ${loadingShows}`,()=>{
//             const spinner =findByTestAttr(wrapper,'spinner');
//             expect(spinner.exists()).toBe(loadingShows);
//         })

//         test(`renders app :${appShows} `,()=>{
//             const app = findByTestAttr(wrapper,'component-app');
//             expect(app.exists()).toBe(appShows);    
//         })

//     }
//   );
  

describe.each([
    [null, true, false],
    ['party', false, true],
  ])(
    'renders with secretWord as %s', (secretWord, loadingShows, appShows) => {
      let wrapper;
      let originalUseReducer;
  
      beforeEach(() => {
        originalUseReducer = React.useReducer;
        const mockUseReducer = jest.fn()
          .mockReturnValue([
            { secretWord, language: 'en' },
            jest.fn(),
          ]);
        React.useReducer = mockUseReducer;
        wrapper = setup();
      });
      afterEach(() => {
        React.useReducer = originalUseReducer;
      });
      test(`renders loading spinner: ${loadingShows}`, () => {
        const spinnerComponent = findByTestAttr(wrapper, 'spinner');
        expect(spinnerComponent.exists()).toBe(loadingShows);
      });
      test(`renders app: ${appShows}`, () => {
        const appComponent = findByTestAttr(wrapper, 'component-app');
        expect(appComponent.exists()).toBe(appShows);
      });
    }
  )