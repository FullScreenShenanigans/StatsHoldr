define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("adds to a Number type value", function () {
            var ItemsHolder = mocks.mockItemsHoldr({
                values: {
                    weight: {
                        valueDefault: 100
                    }
                }
            });

            ItemsHolder.increase("weight", 3);

            expect(ItemsHolder.getItem("weight")).to.equal(103);
        });

        it("concatenates to a String type value", function () {
            var ItemsHolder = mocks.mockItemsHoldr({
                values: {
                    color: {
                        valueDefault: "red"
                    }
                }
            });

            ItemsHolder.increase("color", 3);

            expect(ItemsHolder.getItem("color")).to.equal("red3");
        });
    };
});