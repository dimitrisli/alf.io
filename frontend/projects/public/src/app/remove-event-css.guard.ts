import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable} from 'rxjs';
import {removeAllCustomEventCss} from './shared/custom-css-helper';

@Injectable({
  providedIn: 'root'
})
export class RemoveEventCssGuard  {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      removeAllCustomEventCss();
      return true;
  }

}