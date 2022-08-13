import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-row',
  templateUrl: './account-row.component.html',
  styleUrls: ['./account-row.component.scss'],
})
export class AccountRowComponent implements OnInit {
  @Input() account: any;

  userFollowed: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.followChecker();
  }

  followUser(id: number) {
    if (this.followChecker()) {
      this.unfollowUser(id);
      return;
    }

    localStorage.setItem(`user${id}`, 'followed');
    this.userFollowed = true;
  }

  unfollowUser(id: number) {
    localStorage.removeItem(`user${id}`);
    this.userFollowed = false;
  }

  followChecker() {
    // Checks if a user is followed in localstorage
    if (localStorage.getItem(`user${this.account.id}`)) {
      console.log("found user :", localStorage.getItem(`user${this.account.id}`), 'id is :', this.account.id)
      this.userFollowed = true;
      return true;
    } else {
      return false;
    }
  }
}
