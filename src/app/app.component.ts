import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { LoaderModel } from './models/loader-model';
import { Observable } from 'rxjs';
import { loaderSelector } from './loaderState/loader.selector';
import { changeStatus } from './loaderState/loader.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StateManagementDemo';
  ishidden!:Observable<boolean>
  constructor(private loaderState:Store<LoaderModel>){}
  ngOnInit(): void {
    this.ishidden=this.loaderState.select(loaderSelector)
  }
}
