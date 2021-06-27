const Intern= require('../lib/Intern');

test('the manager class is properly inheriting...', ()=>{
    const engineer1 = new Intern('Thomas', 1, 'thomasnwalker@yahoo.com', 'UCLA');
    expect(engineer1.name).toBe('Thomas');
    expect(engineer1.id).toEqual(expect.any(Number));
    expect(engineer1.email).toBe('thomasnwalker@yahoo.com');
    expect(engineer1.getSchool()).toBe('UCLA');
});