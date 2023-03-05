import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffect } from '../store/effects/post.effects';

import { postReducer } from '../store/reducers/post.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('myPosts', postReducer),
    EffectsModule.forFeature([PostsEffect]),
    HttpClientModule,
  ],
})
export class PostsModule {}
