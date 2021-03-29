describe('findItemsOver20', function () {
    it('should return all the products that have a quantity higher than 20', function () {
        assert.deepEqual(findItemsOver20([{ "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 27 }]), [{ "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 27 }]);
    });

});


