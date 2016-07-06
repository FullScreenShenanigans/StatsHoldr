define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("adds the item to keys", function () {
             var ItemsHolder = mocks.mockItemsHoldr();

             var item = ItemsHolder.addItem("color");

             expect(ItemsHolder.itemKeys.length).to.equal(1);
        });

        it("leaves value as undefined if no settings passed in", function () {
             var ItemsHolder = mocks.mockItemsHoldr();

             var item = ItemsHolder.addItem("color");

             expect(item.getValue()).to.equal(undefined);
        });
    };
});