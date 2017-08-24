import {expect} from 'chai';
import maggi = require('../src/index');

describe('Testing message generation', ()=>{
    it('get response for login passed', done=>{
        let msg = maggi.loginSuccess.message;
        //console.log(msg);
        expect(msg).not.to.be.null;
        expect(msg).not.to.be.undefined;
        done();
    });
});