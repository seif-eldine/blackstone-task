import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FeedsCardComponent } from './components/feeds-card/feeds-card.component';
import { AccountRowComponent } from './components/account-row/account-row.component';
import { MatIconModule } from '@angular/material/icon';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    UsersListComponent,
    FeedsCardComponent,
    AccountRowComponent,
    SuggestionsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    UsersListComponent,
    FeedsCardComponent,
    AccountRowComponent,
    SuggestionsComponent
  ]
})
export class SharedModule { }
