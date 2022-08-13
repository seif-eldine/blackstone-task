import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  suggestionsSub! : Subscription;

  suggestionsList: User[] = [

  ]

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.suggestionsSub = this.usersService.fetchUsers().subscribe((res: any) =>{
      this.suggestionsList = res.slice(7,10)
    })
  }

  ngOnDestroy(): void {
    this.suggestionsSub.unsubscribe();
  }
}
