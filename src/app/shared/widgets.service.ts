import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Widget } from './widget.model';
import { Store } from '@ngrx/store';
import { AppStore } from '../app-store';
import {
  ADD_WIDGETS
} from './widgets.reducer';

const widgets = [
  {
    'id': 1,
    'name': 'Widget 1',
    'description': 'This is a description',
    'user': 1
  },
  {
    'id': 2,
    'name': 'Widget 2',
    'description': 'This is a description',
    'user': 3
  },
  {
    'id': 3,
    'name': 'Widget 3',
    'description': 'This is a lovely widget edited again!',
    'user': 2
  }
];

@Injectable()
export class WidgetsService {
  //widgets$: Observable<Widget[]> = Observable.of(widgets);
  widgets$: Observable<Widget[]> = this.store.select('widgets');

  // Inject the Store
  constructor(private http: Http, private store: Store<AppStore>) {
    // cause yolo, we are just feeding like this for now
    this.store.dispatch({type: ADD_WIDGETS, payload: widgets});

    // Get the widgets into the
    this.widgets$.subscribe(widgets => console.log('WIDGETS', widgets));
  }

}
