define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("with a false overrideAutoSave value, does not update localStorage", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {valueDefault: "red"});

            item.setValue("blue")
            item.updateLocalStorage();

            expect(item.retrieveLocalStorage()).to.equal(undefined);
        });

        it("with a true overrideAutoSave value, updates localStorage", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {valueDefault: "red"});

            item.setValue("blue")
            item.updateLocalStorage(true);

            expect(item.retrieveLocalStorage()).to.equal("blue");
        });
    };
});