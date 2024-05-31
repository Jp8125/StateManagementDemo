import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { Store } from '@ngrx/store';
import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderModel } from '../models/loader-model';
import { changeStatus } from '../loaderState/loader.action';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private store:Store<LoaderModel>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    setTimeout(() => {
    this.store.dispatch(changeStatus({ status: true }))
    },0);
    return next.handle(request).pipe(
      tap({
        next:(req)=>{
          if(req instanceof HttpResponse){
            setTimeout(() => {
              this.store.dispatch(changeStatus({status:false}))
            },0);
          }
        },
        error:(err)=>{
          this.store.dispatch(changeStatus({status:false}))
        }
      }
      )
    )
  }
}
