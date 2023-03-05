import { createAction, props } from '@ngrx/store';
import { Posts } from '../models/post.model';

export const invokePostsAPI = createAction(
  '[Posts API] Invoke Posts Fetch API'
);

export const postsFetchAPISuccess = createAction(
  '[Posts API] Fetch API Success',
  props<{ allPosts: Posts[] }>()
);

export const invokeSaveNewPostAPI = createAction(
  '[Posts API] Invoke save new post api',
  props<{ newPost: Posts }>()
);

export const saveNewPostAPISuccess = createAction(
  '[Posts API] save new post api success',
  props<{ newPost: Posts }>()
);

export const invokeDeletePostAPI = createAction(
  '[Posts API] Invoke delete Post api',
  props<{ id:string }>()
);

export const deletePostAPISuccess = createAction(
  '[Posts API] deleted post api success',
  props<{ id:string }>()
);

export const filterPostsByName = createAction(
  '[Posts] Filter by Name',
  props<{ name: string }>()
);