define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("returns undefined if value is not saved in localStorage", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr({localStorage: {}}), "color", {valueDefault: "red"});

            expect(item.retrieveLocalStorage()).to.equal(undefined);
        });

        it("returns correct saved value", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {
                valueDefault: "red",
                storeLocally: true
            });

            expect(item.retrieveLocalStorage()).to.equal("red");
        });
    };
});