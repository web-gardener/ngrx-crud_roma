import { createFeatureSelector } from '@ngrx/store';
import { Posts } from '../models/post.model';

export const selectPosts = createFeatureSelector<Posts[]>('myPosts');