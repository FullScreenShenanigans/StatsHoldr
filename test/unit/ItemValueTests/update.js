define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("caps the value to the minimum", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "weight", {
                valueDefault: "220",
                minimum: 200
            });

            item.setValue(140);
            item.update();

            expect(item.getValue()).to.equal(200);
        });

        it("caps the value to the maximum", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "weight", {
                valueDefault: "220",
                maximum: 450
            });

            item.setValue(500);
            item.update();

            expect(item.getValue()).to.equal(500);
        });
    };
});