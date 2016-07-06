define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("overwrites the current value", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {valueDefault: "red"});

            item.setValue("blue");

            expect(item.getValue()).to.equal("blue");
        });

        it("respects transformSet", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {
                valueDefault: "red",
                transformSet: function (value) {
                    return value + "_transformed";
                }
            });

            item.setValue("blue");

            expect(item.getValue()).to.equal("blue_transformed");
        });
    };
});