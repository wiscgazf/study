var add=require("../app.js");
var expect=require("chai").expect;
describe("测试加法运算",function(){
	it("1+1=2",function(){
		expect(add(1,1)).to.be.equal(2);
	});
});