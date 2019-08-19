import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itea-clicker-lessons';
  game = false;

  startGame() {
    this.game = true;

  }

  start() {
    this.game = false;
  }
}
