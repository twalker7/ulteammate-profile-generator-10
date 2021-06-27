const Engineer = require('../lib/Engineer');

test('the manager class is properly inheriting...', ()=>{
    const engineer1 = new Engineer('Thomas', 1, 'thomasnwalker@yahoo.com', 'github.com/twalker7');
    expect(engineer1.name).toBe('Thomas');
    expect(engineer1.id).toEqual(expect.any(Number));
    expect(engineer1.email).toBe('thomasnwalker@yahoo.com');
    expect(engineer1.getGithub()).toBe('github.com/twalker7');
});