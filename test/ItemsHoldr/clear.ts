/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/ItemsHoldr.d.ts" />
/// <reference path="../utilities/MochaLoader.ts" />
/// <reference path="../utilities/mocks.ts" />

mochaLoader.addTest("clears contents from container", (): void => {
    // Arrange
    const ItemsHolder: ItemsHoldr.IItemsHoldr = mocks.mockItemsHoldr({
        doMakeContainer: true,
        values: {
            color: {
                valueDefault: "red",
                hasElement: true
            }
        }
    });

    // Act
    ItemsHolder.clear();

    // Assert
    chai.expect(ItemsHolder.getContainer().hasChildNodes()).to.equal(false);
});
