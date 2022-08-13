import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feed } from 'src/app/shared/models/feed.model';
import { User } from 'src/app/shared/models/user.model';
import { FeedsService } from 'src/app/shared/services/feeds.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentFilter: string = 'all'
  usersSub! : Subscription;

  usersList: User[] = []
  feedsList: Feed[] = []

  constructor(private usersService: UsersService, private feedsService: FeedsService) { }

  ngOnInit(): void {

    this.usersSub = this.usersService.fetchUsers().subscribe((res: any) =>{
      this.usersList = res.slice(0,7)
    })

    this.getFeeds()
  }

  setFilter(filter: string){
    this.currentFilter = filter
    this.getFeeds()
  }

  getFeeds(){
    this.feedsService.fetchFeeds(this.currentFilter).then((res: any) => {
      this.feedsList = res
    })
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

}
