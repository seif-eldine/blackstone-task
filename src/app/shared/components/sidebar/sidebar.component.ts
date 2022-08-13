import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  icon: string = 'home'

  linksArr = [
    {icon: 'home', title: 'Home', link: '/home', active: true},
    {icon: 'message', title: 'Messages', link: '/messages', active: false},
    {icon: 'person', title: 'Profile', link: '/profile', active: false},
    {icon: 'bookmark', title: 'Saved Post', link: '/saved_posts', active: false},
    {icon: 'settings', title: 'Settings', link: '/settings', active: false},
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navTo(link: string){
    this.router.navigate([link])
  }

}
