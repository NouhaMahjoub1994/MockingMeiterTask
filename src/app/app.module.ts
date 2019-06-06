import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import {ROUTING} from './app.routing';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ObservableComponent } from './observable/observable.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    DragDropModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
