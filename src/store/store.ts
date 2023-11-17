import { configureStore } from '@reduxjs/toolkit';
import { postItemSlice } from './slice';

export const store = configureStore({
    reducer: {
        posts: postItemSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch