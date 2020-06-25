const assert=require('chai').assert;
const sayHello= require("../app").sayHello;
const addNumbers=require("../app").addNumbers;
// const app =require('../app');


// //results
// sayHello=app.sayHello();
// addNumber=app.addNumber(5,5);


describe('App',function(){
    // it('appshould return helloworld',function(){
    //     assert.equal(app(),'hello');
    // });
     it('say hello should return hello',function(){
         let result=sayHello();
        assert.equal(sayHello(),'hello');
});

    it('say hello should return a string',function(){
        let result= sayHello();
        assert.typeOf(result,'string');

    });

    it('addNumbers should be above 5',function(){
       // let result=addNumbers(1,1);
        let result=addNumbers(5,5);
        assert.isAbove(result,5);
    });

    it('addNumbers should return a number',function(){
        let result= addNumbers();
        assert.typeOf(result,'number');

    });

});
