import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as favoriteReducer} from './favorites/favorites.slice.js';
import {reducer as cartReducer} from './cart/cart.slice.js';
import {reducer as bookReducer} from './books/book.slice.js';
import {reducer as loginReducer} from './login/login.slice.js';

const reducers = combineReducers({
    favorites: favoriteReducer,
    cart: cartReducer,
    books: bookReducer,
    login: loginReducer,
})

export const store = configureStore({
    reducer: reducers,

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch