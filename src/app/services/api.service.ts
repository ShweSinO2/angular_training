import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//interfaces
import { Post } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getCurrentId(paramId: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + paramId;
    return this.http.get(url);
  }

  getAllPost(): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.get(url);
  }

  deletePost(paramId: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + paramId;
    return this.http.delete(url);
  }

  addPost(data: Post): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.post(url, data);
  }

  updatePost(paramId: number, data: Post) {
    const url = this.apiUrl + '/posts/' + paramId;
    return this.http.put(url, data);
  }
}
