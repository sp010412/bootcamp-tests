describe('fromWhere', function () {
    it('should return for CY Paarl', function () {
        assert.equal(fromWhere('CY'),'Bellville');
});
it('should return for CA Cape Town', function () {
    assert.equal(fromWhere('CA'),'Cape Town');
});
it('should return Some other place!', function () {
    assert.equal(fromWhere('CR'),'Some other place!');
});
});

