const lib=require('../lib');

describe('absolute',()=>{
    it('should return a positive number if input number is positive',()=>{
        const result=lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input number is negative',()=>{
        const result=lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('should return a 0 number if input number is 0',()=>{
        const result=lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet',()=>{
    it('should return the greeting message',()=>{
        const result=lib.greet('hetvi');
        expect(result).toMatch(/hetvi/);
        expect(result).toContain('hetvi');
    });
});

describe('getCurrencies',()=>{
    it('should return supported currencies',()=>{
        const result=lib.getCurrencies();

        // too general
        // expect(result).toBeDefined();
        // expect(result).not.toBeNull();

        //to specific
        // expect(result[0]).toBe('IND');
        // expect(result[1]).toBe('AUD');
        // expect(result[2]).toBe('USD');

        // expect(result.length).toBe(3);

        //proper way
        // expect(result).toContain('USD');
        // expect(result).toContain('AUD');
        // expect(result).toContain('IND');

        //ideal way
        expect(result).toEqual(expect.arrayContaining(['AUD','IND','USD']));
    });
});

describe('getproduct',()=>{
    it('should return the product with the given id',()=>{
        const result=lib.getProduct(1);
        expect(result).toEqual({id:1,price:10});
        expect(result).toMatchObject({id:1,price:10});

    });
}); 