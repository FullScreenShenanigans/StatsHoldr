define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("intialzes keys to empty array", function () {
            var ItemsHolder = mocks.mockItemsHoldr();

            var storage = ItemsHolder.createPlaceholderStorage();
        });
    };
});