

import {Component} from '@angular/core'

@Component({
    selector : 'AdvertisementFormComponent',

    template : `  TITLE<input #title type="text" name="title"><br><br>
               NAME <input #name type="text" name="name"><br><br>
               CATEGORY <select #cate>
            <option *ngFor="let cat of category">
            {{cat}}
            </option>
            </select><br><br>
               DESCRIPTION <input #description type="text" name="desc">
               <button type="button" (click)="getProduct(title.value,name.value,cate.value,description.value)">ADD PRODUCT</button>
               <table *ngFor="let obj of arr">
               <tr>
     
    <td>{{obj.title}} </td>
    <td>{{obj.name}} </td>
    <td>{{obj.cate}} </td>
    <td>{{description.desc}}</td><br>

    
 </tr> 
</table>`
})

export class SampleComponent { 
   arr:Array<SampleComponent>=[];
   title: String;
   name : String;
   cate:String;
   desc: String;
category:string[]=["Mobile","Car","Furniture"];
   getProduct(value1:any,value2:any,value3:any,value4:any)
   {
     let obj=new SampleComponent();
     obj.title=value1;
     obj.name=value2;
     obj.cate=value3;
     obj.desc=value4;

     this.arr.push(obj);


   }

}