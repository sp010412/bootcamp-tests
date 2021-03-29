describe('isWeekday' , function(){
    it('finds out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Monday'), true);

    });
    it('finds out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Saturday'), false);

    });


});