define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("clears itemKeys", function () {
            var ItemsHolder = mocks.mockItemsHoldr();

            ItemsHolder.addItem("color", { value: "blue" });
            ItemsHolder.resetItemsToDefaults();

            expect(ItemsHolder.itemKeys).to.deep.equal([]);
        });

        it("clears items", function () {
            var ItemsHolder = mocks.mockItemsHoldr();

            ItemsHolder.addItem("color", { value: "blue" });
            ItemsHolder.resetItemsToDefaults();

            expect(ItemsHolder.items).to.deep.equal({});
        });      

        it("resets items to settings default values", function () {
            var ItemsHolder = mocks.mockItemsHoldr({
                values: {
                    color: {
                        valueDefault: "red"
                    }
                }
            });

            ItemsHolder.setItem("color", "blue");
            ItemsHolder.resetItemsToDefaults();

            expect(ItemsHolder.getItem("color")).to.equal("red");
        });
    };
});