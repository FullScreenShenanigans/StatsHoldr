/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/ItemsHoldr.d.ts" />
/// <reference path="../utilities/MochaLoader.ts" />
/// <reference path="../utilities/mocks.ts" />

mochaLoader.addTest("calls the respective trigger function", (): void => {
    // Arrange
    let flagged: boolean = false;
    const item: ItemsHoldr.IItemValue = mocks.mockItemValue(mocks.mockItemsHoldr(), "color", {
        valueDefault: "red",
        triggers: {
            blue: (): void => {
                flagged = true;
            }
        }
    });

    // Act
    item.setValue("blue");

    // Assert
    chai.expect(flagged).to.be.true;
});
