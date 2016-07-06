define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("calls the respective trigger function", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {
                valueDefault: "red",
                triggers: {
                    "red": function () {
                        this.setValue("black");
                    }
                }
            });

            item.checkTriggers();

            expect(item.getValue()).to.equal("black");
        });
    };
});