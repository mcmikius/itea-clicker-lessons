import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  userName = '';
  isFirstScreen = false;

  auth() {
    this.isFirstScreen = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
