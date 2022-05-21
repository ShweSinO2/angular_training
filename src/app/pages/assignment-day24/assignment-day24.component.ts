import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assignment-day24',
  templateUrl: './assignment-day24.component.html',
  styleUrls: ['./assignment-day24.component.scss']
})
export class AssignmentDay24Component implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'action'];
  postList = [];
  constructor(
    private apiSvc: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPostData();
  }

  goPostForm() {
    this.router.navigate(['/post']);
  }

  goPostFormID(id: number) {
    this.router.navigate(['/post/' + id]);
    console.log(id);
  }

  getPostData() {
    this.apiSvc.getAllPost().subscribe({
      next: data => {
        this.postList = data;
      },
      error: err => {
        console.log('=== handle error ===');
        console.log(err);
      }
    });
  }

  deletePostData(id: number) {
    this.apiSvc.deletePost(id).subscribe({
      next: retData => {
        this.getPostData();
      },
      error: err => {
        console.log('=== handle error ====')
        console.log(err)
      }
    })
  }
}
