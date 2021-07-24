import stringsModule from "./strings";
const strings = {
    en: { submit: 'submit' },
    emoji: { submit: '🚀' },
    mermish: {},
  }
const {getStringByLanguage} = stringsModule;

test('returns correct submit string for english',()=>{
    const translateString = getStringByLanguage('en','submit',strings);
    expect(translateString).toBe('submit');

});  
test('returns correct submit string for Emoji',()=>{
    const translateString = getStringByLanguage('emoji','submit',strings);
    expect(translateString).toBe('🚀');

}); 
test('returns English when language is not found',()=>{
    const translateString = getStringByLanguage('notAlnaguage','submit',strings);
    expect(translateString).toBe('submit');

}); 
test('returns English when language does not have submit',()=>{
    const translateString = getStringByLanguage('mermish','submit',strings);
    expect(translateString).toBe('submit');

}); 