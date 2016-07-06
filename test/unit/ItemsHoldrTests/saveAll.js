define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("saves changes to items to localStorage", function () {
             var ItemsHolder = mocks.mockItemsHoldr({
                 values: {
                    color: {
                        valueDefault: "red"
                    },
                    weight: {
                        valueDefault: 124
                    }
                }
             });

             ItemsHolder.setItem("color", "blue");
             ItemsHolder.saveAll();

             expect(ItemsHolder.getObject("color").retrieveLocalStorage()).to.equal("blue");
        });
    };
});