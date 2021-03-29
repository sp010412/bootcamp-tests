describe('totalPhoneBill', function () {
    it('totalPhoneBill should return R7.45 ', function () {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');

    })
});