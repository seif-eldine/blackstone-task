import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';

const routes: Routes = [
  {
    path: '',
    component: SavedPostsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedPostsRoutingModule { }
