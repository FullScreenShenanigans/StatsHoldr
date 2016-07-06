define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("removes item from itemKeys", function () {
            var ItemsHolder = mocks.mockItemsHoldr();
            ItemsHolder.addItem("color");

            ItemsHolder.removeItem("color");

	        expect(ItemsHolder.itemKeys.length).to.equal(0);
        });

        it("removes item from container", function () {
            var ItemsHolder = mocks.mockItemsHoldr({
                doMakeContainer: true,
                values: {
                    color: {
                        valueDefault: "red",
                        hasElement: true,
                        element: {}
                    }
                }
            });

            ItemsHolder.removeItem("color");

            expect(ItemsHolder.container.hasChildNodes()).to.equal(false);
        });

        it("removes item from localStorage", function () {
            var ItemsHolder = mocks.mockItemsHoldr({
                values: {
                    color: {
                        valueDefault: "red",
                        storeLocally: true
                    }
                }
            });

            ItemsHolder.removeItem("color");

            expect(ItemsHolder.getLocalStorage()["color"]).to.equal(undefined);
        });
    };
});