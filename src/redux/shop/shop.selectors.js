import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionUrlParam] : null
<<<<<<< HEAD
    );

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
);
=======
    );
>>>>>>> 19f24ff57529e762440612cd0b0213be1b6aa8ef
