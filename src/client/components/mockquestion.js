module.exports = [ { _id: '583ca8ffa860ca6048b0f1ae',
title: 'Max Number',
functionName: 'maxNumber',
difficulty: 'Easy',
solutions: 'function maxNumber (first, second) {return Math.max(first, second)}; module.exports = maxNumber',
prompt: 'Create a function maxNumber that will return the max of two numbers',
templateFunction: 'function maxNumber (first, second) { \n return Math.max(first, second)\n } ',
test: 'const expect = require("chai").expect;       describe("test", () => {         it("should return the max number for positives", () => { expect(attempt(2, 3)).to.equal(solution(2,3)) });         it("should return the max number for negatives", () => { expect(attempt(-3, -1)).to.equal(solution(-3,-1)) });         it("should return the max number for positives & negatives", () => { expect(attempt(-1, 1)).to.equal(solution(-1,1)) });       })',
examples: [ 'maxNumber(3,4) = 4', 'maxNumber(-1,-3) = -1' ] },
{ _id: '583ca8ffa860ca6048b0f1af',
title: 'Min Number',
functionName: 'minNumber',
difficulty: 'Easy',
solutions: 'function minNumber (first, second) {return Math.min(first, second)}; module.exports = minNumber',
prompt: 'Create a function minNumber that will return the min of two numbers',
templateFunction: 'function minNumber (first, second) { \n return Math.min(first, second)\n } ',
test: 'const expect = require("chai").expect;       describe("test", () => {         it("should return the min number for positives", () => { expect(attempt(2, 3)).to.equal(solution(2,3)) });         it("should return the min number for negatives", () => { expect(attempt(-3, -1)).to.equal(solution(-3,-1)) });         it("should return the min number for positives & negatives", () => { expect(attempt(-1, 1)).to.equal(solution(-1,1)) });       })',
examples: [ 'minNumber(3,4) = 3', 'minNumber(-1,-3) = -3' ] },
{ _id: '583ca8ffa860ca6048b0f1b0',
title: 'Same Number',
functionName: 'sameNumber',
difficulty: 'Easy',
solutions: 'function sameNumber (first, second) {return first===second}; module.exports = sameNumber',
prompt: 'Create a function sameNumber that will return true of two numbers match',
templateFunction: 'function sameNumber (first, second) { \n return first === second\n } ',
test: 'const expect = require("chai").expect;       describe("test", () => {         it("should return false for two different numbers", () => { expect(attempt(2, 3)).to.equal(solution(2,3)) });         it("should return true for two of the same number", () => { expect(attempt(-3, -1)).to.equal(solution(-3,-1)) });  })',
examples: [ 'sameNumber(3,4) = false', 'sameNumber(-1,-1) = true' ] 
}] 