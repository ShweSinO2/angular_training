import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-assignment-day27',
  templateUrl: './assignment-day27.component.html',
  styleUrls: ['./assignment-day27.component.scss']
})
export class AssignmentDay27Component implements OnInit {

  mmMovieList: any = [
    { name: 'From Bangkok to Mandalay', order_key: 1, type: "drama", description: "From Bangkok to Mandalay is the film cast by Myanmar and Thailand for the goodwill..." },
    { name: 'Mya Mya', order_key: 1, type: "horror", description: "Mya Mya is a 2020 Burmese horror film starring Thinzar Wint Kyaw, Min Taw Win, Dee Dee, and Win Tha Pyay Tun..." },
    { name: 'The Dark Cinema', order_key: 1, type: "comedy", description: "Four filmmaker friends rent a once grand but long decommissioned cinema which is steeped in a dark and horrific history that they are not fully aware of..." },
    { name: 'Downton Abbey: A New Era', order_key: 1, type: "drama", description: "Follow-up to the 2019 feature film in which the Crawley family and Downton staff received a royal visit from the King and Queen of Great Britain..." },
    { name: 'The Nun', order_key: 1, type: "horror", description: "The Nun is a 2018 American gothic supernatural horror film directed by Corin Hardy and written by Gary Dauberman, from a story by Dauberman and James Wan..." },
    { name: 'The Bad Guys', order_key: 1, type: "comedy", description: "Several reformed yet misunderstood criminal animals attempt to become good, with some disastrous results along the way..." },
    { name: 'Gangubai Kathiawadi', order_key: 1, type: "drama", description: "A woman becomes a powerful underworld figure." },
    { name: 'The Exorcist', order_key: 1, type: "horror", description: "The Exorcist is a bit of a safe pick, but then you wrestle with whether any other film on this list is more disturbing, more influential or just plain scarier than this movie..." },
    { name: 'This Is Us', order_key: 1, type: "comedy", description: "A heartwarming and emotional story about a unique set of triplets, their struggles and their wonderful parents" }
  ];
  allList: any = [];
  dramaList: any;
  horrorList: any;
  comedyList: any;

  constructor() {
    const hasMovie = JSON.parse(localStorage.getItem("movies") || "[]");
    if (hasMovie.length === 0)
      localStorage.setItem("movies", JSON.stringify(this.mmMovieList));
  }

  ngOnInit(): void {
    this.allList = JSON.parse(localStorage.getItem("movies") || "[]");
    this.getMovies();
  }

  getMovies() {
    this.dramaList = this.allList.filter((data: any) => {
      return data.type === 'drama';
    });
    this.dramaList.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);

    this.horrorList = this.allList.filter((data: any) => {
      return data.type === 'horror';
    });
    this.horrorList.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);

    this.comedyList = this.allList.filter((data: any) => {
      return data.type === 'comedy';
    });
    this.comedyList.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    this.applySortedChange();
  }

  applySortedChange() {
    if (this.dramaList.length > 0) {
      this.dramaList = this.dramaList.map((data: any, index: any) => {
        return Object.assign({ ...data, type: "drama", order_key: index + 1 });
      })
    }
    if (this.horrorList.length > 0) {
      this.horrorList = this.horrorList.map((data: any, index: any) => {
        return Object.assign({ ...data, type: "horror", order_key: index + 1 });
      })
    }
    if (this.comedyList.length > 0) {
      this.comedyList = this.comedyList.map((data: any, index: any) => {
        return Object.assign({ ...data, type: "comedy", order_key: index + 1 });
      })
    }
    this.allList = [...this.dramaList, ...this.horrorList, ...this.comedyList];
    localStorage.setItem("movies", JSON.stringify(this.allList));
  }
}
