import * as types from './mutation-types';

export default {
    [types.SET_CATEGORY](state, category) {
        state.category = category;
    },
    [types.SET_RANK_MENU](state, rankMenu) {
        state.rankMenu = rankMenu;
    },
    [types.SET_POP_MENU](state, popMenu) {
        state.popMenu = popMenu;
    },
    [types.SET_RISING_MENU](state, risingMenu) {
        state.risingMenu = risingMenu;
    },
    [types.SET_CATEGORY_ITEM_LIST](state, list) {
        state.categoryItemList = list;
    },
    [types.SET_CATEGORY_ITEM_TITLE](state, title) {
        state.categoryItemTitle = title;
    }
};
