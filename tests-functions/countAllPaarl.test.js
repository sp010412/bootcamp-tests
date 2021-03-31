describe('countAllPaarl', function () {
    it('should return the number of registration numbers in the string for Paarl', function () {
        assert.equal( 2, countAllPaarl('CJ 345 123, CA 2345, CJ 123'));
    });
    it('should return the number of registration numbers in the string for Paarl', function () {
        assert.equal( 2, countAllPaarl('CJ 345 123, CA 2345, CJ 123, CA 345 123, PE 2345, CL 123'));
    });
});