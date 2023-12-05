import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as favoriteReducer} from './favorites/favorites.slice.js';
import {reducer as cartReducer} from './cart/cart.slice.js';
import {reducer as bookReducer} from './books/book.slice.js';
import {reducer as loginReducer} from './login/login.slice.js';
import {reducer as authorReducer} from './authors/authors.slice.js';
import {reducer as langReducer} from './languages/languages.slice.js';
import {reducer as genresReducer} from './genres/genres.slice.js';
import {reducer as formatsReducer} from './formats/formats.slice.js';

const reducers = combineReducers({
    favorites: favoriteReducer,
    cart: cartReducer,
    books: bookReducer,
    login: loginReducer,
    authors: authorReducer,
    languages: langReducer,
    genres: genresReducer,
    formats: formatsReducer
})

export const store = configureStore({
    reducer: reducers,

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch