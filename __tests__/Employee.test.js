const Employee = require('../lib/Employee');


// class attributes test 
test('check for attributes', ()=>{
    const employee1 = new Employee('Thomas', 1, 'thomasnwalker@yahoo.com');

    expect(employee1.name).toBe('Thomas');
    expect(employee1.id).toEqual(expect.any(Number));
    expect(employee1.email).toBe('thomasnwalker@yahoo.com');
    
});

//getName() test 

test('check getName() method', ()=>{
    const employee1 = new Employee('Thomas', 1, 'thomasnwalker@yahoo.com');

    expect(employee1.getName()).toBe('Thomas');
   
    
});

//getId() test

test('check getId() method', ()=>{
    const employee1 = new Employee('Thomas', 1, 'thomasnwalker@yahoo.com');

    expect(employee1.getId()).toEqual(expect.any(Number));
   
    
});

//getEmail()

test('check getEmail() method', ()=>{
    const employee1 = new Employee('Thomas', 1, 'thomasnwalker@yahoo.com');

    expect(employee1.getEmail()).toBe('thomasnwalker@yahoo.com');
   
    
});

//getRole base method -- doesn;t need explicit overrride, this.role just needs to be defined for each class
test('check getRole() method', ()=>{
    const employee1 = new Employee('Thomas', 1, 'thomasnwalker@yahoo.com');

    expect(employee1.getRole()).toBe('Employee');
    
});
