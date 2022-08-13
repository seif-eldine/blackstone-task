import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { SavedPostsRoutingModule } from './saved-posts-routing.module';



@NgModule({
  declarations: [
    SavedPostsComponent
  ],
  imports: [
    CommonModule,
    SavedPostsRoutingModule
  ]
})
export class SavedPostsModule { }
