const window = require("browser-env")({
  url: "http://www.runtestcases.com",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 100000000000000
});

const fetch = require("node-fetch");
window.fetch = fetch;
global.fetch = fetch;

const chai = require("chai");
const expect = chai.expect;

const tests = [0,1,2,3,4,5];

describe("Will pass the test", function() {
  this.timeout(0);
  tests.map(test => {
    it(test+" test", function() {
      // expect(true).to.be.true;
      if(test === 4){
        expect(true).to.be.false;
      }else{
        expect(true).to.be.true;
      }
    });
  })
});

// describe("Will fail the test", function() {
//   this.timeout(0);
//   it("second test", function() {
//     expect(true).to.be.false;
//   });
// });
