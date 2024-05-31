import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isloading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  constructor() { }
  inableLoader(){
    this.isloading.next(true)
  }
  disableLoader(){
    this.isloading.next(false)
  }
}
