import stringsModule from "./strings";
const strings = {
    en: { submit: 'submit' },
    emoji: { submit: '🚀' },
    mermish: {},
  }
const {getStringByLanguage} = stringsModule;

describe('Language String Testing',()=>{
    const mockWarn = jest.fn();
    let orginalWarn;
    beforeEach(()=>{
    orginalWarn = console.warn;
    console.warn = mockWarn;
    }) 
   afterEach(()=>{
    console.warn = orginalWarn;
    })

    test('returns correct submit string for english',()=>{
        const translateString = getStringByLanguage('en','submit',strings);
        expect(translateString).toBe('submit');
        expect(mockWarn).not.toHaveBeenCalled();
    
    });  
    test('returns correct submit string for Emoji',()=>{
        const translateString = getStringByLanguage('emoji','submit',strings);
        expect(translateString).toBe('🚀');
        expect(mockWarn).not.toHaveBeenCalled();

    
    }); 
    test('returns English when language is not found',()=>{
        const translateString = getStringByLanguage('notAlnaguage','submit',strings);
        expect(translateString).toBe('submit');
        expect(mockWarn).toHaveBeenCalled();

    
    }); 
    test('returns English when language does not have submit',()=>{
        const translateString = getStringByLanguage('mermish','submit',strings);
        expect(translateString).toBe('submit');
        expect(mockWarn).toHaveBeenCalled();

    
    }); 
})

