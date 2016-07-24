/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/ItemsHoldr.d.ts" />
/// <reference path="../utilities/MochaLoader.ts" />
/// <reference path="../utilities/mocks.ts" />

mochaLoader.addTest("adds to a Number type value", (): void => {
    // Arrange
    const ItemsHolder: ItemsHoldr.IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            weight: {
                valueDefault: 100
            }
        }
    });

    // Act
    ItemsHolder.increase("weight", 3);

    // Assert
    chai.expect(ItemsHolder.getItem("weight")).to.equal(103);
});

mochaLoader.addTest("concatenates to a String type value", (): void => {
    // Arrange
    const ItemsHolder: ItemsHoldr.IItemsHoldr = mocks.mockItemsHoldr({
        values: {
            color: {
                valueDefault: "red"
            }
        }
    });

    // Act
    ItemsHolder.increase("color", 3);

    // Assert
    chai.expect(ItemsHolder.getItem("color")).to.equal("red3");
});
