import { combineReducers } from 'redux'
import {
    REQUEST_BLOG, RECEIVE_BLOG,RECEIVE_DETAIL,REQUEST_DETAIL,RECEIVE_RECOMMENDBLOG,REQUEST_RECOMMENDBLOG
} from '../action/blog'

import { NavigationActions } from 'react-navigation';

import { MainNavigator } from '../component/navigation';


const blogs = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_BLOG:
            return {
                ...state,
                isFetching: true,
                isLoadAll:false,
            };
        case RECEIVE_BLOG:
            return {
                ...state,
                isFetching: false,
                isLoadAll: (action.posts)?(action.posts.length==0):false,
                items: (state&&state.items)?state.items.concat(action.posts):action.posts,

            };
        case REQUEST_RECOMMENDBLOG:
            return {
                ...state,
                isFetching: true,
                isLoadAll:false,
            };
        case RECEIVE_RECOMMENDBLOG:
            return {
                ...state,
                isFetching: false,
                isLoadAll: (action.posts)?(action.posts.length==0):false,
                items: (state&&state.items)?state.items.concat(action.recommendblogs):action.recommendblogs,

            };
        case RECEIVE_DETAIL:
            return action.detail;
        default:
            return state
    }
};



const getBlogList = (state = { }, action) => {
    switch (action.type) {
        case REQUEST_BLOG:
        case RECEIVE_BLOG:
            return blogs(state, action);
        default:
            return state;
    }
};

const getrecommendBlogList = (state = { }, action) => {
    switch (action.type) {
        case REQUEST_RECOMMENDBLOG:
        case RECEIVE_RECOMMENDBLOG:
            return  blogs(state, action);
        default:
            return state;
    }
};



const getBlogDetailByID = (state = { }, action) => {
    switch (action.type) {
        case RECEIVE_DETAIL:
            return  {
                ...state,
                [action.id]: blogs(state[action.id],action)
            };
        default:
            return state;
    }
};



//初始访问的页面
const initialNavState = MainNavigator.router.getStateForAction(
    MainNavigator.router.getActionForPathAndParams('Main')
);
function nav(state, action) {
    let nextState;

    switch (action.type) {
        case 'Main':
            nextState = MainNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            nextState = MainNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}




const rootReducer = combineReducers({
    getBlogDetailByID,
    getrecommendBlogList,
    getBlogList,
    nav
});

export default rootReducer
