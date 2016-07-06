define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("should throw an error", function () {
             var ItemsHolder = mocks.mockItemsHoldr();

             expect(ItemsHolder.saveItem.bind(ItemsHolder, "color")).to.throw("Unknown key given to ItemsHoldr: 'color'.");
        });

        it("saves item to localStorage", function () {
             var ItemsHolder = mocks.mockItemsHoldr({
                 values: {
                    color: {
                        valueDefault: "red"
                    }
                }
             });

             ItemsHolder.setItem("color", "blue");
             ItemsHolder.saveItem("color");

             expect(ItemsHolder.getObject("color").retrieveLocalStorage()).to.equal("blue");
        });
    };
});