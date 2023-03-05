import { createReducer, on } from '@ngrx/store';
import { Posts } from "../../store/models/post.model";
import { deletePostAPISuccess, filterPostsByName, postsFetchAPISuccess, saveNewPostAPISuccess } from '../actions/post.actions';
import { selectPosts } from '../selectors/post.selectors';

export const initialState: ReadonlyArray<Posts> = [];

export const postReducer = createReducer(
  initialState,
  on(postsFetchAPISuccess, (state, { allPosts }) => {
    return allPosts;
  }),
  on(filterPostsByName, (state, { name }) => {
    if (!name) {
      return initialState; // return the initial state if name is falsy (i.e., empty)
    }
    return state.filter(post => post.name.toLowerCase().includes(name.toLowerCase()));
  }),
  on(saveNewPostAPISuccess, (state, { newPost }) => {
    let newState = [...state];
    newState.unshift(newPost);
    return newState;
  }),
  on(deletePostAPISuccess, (state, { id }) => {
    let newState = state.filter((_) => _.id != id);
    return newState;
  }),
);