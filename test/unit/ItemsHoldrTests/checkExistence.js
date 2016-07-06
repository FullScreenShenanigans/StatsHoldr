define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("should throw an error", function () {
             var ItemsHolder = mocks.mockItemsHoldr({ allowNewItems: false });

             expect(ItemsHolder.checkExistence.bind(ItemsHolder, "color")).to.throw("Unknown key given to ItemsHoldr: 'color'.");
        });
    };
});