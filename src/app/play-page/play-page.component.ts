import { Component, OnInit } from '@angular/core';

// import 'rxjs/add/observable/interval';
import {Observable} from '@reactivex/rxjs';
import '@reactivex/rxjs/dist/package/add/observable/interval';


@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {
  points = 500;
  increaser = 1;

  ngOnInit() {
    Observable.interval(200).subscribe(
      (interval) => {
        this.points += this.increaser * 0.1;
      }
    );
  }

  increase() {
    this.points++;
  }

  buy(multiplicator) {
    if (this.points > (this.increaser * 20)) {
      this.points = this.points - (this.increaser * 20);
      this.increaser = this.increaser * multiplicator;
    }
  }
}
