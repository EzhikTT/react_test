import { combineReducers } from 'redux';
import { SET_FILTER, SET_ITEMS, TOGGLE_FOLLOW } from "./actions";

const dataInit = {
    items: [
        {
            id: '0',
            img: 'https://st54.domofond.ru/image/1/4zYs97a2696YtF8Vkajxcjt8Td-cVq3PUl9N',
            address: 'Земляной вал 24/30',
            metro: 'Курская',
            path: '3 мин. пешком',
            fullPrice: '130000000',
            m2price: '799т.р.',
            size: '130м2',
            about: 'О доме',
            year: '2019',
            type: 'кирпичный',
            area: '3ком',
            floor: '3/4'
        },
        {
            id: '1',
            img: 'https://st54.domofond.ru/image/1/4zYs97a2696YtF8Vkajxcjt8Td-cVq3PUl9N',
            address: 'Курская 4/8',
            metro: 'Курская',
            path: '3 мин. пешком',
            fullPrice: '130000000',
            m2price: '799т.р.',
            size: '130м2',
            about: 'О доме',
            year: '2019',
            type: 'кирпичный',
            area: '3ком',
            floor: '3/4'
        },
        {
            id: '2',
            img: 'https://st54.domofond.ru/image/1/4zYs97a2696YtF8Vkajxcjt8Td-cVq3PUl9N',
            address: 'Земляной вал 27/29',
            metro: 'Курская',
            path: '3 мин. пешком',
            fullPrice: '130000000',
            m2price: '799т.р.',
            size: '130м2',
            about: 'О доме',
            year: '2019',
            type: 'кирпичный',
            area: '3ком',
            floor: '3/4'
        },
        {
            id: '3',
            img: 'https://st54.domofond.ru/image/1/4zYs97a2696YtF8Vkajxcjt8Td-cVq3PUl9N',
            address: 'Курская 9/11',
            metro: 'Курская',
            path: '3 мин. пешком',
            fullPrice: '130000000',
            m2price: '799т.р.',
            size: '130м2',
            about: 'О доме',
            year: '2019',
            type: 'кирпичный',
            area: '3ком',
            floor: '3/4'
        }
    ],
    searchLine: '',
    filteredItems: [],
    followItems: []
};

const data = ( state = dataInit, action ) => {
    switch (action.type) {
        case SET_FILTER:
            return Object.assign(
                {},
                state,
                {
                    searchLine: action.searchLine,
                    filteredItems: state.items.filter(item => item.address.toLowerCase()
                                                                  .includes(action.searchLine.toLowerCase()))
                }
            );
        case TOGGLE_FOLLOW:
            const findItem = state.followItems.indexOf(action.followItem);

            console.log(findItem);
            console.log(~findItem);

            let follItems = state.followItems;
            let items = [];


            if(~findItem){
                follItems.splice(findItem, 1);

                items = follItems;

            }else{
                items = [...state.followItems, action.followItem];
            }

            // const items = ~findItem ? state.followItems.splice(findItem, 1) : [...state.followItems, action.followItem];

            console.log(items);


            return Object.assign(
                {},
                state,
                {
                    followItems: [...items]
                }
            );
        case SET_ITEMS:
            return Object.assign({}, state, {items: action.items});
        default:
            return Object.assign({}, state);
    }
};

const app = combineReducers({
    data
});

export default app;