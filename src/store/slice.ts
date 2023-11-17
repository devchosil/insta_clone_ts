import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store';
import Data from '../dummydata/dummydata';

// Define a type for the slice state
interface postItem {
    id: number,
    userId: string,
    userName: string,
    intro: string,
    profile: string,
    pic: string,
    overlap: string,
    likeCount: number,
    content: string,
    comments: {
        id: number,
        유저id: string,
        comment: string,
    }[]

}

interface postItems extends Array<postItem>{}

// Define the initial state using that type
const initialState: postItems = [...Data]

export const postItemSlice = createSlice({
    name: 'posts',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addComment: (state, action) => {
            const { postId, comment } = action.payload;
            const postToUpdate = state.find(post => post.id === postId);

            if(postToUpdate) {
                postToUpdate.comments.push(comment);
            }
        },
        deleteComment: (state,action) => {
            const { postId, commentId } = action.payload;
            const postToUpdate = state.find(post => post.id === postId);

            postToUpdate.comments = postToUpdate.comments.filter(val => val.id !== commentId)
        },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const { addComment, deleteComment } = postItemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const posts = (state: RootState) => state.posts
export default postItemSlice.reducer