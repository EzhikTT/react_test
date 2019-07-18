export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export function toggleFollow(followItem){
    return {type: TOGGLE_FOLLOW, followItem};
}

export const SET_FILTER = 'SET_FILTER';
export function setFilter(searchLine){
    return {type: SET_FILTER, searchLine};
}

export const SET_ITEMS = 'SET_ITEMS';
export function setItems(items){
    return {type: SET_ITEMS, items};
}