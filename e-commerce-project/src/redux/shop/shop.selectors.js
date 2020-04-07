import { createSelector } from 'reselect';

//object where the string value goes to the id
//only required when shop.data.js is still an array and not normalized
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens:5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//pass in the UrlParam and return createSelector
/*curry the function here to take in the collections data and put it through 
to createSelector as an array and put it through another function in collections.find() and compare the 
COLLECTION_ID_MAP array and match it to the collectionUrlParam
do this to create multiple utility functions*/
// export const selectCollection = collectionUrlParam => 
//     createSelector([selectCollections],
//         collections => 
//             collections.find(
//                 collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//             )
// );

//create the selectCollectionsForPreview function for the collections-overview.component
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    /*use Object.keys to give us the keys of an object we pass through as an array
    -> get all the keys and map over the array of keys to get the value of the collections object
    and give us an array of the objects*/    
    collections => Object.keys(collections).map(key => collections[key])
);

/* to cut down on performance time, store the list of collections and items in an object: DATA NORMALIZATION */
export const selectCollection = collectionUrlParam => 
    createSelector([selectCollections],
        collections => collections[collectionUrlParam]
    );

