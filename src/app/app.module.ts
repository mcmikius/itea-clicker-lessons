import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {GameContainerComponent} from './game-container/game-container.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GameContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
