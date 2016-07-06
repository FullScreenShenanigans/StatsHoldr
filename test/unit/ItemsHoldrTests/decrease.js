define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("subtracts from a Number type value", function () {
            var ItemsHolder = mocks.mockItemsHoldr({
                values: {
                    weight: {
                        valueDefault: 100
                    }
                }
            });

            ItemsHolder.decrease("weight", 3);

            expect(ItemsHolder.getItem("weight")).to.equal(97);
        });
    };
});