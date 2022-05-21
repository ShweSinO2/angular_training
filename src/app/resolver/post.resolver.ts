import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

//services
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<boolean> {
  constructor(private apiSvc: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const paramId = route.params['id'];
    return this.apiSvc.getCurrentId(paramId);
  }
}
