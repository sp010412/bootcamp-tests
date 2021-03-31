describe('countAllFromTown', function () {
    it('should return number registration numbers in the string that is for that town.', function () {
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3)
    });
    it('should return number registration numbers in the string that is for that town.', function () {
        assert.deepEqual(countAllFromTown('CY 567,CL 345, CJ 456,CL 124,CY 567,CJ 456','CL'), 2)
    });tests
});