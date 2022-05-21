import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//interfaces
import { Post } from 'src/app/interfaces/interface';

//services
import { ApiService } from 'src/app/services/api.service';

interface PostFormGroup extends FormGroup {
  value: Post;
  controls: {
    id: AbstractControl;
    title: AbstractControl;
    author: AbstractControl;
  }
}

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.scss']
})
export class PostControlComponent implements OnInit {

  public postActionForm: FormGroup;
  data: Post;

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.postActionForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]]
    }) as PostFormGroup
  }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data['user'];
    if (this.router.url !== '/post') {
      //to add value in input box
      this.postActionForm = this.fb.group({
        id: [''],
        title: [this.data['title'], [Validators.required]],
        author: [this.data['author'], [Validators.required]]
      }) as PostFormGroup
    }
  }

  public myError = (controlName: string, errorName: string) => {
    return this.postActionForm.controls[controlName].hasError(errorName);
  }

  savePostData() {
    if (this.router.url === '/post') {
      this.apiSvc.addPost(this.postActionForm.value).subscribe({
        next: result => {
          this.router.navigate(['/day24']);
        },
        error: err => {
          console.log('=== handle error ====')
          console.log(err)
        }
      });
    } else {
      this.apiSvc.updatePost(this.activatedRoute.snapshot.params['id'], this.postActionForm.value).subscribe({
        next: result => {
          this.router.navigate(['/day24']);
        },
        error: err => {
          console.log('=== handle error ====')
          console.log(err)
        }
      });
    }
  }
}
