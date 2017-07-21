import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { sample } from './components/adForm.component';
import { sampleTable} from './components/adTable.component';
import {FilterPipe} from './components/pipe';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,sample,sampleTable,FilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
