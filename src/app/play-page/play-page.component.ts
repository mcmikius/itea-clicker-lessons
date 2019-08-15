import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {
  @Input()
  player: Player;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.player.workers.forEach(w => {
        this.player.money += w.addMoney();
      });
    }, 1000);
  }
}
