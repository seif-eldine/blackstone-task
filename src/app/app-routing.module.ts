import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full',
  },
  {
    path: "home",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "messages",
    loadChildren: () =>
      import("./views/messages/messages.module").then((m) => m.MessagesModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./views/profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "saved_posts",
    loadChildren: () =>
      import("./views/saved-posts/saved-posts.module").then((m) => m.SavedPostsModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./views/settings/settings.module").then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
