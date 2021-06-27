const Manager = require('../lib/Manager');

test('the manager class is properly inheriting...', ()=>{
    const manager1 = new Manager('Thomas', 1, 'thomasnwalker@yahoo.com', 3237870499);
    expect(manager1.name).toBe('Thomas');
    expect(manager1.id).toEqual(expect.any(Number));
    expect(manager1.email).toBe('thomasnwalker@yahoo.com');
    expect(manager1.officeNumber).toBeGreaterThan(999999999);
    expect(manager1.getRole()).toBe('Manager');
});