import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {
  @Input() userName;
  @Output() startView = new EventEmitter();
  startButton = true;
  timer = 5;
  counter = 0;
  gameResult = false;
  private label: string;

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    this.startButton = false;
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
        this.result();
      }
    }, 1000);
  }

  result() {
    if (this.counter < 30) {
      this.label = 'Starter';
    } else if (this.counter > 30 || this.counter < 60) {
      this.label = 'Professional';
    } else if (this.counter > 60) {
      this.label = 'God';
    }
    this.gameResult = true;
  }

  clicker() {
    this.counter++;
  }

  close() {
    this.startView.emit();
  }

  restart() {
    this.clear();
    this.gameResult = false;
  }

  clear() {
    this.label = '';
    this.timer = 5;
    this.counter = 0;
    this.startButton = true;
  }
}
