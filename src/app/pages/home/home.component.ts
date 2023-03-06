import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { map } from 'rxjs'
import { setAPIStatus } from 'src/app/shared/store/app.action'
import { selectAppState } from 'src/app/shared/store/app.selector'
import { AppState } from 'src/app/shared/store/appstate'
import { Posts } from 'src/app/store/models/post.model'
import { filterPostsByName, invokeDeletePostAPI, invokePostsAPI, invokeSaveNewPostAPI } from '../../store/actions/post.actions'
import { selectPosts } from '../../store/selectors/post.selectors'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  /** NgModel variables */
  filterName: string = ""
  saveSuccess: boolean = false; // animation feedback

  /** Post form */
  postForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  submitted: boolean = false;

  /** List of posts */
  posts$ = this.store.pipe(select(selectPosts))
  
  constructor(
    private store: Store, // To use the store functions
    private appStore: Store<AppState> // To be able and manage the appstate on the store
    ) {}
    
  ngOnInit(): void {
    this.getPosts()
  }

  /**
   * getPosts - This invoke the posts to use
   */
  getPosts() {
    this.store.dispatch(invokePostsAPI())
    // this.posts$.subscribe(posts => console.log("posts",posts))
  }

  /**
   * savePost - This save the post generating a randomly string
   */
  savePost(){
    this.submitted = true
    if(!this.postForm.valid) return
    
    this.animationSuccess()

    const post: any = {
      id: Math.random().toString(36).substr(2, 9),
      name: this.postForm.value.name,
      description: this.postForm.value.description,
    };

    this.store.dispatch(invokeSaveNewPostAPI({ newPost: post }))
    this.submitted = false
    this.postForm.reset();
    this.updateStatus()
  }

  /**
   * deletePost - This delete the post from the db.json
   * @param id - It is a string generated randomly
   */
  deletePost(id:string){
    this.store.dispatch(invokeDeletePostAPI({id: id}))
    this.updateStatus()
  }

  /**
   * filterSearch - This filter by the value of "filterName" get it on the input
   */
  filterSearch() {
    if (this.filterName) {
      this.store.dispatch(filterPostsByName({ name: this.filterName }))
    }
  }

  /**
   * filterEmpty - This works when the user type on the input but when is empty
   * load again the original list
   */
  filterEmpty() {
    if (this.filterName === "") {
      this.store.dispatch(filterPostsByName({ name: "" }))
      this.store.dispatch(invokePostsAPI())
    }
  }

  // Helpers
  /**
   * updateStatus - This update the status of the app asked by ngrx structure 
   * when the process to add, delete or filter is ended 
   */
  updateStatus() {
    let apiStatus$ = this.appStore.pipe(select(selectAppState));

    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        )
      }
    })

  }

  /**
   * animationSuccess - This let me animate for a couple of seconds the bubbles 
   * when the user is creating a post succesfully
   */
  animationSuccess(){
    this.saveSuccess = true
    setTimeout(()=>{
      this.saveSuccess = false
    },4000)
  }
}