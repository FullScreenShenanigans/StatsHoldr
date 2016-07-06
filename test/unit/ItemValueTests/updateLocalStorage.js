define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("does not update localStorage with a false overrideAutoSave value", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {valueDefault: "red"});

            item.setValue("blue")
            item.updateLocalStorage();

            expect(item.retrieveLocalStorage()).to.equal(undefined);
        });

        it("updates localStorage with a true overrideAutoSave value", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {valueDefault: "red"});

            item.setValue("blue")
            item.updateLocalStorage(true);

            expect(item.retrieveLocalStorage()).to.equal("blue");
        });

        it("updates localStorage when autoSave is enabled", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr({ autoSave: true }), "color", {valueDefault: "red"});

            item.setValue("blue")
            item.updateLocalStorage();

            expect(item.retrieveLocalStorage()).to.equal("blue");
        });
    };
});