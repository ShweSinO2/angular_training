import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

//interfaces
import { Post } from 'src/app/interfaces/interface';

//services
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assignment-day25',
  templateUrl: './assignment-day25.component.html',
  styleUrls: ['./assignment-day25.component.scss']
})
export class AssignmentDay25Component implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author'];
  postList: Post[] = [];
  dataList: Post[] = [];
  searchText = new FormControl('');

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getPostData();
    this.handleSearch();
  }

  getPostData() {
    this.apiSvc.getPostAJAX().subscribe({
      next: data => {
        this.postList = data;
        this.dataList = data;
      },
      error: err => {
        console.log('=== handle error ===');
        console.log(err);
      }
    });
  }

  handleSearch() {
    this.searchText.valueChanges
      .pipe(
        debounceTime(1000),
      ).subscribe((currentText: any) => {
        if (currentText) {
          this.dataList = this.postList
            .filter((eachPost: any) => {
              return eachPost.title.toLowerCase().indexOf(currentText.toLowerCase()) >= 0;
            });
        } else {
          this.dataList = this.postList;
        }
      });
  }
}

