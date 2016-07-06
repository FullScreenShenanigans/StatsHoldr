define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("switches to the opposite boolean value", function () {
            var ItemsHolder = mocks.mockItemsHoldr({
                values: {
                    alive: {
                        valueDefault: true
                    }
                }
            });

            ItemsHolder.toggle("alive");

            expect(ItemsHolder.getItem("alive")).to.equal(false);
        });
    };
});