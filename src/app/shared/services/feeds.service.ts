import { Injectable } from '@angular/core';
import { Feed } from '../models/feed.model';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  feedsList: Feed[] = [
    {
      id: 1,
      userName: 'Dean Winchester',
      date: '8/12/2022',
      likes: 62,
      comments: 64,
      following: false,
    },
    {
      id: 2,
      userName: 'Jesse Pinkman',
      date: '8/5/2022',
      likes: 69,
      comments: 20,
      following: true,
    },
    {
      id: 3,
      userName: 'Theodore Bagwell',
      date: '8/12/2021',
      likes: 22,
      comments: 30,
      following: false,
    },
    {
      id: 4,
      userName: 'Walter White',
      date: '8/10/2022',
      likes: 44,
      comments: 20,
      following: true,
    },
    {
      id: 5,
      userName: 'Enola Nola',
      date: '8/2/2022',
      likes: 55,
      comments: 11,
      following: false,
    },
    {
      id: 6,
      userName: 'Supardi Bardi',
      date: '8/1/2022',
      likes: 300,
      comments: 122,
      following: true,
    },
    {
      id: 7,
      userName: 'Sarah Tancredi',
      date: '8/1/2022',
      likes: 507,
      comments: 42,
      following: false,
    },
    {
      id: 8,
      userName: 'Arthur Shelby',
      date: '8/1/2022',
      likes: 144,
      comments: 21,
      following: true,
    },
    {
      id: 9,
      userName: 'Vin Diesel',
      date: '8/4/2022',
      likes: 48,
      comments: 90,
      following: false,
    },
  ];

  // myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(this.feedsList);
  //   }, 300);
  // });

  constructor() {}

  fetchFeeds(filter: string) {
    return this.returnPromise(filter)
  }

  returnPromise(filter: string): Promise<any> {
    let filteredArr: any[] = [];

    if (filter === 'following') {

      filteredArr = this.feedsList.filter(obj => obj.following === true)
      console.log('filtered array following', filteredArr)

    } else if (filter === 'popular') {

      filteredArr = this.feedsList.sort(function(a, b) {
        return b.likes - a.likes
      })
      console.log('filtered array popular', filteredArr)

    } else if (filter === 'newest') {

      filteredArr = this.feedsList.sort(function(a, b){
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
      console.log('filtered array newest', filteredArr)

    } else {
      filteredArr = this.feedsList
      console.log('filtered array all', filteredArr)
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filteredArr);
      }, 300);
    });
  }
}
