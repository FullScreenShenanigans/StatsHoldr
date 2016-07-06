define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("chooses the correct value to update textContext with", function () {
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

        it("chooses the correct value to update textContext with", function () {
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