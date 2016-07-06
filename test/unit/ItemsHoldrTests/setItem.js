define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("updates the value correctly", function () {
            var ItemsHolder = mocks.mockItemsHoldr();

            ItemsHolder.setItem("color", "red");

            expect(ItemsHolder.getItem("color")).to.equal("red");
        });
    };
});