import { Component, Input, OnInit } from '@angular/core';
import { Feed } from '../../models/feed.model';

@Component({
  selector: 'app-feeds-card',
  templateUrl: './feeds-card.component.html',
  styleUrls: ['./feeds-card.component.scss'],
})
export class FeedsCardComponent implements OnInit {
  @Input() feedObject!: Feed;


  feedsCount!: number;
  feedLiked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.feedChecker();
    this.feedsCount = this.feedObject.likes;
  }

  likeFeed(id: number) {
    if (this.feedChecker()) {
      this.unlikeFeed(id);
      return;
    }

    localStorage.setItem(`feed${id}`, 'liked');
    this.feedsCount++;
    this.feedLiked = true;
  }

  unlikeFeed(id: number) {
    localStorage.removeItem(`feed${id}`);
    this.feedsCount--;
    this.feedLiked = false;
  }

  feedChecker() {
    // Checks if a feed is liked in localstorage
    if (localStorage.getItem(`feed${this.feedObject.id}`)) {
      this.feedLiked = true
      return true;
    } else {
      return false;
    }
  }
}
