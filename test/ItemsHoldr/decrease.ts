/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/ItemsHoldr.d.ts" />
/// <reference path="../utilities/MochaLoader.ts" />
/// <reference path="../utilities/mocks.ts" />

mochaLoader.addTest("subtracts from a Number type value", (): void => {
    // Arrange
    const ItemsHolder: ItemsHoldr.IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            weight: {
                valueDefault: 100
            }
        }
    });

    // Act
    ItemsHolder.decrease("weight", 3);

    // Assert
    chai.expect(ItemsHolder.getItem("weight")).to.equal(97);
});
