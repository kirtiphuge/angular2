import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {sample} from './components/adForm.component'
import {sampleTable} from './components/adTable.component'

@Component({
  selector: 'my-app',
  template: `
   <AdvertisementFormComponent
   (childEvent)="onshow($event)"></AdvertisementFormComponent>
<adTable 
[arrayAdList]="arrayAdList"></adTable>



`,
})

export class AppComponent  { 


public childData="";
public arrayAdList:any=[];

onshow(child : any){

   this.arrayAdList.push(child);
}

 }
