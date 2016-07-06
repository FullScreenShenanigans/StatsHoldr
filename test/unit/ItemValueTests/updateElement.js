define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("updates off ItemsHolder display change", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(
                {
                    displayChanges: {
                        "red": "rainbow"
                    }
                }),
                "color",
                {
                    valueDefault: "red",
                    hasElement: true,
                    element: {}
                });

            item.updateElement();

            expect(item.element.children[1].textContent).to.equal("rainbow");
        });

        it("updates off the current value", function () {
            var item = mocks.mockItemValue(
                mocks.mockItemsHoldr(),
                "color",
                {
                    valueDefault: "red",
                    hasElement: true,
                    element: {}
                });

            item.updateElement();

            expect(item.element.children[1].textContent).to.equal("red");
        });
    }
});