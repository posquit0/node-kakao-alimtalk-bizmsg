'use strict';

const BizMsg = require('../lib/BizMsg');


describe('BizMsg', () => {
  describe('constructor(options)', () => {
    it('should create an instance of BizMsg', () => {
      expect(new BizMsg()).toBeInstanceOf(BizMsg);
    });
  });
});
