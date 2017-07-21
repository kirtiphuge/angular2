

import {Component} from '@angular/core'
import {EventEmitter} from '@angular/core'

@Component({
    selector : 'AdvertisementFormComponent',

    template : `  TITLE<input #title type="text"  name="title"><br><br>
               NAME <input #name type="text" name="name"><br><br>
               CATEGORY <select #cate>
            <option *ngFor="let cat of category" >
            {{cat}}
            </option>
            </select><br><br>
               DESCRIPTION <input #description type="text" name="desc">
               <button type="button" #add (click)="onChange(title.value,name.value,cate.value,description.value)">ADD PRODUCT</button>
               `,
               outputs: ['childEvent']

})

export class sample { 
   
   title: String;
   name : String;
   cate:String;
   desc: String;

   public childEvent = new EventEmitter<sample>(); 
category:string[]=["Mobile","Car","Furniture"];
   onChange(value1:any,value2:any,value3:any,value4:any)
   {
     let obj=new sample();
     obj.title=value1;
     obj.name=value2;
     obj.cate=value3;
     obj.desc=value4;

    this.childEvent.emit(obj);  }


   }

