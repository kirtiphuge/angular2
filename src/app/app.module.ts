import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { sample } from './components/adForm.component';
import { sampleTable} from './components/adTable.component';
import {FilterPipe} from './components/pipe';
import {adValidate} from './template_driven/adForm.component';
import { AppComponent }  from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductMdfFormComponent} from './model_driven/model.component';
import {ProductFormBuilderComponent} from './formbuilder/form_builder.component';
import {SampleComponent } from './products/product.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule ],
  declarations: [ AppComponent ,sample,sampleTable,FilterPipe,adValidate, ProductMdfFormComponent , ProductFormBuilderComponent , SampleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
