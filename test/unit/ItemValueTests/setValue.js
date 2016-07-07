define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("overwrites the current value", function () {
            // Arrange
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", { valueDefault: "red" });

            // Act
            item.setValue("blue");

            // Assert
            expect(item.getValue()).to.equal("blue");
        });

        it("calls transformSet", function () {
            // Arrange
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {
                valueDefault: "red",
                transformSet: function (value) {
                    return value + "_transformed";
                }
            });

            // Act
            item.setValue("blue");

            // Assert
            expect(item.getValue()).to.equal("blue_transformed");
        });
    };
});