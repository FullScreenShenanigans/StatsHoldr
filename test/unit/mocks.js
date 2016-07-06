define(["ItemsHoldr", "ItemValue"], function (ItemsHoldrModule, ItemValueModule) {
    var ItemsHoldr = ItemsHoldrModule.ItemsHoldr;
    var ItemValue = ItemValueModule.ItemValue;

    var mocks = {
        /**
         * @param [settings]   Settings for the ItemValue.
         * @returns An ItemValue instance.
         */
        mockItemValue: function (IH, key, settings) {
            return new ItemValue(IH, key, settings);
        },
        /**
         * @param [settings]   Settings for the ItemValue.
         * @returns An ItemsHoldr instance.
         */
        mockItemsHoldr: function (settings) {
            return new ItemsHoldr(settings);
        }
    };

    return mocks;
});
