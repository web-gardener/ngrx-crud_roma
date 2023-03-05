import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { PostsService } from '../services/post.service';
import { postsFetchAPISuccess, invokePostsAPI, invokeSaveNewPostAPI, saveNewPostAPISuccess, invokeDeletePostAPI, deletePostAPISuccess } from '../actions/post.actions';
import { selectPosts } from '../selectors/post.selectors';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { AppState } from 'src/app/shared/store/appstate';

@Injectable()
export class PostsEffect {
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  loadAllPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokePostsAPI),
      withLatestFrom(this.store.pipe(select(selectPosts))),
      mergeMap(([, postFormStore]) => {
        if (postFormStore.length > 0) {
          return EMPTY;
        }
        return this.postsService
          .get()
          .pipe(map((data) => postsFetchAPISuccess({ allPosts: data })));
      })
    )
  );
  

  saveNewPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewPostAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.postsService.create(action.newPost).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewPostAPISuccess({ newPost: data });
          })
        );
      })
    );
  });

  deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeletePostAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.postsService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return deletePostAPISuccess({ id: actions.id });
          })
        );
      })
    );
  });
}