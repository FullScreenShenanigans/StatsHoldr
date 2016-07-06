define(["mocks"], function (mocks) {
    return function () {
        var expect = require("chai").expect;

        it("calls the modular function the correct number of times", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "weight", {
                valueDefault: 123,
                modularity: 15,
                num: 0,
                onModular: function () {
                    this.num = this.num + 1;
                }
            });

            item.checkModularity();

            expect(item.num).to.equal(8);
        });

        it("doesn't call the modular function if the current value is not a number", function () {
            var item = mocks.mockItemValue(mocks.mockItemsHoldr(), "weight", {
                valueDefault: "123",
                modularity: 15,
                onModular: function () {
                    this.setValue = 0;
                }
            });

            item.checkModularity();

            expect(item.getValue()).to.equal("123");
        });
    };
});