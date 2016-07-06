define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("clears contents from container", function () {
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

            ItemsHolder.clear();

            expect(ItemsHolder.container.hasChildNodes()).to.equal(false);
        });
    };
});